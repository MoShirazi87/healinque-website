# Healinque Go-Live Audit — Client Q&A Document

**Prepared for:** Dr. Azi Shirazi, MD
**Prepared by:** Mo (Dev Team)
**Date:** April 15, 2026

---

This document contains questions and items that need Dr. Azi's confirmation before the website goes live. Please review each section and provide answers or approvals.

---

## Section 1: Business Information & Contact

1. **Phone number** — The website currently displays **(858) 337-7999** everywhere (header, footer, contact page, all CTAs, schema markup). Is this the correct, permanent clinic phone number?

2. **Email address** — All form submissions (contact, consultation, newsletter) are configured to send to **AzadehMD@gmail.com**. Is this the correct inbox? Would you prefer a clinic-branded email (e.g., info@healinque.com)?

3. **Physical address** — The website uses **15644 Pomerado Road, Suite 103, Poway, CA 92064**. Please confirm this is correct and ready for public use.

4. **Business hours** — The site currently shows:
   - Monday: 10:00 AM - 12:00 PM, 1:00 PM - 6:00 PM
   - Tuesday: Closed
   - Wednesday: 10:00 AM - 12:00 PM, 1:00 PM - 6:00 PM
   - Thursday: Closed
   - Friday: 10:00 AM - 12:00 PM, 1:00 PM - 6:00 PM (Men's Clinic)
   - Saturday: 10:00 AM - 1:00 PM
   - Sunday: Closed

   Are these hours accurate? Do the lunch breaks (12-1) need adjustment?

5. **Instagram handle** — The site links to **@ThrivewithDr.Azi**. We found **@skinbydrazi** also associated with you online. Which handle should the website use?

6. **Google Maps** — The contact page embeds a Google Map. We have a placeholder API key. Do you have a Google Cloud account, or should we set one up for you?

---

## Section 2: Credentials & Professional Information

7. **Medical credentials** — The website describes you as: "MD, Internal Medicine; UCSD-trained; 20+ years internal medicine, 10+ years aesthetic medicine; advanced training with leading physician injectors in the U.S. and Europe." Is this accurate? Any additions or corrections?

8. **Board certifications** — We removed all references to "Board-Certified Dermatologist" (you are not a dermatologist). The site now says "Internal Medicine." Do you hold any board certifications you'd like listed (e.g., ABIM — American Board of Internal Medicine)?

9. **Education** — The site lists UCSD as your training institution. Is this correct? Should we specify the degree/program (e.g., "UCSD School of Medicine" or "UCSD residency")?

10. **Professional memberships** — Are you a member of any professional organizations we should list? Examples: American Academy of Anti-Aging Medicine (A4M), American Med Spa Association (AmSpa), Aesthetic Medicine Society, etc.

11. **Certifications & training** — Do you have specific certifications for any treatments? Examples: Allergan Diamond Provider, Galderma GAIN certification, specific device training certifications (Morpheus8, IPL, etc.)?

---

## Section 3: Services & Pricing

12. **Treatment menu** — The website lists 24+ treatments. Are there any treatments we should ADD or REMOVE? Are there any you no longer offer or plan to start offering?

13. **Pricing accuracy** — Below are the prices currently displayed. Please mark any that need updating:

    | Treatment | Listed Price |
    |-----------|-------------|
    | Botox | $13/unit |
    | Dysport | $5/unit |
    | Daxxify | $14/unit |
    | Lip Filler | From $700 |
    | Dermal Fillers | From $700/syringe |
    | Morpheus8 | From $800/session |
    | Microneedling | From $350 |
    | PRP Facial | From $500 |
    | Chemical Peels | From $150 |
    | IPL Photo Facial | From $350 |
    | Laser Resurfacing | From $500 |
    | PDO Thread Lift | From $1,500 |
    | PRP Therapy | From $800 |
    | PRF Therapy | From $600 |
    | P-Shot | From $1,800 |
    | O-Shot | From $1,500 |
    | Hair Restoration (PRP) | From $800/session |
    | Peptide Therapy | From $300/month |
    | GLP-1 Weight Loss | From $500/month |
    | Testosterone Optimization | From $250/month |
    | Medical-Grade Skincare | Varies |
    | IV Therapy | From $200 |

14. **Men's Clinic — Friday only?** — The site says the Men's Clinic operates on Fridays. Is this correct? Are men seen on other days too, or is Friday the dedicated men's day?

15. **Membership pricing** — The site shows a single **Healinque Elite** tier at **$199/month** with these benefits:
    - 10% off all treatments
    - Monthly B12 or vitamin injection
    - Priority booking
    - Complimentary annual skin analysis
    - Exclusive member pricing on packages

    Is this the correct tier, price, and benefit list? Previously we had 3 tiers ($149/$249/$399) — should we keep just the one?

16. **Signature packages** — The site lists 4 packages: Glow Revival, Collagen Restore, Hair Revival, Men's Performance. Are these the correct packages with accurate descriptions?

17. **Financing** — We created a financing page mentioning CareCredit and Cherry. Do you currently accept these? Any other financing options?

18. **Pabau booking system** — We've integrated the Pabau booking widget. Please provide:
    - Your Pabau company slug (from your booking URL)
    - Your Pabau API key (from Settings > Integrations > API)

    Without these, the booking page shows a "call/email" fallback instead of the live booking calendar.

---

## Section 4: Content & Legal

19. **Patient testimonials** — The reviews page currently has **8 illustrative testimonials** (not from real patients). Before go-live, we need either:
    - Real patient reviews with signed consent/release forms (recommended)
    - OR explicit acknowledgment that the current testimonials are illustrative (FTC Endorsement Guides require this disclosure, which is currently on the page)

    Do you have real patient reviews we can use? Do you have a review collection process (e.g., Birdeye, Google Reviews)?

20. **Before/after gallery** — The gallery page says "Coming Soon." Do you have before/after photos ready to upload? Each photo needs:
    - Written patient consent for web use
    - Consistent lighting/angle across before and after
    - No identifying information visible (or explicit consent for identifiable photos)

21. **Blog content** — The blog page has 6 placeholder article titles. Do you want to:
    - Write your own blog posts?
    - Have us draft posts for your review?
    - Leave the blog as "Coming Soon" for now?

22. **Dr. Azi photo** — The about page uses a photo at `/images/dr-azi-shirazi.jpg`. Is this your preferred professional headshot? Would you like to provide additional photos (clinic exterior, treatment rooms, team photos)?

23. **Privacy policy effective date** — Currently set to April 2026. Should this be updated to your actual intended launch date?

24. **HIPAA Notice of Privacy Practices** — The site has a HIPAA page. Has your compliance officer/attorney reviewed it? This is a legal document that should be reviewed by a healthcare attorney before publishing.

25. **Terms of Service** — Includes an arbitration clause and auto-renewal terms (SB 313 compliant for California). Has your attorney reviewed these terms?

26. **Disclaimer language** — The site includes: "Results may vary. All treatments performed or directly supervised by Dr. Azi Shirazi, MD." Is this accurate? Do you directly supervise all treatments, or do you have other providers?

---

## Section 5: Technical Setup (for Mo/Dev Team)

These items need to be configured before going live. Dr. Azi may need to provide credentials or approve purchases.

27. **Domain name** — Is **healinque.com** purchased and ready? Who is the registrar (GoDaddy, Namecheap, Google Domains, etc.)?

28. **Email service** — Forms need an email delivery service to send submissions. Options:
    - **Resend** (recommended, free tier: 3,000 emails/month) — needs an API key
    - **SendGrid** (free tier: 100 emails/day) — needs an API key

    Which do you prefer? We'll need the API key added to environment variables.

29. **Domain email verification** — Whichever email service you choose, the sending domain (healinque.com) needs DNS verification (SPF/DKIM records) so emails don't land in spam. This requires access to your domain's DNS settings.

30. **Vercel account** — The site is built for Vercel deployment. Do you have a Vercel account? The free Hobby tier works for launch; Pro ($20/month) adds analytics and team features.

31. **Google Search Console** — To appear in Google search results, we need to verify the site with Google Search Console. This requires adding a meta tag or DNS record. Do you have a Google account for the clinic?

32. **Google Analytics** — Do you want analytics tracking? If so, do you have a Google Analytics 4 property set up? We need the Measurement ID (starts with G-).

33. **SSL certificate** — Vercel provides free SSL automatically. No action needed, but confirming for completeness.

---

## Audit Summary: What We Fixed

For Dr. Azi's awareness, here is a summary of the major fixes and improvements made during this audit:

**Forms & Backend**
- All 3 forms (contact, consultation, newsletter) now actually send emails to AzadehMD@gmail.com
- Pabau booking widget integrated (needs credentials to activate)
- Pabau patient sync: form submissions automatically create patient records in Pabau

**Content & Compliance**
- Removed all false credential claims (Mayo Clinic, Harvard, Board-Certified Dermatologist)
- All credentials now accurately reflect: MD, Internal Medicine, UCSD-trained
- Address corrected everywhere from San Diego 92130 to Poway 92064
- P-Shot disclosed as AUA "experimental" classification
- Peptide therapy restricted to FDA-approved GLP-1 only (BPC-157/TB-500 explicitly not offered)
- GLP-1 contraindications added (medullary thyroid carcinoma, MEN-2, pregnancy)
- Dermal filler vascular occlusion safety language added
- FTC-compliant testimonial disclaimers added
- HIPAA advisory on contact form (warns against sharing PHI)
- SB 313 auto-renewal compliance for memberships
- CCPA/CPRA privacy rights section with "Do Not Sell" link

**SEO & Discoverability**
- JSON-LD structured data: LocalBusiness, Physician, FAQ, Breadcrumb schemas
- AI crawler optimization: robots.txt allows GPTBot, ClaudeBot, PerplexityBot, etc.
- LLMs.txt file for AI search engines
- Sitemap with all pages
- Local SEO: Poway-primary with 5 service area pages (Rancho Bernardo, Scripps Ranch, Escondido, San Marcos, Del Mar)
- FAQ page expanded to 64 questions with FAQPage schema

**Design & UX**
- Complete V2 visual redesign with light/dark section rhythm
- 15-effect interaction engine (cursor spotlight, 3D tilt, magnetic buttons, scroll reveals, etc.)
- Optimized logo (4.3MB to 28KB — 99.4% reduction)
- All stock images audited for brand consistency (removed yoga/meditation images)
- Mobile-responsive across all pages
- Custom 404 and error pages

**Pages Created**
- /packages — 4 signature treatment packages
- /financing — CareCredit, Cherry, in-house payment plans
- /hipaa — HIPAA Notice of Privacy Practices
- /privacy — Privacy Policy with CCPA section
- /terms — Terms of Service with arbitration clause

---

*Please review and respond to each numbered item. Items marked for the dev team (Section 5) can be discussed separately.*
