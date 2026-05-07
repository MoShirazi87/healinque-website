# Session 22 Plan — Client Notes Execution

*Drafted: April 17, 2026. Status: awaiting execution sign-off.*

## 1. What the client asked for

1. **Stronger CTAs site-wide** — "We need more and better calls to action."
2. **Treatments section** — four regenerative therapies with specific copy (Microneedling + Exosomes, Chemical Peels, Hair Restoration, Custom Regenerative Plans), positioned alongside Botox & Fillers.
3. **Approach section** — new homepage block with tagline *"Layered. Conservative. Regenerative."* and a short paragraph on phased treatment plans.
4. **Services tagline swap** — replace existing services intro with *"Subtle, medically guided aesthetic treatments designed to refine your natural features over time."*
5. **What We Offer copy** — *"Personalized treatment plans designed with intention and balance. Each protocol is carefully layered and timed to align with your goals and your skin's needs."*
6. **Declutter** — less explanation, more impact. Doctor-voice, first-person.
7. **Footer contrast** — current footer is too dark against the body; bring more contrast between white and dark sections.
8. **Doctor bio** — podcast-style bio ("Thrive with Dr. Azi") to be woven into the site.

## 2. Decisions locked (from pre-plan Q&A)

- **Services grid: 6 cards** — 4 regenerative (Microneedling + Exosomes, Chemical Peels, Hair Restoration, Custom Regenerative Plans) + Botox + Fillers. Will mitigate "busier" risk by tightening card copy and tightening vertical rhythm (see Phase 6).
- **Bio placement: /about/dr-azi-shirazi + new homepage Approach section**. No new route.
- **CTA scope: site-wide audit and rewrite**.

## 3. Execution order

### Phase 1 — Treatments data + services grid restructure

**Goal:** Homepage and `/treatments` both reflect the 6-card model with client's new copy.

Files touched:

- `components/sections/services-grid.tsx`
  - Expand `services` array from 5 → 6 entries. Order: Microneedling + Exosomes, Chemical Peels, Hair Restoration Treatments, Custom Regenerative Plans, Botox & Neuromodulators, Dermal Fillers.
  - Replace section header copy. Remove *"Our Core Treatments"* and the "Focused expertise, not a menu of everything" line. New header:
    - Eyebrow: `WHAT WE OFFER`
    - H2: `Personalized treatment plans, designed with **intention and balance.**` (gold italic on "intention and balance")
    - Subhead: `Each protocol is carefully layered and timed to align with your goals and your skin's needs.`
  - Keep the "All treatments performed by Dr. Shirazi…" provider-model note, but collapse to a single sentence (see Phase 6 declutter).
  - Tighten card descriptions to 1 sentence each, matching client's "Best for" framing. Example targets:
    - *Microneedling + Exosomes*: "Collagen induction paired with exosome support to improve texture, acne scarring, and pore refinement."
    - *Chemical Peels*: "Resurfacing to brighten tone and clear post-acne pigmentation."
    - *Hair Restoration*: "Scalp-focused regenerative protocols to support density and resilience."
    - *Custom Regenerative Plans*: "Strategically layered skin and scalp regeneration for patients wanting a complete plan."
    - *Botox & Neuromodulators*: "Precise, conservative dosing for natural movement."
    - *Dermal Fillers*: "Subtle, structural volume restoration."
- `lib/data/treatments.ts`
  - **Update three existing treatments** with client's new copy (downtime, results timing, best-for bullets):
    - `microneedling` → rename to "Microneedling + Exosomes"; update description, FAQs, bestFor.
    - `chemical-peels` → update description, bestFor, FAQs to match client's shorter framing.
    - `scalp-microneedling` → update description and bestFor to match client's "Hair Restoration Treatments" block.
  - **Add one new treatment**: `custom-regenerative-plans` slug. Note this is a "meta" treatment (layered plans) — it should render but link out to the four specific treatments in a "what's included" block rather than having its own pricing row. Pricing: "By consultation."
- `app/treatments/page.tsx`
  - Intro section (cream block) copy swap to match new services-grid direction. Delete the current long `categoryDescriptions` prose; replace with one sentence each.
- `lib/data/treatments.ts` referencing integrity: run grep against `microneedling` and `scalp-microneedling` slug usages (footer, mega menu, concerns linking) after rename. Slug stays the same; only `name` and `description` change.

### Phase 2 — New Approach section on homepage

**Goal:** Add a new `<ApproachSection />` block to the homepage between `<DoctorIntro />` and `<ConcernCards />`, with the client's "Layered. Conservative. Regenerative." framing.

Files touched:

- `components/sections/approach-section.tsx` *(new)*
  - Dark/navy background (alternates with cream `<DoctorIntro />` above and dark `<ConcernCards />` below — lean on section rhythm).
  - Eyebrow: `OUR APPROACH`
  - H2: `Layered. Conservative. **Regenerative.**` (gold italic on "Regenerative")
  - Paragraph (from client notes): "Every treatment plan is built in phases — designed to respect the skin and scalp's natural healing cycles. Rather than aggressive correction, I focus on gradual improvement through collagen stimulation, barrier support, and regenerative therapies. This is not corrective aesthetics in isolation — it is long-term skin and hair health optimization."
  - 3-pillar row under the paragraph (icons or gold numerals): Phase by phase · Respect the healing cycle · Long-term optimization.
  - Single CTA: `Explore the Healinque Method →` linking to `/about/healinque-method`.
- `app/page.tsx`
  - Import `<ApproachSection />`; mount after `<DoctorIntro />`, before `<ConcernCards />`.
  - Re-audit section rhythm (light/dark alternation) after insertion — likely: Hero(dark) → SocialProofBar(cream) → ServicesGrid(dark) → DoctorIntro(cream) → **Approach(dark)** → ConcernCards(cream) → Testimonials(cream-or-dark, adjust) → FAQ(dark) → LocationCTA(dark). *Adjust `<Testimonials variant>` prop as needed.*

### Phase 3 — Dr. Azi bio: podcast voice integration

**Goal:** Weave the "Thrive with Dr. Azi" voice into the physician page without creating a new route.

Files touched:

- `app/about/dr-azi-shirazi/page.tsx`
  - Add a new section beneath the existing story block titled `Beyond the Clinic` or `On the Podcast`.
  - Pull the client's podcast bio verbatim (first-person):
    > "Modern medicine is overcomplicated. Real health isn't. I believe the future of medicine is rooted in alignment — where clarity replaces complexity, and results matter more than trends. With over 20 years in urgent care, I bring a grounded, results-driven perspective to a system that often overcomplicates what should be simple. This podcast is where I break down what works, what doesn't, and how to approach health and longevity with intention and integrity."
  - Close with the pull-quote: `Clarity over complexity. Results over trends.` (serif italic, gold accent).
  - **No podcast link yet** — flag as carry-forward if the client wants one embedded.
- `components/sections/doctor-intro.tsx`
  - Tighten existing intro copy. Swap in client's voice: "I don't overfill. I don't chase trends." as the headline pull. Sub-paragraph adapted from the podcast bio: "I treat the face medically — conservative, layered plans that age with you."
  - Confirm homepage voice matches hero slide 2 (see Phase 6 voice consistency).

### Phase 4 — Site-wide CTA audit + rewrite

**Goal:** Replace generic "Learn More" / "Book Now" / "Contact Us" with outcome-framed, doctor-voice CTAs. Add missing secondary CTAs where sections currently have none.

Audit checklist (by surface):

| Surface | File | Current primary / secondary | Proposed |
|---|---|---|---|
| Hero slide 1 | `hero.tsx` | Current 2 CTAs | Keep structure; refine copy (e.g., primary: `Book a Consultation`, secondary: `See What I Treat`) |
| Hero slide 2 | `hero.tsx` | `The Healinque Method` + `View Treatments` | Keep; verify copy |
| Hero slide 3 | `hero.tsx` | Men's clinic CTAs | Audit |
| Social Proof Bar | `social-proof-bar.tsx` | None | Add optional soft CTA? (TBD) |
| Services Grid | `services-grid.tsx` | `Learn More →` per card | Change to outcome-framed: `See the Protocol →`, `Get My Plan →`, etc. |
| Services Grid footer | `services-grid.tsx` | None | Add: `Book a consultation` + `See all treatments` |
| Doctor Intro | `doctor-intro.tsx` | Current CTA | Audit |
| **Approach (new)** | `approach-section.tsx` | — | Single: `Explore the Healinque Method →` |
| Concern Cards | `concern-cards.tsx` | Per-concern links | Verify `View All Concerns` is present |
| Testimonials | `testimonials.tsx` | Bottom CTA | Audit |
| FAQ | `faq-section.tsx` | Bottom CTA | Add `Have another question? Book a consultation.` |
| Location CTA | `location-cta.tsx` | Current | Audit — likely already strong |
| Footer | `footer.tsx` | Newsletter + nav | Add a `Book a Consultation` primary button above the newsletter block |
| Mobile CTA bar | `mobile-cta-bar.tsx` | Call / Book | Verify copy |
| Treatments index | `app/treatments/page.tsx` | Per-card `Learn More` | Change to `See Details →` or treatment-specific |
| Treatment detail | `app/treatments/[slug]/page.tsx` | Bottom CTA | Ensure every page has a consistent `Book [Treatment] Consultation` CTA |
| Concerns index | `app/concerns/page.tsx` | — | Audit |
| Concern detail | `app/concerns/[slug]/page.tsx` | Treatment chips | Add a consistent `Book a Consultation` closer |
| Men's Clinic | `app/mens-clinic/page.tsx` | Friday-clinic CTA | Verify strength |
| Memberships | `app/memberships/page.tsx` | Tier CTAs | Audit |
| Packages | `app/packages/page.tsx` | Per-package CTAs | Audit |
| About | `app/about/page.tsx`, `app/about/healinque-method/page.tsx`, `app/about/dr-azi-shirazi/page.tsx` | Various | Add consistent closing CTA |
| Contact | `app/contact/page.tsx` | Form CTA | Audit |
| Book | `app/book/page.tsx` | Placeholder | Out of scope (awaiting Pabau) |

**CTA voice guidelines to apply:**
- First-person, doctor-voice where appropriate ("Book with me," "Schedule with Dr. Shirazi").
- Action + outcome ("Start your consultation" → "Start a custom plan").
- No exclamation points, no "Discover," no "Unlock."
- Minimum 2 CTAs on every major section: a primary (conversion) + secondary (learn).

### Phase 5 — Footer contrast fix

**Problem:** User reports the footer is visually too dark against the body, no separation between body-dark and footer-dark.

Options (plan proposes option B):

- **A. Lighten the footer** — shift footer bg from `bg-navy-deep` to a mid-navy (e.g., `bg-[#0f1f3a]`) so it reads as "slightly raised" vs body. Lower risk, small visual shift.
- **B. Add a transitional band (Recommended)** — insert a ~3–4px gold accent line or a thin cream/slate divider band at the very top of the footer to create a clean shelf between body and footer. Keeps brand moodiness. Pair with a slight bg lightening on the footer itself.
- **C. Invert the footer to cream** — biggest contrast, but fights the brand aesthetic. Not recommended.

Files touched:

- `components/navigation/footer.tsx`
  - Add top divider band. Raise footer `bg-` by ~4–6% luminance.
  - Bump link hover states — increase opacity on `text-white/50` → `text-white/70` so footer nav reads more clearly.
  - Ensure heading labels (`Treatments`, `Clinic`, etc.) use gold accent for visual hierarchy.
- `app/globals.css`
  - Add `.footer-divider` utility for the top band (3px gradient: transparent → gold → transparent, 1400px wide).

### Phase 6 — Declutter + voice consistency pass

**Goal:** Client directive "We don't need much explanation. We need to declutter and make the site more impactful." Tighten copy site-wide to first-person doctor-voice.

Declutter targets (specific):

- **Hero slide 2** — confirm copy. Screenshot shows *"I don't overfill. I don't chase trends."* — but current code (`hero.tsx:47`) reads *"We don't overfill. We don't chase trends."* **Change `We` → `I`** for both lines on slide 2, plus description. Also align `subtitle` from `"How We Practice"` → `"HOW I PRACTICE"`.
- **Hero slide 1 + slide 3** — if the client wants first-person throughout, these need `We` → `I` swaps as well. *(Flag for client confirmation — see §4.)*
- **Services grid subtitle** — remove `"Focused expertise, not a menu of everything."` (already being replaced in Phase 1 with new client copy).
- **Services grid provider note** — shorten to: *"All treatments performed by me or a nurse practitioner I've personally trained."* (first-person, tighter).
- **Services grid "On the Horizon" block** — evaluate for removal. The 4-sentence block about medical weight loss / regenerative / longevity is the opposite of "decluttered." *Proposal:* collapse to one line: *"Medical weight loss and longevity protocols are in development. Get notified →"* with the email capture kept below.
- **About content** (`components/sections/about-content.tsx`, `about-philosophy.tsx`) — trim any paragraph > 3 sentences. Aim for shorter, more impactful blocks.
- **Doctor intro** — already covered in Phase 3.
- **Treatments index intro** — already covered in Phase 1.
- **Concerns index** — quick pass, tighten hero description.

### Phase 7 — Verification

- `npx tsc --noEmit` — must be clean.
- `npx next lint` — must be clean.
- `npx next build` — at minimum, compile phase clean.
- Grep for residual legacy phrases that were replaced:
  - `"Our Core Treatments"` — should have 0 hits.
  - `"Focused expertise, not a menu of everything"` — 0 hits.
  - `"We don't overfill"` — 0 hits.
  - `"How We Practice"` — 0 hits.
- Visual QA — load homepage, `/about/dr-azi-shirazi`, `/treatments`, and one treatment detail page. Confirm:
  - New Approach section renders between DoctorIntro and ConcernCards.
  - Services grid shows 6 cards.
  - Footer reads with visible separation from body.
  - Bio reads first-person throughout.

## 4. Decisions locked

1. **Voice** — Convert all *We* → *I* site-wide. Slides 1, 2, 3 and everywhere else.
2. **"On the Horizon" block** — Keep as-is (copy + email capture).
3. **Custom Regenerative Plans** — Create dedicated detail page at `/treatments/custom-regenerative-plans`.
4. **Footer contrast** — Option B: gold transitional divider band + slight bg lift.
5. **Podcast link** — None yet. Bio section on `/about/dr-azi-shirazi` is self-contained. Client will send URL later.
6. **Screenshot** — Confirmed by user: the second screenshot was a copy-change request for that section. Roll into "What We Offer" copy swap in Phase 1 + build the new Custom Regenerative Plans page in Phase 3-new.

## 5. Files inventory

**Create:**
- `components/sections/approach-section.tsx`
- `app/treatments/custom-regenerative-plans/*` — pending §4 decision 3 (detail page scaffolding if yes)

**Modify:**
- `app/page.tsx` — mount Approach section, verify section rhythm
- `components/sections/services-grid.tsx` — 6 cards, new copy, header swap, declutter On the Horizon
- `components/sections/hero.tsx` — first-person voice swap (slide 2 confirmed, slides 1/3 pending)
- `components/sections/doctor-intro.tsx` — pull-quote swap
- `components/sections/about-content.tsx`, `about-philosophy.tsx` — declutter
- `components/navigation/footer.tsx` — contrast band, bg lift
- `app/globals.css` — `.footer-divider` utility
- `app/about/dr-azi-shirazi/page.tsx` — bio integration
- `app/treatments/page.tsx` — intro copy swap
- `lib/data/treatments.ts` — update 3 existing treatments + (optional) add custom-regenerative-plans
- All page files surfaced in the §3 Phase 4 CTA audit table — CTA copy rewrites

## 6. Out of scope (not in this session)

- New blog posts.
- `/book` page Pabau integration.
- Real clinic photography / before-after galleries.
- Podcast embed on the site (awaits URL).
- Instagram handle confirmation (long-standing carry-forward).
- WEBSITE-CONTENT.md regeneration (still pre-Session-8 — regenerate when convenient).

## 7. Time estimate (rough)

- Phase 1: 45–60 min (data + grid restructure)
- Phase 2: 20–30 min (new section)
- Phase 3: 20 min (bio integration)
- Phase 4: 60–90 min (site-wide CTA pass)
- Phase 5: 15 min (footer contrast)
- Phase 6: 30–45 min (declutter)
- Phase 7: 15–20 min (verification + visual QA)

**Total:** roughly 3.5–5 hours of focused work — realistic for one full session.

---

*Plan ready for sign-off. Open questions are consolidated in §4.*
