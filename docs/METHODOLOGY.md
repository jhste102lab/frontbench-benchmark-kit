# Methodology

FrontBench evaluates AI-generated frontend artifacts under a constrained single-file contract.

The benchmark deliberately asks for `index.html` instead of a framework project. That keeps the comparison focused on product judgment, interface composition, responsive layout, interaction behavior, and basic technical discipline rather than package setup or framework familiarity.

## Generation Contract

Each model receives:

- the global prompt contract
- one product scenario
- the rubric for awareness

The model must return only one complete HTML document. The document must begin with `<!doctype html>` and include all HTML, CSS, and JavaScript inline.

External scripts, external stylesheets, remote images, iframes, analytics, trackers, APIs, and build tools are out of scope. This keeps artifacts portable and reduces hidden dependencies.

## Review Flow

A typical review has three layers:

1. Contract validation with `npm run validate -- artifact.html`
2. Manual rubric scoring using `docs/benchmark/rubric-v1.md`
3. Comparative review across models for the same scenario

The validator is intentionally not the final judge. It catches obvious contract failures and weak interaction signals. Human scoring is still needed for visual quality, product fit, information hierarchy, and whether interactions feel plausible.

## Why The Scenarios Are Specific

Generic prompts often reward generic screens. The current scenario briefs require concrete product surfaces, realistic sample data, and explicit interactions because those requirements reveal whether a model can reason about a product workflow.

The benchmark currently includes a SaaS dashboard, commerce storefront, community hub, and product brand site. These categories cover different pressures: operational density, shopping decisions, social content, and conversion-focused storytelling.

## Known Limits

FrontBench does not measure long-term maintainability of a real application codebase. It does not evaluate backend integration, design system adoption, accessibility audits at production depth, or multi-page information architecture.

It measures a narrower but useful capability: whether a model can produce a coherent, self-contained frontend product screen from a detailed brief.
