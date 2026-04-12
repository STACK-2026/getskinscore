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
      reviewRating: {
        "@type": "Rating",
        ratingValue: opts.scoreNumeric,
        bestRating: 100,
        worstRating: 0,
      },
      author: { "@id": `${siteConfig.url}/#organization` },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: opts.scoreNumeric,
      bestRating: 100,
      worstRating: 0,
      ratingCount: 1,
    },
  };
}
