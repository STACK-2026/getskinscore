// Awin affiliate config for SkinScore.
// Publisher account 1866466 (Getskinscore.com on Awin).
// Three joined merchants: Foreo FR + Foreo UK + Stylevana FR.

export const AWIN_PUBLISHER_ID = "1866466";

export type Merchant = {
  key: string;
  name: string;
  mid: string;
  country: "FR" | "GB";
  domain: string;
  searchPath?: string;
  active: boolean;
};

export const MERCHANTS: Merchant[] = [
  {
    key: "stylevana_fr",
    name: "Stylevana",
    mid: "23223",
    country: "FR",
    domain: "https://www.stylevana.com",
    searchPath: "/fr_FR/catalogsearch/result/?q=",
    active: true,
  },
  {
    key: "foreo_fr",
    name: "Foreo",
    mid: "73932",
    country: "FR",
    domain: "https://www.foreo.com",
    searchPath: "/fr-fr/search?q=",
    active: true,
  },
  {
    key: "foreo_uk",
    name: "Foreo UK",
    mid: "73934",
    country: "GB",
    domain: "https://www.foreo.com",
    searchPath: "/uk/search?q=",
    active: true,
  },
];

// Lowercase brand tokens that Stylevana FR distributes (K-beauty / J-beauty pool).
// Match is case-insensitive, exact on the lowercased brand string.
export const STYLEVANA_BRANDS = new Set<string>([
  "cosrx",
  "beauty of joseon",
  "some by mi",
  "anua",
  "skin1004",
  "pyunkang yul",
  "mixsoon",
  "innisfree",
  "banila co",
  "laneige",
  "etude house",
  "tony moly",
  "tonymoly",
  "klairs",
  "dear klairs",
  "round lab",
  "numbuzin",
  "torriden",
  "mediheal",
  "heimish",
  "goodal",
  "iunik",
  "purito",
  "by wishtrend",
  "isntree",
  "missha",
  "dr. jart+",
  "dr.jart+",
  "belif",
  "sulwhasoo",
  "aplb",
  "frudia",
  "manyo",
  "make p:rem",
  "make prem",
  "jumiso",
  "sioris",
  "tirtir",
  "beplain",
  "hanyul",
  "fwee",
]);

const FOREO_BRANDS = new Set<string>(["foreo"]);

// Pick the merchant(s) that should appear on a given product page.
// Brand-driven matching: Foreo to Foreo merchants, K-beauty to Stylevana, etc.
// Country: locale "fr" prefers FR merchants, "en" prefers GB then FR.
export function pickMerchantsForProduct(brand: string, locale: "en" | "fr"): Merchant[] {
  const b = brand.trim().toLowerCase();
  const out: Merchant[] = [];

  if (FOREO_BRANDS.has(b)) {
    if (locale === "fr") {
      const fr = MERCHANTS.find((m) => m.key === "foreo_fr" && m.active);
      if (fr) out.push(fr);
    } else {
      const uk = MERCHANTS.find((m) => m.key === "foreo_uk" && m.active);
      if (uk) out.push(uk);
    }
    return out;
  }

  if (STYLEVANA_BRANDS.has(b)) {
    const sv = MERCHANTS.find((m) => m.key === "stylevana_fr" && m.active);
    if (sv) out.push(sv);
    return out;
  }

  return out;
}

// Public href used by BuyCTA on product pages. The /go/[product] CF Pages
// function reads m=, b=, n= and builds the awin1.com deep link.
export function buildGoPath(productId: string, merchantKey: string, brand: string, name: string): string {
  const params = new URLSearchParams({
    m: merchantKey,
    b: brand,
    n: name,
  });
  return `/go/${encodeURIComponent(productId)}?${params.toString()}`;
}

export function buildAwinDeepLink(opts: { mid: string; targetUrl: string; clickref?: string }): string {
  const params = new URLSearchParams({
    awinmid: opts.mid,
    awinaffid: AWIN_PUBLISHER_ID,
    ued: opts.targetUrl,
  });
  if (opts.clickref) params.set("clickref", opts.clickref);
  return `https://www.awin1.com/cread.php?${params.toString()}`;
}
