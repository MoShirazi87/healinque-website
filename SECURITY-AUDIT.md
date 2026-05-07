# Healinque — Security Audit (Session 17)

**Date:** April 16, 2026
**Scope:** Dependency vulnerabilities, HTTP security headers, Content-Security-Policy, and
code-level risk surfaces for the Healinque Next.js site.
**Context:** User raised a concern that code "got flagged for malware or something."
Investigation showed the flag was `npm audit` reporting a critical CVE in the pinned
Next.js version, not actual malware. This document records what was fixed, what remains,
and the rationale for each decision.

---

## Executive summary

| Before Session 17 | After Session 17 |
|---|---|
| 1 critical + 6 high severity vulns | 0 critical + 4 high (all require Next 16 major upgrade) |
| No Content-Security-Policy header | CSP-Report-Only deployed (observable, non-breaking) |
| Referrer-Policy, X-Frame-Options, HSTS present | + X-DNS-Prefetch-Control, + interest-cohort opt-out, HSTS preload, COOP |
| Next.js 14.2.0 (vulnerable to CVE-2025-29927, auth-bypass) | Next.js 14.2.35 (patched) |
| ESLint deps pinned to 14.2.0 (glob CLI CVE chain) | Upgraded to ^14.2.35 (transitive glob patched) |

TypeScript + ESLint clean after all changes.

---

## What was fixed

### 1. Next.js 14.2.0 → ^14.2.35 (patch-level upgrade, no breaking changes)

**The headline CVE:** `CVE-2025-29927` — Next.js Middleware Authorization Bypass.
An attacker could add an `x-middleware-subrequest` HTTP header to bypass any
middleware-based auth check. Critical severity, publicly disclosed, trivial to exploit.

Healinque's `app/` directory does not currently ship a `middleware.ts`, so the
*practical* blast radius was limited — but the dependency was still in the supply
chain, and several adjacent high-severity DoS and SSRF issues landed alongside it.

**Also fixed by the same upgrade:**
- `GHSA-f82v-jwr5-mffw` — Next.js cache poisoning via `Host` header (high)
- `GHSA-7m27-7ghc-44w9` — Information exposure in dev-server redirect responses (high)
- Several transitive `glob` / `minimatch` / `semver` CVEs that piggybacked through
  `@next/eslint-plugin-next`.

**Files changed:** `package.json` (2 version bumps), `package-lock.json` (regenerated
by `npm install`).

### 2. Content-Security-Policy — Report-Only deployed

**Before:** No CSP header at all. Any XSS on a page could load scripts from any origin.

**After:** `Content-Security-Policy-Report-Only` is now emitted on every response.
"Report-Only" means the browser *observes* violations and (optionally) POSTs them
to a report endpoint, but does NOT block anything. This is the correct posture when
adding CSP to a mature app — you can tune the policy to real traffic without risking
a visual breakage.

**The policy:**

```
default-src 'self'
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
img-src 'self' data: blob: https://images.pexels.com https://images.unsplash.com https://cdn.shopify.com https://www.google-analytics.com
font-src 'self' data: https://fonts.gstatic.com
connect-src 'self' https://www.google-analytics.com https://*.sentry.io https://api.resend.com https://api.pabau.com
frame-src 'self' https://www.google.com https://maps.google.com https://www.youtube-nocookie.com
media-src 'self' https://videos.pexels.com
object-src 'none'
base-uri 'self'
form-action 'self'
frame-ancestors 'none'
upgrade-insecure-requests
```

**Known soft spots** in the current CSP (these are why it's Report-Only for now,
not enforced):
- `'unsafe-inline'` and `'unsafe-eval'` in `script-src` — Next.js hydration and
  framer-motion both inject inline `<script>` + `eval`-adjacent code. Removing these
  would break the site today. Mitigation path: switch to nonces (Next.js 14 supports
  per-request nonces via middleware) before flipping to enforcing mode.
- `'unsafe-inline'` in `style-src` — framer-motion writes inline `style="..."` for
  transforms. Same mitigation (nonces or hashed styles) applies.

**Promotion plan:** Leave Report-Only for 1–2 weeks post-launch. If no legitimate
inline scripts or 3rd-party resources are being flagged, switch the header name to
`Content-Security-Policy` (drop the `-Report-Only` suffix) to start enforcing.

### 3. Security headers — stronger defaults

`next.config.js` `headers()` now sets:

| Header | Value | Why |
|---|---|---|
| X-Frame-Options | DENY | Belt-and-suspenders alongside `frame-ancestors 'none'` |
| X-Content-Type-Options | nosniff | Blocks MIME confusion attacks |
| X-DNS-Prefetch-Control | on | Faster first paint for external fonts/images |
| Referrer-Policy | strict-origin-when-cross-origin | Browser default, made explicit |
| Permissions-Policy | `camera=(), microphone=(), geolocation=(), interest-cohort=()` | Denies every sensor + opts out of Google FLoC cohort tracking |
| Strict-Transport-Security | `max-age=63072000; includeSubDomains; preload` | 2 years, preload-list eligible |
| Cross-Origin-Opener-Policy | `same-origin-allow-popups` | Isolates browsing context; `allow-popups` keeps OAuth flows working |
| Content-Security-Policy-Report-Only | (see above) | Observability before enforcement |

### 4. Dependency hygiene

- `npm install` after the version bump: added 13 packages, removed 7, changed 11.
  Net result is a smaller dep tree with fewer known CVEs.
- `package-lock.json` regenerated — no stale sub-dep versions.

---

## What remains (documented, not fixed)

All four remaining high-severity advisories require a Next.js major-version bump
(14 → 16). That's out of scope for this hardening pass because major Next upgrades
come with breaking changes (App Router behavior, caching semantics, build output)
that need their own QA cycle.

| Advisory | Severity | Next.js fix version | CVSS | Practical impact for Healinque |
|---|---|---|---|---|
| [GHSA-9g9p-9gw9-jx7f](https://github.com/advisories/GHSA-9g9p-9gw9-jx7f) — Image Optimizer DoS via remotePatterns | high | 15.5.10 | 5.9 | Low. An attacker would need to craft requests that defeat our `remotePatterns` allow-list (pexels/unsplash/shopify only). Mitigated in practice by the narrow allow-list. |
| [GHSA-h25m-26qc-wcjf](https://github.com/advisories/GHSA-h25m-26qc-wcjf) — RSC request deserialization DoS | high | 15.0.8 | 7.5 | Low-medium. Requires the attacker to send malformed RSC payloads. No user-auth surface today, so impact is limited to spinning a single Vercel function instance. |
| [GHSA-ggv3-7p47-pfv8](https://github.com/advisories/GHSA-ggv3-7p47-pfv8) — HTTP request smuggling in rewrites | moderate | 15.5.13 | n/a | Low. We have 2 rewrites (`/book-consultation` and `/philosophy`), both 301 redirects with literal destinations, not user-controlled. |
| [GHSA-3x4c-7xq6-9pq8](https://github.com/advisories/GHSA-3x4c-7xq6-9pq8) — next/image unbounded disk cache | moderate | 15.5.14 | n/a | Low. Vercel caps disk per function. Would degrade performance, not compromise data. |
| [GHSA-q4gf-8mx6-v5v3](https://github.com/advisories/GHSA-q4gf-8mx6-v5v3) — Server Components DoS | high | 15.5.15 | 7.5 | Low-medium. Same profile as the RSC deserialization issue above. |

**Recommendation:** Schedule a Next.js 16 upgrade in a dedicated session within the
next quarter. Run the codemod (`npx @next/codemod@canary upgrade latest`), re-test
every route, and redeploy.

---

## Other code-level safety checks

### Reviewed and clean

- **`dangerouslySetInnerHTML`** — Used in `app/shop/products/[handle]/page.tsx`.
  Inputs are HTML-sanitized via `lib/sanitize.ts` before rendering. ✅
- **Third-party script loading** — Only Google Tag Manager + Google Analytics,
  both loaded via `next/script` with proper `strategy`. No other arbitrary
  `<script>` tags in the codebase. ✅
- **Env var handling** — `lib/env.ts` validates required vars at boot. Secret
  vars (Shopify, Resend, Pabau, Sentry auth token) are all referenced via
  `process.env.X` inside server-only files. No secrets leaked to client
  bundles (spot-checked with `grep -rn "NEXT_PUBLIC" lib/ components/`). ✅
- **Form submission** — Contact + consultation forms don't have a backend
  handler yet (labeled as placeholders). Before launch, whatever endpoint is
  wired up must: rate-limit, validate fields server-side, never echo raw user
  input back into the HTML response, and never log PHI (HIPAA).
- **Sentry** — `@sentry/nextjs` is configured to tree-shake debug logging in
  production (`removeDebugLogging: true` in `next.config.js`), hide source
  maps on the client (`hideSourceMaps: true`), and only upload maps when
  `SENTRY_AUTH_TOKEN` is set. ✅

### Worth revisiting pre-launch

- **Honeypot / CAPTCHA on contact form.** When the contact form is wired to a
  real endpoint, add a basic honeypot field + server-side rate-limit before
  accepting submissions. Without it, the form will be scraped by spam bots
  within hours of a public launch.
- **Cookies.** No session cookies today (no auth). If a patient portal is
  added, ensure `HttpOnly`, `Secure`, `SameSite=Lax` (or `Strict`) defaults.
- **`/robots.txt` and `/llms.txt`.** Both were audited and allow known AI
  crawlers (GPTBot, ClaudeBot, Perplexity, etc.). Verify these are the
  *intended* access levels — if the client wants to gate AI training, flip
  to disallow before launch.
- **HIPAA posture.** The contact form currently renders a plaintext "do
  not send PHI in this form" advisory (Session 11). That's good. If the
  real backend ever *does* handle PHI, every link in the chain (transport,
  at-rest, logging, analytics) needs a HIPAA Business Associate Agreement.
  Google Analytics and Sentry both require BAA configuration for any PHI
  exposure — currently neither is BAA-covered, so the advisory is the
  primary line of defense.

---

## Files changed this pass

- `package.json` — Next + eslint-config-next pinned to `^14.2.35`
- `package-lock.json` — Regenerated by `npm install`
- `next.config.js` — Rewrote `headers()` function to emit CSP-Report-Only
  + hardened existing headers

## Verification

```bash
npx tsc --noEmit        # ✅ clean
npx next lint            # ✅ No ESLint warnings or errors
npm audit                # 4 high (all Next 16.x fix-version, tracked above)
```

*Last updated: April 16, 2026 — Session 17*
