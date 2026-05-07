# Healinque — Imagery Diversity Guide

**Last updated:** April 16, 2026 (Session 19 — Track A1 CDN verification pass)

This document explains the diverse-imagery strategy applied to the Healinque
site, the verification workflow, and how to extend it over time.

---

## Brand direction

Per stakeholder direction, user-facing brand imagery should:

- **Female-facing slots** (homepage hero, about intro, services aesthetics,
  services skin rejuvenation, testimonials) — cycle across Caucasian, Asian,
  South Asian / Indian, Latina, and Black models. Rotation on page load is
  controlled by `pickImage()` + the `alts` arrays in `lib/data/images.ts`.
- **Male-facing slots** (Men's Clinic hero, services Men's Health, hero
  slide 3) — editorial quality, mostly Caucasian, with 2–3 varied ages
  (30s–50s) to reflect the real clinical patient base.
- **Both** — warm, golden lighting, real skin texture (no over-retouched
  beauty ads), premium spa/clinic environments.

---

## Where diversity lives in the code

All imagery lives in **`lib/data/images.ts`** in the `pageImages` object.
Each slot has shape:

```ts
{
  primary: "PEXELS_ID",
  alts: ["PEXELS_ID", "PEXELS_ID", ...],
}
```

The `pickImage()` helper randomly picks one of `[primary, ...alts]` on each
page load (client-side only, to avoid hydration mismatch). This means every
time a user reloads the homepage, they might see a Caucasian, Asian, South
Asian, Latina, or Black model in the hero — the rotation is automatic.

Each entry in `alts` now has an inline JSDoc-style tag to indicate the
intended demographic:

```ts
"7432056",   // @ethnicity asian @gender female @unverified — skincare
```

The tags are documentary (not enforced at runtime). They exist so human
verifiers can open each ID in a browser and confirm it matches the tag.

---

## Verification workflow (do this before launch)

### 1. Open each unverified ID in a browser

For any ID tagged `@unverified`, paste it into the Pexels URL pattern:

```
https://www.pexels.com/photo/<ID>/
```

For example: `https://www.pexels.com/photo/7432056/`

### 2. Check that the photo matches the tag

- Does the model's apparent ethnicity match the `@ethnicity` tag?
- Is the model female / male as tagged?
- Is the mood / lighting / setting on-brand (warm, not clinical/cold)?
- Is the model's expression confident, calm, radiant — not suggestive,
  vulnerable, or stressed?
- No visible branding from other companies, no tattoos that don't fit
  the clinic aesthetic, no visible product packaging.

### 3. Fix the tag or replace the ID

- If the photo matches: remove `@unverified` from the comment and add
  a brief descriptor (e.g., `— radiant portrait, verified by Mo 2026-04-20`).
- If the photo doesn't match: replace the ID with one that does, and
  verify the new one.
- If the photo is gone (404): replace the ID.

### 4. Commit the changes

Once all `@unverified` tags are resolved, imagery is launch-ready.

---

## Adding new diversity to a slot

To add, say, a Middle Eastern female model to the homepage hero slot:

1. Find a suitable Pexels or Unsplash photo.
2. Copy the numeric ID (from the Pexels URL) or the `photo-<hash>` slug
   (from an `images.unsplash.com` URL).
3. Add it to the `alts` array with the appropriate tag:

   ```ts
   heroSlide1: {
     primary: "2661255",
     alts: [
       // ... existing alts ...
       "NEW_PEXELS_ID",  // @ethnicity middle-eastern @gender female — tagged description
     ],
   },
   ```

4. Commit. Rotation will pick it up automatically.

---

## Unsplash support (Session 17)

Alongside Pexels, `unsplashUrl()` is now available for Unsplash-hosted
photos. Use it where Pexels lacks a suitable image for a specific
demographic.

```ts
import { unsplashUrl } from "@/lib/data/images";

<Image src={unsplashUrl("photo-1531123897727-8f129e1688ce", 1920)} ... />
```

**Note:** Unsplash photo hashes start with `photo-` followed by a long
alphanumeric slug. Find them by inspecting the `src` attribute on
`images.unsplash.com` URLs — NOT the short human-readable slug in the
`unsplash.com/photos/...` page URL.

---

## Current status (as of Session 17)

### Verified diverse IDs (do not change without re-verification)

| Slot | ID | Demographic | Source |
|------|----|-------------|--------|
| heroSlide1 primary | 2661255 | Caucasian F | Pexels S12 |
| heroSlide1 alt[0] | 3985329 | Caucasian F | Pexels S12 |
| heroSlide1 alt[1] | 3738355 | Caucasian F | Pexels S12 |
| heroSlide3 primary | 2379005 | Caucasian M | Pexels |
| servicesMensHealth primary | 3785079 | Caucasian M | Pexels |

### Session 19 — Track A1 CDN verification pass (April 16, 2026)

All 19 `@unverified` IDs from Session 17 were tested against the Pexels
CDN endpoint `https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg`.
HTTP 200 → valid; HTTP 404 → ID gone from Pexels (photo removed or never
existed).

**Results:** 13 valid, 6 invalid.

| Slot | ID | Intended tag | CDN status | Action |
|------|----|--------------|------------|--------|
| heroSlide1 | 7432056 | asian F | 404 | Removed |
| heroSlide1 | 6621339 | south-asian F | 200 | Tagged `@cdn-verified` |
| heroSlide1 | 5069508 | latina F | 200 | Tagged `@cdn-verified` |
| heroSlide1 | 3762800 | black F | 200 | Tagged `@cdn-verified` |
| heroSlide2 | 7365048 | asian F | 200 | Tagged `@cdn-verified` |
| heroSlide2 | 6621460 | south-asian F | 404 | Removed |
| heroSlide2 | 6976597 | latina F | 200 | Tagged `@cdn-verified` |
| heroSlide3 | 2379004 | caucasian M editorial | 200 | Tagged `@cdn-verified` |
| heroSlide3 | 3785424 | caucasian M editorial | 200 | Tagged `@cdn-verified` |
| heroSlide3 | 3778891 | caucasian M editorial | 200 | Tagged `@cdn-verified` |
| aboutIntro | 7432030 | asian F | 404 | Removed |
| aboutIntro | 6621252 | south-asian F | 404 | Removed |
| aboutIntro | 5069450 | latina F | 200 | Tagged `@cdn-verified` |
| servicesAesthetics | 7432097 | asian F | 200 | Tagged `@cdn-verified` |
| servicesAesthetics | 6621292 | south-asian F | 404 | Removed |
| servicesAesthetics | 5069419 | latina F | 404 | Removed |
| servicesSkinRejuv | 7503118 | asian F | 200 | Tagged `@cdn-verified` |
| servicesSkinRejuv | 6621472 | south-asian F | 200 | Tagged `@cdn-verified` |
| servicesSkinRejuv | 5069453 | latina F | 200 | Tagged `@cdn-verified` |
| servicesMensHealth | 2379004 | caucasian M | 200 | Tagged `@cdn-verified` (cross-slot) |
| servicesMensHealth | 3778891 | caucasian M | 200 | Tagged `@cdn-verified` (cross-slot) |

### What CDN-verified DOES and DOES NOT tell you

**CDN 200 confirms:** the photo still exists on Pexels and the ID is not
a typo.

**CDN 200 does NOT confirm:** the subject's apparent ethnicity, gender,
mood, or brand-fit. A 200 photo could be a completely different subject
than the tag suggests — the demographic tag is still just the intended
slot, not the verified subject. Human visual review is still required
before public launch to confirm on-brand fit.

### Remaining work (browser review pass — human eyes needed)

For the 13 CDN-verified IDs, a human must still load each photo page
and confirm:

- Subject ethnicity matches the tag
- Subject gender matches the tag
- Mood/lighting is warm and on-brand (see Medspa-relevance rubric below)
- No visible third-party branding, tattoos, or packaging that conflicts

Grep for `@cdn-verified` in `lib/data/images.ts` to surface every ID
that needs this second-pass human review:

```bash
grep -n "@cdn-verified" lib/data/images.ts
```

### Post-Session-19 demographic coverage gaps

Where a 404 removal left a demographic un-covered in a slot, the slot
was left with one fewer alt rather than introducing a cross-slot
duplicate of a warm-pool ID. This preserves the per-slot uniqueness
invariant. To restore full demographic coverage:

- **heroSlide1** — asian-female replacement needed
- **heroSlide2** — south-asian-female replacement needed
- **aboutIntro** — asian-female + south-asian-female replacements needed
- **servicesAesthetics** — south-asian-female + latina-female replacements needed

Find a valid Pexels ID via Pexels search (query: "asian woman portrait
skincare warm" etc.), verify it via the CDN endpoint pattern above,
add to `alts` with an `@cdn-verified YYYY-MM-DD` tag.

---

## Treatment / concern page imagery (future work)

Treatment pages (`lib/data/treatments.ts`) and concern pages
(`lib/data/concerns.ts`) each have their own `image` + `imageAlts` fields.
These were audited in Session 12 for warm-pool consistency but NOT for
demographic diversity. A future session should extend the same tagging
and rotation approach to those pools.

For now, the highest-impact pages (homepage + about + services) have
been upgraded.

---

## Medspa-relevance rubric (Session 18)

User reported in April 2026 that the live site was showing "too many yoga
pictures, orange slices and things that don't belong in a medspa website."
Below is the rubric the maintainer should apply when picking ANY new Pexels
or Unsplash ID, and when running periodic image audits.

### Always KEEP (on-brand for an aesthetic medicine clinic)

- Patient/model portraits with visible, healthy skin (face-forward composition)
- In-treatment procedural moments (injection, microneedling, LED photo)
- Real clinic environments — exam tables, treatment chairs, well-lit rooms
- Editorial beauty close-ups (eye, lips, jawline) with golden / warm lighting
- Doctor / provider in clinical attire (lab coat OK; not stethoscope-clipboard)
- Skincare product flat-lays in warm tones if used as accent imagery only

### Always REPLACE (off-brand, even if attractive)

- **Yoga / meditation poses** (woman on mat in lotus, sunrise silhouettes,
  crossed-legs at the beach). Wellness ≠ aesthetic medicine.
- **Food / fruit close-ups** — orange slices, lemon water, smoothie bowls,
  avocado toast, kombucha glasses, kale piles. These belong on a
  nutrition blog, not a clinic.
- **Generic "healthy lifestyle" stock** — woman jogging at sunset, hiking
  in spandex, group fitness class, water bottle on gym floor.
- **Cheesy doctor-with-clipboard / handshake stock** — instantly reads
  as "fake medical practice" website. Do not use even if model is
  real-doctor-looking.
- **Cold clinical blue-light stock** — operating theaters, hospital
  hallways, EKG monitors. Wrong tonality (Healinque = warm gold).
- **Hands-only close-ups** of pills, droppers, syringes without context.
  Reads as pharma stock.
- **Overt Getty / Shutterstock watermark style** — heavily airbrushed,
  perfectly-lit-from-three-angles glossy beauty ad imagery (real beauty
  ads have model releases; stock equivalents look fake to consumers).
- **Generic "wellness retreat" stock** — woman in white robe standing
  by infinity pool, candles arranged on a wooden tray, eucalyptus
  branches in glass vase. These belong on a destination spa site, not
  a physician-led aesthetic clinic.

### Yellow flag — verify case-by-case

- Pexels IDs > 5,000,000 (newer photos) skew toward 2020s wellness/lifestyle
  trends (yoga, smoothies, crystals). Older IDs (< 5M) are usually safer
  beauty/portrait stock from the 2010s. Not a hard rule but a useful
  triage signal.
- Concern slugs that semantically attract diet/wellness stock — `weight-
  management`, `low-energy`, `hormone-imbalance`, `hair-thinning`,
  `skin-texture-tone`. Always use verified warm-pool IDs on these,
  never trust the stock library's default suggestions.
- Pexels search results for "wellness," "vitality," "health," "energy"
  — these queries return ~80% off-brand results for our purposes.
  Search for "skincare," "facial treatment," "spa," "aesthetic
  medicine," "beauty portrait" instead.

### Verified warm-pool reference IDs (Session 12 + 18)

When in doubt, swap suspect IDs for one of these proven on-brand IDs:

| ID | What it is | Use for |
|----|-----------|---------|
| 2661255 | Caucasian female radiant portrait | Hero, about, generic skin |
| 3985329 | Facial treatment close-up | Treatments, concerns |
| 3985338 | Skincare beauty | Treatments, concerns |
| 3985339 | Beauty editorial | Concerns |
| 3738355 | LED skin glow | Skin rejuvenation |
| 3865676 | Warm spa environment | Wellness, ambiance |
| 3764568 | Spa / wellness | Aboutus, philosophy |
| 5069432 | Beauty / skincare | Generic |
| 4041392 | Regenerative theme | Hair, PRP |
| 3759657 | Verified warm-pool | Generic |
| 3822864 | Verified warm-pool | Treatments |
| 3822906 | Verified warm-pool | Treatments |

These IDs were browser-verified in Sessions 12 and 18. Do not change them
without re-verifying. New IDs added to alts arrays should be added with
`@unverified` tags per the diversity workflow above.

### Audit workflow (run quarterly)

1. `grep -rn "pexels.com/photos/[0-9]" lib/data/` — list every Pexels ID in use
2. For any ID > 5,000,000 OR not in the verified-warm-pool table above,
   open `https://www.pexels.com/photo/<ID>/` in a browser
3. Apply the rubric above. KEEP, REPLACE, or YELLOW-FLAG.
4. For any REPLACE: use a verified warm-pool ID from the table.
5. Document each change with an inline `// Image audit (Session N): ...`
   comment so future maintainers understand the constraint.

---

## Anti-patterns to avoid

1. **Do not use Getty, Shutterstock, iStock, or any paid stock without a
   purchased license.** These services will DMCA us.

2. **Do not use `source.unsplash.com/featured/...` or other "random"
   endpoints** in production — they can serve completely off-brand
   images with no way to predict.

3. **Do not hot-link uploads from Instagram, Facebook, or Google Images.**
   Besides being fragile, most of those are copyrighted.

4. **Do not leave `@unverified` tags in the codebase past launch.**

5. **Do not forget to check that Pexels IDs don't 404.** Pexels
   occasionally removes photos. A 404 means no image renders — a silent
   failure. Run periodic audits.

6. **Do not use medical / before-after imagery from stock sites.**
   Stock medical imagery is almost never FDA/FTC compliant for a real
   med spa. Use only real patient before-after photos with signed consent.
