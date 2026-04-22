// Bilingual blog slug pairs. Key = EN slug, value = FR slug.
// Only fill when the article EXISTS in both languages.
// Used by BlogLayout to emit correct hreflang alternates.
// Missing pair = hreflang suppressed for the untranslated language.

export const BLOG_SLUG_EN_TO_FR: Record<string, string> = {
  "retinol-beginners-guide-how-to-start": "retinol-guide-debutant-commencer",
};

export const BLOG_SLUG_FR_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(BLOG_SLUG_EN_TO_FR).map(([en, fr]) => [fr, en])
);

export function getBilingualPair(slug: string, lang: "en" | "fr"): {
  enSlug: string | null;
  frSlug: string | null;
} {
  if (lang === "en") {
    return {
      enSlug: slug,
      frSlug: BLOG_SLUG_EN_TO_FR[slug] || null,
    };
  }
  return {
    enSlug: BLOG_SLUG_FR_TO_EN[slug] || null,
    frSlug: slug,
  };
}
