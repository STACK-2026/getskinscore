# Sitemap filter policy — 2026-04-29

## Current state (before change)

```
Total <loc> in sitemap-0.xml : 631
  /product/ (en)              :   28  (catalog: 2699 built — 1.0% included)
  /brand/ (en)                :  201  (catalog: 1020 built — 19.7% included)
  /ingredient/ (en)           :   11  (catalog:  103 built — 10.7% included)
  /best/ (en)                 :   51  (catalog:   51 built — 100% included)
  /fr/* mirrors                :  +492
  blog (en/fr)                :   15
```

The aggressive filter was correctly applied as a "thin programmatic pages" guard (karmastro pattern). Without internal content per page, having 7900 sitemap entries would invite "Crawled - currently not indexed" labels en masse.

## Change applied (Option 2)

**Loosen brand filter** from `≥ 3 products` to `≥ 1 product`. Keep product + ingredient filters unchanged.

```diff
-  return new Set([...counts.entries()].filter(([, n]) => n >= 3).map(([s]) => s));
+  return new Set([...counts.entries()].filter(([, n]) => n >= 1).map(([s]) => s));
```

## Rationale

1. **Brand pages now have real content.** Verified live: `/brand/nivea/` renders 107 product links (Task 3 verification, commit `b04c338` already deployed). Brand pages with even 1 product still display: H1, average grade, grade distribution chart, the product card with link, JSON-LD Brand schema, and a 200-word verdict paragraph.

2. **Product filter stays restrictive.** Non-"star" products (`!enrichedProductIds.has(...)`) lack the deep editorial copy that distinguishes them from a thin scrape. Index bloat risk remains real.

3. **Ingredient filter stays restrictive.** Same reasoning — only `deepIngredientIds` ingredients have the long-form INCI explanation that makes them worth indexing individually.

## Expected impact

Brand pages in sitemap: 201 → ~1020 (+819 EN, +819 FR). Total sitemap roughly doubles to ~2270 entries.

## Roll-back

Single-line revert. If GSC starts flagging "Crawled - currently not indexed" or "Discovered - currently not indexed" on these new brand pages within 14 days, revert to `>= 3`. Re-evaluate when Googlebot crawl volume recovers (target: > 5000 hits/day, currently 25 hits/day on 2026-04-29).
