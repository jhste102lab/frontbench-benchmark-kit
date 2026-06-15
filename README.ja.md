[English](README.md) | [한국어](README.ko.md) | [中文](README.zh.md) | [日本語](README.ja.md)

# FrontBench Benchmark Kit

FrontBench Benchmark Kit は、AI が生成したフロントエンドのプロダクト画面を評価するための、小さく再現可能なベンチマークプロトコルです。

見たいのは実務的な問いです。AI モデルに完成したフロントエンドを作らせたとき、実際に使えるプロダクト画面を作れるのか。それとも、汎用的なランディングページ、壊れやすいレイアウト、装飾的な mockup に留まるのか。

このリポジトリには、プロンプト契約、プロダクトシナリオ、採点 rubric、ローカル HTML バリデータが含まれています。非公開の FrontBench サービス、投票システム、管理機能、本番データ、デプロイ設定とは分離しています。

## 評価するもの

FrontBench は、モデルに 1 つの完全な `index.html` ファイルを返すよう求めます。生成されたページは、インライン HTML、CSS、JavaScript のみで動く必要があります。外部スクリプト、リモートメディア、フレームワーク、ビルドツール、分析ツール、API 呼び出しに依存してはいけません。

現在のベンチマークでは次の点を見ます。

- ファーストビューが使えるプロダクト画面になっているか
- 指定されたカテゴリと現実的なサンプルデータを反映しているか
- 操作すると見える UI 状態が変わるインタラクションがあるか
- デスクトップと 390px 幅のモバイルで使えるか
- 横スクロールや実行時エラーにつながるパターンを避けているか
- 単一 HTML ファイルの出力契約を守っているか

目的は特定のデザインを再現できるかを測ることではありません。プロダクト brief を受け取ったモデルが、どれだけ安定して一貫した自己完結型のフロントエンドに変換できるかを比較することです。

## リポジトリ構成

```text
docs/benchmark/
  prompt-v5.md                 現在のグローバルプロンプト契約
  prompt-v4.md                 以前のゴール主導プロンプト契約
  prompt-v3.md                 以前の詳細なプロンプト契約
  rubric-v1.md                 100 点満点の評価 rubric
  scenarios/                   プロダクトシナリオ brief

scripts/
  validate-html.mjs            ローカル HTML 契約バリデータ
  lib/html-contract.mjs        再利用可能な検証 helper

schemas/
  benchmark-result.schema.json 推奨される結果形式
```

## シナリオ

現在のシナリオは、よくある 4 つのフロントエンドカテゴリを扱います。

- `invoicepulse-dashboard`: B2B 売掛金管理 dashboard
- `commerce-storefront`: キュレーション型 commerce storefront
- `community-hub`: ログイン済みユーザー向け community product
- `brand-site`: プレミアムオーディオ製品の brand site

現在の v5 シナリオは意図的によりオープンです。広いユーザー課題だけを示し、プロダクトコンセプト、ドメイン詳細、レイアウト、インタラクションモデルは生成モデルに委ねます。これにより、プロダクト発想、視覚的階層、インタラクション設計、フロントエンド実装力を比較しやすくします。

## 使い方

現在のプロンプト契約と 1 つのシナリオ brief を組み合わせます。

```bash
cat docs/benchmark/prompt-v5.md
cat docs/benchmark/scenarios/invoicepulse-dashboard-v5.md
```

モデルには完全な HTML 文書だけを返すよう依頼します。応答を `index.html` として保存し、検証します。

```bash
npm run validate -- ./index.html
```

バリデータは pass/fail レポートと JSON サマリーを出力します。単一ファイル契約、外部リソース利用、可視コントロール、スクリプトによるインタラクションの手がかり、モバイルレイアウトの手がかり、セマンティック構造、placeholder 文言を決定的な静的チェックで確認します。

このバリデータは保守的なスクリーニングツールです。rubric に基づく人間のレビューを置き換えるものではありません。

## 採点

rubric は 100 点満点です。

- Product Fit: 25
- Visual Design: 25
- Interaction: 20
- Technical Quality: 20
- Benchmark Compliance: 10

手動採点には [docs/benchmark/rubric-v1.md](docs/benchmark/rubric-v1.md) を使います。バリデータは契約違反を見つける助けになりますが、最終的な採点ではプロダクト判断、視覚的階層、インタラクション品質を見る必要があります。

## 結果形式

自分の実行結果を公開する場合は、[schemas/benchmark-result.schema.json](schemas/benchmark-result.schema.json) をモデル、シナリオ、コスト、スコア、検証情報の安定した形式として使えます。

この schema は意図的に小さくしています。非公開の FrontBench アプリを採用しなくても、異なる評価者が結果を比較できるようにするためです。

## コントリビューション

有用な貢献には次のようなものがあります。

- より鋭いシナリオ brief
- より判断しやすい採点文言
- 実際の benchmark 失敗を捕捉するバリデータチェック
- 結果 schema の改善
- 現実的なサンプルデータ要件を持つ新しいプロダクトカテゴリ
- 特定のモデル系統に有利に働くプロンプトやルールへの根拠ある指摘

pull request を開く前に [CONTRIBUTING.md](CONTRIBUTING.md) を読んでください。

## FrontBench との関係

この公開 kit は benchmark プロトコルです。非公開の FrontBench アプリケーションは、このプロトコルの特定バージョンを取り込み、ライブ投票、管理機能、デプロイ、運用データを扱います。

ここで受け入れた変更は、レビュー後に手動で非公開アプリケーションへコピーします。公開された方法論への協力を可能にしつつ、本番システムの内部構造を公開しないための運用です。

## ライセンス

MIT License。詳しくは [LICENSE](LICENSE) を参照してください。
