# Content guard — getskinscore

## Role

`scripts/content_guard.py` is the STACK-2026 fleet-wide content gate. It catches the
recurring blog-auto defects **before** they reach production:

1. tool-call / generation artifacts leaked into content (`</content>`, `</invoke>`,
   `<function_calls>`, `<|...|>`, …) — these have broken whole builds across the parc.
2. duplicated frontmatter echoed into the body.
3. meta length: `title > 65` (flag-only), `description > 180` (clamped in `--fix`).
4. a top-level `# ` H1 inside the body => double H1 (the blog layout already emits the
   title as the page H1).
5. mojibake (`Ã©`, `â€™`, `Â`, `ðŸ…`).
6. em-dash / en-dash in body (parc YMYL rule).

## Why

The blog-auto pipeline occasionally leaks generation artifacts, echoes frontmatter,
ships over-long meta, or emits a second `#` H1. Any of these can degrade SEO or break
the Astro build. This guard is the deterministic backstop.

## Scope: blog only (important)

The guard is scoped to `site/src/content/blog`. The blog layout
(`src/layouts/BlogLayout.astro`) emits the article title as the page `<h1>`, so a body
`# ` heading is a genuine double-H1. The `pages/` collection is rendered by
`src/pages/[slug].astro`, which does **not** emit an H1 — its body `# About SkinScore`
is the legitimate single H1, so `pages/` must not be gated by the BODY_H1 rule.

## FAQ on this site

FAQPage JSON-LD is **derived from the article body**, not a frontmatter field.
`BlogLayout.astro` (`extractFaq`) finds a `## FAQ` / `## Frequently Asked Questions`
section and turns each `### Question` heading + following answer into a `Question` /
`Answer` pair. Note: a `**Bold question?**` paragraph is **not** picked up — questions
must be `### ` headings. The `cosrx-guide-best-products-kbeauty` article had its FAQ in
bold-paragraph form (so `schemaFaq: true` produced no JSON-LD); its questions were
converted to `### ` headings to emit FAQPage.

## Prebuild (local blocking gate)

`site/package.json` wires:

- `guard:content` → `bash ../scripts/guard_content.sh`
- `prebuild` → `npm run guard:content` (npm runs it automatically before `build`)

`scripts/guard_content.sh`:

- checks the `.md`/`.mdx` changed in the **last commit** (`git diff HEAD~1 HEAD`),
  restricted to `site/src/content/blog`;
- falls back to a **full scan** of `site/src/content/blog` when there is no diff;
- **skips cleanly** (exit 0) when `python3` is unavailable so the build never breaks.

A blocking defect makes `prebuild` exit non-zero, which aborts `npm run build`.

## Re-verify

```bash
python3 scripts/content_guard.py --check site/src/content/blog   # full scan
python3 scripts/content_guard.py --fix  site/src/content/blog    # non-destructive backfill
cd site && npm run build                                          # prebuild gate then build
```
