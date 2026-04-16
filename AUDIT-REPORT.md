# Healinque Website — Full Audit Report

**Date:** April 11, 2026
**Auditor:** Claude (AI-assisted)
**Domain:** healinque.com
**Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion

---

## Executive Summary

The Healinque website is a well-architected Next.js 14 application with 88 pages, strong visual design, and a solid foundation for SEO. However, the audit uncovered **10 critical issues**, **10 high-priority issues**, and **7 medium-priority items** that need attention before launch. The most impactful problems are: incorrect business hours in the schema markup (which Google reads directly), broken internal links to nonexistent pages, missing error/loading states, and performance issues from unoptimized video and image delivery. Fixing just the critical and high-priority items would significantly improve SEO readiness, user experience, and code reliability.

---

## 1. Code Quality & Structure

### What's Working Well

The codebase is cleanly organized with good separation of concerns: data in `lib/data/`, config in `lib/config/`, reusable sections in `components/sections/`, and proper use of Next.js App Router conventions. TypeScript strict mode is enabled, no `console.log` statements were found in production code, and there are no `ts-ignore` comments. The component hierarchy is logical and maintainable.

### Critical Issues

**Missing error handling infrastructure.** There is no `not-found.tsx` at the app root, meaning users who hit a bad URL get an unstyled Next.js default 404. Similarly, there is no `error.tsx` for global error boundaries — if a component throws at runtime, users see a crash screen. No `loading.tsx` files exist for the dynamic routes (`treatments/[slug]`, `concerns/[slug]`, `shop/products/[handle]`), so navigating between pages shows no loading indicator.

**The treatment detail page (`app/treatments/[slug]/page.tsx`) is a client component using `useParams()`.** This is an anti-pattern in Next.js 14 — dynamic route pages should be server components that receive params directly. The current approach means the entire treatment data array (2000+ lines) ships to the client as JavaScript, hurting page load performance and preventing static generation.

**Broken internal links.** The `/philosophy` button in the about section links to a page that doesn't exist. Blog post cards all link to `#` instead of real article pages. The shop references `/shop/gift-cards` with no corresponding route. These will all 404 in production.

### Security Concern

The product detail page at `app/shop/products/[handle]/page.tsx:149` uses `dangerouslySetInnerHTML` to render Shopify product descriptions without any HTML sanitization library. While Shopify data is generally trusted, this creates an XSS risk if product data is ever compromised.

---

## 2. SEO Audit

### On-Page SEO

**Title tags** are well-implemented. The homepage has a descriptive, keyword-rich title ("Healinque | Physician-Led Aesthetics & Longevity Center in San Diego, CA") within the 60-character limit. The template pattern `%s | Healinque` ensures consistency across pages.

**Meta descriptions** are present on the homepage and layout level, properly within 150-160 characters, and include calls to action. Individual treatment and concern pages inherit descriptions from their data models.

**H1 tags** are properly implemented — one per page, keyword-rich, and semantic.

**Keywords** in `siteConfig.seo.keywords` cover good primary terms: "dermatologist San Diego", "medical spa San Diego", "Botox San Diego", "EyeGlow under eye treatment". However, several high-opportunity keywords are missing (see keyword table below).

### Schema Markup Issues

**Business hours are wrong in the schema.** This is critical because Google reads schema markup directly for Knowledge Panel display. The schema says weekdays close at 18:00 (6 PM) and Saturday opens at 09:00 and closes at 14:00, but the actual hours in site config are weekdays 9-5 PM (17:00) and Saturday 10 AM-3 PM (15:00). This means Google would show incorrect hours.

**PhysicianSchema has a generic `alumniOf`.** The `alumniOf` field just says "Medical School" instead of listing Mayo Clinic, UC San Diego, and Harvard Medical School — a missed opportunity for authority signals.

**Phone number format in schema** uses raw digits (`8583377999`) without the `+1` country code prefix that schema.org recommends.

**Schema images reference local files** (`/images/clinic-exterior.jpg`, `/images/treatment-room.jpg`) that need verification to confirm they exist in the `/public` directory.

### Sitemap & Robots

The dynamic sitemap at `app/sitemap.ts` covers core pages, treatments, concerns, and locations — good coverage. However, it's **missing several important pages**: `/mens-clinic`, `/gallery`, `/shop`, `/blog`, `/about/healinque-method`, and category pages. The `robots.ts` correctly disallows `/api/`, `/admin/`, and `/account/`.

### Missing SEO Elements

**No canonical URLs** on individual treatment, concern, or location pages. Only the homepage has a canonical set. This creates duplicate content risk, especially for dynamic routes.

**BreadcrumbSchema exists but is never used.** The component is defined in `schema.tsx` but no page imports it, missing out on breadcrumb rich results in Google.

**Google Search Console verification** is a placeholder string (`"your-google-verification-code"`) in `layout.tsx:88`.

**No security headers** configured in `next.config.js` — missing Content-Security-Policy, X-Frame-Options, and other production headers.

### Keyword Opportunity Table

| Keyword | Est. Difficulty | Opportunity | Current Status | Intent | Recommended Content |
|---------|----------------|-------------|----------------|--------|-------------------|
| EyeGlow treatment San Diego | Easy | High | Not targeted | Commercial | Dedicated landing page |
| dark circles treatment dermatologist | Easy | High | Mentioned in concerns | Commercial | Expand concern page + blog |
| board certified dermatologist aesthetics San Diego | Moderate | High | In meta description | Commercial | About page optimization |
| regenerative aesthetics San Diego | Easy | High | Category exists | Commercial | Pillar page |
| longevity medicine San Diego | Easy | High | In keywords list | Informational | Blog series + landing page |
| men's aesthetic clinic San Diego | Easy | High | Page exists | Commercial | Optimize mens-clinic page |
| PRP hair restoration San Diego | Moderate | High | Treatment page exists | Commercial | Expand content, add FAQs |
| Morpheus8 RF microneedling San Diego | Moderate | High | Treatment page exists | Commercial | Add before/after, comparison |
| PDO thread lift San Diego | Moderate | Medium | Treatment page exists | Commercial | Add comparison content |
| med spa near Rancho Bernardo | Easy | Medium | Location page exists | Local | Optimize location page |
| non-surgical face lift San Diego | Moderate | Medium | Not targeted | Commercial | New blog/landing page |
| Botox San Diego best dermatologist | Hard | Medium | Partially targeted | Commercial | Reviews page + schema |
| peptide therapy San Diego | Easy | Medium | Treatment page exists | Informational | Expand content |
| IV NAD+ therapy San Diego | Easy | Medium | Treatment page exists | Commercial | Blog content |
| GLP-1 weight loss doctor San Diego | Moderate | Medium | Coming soon page | Commercial | Launch page when ready |
| under eye filler San Diego | Moderate | Medium | Mentioned in fillers | Commercial | Dedicated section |
| hormone optimization San Diego | Easy | Medium | Coming soon | Commercial | Launch page when ready |
| best dermal fillers San Diego | Hard | Low | Treatment page exists | Commercial | Comparison content |
| Sculptra San Diego | Moderate | Low | Not listed | Commercial | Add if offered |
| chemical peel San Diego | Moderate | Low | Treatment page exists | Commercial | Expand with types |

### Competitor Comparison

| Dimension | Healinque | Dermacare SD | La Jolla Cosmetic | SDBotox |
|-----------|-----------|-------------|-------------------|---------|
| Location count | 1 | 5 | 3 | 1 |
| Treatment pages | 33+ | 50+ | 40+ | 15+ |
| Blog content | Placeholder | Active blog | Active blog | Minimal |
| Before/after gallery | Placeholder | Extensive | Extensive | Present |
| Schema markup | 3 types | Basic | Basic | Minimal |
| Provider credentials | Top Allergan | Black Diamond | Award-winning | Top 1% Allergan |
| Local SEO pages | 5 locations | Location-specific | Multi-location | San Diego focused |
| Key advantage | Board-certified derm, EyeGlow inventor | Multi-location, 18yr history | Award recognition | Botox specialization |

**Healinque's biggest competitive edge** is Dr. Shirazi's unique credentials (board-certified derm, Mayo/Harvard trained, EyeGlow inventor). The website should lean harder into this differentiation, especially since competitors are mostly nurse practitioner or PA-led.

---

## 3. Content Audit

### Content MD File

No separate content markdown file was found in the repository. All website copy lives within TypeScript data files and inline JSX. If a master content document exists elsewhere (Google Drive, Notion, etc.), it should be provided so we can cross-reference for accuracy.

### Content Inconsistencies Found

**Location confusion.** The README states "Poway, California" but the business address is 12625 High Bluff Dr Suite 115, San Diego, CA 92130 (Del Mar Heights/Carmel Valley area). Several location pages describe the clinic as being "in Poway" which is inaccurate — Poway is a nearby community, but the clinic is in San Diego. This matters for local SEO accuracy.

**Instagram handle discrepancy.** The site config lists `@ThrivewithDr.Azi` but web research shows Dr. Shirazi's established Instagram presence is `@skinbydrazi` (with significant following). This needs to be verified with the client.

**Quote mismatch.** The about-philosophy section uses a generic quote ("Every patient deserves a personalized approach that honors their unique beauty") while `siteConfig.doctor.philosophy` contains a different, better quote ("Beauty is not about becoming someone else. It's about becoming the most refined version of yourself."). The branded quote should be used.

**Placeholder content.** Gallery page shows "Professional Photos Coming Soon", booking page says "Pabau — coming soon", and treatment pages say "Before & after gallery coming soon". These need real content before launch.

---

## 4. Image Audit

### What's Working Well

All images use descriptive, contextual alt text (not generic strings). The Image component from Next.js is used properly throughout with `fill` mode for responsive images. External images from Pexels are properly configured in `next.config.js` remote patterns.

### Issues

**Missing `sizes` prop on 9 Image components.** Without `sizes`, Next.js can't optimize responsive image delivery, meaning browsers may download images larger than needed. Affected components: `before-after.tsx`, `featured-treatments.tsx`, `services-grid.tsx`, `dr-azi-intro.tsx` (2), `location-showcase.tsx` (2), `about-philosophy.tsx`, `about-content.tsx` (2), and `shop/products/[handle]/page.tsx` (2).

**Duplicate Pexels URLs.** The same base image (e.g., `pexels-photo-7579831`) is used in 3 different components with different width parameters. While this works, it means the browser downloads multiple versions of the same image. Consolidating through the central `images.ts` file would be cleaner.

**OG image may not exist.** The Open Graph meta tags reference `/images/og-home.jpg` and `/images/og-image.jpg`. These must be verified as present in the `/public/images/` directory, otherwise social sharing previews will be broken.

**Schema references unverified local images.** The LocalBusinessSchema references `/images/clinic-exterior.jpg` and `/images/treatment-room.jpg` which need to be confirmed in `/public`.

---

## 5. Performance Audit

### Critical Performance Concerns

**UHD video autoplay on all devices.** The homepage hero loads a 2560x1440 video (`4350888-uhd_2560_1440_30fps.mp4`) from Pexels on every page load, including mobile. There's no responsive video strategy, no `prefers-reduced-motion` check, and no mobile fallback. This single file likely exceeds 10MB and will destroy mobile page load times.

**Framer Motion on every page.** Nearly every component imports Framer Motion as a client component, meaning the Framer Motion library (~30KB gzipped) is included in the initial JavaScript bundle. Many of these animations (fade-in, slide-up) could be achieved with CSS animations or the lighter `motion/react` import.

**No image optimization pipeline.** All images come from Pexels CDN at fixed sizes rather than through Next.js Image optimization. While Next.js does optimize on-the-fly, the lack of `sizes` props means suboptimal delivery.

### Performance Positives

Font loading uses `display: "swap"` to prevent FOIT. The `next/font/google` approach for Cormorant Garamond and Montserrat is optimal. Tailwind CSS purges unused styles in production. The viewport meta tag is properly configured.

---

## 6. Prioritized Action Plan

### Quick Wins (do this week)

1. **Fix schema hours** — Change `schema.tsx` weekday close to `17:00` and Saturday to `opens: 10:00, closes: 15:00`. Impact: High. Effort: 5 minutes.
2. **Fix /philosophy broken link** — Change to `/about/healinque-method` or `/about`. Impact: Medium. Effort: 2 minutes.
3. **Add `sizes` prop** to all 9 Image components missing it. Impact: Medium. Effort: 30 minutes.
4. **Update README** location from "Poway" to "San Diego". Impact: Low. Effort: 2 minutes.
5. **Use branded quote** from `siteConfig.doctor.philosophy` in about-philosophy section. Impact: Low. Effort: 5 minutes.
6. **Add missing pages to sitemap** (`/mens-clinic`, `/gallery`, `/shop`, `/blog`). Impact: Medium. Effort: 15 minutes.
7. **Verify OG images and schema images exist** in `/public/images/`. Impact: High. Effort: 10 minutes.
8. **Fix phone format in schema** to include `+1` prefix. Impact: Low. Effort: 2 minutes.
9. **Update PhysicianSchema alumniOf** with actual institutions. Impact: Medium. Effort: 10 minutes.

### Strategic Investments (this quarter)

1. **Add `not-found.tsx`, `error.tsx`, and `loading.tsx`** for all dynamic routes. Impact: High. Effort: Half day.
2. **Convert `treatments/[slug]`** to a server component with proper data fetching from `lib/data/treatments.ts`. Impact: High. Effort: 1 day.
3. **Implement responsive video strategy** — serve compressed/smaller video on mobile, respect `prefers-reduced-motion`. Impact: High. Effort: Half day.
4. **Create EyeGlow dedicated landing page** — this is the strongest unique differentiator and an easy keyword to rank for. Impact: High. Effort: 1 day.
5. **Build real blog with 5-10 initial posts** targeting identified keyword opportunities. Impact: High. Effort: 1-2 weeks.
6. **Add before/after gallery** with real patient photos. Impact: High. Effort: Depends on photo availability.
7. **Implement breadcrumb schema** on all inner pages using the existing BreadcrumbSchema component. Impact: Medium. Effort: Half day.
8. **Add canonical URLs** to all dynamic route pages. Impact: Medium. Effort: 2 hours.
9. **Set up Google Search Console** with real verification code. Impact: High. Effort: 30 minutes.
10. **Add security headers** in `next.config.js` (CSP, X-Frame-Options, etc.). Impact: Medium. Effort: 2 hours.

---

*This report should be reviewed alongside `claude.md` which tracks the status of each fix as changes are made.*
