// ============================================
// SITE CONFIG - getskinscore.com
// ============================================

export const siteConfig = {
  // Identity
  name: "SkinScore",
  tagline: "Your skincare is lying to you",
  description:
    "67% of skincare products contain a concerning ingredient. SkinScore decodes every INCI list, scores products A to E across safety, efficacy, and skin-type fit. No brand pays us. La Mer gets a C. We don't care.",
  url: "https://getskinscore.com",
  appUrl: "https://app.getskinscore.com",
  locale: "en-US",
  language: "en",

  // Bilingual
  locales: [
    { code: "en", label: "English", path: "/" },
    { code: "fr", label: "Francais", path: "/fr/" },
  ],

  // Branding - clean science, warm but clinical
  colors: {
    primary: "#7C3AED",    // Violet - premium, science, dermatology
    secondary: "#4F46E5",  // Indigo - depth, trust
    accent: "#F59E0B",     // Amber - warmth, highlights, scores
    background: "#FFFFFF",
    text: "#0F172A",
    surface: "#F8FAFC",
    muted: "#64748B",
    success: "#10B981",    // Green - safe ingredients
    warning: "#F59E0B",    // Amber - caution
    danger: "#EF4444",     // Red - harmful ingredients
  },

  // Typography
  fonts: {
    display: "Plus Jakarta Sans",
    body: "Inter",
  },

  // SEO
  author: "SkinScore Editorial",
  twitterHandle: "",
  ogImage: "/og-default.jpg",
  keywords: [
    "skincare ingredient checker",
    "skincare product rating",
    "INCI decoder",
    "is my skincare safe",
    "best moisturizer for dry skin",
    "skincare routine builder",
    "niacinamide benefits",
    "retinol skincare",
    "comedogenic ingredients",
    "skincare comparison",
  ],

  // Schema.org
  schema: {
    organizationType: "Organization",
  },

  // GEO (Generative Engine Optimization)
  llmsDescription:
    "SkinScore (getskinscore.com) is an independent international skincare rating service that scores products from A to E across five dimensions: efficacy (proven active ingredients), safety (allergens, irritants, endocrine disruptors), comedogenicity (pore-clogging risk), transparency (full INCI disclosure, certifications), and skin-type fit (personalized scoring for dry, oily, combination, sensitive, and normal skin). Data sourced from EU CosIng, SCCS opinions, and peer-reviewed dermatology research. Available in English and French.",

  // Navigation
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Rankings", href: "/rankings" },
    { label: "Quiz", href: "/quiz" },
    { label: "Dupes", href: "/dupes" },
    { label: "Interactions", href: "/interactions" },
    { label: "Ingredients", href: "/encyclopedia" },
    { label: "Blog", href: "/blog" },
  ],

  // Homepage sections
  sections: {
    hero: true,
    features: true,
    howItWorks: true,
    topProducts: true,
    concerns: true,
    ingredients: true,
    faq: true,
    cta: true,
    blog: true,
    stats: true,
  },

  // FAQ
  faq: [
    {
      question: "How does SkinScore rate skincare products?",
      answer:
        "SkinScore analyses every ingredient in a product's INCI list across five dimensions: efficacy (proven actives like retinol, niacinamide, vitamin C), safety (allergens, irritants, EU-restricted substances), comedogenicity (pore-clogging risk), transparency (full ingredient disclosure, certifications), and skin-type fit. Each dimension is scored and combined into a final A-to-E grade.",
    },
    {
      question: "Is SkinScore independent?",
      answer:
        "Yes. SkinScore does not accept payment from brands to influence ratings. Our scoring methodology is fully transparent and based on EU CosIng data, SCCS safety opinions, and peer-reviewed dermatological research. We may earn affiliate commissions from retailer links, but this never affects product scores.",
    },
    {
      question: "What is an INCI list?",
      answer:
        "INCI (International Nomenclature of Cosmetic Ingredients) is the standardised naming system for cosmetic ingredients used worldwide. Every skincare product sold in the EU must display its full INCI list on the packaging. SkinScore decodes these scientific names into plain language so you understand exactly what you're putting on your skin.",
    },
    {
      question: "Can SkinScore recommend a routine for my skin type?",
      answer:
        "Yes. Take our 2-minute skin quiz to get a personalised AM/PM routine recommendation based on your skin type, concerns (acne, aging, hyperpigmentation, rosacea, dryness), and budget. Every product recommended is backed by its SkinScore rating.",
    },
    {
      question: "How many products does SkinScore cover?",
      answer:
        "SkinScore currently rates over 1,000 products from 100+ brands across cleansers, moisturisers, serums, sunscreens, exfoliants, and masks. We add new products daily through automated discovery and community contributions.",
    },
  ],

  // Features
  features: [
    {
      title: "Instant truth",
      description:
        "Paste your INCI list or search any product. In 2 seconds, you know if it's worth your money or if you're paying for marketing.",
      icon: "zap",
    },
    {
      title: "Zero brand deals",
      description:
        "We don't accept money from brands. Our ratings come from EU CosIng data, SCCS safety opinions, and dermatology research. La Mer gets a C. We don't care.",
      icon: "shield",
    },
    {
      title: "Your skin, your rules",
      description:
        "Every score adapts to YOUR skin type. What's A-rated for oily skin might be C-rated for sensitive skin. Because one size doesn't fit all.",
      icon: "user",
    },
  ],

  // Blog
  blog: {
    enabled: true,
    postsPerPage: 12,
    defaultAuthor: "SkinScore Editorial",
    categories: [
      "ingredients",
      "skin-types",
      "routines",
      "product-reviews",
      "science",
      "guides",
    ],
    name: "The Lab",
    slug: "blog",
  },

  // Skin concerns (used for programmatic pages)
  concerns: [
    { id: "acne", label: { en: "Acne", fr: "Acne" }, icon: "droplets" },
    { id: "anti-aging", label: { en: "Anti-aging", fr: "Anti-age" }, icon: "clock" },
    { id: "hyperpigmentation", label: { en: "Dark spots", fr: "Taches brunes" }, icon: "sun" },
    { id: "rosacea", label: { en: "Rosacea", fr: "Rosacee" }, icon: "flame" },
    { id: "dryness", label: { en: "Dryness", fr: "Secheresse" }, icon: "wind" },
    { id: "sensitivity", label: { en: "Sensitivity", fr: "Sensibilite" }, icon: "heart" },
    { id: "oiliness", label: { en: "Oiliness", fr: "Exces de sebum" }, icon: "droplet" },
    { id: "pores", label: { en: "Large pores", fr: "Pores dilates" }, icon: "circle" },
  ],

  // Product types
  productTypes: [
    { id: "cleanser", label: { en: "Cleanser", fr: "Nettoyant" } },
    { id: "moisturizer", label: { en: "Moisturizer", fr: "Hydratant" } },
    { id: "serum", label: { en: "Serum", fr: "Serum" } },
    { id: "sunscreen", label: { en: "Sunscreen", fr: "Protection solaire" } },
    { id: "exfoliant", label: { en: "Exfoliant", fr: "Exfoliant" } },
    { id: "mask", label: { en: "Mask", fr: "Masque" } },
    { id: "toner", label: { en: "Toner", fr: "Lotion tonique" } },
    { id: "eye-cream", label: { en: "Eye cream", fr: "Contour des yeux" } },
    { id: "lip-care", label: { en: "Lip care", fr: "Soin des levres" } },
    { id: "body-care", label: { en: "Body care", fr: "Soin du corps" } },
  ],

  // Skin types
  skinTypes: [
    { id: "dry", label: { en: "Dry", fr: "Seche" } },
    { id: "oily", label: { en: "Oily", fr: "Grasse" } },
    { id: "combination", label: { en: "Combination", fr: "Mixte" } },
    { id: "sensitive", label: { en: "Sensitive", fr: "Sensible" } },
    { id: "normal", label: { en: "Normal", fr: "Normale" } },
  ],

  // Legal
  legal: {
    companyName: "",
    address: "International",
    email: "contact@getskinscore.com",
  },
};
