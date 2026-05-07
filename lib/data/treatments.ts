import { pexelsUrl } from "@/lib/data/images";

export interface Treatment {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  category: TreatmentCategory;
  tagline: string;
  description: string;
  benefits: string[];
  idealFor: string[];
  procedure: {
    duration: string;
    downtime: string;
    results: string;
    sessions?: string;
  };
  pricing: {
    starting?: number;
    range?: string;
    note?: string;
  };
  faqs: { question: string; answer: string }[];
  image: string;
  imageAlts?: string[];
  gallery?: string[];
  featured?: boolean;
  popular?: boolean;
  isNew?: boolean;
  comingSoon?: boolean;
}

export type TreatmentCategory =
  | "aesthetics"
  | "skin-rejuvenation"
  | "hair-restoration";

export const treatmentCategories: Record<
  TreatmentCategory,
  { name: string; description: string; image: string }
> = {
  aesthetics: {
    name: "Aesthetic Treatments",
    description:
      "Physician-led injectable and skin treatments for natural, lasting results",
    // Session 20: practitioner-servicing-client (v3 A bucket anchor)
    image: pexelsUrl("7582568"),
  },
  "skin-rejuvenation": {
    name: "Skin Rejuvenation",
    description:
      "Medical-grade treatments to restore your skin's radiance and texture",
    // Session 20: skincare close-up (v2 #2 bucket anchor)
    image: pexelsUrl("3985325"),
  },
  "hair-restoration": {
    name: "Hair Restoration",
    description:
      "Advanced growth factor protocols for progressive hair density improvement",
    // Session 20: practitioner servicing — no hair-specific ID in approved pool
    image: pexelsUrl("5069494"),
  },
};

export const treatments: Treatment[] = [
  // ──────────────────────────────────────────────────────────────
  // AESTHETIC TREATMENTS
  // ──────────────────────────────────────────────────────────────
  {
    id: "botox-dysport",
    slug: "botox-dysport",
    name: "Botox & Neuromodulators",
    shortName: "Botox",
    category: "aesthetics",
    tagline: "Precision Neuromodulation for Natural Expression",
    description:
      "At Healinque, I use Botox, Dysport, and other FDA-approved neuromodulators to smooth dynamic wrinkles — the lines created by repeated facial movement — while preserving your ability to express yourself naturally. My team and I take a conservative, anatomy-driven approach: precise dosing and strategic placement mean you look refreshed, never frozen. I evaluate each patient's unique muscle patterns, skin thickness, and aesthetic goals before recommending a treatment plan. Most patients see initial softening within 3 to 7 days, with the full effect settling in at 10 to 14 days. Results typically last 3 to 4 months, and consistent treatment over time can actually train the muscles to relax, meaning some patients find they need less product as they go. I also offer Daxxify consultations for patients interested in longer-lasting neuromodulator options as they become available. Treatments are performed by me or one of the nurse practitioners or physician assistants I've personally trained.",
    benefits: [
      "Smooth forehead lines, frown lines, and crow's feet",
      "Preserve natural facial expressions with conservative dosing",
      "Prevent deeper wrinkles from forming over time",
      "Quick in-office treatment — most visits under 30 minutes",
      "Zero downtime; return to normal activities immediately",
      "Results last 3 to 4 months with consistent maintenance",
    ],
    idealFor: [
      "Dynamic expression lines (forehead, glabella, crow's feet)",
      "Preventative treatment for patients in their late 20s and 30s",
      "Those seeking subtle, natural-looking results — not a frozen look",
      "Masseter reduction for jawline slimming or TMJ relief (off-label)",
      "Lip flip for subtle upper lip enhancement without filler",
    ],
    procedure: {
      duration: "15–30 minutes",
      downtime: "None",
      results: "First results at 3–7 days; full effect at 10–14 days",
      sessions: "Every 3–4 months for maintenance",
    },
    pricing: {
      starting: 12,
      note: "$12/unit · Most patients spend $300–$600 per session depending on areas treated",
    },
    faqs: [
      {
        question: "Will I look frozen?",
        answer:
          "No. My approach is built around preserving natural movement. I use precise dosing and strategic placement to smooth wrinkles while keeping your expressions intact. I would rather under-treat and bring you back for a touch-up than over-treat. The goal is always 'refreshed,' never 'done.'",
      },
      {
        question: "How long do results last?",
        answer:
          "Results typically last 3 to 4 months. With consistent treatment over time, many patients find their muscles begin to relax more readily, which can extend the interval between appointments. I recommend scheduling your next visit before the product fully wears off for the smoothest, most continuous results.",
      },
      {
        question: "Is there any downtime?",
        answer:
          "There is no downtime. You can return to work and normal activities immediately after treatment. I recommend avoiding strenuous exercise for 24 hours, not lying flat for 4 hours, and avoiding rubbing or massaging the treated areas for the first day. Some patients experience minor redness or pinpoint bruising at the injection sites, which resolves within a day or two.",
      },
      {
        question: "What about off-label uses like masseter Botox or lip flip?",
        answer:
          "While Botox is FDA-approved for frown lines, crow's feet, and forehead wrinkles, many of its most popular uses are technically off-label. Masseter treatment for jawline slimming or TMJ-related tension, the lip flip for subtle upper lip enhancement, and chin dimpling correction are all well-established in clinical practice. Off-label does not mean unsafe — it means the specific indication has not gone through the formal FDA approval process, though there is substantial clinical evidence and physician experience supporting these uses. I discuss these distinctions openly during your consultation.",
      },
      {
        question: "Who is NOT a candidate for Botox or Dysport?",
        answer:
          "Neuromodulators are not recommended for patients with neuromuscular disorders (such as myasthenia gravis or ALS), known allergy to botulinum toxin, active infection at the injection site, or who are pregnant or breastfeeding. Certain medications, including some antibiotics and blood thinners, may also interact. I review your complete medical history during consultation to ensure safety before proceeding with any treatment.",
      },
      {
        question: "What is the difference between Botox and Dysport?",
        answer:
          "Both are FDA-approved botulinum toxin type A neuromodulators that work by temporarily relaxing targeted muscles. Dysport has a slightly broader diffusion pattern, which can be advantageous for large areas like the forehead, and some patients notice results a day or two sooner. Botox tends to stay more precisely where it is placed, which is ideal for smaller, targeted areas. I recommend the product best suited to your anatomy and treatment goals. I also offer Daxxify consultations for patients interested in the newer, longer-lasting neuromodulator option.",
      },
      {
        question: "Do men need more Botox than women?",
        answer:
          "Yes, in most cases. Men typically have larger, stronger facial muscles — particularly in the forehead and glabella — and generally require 20 to 30 percent more units than women to achieve the same degree of relaxation. I account for this during your initial assessment and provide transparent pricing based on the number of units recommended for your anatomy.",
      },
    ],
    // Session 20: practitioner injecting (v3 A) + Keep-pile beauty alts
    image: pexelsUrl("7582568"),
    imageAlts: [pexelsUrl("4586713"), pexelsUrl("4586741"), pexelsUrl("7581577")],
    featured: true,
    popular: true,
  },

  {
    id: "dermal-fillers",
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    shortName: "Fillers",
    category: "aesthetics",
    tagline: "Restore Volume, Refine Contour, Preserve Natural Beauty",
    description:
      "Dermal fillers restore lost volume, soften deep folds, and refine facial contours without surgery. At Healinque, I take a conservative, layered approach — building results gradually over one or more sessions rather than overfilling in a single visit. I evaluate your facial structure, skin quality, and proportions to create a customized treatment plan that respects your natural anatomy. I use hyaluronic acid (HA) fillers for most applications because they are reversible: if you are unhappy with the result or experience a complication, I can dissolve the product with hyaluronidase, which I keep on-site at all times. My team is trained in detailed vascular anatomy assessment, and I follow established safety protocols including aspiration technique and emergency preparedness for vascular occlusion. Common treatment areas include lips, cheeks, jawline, chin, under-eyes (tear troughs), nasolabial folds, and marionette lines. Treatments are performed by me or one of the nurse practitioners or physician assistants I've personally trained. I do not chase trends — I chase balance.",
    benefits: [
      "Restore volume lost to aging in cheeks, temples, and mid-face",
      "Enhance and define lips with natural-looking results",
      "Soften nasolabial folds and marionette lines",
      "Sculpt and define the jawline and chin",
      "Improve under-eye hollows (tear troughs)",
      "Immediate visible results with minimal downtime",
      "HA fillers are fully reversible with hyaluronidase",
    ],
    idealFor: [
      "Volume loss in the mid-face, temples, or cheeks",
      "Lip enhancement or lip border definition",
      "Jawline contouring and chin projection",
      "Under-eye hollowing or dark circles with a structural component",
      "Nasolabial folds and marionette lines",
      "Patients who want reversible, adjustable results",
    ],
    procedure: {
      duration: "30–60 minutes",
      downtime: "Mild swelling for 2–5 days; bruising possible",
      results: "Immediate; final result at 2 weeks once swelling resolves",
      sessions: "Touch-up at 2–4 weeks if needed; maintenance every 6–18 months depending on product and area",
    },
    pricing: {
      starting: 500,
      note: "Starting at $500/syringe · Most patients require 1–3 syringes depending on area and goals",
    },
    faqs: [
      {
        question: "How do you ensure natural-looking results?",
        answer:
          "My philosophy is 'less is more.' I use a layered approach — placing conservative amounts of filler and building gradually over one or more sessions. This prevents the overfilled, puffy look that gives fillers a bad reputation. I evaluate your facial proportions, bone structure, and skin quality before recommending a plan. I would rather have you come back for a small touch-up than leave with too much product on day one.",
      },
      {
        question: "How long do fillers last?",
        answer:
          "Duration depends on the product and treatment area. Lip fillers typically last 6 to 12 months. Cheek and jawline fillers made with thicker HA formulations last 12 to 18 months. Tear trough filler can last 12 months or longer in many patients. I discuss the expected longevity of each product during your consultation so you can plan accordingly.",
      },
      {
        question: "What are the warning signs of vascular occlusion?",
        answer:
          "Vascular occlusion is a rare but serious complication that occurs when filler is inadvertently injected into or compresses a blood vessel. Warning signs include severe or disproportionate pain at the injection site, blanching (whitening) of the skin, dusky or bluish discoloration, and in the case of periorbital injections, any changes to vision. If you experience any of these symptoms, contact my office immediately. I keep hyaluronidase on-site and my team is trained in emergency vascular occlusion protocols.",
      },
      {
        question: "Can I get fillers if I am pregnant or breastfeeding?",
        answer:
          "No. I do not perform filler treatments on patients who are pregnant or breastfeeding. There is insufficient safety data in this population, and I err on the side of caution. I'm happy to schedule your treatment once you are no longer pregnant or nursing.",
      },
      {
        question: "How do you prevent filler migration?",
        answer:
          "Filler migration is often the result of overfilling, using the wrong product for the area, or poor injection technique. I mitigate this risk by using conservative volumes, selecting the appropriate filler viscosity for each treatment zone, injecting at the correct tissue depth, and avoiding areas of excessive movement with products not designed for that region. My layered approach — building over multiple sessions — also reduces the risk significantly.",
      },
      {
        question: "What is the difference between HA fillers and biostimulators like Sculptra or Radiesse?",
        answer:
          "Hyaluronic acid (HA) fillers provide immediate volume and are fully reversible — I can dissolve them with hyaluronidase if needed. Biostimulators like Sculptra (poly-L-lactic acid) and Radiesse (calcium hydroxylapatite) work by stimulating your body's own collagen production over time, providing gradual results that develop over weeks to months. The key distinction: biostimulators cannot be dissolved. I discuss the pros and cons of each approach during consultation and recommend the option best suited to your goals.",
      },
      {
        question: "How do you manage pain during the procedure?",
        answer:
          "Most modern HA fillers contain lidocaine premixed into the product, which numbs the area as it is injected. For sensitive areas like the lips, I also apply a topical numbing cream 15 to 20 minutes before treatment. Most patients describe the sensation as mild pressure with brief, manageable discomfort. I check in with you throughout the procedure and can pause at any time.",
      },
    ],
    // Session 20: practitioner-servicing (v3 A bucket) + Keep editorial alt
    image: pexelsUrl("7581577"),
    imageAlts: [pexelsUrl("9157201"), pexelsUrl("5069494"), pexelsUrl("3985311")],
    featured: true,
    popular: true,
  },

  // ──────────────────────────────────────────────────────────────
  // SKIN REJUVENATION
  // ──────────────────────────────────────────────────────────────
  {
    id: "chemical-peels",
    slug: "chemical-peels",
    name: "Chemical Peels",
    shortName: "Peels",
    category: "skin-rejuvenation",
    // Session 22: Client-provided copy. Tightened, first-person, outcome-forward.
    tagline: "Targeted Resurfacing for Clarity and Healthy Turnover",
    description:
      "Targeted resurfacing treatments designed to improve clarity, tone, and congestion while supporting healthy skin turnover. I select peel strength and formulation based on your skin type, concerns, and tolerance — with particular care in patients with deeper skin tones, where the wrong peel can worsen pigmentation. A peel can stand alone, or sit inside a broader regenerative plan.",
    benefits: [
      "Improve clarity, tone, and post-acne pigmentation",
      "Smooth rough or congested texture",
      "Support healthy cellular turnover",
      "Soften early fine lines and dullness",
      "Enhance the absorption of your home skincare",
    ],
    idealFor: [
      "Acne and post-acne pigmentation",
      "Uneven tone",
      "Dull or congested skin",
    ],
    procedure: {
      duration: "30–45 minutes",
      downtime: "Peeling/flaking for 2–5 days (varies by peel strength)",
      results: "Visible brightness within 5–7 days; continued improvement over 2–3 weeks",
      sessions: "Series of 3–6, spaced every 4–6 weeks; maintenance every 2–3 months",
    },
    pricing: {
      starting: 300,
      note: "Starting at $300 · Pricing varies by peel type and depth",
    },
    faqs: [
      {
        question: "How is a medical-grade peel different from a spa peel?",
        answer:
          "Medical-grade peels use higher concentrations of active ingredients (such as trichloroacetic acid, glycolic acid, or salicylic acid) and penetrate deeper into the skin than the gentle enzyme or fruit-acid peels typically used in spas. They are supervised by a physician and can address concerns that spa-grade peels simply cannot reach — including moderate hyperpigmentation, acne scarring, and deeper textural irregularities. The tradeoff is that medical-grade peels may involve more downtime, but the results are significantly more impactful.",
      },
      {
        question: "Will a chemical peel help with my melasma?",
        answer:
          "Chemical peels can be an effective component of a melasma management plan, but melasma requires a careful, conservative approach. I typically use superficial to medium-depth peels in combination with targeted topical regimens and strict sun protection. Aggressive peeling — especially in darker skin tones — can trigger a rebound flare of pigmentation. I evaluate your melasma type, skin tone, and history before recommending a peel protocol. Melasma is a chronic condition that I manage rather than cure, and I set realistic expectations accordingly.",
      },
      {
        question: "How much downtime should I expect?",
        answer:
          "Downtime depends on the depth of the peel. Superficial peels (sometimes called lunchtime peels) may cause mild redness and light flaking for 1 to 3 days — most patients can return to work the same day with mineral sunscreen. Medium-depth peels involve more noticeable peeling and redness for 5 to 7 days. I provide detailed aftercare instructions including which products to use and which to avoid during the healing window.",
      },
      {
        question: "How many peels will I need?",
        answer:
          "For most concerns, I recommend a series of 3 to 6 peels spaced 4 to 6 weeks apart for optimal results. A single peel will produce visible improvement, but the cumulative effect of a series is significantly more impactful. After completing your initial series, maintenance peels every 2 to 3 months help sustain results. I create a treatment timeline during your consultation based on your specific goals.",
      },
      {
        question: "Who should NOT get a chemical peel?",
        answer:
          "Chemical peels are not appropriate for patients with active cold sores or herpes simplex in the treatment area (I may prescribe antiviral prophylaxis), active skin infections, recent isotretinoin use (within the past 6 months for deeper peels), open wounds or sunburned skin, or patients who are pregnant or breastfeeding. Patients with a history of keloid scarring should also discuss this with me directly. I review all contraindications during your initial assessment.",
      },
    ],
    // Session 20: professional skincare close-up (v2 #2 skincare bucket)
    image: pexelsUrl("3985325"),
    imageAlts: [pexelsUrl("3985331"), pexelsUrl("6948184"), pexelsUrl("6543355")],
    featured: true,
  },

  {
    id: "microneedling",
    slug: "microneedling",
    // Session 22: Renamed per client (Microneedling + Exosomes). Copy tightened, first-person.
    name: "Microneedling + Exosomes",
    shortName: "Microneedling",
    category: "skin-rejuvenation",
    tagline: "Regenerative Collagen Induction with Exosome Support",
    description:
      "A regenerative treatment that pairs controlled collagen induction with exosome support to enhance healing, refine texture, and accelerate skin renewal. I use a medical-grade device to create precise micro-channels in the skin, then layer in exosomes or growth factor concentrates that are absorbed deeply through those channels. The result is a smoother, more even canvas over the weeks and months that follow. Best as a series, paced to your skin's recovery.",
    benefits: [
      "Smooth acne scarring and refine rough texture",
      "Minimize the appearance of enlarged pores",
      "Stimulate natural collagen and elastin over time",
      "Improve overall skin tone and radiance",
      "Enhance absorption of clinical-grade actives",
    ],
    idealFor: [
      "Acne scarring",
      "Skin texture refinement",
      "Enlarged pores",
      "Overall skin rejuvenation",
    ],
    procedure: {
      duration: "60–90 minutes (including numbing)",
      downtime: "24–72 hours of redness, mild swelling, or sensitivity",
      results: "Initial glow within 7–10 days; collagen remodeling improves for 4–12 weeks",
      sessions: "Series of 3 treatments, spaced 4–6 weeks apart",
    },
    pricing: {
      starting: 500,
      range: "$500 single treatment · $1,200 for a 3-pack",
      note: "PRP or advanced skin booster add-ons priced at consultation",
    },
    faqs: [
      {
        question: "How is your microneedling different from what I can do at home?",
        answer:
          "At-home dermarollers typically use 0.25mm needles and cannot penetrate deeply enough to trigger meaningful collagen induction. My medical-grade devices use adjustable needle depths up to 2.5mm, creating controlled micro-injuries at the precise depth needed for your specific concern — whether that is superficial texture improvement or deeper acne scar remodeling. I also infuse clinical-grade growth factors or PRP through the open channels, which is not possible with home devices. The results are dramatically different.",
      },
      {
        question: "What can I expect during and after treatment?",
        answer:
          "I apply a topical numbing cream for 20 to 30 minutes before treatment, so most patients describe the sensation as mild vibration with occasional prickling. After treatment, your skin will look and feel like a moderate sunburn — red, warm, and slightly tight. This resolves within 24 to 72 hours for most patients. You may experience mild flaking for 3 to 5 days as the skin turns over. I provide a post-treatment kit with gentle cleanser, hydrating serum, and mineral sunscreen to support healing.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "I recommend a series of 3 treatments spaced 4 to 6 weeks apart for most patients. For deeper acne scarring, 4 to 6 sessions may be needed for optimal improvement. After completing your initial series, maintenance sessions every 3 to 6 months help sustain collagen production. I assess your progress at each visit and adjust the protocol as needed.",
      },
      {
        question: "Can microneedling help with acne scars?",
        answer:
          "Yes — microneedling is one of the most effective treatments for acne scarring, particularly rolling and boxcar scars. The controlled micro-injuries break up fibrous scar tissue and stimulate new collagen to fill in depressed areas. Most patients see 40 to 70 percent improvement in scar appearance over a series of 3 to 6 treatments. Icepick scars are deeper and narrower, and may require a combination approach (microneedling plus TCA CROSS or subcision). I evaluate your scar types during consultation and set realistic expectations.",
      },
      {
        question: "Who is NOT a candidate for microneedling?",
        answer:
          "Microneedling is not recommended for patients with active acne (pustular or cystic), active cold sores or skin infections in the treatment area, patients currently taking isotretinoin or who have taken it within the past 6 months, patients with bleeding disorders or on blood thinners, those who are pregnant or breastfeeding, or patients with a history of keloid scarring. Rosacea patients may be candidates with a modified protocol — I assess this on a case-by-case basis.",
      },
    ],
    // Session 20: practitioner performing device treatment (v3 A) + skincare alts
    image: pexelsUrl("7446671"),
    imageAlts: [pexelsUrl("5069494"), pexelsUrl("9157201"), pexelsUrl("7321494")],
    featured: true,
    popular: true,
  },

  // Session 22: New entry per client request — a dedicated detail page for the signature
  // multi-modality regenerative plan. Category = skin-rejuvenation (closest umbrella; plans span
  // skin + scalp so neither single category fully fits, but "skin-rejuvenation" is the lead bucket).
  {
    id: "custom-regenerative-plans",
    slug: "custom-regenerative-plans",
    name: "Custom Regenerative Plans",
    shortName: "Regenerative Plans",
    category: "skin-rejuvenation",
    tagline: "Layered Skin + Scalp Regeneration, Paced to You",
    description:
      "Strategically layered skin and scalp regeneration, paced over time. I build your plan around the treatments that make the most biological sense for your goals — microneedling, exosomes, peels, and scalp protocols — sequenced to respect the skin and scalp's natural healing cycles. This isn't a stacked package of services. It's a phased strategy, reviewed and adjusted as your skin responds.",
    benefits: [
      "A single, coherent plan across skin and scalp",
      "Treatments sequenced to compound, not compete",
      "Paced to your healing cycles — not rushed",
      "Adjusted as your skin and scalp respond",
      "Conservative by default, intentional at every step",
    ],
    idealFor: [
      "Patients wanting a long-term regenerative strategy",
      "Combined skin + scalp concerns",
      "Those who've felt their care was scattered or reactive",
      "Goals that span months, not a single visit",
    ],
    procedure: {
      duration: "Plan visits vary; each treatment session scheduled individually",
      downtime: "Varies by session — typically 24–72 hours at most",
      results: "Progressive change across months; reviewed at each visit",
      sessions: "Phased over 3–12 months; cadence set at consultation",
    },
    pricing: {
      note: "Plan and pricing are built at consultation, around the treatments included",
    },
    faqs: [
      {
        question: "How is this different from just booking individual treatments?",
        answer:
          "Individual treatments are booked reactively — you come in, you're treated, you schedule the next one. A Custom Regenerative Plan is built proactively, end to end. I map out the sequence of treatments over the next 6 to 12 months so each one builds on the last and nothing competes with the skin's healing cycle. You still come in for each appointment, but the strategy is set.",
      },
      {
        question: "What treatments are typically included?",
        answer:
          "It depends on your goals and what your skin or scalp actually needs. Plans most often combine some mix of microneedling with exosomes, chemical peels at varied depths, and scalp-focused regenerative protocols. Botox or filler can sit alongside a regenerative plan, but they are layered in separately rather than treated as part of the regeneration itself.",
      },
      {
        question: "How long does a plan typically run?",
        answer:
          "Most plans run 3 to 12 months. Skin-focused plans often land in the 3 to 6 month range; scalp plans and combined skin-plus-scalp plans typically run closer to 9 to 12 months because hair responds more slowly. I review your progress at each visit and adjust pacing if your skin is responding faster or slower than expected.",
      },
      {
        question: "Can I change the plan mid-way?",
        answer:
          "Yes. A plan is a working document. If your skin is responding better than expected, I can lighten the cadence or shift focus. If a concern emerges that wasn't in the original plan, I can fold it in. The goal is a plan that evolves with you — not one you're locked into.",
      },
      {
        question: "How is pricing structured?",
        answer:
          "Pricing is built around the treatments in your plan, reviewed transparently at consultation. I don't use opaque 'package' pricing designed to obscure cost — you'll see the breakdown per treatment, with any combined-visit or series discounts applied where appropriate.",
      },
    ],
    // Session 22: v2 #2 skincare bucket (editorial skincare alt set) — plans span skin + scalp, so
    // using skin-forward primary with a scalp-relevant alt in the rotation.
    image: pexelsUrl("3985325"),
    imageAlts: [pexelsUrl("5069494"), pexelsUrl("7446671"), pexelsUrl("3985331")],
    featured: true,
  },

  // ──────────────────────────────────────────────────────────────
  // HAIR RESTORATION
  // ──────────────────────────────────────────────────────────────
  {
    id: "scalp-microneedling",
    slug: "scalp-microneedling",
    // Session 22: Renamed per client (Hair Restoration Treatments). Slug preserved to avoid link breakage.
    name: "Hair Restoration Treatments",
    shortName: "Hair Restoration",
    category: "hair-restoration",
    tagline: "Scalp-Focused Regeneration for Stronger, Healthier Growth",
    description:
      "Scalp-focused regenerative treatments designed to support healthier, stronger, and more resilient hair growth over time. I pair precision scalp micro-channeling with growth factor or exosome infusions — delivering regenerative signal directly to the follicle. This is a long game: shedding patterns shift first, then density follows. I structure packages and maintenance cadence around that timeline so expectations and results stay aligned.",
    benefits: [
      "Support early-stage thinning before it progresses",
      "Strengthen and reactivate weakening follicles",
      "Improve overall scalp health and resilience",
      "Non-surgical, minimally invasive protocol",
      "Works alongside oral or topical treatments",
    ],
    idealFor: [
      "Early-stage hair thinning",
      "Scalp health optimization",
      "Hair density support",
      "Post-stress shedding",
    ],
    procedure: {
      duration: "60–75 minutes (including numbing and regenerative infusion)",
      downtime: "Minimal — possible mild redness or tenderness for 24–48 hours",
      results: "Early changes in shedding within 4–8 weeks; visible density improvement in 3–6 months",
      sessions: "Series of 3 or 6, spaced 4–6 weeks apart; maintenance every 3–4 months",
    },
    pricing: {
      starting: 850,
      range: "$850 single treatment · $4,500 for a 6-pack",
      note: "Complimentary consultation to assess candidacy and create a personalized treatment plan",
    },
    faqs: [
      {
        question: "Am I a good candidate for scalp microneedling?",
        answer:
          "The best candidates are patients with early-to-moderate androgenetic hair thinning — meaning the follicles are miniaturizing but not yet fully dormant. If you are noticing thinning at the crown, temples, or a widening part line, and the thinning has been gradual over months to years, you are likely a good candidate. I evaluate your hair loss pattern, scalp health, and medical history during a complimentary consultation. Patients with advanced, long-standing baldness where the follicles are no longer viable may not see meaningful benefit, and I will be honest about that during your assessment.",
      },
      {
        question: "How soon will I see results?",
        answer:
          "Hair restoration is a slow, progressive process. Most patients notice early signs of improvement — reduced shedding, finer baby hairs, improved scalp coverage — at 3 to 6 months. Optimal density gains typically develop at 9 to 12 months as treated follicles cycle through a full growth phase. I photograph your scalp at baseline and at regular intervals so you can track progress objectively. Patience and consistency with the treatment schedule are essential.",
      },
      {
        question: "How many treatments will I need?",
        answer:
          "I recommend a minimum of 3 treatments for mild thinning and 6 treatments for moderate thinning, spaced 4 to 6 weeks apart. After completing your initial series, maintenance treatments every 3 to 4 months help sustain and build on your results. Hair thinning is progressive by nature, so ongoing maintenance is important to preserve density gains over time. I structure my pricing in packages to make consistent treatment more accessible.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "I apply a topical numbing solution to the scalp for 20 to 30 minutes before treatment. Most patients describe the sensation as mild prickling or vibration — not painful, but noticeable. The scalp may feel tender and warm for 24 to 48 hours afterward, similar to a mild sunburn. Over-the-counter pain relief is rarely needed. I adjust needle depth and speed based on your comfort level throughout the procedure.",
      },
      {
        question: "Can I combine this with other hair loss treatments?",
        answer:
          "Yes, and I often recommend it. Scalp microneedling with growth factors works synergistically with oral finasteride (for men), topical minoxidil, and nutritional optimization. The micro-channels created during treatment actually enhance the absorption of topical treatments applied at home. During your consultation, I review your current regimen and may recommend complementary approaches to maximize results. I take a comprehensive, multi-modal approach to hair restoration rather than relying on any single treatment.",
      },
    ],
    // Session 20: no hair-specific IDs in approved pool.
    // Servicing (v3 A) + Keep-pile warm beauty; closest on-brand rotation.
    image: pexelsUrl("5069494"),
    imageAlts: [pexelsUrl("7446671"), pexelsUrl("3985329"), pexelsUrl("3985333")],
    featured: true,
  },
];

// ──────────────────────────────────────────────────────────────
// Helper Functions
// ──────────────────────────────────────────────────────────────

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export function getTreatmentsByCategory(category: TreatmentCategory): Treatment[] {
  return treatments.filter((t) => t.category === category);
}

export function getFeaturedTreatments(): Treatment[] {
  return treatments.filter((t) => t.featured);
}

export function getPopularTreatments(): Treatment[] {
  return treatments.filter((t) => t.popular);
}

export function getNewTreatments(): Treatment[] {
  return treatments.filter((t) => t.isNew);
}

export function getComingSoonTreatments(): Treatment[] {
  return treatments.filter((t) => t.comingSoon);
}

export function getAllCategorySlugs(): string[] {
  return Object.keys(treatmentCategories);
}

export function getCategoryBySlug(slug: string): { name: string; description: string; image: string } | undefined {
  return treatmentCategories[slug as TreatmentCategory];
}
