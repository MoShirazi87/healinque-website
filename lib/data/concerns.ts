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
      "Fine lines and wrinkles are among the most common concerns I see at Healinque, and many patients tell me they feel disappointed when they catch themselves in harsh lighting. The truth is that wrinkles develop from a mix of unavoidable factors: repetitive facial movements (the lines from smiling, frowning, squinting), cumulative sun exposure, and the natural decline in collagen and elastin that happens over decades. Genetics and lifestyle factors like smoking or dehydration add to the picture. Here's how I think about treating them: dynamic wrinkles (those that appear with expression) respond beautifully to neuromodulators like Botox or Dysport. Static lines (visible at rest) often need fillers, skin resurfacing, or collagen stimulation. Most patients benefit from a combination approach. Results typically take 2–3 weeks to become fully apparent, and maintenance every 3–4 months is the realistic timeline for neuromodulators.",
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
        name: "Microneedling",
        slug: "microneedling",
        description:
          "Stimulates collagen production for overall skin tightening and texture improvement.",
        recommended: true,
      },
      {
        name: "Chemical Peels",
        slug: "chemical-peels",
        description:
          "Resurface the skin to reduce superficial lines and improve overall texture and tone.",
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
    // Session 20: mature-skin editorial (Keep pile) + skincare close-up
    image: "https://images.pexels.com/photos/3985330/pexels-photo-3985330.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3985325/pexels-photo-3985325.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "volume-loss-sagging",
    slug: "volume-loss-sagging",
    name: "Volume Loss & Sagging",
    tagline: "Restore youthful fullness and contours",
    description:
      "Many patients tell me they notice their face looks different after turning 40 or 50—cheeks flatten, temples hollow out, the jawline softens, and skin begins to sag. This isn't vanity; it's anatomy. As we age, three overlapping changes take place: collagen production declines, fat pads descend from their original position, and bone resorbs (especially in the jaw and temples). The result is lost structure and sagging. I approach volume restoration strategically, placing fillers along the structural bones (cheekbones, temples, jawline) to restore the face's natural architecture. This lifts and rejuvenates without creating the overfilled look. Filler results are visible immediately but continue to improve over two weeks as swelling settles. Most fillers last 9–18 months depending on placement and metabolism. For more significant sagging, combining fillers with microneedling produces better results than either alone.",
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
        name: "Microneedling",
        slug: "microneedling",
        description:
          "Stimulates collagen production and skin tightening for improved skin quality and firmness.",
        recommended: true,
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
    // Session 20: volume/filler territory — warm beauty Keep pile + practitioner servicing
    image: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3985311/pexels-photo-3985311.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/7581577/pexels-photo-7581577.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "acne-scarring",
    slug: "acne-scarring",
    name: "Acne Scarring",
    tagline: "Reduce the appearance of acne scars with medical-grade treatments",
    description:
      "Many patients who struggled with acne tell me that even after their skin cleared, the scars remained as a painful reminder. Acne scars come in distinct types—icepick (deep, narrow pits), boxcar (wider, flat-bottomed depressions), and rolling (undulating texture)—and each type responds differently to treatment. There's no single fix; your plan depends on your scar morphology, skin tone, and skin quality. Icepick scars often need advanced microneedling. Boxcar scars benefit from combination approaches. Rolling scars respond well to microneedling and chemical peels. The realistic timeline is 6–12 months of progressive improvement with multiple sessions, and results are about 50–70% improvement, not complete resolution. Earlier treatment (within a year of scar formation) typically yields better outcomes.",
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
    // Session 20: skin texture close-ups (v2 #2) + Keep editorial face
    image: "https://images.pexels.com/photos/3985325/pexels-photo-3985325.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3985311/pexels-photo-3985311.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "dark-circles-under-eye",
    slug: "dark-circles-under-eye",
    name: "Dark Circles & Under-Eye Hollows",
    tagline: "Brighten tired-looking eyes with targeted treatments",
    description:
      "Dark circles are one of the most frustrating cosmetic complaints I see, because patients often assume one treatment will fix them—but the truth is more nuanced. Dark circles aren't just about sleep. The under-eye area can look dark for fundamentally different reasons. Some circles are pigmentary (melanin deposits or post-inflammatory hyperpigmentation). Others are vascular (you're seeing dark blood vessels through thin skin). Still others are structural (hollowing from fat loss or volume loss). And many patients have a combination. Here's how I evaluate: I look at your genetics, assess skin thickness, check for hollowing, and evaluate whether pigment or vascularity dominates. Microneedling and gentle chemical peels work well for pigmentary and vascular circles. Tear trough filler is an option for structural hollowing, but candidacy depends on anatomy—not everyone benefits. Realistic improvement develops over 4–6 weeks with consistent treatment.",
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
        name: "Microneedling",
        slug: "microneedling",
        description:
          "Stimulates collagen remodeling and improves skin quality around the under-eye area; particularly effective for pigmentary and vascular circles.",
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
    // Session 20: close-up editorial faces (Keep pile)
    image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4586741/pexels-photo-4586741.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "hyperpigmentation-melasma",
    slug: "hyperpigmentation-melasma",
    name: "Hyperpigmentation & Melasma",
    tagline: "Even out stubborn discoloration with customized treatment plans",
    description:
      "Hyperpigmentation is an umbrella term covering sun spots, age spots, post-inflammatory marks, and the chronic condition melasma. Melasma deserves special attention because it's fundamentally different from sun damage. Melasma is a hormonally driven pigment disorder (triggered by pregnancy, birth control, or hormonal therapy) that affects the deeper layers of skin. The critical caveat: melasma is manageable, not curable. Aggressive treatments can paradoxically worsen it. Patients with skin of color need especially careful provider selection—overly aggressive treatment can trigger post-inflammatory hyperpigmentation. In San Diego's sunny climate, pigmentation concerns are extremely common, and I take a conservative, step-by-step approach. I start with gentle exfoliation and medical-grade skincare, progress to modest chemical peels, and add microneedling in specific cases. For melasma, I emphasize strict sun protection and may add oral medications like tranexamic acid. Expect 3–6 months for noticeable improvement, and maintenance is ongoing.",
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
    // Session 20: skin-of-color representation (v2 #5 diversity) + Keep warmth
    image: "https://images.pexels.com/photos/6543617/pexels-photo-6543617.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3985311/pexels-photo-3985311.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "skin-laxity-sagging",
    slug: "skin-laxity-sagging",
    name: "Skin Laxity & Sagging",
    tagline: "Tighten and firm loose skin without surgery",
    description:
      "Skin laxity—that softening and sagging along the jawline, neck, and cheeks—results from the cumulative breakdown of collagen and elastin fibers that keep skin firm. Sun damage accelerates this process dramatically. The good news is that mild to moderate laxity responds well to non-surgical options. The realistic timeline is important: there's no overnight fix. Microneedling requires a series of 3–4 treatments spaced 4–6 weeks apart for optimal tightening and collagen stimulation. Dermal fillers can provide structural support along the jawline and cheeks. I evaluate the severity of your laxity to determine whether microneedling, fillers, combination approaches, or—in cases of significant descent—whether a surgical consultation makes sense.",
    causes: [
      "Natural collagen and elastin decline with age",
      "Sun damage and UV-induced elastin breakdown",
      "Weight fluctuations and rapid weight loss",
      "Genetic predisposition to early sagging",
      "Smoking and poor collagen support habits",
    ],
    treatments: [
      {
        name: "Microneedling",
        slug: "microneedling",
        description:
          "Stimulates collagen production and skin tightening; requires a series of 3–4 sessions for optimal results.",
        recommended: true,
      },
      {
        name: "Dermal Fillers",
        slug: "dermal-fillers",
        description:
          "Structural fillers provide support along the jawline, cheeks, and temples to counteract sagging.",
        recommended: true,
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
    // Session 20: mature beauty (Keep) + practitioner servicing (v3 A)
    image: "https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/7582568/pexels-photo-7582568.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "double-chin",
    slug: "double-chin",
    name: "Double Chin",
    tagline: "Reduce submental fullness for a cleaner jawline",
    description:
      "Submental fullness—that pocket of fat beneath the chin—is one of the most frustrating cosmetic concerns because it's often genetic and stubbornly resistant to diet and exercise. Many patients tell me that slimming their body barely touches their double chin, while others gain a little weight and suddenly notice fullness they never had before. I approach the double chin area with a combination strategy: neuromodulators can refine the jawline and platysmal bands, while dermal fillers can sculpt and define chin projection. If your concern is primarily skin laxity (from aging or significant weight loss), microneedling and collagen-stimulating treatments are better options. I evaluate your anatomy carefully to determine which approach serves you best.",
    causes: [
      "Genetics and inherited fat distribution patterns",
      "Weight gain concentrating in the submental area",
      "Aging and progressive skin laxity",
      "Underlying bone structure and chin projection",
    ],
    treatments: [
      {
        name: "Botox & Dysport",
        slug: "botox-dysport",
        description:
          "Neuromodulators can refine the jawline by relaxing platysmal bands and slimming the lower face.",
        recommended: true,
      },
      {
        name: "Dermal Fillers",
        slug: "dermal-fillers",
        description:
          "Chin and jawline filler sculpts definition and improves the profile for a more contoured appearance.",
      },
      {
        name: "Microneedling",
        slug: "microneedling",
        description:
          "Stimulates collagen production to tighten submental skin and improve overall skin quality.",
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
    // Session 20: jaw/neck territory — male editorial (v2 #4) + servicing + Keep beauty
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/7582568/pexels-photo-7582568.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6975466/pexels-photo-6975466.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "hair-thinning",
    slug: "hair-thinning",
    name: "Hair Thinning",
    tagline: "Restore density and thickness with regenerative scalp treatments",
    description:
      "Hair thinning is deeply personal—many patients tell me it affects their confidence and sense of identity. The causes are diverse: genetics (androgenetic alopecia), hormonal changes from thyroid disease or menopause, stress-related shedding, nutritional deficiencies, and underlying medical conditions. Scalp microneedling has a growing clinical evidence base for improving hair density and slowing loss, particularly in genetic pattern alopecia. But microneedling alone isn't a cure-all; I evaluate your specific hair loss pattern and determine whether scalp microneedling, pharmaceutical therapies (minoxidil, finasteride), or a combination makes the most sense. The realistic timeline is important: hair growth is slow. Expect 3–6 months before visible improvement, and you'll need maintenance sessions. Early intervention (within the first 2–3 years of loss) typically yields better outcomes than waiting.",
    causes: [
      "Androgenetic alopecia (male- or female-pattern genetic loss)",
      "Hormonal changes (thyroid dysfunction, postpartum, menopause)",
      "Stress-related shedding (telogen effluvium)",
      "Nutritional deficiencies (iron, ferritin, vitamin D, biotin, zinc)",
      "Medical conditions and medications (autoimmune, chemotherapy, certain drugs)",
    ],
    treatments: [
      {
        name: "Scalp Microneedling",
        slug: "scalp-microneedling",
        description:
          "Targeted scalp microneedling stimulates dormant follicles, enhances growth factor penetration, and supports hair density.",
        recommended: true,
      },
      {
        name: "Microneedling",
        slug: "microneedling",
        description:
          "General microneedling improves scalp health and can complement targeted scalp treatments.",
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
    // Session 20: no hair-specific IDs survived triage. Unisex pairing:
    // Keep-pile beauty + Keep editorial + male editorial (hair thinning affects both).
    image: "https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6763625/pexels-photo-6763625.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "sun-damage",
    slug: "sun-damage",
    name: "Sun Damage",
    tagline: "Repair accumulated UV damage and protect your skin going forward",
    description:
      "Living in San Diego or Southern California means years—often decades—of sun exposure. The cumulative effects show up as brown spots (solar lentigines), rough texture, visible redness (from broken capillaries), and accelerated wrinkling. Sun damage is the primary driver of premature skin aging. The reality is sobering: most of the visible aging you see in your 50s was set in motion in your teens and 20s. The good news: I can repair some of this damage and absolutely prevent further deterioration. My approach combines treatment to address existing damage with aggressive prevention going forward. Chemical peels remove damaged surface layers. Microneedling stimulates collagen remodeling and improves overall skin quality. Results develop over 4–12 weeks, and a series of treatments typically yields better outcomes than single sessions. Prevention after treatment is non-negotiable—without rigorous sun protection, damage recurs.",
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
        name: "Microneedling",
        slug: "microneedling",
        description:
          "Collagen stimulation improves texture and overall skin quality affected by sun damage.",
        recommended: true,
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
    // Session 20: sun damage — skincare close-ups (v2 #2 bucket)
    image: "https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/6543481/pexels-photo-6543481.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3985325/pexels-photo-3985325.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "skin-texture-tone",
    slug: "skin-texture-tone",
    name: "Skin Texture & Tone",
    tagline: "Improve rough texture, uneven tone, and dull appearance",
    description:
      "Many patients tell me their skin looks tired, lackluster, and not as vibrant as it used to be. Dull skin doesn't stem from one cause—it's usually a combination of dead cell buildup on the surface, dehydration, poor circulation, environmental damage, and internal factors like sleep deprivation, stress, and nutritional deficiencies. The good news is that even chronically dull skin responds well to a multi-pronged approach. I combine surface exfoliation (peels, microneedling) to remove the dull layer with treatments that stimulate renewal from within. Results are often visible within one to two weeks of a peel, while microneedling takes 4–6 weeks to show its full effect. Treating dull skin also requires addressing the lifestyle factors—sleep, stress, hydration, nutrition—that drive it.",
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
    // Session 20: skincare close-ups (v2 #2 bucket) — pore/texture territory
    image: "https://images.pexels.com/photos/7321494/pexels-photo-7321494.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/7321547/pexels-photo-7321547.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6948184/pexels-photo-6948184.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "weight-management",
    slug: "weight-management",
    name: "Weight Management",
    tagline: "Physician-supervised medical weight loss with FDA-approved medications",
    description:
      "Weight management is complex. Many patients tell me they've tried every diet and exercise program, yet their weight plateaus or creeps back up. That's often not a lack of willpower—it's metabolic and hormonal resistance. I also address something other weight loss programs ignore—the aesthetic changes that come with rapid weight loss. Dropping 30+ pounds can hollow out the face, creating the need for strategic volume restoration with dermal fillers. Microneedling and chemical peels help address skin texture changes that often accompany significant weight loss. I focus on building sustainable habits and supporting your skin through the transformation.",
    causes: [
      "Metabolic resistance and decreased metabolic rate",
      "Hormonal imbalances (thyroid, cortisol, insulin, estrogen/testosterone)",
      "Lifestyle and dietary factors (eating patterns, sleep, stress)",
      "Genetic predisposition to weight gain and obesity",
      "Medications that promote weight gain (antidepressants, anticonvulsants, steroids)",
    ],
    treatments: [
      {
        name: "Dermal Fillers",
        slug: "dermal-fillers",
        description:
          "Strategic volume restoration for facial hollowing that often accompanies significant weight loss.",
        recommended: true,
      },
      {
        name: "Microneedling",
        slug: "microneedling",
        description:
          "Stimulates collagen production to improve skin texture and firmness during and after weight loss.",
      },
      {
        name: "Chemical Peels",
        slug: "chemical-peels",
        description:
          "Resurface and rejuvenate skin that may appear dull or uneven after significant weight changes.",
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
    // Session 20: wellness lifestyle (v2 #7) — morning-light, on-brand for GLP-1 + longevity
    image: "https://images.pexels.com/photos/30809945/pexels-photo-30809945.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/30809946/pexels-photo-30809946.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/30809949/pexels-photo-30809949.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "low-energy",
    slug: "low-energy",
    name: "Low Energy & Fatigue",
    tagline: "Restore your vitality from the inside out",
    description:
      "Chronic fatigue and persistent low energy infiltrate every part of your life—work performance, relationships, exercise motivation, even your appearance. Many patients dismiss it as normal aging or stress, but persistent fatigue often has identifiable underlying causes. With comprehensive clinical training, I investigate root causes rather than just treating symptoms. Fatigue typically stems from hormonal imbalances (thyroid, testosterone, estrogen, cortisol), nutritional deficiencies (B12, iron, folate, vitamin D, magnesium), poor sleep quality, chronic inflammation, or mitochondrial dysfunction. My approach is systematic: comprehensive lab work to identify deficiencies, lifestyle optimization, and aesthetic treatments that help you look and feel revitalized. Microneedling and skin rejuvenation can restore a vibrant appearance even when energy levels are recovering. Results are gradual, typically improving over 4–8 weeks as baseline levels normalize.",
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
        name: "Microneedling",
        slug: "microneedling",
        description:
          "Rejuvenates skin appearance and stimulates collagen production, helping you look as revitalized as you feel.",
        recommended: true,
      },
      {
        name: "Chemical Peels",
        slug: "chemical-peels",
        description:
          "Refreshes dull, tired-looking skin by removing dead cell buildup and revealing a brighter complexion.",
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
    // Session 20: wellness lifestyle (v2 #7) + post-treatment relaxed (v3 E)
    image: "https://images.pexels.com/photos/30809947/pexels-photo-30809947.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/30809945/pexels-photo-30809945.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/19666215/pexels-photo-19666215.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "hormone-imbalance",
    slug: "hormone-imbalance",
    name: "Hormone Imbalance",
    tagline: "Balance your hormones, transform your life",
    description:
      "Hormones regulate nearly every process in your body—metabolism, mood, sleep quality, libido, skin radiance, energy, and more. When they're out of balance, you feel it everywhere. Many patients tell me they were dismissed by conventional medicine because their labs fell within 'normal ranges,' yet they felt terrible. The problem is that 'normal' is a wide range designed for population statistics, not for optimal wellness. I evaluate your hormones in the context of how you feel and function. Whether you're experiencing perimenopause or menopause (women), andropause or low testosterone (men), thyroid dysfunction, or chronic stress-driven cortisol dysregulation, I have comprehensive training to properly evaluate and treat these imbalances. While I address hormonal concerns holistically, my aesthetic treatments can help manage the visible effects of hormonal changes—from skin quality to facial volume shifts.",
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
        name: "Microneedling",
        slug: "microneedling",
        description:
          "Addresses hormone-related skin changes by stimulating collagen production and improving skin quality and radiance.",
        recommended: true,
      },
      {
        name: "Botox & Dysport",
        slug: "botox-dysport",
        description:
          "Manages stress-related expression lines and tension that often accompany hormonal imbalances.",
      },
      {
        name: "Dermal Fillers",
        slug: "dermal-fillers",
        description:
          "Restores facial volume lost due to hormonal changes, particularly during menopause or andropause.",
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
    // Session 20: wellness (v2 #7) + Keep-pile portrait — on-brand for hormone/longevity
    image: "https://images.pexels.com/photos/30809946/pexels-photo-30809946.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/30809945/pexels-photo-30809945.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
];

export function getConcernBySlug(slug: string): Concern | undefined {
  return concerns.find((c) => c.slug === slug);
}
