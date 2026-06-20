import { siteConfig } from "../../site.config";
import { fullUrl } from "./config";

export function jsonLdHomepage() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        foundingDate: "2026-04-12",
        areaServed: "Worldwide",
        knowsAbout: siteConfig.keywords,
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.legal.email,
          contactType: "customer service",
          availableLanguage: ["English", "French"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: ["en-US", "fr-FR"],
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/rankings?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebApplication",
        "@id": `${siteConfig.appUrl}/#application`,
        name: siteConfig.name,
        url: siteConfig.appUrl,
        applicationCategory: "HealthApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };
}

export function jsonLdFaq(faq: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function jsonLdArticle(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  author?: string;
  keywords?: string[];
  reviewedBy?: string;
  inLanguage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    image: opts.image,
    author: {
      "@type": "Person",
      name: opts.author || siteConfig.blog.defaultAuthor,
      url: `${siteConfig.url}/about`,
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    keywords: opts.keywords?.join(", "),
    inLanguage: opts.inLanguage || "en-US",
    ...(opts.reviewedBy
      ? {
          reviewedBy: {
            "@type": "Person",
            name: opts.reviewedBy,
          },
        }
      : {}),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".prose p:first-of-type"],
    },
  };
}

export function jsonLdBreadcrumbs(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function jsonLdProduct(opts: {
  name: string;
  brand: string;
  description: string;
  url: string;
  image?: string;
  score: string;
  scoreNumeric: number;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${opts.brand} ${opts.name}`,
    brand: { "@type": "Brand", name: opts.brand },
    description: opts.description,
    url: opts.url,
    image: opts.image,
    review: {
      "@type": "Review",
      ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
      reviewRating: {
        "@type": "Rating",
        ratingValue: opts.scoreNumeric,
        bestRating: 100,
        worstRating: 0,
      },
      author: { "@id": `${siteConfig.url}/#organization` },
    },
  };
}

// First-party dataset schema. Only declare metrics already shown in HTML.
// Used on /methodology and /rankings to make the SkinScore database a
// citable, versioned source for LLMs (schema.org/Dataset).
export function jsonLdDataset(opts: {
  url: string;
  dateModified: string;
  inLanguage?: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "SkinScore Product Database",
    description: opts.description,
    url: opts.url,
    keywords: [
      "skincare scoring",
      "INCI analysis",
      "cosmetic ingredient safety",
      "product efficacy",
      "comedogenicity",
    ],
    variableMeasured: [
      { "@type": "PropertyValue", name: "Efficacy", description: "Presence and position of proven actives. Weight 30%." },
      { "@type": "PropertyValue", name: "Safety", description: "Absence of harmful or EU-restricted ingredients. Weight 25%." },
      { "@type": "PropertyValue", name: "Comedogenicity", description: "Pore-clogging risk on the 0-5 comedogenic scale. Weight 20%." },
      { "@type": "PropertyValue", name: "Transparency", description: "Full INCI disclosure and certifications. Weight 15%." },
      { "@type": "PropertyValue", name: "Skin-type fit", description: "Suitability for the declared skin type. Weight 10%." },
    ],
    measurementTechnique: "SkinScore Methodology v1.0: five weighted dimensions scored 0-100 from declared INCI lists.",
    license: "https://getskinscore.com/methodology",
    isAccessibleForFree: true,
    datePublished: "2026-04-12",
    dateModified: opts.dateModified,
    spatialCoverage: "Worldwide",
    inLanguage: opts.inLanguage || "en-US",
    creator: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    citation: [
      { "@type": "CreativeWork", name: "EU CosIng database", url: "https://ec.europa.eu/growth/tools-databases/cosing/" },
      { "@type": "CreativeWork", name: "SCCS opinions on cosmetic ingredients", url: "https://health.ec.europa.eu/scientific-committees/scientific-committee-consumer-safety-sccs_en" },
    ],
  };
}
