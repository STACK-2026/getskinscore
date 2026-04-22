import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./site.config.ts";

// FR pages generated via i18n fallback that @astrojs/sitemap misses
import { products, brandSlug, getUniqueBrands } from "./src/data/products.ts";
import { starProductContent } from "./src/data/star-product-content.ts";

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
  return new Set([...counts.entries()].filter(([, n]) => n >= 3).map(([s]) => s));
})();

const sitemapFilter = (url) => {
  // Drop noindexed thin programmatic paths from the sitemap entirely.
  if (/\/ingredient\//.test(url)) return false;
  const productMatch = url.match(/\/product\/([^/]+)\/?$/);
  if (productMatch) return enrichedProductIds.has(productMatch[1]);
  const brandMatch = url.match(/\/brand\/([^/]+)\/?$/);
  if (brandMatch) return indexableBrandSlugs.has(brandMatch[1]);
  return true;
};

export default defineConfig({
  site: siteConfig.url,
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
