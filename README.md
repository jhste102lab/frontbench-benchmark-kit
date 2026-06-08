[English](README.md) | [한국어](README.ko.md) | [中文](README.zh.md) | [日本語](README.ja.md)

# FrontBench Benchmark Kit

FrontBench Benchmark Kit is a small, reproducible protocol for evaluating AI-generated frontend product screens.

It focuses on a practical question: when an AI model is asked to build a complete frontend, does it produce a usable product interface, or does it fall back to a generic landing page, fragile layout, or decorative mockup?

The kit includes prompt contracts, product scenarios, a scoring rubric, and a local HTML validator. It is intentionally separate from the private FrontBench service, voting system, admin tools, production data, and deployment configuration.

## What This Evaluates

FrontBench asks models to return one complete `index.html` file using inline HTML, CSS, and JavaScript. The generated page must work without external scripts, remote media, frameworks, build tools, analytics, or API calls.

The current benchmark checks whether the result:

- presents a usable product surface in the first viewport
- matches the requested product category with realistic sample data
- includes interactive controls that visibly update the UI
- remains usable at desktop and 390px mobile widths
- avoids horizontal overflow and runtime-breaking patterns
- follows a single-file HTML output contract

The goal is not to measure whether a model can recreate a specific design. The goal is to compare how reliably models can turn a product brief into a coherent, self-contained frontend.

## Repository Structure

```text
docs/benchmark/
  prompt-v3.md                 current global prompt contract
  rubric-v1.md                 100-point evaluation rubric
  scenarios/                   product scenario briefs

scripts/
  validate-html.mjs            local HTML contract validator
  lib/html-contract.mjs        reusable validation helpers

schemas/
  benchmark-result.schema.json suggested result format
```

## Scenarios

The current scenario set covers four common frontend categories:

- `invoicepulse-dashboard`: a B2B accounts receivable dashboard
- `commerce-storefront`: a curated shopping storefront
- `community-hub`: a logged-in community product
- `brand-site`: a premium audio product brand site

Each scenario is intentionally specific. Vague prompts make it too easy for models to hide behind generic hero sections. These briefs require realistic product surfaces, concrete sample data, and interactions that change visible state.

## Quick Start

Use the current prompt contract with one scenario brief:

```bash
cat docs/benchmark/prompt-v3.md
cat docs/benchmark/scenarios/invoicepulse-dashboard-v3.md
```

Ask a model to produce only the complete HTML document. Save the response as `index.html`, then validate it:

```bash
npm run validate -- ./index.html
```

The validator prints a pass/fail report and a JSON summary. It performs deterministic static checks for the single-file contract, external resource usage, visible controls, scripted interaction hooks, mobile layout hints, semantic structure, and placeholder copy.

The validator is deliberately conservative. It is a screening tool, not a replacement for human review against the rubric.

## Scoring

The rubric is worth 100 points:

- Product Fit: 25
- Visual Design: 25
- Interaction: 20
- Technical Quality: 20
- Benchmark Compliance: 10

Use [docs/benchmark/rubric-v1.md](docs/benchmark/rubric-v1.md) for manual scoring. The validator can help identify contract failures, but final scoring should still consider product judgment, visual hierarchy, and interaction quality.

## Result Format

If you publish your own runs, use [schemas/benchmark-result.schema.json](schemas/benchmark-result.schema.json) as a stable shape for model, scenario, cost, score, and validation metadata.

The schema is intentionally minimal so different evaluators can compare results without adopting the private FrontBench app.

## Contributing

Useful contributions include:

- sharper scenario briefs
- clearer scoring language
- validator checks that catch real benchmark failures
- result schema improvements
- new product categories with realistic sample data requirements
- evidence that a prompt or rule unintentionally favors a model family

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Relationship To FrontBench

The public kit is the benchmark protocol. The private FrontBench application consumes selected versions of this protocol and handles live voting, administration, deployment, and operational data.

Accepted changes here are reviewed manually before being copied into the private application. This keeps public collaboration useful without exposing production internals.

## License

MIT License. See [LICENSE](LICENSE).
