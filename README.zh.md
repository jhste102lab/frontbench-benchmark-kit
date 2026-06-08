[English](README.md) | [한국어](README.ko.md) | [中文](README.zh.md) | [日本語](README.ja.md)

# FrontBench Benchmark Kit

FrontBench Benchmark Kit 是一个小型、可复现的协议，用来评估 AI 生成的前端产品界面。

它关注一个实际问题：当我们要求 AI 模型构建完整前端时，模型是否能产出可用的产品界面，还是只会生成通用的落地页、脆弱的布局或装饰性的 mockup？

本仓库包含提示词契约、产品场景、评分 rubric 和本地 HTML 校验器。它与私有的 FrontBench 服务、投票系统、管理工具、生产数据和部署配置保持分离。

## 评估内容

FrontBench 要求模型返回一个完整的 `index.html` 文件，并且只使用内联 HTML、CSS 和 JavaScript。生成页面不能依赖外部脚本、远程媒体、框架、构建工具、分析工具或 API 请求。

当前 benchmark 关注：

- 首屏是否是可用的产品界面
- 是否符合指定产品类别，并包含真实感较强的样例数据
- 是否有会改变可见 UI 状态的交互控件
- 是否同时适配桌面端和 390px 移动端宽度
- 是否避免横向滚动和容易导致运行时错误的模式
- 是否遵守单文件 HTML 输出契约

目标不是衡量模型能否复刻某个特定设计，而是比较模型把产品 brief 转换成完整、自包含前端界面的稳定性。

## 仓库结构

```text
docs/benchmark/
  prompt-v3.md                 当前全局提示词契约
  rubric-v1.md                 100 分评分 rubric
  scenarios/                   产品场景 brief

scripts/
  validate-html.mjs            本地 HTML 契约校验器
  lib/html-contract.mjs        可复用校验 helper

schemas/
  benchmark-result.schema.json 推荐结果格式
```

## 场景

当前场景覆盖四类常见前端产品：

- `invoicepulse-dashboard`：B2B 应收账款管理 dashboard
- `commerce-storefront`：精选电商 storefront
- `community-hub`：登录态社区产品
- `brand-site`：高端音频产品品牌站

每个场景都刻意写得具体。过于模糊的提示词很容易让模型退回到通用 hero 区块。这里的 brief 要求模型构建真实的产品界面、具体的样例数据，以及会改变可见状态的交互。

## 快速开始

将当前提示词契约和一个场景 brief 一起使用：

```bash
cat docs/benchmark/prompt-v3.md
cat docs/benchmark/scenarios/invoicepulse-dashboard-v3.md
```

要求模型只返回完整 HTML 文档。把响应保存为 `index.html`，然后运行校验：

```bash
npm run validate -- ./index.html
```

校验器会输出通过情况和 JSON 摘要。它会对单文件契约、外部资源、可见控件、脚本交互线索、移动端布局线索、语义结构和 placeholder 文案进行确定性的静态检查。

这个校验器是保守的筛选工具，不能替代基于 rubric 的人工评审。

## 评分

rubric 总分为 100 分：

- Product Fit: 25
- Visual Design: 25
- Interaction: 20
- Technical Quality: 20
- Benchmark Compliance: 10

人工评分请使用 [docs/benchmark/rubric-v1.md](docs/benchmark/rubric-v1.md)。校验器有助于发现契约违规，但最终评分仍需要判断产品合理性、视觉层级和交互质量。

## 结果格式

如果你发布自己的运行结果，可以使用 [schemas/benchmark-result.schema.json](schemas/benchmark-result.schema.json) 作为模型、场景、成本、分数和校验信息的稳定格式。

该 schema 刻意保持精简，方便不同评测者在不采用私有 FrontBench 应用的情况下比较结果。

## 参与贡献

有价值的贡献包括：

- 更清晰的场景 brief
- 更容易执行的评分语言
- 能捕捉真实 benchmark 失败的校验规则
- 结果 schema 改进
- 带有真实感样例数据的新产品类别
- 关于某条提示词或规则可能偏向某类模型的证据

提交 pull request 前，请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 与 FrontBench 的关系

这个公开 kit 是 benchmark 协议。私有 FrontBench 应用会消费该协议的特定版本，并负责实时投票、管理、部署和运营数据。

本仓库接受的修改会经过人工审查后再复制到私有应用中。这样可以开放方法论协作，同时避免暴露生产系统内部细节。

## 许可证

MIT License。详见 [LICENSE](LICENSE)。
