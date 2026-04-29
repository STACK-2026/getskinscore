# Pre-flight Audit Findings — 2026-04-29

Source: read-only audit subagent, dispatched before any fix.

## Helper name corrections (apply everywhere in the plan)

| Plan reference | Actual name in repo |
|---|---|
| `localePrefix` (string template) | `localizedPath(path, locale)` (function call) |
| `gradeColor(grade)` | exists at `site/src/utils/config.ts:20` (returns `var(--grade-x)`) |
| `gradeClass(grade)` | exists, used in templates for class names |

**Required pattern in new Astro markup:**
```astro
<a href={localizedPath(`/product/${p.id}`, locale)}>...</a>
<a href={localizedPath(`/brand/${slug}`, locale)}>...</a>
<a href={localizedPath(`/best/${id}`, locale)}>...</a>
```

## Already-done work

These tasks need **verification only** — the code already exists.

### Task 4: product/[slug].astro — alternatives + brand link
- **Brand back-link:** present at line 123 (uses inline slugification `product.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-')`)
- **Alternatives section:** present in closing block, `alternatives.map((alt) => <a href={localizedPath(...)}>)` rendering up to 4 same-type same-(scoreNumeric ± 10) products
- **Verification command:**
  ```bash
  cd ~/stack-2026/getskinscore/site
  PRODUCT=$(ls dist/product/ | head -1)
  grep -c 'href="/product/' "dist/product/$PRODUCT/index.html"   # expect ≥ 1
  grep -c 'href="/brand/' "dist/product/$PRODUCT/index.html"     # expect ≥ 1
  ```
- **Decision:** if both grep counts ≥ 1 → mark Task 4 complete with no code change. Otherwise apply minimal patch.

### Task 6: encyclopedia.astro — ingredient links
- **Already rendered:** lines 59–77 wrap each ingredient in `<a href={localizedPath(...)}>`
- **Approx count:** 295 internal links per audit
- **Verification command:**
  ```bash
  cd ~/stack-2026/getskinscore/site
  grep -c 'href="/ingredient/' dist/encyclopedia/index.html
  ```
- **Decision:** if count > 200 → mark Task 6 complete with no code change.

## Real gaps (apply code changes)

### Task 3 — brand/[slug].astro
- `brandProducts` variable already computed at line 18 of getStaticPaths
- **Missing:** rendering loop. Current page has 0 `<a href="/product/...">`
- **Fix:** add a section before `</BaseLayout>` that maps `brandProducts` to `<a href={localizedPath(`/product/${p.id}`, locale)}>`
- Helpers already imported in this file: `gradeClass`, `localizedPath`, `getLocale`, `t`, `tr`
- Use `gradeClass(p.score)` (NOT `gradeColor` — keep existing class-based pattern for consistency with `card card-glow` style elsewhere)

### Task 5 — rankings.astro
- **Missing:** category hub section linking to `/best/<concern>/` and `/best/<type>-<concern>/`
- `siteConfig.concerns` (8 entries) and `siteConfig.productTypes` (10 entries) are NOT yet imported into rankings.astro
- Label shape is `{ id, label: { en: string, fr: string } }` — render with `c.label[locale]`
- Note: `[combo].astro` only generates static paths for combos with at least 1 matching product — the simple `/best/<concern>/` will work because every concern has products in the catalog (verified via getStaticPaths logic)

## Reference signatures

```ts
// site/src/i18n/t.ts
export function getLocale(url: URL): Locale
export function localizedPath(path: string, locale: Locale): string

// site/src/utils/config.ts
export function gradeColor(grade: string): string  // returns "var(--grade-a)" etc.
export function gradeClass(grade: string): string  // returns class name token

// site/src/data/products.ts
export interface Product {
  id: string; name: string; brand: string; type: ProductType;
  score: ScoreGrade; scoreNumeric: number;
  subScores: { efficacy, safety, comedogenicity, transparency, skinTypeFit: ScoreGrade };
  concerns: string[]; bestFor: SkinType[]; ingredients: ProductIngredient[];
  // ...
}
export const products: Product[]
export function getUniqueBrands(): string[]
export function brandSlug(brand: string): string
```

## Git state

- Remote: `STACK-2026/getskinscore` (PAT-embedded — known security note from MEMORY)
- Current branch: `main`
- Uncommitted: `?? docs/` (the plan doc itself, will be committed alongside Task 1)
