import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./site.config.ts";

// FR pages generated via i18n fallback that @astrojs/sitemap misses
import { products, brandSlug, getUniqueBrands } from "./src/data/products.ts";
import { starProductContent } from "./src/data/star-product-content.ts";
import { ingredientDeepContent } from "./src/data/ingredient-deep-content.ts";

const frFallbackPages = (() => {
  const base = siteConfig.url;
  const pages = [
    "/fr/about/",
    "/fr/cookie-policy/",
    "/fr/privacy-policy/",
    "/fr/terms/",
  ];
  // FR authors
  const authors = ["dr-elena-voss", "dr-sarah-chen", "lina-park", "marc-severin"];
  for (const a of authors) pages.push(`/fr/authors/${a}/`);
  // FR best pages - same logic as best/[combo].astro getStaticPaths
  const concerns = siteConfig.concerns.map((c) => c.id);
  const types = siteConfig.productTypes.map((pt) => pt.id);
  for (const c of concerns) {
    if (products.some((p) => p.concerns.includes(c))) pages.push(`/fr/best/${c}/`);
  }
  for (const t of types) {
    for (const c of concerns) {
      if (products.some((p) => p.type === t && p.concerns.includes(c)))
        pages.push(`/fr/best/${t}-${c}/`);
    }
  }
  return pages.map((p) => `${base}${p}`);
})();

// Indexation policy (STACK-2026 programmatic thin pages rule):
// - Product pages: only enriched ("star") products in sitemap.
// - Brand pages: only brands with 3+ rated products.
// - Ingredient pages: all excluded pending deep-dive enrichment.
const enrichedProductIds = new Set(starProductContent.map((s) => s.id));
const indexableBrandSlugs = (() => {
  const counts = new Map();
  for (const p of products) {
    const slug = brandSlug(p.brand);
    if (!slug) continue;
    counts.set(slug, (counts.get(slug) || 0) + 1);
  }
  // Loosened from >= 3 to >= 1 on 2026-04-29: brand pages now have real
  // content (product list + grade distribution + JSON-LD Brand schema). The
  // >= 3 thin-content guard predates the brand→products linking work and is
  // no longer needed. See docs/superpowers/notes/2026-04-29-skinscore-sitemap-policy.md
  return new Set([...counts.entries()].filter(([, n]) => n >= 1).map(([s]) => s));
})();

const deepIngredientIds = new Set(ingredientDeepContent.map((i) => i.id));

const sitemapFilter = (url) => {
  // Drop noindexed thin programmatic paths from the sitemap entirely.
  const ingredientMatch = url.match(/\/ingredient\/([^/]+)\/?$/);
  if (ingredientMatch) return deepIngredientIds.has(ingredientMatch[1]);
  const productMatch = url.match(/\/product\/([^/]+)\/?$/);
  if (productMatch) return enrichedProductIds.has(productMatch[1]);
  const brandMatch = url.match(/\/brand\/([^/]+)\/?$/);
  if (brandMatch) return indexableBrandSlugs.has(brandMatch[1]);
  return true;
};

export default defineConfig({
  site: siteConfig.url,
  // Lock CF Pages canonical: every URL ends with a slash, every page lives
  // at /path/index.html. Without this Astro defaults to "ignore", which
  // leaves /foo and /foo/ both serving the same HTML and GSC splits the
  // signal across two URLs (cf. STACK-2026 ukheatpumpguide audit).
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [sitemap({ customPages: frFallbackPages, lastmod: new Date(), filter: sitemapFilter })],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
    fallback: {
      fr: "en",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    smartypants: false,
    shikiConfig: {
      theme: "github-light",
    },
  },
});
