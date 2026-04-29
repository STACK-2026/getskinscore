// Cloudflare Pages Function: /go/[product]?m=<merchantKey>&b=<brand>&n=<name>
// 302-redirects through awin1.com so attribution fires before the user lands
// on the merchant page.
//
// Stateless. No DB lookup. Brand + name are passed by the BuyCTA component
// so the function does not need to mirror the 2700-product TS catalog.

const AWIN_PUBLISHER_ID = "1866466";

const MERCHANTS = {
  stylevana_fr: {
    mid: "23223",
    domain: "https://www.stylevana.com",
    searchPath: "/fr_FR/catalogsearch/result/?q=",
  },
  foreo_fr: {
    mid: "73932",
    domain: "https://www.foreo.com",
    searchPath: "/fr-fr/search?q=",
  },
  foreo_uk: {
    mid: "73934",
    domain: "https://www.foreo.com",
    searchPath: "/uk/search?q=",
  },
};

function buildAwin(mid, ued, clickref) {
  const params = new URLSearchParams({
    awinmid: mid,
    awinaffid: AWIN_PUBLISHER_ID,
    ued,
  });
  if (clickref) params.set("clickref", clickref);
  return `https://www.awin1.com/cread.php?${params.toString()}`;
}

function sanitize(s, max = 120) {
  return (s || "").toString().slice(0, max);
}

function sanitizeKey(s) {
  return (s || "").toString().toLowerCase().replace(/[^a-z0-9_]/g, "").slice(0, 32);
}

function sanitizeId(s) {
  return (s || "").toString().toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 100);
}

function targetUrl(merchant, brand, name) {
  if (!merchant.searchPath) return merchant.domain;
  // Stylevana / Foreo work best with "<brand> <name>" as a single search query.
  const q = [brand, name].filter(Boolean).join(" ").trim() || "skincare";
  return merchant.domain + merchant.searchPath + encodeURIComponent(q);
}

export async function onRequestGet({ params, request }) {
  const productId = sanitizeId(params.product);
  const url = new URL(request.url);
  const merchantKey = sanitizeKey(url.searchParams.get("m"));
  const brand = sanitize(url.searchParams.get("b"), 80);
  const name = sanitize(url.searchParams.get("n"), 120);

  const merchant = MERCHANTS[merchantKey];
  if (!merchant) {
    return Response.redirect("https://getskinscore.com/", 302);
  }

  const ued = targetUrl(merchant, brand, name);
  const clickref = productId || "home";
  return Response.redirect(buildAwin(merchant.mid, ued, clickref), 302);
}
