# Syncing With A Private FrontBench App

The recommended workflow is intentionally manual at first.

Use this public repository as the source for benchmark protocol changes. Use the private FrontBench application as the consumer that imports selected versions after review.

## Suggested Flow

1. Review and merge a public pull request in this repository.
2. Tag or note the accepted version.
3. Copy the changed benchmark files into the private application.
4. Run the private app's validation gates.
5. Re-run affected benchmark scenarios if the prompt, rubric, or scenario contract changed.
6. Record the imported version in the private app.

## Files Usually Copied

```text
docs/benchmark/prompt-v5.md
docs/benchmark/prompt-v4.md
docs/benchmark/prompt-v3.md
docs/benchmark/rubric-v1.md
docs/benchmark/scenarios/
scripts/lib/html-contract.mjs
scripts/validate-html.mjs
schemas/benchmark-result.schema.json
```

## Files That Should Stay Private

The public kit should not receive:

- voting APIs
- admin tools
- production database migrations
- Cloudflare middleware or deployment secrets
- generated vote logs
- private benchmark results
- provider tokens
- local environment files

Manual syncing keeps the collaboration surface small and avoids accidental exposure of operational code.
