# Contributing

FrontBench Benchmark Kit is meant to improve through concrete critique. Good issues and pull requests should make the benchmark easier to reproduce, harder to game, or clearer to score.

## What To Contribute

Strong contributions usually fit one of these areas:

- scenario briefs with clearer product requirements
- rubric changes that reduce scoring ambiguity
- validator checks that catch real failures without blocking valid solutions
- new scenarios with realistic domain data and interaction requirements
- documentation that helps people reproduce the benchmark
- evidence that a rule unintentionally favors or penalizes a model family

## Scenario Guidelines

Scenarios should describe a product surface, not a visual style exercise. A good scenario includes:

- a specific product category and user context
- required data fields and realistic sample data volume
- required interactions that visibly change UI state
- mobile expectations at 390px width
- exclusions that prevent generic landing-page output

Avoid prompts that depend on private brands, real endorsements, copyrighted media, external APIs, or live data.

## Validator Guidelines

Validator checks should be deterministic and explainable. Prefer rules that can be inspected from the HTML source without depending on a specific browser environment.

Good validator checks catch contract-level issues:

- missing `<!doctype html>`
- external scripts, stylesheets, images, iframes, or network endpoints
- too few visible controls
- no sign of scripted UI updates
- obvious placeholder copy
- likely mobile horizontal overflow risks

Do not add checks that enforce one visual taste, CSS architecture, or implementation style unless the benchmark contract explicitly requires it.

## Pull Request Checklist

- The change is scoped to the benchmark kit.
- Public docs stay in sync when prompt, scenario, or rubric behavior changes.
- New rules explain what failure they catch.
- The validator still runs with `npm test`.
- No credentials, private URLs, production data, or private FrontBench app code are included.

## Private FrontBench Sync

This repository is the public benchmark protocol. Accepted changes may be copied manually into the private FrontBench application after review.

Please keep public pull requests self-contained. Do not assume access to the private app, voting system, database, deployment setup, or admin tools.
