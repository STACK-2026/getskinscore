# Pre-fix baseline + recovery check protocol

Captured **2026-04-29** at 17:30 local (15:30 UTC), ~10 minutes after the canonical/internal-linking fixes deployed (run 25117619927, sha ec513a7a).

## Pre-fix baseline (frozen)

### v_project_summary

| metric | skinscore | petfoodrate (control) |
|---|---:|---:|
| age_days | 18 | 19 |
| urls_total | 7 907 | 9 616 |
| imp_7d | **2 807** | 13 944 |
| clk_7d | **7** | 100 |
| imp_14d | 5 354 | 17 160 |
| avg_position | **18.1** | 11.3 |
| bot_hits_7d | 11 904 | 40 732 |
| ai_bot_hits_7d | **563** | 7 708 |

### Skinscore Googlebot daily (14j window)

```
2026-04-15 → 885   ← peak before crash
2026-04-16 →  86
2026-04-17 →  90
2026-04-18 →  24
2026-04-19 →  16
2026-04-20 →   8
2026-04-22 →   7   ← floor
2026-04-23 →   8
2026-04-24 →   6
2026-04-25 →  24
2026-04-26 →  53
2026-04-27 → 113
2026-04-28 → 364   ← partial recovery (pre-fix)
2026-04-29 →  25   ← partial-day, fix deployed at 15:21Z
```

## What deployed (commits on `main`, pushed in run 25117619927)

| sha | message |
|---|---|
| `bc8e410` | docs(plan): canonical + internal linking recovery plan + audit findings |
| `299be31` | fix(seo): lock trailingSlash always + directory format |
| `75ab65c` | fix(seo): add cross-host www→apex 301 in _redirects (does NOT fire — see deferred note) |
| `612e609` | feat(seo): rankings page links to /best/<concern>/ + /best/<type-concern>/ hubs |
| `ec513a7` | fix(seo): loosen sitemap brand filter from >=3 to >=1 products |

Production verification confirmed:
- ✅ `/compare` (no slash) → 308 → `/compare/`
- ✅ canonical href ends with `/`
- ✅ rankings has 18 `/best/` hubs (EN) + 18 (FR)
- ✅ Nivea brand page: 107 product links
- ✅ Sitemap entries: 631 → 2 269 (+1 638 brand pages)
- ❌ www.getskinscore.com still HTTP 200 (cross-host `_redirects` not honored — see `2026-04-29-skinscore-www-redirect-deferred.md`)

## Recovery check — run on 2026-05-04 (J+5)

Expected directionally healthy signals:
- Googlebot daily ≥ 100 sustained (vs 6-25 floor)
- imp_7d > 4 500 (vs 2 807 baseline)
- clk_7d > 15 (vs 7 baseline)
- avg_position < 17.0 (vs 18.1 baseline)
- ClaudeBot hits 7j > 50 (vs 1 baseline)
- 187 → ≥ 350 URLs with ≥ 1 GSC impression (14j window)

### One-shot SQL to compare

```bash
cd ~/stack-2026/intel-repo && python3 -c "
import sys; sys.path.insert(0, 'scripts')
from _common import intel_query

print('=== Skinscore vs petfoodrate now ===')
for r in intel_query(\"\"\"SELECT name, age_days, urls_total, imp_7d, clk_7d, imp_14d, avg_position, bot_hits_7d, ai_bot_hits_7d
FROM v_project_summary WHERE name IN ('skinscore','petfoodrate') ORDER BY name;\"\"\"): print(r)

print('=== Skinscore Googlebot last 7 days ===')
for r in intel_query(\"\"\"SELECT c.date, SUM(c.hits) AS google FROM crawl_daily c
JOIN urls u ON u.id=c.url_id JOIN projects p ON p.id=u.project_id
WHERE p.name='skinscore' AND c.bot_family='google' AND c.date >= CURRENT_DATE - INTERVAL '7 days'
GROUP BY c.date ORDER BY c.date;\"\"\"): print(r)

print('=== ClaudeBot recovery ===')
for r in intel_query(\"\"\"SELECT p.name, c.date, SUM(c.hits) FROM crawl_daily c
JOIN urls u ON u.id=c.url_id JOIN projects p ON p.id=u.project_id
WHERE p.name IN ('skinscore','petfoodrate') AND c.bot_family='claude'
AND c.date >= CURRENT_DATE - INTERVAL '7 days'
GROUP BY p.name, c.date ORDER BY c.date DESC LIMIT 14;\"\"\"): print(r)
"
```

### Decision tree

| Observation J+5 | Action |
|---|---|
| Googlebot ≥ 100/d sustained | ✅ canonical fix took. Move to www→apex (manual CF rule). |
| Googlebot still < 50/d | Investigate: maybe sitemap submit didn't fire — check intel-repo run history. |
| Brand pages now show in `gsc_daily` | ✅ sitemap loosening took. Re-evaluate product+ingredient filter loosening. |
| New "Discovered, currently not indexed" labels in GSC | Sitemap loosening too aggressive — revert brand >=1 → >=3. |

## GSC sitemap resubmit status

Triggered intel-repo workflow `submit-sitemap.yml` (run 25118018050) at 15:28 UTC on 2026-04-29 with:
- domain: `getskinscore.com`
- sitemap_urls: `https://getskinscore.com/sitemap-index.xml,https://getskinscore.com/sitemap-0.xml`

Status at 15:30 UTC: queued (self-hosted runner busy, runner-1 offline / runner-2 processing other workflow). Re-check via:
```
curl -s -H "Authorization: Bearer $PAT" \
  https://api.github.com/repos/STACK-2026/intel/actions/runs/25118018050 \
  | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('status'), d.get('conclusion'))"
```

If still queued/failed, manually re-trigger via the same dispatch endpoint. Or run locally (requires GSC creds in env, which currently live only in GitHub Secrets — would need to copy to `.env.master` first).
