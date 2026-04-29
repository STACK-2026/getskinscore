# www→apex redirect — DEFERRED, requires manual CF dashboard action

## What was attempted

The plan's Phase 2 added a cross-host rule to `site/public/_redirects`:

```
https://www.getskinscore.com/* https://getskinscore.com/:splat 301!
```

Verified post-deploy on 2026-04-29: **the rule does NOT fire** — Cloudflare Pages does not honor cross-host syntax in `_redirects`. www.getskinscore.com still serves HTTP 200 with the same content as the apex.

## Why the API path failed

Tried via `CLOUDFLARE_API_TOKEN` from `.env.master`:

| Approach | Result |
|---|---|
| `PUT /zones/{id}/rulesets/phases/http_request_dynamic_redirect/entrypoint` (Single Redirect rule) | 403 "request is not authorized" — token lacks `Zone:Rulesets:Edit` scope |
| `POST /zones/{id}/pagerules` (legacy Page Rule) | 1011 "Page Rules endpoint does not support account owned tokens" |
| `DELETE /accounts/{id}/pages/projects/getskinscore-site/domains/www.getskinscore.com` | Succeeded but caused HTTP 522 → restored immediately |

The current token has Pages-write scope but not Zone-Rulesets-write. Re-adding the domain restored service: domains list now `['getskinscore-site.pages.dev', 'getskinscore.com']` (www re-binding in `initializing` state, but DNS+cache serves HTTP 200).

## Manual steps to finish the fix

**Option A (recommended) — Single Redirect Rule via Cloudflare dashboard:**
1. Go to Cloudflare → Zone `getskinscore.com` → Rules → Redirect Rules → "Create rule".
2. Rule name: `www → apex 301`
3. **If incoming requests match...**: Custom filter expression
   - Field: `Hostname`, Operator: `equals`, Value: `www.getskinscore.com`
4. **Then...**: 
   - Type: `Static`
   - URL redirect: `https://getskinscore.com${http.request.uri.path}` (use Dynamic if Static rejects)
   - Status code: `301`
   - Preserve query string: ON
5. Save. Verify with `curl -sI https://www.getskinscore.com/` — expect `HTTP/2 301` + `location: https://getskinscore.com/`.

**Option B — provide a CF token with `Zone:Rulesets:Edit` scope** in `.env.master`, then I can apply via API:
```
CLOUDFLARE_API_TOKEN_RULESETS=... # scoped to Zone:Rulesets:Edit on getskinscore.com
```

## Until this lands

The 14+ existing `www.getskinscore.com/...` URLs in GSC will keep dual-indexing. Recovery from canonical fix (Task 1, working) + sitemap loosening (Task 7) + rankings hubs (Task 5) will still drive most of the Googlebot crawl-budget recovery. The www leak accounts for ~5-7% of imp leakage based on top-URL audit (top www URLs: 63 + 47 + 35 + ~14 more × ~10 imp ≈ 250 imp/14d out of ~5000 total).

So this is a secondary fix, not a blocker. Logging it here for follow-up.

## Roll-back (if Option A misbehaves)

Delete the redirect rule in CF dashboard. www.getskinscore.com returns to HTTP 200 dup-host state.
