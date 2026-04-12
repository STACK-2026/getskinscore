import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./site.config.ts";

export default defineConfig({
  site: siteConfig.url,
  integrations: [sitemap()],
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
