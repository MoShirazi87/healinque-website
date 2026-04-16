# Healinque Website — Implementation Plan

**Date:** April 11, 2026
**Phases:** 8
**Estimated total effort:** 3–5 working days across all phases

---

## Phase 1: Content Sync (WEBSITE-CONTENT.md → Code)

Bring the website code in line with the master content file. The content file is the source of truth.

**1.1 — Hero Carousel Text**
- Slide 1 description → "Board-certified dermatologist Dr. Azadeh Shirazi combines medical precision with artistic vision for results that look like you — only better."
- Slide 1 sub-heading → "Physician-Led Aesthetic Dermatology"
- Slide 2 heading → "The Science of Aging Well"
- Slide 2 description → "Evidence-based therapies designed to optimize your health from the inside out — because how you feel matters as much as how you look."
- Slide 2 CTA2 → "Learn More" → /about (not /treatments)
- Files: `components/sections/hero.tsx` lines 22-49

**1.2 — About Philosophy Section**
- Replace generic paragraphs with content file text ("At Healinque, we believe that lasting results start beneath the surface…" and "Every treatment is tailored to your individual anatomy…")
- Replace generic quote with branded quote: "Beauty is not about becoming someone else. It's about becoming the most refined version of yourself."
- Files: `components/sections/about-philosophy.tsx` lines 115-136

**1.3 — Mega Menu Restructure**
- Add Concerns as top-level column
- Add missing items: Daxxify, Morpheus8, IPL Photo Facial, Medical-Grade Skincare per content file
- Match content file column structure exactly
- Files: `components/navigation/header.tsx` lines 12-66

**1.4 — Treatment Data Sync**
- Update all 18 treatments in `lib/data/treatments.ts` to match content file descriptions, taglines, pricing, FAQs, "How It Works" steps, and "Ideal For" lists
- This is the big one — the content file has significantly more detailed, nuanced copy (especially around risks, realistic expectations, and FDA disclaimers)
- Files: `lib/data/treatments.ts`, `app/treatments/[slug]/page.tsx`

**1.5 — Homepage FAQ Sync**
- Replace current FAQ content with the 6 specific Q&As from content file (age requirements, results duration, first consultation, pain, financing, cancellation)
- Files: `components/sections/faq-section.tsx` or `components/sections/faq.tsx`

**1.6 — Men's Clinic Page**
- Sync services, packages (Executive Refresh $650, Jawline $2,400, Power Hour $400, Full Rebuild $499/mo), FAQs, and "Why Men Choose Healinque" section with content file
- Files: `app/mens-clinic/page.tsx`

**1.7 — Memberships Page**
- Sync three tiers (Glow $149, Wellness $249, Elite $399) + 7 signature packages + pricing comparison table + FAQs
- Files: `app/memberships/page.tsx`

**1.8 — Reviews Page**
- Add the 8 specific patient reviews from content file (Sarah Mitchell, Jennifer Chen, Michael Rogers, Patricia Valencia, David Park, Linda Hartley, Robert Sutton, Amanda Wells)
- Files: `app/reviews/page.tsx`

**1.9 — Concern Slug Consistency**
- Content file uses `/concerns/fine-lines-wrinkles` but code uses `/concerns/wrinkles-fine-lines`. Standardize on the content file's slug convention across all concern pages and internal links.
- Files: `lib/data/concerns.ts`, all pages/components linking to concerns

**1.10 — CTA URL Consistency**
- Content file uses `/book-consultation` in places. Standardize on `/book` (the actual route that exists) everywhere, or create a redirect from `/book-consultation` → `/book`.
- Files: Multiple components

---

## Phase 2: Fix All Broken Links & Missing Pages

Zero tolerance for 404s.

**2.1 — Create missing route files**
- `app/not-found.tsx` — branded 404 page using content file's "Treatment Not Found" copy
- `app/error.tsx` — global error boundary with Healinque branding
- `app/treatments/[slug]/loading.tsx` — skeleton loader
- `app/concerns/[slug]/loading.tsx` — skeleton loader
- `app/shop/products/[handle]/loading.tsx` — skeleton loader

**2.2 — Fix broken links**
- `/philosophy` in about-philosophy.tsx → change to `/about/healinque-method`
- Blog post cards linking to `#` → make non-clickable teasers with "Coming Soon" badge, or create real blog routes
- `/shop/gift-cards` → either create page or remove link from shop page
- Verify every mega menu link resolves to a real route (check: `prp-facial`, `laser-resurfacing`, `regenerative-consultation`)

**2.3 — Add redirect from /book-consultation → /book**
- Create `app/book-consultation/page.tsx` that redirects, or use Next.js redirects in `next.config.js`

---

## Phase 3: SEO Overhaul + Authority Building

**3.1 — Critical Schema Fixes**
- Fix schema hours: weekday close → `17:00`, Saturday → `opens: 10:00, closes: 15:00`
- Fix phone format → `+18583377999`
- Update `alumniOf` → Mayo Clinic, UC San Diego, Harvard Medical School (Wellman Center)
- Replace Google verification placeholder with env variable
- Files: `components/seo/schema.tsx`, `app/layout.tsx`

**3.2 — Sitemap Expansion**
- Add: `/mens-clinic`, `/gallery`, `/shop`, `/blog`, `/about/healinque-method`, treatment category pages
- Files: `app/sitemap.ts`

**3.3 — Canonical URLs + Breadcrumbs**
- Add canonical URL to every dynamic page (treatments, concerns, locations, products)
- Wire up existing `BreadcrumbSchema` component on all inner pages
- Files: All dynamic route pages, `components/seo/schema.tsx`

**3.4 — Page-Level Meta Descriptions**
- Ensure every page has a unique, keyword-rich meta description (not inheriting the global one)
- Target primary keywords per page from the keyword opportunity table in the audit report

**3.5 — Security Headers**
- Add to `next.config.js`: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Strict-Transport-Security

**3.6 — Location SEO Fix**
- Update README from "Poway, California" → "San Diego, California"
- Update location pages to say "serving the Poway/Rancho Bernardo area from our San Diego (Del Mar/Carmel Valley) location" — accurate but still SEO-friendly for nearby search terms
- Files: `README.md`, `app/locations/[slug]/page.tsx`, `lib/data/locations.ts`

**3.7 — Directory Listings & Authority Building (NEW)**

This is essential for local SEO — directories send trust signals to Google and build citation consistency (NAP: Name, Address, Phone).

**Priority 1 — Claim and complete these profiles immediately:**
- Google Business Profile (most important — drives Knowledge Panel and Maps)
- Yelp Business (high domain authority, people search here)
- Healthgrades (medical-specific, high trust)
- RealSelf (aesthetic medicine-specific, patients actively searching)
- WebMD physician directory
- Zocdoc (if accepting new patients)

**Priority 2 — Medical/aesthetic-specific directories:**
- AEDIT (Dr. Shirazi already has a profile — claim and update it)
- Portrait Care (med spa directory, active in San Diego market)
- American Academy of Dermatology "Find a Dermatologist" tool
- American Board of Dermatology verification listing
- Scripps Health physician directory (she's affiliated)
- Castle Connolly / Top Doctors (if eligible)

**Priority 3 — General business directories:**
- Apple Maps / Apple Business Connect
- Bing Places for Business
- Facebook Business Page (create and keep updated)
- Instagram Business profile (verify correct handle)
- Better Business Bureau (BBB)
- Chamber of Commerce — San Diego Regional

**Priority 4 — Backlink opportunities:**
- Submit press release for Healinque launch to local San Diego media (SD Union-Tribune, SD Magazine, La Jolla Light)
- Guest posts or expert quotes in beauty/health publications
- Partner with local businesses for cross-linking (gyms, wellness centers, salons in 92130 area)

**Key rule for all directory listings:** NAP must be identical everywhere — "Healinque Wellness & Longevity Center", "12625 High Bluff Dr Suite 115, San Diego, CA 92130", "(858) 337-7999". Any inconsistency hurts local SEO rankings.

**3.8 — Structured Data Enhancements**
- Add FAQSchema to homepage FAQ section and individual treatment pages (rich results in Google)
- Add ServiceSchema to individual treatment pages
- Consider adding ReviewSchema once real Google reviews are collected

---

## Phase 4: Image System Overhaul — Dynamic Image Library with Alternates

**4.1 — Build a centralized image library with 3 alternates per slot**

Instead of one image per location, every image slot in the library will have 3 curated alternates. The website randomly selects one on each page load — so the site feels fresh and alive every visit.

New structure for `lib/data/images.ts`:

```typescript
// Each image slot has 3 alternates + optional video
interface ImageSlot {
  primary: string;
  alt1: string;
  alt2: string;
  video?: string;  // optional looping video for that slot
  altText: string;  // descriptive alt text
}
```

**Image slots to build out (with 3 alternates each):**
- Hero backgrounds (3 slides × 3 alternates = 9 images)
- Treatment category cards (5 categories × 3 = 15 images)
- Individual treatment images (18 treatments × 3 = 54 images)
- Clinic/location images (4 slots × 3 = 12 images)
- Testimonial portraits (9 existing, expand to 12+)
- Lifestyle/wellness images (4 slots × 3 = 12 images)
- About page / Dr. Shirazi section (3 alternates)

**Source images from:** Pexels (free, already configured), Unsplash (already configured in next.config.js). All curated to match the warm, golden, luxury aesthetic direction.

**4.2 — Create a `useRandomImage` hook**

```typescript
// lib/hooks/useRandomImage.ts
function useRandomImage(slot: ImageSlot): string {
  // Returns a random image from the 3 alternates
  // Persists choice for session to avoid layout shift
}
```

**4.3 — Create an `ImageSlideshow` component**

For sections that want the slideshow effect (hero, about, treatment detail pages), create a reusable component that crossfades between all 3 alternates on a timer.

```typescript
// components/ui/image-slideshow.tsx
// Props: images (3 URLs), interval (default 6s), transition style
// Smooth crossfade between images
```

**4.4 — Video alternatives**

Some slots can have a looping video as an option. The hero already does this, but extend to:
- Treatment category headers (subtle ambient video backgrounds)
- About page hero
- Men's clinic hero

Videos sourced from Pexels (already configured). Serve compressed versions for mobile (see Phase 8).

**4.5 — Fix existing image issues**
- Add `sizes` prop to all 9+ Image components missing it
- Eliminate duplicate Pexels URLs — everything goes through the central library
- Verify all `/public/images/` references exist (OG images, schema images, logo files)
- Replace raw `<img>` logo in header with Next.js Image component

---

## Phase 5: Code Quality & Architecture

**5.1 — Convert treatment detail page to server component**
- Remove `"use client"` and `useParams()` from `app/treatments/[slug]/page.tsx`
- Use proper `params` prop
- Pull data from `lib/data/treatments.ts` instead of 2000+ lines of hardcoded data

**5.2 — Extract page content into named components**
- Create `components/pages/` directory
- Extract: `home-page.tsx`, `contact-page.tsx`, `treatments-page.tsx`, `treatment-detail-page.tsx`, `shop-page.tsx`, `cart-page.tsx`, `login-page.tsx`, `signup-page.tsx`, `concern-detail-page.tsx`
- `page.tsx` files become thin wrappers (metadata + import/re-export)
- Solves "20 tabs all named page.tsx" problem

**5.3 — Add error/loading infrastructure**
- Create `components/errors/` directory with branded error components
- Create `components/skeletons/` directory with skeleton loaders matching page layouts

**5.4 — Environment variable validation**
- Add runtime check in Shopify and Healthie clients that throws clear errors if env vars are missing

**5.5 — HTML sanitization**
- Add DOMPurify to sanitize `dangerouslySetInnerHTML` in Shopify product page

---

## Phase 6: Performance

**6.1 — Responsive video strategy**
- Hero: detect viewport width, serve 720p on mobile instead of 2560x1440 UHD
- Add `prefers-reduced-motion` media query — show static poster image instead of video
- Lazy-load videos below the fold
- Set `preload="none"` on non-hero videos, `preload="metadata"` on hero

**6.2 — Reduce Framer Motion footprint**
- Audit every `"use client"` component — identify which ones use Framer Motion only for simple fade/slide animations
- Replace simple animations with CSS `@keyframes` + Tailwind `animate-*` classes
- Keep Framer Motion only for: hero carousel, mobile menu, mega menu (interactive animations)
- This could reduce JS bundle by ~30KB gzipped

**6.3 — Image delivery optimization**
- With `sizes` props fixed, Next.js will serve properly sized images
- Add `loading="lazy"` to below-fold images (Next.js does this by default for non-priority images)
- Consider adding `placeholder="blur"` with blurDataURL for above-fold images

---

## Phase 7: Content Enhancements (Beyond Audit)

**7.1 — Instagram handle verification**
- Confirm `@ThrivewithDr.Azi` vs `@skinbydrazi` with Mo
- Update `lib/config/site.ts` lines 52, 92

**7.2 — Add missing homepage sections from content file**
- Differentiators section (6 cards — fully spec'd in content file)
- Trust badges section
- Doctor intro section (separate from about-philosophy)
- Concern cards section (8 cards with specific slugs)
- Consultation request form with fields from content file
- Location showcase with embedded Google Map

**7.3 — Build EyeGlow landing page**
- This is the #1 unique differentiator — no competitor has it
- Dedicated page at `/treatments/eyeglow` targeting "EyeGlow treatment San Diego" keyword
- Content: what it is, how it works, before/after, FAQs

**7.4 — Blog foundation**
- Create 3-5 initial blog posts targeting identified keyword opportunities:
  - "What Is EyeGlow? The Dark Circle Treatment Invented by a San Diego Dermatologist"
  - "Botox for Men: What Every Guy Should Know Before His First Treatment"
  - "PRP Hair Restoration: Does It Actually Work? A Dermatologist's Honest Take"
  - "Regenerative Aesthetics vs Traditional Med Spa: What's the Difference?"
  - "Morpheus8 vs Microneedling: Which Is Right for Your Skin?"

---

## Phase 8: Mobile Experience (NEW)

**Strategy:** Create a comprehensive mobile CSS layer that overrides desktop styles at mobile breakpoints, rather than modifying desktop components. This keeps the desktop version stable while giving mobile its own polished experience.

**8.1 — Expand `mobile.css` into a complete mobile stylesheet**

The current `mobile.css` (504 lines) covers navigation, menus, and some layout basics but doesn't address page-specific mobile issues. Expand it to handle:

- **Hero section mobile overrides:** Reduce h1 from `text-5xl` (3rem) to `text-3xl` (1.875rem) on screens < 640px. Hide carousel arrows on mobile, show dot indicators only. Reduce padding and spacing.

- **Services grid mobile:** Convert horizontal tab navigation to a mobile-friendly accordion or vertical tab list. Reduce image aspect ratio on mobile.

- **Treatment cards mobile:** Reduce card padding from `p-6`/`p-8` to `p-4`. Ensure single-column layout with proper spacing. Touch-friendly tap targets (min 44×44px).

- **Footer mobile:** Collapse footer columns into accordions. Increase link tap target height to 44px minimum. Reduce padding.

- **Testimonials mobile:** Horizontal swipe carousel instead of grid. Reduce card padding.

- **CTA Banner mobile:** Remove `backgroundAttachment: fixed` (causes jank on mobile Safari). Simplify to solid gradient background.

- **Forms mobile:** Already prevents iOS zoom (font-size: 16px). Add full-width inputs, larger tap targets on buttons.

**8.2 — Mobile-specific component adjustments**

These are CSS-only changes via `mobile.css` media queries, not component edits:

```css
@media (max-width: 639px) {
  /* Hero: smaller text, hidden arrows */
  /* Services: vertical tabs */
  /* Cards: reduced padding */
  /* Footer: accordion-style */
  /* CTAs: full-width buttons */
  /* Images: adjusted aspect ratios */
}

@media (max-width: 479px) {
  /* Extra small screens: even tighter spacing */
  /* Single column everything */
  /* Minimal decorative elements */
}
```

**8.3 — Mobile performance**
- Serve 720p video instead of UHD on mobile (Phase 6 overlap)
- Reduce number of slideshow images on mobile (show 1 instead of crossfading 3)
- Disable Framer Motion animations on mobile using `prefers-reduced-motion` or viewport detection
- Lazy-load all below-fold images more aggressively on mobile

**8.4 — Mobile CTA bar improvements**
- Current bar is functional but basic. Enhance with:
  - Sticky "Book Now" that collapses to a smaller bar on scroll-down, expands on scroll-up
  - WhatsApp or SMS option alongside Call/Book
  - Hide on pages where it's redundant (already partially done)

**8.5 — Mobile menu enhancements**
- Add Concerns to mobile menu (currently missing — only has treatment categories)
- Add Men's Clinic as a top-level mobile menu item
- Improve drill-down animation smoothness
- Add search functionality in mobile menu

**8.6 — Touch interaction improvements**
- Before/after slider: increase handle size to 48×48px on mobile
- Carousel: add swipe gesture support (touch events)
- Accordion sections: ensure smooth expand/collapse

**Key principle:** All changes in `mobile.css` and through Tailwind responsive classes. No desktop component files are modified for mobile fixes — keeping your desktop version untouched.

---

## Execution Order (Recommended)

| Order | Phase | Why This Order | Est. Time |
|-------|-------|---------------|-----------|
| 1st | Phase 2 | Removes all 404s — users hitting dead links right now | 2-3 hours |
| 2nd | Phase 1 | Gets the text right — content file is the source of truth | 4-6 hours |
| 3rd | Phase 3 | Makes Google happy — schema, sitemap, meta, directories | 3-4 hours |
| 4th | Phase 4 | Image library with 3 alternates + slideshows | 4-5 hours |
| 5th | Phase 5 | Code architecture — server components, named files | 3-4 hours |
| 6th | Phase 8 | Mobile experience — CSS-only approach | 3-4 hours |
| 7th | Phase 6 | Performance — video, bundle size, lazy loading | 2-3 hours |
| 8th | Phase 7 | Enhancements — new sections, blog, EyeGlow page | 4-6 hours |

---

## What Gets Updated After Each Phase

The `claude.md` change log in the repo root will be updated after every phase with:
- What was changed (specific files and line numbers)
- What was verified
- What still needs attention
- Any new issues discovered during implementation

---

*Plan ready for review. Awaiting greenlight on which phases to start.*
