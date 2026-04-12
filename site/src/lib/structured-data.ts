import { siteConfig } from "../../site.config";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": siteConfig.schema.organizationType,
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    foundingDate: "2026-04-12",
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.legal.email,
      contactType: "customer service",
      availableLanguage: ["English", "French"],
    },
  };
}

export function websiteSchema(locale: string = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: locale === "fr" ? "fr-FR" : "en-US",
  };
}
