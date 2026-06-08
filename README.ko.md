[English](README.md) | [한국어](README.ko.md) | [中文](README.zh.md) | [日本語](README.ja.md)

# FrontBench Benchmark Kit

FrontBench Benchmark Kit은 AI가 만든 프론트엔드 화면을 비교하기 위한 작고 재현 가능한 벤치마크 프로토콜입니다.

핵심 질문은 단순합니다. AI 모델에게 완성된 프론트엔드를 만들라고 했을 때, 실제로 사용할 수 있는 제품 화면을 만드는가, 아니면 그럴듯한 랜딩 페이지나 깨지기 쉬운 레이아웃에 머무는가?

이 저장소에는 프롬프트 계약, 제품 시나리오, 점수 루브릭, 로컬 HTML 검증기가 들어 있습니다. 실제 FrontBench 서비스의 투표 시스템, 관리자 기능, 운영 데이터, 배포 설정과는 분리되어 있습니다.

## 무엇을 평가하나

FrontBench는 모델에게 하나의 완전한 `index.html` 파일을 반환하도록 요구합니다. 결과물은 인라인 HTML, CSS, JavaScript만 사용해야 하며 외부 스크립트, 원격 이미지, 프레임워크, 빌드 도구, 분석 도구, API 호출에 의존하면 안 됩니다.

현재 벤치마크는 다음을 봅니다.

- 첫 화면이 실제 제품 화면으로 기능하는가
- 요청한 제품 카테고리와 현실적인 샘플 데이터를 반영하는가
- 사용자가 조작하면 UI가 실제로 바뀌는 인터랙션이 있는가
- 데스크톱과 390px 모바일 폭에서 모두 사용할 수 있는가
- 가로 스크롤이나 런타임 오류를 피하는가
- 단일 HTML 파일 출력 계약을 지키는가

목표는 특정 디자인을 얼마나 비슷하게 복제하는지 보는 것이 아닙니다. 제품 요구사항을 받았을 때 모델이 얼마나 안정적으로 일관된 프론트엔드 결과물을 만드는지 비교하는 것입니다.

## 저장소 구조

```text
docs/benchmark/
  prompt-v3.md                 현재 전역 프롬프트 계약
  rubric-v1.md                 100점 기준 평가 루브릭
  scenarios/                   제품 시나리오 문서

scripts/
  validate-html.mjs            로컬 HTML 계약 검증기
  lib/html-contract.mjs        재사용 가능한 검증 헬퍼

schemas/
  benchmark-result.schema.json 권장 결과 형식
```

## 시나리오

현재 시나리오는 네 가지 제품 유형을 다룹니다.

- `invoicepulse-dashboard`: B2B 미수금 관리 대시보드
- `commerce-storefront`: 큐레이션 커머스 스토어프론트
- `community-hub`: 로그인한 사용자를 위한 커뮤니티 제품
- `brand-site`: 프리미엄 오디오 제품 브랜드 사이트

각 시나리오는 의도적으로 구체적입니다. 요구사항이 모호하면 모델은 쉽게 일반적인 히어로 섹션이나 장식적인 화면으로 빠집니다. 이 벤치마크는 현실적인 제품 화면, 구체적인 샘플 데이터, 화면 상태를 바꾸는 인터랙션을 요구합니다.

## 시작하기

현재 프롬프트 계약과 시나리오 하나를 함께 사용합니다.

```bash
cat docs/benchmark/prompt-v3.md
cat docs/benchmark/scenarios/invoicepulse-dashboard-v3.md
```

모델에게 완전한 HTML 문서만 반환하도록 요청합니다. 응답을 `index.html`로 저장한 뒤 검증합니다.

```bash
npm run validate -- ./index.html
```

검증기는 통과 여부와 JSON 요약을 출력합니다. 단일 파일 계약, 외부 리소스 사용, 보이는 컨트롤, 스크립트 기반 인터랙션 단서, 모바일 레이아웃 단서, 시맨틱 구조, placeholder 문구 등을 정적으로 확인합니다.

이 검증기는 보수적인 선별 도구입니다. 루브릭에 따른 최종 평가는 제품 판단, 시각적 위계, 인터랙션 품질을 함께 봐야 합니다.

## 점수 기준

루브릭은 총 100점입니다.

- Product Fit: 25
- Visual Design: 25
- Interaction: 20
- Technical Quality: 20
- Benchmark Compliance: 10

수동 평가는 [docs/benchmark/rubric-v1.md](docs/benchmark/rubric-v1.md)를 기준으로 합니다. 검증기는 계약 위반을 찾는 데 도움이 되지만, 최종 점수는 사람이 화면을 보고 판단해야 합니다.

## 결과 형식

직접 실행 결과를 공개한다면 [schemas/benchmark-result.schema.json](schemas/benchmark-result.schema.json)을 기준 형식으로 사용할 수 있습니다.

이 스키마는 의도적으로 작게 유지했습니다. FrontBench 비공개 앱을 쓰지 않아도 모델, 시나리오, 비용, 점수, 검증 정보를 비교할 수 있게 하기 위해서입니다.

## 기여하기

다음과 같은 기여를 환영합니다.

- 더 명확한 시나리오 문서
- 더 판단하기 쉬운 점수 기준
- 실제 실패 사례를 잡아내는 검증 규칙
- 결과 스키마 개선
- 현실적인 샘플 데이터가 포함된 새 제품 카테고리
- 특정 모델 계열에 유리하게 작동하는 규칙이나 프롬프트에 대한 근거 있는 지적

PR을 열기 전에 [CONTRIBUTING.md](CONTRIBUTING.md)를 읽어 주세요.

## FrontBench와의 관계

이 공개 키트는 벤치마크 프로토콜입니다. 비공개 FrontBench 애플리케이션은 이 프로토콜의 특정 버전을 가져다 쓰며, 실시간 투표, 관리자 기능, 배포, 운영 데이터를 담당합니다.

여기서 받아들인 변경사항은 검토 후 수동으로 비공개 애플리케이션에 반영합니다. 공개 협업은 가능하게 하면서 운영 내부 구조는 분리하기 위한 방식입니다.

## 라이선스

MIT License. 자세한 내용은 [LICENSE](LICENSE)를 참고하세요.
