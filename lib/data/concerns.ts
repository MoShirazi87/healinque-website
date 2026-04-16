export interface Concern {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  causes: string[];
  treatments: {
    name: string;
    slug: string;
    description: string;
    recommended?: boolean;
  }[];
  tips: string[];
  image: string;
  imageAlts?: string[];
}

export const concerns: Concern[] = [
  {
    id: "fine-lines-wrinkles",
    slug: "fine-lines-wrinkles",
    name: "Fine Lines & Wrinkles",
    tagline: "Smooth, prevent, and reverse signs of aging",
    description:
      "Fine lines and wrinkles are among the most common concerns I see at Healinque, and many patients tell me they feel disappointed when they catch themselves in harsh lighting. The truth is that wrinkles develop from a mix of unavoidable factors: repetitive facial movements (the lines from smiling, frowning, squinting), cumulative sun exposure, and the natural decline in collagen and elastin that happens over decades. Genetics and lifestyle factors like smoking or dehydration add to the picture. Here's how I think about treating them: dynamic wrinkles (those that appear with expression) respond beautifully to neuromodulators like Botox or Dysport. Static lines (visible at rest) often need fillers, skin resurfacing, or RF-based collagen stimulation. Most patients benefit from a combination approach. Results typically take 2–3 weeks to become fully apparent, and maintenance every 3–4 months is the realistic timeline for neuromodulators.",
    causes: [
      "Repetitive facial expressions (smiling, frowning, squinting)",
      "Sun exposure and cumulative UV damage",
      "Natural collagen and elastin loss with age",
      "Smoking and environmental pollutants",
      "Dehydration and insufficient skincare",
      "Genetic predisposition to earlier wrinkling",
    ],
    treatments: [
      {
        name: "Botox & Dysport",
        slug: "botox-dysport",
        description:
          "The gold standard for dynamic wrinkles. Relaxes the muscles that cause forehead lines, frown lines (11s), and crow's feet.",
        recommended: true,
      },
      {
        name: "Dermal Fillers",
        slug: "dermal-fillers",
        description:
          "Fills static lines and restores volume loss that contributes to wrinkle formation.",
      },
      {
        name: "Morpheus8",
        slug: "morpheus8",
        description:
          "RF microneedling that stimulates collagen production for overall skin tightening and texture improvement.",
        recommended: true,
      },
      {
        name: "Chemical Peels",
        slug: "chemical-peels",
        description:
          "Resurface the skin to reduce superficial lines and improve overall texture and tone.",
      },
      {
        name: "Laser Resurfacing",
        slug: "laser-resurfacing",
        description:
          "Targets deeper wrinkles and stimulates collagen remodeling for longer-lasting improvement.",
      },
    ],
    tips: [
      "Wear broad-spectrum SPF 30+ sunscreen every day—this is the single best prevention strategy",
      "Consider preventative neuromodulation in your late 20s-early 30s if you have expressive features",
      "Use a prescription or high-quality retinoid consistently—this supports collagen production",
      "Stay hydrated and limit alcohol, which dehydrates skin",
      "Get adequate sleep; skin repairs itself most actively at night",
      "Don't smoke—it accelerates collagen breakdown and aging",
    ],
    image: "https://images.pexels.com/photos/30684790/pexels-photo-30684790.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/29811340/pexels-photo-29811340.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3764007/pexels-photo-3764007.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "volume-loss-sagging",
    slug: "volume-loss-sagging",
    name: "Volume Loss & Sagging",
    tagline: "Restore youthful fullness and contours",
    description:
      "Many patients tell me they notice their face looks different after turning 40 or 50—cheeks flatten, temples hollow out, the jawline softens, and skin begins to sag. This isn't vanity; it's anatomy. As we age, we experience three overlapping changes: collagen production declines, fat pads descend from their original position, and bone resorbs (especially in the jaw and temples). The result is lost structure and sagging. I approach volume restoration strategically, placing fillers along the structural bones (cheekbones, temples, jawline) to restore the face's natural architecture. This lifts and rejuvenates without creating the overfilled look. Filler results are visible immediately but continue to improve over two weeks as swelling settles. Most fillers last 9–18 months depending on placement and metabolism. For more significant sagging, combining threads or RF microneedling produces better results than filler alone.",
    causes: [
      "Natural aging and collagen decline",
      "Fat pad descent and gravitational effects",
      "Bone resorption in jaw, temples, and cheeks",
      "Rapid or significant weight loss",
      "Sun damage and elastin breakdown",
      "Genetic predisposition to early sagging",
    ],
    treatments: [
      {
        name: "Dermal Fillers",
        slug: "dermal-fillers",
        description:
          "Strategic placement of hyaluronic acid fillers to restore volume in cheeks, temples, jawline, and lips.",
        recommended: true,
      },
      {
        name: "PDO Thread Lift",
        slug: "pdo-thread-lift",
        description:
          "Non-surgical lifting and tightening for sagging skin, particularly effective for jowls and lower face.",
        recommended: true,
      },
      {
        name: "Morpheus8",
        slug: "morpheus8",
        description:
          "RF microneedling to tighten skin and stimulate collagen for improved skin quality and firmness.",
      },
      {
        name: "PRF Therapy",
        slug: "prf-therapy",
        description:
          "Stimulates natural collagen production for gradual improvement in skin quality and volume.",
      },
    ],
    tips: [
      "Maintain a stable weight—rapid fluctuations accelerate volume loss and sagging",
      "Protect your face from sun exposure with daily SPF and hats during peak hours",
      "Consider subtle filler early rather than waiting for significant loss—prevention is easier than correction",
      "Support collagen with prescription retinoids and vitamin C serums",
      "Sleep on your back when possible to minimize gravitational stress",
      "Maintain good posture—it actually affects how the face appears",
    ],
    image: "https://images.pexels.com/photos/3764578/pexels-photo-3764578.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8955914/pexels-photo-8955914.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "acne-scarring",
    slug: "acne-scarring",
    name: "Acne Scarring",
    tagline: "Reduce the appearance of acne scars with medical-grade treatments",
    description:
      "Many patients who struggled with acne tell me that even after their skin cleared, the scars remained as a painful reminder. Acne scars come in distinct types—icepick (deep, narrow pits), boxcar (wider, flat-bottomed depressions), and rolling (undulating texture)—and each type responds differently to treatment. There's no single fix; your plan depends on your scar morphology, skin tone, and skin quality. Icepick scars often need laser resurfacing or advanced microneedling. Boxcar scars benefit from combination approaches. Rolling scars respond to RF microneedling and subcision. The realistic timeline is 6–12 months of progressive improvement with multiple sessions, and results are about 50–70% improvement, not complete resolution. Earlier treatment (within a year of scar formation) typically yields better outcomes.",
    causes: [
      "Inflammatory acne, especially cystic or nodular",
      "Picking or squeezing breakouts (a major culprit)",
      "Delayed or inadequate acne treatment during active phase",
      "Genetic predisposition to severe scarring",
      "Deeper skin infections or severe inflammation",
    ],
    treatments: [
      {
        name: "Microneedling",
        slug: "microneedling",
        description:
          "Creates controlled micro-injuries to trigger collagen remodeling and smooth scar texture.",
        recommended: true,
      },
      {
        name: "Laser Resurfacing",
        slug: "laser-resurfacing",
        description:
          "Fractional laser energy targets scar tissue and stimulates deep collagen production.",
        recommended: true,
      },
      {
        name: "PRP Therapy",
        slug: "prp-therapy",
        description:
          "Growth factors from your own blood support healing and enhance microneedling results.",
      },
      {
        name: "Chemical Peels",
        slug: "chemical-peels",
        description:
          "Medical-grade peels improve surface texture and reduce discoloration from old acne marks.",
      },
    ],
    tips: [
      "Never pick at acne—this is the single biggest driver of severe scarring",
      "Wear SPF 30+ daily to prevent scar hyperpigmentation",
      "Start scar treatment within 1–2 years of scar formation for better results",
      "Be prepared for a series of treatments; one session rarely suffices",
      "Expect redness and mild swelling for 24–48 hours after microneedling or laser",
      "Combination treatments (laser + PRP, or microneedling + peels) often outperform single modalities",
    ],
    image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/8990463/pexels-photo-8990463.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5240623/pexels-photo-5240623.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "dark-circles-under-eye",
    slug: "dark-circles-under-eye",
    name: "Dark Circles & Under-Eye Hollows",
    tagline: "Brighten tired-looking eyes with targeted treatments",
    description:
      "Dark circles are one of the most frustrating cosmetic complaints I see, because patients often assume one treatment will fix them—but the truth is more nuanced. Dark circles aren't just about sleep. The under-eye area can look dark for fundamentally different reasons. Some circles are pigmentary (melanin deposits or post-inflammatory hyperpigmentation). Others are vascular (you're seeing dark blood vessels through thin skin). Still others are structural (hollowing from fat loss or volume loss). And many patients have a combination. Here's how I evaluate: I look at your genetics, assess skin thickness, check for hollowing, and evaluate whether pigment or vascularity dominates. My refined PRF under-eye protocol works beautifully for pigmentary and vascular circles. Tear trough filler is an option for structural hollowing, but candidacy depends on anatomy—not everyone benefits. Realistic improvement is typically 30–50% with PRF, and results develop over 4–6 weeks.",
    causes: [
      "Thin, translucent under-eye skin (genetic)",
      "Volume loss and tear trough hollowing",
      "Hyperpigmentation from sun exposure or post-inflammation",
      "Visible blood vessels and poor circulation",
      "Strong family history of dark circles",
      "Allergies, dehydration, poor sleep, and chronic stress",
    ],
    treatments: [
      {
        name: "PRF Therapy",
        slug: "prf-therapy",
        description:
          "Platelet-rich fibrin therapy improves skin quality and reduces under-eye darkness naturally; particularly effective for pigmentary and vascular circles.",
        recommended: true,
      },
      {
        name: "Dermal Fillers",
        slug: "dermal-fillers",
        description:
          "For structural hollowing (tear trough), filler can restore volume—but candidacy varies; not all dark circles are improved by filler.",
      },
      {
        name: "Chemical Peels",
        slug: "chemical-peels",
        description:
          "Gentle, specialized peels for the under-eye can reduce hyperpigmentation-driven darkness.",
      },
      {
        name: "PRP Therapy",
        slug: "prp-therapy",
        description:
          "Growth factor therapy supports skin rejuvenation and can reduce the appearance of darkness.",
      },
    ],
    tips: [
      "Wear SPF 30+ around the eyes daily—sun exposure darkens under-eye pigmentation",
      "Use a vitamin C serum morning and night if circles are pigment-based",
      "Sleep with an extra pillow to reduce morning swelling and puffiness",
      "Stay well-hydrated; dehydration makes circles more apparent",
      "Manage allergies; chronic eye rubbing worsens pigmentation",
      "Cold compresses in the morning constrict blood vessels and reduce puffiness temporarily",
      "Understand that not all dark circles respond to filler—a proper evaluation determines your best path",
    ],
    image: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/7019698/pexels-photo-7019698.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "hyperpigmentation-melasma",
    slug: "hyperpigmentation-melasma",
    name: "Hyperpigmentation & Melasma",
    tagline: "Even out stubborn discoloration with customized treatment plans",
    description:
      "Hyperpigmentation is an umbrella term covering sun spots, age spots, post-inflammatory marks, and the chronic condition melasma. Melasma deserves special attention because it's fundamentally different from sun damage. Melasma is a hormonally driven pigment disorder (triggered by pregnancy, birth control, or hormonal therapy) that affects the deeper layers of skin. The critical caveat: melasma is manageable, not curable. Aggressive treatments can paradoxically worsen it. Patients with skin of color need especially careful provider selection—overly aggressive laser or peeling can trigger post-inflammatory hyperpigmentation. In San Diego's sunny climate, pigmentation concerns are extremely common, and I take a conservative, step-by-step approach. I start with gentle exfoliation and medical-grade skincare, progress to modest chemical peels, and use targeted IPL only in specific cases. For melasma, I emphasize strict sun protection and may add oral medications like tranexamic acid. Expect 3–6 months for noticeable improvement, and maintenance is ongoing.",
    causes: [
      "Sun exposure and cumulative UV damage (sun spots, age spots)",
      "Hormonal changes (pregnancy, birth control, menopause)",
      "Post-inflammatory hyperpigmentation from acne, injury, or aggressive treatment",
      "Genetic predisposition and skin type (Fitzpatrick IV–VI at higher risk for melasma)",
      "Certain medications and inflammatory conditions",
    ],
    treatments: [
      {
        name: "Chemical Peels",
        slug: "chemical-peels",
        description:
          "Targeted acids reduce surface pigment and promote even cell turnover; for melasma, depth and frequency must be conservative.",
        recommended: true,
      },
      {
        name: "Microneedling",
        slug: "microneedling",
        description:
          "Stimulates collagen remodeling and can improve pigmentation safely; particularly suitable for skin of color.",
      },
      {
        name: "Medical-Grade Skincare",
        slug: "medical-grade-skincare",
        description:
          "Prescription-strength retinoids and hydroquinone/kojic acid are the foundation of long-term pigment management.",
      },
    ],
    tips: [
      "SPF 30+ every single day, reapplied every 2 hours—non-negotiable for melasma prevention",
      "Avoid aggressive treatments that trigger post-inflammatory hyperpigmentation, especially for darker skin tones",
      "Melasma is a management condition, not a cure—expect ongoing maintenance",
      "Use prescription retinoid nightly to support pigment suppression",
      "Consider oral tranexamic acid (with physician guidance) as part of a comprehensive melasma protocol",
      "Vitamin C serum and hydroquinone support long-term control",
      "Choose a provider experienced with your skin tone—treatment protocols vary by Fitzpatrick type",
    ],
    image: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/4156292/pexels-photo-4156292.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "skin-laxity-sagging",
    slug: "skin-laxity-sagging",
    name: "Skin Laxity & Sagging",
    tagline: "Tighten and firm loose skin without surgery",
    description:
      "Skin laxity—that softening and sagging along the jawline, neck, and cheeks—results from the cumulative breakdown of collagen and elastin fibers that keep skin firm. Sun damage accelerates this process dramatically. The good news is that mild to moderate laxity responds well to non-surgical options. The realistic timeline is important: there's no overnight fix. PDO threads provide immediate lifting (from the physical support of the sutures) but take 3–4 months to show full results as they stimulate new collagen. RF microneedling like Morpheus8 requires a series of 3–4 treatments spaced 4–6 weeks apart for optimal tightening. I evaluate the severity of your laxity to determine whether threads, RF, combination approaches, or—in cases of significant descent—whether a surgical consultation makes sense.",
    causes: [
      "Natural collagen and elastin decline with age",
      "Sun damage and UV-induced elastin breakdown",
      "Weight fluctuations and rapid weight loss",
      "Genetic predisposition to early sagging",
      "Smoking and poor collagen support habits",
    ],
    treatments: [
      {
        name: "PDO Thread Lift",
        slug: "pdo-thread-lift",
        description:
          "Dissolvable sutures physically lift and reposition mild to moderate laxity while stimulating collagen over months.",
        recommended: true,
      },
      {
        name: "Morpheus8",
        slug: "morpheus8",
        description:
          "RF microneedling delivers heat-based collagen stimulation and skin tightening; requires series of 3–4 sessions.",
        recommended: true,
      },
      {
        name: "Dermal Fillers",
        slug: "dermal-fillers",
        description:
          "Structural fillers like Sculptra provide support and stimulate long-term collagen production.",
      },
    ],
    tips: [
      "Start prevention early—maintaining collagen is far easier than rebuilding it",
      "Wear SPF 30+ every day; sun protection is the single best anti-sagging strategy",
      "Use prescription retinoids nightly; they support collagen synthesis and skin firmness",
      "Maintain stable weight to avoid repeated collagen breakdown from fluctuations",
      "Sleep on your back when possible; side sleeping increases gravitational stress",
      "Combination treatments often outperform single modalities; threads + RF or threads + fillers may be optimal",
      "Significant laxity may benefit from surgical consultation; non-surgical approaches have limits",
    ],
    image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "double-chin",
    slug: "double-chin",
    name: "Double Chin",
    tagline: "Reduce submental fullness for a cleaner jawline",
    description:
      "Submental fullness—that pocket of fat beneath the chin—is one of the most frustrating cosmetic concerns because it's often genetic and stubbornly resistant to diet and exercise. Many patients tell me that slimming their body barely touches their double chin, while others gain a little weight and suddenly notice fullness they never had before. Kybella is the only FDA-approved injectable that permanently destroys fat cells in this area. But candidacy is critical: Kybella works brilliantly for fat, but poorly for loose or sagging skin. If your double chin is primarily skin laxity (from aging or significant weight loss), PDO threads or skin tightening treatments are better options. I evaluate your anatomy carefully to determine which approach serves you. Kybella requires 2–4 treatments spaced 4–6 weeks apart, with significant swelling for 3–5 days after each session.",
    causes: [
      "Genetics and inherited fat distribution patterns",
      "Weight gain concentrating in the submental area",
      "Aging and progressive skin laxity",
      "Underlying bone structure and chin projection",
    ],
    treatments: [
      {
        name: "Kybella",
        slug: "kybella",
        description:
          "FDA-approved injectable that permanently destroys fat cells beneath the chin; works for fat, not skin laxity.",
        recommended: true,
      },
      {
        name: "PDO Thread Lift",
        slug: "pdo-thread-lift",
        description:
          "For patients whose concern is predominantly loose skin rather than fat.",
      },
      {
        name: "Morpheus8",
        slug: "morpheus8",
        description:
          "RF microneedling can tighten submental skin and provide subtle contouring.",
      },
    ],
    tips: [
      "Kybella permanently reduces fat cells but requires multiple sessions (typically 2–4)",
      "Expect significant swelling for 3–5 days after each Kybella treatment; plan accordingly",
      "Kybella works best for fat-dominant concerns; loose skin requires different treatments",
      "Maintain stable weight after Kybella to preserve results",
      "A detailed in-person evaluation is essential—your anatomy determines the best approach",
      "Results develop progressively over 12 weeks as swelling resolves and collagen reorganizes",
    ],
    image: "https://images.pexels.com/photos/6551070/pexels-photo-6551070.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/6975466/pexels-photo-6975466.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8670203/pexels-photo-8670203.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "hair-thinning",
    slug: "hair-thinning",
    name: "Hair Thinning",
    tagline: "Restore density and thickness with regenerative scalp treatments",
    description:
      "Hair thinning is deeply personal—many patients tell me it affects their confidence and sense of identity. The causes are diverse: genetics (androgenetic alopecia), hormonal changes from thyroid disease or menopause, stress-related shedding, nutritional deficiencies, and underlying medical conditions. PRP scalp therapy has a growing clinical evidence base for improving hair density and slowing loss, particularly in genetic pattern alopecia. But PRP alone isn't a cure-all; I evaluate your specific hair loss pattern and determine whether PRP, pharmaceutical therapies (minoxidil, finasteride), scalp microneedling, or a combination makes the most sense. The realistic timeline is important: hair growth is slow. Expect 3–6 months before visible improvement, and you'll need maintenance sessions. Early intervention (within the first 2–3 years of loss) typically yields better outcomes than waiting.",
    causes: [
      "Androgenetic alopecia (male- or female-pattern genetic loss)",
      "Hormonal changes (thyroid dysfunction, postpartum, menopause)",
      "Stress-related shedding (telogen effluvium)",
      "Nutritional deficiencies (iron, ferritin, vitamin D, biotin, zinc)",
      "Medical conditions and medications (autoimmune, chemotherapy, certain drugs)",
    ],
    treatments: [
      {
        name: "PRP Therapy",
        slug: "prp-therapy",
        description:
          "Concentrated growth factors injected into the scalp to support hair follicle health and density.",
        recommended: true,
      },
      {
        name: "Microneedling",
        slug: "microneedling",
        description:
          "Scalp microneedling enhances growth factor penetration and stimulates dormant follicles.",
      },
      {
        name: "Regenerative Consultation",
        slug: "regenerative-consultation",
        description:
          "Comprehensive evaluation of your hair loss pattern, underlying causes, and customized treatment options.",
      },
    ],
    tips: [
      "Get a proper medical evaluation before starting any treatment—identify the underlying cause",
      "Check your iron, ferritin, B12, vitamin D, and thyroid function; deficiencies are common culprits",
      "PRP works best for early to moderate thinning; very advanced loss may not respond",
      "Combining PRP with minoxidil (Rogaine) or finasteride (Propecia) often improves results significantly",
      "Hair improvement is slow—expect 3–6 months of consistent treatment before visible change",
      "Manage stress through exercise, sleep, and meditation; chronic stress worsens hair loss",
      "Maintenance treatments (PRP boosters every 6–12 months) are typically needed to sustain results",
    ],
    image: "https://images.pexels.com/photos/3993453/pexels-photo-3993453.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3993311/pexels-photo-3993311.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/20387720/pexels-photo-20387720.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "sun-damage",
    slug: "sun-damage",
    name: "Sun Damage",
    tagline: "Repair accumulated UV damage and protect your skin going forward",
    description:
      "Living in San Diego or Southern California means years—often decades—of sun exposure. The cumulative effects show up as brown spots (solar lentigines), rough texture, visible redness (from broken capillaries), and accelerated wrinkling. Sun damage is the primary driver of premature skin aging. The reality is sobering: most of the visible aging you see in your 50s was set in motion in your teens and 20s. The good news: we can repair some of this damage and absolutely prevent further deterioration. My approach combines treatment to address existing damage with aggressive prevention going forward. Chemical peels remove damaged surface layers. Laser and microneedling stimulate collagen remodeling and target pigmented spots. Results develop over 4–12 weeks, and a series of treatments typically yields better outcomes than single sessions. Prevention after treatment is non-negotiable—without rigorous sun protection, damage recurs.",
    causes: [
      "Cumulative UV exposure over decades",
      "Inadequate or inconsistent sunscreen use",
      "History of sunburns, especially in childhood",
      "Fair skin type (higher sensitivity to UV damage)",
      "Outdoor lifestyle without consistent protection",
    ],
    treatments: [
      {
        name: "Chemical Peels",
        slug: "chemical-peels",
        description:
          "Medical-grade acids remove damaged surface layers, revealing healthier skin and improving pigmentation.",
        recommended: true,
      },
      {
        name: "Laser Resurfacing",
        slug: "laser-resurfacing",
        description:
          "Targets brown spots, rough texture, and deeper sun damage while stimulating collagen production.",
        recommended: true,
      },
      {
        name: "IPL Photo Facial",
        slug: "ipl-photo-facial",
        description:
          "Intense pulsed light targets brown spots and improves overall skin tone and texture.",
      },
      {
        name: "Microneedling",
        slug: "microneedling",
        description:
          "Collagen stimulation improves texture and overall skin quality affected by sun damage.",
      },
    ],
    tips: [
      "SPF 30+ or higher every single day—this is the most important anti-aging strategy you can implement",
      "Reapply sunscreen every 2 hours when outdoors; sunscreen breaks down with sweat and water",
      "Wear a wide-brimmed hat and UV-protective clothing, and seek shade during peak UV hours (10am–4pm)",
      "Use a vitamin C serum in the morning; it provides antioxidant protection against UV-induced damage",
      "Get annual skin checks with a physician; sun damage increases risk of skin cancer",
      "Avoid tanning beds completely; they cause accelerated skin damage and skin cancer risk",
      "Start treatment early; prevention is far easier (and cheaper) than repair",
    ],
    image: "https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/7580836/pexels-photo-7580836.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/11554445/pexels-photo-11554445.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "skin-texture-tone",
    slug: "skin-texture-tone",
    name: "Skin Texture & Tone",
    tagline: "Improve rough texture, uneven tone, and dull appearance",
    description:
      "Many patients tell me their skin looks tired, lackluster, and not as vibrant as it used to be. Dull skin doesn't stem from one cause—it's usually a combination of dead cell buildup on the surface, dehydration, poor circulation, environmental damage, and internal factors like sleep deprivation, stress, and nutritional deficiencies. The good news is that even chronically dull skin responds well to a multi-pronged approach. I combine surface exfoliation (peels, microneedling) to remove the dull layer with treatments that stimulate renewal from within (PRP, PRF). Results are often visible within one to two weeks of a peel, while regenerative treatments take 4–6 weeks to show their full effect. Treating dull skin also requires addressing the lifestyle factors—sleep, stress, hydration, nutrition—that drive it.",
    causes: [
      "Dead skin cell buildup and impaired cell turnover",
      "Chronic dehydration",
      "Sun damage and environmental pollutants",
      "Lack of sleep; skin regenerates most actively at night",
      "Chronic stress and cortisol elevation",
      "Poor nutrition, vitamin deficiencies, and inadequate protein",
      "Smoking and alcohol use",
      "Aging and naturally slowed metabolic turnover",
    ],
    treatments: [
      {
        name: "Chemical Peels",
        slug: "chemical-peels",
        description:
          "Medical-grade peels remove dead outer layers to reveal fresh, glowing skin. Customized depth based on skin type for immediate visible improvement.",
        recommended: true,
      },
      {
        name: "Microneedling",
        slug: "microneedling",
        description:
          "Stimulates collagen production and improves skin texture and tone; can be combined with serums for enhanced results.",
      },
      {
        name: "PRF Therapy",
        slug: "prf-therapy",
        description:
          "Your own growth factors stimulate cellular renewal and restore radiance from within through natural regeneration.",
      },
      {
        name: "IV Therapy",
        slug: "iv-therapy",
        description:
          "Address internal nutritional deficiencies that contribute to dull skin with custom nutrient infusions.",
      },
    ],
    tips: [
      "Exfoliate regularly—2–3 times weekly with a gentle chemical or physical exfoliant",
      "Stay well-hydrated; drink at least 8–10 glasses of water daily",
      "Use a vitamin C serum every morning to brighten and provide antioxidant protection",
      "Get 7–9 hours of quality sleep; skin regenerates most actively during sleep",
      "Eat a nutrient-rich diet with plenty of colorful fruits, vegetables, and lean proteins",
      "Manage stress through exercise, meditation, or therapy; chronic stress accelerates dullness",
      "Avoid smoking and limit alcohol; both dehydrate skin and accelerate aging",
      "Use a hydrating moisturizer appropriate for your skin type",
    ],
    image: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/11935638/pexels-photo-11935638.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/17545641/pexels-photo-17545641.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "weight-management",
    slug: "weight-management",
    name: "Weight Management",
    tagline: "Physician-supervised medical weight loss with FDA-approved medications",
    description:
      "Weight management is complex. Many patients tell me they've tried every diet and exercise program, yet their weight plateaus or creeps back up. That's often not a lack of willpower—it's metabolic and hormonal resistance. My medical weight loss program uses FDA-approved GLP-1 medications (semaglutide, tirzepatide) alongside comprehensive evaluation, lab work, nutrition guidance, and lifestyle coaching. GLP-1s suppress appetite and improve satiety by working on your brain's hunger centers. But here's what matters: they only work if combined with real dietary and activity changes. I also address something other weight loss programs ignore—the aesthetic changes that come with rapid weight loss. Dropping 30+ pounds can hollow out the face, creating the need for strategic volume restoration. Realistic expectations: most patients lose 10–20% of body weight over 6–12 months. Weight regain is common after stopping medications, so we focus on building sustainable habits, not quick fixes.",
    causes: [
      "Metabolic resistance and decreased metabolic rate",
      "Hormonal imbalances (thyroid, cortisol, insulin, estrogen/testosterone)",
      "Lifestyle and dietary factors (eating patterns, sleep, stress)",
      "Genetic predisposition to weight gain and obesity",
      "Medications that promote weight gain (antidepressants, anticonvulsants, steroids)",
    ],
    treatments: [
      {
        name: "GLP-1 Weight Loss",
        slug: "glp1-weight-loss",
        description:
          "FDA-approved semaglutide (Wegovy) and tirzepatide (Zepbound) with physician supervision, lab work, and nutrition coaching.",
        recommended: true,
      },
      {
        name: "Hormone Optimization",
        slug: "hormone-optimization",
        description:
          "Hormonal imbalances (thyroid, cortisol, sex hormones) can drive weight resistance and must be addressed for success.",
      },
      {
        name: "IV Therapy",
        slug: "iv-therapy",
        description:
          "Nutritional support for metabolic health during weight loss.",
      },
    ],
    tips: [
      "GLP-1 medications are a tool, not a magic fix—combine them with real dietary changes and activity",
      "Expect progressive weight loss over months, not weeks; typical rate is 1–2 pounds per week",
      "Get comprehensive lab work (thyroid, cortisol, insulin, metabolic panel) before and during treatment",
      "Address hormonal imbalances; uncontrolled thyroid dysfunction or cortisol excess will sabotage weight loss",
      "Plan ahead for facial volume changes; rapid weight loss can hollow the face—filler may be needed",
      "Build sustainable eating habits, not restrictive diets; when you stop GLP-1s, habits keep working",
      "Expect weight regain if you return to old eating patterns after stopping medications",
      "Exercise and strength training support metabolism and preserve muscle during weight loss",
      "Sleep 7–9 hours nightly; poor sleep drives weight gain through hormonal disruption",
    ],
    image: "https://images.pexels.com/photos/6975471/pexels-photo-6975471.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/7492985/pexels-photo-7492985.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/20177876/pexels-photo-20177876.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "low-energy",
    slug: "low-energy",
    name: "Low Energy & Fatigue",
    tagline: "Restore your vitality from the inside out",
    description:
      "Chronic fatigue and persistent low energy infiltrate every part of your life—work performance, relationships, exercise motivation, even your appearance. Many patients dismiss it as normal aging or stress, but persistent fatigue often has identifiable underlying causes. With comprehensive clinical training, I investigate root causes rather than just treating symptoms. Fatigue typically stems from hormonal imbalances (thyroid, testosterone, estrogen, cortisol), nutritional deficiencies (B12, iron, folate, vitamin D, magnesium), poor sleep quality, chronic inflammation, or mitochondrial dysfunction. My approach is systematic: comprehensive lab work to identify deficiencies, optimization of hormones that support energy, nutritional IV therapy to correct deficiencies rapidly, and peptide therapies that enhance energy at the cellular level. Results are gradual, typically improving over 4–8 weeks as baseline levels normalize and mitochondrial function improves.",
    causes: [
      "Hormonal imbalances (thyroid, testosterone, estrogen, cortisol, growth hormone)",
      "Nutritional deficiencies (B12, folate, iron, ferritin, vitamin D, magnesium, coenzyme Q10)",
      "Poor sleep quality or undiagnosed sleep disorders",
      "Chronic stress and elevated cortisol (adrenal dysfunction)",
      "Chronic inflammation and oxidative stress",
      "Mitochondrial dysfunction and cellular energy decline",
      "Underlying medical conditions (anemia, hypothyroidism, diabetes, autoimmune disease)",
    ],
    treatments: [
      {
        name: "Hormone Optimization",
        slug: "hormone-optimization",
        description:
          "Optimizing hormones—especially thyroid, testosterone, estrogen, and cortisol—can dramatically improve energy and vitality.",
        recommended: true,
      },
      {
        name: "IV Therapy",
        slug: "iv-therapy",
        description:
          "Direct nutrient delivery (B vitamins, vitamin C, magnesium) and NAD+ infusions support cellular energy production.",
        recommended: true,
      },
      {
        name: "Peptide Therapy",
        slug: "peptide-therapy",
        description:
          "Specific peptides support energy production, improve sleep quality, and enhance recovery at the cellular level.",
      },
    ],
    tips: [
      "Sleep 7–9 hours nightly; sleep is when your body repairs and restores itself—prioritize it",
      "Get comprehensive hormone testing (TSH, free T3, T4, testosterone, cortisol, DHEA) and nutritional labs",
      "Manage stress through meditation, breathwork, exercise, or therapy; chronic stress tanks energy",
      "Get tested for nutrient deficiencies; low B12, iron, and vitamin D are energy killers",
      "Exercise regularly, especially resistance training; it builds muscle and improves mitochondrial function",
      "Eat a nutrient-dense diet with plenty of protein, healthy fats, and colorful vegetables",
      "Limit alcohol and caffeine dependence; they disrupt sleep and hormone balance",
      "If energy doesn't improve with lifestyle changes, see a physician who orders comprehensive labs",
    ],
    image: "https://images.pexels.com/photos/6870416/pexels-photo-6870416.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/6293251/pexels-photo-6293251.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "hormone-imbalance",
    slug: "hormone-imbalance",
    name: "Hormone Imbalance",
    tagline: "Balance your hormones, transform your life",
    description:
      "Hormones regulate nearly every process in your body—metabolism, mood, sleep quality, libido, skin radiance, energy, and more. When they're out of balance, you feel it everywhere. Many patients tell me they were dismissed by conventional medicine because their labs fell within 'normal ranges,' yet they felt terrible. The problem is that 'normal' is a wide range designed for population statistics, not for optimal wellness. I evaluate your hormones in the context of how you feel and function. Whether you're experiencing perimenopause or menopause (women), andropause or low testosterone (men), thyroid dysfunction, or chronic stress-driven cortisol dysregulation, I have comprehensive training to properly evaluate and treat these imbalances. Bioidentical hormone therapy, when appropriate, uses hormones molecularly identical to what your body produces naturally. My approach is physiologic dosing, not blanket high-dose protocols. Realistic timeline: most patients feel measurable improvement within 4–6 weeks of starting treatment.",
    causes: [
      "Menopause and perimenopause (women); declining estrogen and progesterone",
      "Andropause and age-related low testosterone (men)",
      "Thyroid dysfunction (hypothyroidism, Hashimoto's, T4-to-T3 conversion issues)",
      "Chronic stress and adrenal dysregulation (elevated or depleted cortisol)",
      "Chronically poor sleep; sleep deprivation dysregulates all hormones",
      "Medications (beta-blockers, statins, SSRIs, metformin can affect hormones)",
      "Environmental endocrine disruptors (BPA, pesticides, phthalates)",
    ],
    treatments: [
      {
        name: "Hormone Optimization",
        slug: "hormone-optimization",
        description:
          "Bioidentical hormone therapy using molecules identical to your body's natural hormones; custom dosing based on labs and symptoms.",
        recommended: true,
      },
      {
        name: "Peptide Therapy",
        slug: "peptide-therapy",
        description:
          "Specific peptides support natural hormone production and regulation, especially for growth hormone and DHEA optimization.",
      },
      {
        name: "IV Therapy",
        slug: "iv-therapy",
        description:
          "Nutritional support for hormone metabolism and conversion (e.g., B vitamins for methylation).",
      },
    ],
    tips: [
      "Get comprehensive hormone testing—not just basic TSH or a single testosterone level; assess estrogen, progesterone, cortisol, DHEA, free T3, thyroid antibodies",
      "Work with a physician who understands optimal ranges, not just 'normal' population ranges",
      "Sleep 7–9 hours nightly; poor sleep dysregulates every hormone",
      "Manage stress through exercise, meditation, breathwork, or therapy; chronic stress drives hormone imbalance",
      "Maintain a healthy weight; body fat produces estrogen, which can unbalance the endocrine system",
      "Limit exposure to endocrine disruptors: avoid plastic food containers, choose organic when possible, use clean beauty products",
      "Support hormone metabolism with adequate protein, healthy fats, and micronutrients (zinc, selenium, iodine)",
      "Re-test hormones every 3–6 months after starting treatment to adjust dosing as needed",
    ],
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4173250/pexels-photo-4173250.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
];

export function getConcernBySlug(slug: string): Concern | undefined {
  return concerns.find((c) => c.slug === slug);
}
