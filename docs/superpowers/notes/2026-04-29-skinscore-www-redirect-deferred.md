# www→apex redirect — RESOLVED via Pages Function middleware

**Original status:** deferred (CF Pages `_redirects` does not honor cross-host syntax, and the API token in `.env.master` lacks `Zone:Rulesets:Edit` scope to add a zone-level Single Redirect rule).

**Resolution:** instead of needing a zone-level rule, the redirect is now handled by `site/functions/_middleware.js` (Pages Function), which already exists for bot logging. Cross-host redirect logic was prepended to short-circuit at the edge before any asset serving.

**Commit:** `54f23f9` (deployed in run `25118690135` at 2026-04-29 ~15:42 UTC)

```js
// www → apex 301: cross-host redirect cannot be expressed in CF Pages
// _redirects (path-only syntax), so we short-circuit here at the edge
// before any asset serving or bot logging. preserve path + query.
const reqUrl = new URL(request.url);
if (reqUrl.hostname === "www.getskinscore.com") {
  reqUrl.hostname = "getskinscore.com";
  return Response.redirect(reqUrl.toString(), 301);
}
```

**Live verification 2026-04-29 17:43 local:**

| URL | Response | Location |
|---|---|---|
| `https://www.getskinscore.com/` | 301 | `https://getskinscore.com/` |
| `https://www.getskinscore.com/brand/la-mer/` | 301 | `https://getskinscore.com/brand/la-mer/` |
| `https://www.getskinscore.com/fr/ingredient/lactic-acid/` | 301 | `https://getskinscore.com/fr/ingredient/lactic-acid/` |
| `https://getskinscore.com/` (apex control) | 200 | — |
| `https://getskinscore.com/compare/` (apex control) | 200 | — |

Path + query string preserved. Permanent 301 (not 302, not 308).

**Why the middleware approach is preferable to the zone-level Single Redirect Rule we tried first:**
- No CF API token scope expansion required
- Lives in the repo (visible in git history, code-reviewable)
- Deploys via the existing GitHub Actions pipeline (no out-of-band dashboard step)
- Bot logging logic still runs for apex requests (the redirect short-circuits ONLY for www)

**Reusable pattern:** the same 4-line addition can be propagated to other STACK-2026 Astro+CF Pages projects with a www custom domain bound. Candidates per `auto_sync_projects.py` registry: any project where the GSC `sc-domain:` property exposes both apex and www variants in indexed URLs.

**Roll-back:** `git revert 54f23f9`. www returns to HTTP 200 dup-host state.
