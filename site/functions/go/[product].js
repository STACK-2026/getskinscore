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

// --- Amazon (universal fallback, geo-routed by visitor country) ---------------
// Marketplaces are region-locked: a US visitor must land on amazon.com, a UK one
// on amazon.co.uk, etc. Each marketplace needs its own Associates tracking tag,
// supplied via CF Pages env (AMAZON_TAG_US / AMAZON_TAG_UK / AMAZON_TAG_FR).
const AMAZON_MARKETPLACES = {
  com: { domain: "https://www.amazon.com", tagEnv: "AMAZON_TAG_US" },
  couk: { domain: "https://www.amazon.co.uk", tagEnv: "AMAZON_TAG_UK" },
  fr: { domain: "https://www.amazon.fr", tagEnv: "AMAZON_TAG_FR" },
};

function amazonMarketplaceForCountry(country) {
  const c = (country || "").toUpperCase();
  if (["GB", "UK", "IE"].includes(c)) return "couk";
  if (["FR", "BE", "LU", "MC"].includes(c)) return "fr";
  return "com"; // US/CA + everything else (English content defaults to .com)
}

// Resolve the tag for a marketplace, falling back so a link is never tag-less:
// missing US/UK tag -> use whatever is configured, finally the confirmed FR tag.
function resolveAmazonTag(env, mpKey) {
  const e = env || {};
  return (
    e[AMAZON_MARKETPLACES[mpKey].tagEnv] ||
    e.AMAZON_TAG_US ||
    e.AMAZON_TAG_UK ||
    e.AMAZON_TAG_FR ||
    "litiereagglo-21" // reused parc FR tag (amazon.fr) as last-resort default
  );
}

function buildAmazonUrl(env, country, brand, name, clickref) {
  const mpKey = amazonMarketplaceForCountry(country);
  const mp = AMAZON_MARKETPLACES[mpKey];
  const tag = resolveAmazonTag(env, mpKey);
  const q = [brand, name].filter(Boolean).join(" ").trim() || "skincare";
  const params = new URLSearchParams({
    k: q,
    tag,
    linkCode: "ll2",
    ascsubtag: clickref,
  });
  return `${mp.domain}/s?${params.toString()}`;
}

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

// Block known bot UAs upstream to keep affiliate funnel data clean and avoid
// leaking deep links to crawlers. Aligned with petfoodrate /go/ filter.
const BOT_UA_REGEX = /bot|crawl|spider|slurp|facebookexternalhit|linkedinbot|twitterbot|whatsapp|telegram|googlebot|bingbot|yandexbot|baiduspider|duckduckbot|gptbot|claudebot|perplexitybot|amazonbot|applebot|ccbot|bytespider|headlesschrome|preview|fetch|http-client|libwww|wget|curl\//i;
function isBotUA(ua) {
  if (!ua) return true;
  return BOT_UA_REGEX.test(ua);
}

export async function onRequestGet({ params, request, env }) {
  if (isBotUA(request.headers.get("User-Agent"))) {
    return new Response("Forbidden", {
      status: 403,
      headers: { "X-Robots-Tag": "noindex, nofollow" },
    });
  }

  const productId = sanitizeId(params.product);
  const url = new URL(request.url);
  const merchantKey = sanitizeKey(url.searchParams.get("m"));
  const brand = sanitize(url.searchParams.get("b"), 80);
  const name = sanitize(url.searchParams.get("n"), 120);
  const clickref = productId || "home";

  // Amazon: geo-route to the visitor's local marketplace with its tag.
  if (merchantKey === "amazon") {
    const country = request.headers.get("CF-IPCountry") || "";
    return Response.redirect(buildAmazonUrl(env, country, brand, name, clickref), 302);
  }

  const merchant = MERCHANTS[merchantKey];
  if (!merchant) {
    return Response.redirect("https://getskinscore.com/", 302);
  }

  const ued = targetUrl(merchant, brand, name);
  return Response.redirect(buildAwin(merchant.mid, ued, clickref), 302);
}
