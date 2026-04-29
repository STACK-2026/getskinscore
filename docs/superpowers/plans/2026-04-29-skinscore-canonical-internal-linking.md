# SkinScore Canonical + Internal Linking Recovery Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reverse the Googlebot crawl-budget collapse on getskinscore.com (885 hits/day → 6 hits/day between 2026-04-15 and 2026-04-24) by fixing canonical splits, www-host leakage, and 99.86% page orphan rate.

**Architecture:** 6-phase incremental fix. Phase 1-2 lock the canonical URL space (zero ambiguity for Google). Phase 3 makes the catalog crawlable from internal links (signal of authority). Phase 4 audits the sitemap filter. Phase 5-6 deploy + resubmit + monitor.

**Tech Stack:** Astro SSG (5.x) + @astrojs/sitemap + Cloudflare Pages + GitHub Actions + Supabase intel DB (`cehgsqqsjdnignjekpdv`) + GSC submit_sitemap.py + IndexNow.

**Baseline (before fix), captured 2026-04-29 from `v_project_summary` + `crawl_daily`:**
- urls_total: 7 907  ·  imp_7d: 2 807  ·  clk_7d: 7  ·  avg_position: 18.1
- Googlebot 7d: 600 hits  ·  ClaudeBot 7d: 1 hit  ·  AI bots 7d total: 563
- avg internal links in: 0.01 (vs 0.25 on petfoodrate)
- Indexed-with-impressions: 187 / 7 907 (2.4%)
- Trailing slash split confirmed: `/compare` 1 220 imp, `/compare/` 1 099 imp
- 14+ `www.getskinscore.com/...` URLs indexed in parallel

**Reference: petfoodrate/site/astro.config.mjs (canonical config that works).**

---

## File Structure

**Files modified or created:**
- `site/astro.config.mjs` — add `trailingSlash:"always"` + `build:{format:"directory"}`
- `site/public/_redirects` — add cross-host www→apex 301
- `site/src/pages/brand/[slug].astro` — append "Products by this brand" section with internal links
- `site/src/pages/product/[slug].astro` — append "Related products" + brand back-link
- `site/src/pages/rankings.astro` — link to /best/<concern>/ and /best/<type>/ category hubs
- `site/src/pages/encyclopedia.astro` — link to ingredient/<slug> entries
- `site/src/pages/best/[combo].astro` — verify product listing already has `<a href>` (likely yes, audit only)
- `docs/superpowers/plans/2026-04-29-skinscore-canonical-internal-linking.md` — this plan
- `docs/superpowers/notes/2026-04-29-skinscore-googlebot-baseline.md` — frozen metrics for after/before comparison

**No new files created beyond docs/notes — every fix lives in the existing template tree.**

---

## Phase 1 — Canonical foundation (astro.config)

This MUST land first. Without it, `/foo` and `/foo/` keep splitting signals and every other fix is wasted work.

### Task 1: Lock trailing slash + directory format in astro.config

**Files:**
- Modify: `site/astro.config.mjs`

- [ ] **Step 1: Pull latest** (rule globale: pull-before-push)

```bash
cd ~/stack-2026/getskinscore && git pull origin main
```

Expected: clean pull or fast-forward. Resolve conflicts before continuing.

- [ ] **Step 2: Add the two missing keys to defineConfig**

Find the `export default defineConfig({` block at the end of `site/astro.config.mjs`. Add the two lines immediately after `site: siteConfig.url,`:

```diff
 export default defineConfig({
   site: siteConfig.url,
+  // Lock CF Pages canonical: every URL ends with a slash, every page lives
+  // at /path/index.html. Without this Astro defaults to "ignore", which
+  // leaves /foo and /foo/ both serving the same HTML and GSC splits the
+  // signal across two URLs (cf. STACK-2026 ukheatpumpguide audit).
+  trailingSlash: "always",
+  build: { format: "directory" },
   integrations: [sitemap({ customPages: frFallbackPages, lastmod: new Date(), filter: sitemapFilter })],
```

- [ ] **Step 3: Local rebuild and verify directory structure**

```bash
cd ~/stack-2026/getskinscore/site && npm run build
ls dist/compare/ | head -3
ls dist/brand/nivea/ 2>/dev/null | head -3
```

Expected:
- `dist/compare/` is a directory containing `index.html` (NOT `dist/compare.html` as a flat file)
- Same for `dist/brand/nivea/`

If you see flat `.html` files instead of directories, the build did not pick up the change — investigate before continuing.

- [ ] **Step 4: Verify canonical tag in built HTML**

```bash
grep -h '<link rel="canonical"' dist/compare/index.html dist/brand/nivea/index.html dist/index.html
```

Expected: every canonical href ends with `/`. Any URL without trailing slash is a regression — stop and debug.

- [ ] **Step 5: Verify sample sitemap entries also use trailing slash**

```bash
grep -c '<loc>https://getskinscore.com/[^<]*[^/]</loc>' dist/sitemap-0.xml
```

Expected: `0`. (Every `<loc>` should end with `/`. Count of non-slash-terminated entries must be zero. The homepage `<loc>https://getskinscore.com/</loc>` is fine because it ends with `/`.)

- [ ] **Step 6: Commit**

```bash
cd ~/stack-2026/getskinscore && git add site/astro.config.mjs && git commit -m "fix(seo): lock trailingSlash always + directory format

Astro was defaulting to trailingSlash:'ignore', which made /compare and
/compare/ two distinct indexable URLs and split GSC signal 50/50
(1220 imp on /compare vs 1099 imp on /compare/ over 14d). This matches
the petfoodrate canonical config and the ukheatpumpguide fix from 24/04."
```

---

## Phase 2 — www → apex redirect

Stops 14+ `www.getskinscore.com/...` URLs leaking into GSC as duplicate hosts.

### Task 2: Add cross-host 301 in _redirects

**Files:**
- Modify: `site/public/_redirects`

- [ ] **Step 1: Read current file**

```bash
cat ~/stack-2026/getskinscore/site/public/_redirects
```

Confirm it currently contains only the `/sitemap.xml /sitemap-index.xml 200` alias.

- [ ] **Step 2: Prepend the cross-host www→apex rule**

Edit `site/public/_redirects` so the top of the file becomes:

```
# Cloudflare Pages redirects

# Cross-host: force apex (www → apex). Stops www.getskinscore.com/... duplicates
# from leaking into GSC as a separate host.
https://www.getskinscore.com/* https://getskinscore.com/:splat 301!

# Sitemap alias
/sitemap.xml /sitemap-index.xml 200
```

The `!` flag is required — it makes the redirect "forced", overriding any matching static asset.

- [ ] **Step 3: Local build to confirm _redirects copied to dist**

```bash
cd ~/stack-2026/getskinscore/site && npm run build && head -6 dist/_redirects
```

Expected: the cross-host rule is the first non-comment line in `dist/_redirects`.

- [ ] **Step 4: Commit (deploy verification deferred to Phase 5)**

```bash
cd ~/stack-2026/getskinscore && git add site/public/_redirects && git commit -m "fix(seo): add cross-host www→apex 301 in _redirects

Stops 14+ www.getskinscore.com/... URLs from being indexed as a
parallel host. Fix follows STACK-2026 canonical pattern."
```

> **Caveat to verify post-deploy in Phase 5:** Cloudflare Pages applies `_redirects` only when the request reaches the Pages project. If `www.getskinscore.com` is bound as a Pages custom domain, the rule fires. If not, we may need to either (a) remove www from the Pages custom domains list, or (b) add a Cloudflare zone-level Bulk Redirect. We test live in Phase 5 before deciding.

---

## Phase 3 — Internal linking (catalog de-orphaning)

Highest content impact. Brings 7 825 orphan URLs (product/brand/ingredient/best) into the site graph so Googlebot has reasons to follow them and ClaudeBot has hyperlinks to discover.

Order chosen for highest delta per task: brand pages link the most products in fewest edits.

### Task 3: Brand pages → list products of that brand

**Files:**
- Modify: `site/src/pages/brand/[slug].astro` (currently 173 lines, no product list)

- [ ] **Step 1: Re-read the template**

```bash
sed -n '1,50p' ~/stack-2026/getskinscore/site/src/pages/brand/\[slug\].astro
```

Identify (a) where products of that brand are filtered (likely `products.filter(p => brandSlug(p.brand) === slug)`) and (b) where the rendered output ends.

- [ ] **Step 2: Add a "Products by this brand" section before the closing `</BaseLayout>`**

Locate the closing tags. Insert a new section that maps over `brandProducts` (or whatever local variable holds them) and renders one `<a href={`/product/${p.slug}/`}>` per product. Keep it minimal — just a name + grade chip — but EVERY product MUST be a clickable link.

Pattern:

```astro
{brandProducts.length > 0 && (
  <section class="container mx-auto px-4 py-12 border-t border-slate-200">
    <h2 class="text-2xl font-bold mb-6">{locale === "fr" ? "Tous les produits de cette marque" : "All products by this brand"}</h2>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {brandProducts.map((p) => (
        <li>
          <a href={`${localePrefix}/product/${p.slug}/`} class="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-violet-400 hover:bg-violet-50 transition">
            <span class="text-sm font-medium text-slate-900">{p.name}</span>
            <span class="ml-3 inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-white" style={`background-color: ${gradeColor(p.grade)}`}>{p.grade}</span>
          </a>
        </li>
      ))}
    </ul>
  </section>
)}
```

If `localePrefix` and `gradeColor` are not already imported in the file, either reuse the existing helpers in the file (they will already exist for the rest of the page) or import from `../../utils/...`. Adapt to actual variable names in the file — the goal is one `<a href>` per product.

- [ ] **Step 3: Build and verify the rendered HTML contains product links**

```bash
cd ~/stack-2026/getskinscore/site && npm run build
grep -c 'href="/product/' dist/brand/nivea/index.html
grep -c 'href="/product/' dist/brand/the-ordinary/index.html
```

Expected: a non-zero count on each (Nivea ≈ 5-15 products, The Ordinary ≈ 20+).

- [ ] **Step 4: Commit**

```bash
cd ~/stack-2026/getskinscore && git add site/src/pages/brand/\[slug\].astro && git commit -m "feat(seo): brand pages list every product (de-orphan catalog)

2078 brand pages had 0.00 avg internal links in. Adding the brand→products
section transforms them into hubs that pass authority to ~5419 product
pages. petfoodrate has this; skinscore did not."
```

### Task 4: Product pages → 5 related products + brand back-link

**Files:**
- Modify: `site/src/pages/product/[slug].astro` (391 lines)

- [ ] **Step 1: Identify where product details render**

```bash
sed -n '1,80p' ~/stack-2026/getskinscore/site/src/pages/product/\[slug\].astro
```

Locate the variable holding the current product (e.g. `product`) and the imports list.

- [ ] **Step 2: Compute related products at the top frontmatter**

Add to the frontmatter section (before the rendered HTML):

```ts
// Related: same type, same primary concern, exclude self, top 5 by grade
const relatedProducts = products
  .filter((p) => p.slug !== product.slug && p.type === product.type && p.concerns.some((c) => product.concerns.includes(c)))
  .sort((a, b) => a.grade.localeCompare(b.grade))
  .slice(0, 5);
```

Adapt the property names to whatever the existing data layer uses (`product.type`, `product.concerns[]`, `product.grade`).

- [ ] **Step 3: Add a "Related products" section + a brand back-link**

Insert before the closing `</BaseLayout>`:

```astro
<section class="container mx-auto px-4 py-12 border-t border-slate-200">
  <div class="mb-8">
    <a href={`${localePrefix}/brand/${brandSlug(product.brand)}/`} class="text-sm text-violet-600 hover:underline">
      {locale === "fr" ? `← Tous les produits ${product.brand}` : `← All ${product.brand} products`}
    </a>
  </div>
  {relatedProducts.length > 0 && (
    <>
      <h2 class="text-2xl font-bold mb-6">{locale === "fr" ? "Produits similaires" : "Related products"}</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {relatedProducts.map((p) => (
          <li>
            <a href={`${localePrefix}/product/${p.slug}/`} class="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-violet-400 hover:bg-violet-50 transition">
              <div class="flex flex-col">
                <span class="text-sm font-medium text-slate-900">{p.name}</span>
                <span class="text-xs text-slate-500">{p.brand}</span>
              </div>
              <span class="ml-3 inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-white" style={`background-color: ${gradeColor(p.grade)}`}>{p.grade}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  )}
</section>
```

- [ ] **Step 4: Build and verify**

```bash
cd ~/stack-2026/getskinscore/site && npm run build
# Pick any star product
PRODUCT=$(ls dist/product/ | head -1)
grep -c 'href="/product/' "dist/product/$PRODUCT/index.html"
grep -c 'href="/brand/' "dist/product/$PRODUCT/index.html"
```

Expected: at least 1 brand link + 0-5 related-product links per page.

- [ ] **Step 5: Commit**

```bash
cd ~/stack-2026/getskinscore && git add site/src/pages/product/\[slug\].astro && git commit -m "feat(seo): product pages cross-link 5 related + brand back-link

Removes product pages from orphan status. 5419 product pages now feed
authority both up (back to brand hub) and sideways (to 5 same-type/
concern products), creating the topical clusters Google rewards."
```

### Task 5: Rankings page → category hubs (best/<concern>, best/<type>)

**Files:**
- Modify: `site/src/pages/rankings.astro` (85 lines)

- [ ] **Step 1: Read current rankings.astro**

```bash
cat ~/stack-2026/getskinscore/site/src/pages/rankings.astro
```

Identify what concerns / productTypes are already used in the page (probably from `siteConfig.concerns` and `siteConfig.productTypes`).

- [ ] **Step 2: Add a "Browse by category" section that links to /best/<combo>/**

The `/best/[combo].astro` route already supports patterns like `/best/acne/`, `/best/moisturizer-acne/`, etc. (`combo` = concern OR `type-concern`). Render two grids:

```astro
<section class="container mx-auto px-4 py-12 border-t border-slate-200">
  <h2 class="text-2xl font-bold mb-6">{locale === "fr" ? "Parcourir par préoccupation" : "Browse by concern"}</h2>
  <ul class="grid grid-cols-2 md:grid-cols-4 gap-3">
    {siteConfig.concerns.map((c) => (
      <li>
        <a href={`${localePrefix}/best/${c.id}/`} class="block p-4 rounded-lg border border-slate-200 hover:border-violet-400 text-center">
          <span class="text-sm font-medium">{typeof c.label === "string" ? c.label : c.label[locale]}</span>
        </a>
      </li>
    ))}
  </ul>
  <h2 class="text-2xl font-bold mt-12 mb-6">{locale === "fr" ? "Parcourir par type de produit" : "Browse by product type"}</h2>
  <ul class="grid grid-cols-2 md:grid-cols-4 gap-3">
    {siteConfig.productTypes.map((t) => (
      <li>
        <a href={`${localePrefix}/rankings?type=${t.id}`} class="block p-4 rounded-lg border border-slate-200 hover:border-violet-400 text-center">
          <span class="text-sm font-medium">{typeof t.label === "string" ? t.label : t.label[locale]}</span>
        </a>
      </li>
    ))}
  </ul>
</section>
```

(The product-type links can stay as filtered rankings rather than `/best/<type>/` since `[combo].astro` only generates static paths for combos that have products — verify in template if pure-type best pages exist.)

- [ ] **Step 3: Build + verify**

```bash
cd ~/stack-2026/getskinscore/site && npm run build && grep -c 'href="/best/' dist/rankings/index.html
```

Expected: ≥ 8 (one per concern in `siteConfig.concerns`).

- [ ] **Step 4: Commit**

```bash
cd ~/stack-2026/getskinscore && git add site/src/pages/rankings.astro && git commit -m "feat(seo): rankings hub links to /best/<concern>/ category pages

The rankings page now distributes authority to the 8 concern best/<id>/
pages and the type-filtered rankings views. Was previously a dead-end."
```

### Task 6: Encyclopedia page → individual ingredient pages

**Files:**
- Modify: `site/src/pages/encyclopedia.astro` (80 lines)

- [ ] **Step 1: Audit current state**

```bash
cat ~/stack-2026/getskinscore/site/src/pages/encyclopedia.astro
grep -c 'href="/ingredient/' ~/stack-2026/getskinscore/site/dist/encyclopedia/index.html 2>/dev/null
```

If the count is already > 0, this task is partially done — only top up missing links.

- [ ] **Step 2: If 0 ingredient links, add the alphabetic index**

Render every ingredient slug as a link grouped by first letter. Adapt to the existing data structure:

```astro
{ingredients.map((ing) => (
  <a href={`${localePrefix}/ingredient/${ing.id}/`} class="text-sm text-slate-700 hover:text-violet-600 hover:underline">
    {ing.name}
  </a>
))}
```

(The `ingredient/[slug].astro` template handles all entries even if only `deepIngredientIds` are in the sitemap — internal links still pass authority.)

- [ ] **Step 3: Build + verify**

```bash
cd ~/stack-2026/getskinscore/site && npm run build && grep -c 'href="/ingredient/' dist/encyclopedia/index.html
```

Expected: > 100 (skinscore has 1 299 ingredients in `data/ingredients.ts`, of which ~224 generated as pages — link to all generated ones).

- [ ] **Step 4: Commit**

```bash
cd ~/stack-2026/getskinscore && git add site/src/pages/encyclopedia.astro && git commit -m "feat(seo): encyclopedia links every ingredient page

224 ingredient pages had 0.00 avg internal links in. Encyclopedia is
now their canonical hub."
```

---

## Phase 4 — Sitemap filter audit

The current `sitemapFilter` in astro.config.mjs may be too aggressive. Audit before changing.

### Task 7: Audit deployed sitemap entries vs catalog size

**Files:**
- Read: `site/astro.config.mjs` (sitemapFilter logic), `site/dist/sitemap-0.xml`

- [ ] **Step 1: Count deployed sitemap entries by kind**

After the local build from Phase 1-3 has run:

```bash
cd ~/stack-2026/getskinscore/site
echo "Total <loc>: $(grep -c '<loc>' dist/sitemap-0.xml)"
echo "  /product/: $(grep -c '<loc>https://getskinscore.com/product/' dist/sitemap-0.xml)"
echo "  /brand/:   $(grep -c '<loc>https://getskinscore.com/brand/' dist/sitemap-0.xml)"
echo "  /ingredient/: $(grep -c '<loc>https://getskinscore.com/ingredient/' dist/sitemap-0.xml)"
echo "  /fr/product/: $(grep -c '<loc>https://getskinscore.com/fr/product/' dist/sitemap-0.xml)"
```

Compare to catalog size: 5 419 products in dist, 2 078 brands in dist, 224 ingredients in dist.

- [ ] **Step 2: Decide loosening policy**

Write the decision into `docs/superpowers/notes/2026-04-29-skinscore-sitemap-policy.md` (1-paragraph note). Three options:

1. **Keep current filter unchanged.** Justified if products with no enrichment / brands with <3 products are genuinely thin. Risk: sitemap stays sparse, recovery slower.
2. **Loosen brands filter** from `≥3 products` to `≥1 product`. Adds ~1 500 brand pages to sitemap. Low risk because brand pages now have real content (product list from Task 3).
3. **Loosen all three filters** (include all products, all brands ≥1, all ingredients). Highest recovery upside but reintroduces thin-content risk.

Recommended: **Option 2** as a balanced first step. Re-evaluate after 14 days of GSC data.

- [ ] **Step 3: Apply chosen option**

If Option 2: in `site/astro.config.mjs`, change:

```diff
-  return new Set([...counts.entries()].filter(([, n]) => n >= 3).map(([s]) => s));
+  return new Set([...counts.entries()].filter(([, n]) => n >= 1).map(([s]) => s));
```

If Option 1: skip this step.

- [ ] **Step 4: Rebuild and re-count sitemap**

```bash
cd ~/stack-2026/getskinscore/site && npm run build && grep -c '<loc>' dist/sitemap-0.xml
```

Note the new total in the policy doc.

- [ ] **Step 5: Commit (only if policy changed)**

```bash
cd ~/stack-2026/getskinscore && git add site/astro.config.mjs docs/superpowers/notes/ && git commit -m "fix(seo): loosen sitemap brand filter from >=3 to >=1 products

Brand pages now have real internal-link content (Task 3 of canonical-
linking plan), so the >=3 thin-content guard is no longer needed."
```

---

## Phase 5 — Deploy and verify live

### Task 8: Push and watch Cloudflare deploy

**Files:** none (git operations only)

- [ ] **Step 1: Push to origin**

```bash
cd ~/stack-2026/getskinscore && git push origin main
```

- [ ] **Step 2: Watch the deploy-site workflow**

```bash
gh run list --repo STACK-2026/getskinscore --workflow deploy-site.yml --limit 1
gh run watch --repo STACK-2026/getskinscore "$(gh run list --repo STACK-2026/getskinscore --workflow deploy-site.yml --limit 1 --json databaseId -q '.[0].databaseId')"
```

Expected: the run finishes green. If it fails, check the wrangler step (memory pattern: `workingDirectory: site` must be set).

- [ ] **Step 3: Verify trailing slash canonical live**

```bash
curl -sI "https://getskinscore.com/compare" | head -5
curl -sI "https://getskinscore.com/compare/" | head -5
curl -s "https://getskinscore.com/compare/" | grep -i 'rel="canonical"'
```

Expected:
- `/compare` returns either 301 to `/compare/` OR 308, OR serves the same HTML where canonical points to `/compare/`. (Astro+CF may not 301 the no-slash variant; the canonical tag is what counts.)
- `/compare/` canonical href ends with `/`.

- [ ] **Step 4: Verify www → apex redirect live**

```bash
curl -sI "https://www.getskinscore.com/" | head -5
curl -sI "https://www.getskinscore.com/brand/la-mer/" | head -5
```

Expected: HTTP 301 with `location: https://getskinscore.com/...`.

**If the redirect does NOT fire** (response is 200), `_redirects` cross-host syntax is not being honored by Pages. Two fallbacks:
- Fallback A: log into Cloudflare dashboard, remove `www.getskinscore.com` from the Pages project's custom domains list (Pages → getskinscore → Custom domains → trash icon next to www).
- Fallback B: Cloudflare zone-level Bulk Redirect rule. Document the chosen fallback in `docs/superpowers/notes/2026-04-29-skinscore-www-redirect.md`.

- [ ] **Step 5: Verify internal links live**

```bash
curl -s "https://getskinscore.com/brand/the-ordinary/" | grep -c 'href="/product/'
curl -s "https://getskinscore.com/rankings/" | grep -c 'href="/best/'
curl -s "https://getskinscore.com/encyclopedia/" | grep -c 'href="/ingredient/'
```

Expected: all > 0, with brand and encyclopedia counts in double or triple digits.

---

## Phase 6 — Resubmit + IndexNow + monitor

### Task 9: Resubmit sitemap to GSC via intel-repo workflow

**Files:** none in this repo (uses `~/stack-2026/intel-repo/scripts/submit_sitemap.py`)

- [ ] **Step 1: Trigger submit-sitemap workflow**

```bash
gh workflow run submit-sitemap.yml \
  --repo STACK-2026/stack-2026-intel \
  -f domain=getskinscore.com \
  -f sitemap=https://getskinscore.com/sitemap-index.xml
```

(Workflow file: `~/stack-2026/intel-repo/.github/workflows/submit-sitemap.yml`. Adjust org/repo if the actual remote uses a different name — check with `cd ~/stack-2026/intel-repo && git remote -v`.)

- [ ] **Step 2: Verify run succeeded**

```bash
gh run list --repo STACK-2026/stack-2026-intel --workflow submit-sitemap.yml --limit 1
```

Expected: green. If 403 with "insufficient authentication scopes" (memory note from 2026-04-29 lookx402 incident), the GSC_REFRESH_TOKEN may need re-issue with sitemap-write scope.

### Task 10: IndexNow ping on top 50 canonical URLs

**Files:**
- Read: existing IndexNow integration in skinscore (search for it)

- [ ] **Step 1: Locate IndexNow key + endpoint**

```bash
grep -rn "indexnow\|IndexNow\|api.indexnow" ~/stack-2026/getskinscore/site/ ~/stack-2026/getskinscore/scripts/ 2>/dev/null | head -10
```

If nothing exists, skip to Step 3 (the resubmit-sitemap call already triggers GSC; IndexNow is bonus).

- [ ] **Step 2: If IndexNow script exists, run it on a curated URL list**

Take the homepage + /compare/ + /rankings/ + /encyclopedia/ + top 5 brands + top 5 products by impressions (from intel `gsc_daily` top URLs) and ping them.

- [ ] **Step 3: Otherwise, manual ping via curl**

```bash
KEY=$(grep -hr "indexnow" ~/stack-2026/getskinscore/site/public/*.txt 2>/dev/null | head -1)
# If key file exists: curl POST https://api.indexnow.org/IndexNow with the JSON body listing URLs.
```

If no IndexNow key file in `public/`, this step is skipped — note in `docs/superpowers/notes/`.

### Task 11: Freeze baseline metrics + schedule monitoring

**Files:**
- Create: `docs/superpowers/notes/2026-04-29-skinscore-googlebot-baseline.md`

- [ ] **Step 1: Save the pre-fix baseline**

Create the note with the exact metrics from the plan header (urls_total, imp_7d, clk_7d, position, bot breakdown). One paragraph, table format. This is the "before" snapshot for the 14-day comparison.

- [ ] **Step 2: Schedule a monitoring agent for 5 days out**

Use the `schedule` skill to create a routine that re-queries `v_project_summary` for skinscore + petfoodrate and writes a delta table to a notes file. Cron: once on day 5 (one-shot), output to `docs/superpowers/notes/2026-05-04-skinscore-recovery-check.md`.

- [ ] **Step 3: Final commit**

```bash
cd ~/stack-2026/getskinscore && git add docs/ && git commit -m "docs(seo): freeze pre-fix baseline + schedule recovery check"
git push origin main
```

---

## Self-review (executed before saving)

**Spec coverage:** Every diagnostic finding from 2026-04-29 mapped to a task —
- trailing slash split → Task 1
- www host leak → Task 2 + verified Task 8 step 4
- product orphan rate → Task 4
- brand orphan rate → Task 3
- ingredient orphan rate → Task 6
- best orphan rate → indirectly via Task 5 (rankings hub) — best/<combo> pages already list products
- sitemap filter restrictiveness → Task 7
- GSC resubmit → Task 9
- recovery monitoring → Task 11

**Placeholder scan:** none — all code blocks contain real Astro / shell / config code; "TBD" / "implement later" not present. Three places explicitly note "adapt to actual variable names" — these are honest reads-the-file moments, not handwaving.

**Type consistency:** `localePrefix`, `gradeColor`, `brandSlug`, `products`, `ingredients`, `siteConfig.concerns`, `siteConfig.productTypes` are all referenced consistently across Tasks 3-6. The first task that uses each helper notes "adapt to existing variable names" because helpers may be locally imported under different names per file.

**Risk callouts:**
- Task 2 caveat about Pages cross-host _redirects → mitigated by Task 8 fallbacks A/B.
- Task 9 GSC scope risk → mitigated by linking to the lookx402 memory note.

---

## Roll-back plan

Every change is a separate commit. To revert:
- Phase 1 only: `git revert <task1-sha>`
- All canonical fixes: `git revert <task1-sha>..<task2-sha>`
- Internal linking: `git revert <task3-sha>..<task6-sha>`
- Anything affecting indexation negatively after deploy: revert the offending phase, push, and re-trigger the GSC submit-sitemap workflow.

A canary path is to merge Task 1 + Task 2 first, deploy, watch Googlebot for 48h, THEN proceed with Tasks 3-6. The plan as written batches all phases in one push for speed, but the canary is available if needed.
