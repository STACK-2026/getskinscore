import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./site.config.ts";

// FR pages generated via i18n fallback that @astrojs/sitemap misses
import { products } from "./src/data/products.ts";

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

export default defineConfig({
  site: siteConfig.url,
  integrations: [sitemap({ customPages: frFallbackPages })],
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
