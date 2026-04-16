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
  | "regenerative"
  | "skin-rejuvenation"
  | "mens-health"
  | "wellness";

export const treatmentCategories: Record<
  TreatmentCategory,
  { name: string; description: string; image: string }
> = {
  aesthetics: {
    name: "Aesthetic Treatments",
    description:
      "Enhance your natural beauty with physician-led injectable and skin treatments",
    image: "https://images.pexels.com/photos/7446671/pexels-photo-7446671.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  regenerative: {
    name: "Regenerative Medicine",
    description:
      "Advanced regenerative protocols to restore function and vitality",
    image: "https://images.pexels.com/photos/6787217/pexels-photo-6787217.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  "skin-rejuvenation": {
    name: "Skin Rejuvenation",
    description:
      "Restore your skin's natural radiance with medical-grade treatments",
    image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  "mens-health": {
    name: "Men's Health",
    description:
      "Dedicated treatments for male patients in a comfortable, discreet setting",
    image: "https://images.pexels.com/photos/8967786/pexels-photo-8967786.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  wellness: {
    name: "Wellness & Longevity",
    description:
      "Optimize your health, energy, and vitality for the long run",
    image: "https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
};

export const treatments: Treatment[] = [
  // AESTHETIC TREATMENTS
  {
    id: "botox-dysport",
    slug: "botox-dysport",
    name: "Botox & Dysport",
    category: "aesthetics",
    tagline: "Precision Neuromodulation for Natural Expression",
    description:
      "I use Botox and Dysport to smooth dynamic wrinkles—the lines created by facial movement—while preserving your ability to emote. The key is precise dosing and placement. Too much product and you look frozen. Done well, you look like yourself, refreshed. Most patients see results within a week, with full effect at two weeks.",
    benefits: [
      "Smooth forehead lines, frown lines, and crow's feet",
      "Preserve natural facial expressions",
      "Prevent deeper wrinkles from forming over time",
      "Quick in-office treatment with zero downtime",
      "Results typically last 3–4 months",
    ],
    idealFor: [
      "Dynamic expression lines (not volume loss)",
      "Preventative treatment for younger patients",
      "Those seeking subtle, natural-looking results",
      "Anyone uncomfortable with frozen or overdone appearance",
    ],
    procedure: {
      duration: "15-30 minutes",
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
          "No. Dr. Shirazi uses precise dosing and placement to smooth wrinkles while preserving your natural expressions and ability to emote.",
      },
      {
        question: "How long do results last?",
        answer:
          "Results typically last 3-4 months. Regular treatments help maintain results and can even prevent wrinkles from forming as deeply.",
      },
      {
        question: "Is there any downtime?",
        answer:
          "You can return to normal activities immediately. We recommend avoiding strenuous exercise for 24 hours and not lying flat for 4 hours after treatment.",
      },
      {
        question: "When will I see results?",
        answer:
          "You'll begin to see results within 3-7 days, with full results visible at 2 weeks as the Botox fully integrates.",
      },
      {
        question: "What's the difference between Botox, Dysport, and Daxxify?",
        answer:
          "All three are FDA-approved neuromodulators. Botox is the most established, lasting 3–4 months. Dysport spreads slightly wider, making it good for larger areas like the forehead. Daxxify is the newest option and lasts significantly longer — about 6–9 months for many patients. Dr. Shirazi recommends the product best suited to your anatomy and goals.",
      },
      {
        question: "What about off-label uses like masseter Botox or lip flip?",
        answer:
          "While Botox is FDA-approved for frown lines, crow's feet, and forehead wrinkles, many uses (masseter treatment for TMJ, lip flip, chin dimpling) are off-label. Dr. Shirazi uses off-label applications thoughtfully based on anatomy and goals, and you'll discuss the distinction during consultation. Off-label doesn't mean unsafe—it means the indication isn't formally FDA-cleared, but there is clinical support and physician experience.",
      },
      {
        question: "Who is NOT a candidate for Botox?",
        answer:
          "Botox is not recommended if you have neuromuscular disorders, are allergic to botulinum toxin, are pregnant or breastfeeding, or are taking certain medications (like some blood thinners or antibiotics that interact). Dr. Shirazi reviews your medical history to ensure safety.",
      },
    ],
    image: "https://images.pexels.com/photos/7581590/pexels-photo-7581590.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/4586713/pexels-photo-4586713.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4586741/pexels-photo-4586741.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    featured: true,
    popular: true,
  },
  {
    id: "dysport",
    slug: "dysport",
    name: "Dysport",
    category: "aesthetics",
    tagline: "Extended Coverage Neuromodulation",
    description:
      "Dysport is another FDA-approved neuromodulator that works similarly to Botox, but spreads slightly wider. I typically recommend it for larger areas like the forehead. Some patients also prefer it because results appear slightly faster—usually within 3–5 days instead of a full week. Like Botox, the goal is always a refreshed, natural appearance.",
    benefits: [
      "Similar smoothing to Botox with slightly broader spread",
      "Excellent for large treatment areas (forehead, temples)",
      "Faster initial results (3–5 days vs. 7 days)",
      "Fully effective at 2 weeks, lasts 3–4 months",
      "Preserves natural facial movement",
    ],
    idealFor: [
      "Large forehead areas needing coverage",
      "Those who prefer faster onset of results",
      "Patients switching from or alternating with Botox",
      "Anyone seeking broader muscle relaxation",
    ],
    procedure: {
      duration: "15-30 minutes",
      downtime: "None",
      results: "First results at 3–5 days; full effect at 10–14 days",
      sessions: "Every 3–4 months for maintenance",
    },
    pricing: {
      starting: 4.5,
      note: "$4.50/unit · Most patients spend $150–$400 per session for Dysport",
    },
    faqs: [
      {
        question: "How is Dysport different from Botox?",
        answer:
          "Both are neuromodulators, but Dysport has a slightly broader spread pattern, making it ideal for larger areas like the forehead.",
      },
      {
        question: "Do results feel different?",
        answer:
          "The results are similar, though the timeline to peak effect is slightly faster with Dysport, usually within 3-5 days.",
      },
      {
        question: "Can I switch between Botox and Dysport?",
        answer:
          "Yes, you can alternate or choose based on your preference. Dr. Shirazi will discuss which is best for your unique anatomy.",
      },
      {
        question: "What areas does Dysport work best for?",
        answer:
          "Dysport is excellent for the forehead, glabella (frown lines), and other larger treatment areas.",
      },
      {
        question: "Who is NOT a candidate for Dysport?",
        answer:
          "Dysport is not recommended if you have neuromuscular disorders, are allergic to botulinum toxin, are pregnant or breastfeeding, or are taking certain medications. Dr. Shirazi reviews your full history to ensure safety.",
      },
    ],
    image: "https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3985339/pexels-photo-3985339.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2661255/pexels-photo-2661255.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    popular: true,
  },
  {
    id: "dermal-fillers",
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    category: "aesthetics",
    tagline: "Volume Restoration for Subtle Enhancement",
    description:
      "As we age, we don't just get wrinkles—we lose volume. Fillers restore that volume in a way that looks natural and supports your bone structure. I use hyaluronic acid fillers because they're reversible, customizable, and safe. My approach is conservative: start with what you need, not with what's possible. Overfilled looks worse than slightly under-filled. Results are immediate but final results appear at two weeks after swelling settles. Safety at Healinque: Every filler treatment begins with a thorough vascular anatomy assessment. I keep hyaluronidase (the dissolving enzyme that reverses HA fillers) on-site and follow strict emergency protocols for the rare event of vascular occlusion. This is what physician-led care means—not just artistry, but the medical training to recognize and manage complications.",
    benefits: [
      "Restore facial volume lost to aging",
      "Smooth nasolabial folds and marionette lines",
      "Enhance cheekbones and jawline definition",
      "Reversible with hyaluronidase if needed",
      "Results last 6–18 months depending on area",
      "No surgery, no downtime",
    ],
    idealFor: [
      "Hollow cheeks or temples",
      "Under-eye hollows and dark circles",
      "Deep parentheses and nasolabial folds",
      "Those seeking facial contouring without surgery",
    ],
    procedure: {
      duration: "30-60 minutes",
      downtime: "Mild swelling/bruising 1-3 days; ice helps",
      results: "Immediate, full results at 2 weeks",
      sessions: "Typically 1 treatment; touch-ups every 6-18 months",
    },
    pricing: {
      starting: 500,
      note: "Starting at $500 per syringe · Final pricing determined at consultation",
    },
    faqs: [
      {
        question: "Which filler is right for me?",
        answer:
          "Dr. Shirazi recommends the best filler based on your treatment area and goals. Thicker fillers work for cheeks and jawline, while softer fillers are ideal for lips and under-eyes.",
      },
      {
        question: "Are fillers reversible?",
        answer:
          "HA fillers can often be dissolved with hyaluronidase if needed.",
      },
      {
        question: "How long do results last?",
        answer:
          "Results typically last 6-18 months depending on the filler type and treatment area. Lips metabolize faster than cheeks.",
      },
      {
        question: "Will I look overfilled?",
        answer:
          "Dr. Shirazi takes a conservative approach, starting with appropriate amounts and building gradually. The goal is natural enhancement, not obvious augmentation.",
      },
      {
        question: "What is vascular occlusion and what are the warning signs?",
        answer:
          "Vascular occlusion occurs when filler enters or compresses a blood vessel — it's the most serious filler complication, though rare. Warning signs include: sudden severe pain (not just typical soreness), blanching or paleness of skin immediately after injection, vision changes if fillers are near the eye, or rapid skin color changes. If you experience any of these during or after treatment, inform Dr. Shirazi immediately—this is reversible if caught quickly with hyaluronidase. This is why physician-placed fillers matter.",
      },
      {
        question: "Are biostimulators like Sculptra reversible?",
        answer:
          "Only hyaluronic acid (HA) fillers are reversible with hyaluronidase. Biostimulators like Sculptra and Radiesse work by stimulating your own collagen and cannot be dissolved. This is one reason I prefer HA fillers for most patients—the reversibility option.",
      },
      {
        question: "Can I get fillers if I'm pregnant or breastfeeding?",
        answer:
          "Safety data on fillers during pregnancy and breastfeeding is limited. We typically recommend waiting until after pregnancy and breastfeeding to proceed with elective cosmetic fillers. If you're planning pregnancy or nursing, discuss timing with Dr. Shirazi.",
      },
      {
        question: "Do fillers migrate?",
        answer:
          "HA fillers can shift slightly over time with facial movement and gravity, but true migration is rare when placed correctly. I use proper technique, appropriate placement depth, and conservative dosing to prevent unwanted movement. This is another reason precise placement by a physician is important.",
      },
    ],
    image: "https://images.pexels.com/photos/2661255/pexels-photo-2661255.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/9775166/pexels-photo-9775166.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/9038626/pexels-photo-9038626.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    featured: true,
    popular: true,
  },
  {
    id: "lip-filler",
    slug: "lip-filler",
    name: "Lip Filler",
    category: "aesthetics",
    tagline: "Fuller Lips That Still Look Natural",
    description:
      "Beautiful lip enhancement is about proportion and subtlety. I don't aim for big or pouty—I aim for lips that look like a better version of yours. Adding definition to the border, restoring lost volume, and creating balance. Lips lose definition and plumpness with age, and a small amount of filler can make a big difference. Swelling is normal for a few days.",
    benefits: [
      "Fuller, more defined lips that enhance your features",
      "Improved lip border and shape definition",
      "Natural-looking volume without obvious augmentation",
      "Balanced proportions between upper and lower lip",
      "Results last 6–9 months",
      "Can be adjusted at follow-up visits",
    ],
    idealFor: [
      "Naturally thin lips wanting more fullness",
      "Loss of lip definition with aging",
      "Asymmetrical lips",
      "Those seeking subtle, natural-looking enhancement",
    ],
    procedure: {
      duration: "30-45 minutes",
      downtime: "Swelling and tenderness 1-3 days; ice recommended",
      results: "Immediate, settling over 1-2 weeks for final appearance",
      sessions: "Typically 1 treatment; touch-ups every 6-9 months",
    },
    pricing: {
      starting: 500,
      note: "Starting at $500 per syringe · Final pricing determined at consultation",
    },
    faqs: [
      {
        question: "Will my lips look too big?",
        answer:
          "Dr. Shirazi specializes in natural-looking lip enhancement. She starts conservatively and can always add more at a follow-up appointment.",
      },
      {
        question: "Is the procedure painful?",
        answer:
          "We apply topical numbing before injecting, and the filler itself contains lidocaine for comfort. Most patients describe the sensation as mild pressure.",
      },
      {
        question: "Can I get my lips adjusted?",
        answer:
          "Absolutely. If you want to adjust the shape or volume at any time, you can return for a touch-up or adjustment.",
      },
      {
        question: "How soon can I wear lipstick?",
        answer:
          "Wait 24 hours after treatment to allow initial swelling to subside, then you can wear your favorite lipstick as normal.",
      },
      {
        question: "Who is NOT a candidate for lip fillers?",
        answer:
          "You should avoid lip fillers if you are pregnant or breastfeeding, have a history of cold sores or herpes (filler can trigger an outbreak), are on blood thinners, or have a bleeding disorder. Dr. Shirazi screens for these during consultation.",
      },
    ],
    image: "https://images.pexels.com/photos/2661255/pexels-photo-2661255.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/8989963/pexels-photo-8989963.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6543299/pexels-photo-6543299.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    popular: true,
  },

  // SKIN REJUVENATION
  {
    id: "microneedling",
    slug: "microneedling",
    name: "Microneedling",
    category: "skin-rejuvenation",
    tagline: "Trigger Your Skin's Natural Collagen Response",
    description:
      "Microneedling works by creating controlled micro-injuries that trigger your body's natural healing response. Your skin responds by producing new collagen and elastin. It's simple, safe, and works for almost every skin type including darker skin. I typically recommend a series of three treatments spaced four weeks apart. Results appear gradually over 4-6 weeks as collagen remodels.",
    benefits: [
      "Stimulates natural collagen and elastin production",
      "Improves skin texture, tone, and radiance",
      "Minimizes acne scarring and pore size",
      "Reduces fine lines and sun damage",
      "Safe for all skin types and ethnicities",
      "Minimal downtime, rapid recovery",
    ],
    idealFor: [
      "Acne scarring and uneven texture",
      "Fine lines and wrinkles",
      "Large pores and enlarged pore appearance",
      "Dull, tired-looking skin needing refreshment",
    ],
    procedure: {
      duration: "60 minutes",
      downtime: "Mild redness 1-3 days; can apply makeup after 24 hours",
      results: "Progressive improvement over 4-6 weeks",
      sessions: "Series of 3 treatments spaced 4 weeks apart recommended",
    },
    pricing: {
      starting: 500,
      note: "Starting at $500 per session · Series of 3: $1,200",
    },
    faqs: [
      {
        question: "Is microneedling painful?",
        answer:
          "We apply numbing cream before treatment, so you'll feel mild pressure rather than pain. Expect mild soreness for a day or two after.",
      },
      {
        question: "When will I see results?",
        answer:
          "You may notice slight improvement immediately, but the best results appear over 4-6 weeks as collagen remodels.",
      },
      {
        question: "Can microneedling be combined with other treatments?",
        answer:
          "Yes, microneedling works well with serums, PRP, and other treatments. Dr. Shirazi will recommend the best combination for your goals.",
      },
      {
        question: "Is it safe for all skin types?",
        answer:
          "Microneedling is safe for all skin types and ethnicities. It's actually one of the safest rejuvenation treatments for darker skin tones.",
      },
      {
        question: "Who should NOT get microneedling?",
        answer:
          "Avoid microneedling if you are pregnant, have active skin infections (like herpes or bacterial acne), are on isotretinoin (Accutane—wait 6-12 months after finishing), or have very severe active inflammatory acne. Recent chemical peels or laser treatments may also warrant waiting before microneedling.",
      },
    ],
    image: "https://images.pexels.com/photos/4586728/pexels-photo-4586728.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/5240446/pexels-photo-5240446.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3785803/pexels-photo-3785803.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    featured: true,
  },
  {
    id: "prp-facial",
    slug: "prp-facial",
    name: "PRP Facial",
    category: "skin-rejuvenation",
    tagline: "Amplify Collagen with Your Own Growth Factors",
    description:
      "PRP combines microneedling with your own platelet-rich plasma—a concentrate of growth factors from your blood. We draw a small amount, spin it to concentrate the healing platelets, and apply it during microneedling. The platelets penetrate through the micro-channels and amplify collagen production beyond what microneedling alone achieves. Results are natural because they're coming from your own body.",
    benefits: [
      "Uses your own platelet-rich plasma—100% autologous",
      "Amplifies collagen and elastin production",
      "Improves skin texture, tone, and radiance dramatically",
      "Reduces acne scarring and fine lines",
      "Safe for all skin types and ethnicities",
      "Progressive improvement over 4-8 weeks",
      "Results continue improving with series",
    ],
    idealFor: [
      "Natural skin rejuvenation without synthetic products",
      "Patients with aging, dull, or textured skin",
      "Significant acne scarring or uneven tone",
      "Anyone seeking optimal collagen remodeling",
      "Patients who prefer their body's own healing factors",
    ],
    procedure: {
      duration: "60-75 minutes",
      downtime: "Redness and mild swelling 1-3 days",
      results: "Progressive over 4-8 weeks; optimal at 8-12 weeks",
      sessions: "Series of 3-4 treatments spaced 4-6 weeks apart",
    },
    pricing: {
      starting: 750,
      note: "Starting at $750 per session · Series of 3: $2,000",
    },
    faqs: [
      {
        question: "Is the PRP Facial the same as the Vampire Facial?",
        answer:
          "Yes, the PRP Facial is commonly known as the Vampire Facial. It combines your own platelet-rich plasma with microneedling for natural skin rejuvenation.",
      },
      {
        question: "How many sessions do I need?",
        answer:
          "Most patients benefit from 3-4 sessions spaced 4-6 weeks apart for optimal results. Maintenance treatments every 6-12 months sustain the glow.",
      },
      {
        question: "Is it safe since it uses my own blood?",
        answer:
          "PRP has a favorable safety profile because it's derived from your own blood, which keeps allergic reaction risk low. That said, it's still an injection-based procedure — risks include bruising, redness, swelling, and rarely infection. We maintain strict sterile protocols to minimize risk.",
      },
      {
        question: "When will I see results?",
        answer:
          "Initial glow appears within days. Collagen remodeling produces progressive improvement over 4-8 weeks, with optimal results after a series.",
      },
      {
        question: "Who is NOT a candidate for PRP Facial?",
        answer:
          "Avoid PRP if you are pregnant, have active skin infections, are on blood thinners (Coumadin, heparin, warfarin), have a bleeding disorder, or have low platelet counts. Active inflammatory acne or recent isotretinoin use also warrants waiting. Dr. Shirazi reviews your health history carefully.",
      },
    ],
    image: "https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3738348/pexels-photo-3738348.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3985311/pexels-photo-3985311.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    popular: true,
  },
  {
    id: "chemical-peels",
    slug: "chemical-peels",
    name: "Chemical Peels",
    category: "skin-rejuvenation",
    tagline: "Remove Damaged Layers to Reveal Fresh Skin",
    description:
      "Chemical peels use carefully formulated acids to remove damaged outer layers of skin. Depending on depth, they can address sun damage, pigmentation, fine lines, and texture. I customize the strength based on your skin type and concerns. Light peels cause subtle flaking and minimal downtime. Deeper peels cause more obvious peeling but better results for serious concerns. All peels stimulate collagen remodeling underneath.",
    benefits: [
      "Fades sun damage, age spots, and hyperpigmentation",
      "Improves skin texture and tone",
      "Reduces fine lines and wrinkles",
      "Stimulates collagen production",
      "Customizable depth for your skin and goals",
      "Results visible at 1-2 weeks",
    ],
    idealFor: [
      "Sun damage and age spots",
      "Melasma and hyperpigmentation",
      "Dull, uneven skin tone",
      "Fine lines and surface texture",
    ],
    procedure: {
      duration: "30-45 minutes",
      downtime: "1-7 days depending on peel depth",
      results: "Visible at 1-2 weeks; improvements over 6 weeks",
      sessions: "Series of 3-6 peels typically recommended",
    },
    pricing: {
      starting: 300,
      note: "Starting at $300 per peel · Series pricing available",
    },
    faqs: [
      {
        question: "Will my skin visibly peel?",
        answer:
          "Light peels may cause subtle flaking, while deeper peels cause noticeable peeling. Dr. Shirazi will explain what to expect based on your peel type.",
      },
      {
        question: "Which peel is right for me?",
        answer:
          "It depends on your skin type, concerns, and downtime tolerance. Dr. Shirazi customizes the treatment to match your needs.",
      },
      {
        question: "Can I wear makeup during peeling?",
        answer:
          "After healing (usually 2-3 days), yes you can wear makeup. Avoid makeup during active peeling to let the skin breathe.",
      },
      {
        question: "Are results permanent?",
        answer:
          "The results are excellent, but sun exposure and aging continue. Maintenance peels every 6 months help sustain the benefits.",
      },
      {
        question: "Who should NOT get a chemical peel?",
        answer:
          "Avoid chemical peels if you are pregnant, have active skin infections or cold sores, are on isotretinoin (Accutane—wait 6-12 months), have very sensitive or reactive skin, or have had recent laser or resurfacing treatments. Darker skin tones require careful peel selection to minimize risk of post-inflammatory hyperpigmentation. Dr. Shirazi customizes accordingly.",
      },
    ],
    image: "https://images.pexels.com/photos/6948180/pexels-photo-6948180.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/8140902/pexels-photo-8140902.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3861592/pexels-photo-3861592.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "laser-resurfacing",
    slug: "laser-resurfacing",
    name: "Laser Resurfacing",
    category: "skin-rejuvenation",
    tagline: "Dramatic Skin Transformation with Fractional Laser",
    description:
      "Fractional laser resurfacing is the most aggressive skin rejuvenation treatment I offer. It uses laser energy to create thousands of tiny treatment zones that trigger deep collagen remodeling. This approach is excellent for significant scarring, severe sun damage, and dramatic texture issues. Recovery takes 5-7 days of visible peeling, but results are substantial and continue improving for 3-6 months.",
    benefits: [
      "Dramatically improves skin texture and smoothness",
      "Minimizes acne scars and pitted scarring",
      "Fades sun damage and hyperpigmentation",
      "Reduces fine lines and wrinkles",
      "Stimulates robust collagen remodeling",
      "Evens skin tone and reduces discoloration",
      "Results continue improving for months",
    ],
    idealFor: [
      "Significant sun damage or photoaging",
      "Acne scarring or pitted texture",
      "Deep wrinkles and texture concerns",
      "Hyperpigmentation and uneven tone",
      "Patients willing to invest recovery time",
    ],
    procedure: {
      duration: "30-60 minutes",
      downtime: "5-7 days visible peeling; full healing 2-4 weeks",
      results: "Progressive over 2-6 months",
      sessions: "1-3 treatments depending on concerns",
    },
    pricing: {
      starting: 1200,
      note: "Starting at $1,200 · Final pricing determined at consultation",
    },
    faqs: [
      {
        question: "How long is the recovery?",
        answer:
          "Expect 5-7 days of redness and peeling. Most patients return to work within a week. Full healing takes 2-4 weeks depending on treatment intensity.",
      },
      {
        question: "How many treatments do I need?",
        answer:
          "Many patients see significant improvement after one session. A series of 2-3 treatments may be recommended for deeper concerns like acne scarring.",
      },
      {
        question: "Is laser resurfacing painful?",
        answer:
          "With topical numbing, most patients describe the sensation as warm tingling. Comfort measures are prioritized throughout the procedure.",
      },
      {
        question: "When do results appear?",
        answer:
          "Once initial redness fades (1-2 weeks), you will notice smoother, fresher skin. Collagen remodeling continues improving results for 2-6 months.",
      },
      {
        question: "Who should NOT get laser resurfacing?",
        answer:
          "Avoid laser resurfacing if you are pregnant, have active skin infections, are on isotretinoin (Accutane—wait 6-12 months after finishing), or have a severe keloid tendency. Recent chemical peels or intense resurfacing also warrant waiting 4-6 weeks. Darker skin tones carry higher risk of pigmentation changes—Dr. Shirazi uses customized settings and discusses expectations.",
      },
    ],
    image: "https://images.pexels.com/photos/30359546/pexels-photo-30359546.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/5912194/pexels-photo-5912194.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/7607777/pexels-photo-7607777.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    featured: true,
  },

  // REGENERATIVE MEDICINE
  {
    id: "prp-therapy",
    slug: "prp-therapy",
    name: "PRP Therapy",
    category: "regenerative",
    tagline: "Harness Your Blood's Growth Factors",
    description:
      "PRP therapy uses platelet-rich plasma derived from your own blood. We draw a small amount, spin it to concentrate the platelets and their growth factors, then inject it into areas needing rejuvenation. It works for skin quality, under-eye improvement, and even hair thinning. Results are typically gradual over 4-6 weeks. This is a natural, autologous approach—your body's own healing factors doing the work.",
    benefits: [
      "100% autologous—made from your own blood",
      "Contains natural growth factors and healing proteins",
      "Stimulates collagen and elastin production",
      "Improves skin quality, tone, and radiance",
      "Enhances results of other treatments",
      "Can address under-eye hollows and dark circles",
      "Safe with minimal allergic reaction risk",
    ],
    idealFor: [
      "Facial rejuvenation and overall skin quality",
      "Under-eye hollows and dark circle improvement",
      "Post-procedure healing and optimization",
      "Those preferring natural, autologous treatments",
      "Early-stage hair thinning",
    ],
    procedure: {
      duration: "60 minutes",
      downtime: "Mild redness and swelling 1-2 days",
      results: "Progressive improvement over 4-6 weeks",
      sessions: "Series of 3 treatments spaced 4 weeks apart recommended",
    },
    pricing: {
      starting: 750,
      note: "Starting at $750 per session · Series of 3: $2,000",
    },
    faqs: [
      {
        question: "What's the difference between PRP and PRF?",
        answer:
          "PRF is the next generation—it has higher platelet concentration and releases growth factors over a longer period for enhanced results.",
      },
      {
        question: "Is it really my own blood?",
        answer:
          "Yes! We draw a small amount of blood, concentrate the platelets and growth factors, and use it immediately for your treatment.",
      },
      {
        question: "Are there any risks?",
        answer:
          "Since we use your own blood, there's no risk of allergic reaction. Mild bruising or swelling is possible but typically resolves within days.",
      },
      {
        question: "Can PRP help with hair loss?",
        answer:
          "Yes. PRP growth factors can stimulate dormant hair follicles and extend the growth phase. It's most effective for early-stage hair thinning.",
      },
      {
        question: "Who is NOT a candidate for PRP Therapy?",
        answer:
          "Avoid PRP if you are pregnant, on blood thinners (Coumadin, warfarin, heparin), have a bleeding disorder, or have low platelet counts. Very low hemoglobin or platelet dysfunction also warrant avoiding this treatment. Dr. Shirazi reviews your lab work and medications.",
      },
    ],
    image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    featured: true,
  },
  {
    id: "o-shot",
    slug: "o-shot",
    name: "O-Shot",
    category: "regenerative",
    tagline: "Women's Intimate Wellness Regeneration",
    description:
      "The O-Shot uses PRP to rejuvenate intimate tissue and enhance sensation. It's administered in our private consultation room. The procedure is quick and discreet. Results are gradual—patients typically notice improvement in sensitivity and satisfaction over 4-8 weeks. This is regenerative medicine applied to women's health.",
    benefits: [
      "Uses PRP from your own blood",
      "May enhance sensitivity and satisfaction",
      "Improves vaginal tissue health",
      "Natural, autologous approach",
      "No downtime—resume normal activities immediately",
      "Results last 12-18 months",
    ],
    idealFor: [
      "Women seeking intimate wellness enhancement",
      "Those with decreased sensitivity or satisfaction",
      "Women experiencing age-related changes",
      "Anyone preferring natural, non-surgical options",
    ],
    procedure: {
      duration: "30-45 minutes",
      downtime: "None; avoid strenuous exercise 48 hours",
      results: "Progressive improvement over 4-8 weeks",
      sessions: "Single treatment; annual maintenance recommended",
    },
    pricing: {
      starting: 1500,
      note: "Per treatment · Repeat annually for optimal benefits",
    },
    faqs: [
      {
        question: "Is this treatment discreet?",
        answer:
          "Absolutely. We prioritize your privacy and comfort. The procedure is performed in a private setting by Dr. Shirazi.",
      },
      {
        question: "How long do results last?",
        answer:
          "Most patients enjoy improved results for 12-18 months. Annual treatments help maintain optimal benefits.",
      },
      {
        question: "Is there downtime?",
        answer:
          "No downtime. You can return to normal activities immediately, though we recommend avoiding strenuous exercise and intercourse for 48 hours.",
      },
      {
        question: "How is this different from other treatments?",
        answer:
          "The O-Shot uses your body's own growth factors to rejuvenate tissue naturally, without implants or synthetic materials.",
      },
      {
        question: "Who is NOT a candidate for the O-Shot?",
        answer:
          "Avoid the O-Shot if you are pregnant, on blood thinners, have a bleeding disorder, or are currently menstruating (we schedule 24-48 hours after cycle ends). Pelvic infections or active inflammatory conditions also warrant waiting. Dr. Shirazi screens for these during consultation.",
      },
    ],
    image: "https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "hair-restoration",
    slug: "hair-restoration",
    name: "Hair Restoration",
    category: "regenerative",
    tagline: "Support Hair Regrowth with Regenerative Therapy",
    description:
      "Hair loss is multifactorial—genetics, androgens, nutrition, inflammation all play a role. My approach combines scalp regenerative therapy (PRF) with topical support. PRF delivers growth factors to wake up dormant hair follicles and extend their growth phase. This is most effective for early to moderate thinning. It won't work for completely bald areas, and genetics matter. Results take 3-6 months because hair growth is a slow process.",
    benefits: [
      "Uses your own PRF—100% autologous",
      "Stimulates dormant hair follicles",
      "May extend hair growth phase",
      "Supports overall scalp health",
      "Non-surgical approach",
      "Can be combined with topical treatments",
      "Progressive improvement over months",
    ],
    idealFor: [
      "Early to moderate hair thinning",
      "Those preferring non-surgical restoration",
      "Men and women wanting to maintain hair",
      "Patients seeking regenerative approach to hair loss",
    ],
    procedure: {
      duration: "45-60 minutes per session",
      downtime: "None; minimal scalp discomfort",
      results: "Progressive hair regrowth over 3-6 months",
      sessions: "6 sessions recommended; spaced 1-2 months apart initially",
    },
    pricing: {
      starting: 850,
      note: "Starting at $850 per session · 6-session series: $4,500",
    },
    faqs: [
      {
        question: "How does PRF therapy work for hair?",
        answer:
          "PRF delivers growth factors that wake up dormant hair follicles and extend their growth phase, stimulating new hair production using your own blood components.",
      },
      {
        question: "Will this work for me?",
        answer:
          "PRF therapy is most effective for early to moderate hair thinning. During your consultation, Dr. Shirazi can assess your hair loss and discuss realistic expectations.",
      },
      {
        question: "When will I see results?",
        answer:
          "Hair growth is a gradual process. Most patients begin seeing new hair growth at 3-4 months, with optimal results at 6 months.",
      },
      {
        question: "Is this permanent?",
        answer:
          "Results can be long-lasting with maintenance treatments. Hair typically requires ongoing support to maintain regrowth.",
      },
      {
        question: "Who is NOT a candidate for hair restoration?",
        answer:
          "Avoid this treatment if you are on blood thinners, have a bleeding disorder, are pregnant, or have an active scalp infection. Very low platelet counts also warrant avoiding PRF. This therapy works best for early to moderate thinning—if you're completely bald, results will be limited. Dr. Shirazi assesses your candidacy.",
      },
    ],
    image: "https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    featured: true,
    popular: true,
  },

  // MEN'S HEALTH
  {
    id: "p-shot",
    slug: "p-shot",
    name: "P-Shot",
    category: "mens-health",
    tagline: "Regenerative Approach to Male Sexual Wellness",
    description:
      "The P-Shot (Priapus Shot) uses PRP to support male sexual function and sensation. It's a discreet, office-based procedure done in a private setting. Here's my honest take: research is emerging but not conclusive. Some men report improvement in sensation or function over 4-8 weeks; others notice minimal change. This is investigational therapy, not a proven ED treatment. If you have significant erectile dysfunction, a urology evaluation may be appropriate first.",
    benefits: [
      "Uses PRP from your own blood",
      "Minimally invasive, office-based procedure",
      "No downtime or medications involved",
      "Completely discreet and confidential",
      "Part of a broader men's wellness conversation",
      "May support natural sexual function improvement",
    ],
    idealFor: [
      "Men exploring regenerative options for sexual wellness",
      "Those interested in non-pharmaceutical approaches",
      "Patients who value honest, evidence-based guidance",
      "Men with realistic expectations",
    ],
    procedure: {
      duration: "30-45 minutes",
      downtime: "None; can resume activities immediately",
      results: "Progressive improvement over 4-8 weeks if present",
      sessions: "Single treatment; annual repeat considered",
    },
    pricing: {
      starting: 1700,
      note: "Per treatment · This is investigational therapy",
    },
    faqs: [
      {
        question: "Is the P-Shot FDA-approved for ED?",
        answer:
          "No. PRP for sexual wellness is off-label and investigational. The American Urological Association classifies PRP for ED as experimental. Dr. Shirazi will walk you through the current evidence and realistic expectations.",
      },
      {
        question: "What results can I expect?",
        answer:
          "Results vary. Some men report improved sensation over several months; others notice minimal change. This is not a guaranteed ED solution. Honest expectation-setting is part of our consultation.",
      },
      {
        question: "Should I see a urologist first?",
        answer:
          "If you have significant erectile dysfunction, a urology evaluation may be appropriate. ED can have underlying vascular, hormonal, or neurological causes that deserve proper diagnosis.",
      },
    ],
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },

  // WELLNESS & LONGEVITY
  {
    id: "iv-therapy",
    slug: "iv-therapy",
    name: "IV Therapy",
    category: "wellness",
    tagline: "Direct Nutrient Delivery When Oral Isn't Enough",
    description:
      "IV therapy delivers vitamins, minerals, and hydration directly into your bloodstream. It's useful for documented deficiencies, dehydration, or post-athletic recovery when oral supplementation isn't working. I'm honest: healthy people with good nutrition and digestion probably don't need it. But for someone with malabsorption, recent illness, or specific deficiency markers, it can be powerful.",
    benefits: [
      "Bypasses digestive system for direct IV delivery",
      "Addresses documented nutrient deficiencies",
      "Supports recovery from illness or dehydration",
      "Useful after intense athletic exertion",
      "Customized formulations based on your needs",
      "Administered in comfortable medical setting",
    ],
    idealFor: [
      "Documented lab-confirmed nutrient deficiencies",
      "Recovery from illness or significant dehydration",
      "Post-athletic performance recovery",
      "Those with documented malabsorption",
    ],
    procedure: {
      duration: "30-60 minutes depending on protocol",
      downtime: "None; mild vein irritation possible",
      results: "Immediate to gradual over hours or days",
      sessions: "As-needed or periodic maintenance based on need",
    },
    pricing: {
      starting: 150,
      note: "Starting at $150 · Customized protocols vary",
    },
    faqs: [
      {
        question: "Is IV therapy safe?",
        answer:
          "When administered by a physician in a medical setting, IV therapy is safe. Dr. Shirazi ensures proper hygiene and appropriate formulations.",
      },
      {
        question: "Do I need to be deficient to benefit?",
        answer:
          "IV therapy works best when addressing a specific need — deficiency, dehydration, or recovery. For healthy individuals with good nutrition, benefits are less clear.",
      },
      {
        question: "How often should I get IV therapy?",
        answer:
          "This depends on your needs. Dr. Shirazi will recommend a schedule based on your health goals and lab work.",
      },
      {
        question: "What formulations do you offer?",
        answer:
          "We offer customized IV protocols including nutrient cocktails, hydration therapy, and recovery formulations. Dr. Shirazi discusses the best option for you.",
      },
    ],
    image: "https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3759660/pexels-photo-3759660.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "hormone-optimization",
    slug: "hormone-optimization",
    name: "Hormone Optimization",
    category: "wellness",
    tagline: "Balance for Vibrant Health",
    description:
      "Precision hormone management for women and men. Optimize estrogen, progesterone, thyroid, and adrenal function for vitality and wellness.",
    comingSoon: true,
    benefits: [
      "Comprehensive lab testing and evaluation",
      "Evidence-based hormone assessment",
      "FDA-approved treatment options",
      "Physician-supervised ongoing monitoring",
      "Individualized treatment protocols",
      "Integration with other Healinque services",
    ],
    idealFor: [
      "Women experiencing perimenopause or menopause",
      "Men with documented low testosterone",
      "Fatigue and low energy levels",
      "Those wanting evidence-based hormone management",
    ],
    procedure: {
      duration: "Initial consultation 45-60 minutes",
      downtime: "None",
      results: "Gradual improvement over 2-4 weeks",
      sessions: "Ongoing management and follow-ups",
    },
    pricing: {
      starting: 200,
      note: "starting price (coming soon)",
    },
    faqs: [
      {
        question: "What labs do you order?",
        answer:
          "Lab testing depends on your symptoms and goals, typically including hormone levels, thyroid function, and metabolic markers. Dr. Shirazi reviews your specific needs.",
      },
      {
        question: "Are bioidentical hormones better?",
        answer:
          "Bioidentical hormones are molecularly identical to your body's own hormones. FDA-approved bioidentical options exist for many patients.",
      },
      {
        question: "What about compounded hormones?",
        answer:
          "We distinguish between FDA-approved bioidentical hormones and compounded preparations. Dr. Shirazi discusses the evidence and regulatory status of each option.",
      },
      {
        question: "How long until I feel better?",
        answer:
          "Many patients notice improvements in energy and mood within 1-2 weeks. Optimal results typically appear within 4-6 weeks as hormone levels stabilize.",
      },
    ],
    image: "https://images.pexels.com/photos/7592460/pexels-photo-7592460.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/6975475/pexels-photo-6975475.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5714341/pexels-photo-5714341.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "glp1-weight-loss",
    slug: "glp1-weight-loss",
    name: "GLP-1 Weight Loss",
    category: "wellness",
    tagline: "Metabolic Transformation Program",
    description:
      "Advanced GLP-1 protocols combined with nutrition and lifestyle optimization for sustainable, transformative weight loss results. Not all patients are candidates—I screen for contraindications including personal or family history of medullary thyroid carcinoma, MEN-2 syndrome, or active pregnancy. GLP-1s are powerful tools, but they work best as part of a comprehensive medical weight management plan with ongoing support.",
    comingSoon: true,
    benefits: [
      "FDA-approved medications with proven efficacy",
      "Comprehensive lab work and health evaluation",
      "Nutrition guidance and lifestyle coaching",
      "Physician-supervised throughout treatment",
      "Authorized pharmacy supply chains",
      "Regular monitoring and dose adjustments",
    ],
    idealFor: [
      "Those with BMI qualifying for GLP-1 therapy",
      "People with weight-related health conditions",
      "Those seeking medical supervision and support",
      "Patients committed to lifestyle changes",
    ],
    procedure: {
      duration: "Monthly check-ins and ongoing support",
      downtime: "None",
      results: "Gradual weight loss over weeks to months",
      sessions: "Ongoing program with regular monitoring",
    },
    pricing: {
      starting: 500,
      note: "starting price (coming soon)",
    },
    faqs: [
      {
        question: "How much weight can I expect to lose?",
        answer:
          "Clinical studies show average weight loss of 15-20% of body weight. Results vary based on individual factors and commitment to lifestyle changes.",
      },
      {
        question: "Do you prescribe compounded GLP-1s?",
        answer:
          "No. The FDA resolved the semaglutide shortage in early 2025 and enforcement discretion for compounded versions has ended. We prescribe FDA-approved brand-name medications through authorized pharmacies.",
      },
      {
        question: "What are the side effects?",
        answer:
          "Common side effects include mild nausea, which typically improves over time. Dr. Shirazi starts with conservative doses and increases gradually.",
      },
      {
        question: "Why work with a physician?",
        answer:
          "Medical supervision ensures safety, proper dosing adjustments, health monitoring, and integrated care. This is safer than obtaining medications without professional oversight.",
      },
      {
        question: "Who is NOT a candidate for GLP-1?",
        answer:
          "You should not use GLP-1s if you have a personal or family history of medullary thyroid carcinoma, MEN-2 syndrome, or if you are pregnant. People with a history of pancreatitis or gallbladder disease need special evaluation. Dr. Shirazi screens carefully during consultation.",
      },
      {
        question: "What about side effects?",
        answer:
          "Nausea is common, especially early in treatment, but usually improves with dose titration. Rare but serious side effects include pancreatitis, gallbladder issues, and gallstones. I monitor for these and adjust your plan accordingly.",
      },
      {
        question: "What happens when I stop GLP-1?",
        answer:
          "This is honest: rebound weight gain is common. Most patients regain approximately two-thirds of lost weight within a year if they stop without ongoing lifestyle support. This is why I emphasize that GLP-1 is a tool—not a magic cure. The goal is to use it while building sustainable habits so you can maintain results long-term. Many patients benefit from ongoing maintenance dosing or transition to a maintenance program.",
      },
    ],
    image: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3985339/pexels-photo-3985339.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "regenerative-consultation",
    slug: "regenerative-consultation",
    name: "Regenerative Consultation",
    category: "regenerative",
    tagline: "Evidence-Based Regenerative Guidance",
    description:
      "Honest, physician-led evaluation of regenerative medicine options — focused on therapies with established safety profiles like PRP and PRF.",
    benefits: [
      "Honest, evidence-based evaluation of regenerative options",
      "Focus on therapies with established safety profiles (PRP, PRF)",
      "Transparent discussion of FDA approval status",
      "Physician-led assessment — not a sales pitch",
      "Personalized recommendations based on your health and goals",
      "Coordination with other Healinque treatments",
    ],
    idealFor: [
      "Patients curious about regenerative medicine",
      "Those with joint, skin, or hair concerns exploring non-surgical options",
      "Anyone wanting a physician's honest perspective on regenerative treatments",
      "Patients who value transparency about evidence and risks",
    ],
    procedure: {
      duration: "60 minutes",
      downtime: "None",
      results: "Customized treatment recommendations",
      sessions: "Initial consultation (treatment follows if appropriate)",
    },
    pricing: {
      starting: 100,
      note: "consultation credited toward treatment",
    },
    faqs: [
      {
        question: "Do you offer stem cell therapy?",
        answer:
          "Very few stem cell products are FDA-approved, and none for anti-aging or skin rejuvenation in a med spa setting. We focus on regenerative therapies with stronger regulatory footing, like PRP and PRF.",
      },
      {
        question: "What about exosome therapy?",
        answer:
          "There are currently no FDA-approved exosome products for cosmetic or regenerative use. We do not administer injectable exosomes. We may use topical growth factor serums as a complement to microneedling.",
      },
      {
        question: "What's the difference between PRP and PRF?",
        answer:
          "Both use your own blood. PRP concentrates platelets with an anticoagulant. PRF is processed without additives, creating a fibrin matrix that releases growth factors more slowly over 10–14 days.",
      },
    ],
    image: "https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/7088531/pexels-photo-7088531.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3985299/pexels-photo-3985299.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "prf-therapy",
    slug: "prf-therapy",
    name: "PRF Therapy",
    category: "regenerative",
    tagline: "Pure Fibrin Matrix from Your Own Blood",
    description:
      "PRF (Platelet-Rich Fibrin) is the next evolution of PRP. We draw blood, spin it without additives, and create a fibrin clot that naturally releases growth factors over 10-14 days. This slow release amplifies collagen remodeling. Many practitioners prefer PRF for skin and under-eye because the sustained growth factor release is superior to PRP's immediate release. It's 100% autologous—nothing synthetic.",
    benefits: [
      "100% autologous—made from your own blood",
      "No synthetic additives or anticoagulants",
      "Gradual growth factor release over 10-14 days",
      "Enhanced collagen production and tissue quality",
      "Works beautifully under eyes with proper technique",
      "Complements microneedling, lasers, and injections",
      "Progressive results over 4-6 weeks",
    ],
    idealFor: [
      "Natural skin rejuvenation without synthetics",
      "Under-eye hollows and dark circles",
      "Enhancing microneedling and laser results",
      "Hair thinning with autologous preference",
      "Patients wanting extended growth factor support",
    ],
    procedure: {
      duration: "60 minutes",
      downtime: "Mild redness and swelling 1-2 days",
      results: "Progressive improvement over 4-6 weeks",
      sessions: "Series of 3-4 treatments spaced 4-6 weeks apart",
    },
    pricing: {
      starting: 750,
      note: "Starting at $750 per session · Series of 3-4 available",
    },
    faqs: [
      {
        question: "How is PRF different from PRP?",
        answer:
          "Both come from your blood. PRF is processed without additives at a lower speed, creating a fibrin clot that releases growth factors more slowly — over about 10–14 days. Some practitioners prefer PRF for skin and under-eye applications.",
      },
      {
        question: "Can PRF help with dark circles?",
        answer:
          "PRF is a key component of our under-eye rejuvenation protocol. It can improve skin quality and reduce the appearance of under-eye darkness caused by thin skin and poor circulation. Results vary — Dr. Shirazi evaluates your specific situation.",
      },
      {
        question: "How many treatments do I need?",
        answer:
          "Most patients benefit from 3–4 treatments spaced 4–6 weeks apart. Results build with each session. Maintenance every 6–12 months sustains improvement.",
      },
      {
        question: "Who is NOT a candidate for PRF?",
        answer:
          "Avoid PRF if you are on blood thinners, have a bleeding disorder, or have low platelet counts. Pregnancy, active skin infections, and very low hemoglobin also warrant avoiding treatment. Dr. Shirazi reviews your blood work and medications.",
      },
    ],
    image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "peptide-therapy",
    slug: "peptide-therapy",
    name: "Peptide Therapy",
    category: "wellness",
    tagline: "Molecular-Level Optimization",
    description:
      "Physician-supervised peptide protocols limited to FDA-approved medications and clinically supported compounds. Honest guidance on what works.",
    benefits: [
      "Access to FDA-approved peptide medications",
      "Transparent about evidence vs. marketing",
      "No prohibited Category 2 peptides prescribed",
      "Individualized protocols based on lab work",
      "Regular monitoring for safety and efficacy",
      "Integrates with other Healinque services",
    ],
    idealFor: [
      "Patients interested in peptide therapy",
      "Those with specific health goals supported by peptide therapy",
      "Anyone wanting evidence-based peptide protocols",
      "Patients who value physician oversight",
    ],
    procedure: {
      duration: "Initial consultation 45-60 minutes",
      downtime: "None",
      results: "Gradual improvement over 4-12 weeks",
      sessions: "Ongoing monitoring and adjustments",
    },
    pricing: {
      starting: 300,
      note: "starting price",
    },
    faqs: [
      {
        question: "What happened to BPC-157?",
        answer:
          "Between 2023 and 2024, the FDA moved 17–19 peptides to its Category 2 list — including BPC-157, TB-500, and AOD-9604. These are no longer permitted for compounding. We follow current FDA guidance.",
      },
      {
        question: "Which peptides do you offer?",
        answer:
          "We focus on FDA-approved peptide medications. GLP-1 agonists for weight management are the most common. Dr. Shirazi discusses which options may be relevant during your consultation.",
      },
      {
        question: "Are peptides safe?",
        answer:
          "FDA-approved peptide medications have been through rigorous safety testing. Unregulated peptides sold online carry real risks — FDA testing found up to 40% contained dosage errors. Physician oversight matters.",
      },
    ],
    image: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "pdo-thread-lift",
    slug: "pdo-thread-lift",
    name: "PDO Thread Lift",
    category: "aesthetics",
    tagline: "Lift and Tighten Without Surgical Recovery",
    description:
      "PDO threads are biocompatible sutures placed under the skin to lift sagging tissue and stimulate collagen. The lift is immediate; collagen remodeling continues over 6-8 weeks for enhanced tightness. Threads dissolve over 4-6 months but the collagen they triggered lasts longer. This is non-surgical but still a procedure—realistic about swelling and recovery is important.",
    benefits: [
      "Immediate lifting of sagging tissue",
      "Stimulates natural collagen production",
      "Non-surgical with faster recovery than facelift",
      "Biocompatible, absorbable PDO sutures",
      "Results improve over 6-8 weeks",
      "Effects last 12-18 months",
      "Can be combined with injectables or laser",
    ],
    idealFor: [
      "Mild to moderate facial laxity",
      "Sagging cheeks or jawline",
      "Brow lift without surgery",
      "Those seeking non-surgical lifting",
    ],
    procedure: {
      duration: "45-90 minutes",
      downtime: "3-7 days swelling and tenderness; ice helps",
      results: "Immediate; optimal results at 6-8 weeks",
      sessions: "Single treatment; repeat every 12-18 months",
    },
    pricing: {
      starting: 800,
      note: "Starting at $800 · Final pricing determined at consultation",
    },
    faqs: [
      {
        question: "Is a thread lift as good as a facelift?",
        answer:
          "No. Thread lifts address mild to moderate laxity with subtler results. For significant sagging, a surgical consultation may be more appropriate. Threads work best for patients who want visible but modest improvement without surgical recovery.",
      },
      {
        question: "Is there pain?",
        answer:
          "We use numbing to make the procedure comfortable. Some patients feel gentle pulling or pressure. Mild soreness is normal for a few days after.",
      },
      {
        question: "When can I resume normal activities?",
        answer:
          "Most patients return to normal activities within 3-7 days. Avoid strenuous exercise and facial manipulation for 1-2 weeks.",
      },
      {
        question: "Will the threads be visible?",
        answer:
          "No. The threads are placed beneath the skin and dissolve over time. They're not visible and don't feel like foreign objects.",
      },
    ],
    image: "https://images.pexels.com/photos/2661255/pexels-photo-2661255.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3985339/pexels-photo-3985339.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "kybella",
    slug: "kybella",
    name: "Kybella",
    category: "aesthetics",
    tagline: "Permanent Reduction of Submental Fat",
    description:
      "Kybella is deoxycholic acid—a naturally occurring substance that destroys fat cells. Injected under the chin, it permanently reduces submental fullness. The swelling is significant (the 'bullfrog effect'), but it settles in 3-10 days. Most people need 2-4 treatments spaced four weeks apart. Once destroyed, those fat cells don't return—though new ones can form with weight gain.",
    benefits: [
      "Permanently destroys submental fat cells",
      "Non-invasive, in-office procedure",
      "FDA-approved and well-studied",
      "Results improve progressively over sessions",
      "Alternative to liposuction or surgical neck lift",
      "Restores clear jaw and neckline definition",
      "Results are permanent",
    ],
    idealFor: [
      "Double chin or submental fullness",
      "Those seeking non-surgical alternatives",
      "People wanting permanent fat reduction",
      "Improving jawline and neck definition",
    ],
    procedure: {
      duration: "15-20 minutes",
      downtime: "3-10 days significant swelling; plan accordingly",
      results: "Progressive improvement over sessions",
      sessions: "Series of 2-6 treatments spaced 4 weeks apart",
    },
    pricing: {
      starting: 600,
      note: "Starting at $600 per session · Final pricing varies",
    },
    faqs: [
      {
        question: "What are the serious risks?",
        answer:
          "Kybella's FDA labeling includes marginal mandibular nerve injury (uneven smile or difficulty swallowing), injection-site alopecia, and skin ulceration. These are uncommon but important to understand. Dr. Shirazi uses precise anatomical mapping to minimize risk.",
      },
      {
        question: "How much swelling should I expect?",
        answer:
          "Swelling is significant (the 'bullfrog effect') and typically peaks at 24-48 hours, lasting 3-10 days. We provide detailed pre- and post-care instructions to manage swelling.",
      },
      {
        question: "How many treatments will I need?",
        answer:
          "Most patients need 2-4 treatments spaced 4 weeks apart. Your needs depend on how much fat needs treatment.",
      },
      {
        question: "Are results permanent?",
        answer:
          "Yes. Once the fat cells are destroyed, they don't return. However, weight gain can create new fat cells.",
      },
    ],
    image: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3985339/pexels-photo-3985339.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "testosterone-optimization",
    slug: "testosterone-optimization",
    name: "Testosterone Optimization",
    category: "mens-health",
    tagline: "Evidence-Based Hormone Management for Men",
    description:
      "Low testosterone affects energy, strength, sexual function, and mood. I evaluate comprehensively—not just testosterone level, but also FSH, LH, estradiol, prolactin. If treatment is appropriate, options include injections, gels, or patches. This requires ongoing monitoring—regular labs, vitals, screening. It's not 'quick fix' medicine—it's genuine hormone management.",
    benefits: [
      "Comprehensive hormone evaluation and lab testing",
      "Personalized treatment protocols",
      "Improved energy, strength, and vitality",
      "Enhanced sexual function and desire",
      "Physician-supervised ongoing monitoring",
      "Evidence-based, not marketing-driven approach",
      "Regular safety and efficacy monitoring",
    ],
    idealFor: [
      "Men with documented low testosterone",
      "Those experiencing fatigue and low energy",
      "Men with sexual dysfunction",
      "Patients seeking legitimate medical supervision",
    ],
    procedure: {
      duration: "Initial consultation 45-60 minutes",
      downtime: "None",
      results: "Gradual improvement over 2-4 weeks",
      sessions: "Ongoing management with regular monitoring",
    },
    pricing: {
      starting: 300,
      note: "Starting price; varies with treatment method",
    },
    faqs: [
      {
        question: "How is low testosterone diagnosed?",
        answer:
          "Through comprehensive blood work including total and free testosterone levels. Dr. Shirazi evaluates symptoms alongside lab results to determine if treatment is appropriate.",
      },
      {
        question: "What treatment options are available?",
        answer:
          "Options include testosterone replacement therapy through injections, gels, or patches, depending on your preference and medical profile. Dr. Shirazi discusses all options during consultation.",
      },
      {
        question: "Is testosterone therapy safe?",
        answer:
          "When properly monitored by a physician with appropriate lab work and screening, testosterone replacement therapy can be safe. We discuss risks and benefits thoroughly.",
      },
      {
        question: "Who is NOT a candidate for testosterone therapy?",
        answer:
          "Men with a history of prostate cancer, breast cancer, or untreated sleep apnea should NOT use testosterone replacement. Men with polycythemia, uncontrolled high blood pressure, or severe heart disease also need to avoid it. Comprehensive screening ensures safety before starting therapy.",
      },
    ],
    image: "https://images.pexels.com/photos/18935826/pexels-photo-18935826.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/27926640/pexels-photo-27926640.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/17782869/pexels-photo-17782869.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    popular: true,
  },
  // NEW NEUROMODULATORS
  {
    id: "daxxify",
    slug: "daxxify",
    name: "Daxxify",
    category: "aesthetics",
    tagline: "Extended-Duration Neuromodulation (6-9 Months)",
    description:
      "Daxxify is the newest FDA-approved neuromodulator. It lasts significantly longer than Botox—6 to 9 months for many patients, versus 3 to 4 months. That means fewer office visits per year. The results look identical to Botox: smooth, natural, expressive. The difference is longevity. For busy professionals or anyone tired of quarterly treatments, Daxxify is worth considering.",
    benefits: [
      "Lasts 6-9 months vs. 3-4 months for Botox",
      "Fewer treatments per year (about 2 instead of 4)",
      "Same smooth, natural results as Botox",
      "FDA-approved with strong clinical data",
      "Excellent for preventative treatment",
      "Ideal for busy, active patients",
    ],
    idealFor: [
      "Patients seeking extended results between treatments",
      "Those with busy schedules",
      "Preventative treatment for younger patients",
      "Anyone wanting maximum duration from neuromodulation",
    ],
    procedure: {
      duration: "15-30 minutes",
      downtime: "None",
      results: "Onset at 3-5 days; full effect at 10-14 days",
      sessions: "Every 6-9 months for maintenance",
    },
    pricing: {
      starting: 350,
      note: "Starting price; per-unit pricing determined at consultation",
    },
    faqs: [
      {
        question: "Why does Daxxify last longer?",
        answer:
          "Daxxify uses a different peptide technology that results in more stable and longer-lasting paralysis of facial muscles compared to traditional neuromodulators. Clinical studies show extended duration of 6-9 months for most patients.",
      },
      {
        question: "How much longer does Daxxify last compared to Botox?",
        answer:
          "Botox and Dysport typically last 3-4 months. Daxxify lasts 6-9 months for many patients — nearly double the duration. This means fewer treatment appointments per year.",
      },
      {
        question: "Is Daxxify as natural-looking as Botox?",
        answer:
          "Yes. Daxxify produces the same smooth, natural-looking results as Botox and Dysport. The difference is in longevity, not the aesthetic outcome.",
      },
      {
        question: "Is there any downtime?",
        answer:
          "No downtime with Daxxify, just like Botox. You can return to normal activities immediately. We recommend avoiding strenuous exercise for 24 hours.",
      },
    ],
    image: "https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/8989963/pexels-photo-8989963.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6543299/pexels-photo-6543299.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    isNew: true,
    popular: true,
  },
  // SKIN REJUVENATION
  {
    id: "morpheus8",
    slug: "morpheus8",
    name: "Morpheus8",
    category: "skin-rejuvenation",
    tagline: "Radiofrequency Microneedling for Lifting Without Surgery",
    description:
      "Morpheus8 combines radiofrequency energy with microneedling to create deep collagen remodeling. The radiofrequency heat penetrates below the needling depth, stimulating tight, organized collagen formation. This creates subtle lifting and tightening of loose or lax skin. It's less aggressive than surgical facelift but more powerful than regular microneedling. Results appear gradually over 8-12 weeks.",
    benefits: [
      "Tightens mild to moderate skin laxity",
      "Reduces fine lines and wrinkles",
      "Improves skin texture and tone",
      "Stimulates robust collagen remodeling",
      "Non-surgical with minimal downtime",
      "Safe for all skin types and tones",
      "Results continue improving for months",
    ],
    idealFor: [
      "Mild to moderate facial laxity",
      "Fine lines and wrinkles",
      "Acne scarring and textured skin",
      "Those seeking non-surgical lifting",
      "Patients wanting natural, progressive results",
    ],
    procedure: {
      duration: "45-60 minutes",
      downtime: "3-5 days redness and swelling",
      results: "Progressive over 8-12 weeks; results continue improving",
      sessions: "1-3 treatments spaced 4-6 weeks apart",
    },
    pricing: {
      starting: 1200,
      note: "Starting at $1,200 · Final pricing determined at consultation",
    },
    faqs: [
      {
        question: "How is Morpheus8 different from regular microneedling?",
        answer:
          "Morpheus8 combines microneedling with radiofrequency energy to deliver heat to the deeper layers of skin. This dual action stimulates more robust collagen remodeling and skin tightening than microneedling alone.",
      },
      {
        question: "Is there pain during treatment?",
        answer:
          "The treatment is performed with numbing cream and feels like controlled micro-injuries with gentle heat. Most patients tolerate it well.",
      },
      {
        question: "When will I see results?",
        answer:
          "Initial skin appearance improves within days. Progressive collagen remodeling produces improved tightness and texture over 8-12 weeks, with results continuing to improve for several months.",
      },
      {
        question: "How many sessions do I need?",
        answer:
          "Most patients benefit from 1-3 treatments spaced 4-6 weeks apart. Dr. Shirazi assesses your skin and recommends the ideal treatment plan during consultation.",
      },
      {
        question: "Who is NOT a candidate for Morpheus8?",
        answer:
          "Avoid Morpheus8 if you are pregnant, have active skin infections, are on isotretinoin (Accutane—wait 6-12 months), have a severe keloid tendency, or have metallic implants in the treatment area. Darker skin tones require customized settings to minimize pigmentation changes. Dr. Shirazi discusses your candidacy.",
      },
    ],
    image: "https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    popular: true,
  },
  {
    id: "ipl-photo-facial",
    slug: "ipl-photo-facial",
    name: "IPL Photo Facial",
    category: "skin-rejuvenation",
    tagline: "Broad-Spectrum Light for Sun Damage & Clarity",
    description:
      "IPL (Intense Pulsed Light) uses broad-spectrum light to treat sun damage, brown spots, redness, and broken capillaries. It's gentler than targeted lasers but covers larger areas. Living in San Diego means sun exposure—this treatment helps undo that damage and prevent further discoloration. Results are cumulative, so a series works better than single treatments.",
    benefits: [
      "Fades brown spots and sun damage",
      "Reduces facial redness and rosacea",
      "Minimizes broken capillaries",
      "Improves overall skin tone and clarity",
      "Gentle, broad-spectrum light (less aggressive than laser)",
      "Minimal downtime",
      "Results improve with series",
    ],
    idealFor: [
      "Sun damage and age spots",
      "Facial redness and early rosacea",
      "Broken capillaries and vascular lesions",
      "Uneven skin tone",
      "Sun-exposed patients seeking prevention",
    ],
    procedure: {
      duration: "30-45 minutes",
      downtime: "Mild redness 1-2 days",
      results: "Progressive over 3-6 weeks; cumulative with series",
      sessions: "Series of 4-6 treatments spaced 3-4 weeks apart",
    },
    pricing: {
      starting: 400,
      note: "Starting at $400 per session · Series pricing available",
    },
    faqs: [
      {
        question: "Is IPL the same as laser?",
        answer:
          "No. IPL uses broad-spectrum light, while lasers use single-wavelength light. IPL is often gentler and covers larger areas, making it ideal for overall facial rejuvenation. Lasers target specific concerns more precisely.",
      },
      {
        question: "Will I have brown spots after treatment?",
        answer:
          "Sometimes. Superficial brown spots may temporarily darken as they're brought to the surface and slough off over several days. This is a good sign that the treatment is working.",
      },
      {
        question: "How many sessions do I need?",
        answer:
          "Most patients benefit from a series of 4-6 treatments spaced 3-4 weeks apart. Results are cumulative, and we recommend maintenance treatments annually.",
      },
      {
        question: "Can I go in the sun after IPL?",
        answer:
          "You must strictly avoid sun exposure for 2 weeks after each IPL session. We provide SPF 30+ and recommend staying indoors or wearing protective clothing.",
      },
      {
        question: "Who is NOT a candidate for IPL?",
        answer:
          "Avoid IPL if you are pregnant, have active skin infections, are on isotretinoin (Accutane—wait 6-12 months), have a keloid tendency, or have very dark skin (very high melanin increases burn risk). Recent tanning also warrants waiting. Dr. Shirazi customizes settings based on your skin type to minimize risk.",
      },
    ],
    image: "https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/14655384/pexels-photo-14655384.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/34939732/pexels-photo-34939732.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: "medical-grade-skincare",
    slug: "medical-grade-skincare",
    name: "Medical-Grade Skincare",
    category: "skin-rejuvenation",
    tagline: "Prescription-Strength Actives for Home Care",
    description:
      "Professional skincare products containing prescription-grade actives—retinoids at therapeutic concentrations, stabilized vitamin C, hydroquinone, peptides. These aren't drugstore products. I customize a regimen specific to your skin and goals. The goal is to accelerate results from in-office treatments and optimize daily skin health. This is a commitment—consistent use over 6-12 weeks shows results.",
    benefits: [
      "Prescription-grade concentrations of actives",
      "Accelerates professional treatment results",
      "Addresses pigmentation, texture, and aging",
      "Customized regimen based on your skin",
      "Professional-strength formulations",
      "Improves daily skin health and radiance",
      "Ongoing support and guidance from Dr. Shirazi",
    ],
    idealFor: [
      "Patients complementing professional treatments",
      "Those with pigmentation or textural concerns",
      "Aging and fine-line prevention",
      "Acne-prone or sensitive skin",
      "Anyone serious about skincare investment",
    ],
    procedure: {
      duration: "Consultation 20-30 minutes",
      downtime: "None; potential mild irritation on first use",
      results: "Visible results in 4-6 weeks with consistent use",
      sessions: "Daily home use; follow-up consult every 8-12 weeks",
    },
    pricing: {
      range: "$50-$200 per product",
      note: "Professional consultation and custom regimen included",
    },
    faqs: [
      {
        question: "How is medical-grade skincare different from drugstore products?",
        answer:
          "Medical-grade products contain higher concentrations of active ingredients (retinoids at 0.5–1%, vitamin C at 15%+, hydroquinone at 4%) and are formulated for maximum penetration and efficacy. Drugstore products contain lower concentrations and fillers.",
      },
      {
        question: "Do I need a prescription?",
        answer:
          "No. These are professional-grade products available through clinical partners. You don't need a prescription, but you do need a professional consultation to determine the right regimen for your skin.",
      },
      {
        question: "Can I use medical-grade skincare with other treatments?",
        answer:
          "Yes. In fact, medical-grade skincare enhances the results of professional treatments. Dr. Shirazi customizes your regimen to complement whatever treatments you're receiving.",
      },
      {
        question: "How long before I see results?",
        answer:
          "Most patients see visible improvement in skin tone, texture, and radiance within 4-6 weeks of consistent use. More significant changes (like fading hyperpigmentation) may take 8-12 weeks.",
      },
    ],
    image: "https://images.pexels.com/photos/6476077/pexels-photo-6476077.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/7797744/pexels-photo-7797744.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6766261/pexels-photo-6766261.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  // MEN'S HEALTH
  {
    id: "discreet-aesthetics",
    slug: "discreet-aesthetics",
    name: "Discreet Aesthetics for Men",
    category: "mens-health",
    tagline: "Subtle Enhancement That Looks Like You, Just Better",
    description:
      "Men often want to look refreshed without anyone noticing they've had 'work done.' This is my specialty. Conservative Botox dosing (lighter than women to preserve masculine expressiveness), subtle jawline fillers, strategic skin tightening. We avoid overdone features. The goal is for colleagues to say 'You look rested' not 'You had something done.' This requires physician judgment and restraint.",
    benefits: [
      "Conservative, natural-looking results",
      "Maintains masculine facial structure and expressiveness",
      "Colleagues notice you look rested, not obvious treatment",
      "Improves confidence in executive/professional settings",
      "Customized strategically for male anatomy",
      "Results appear gradual over weeks",
      "Combination approach for optimal subtlety",
    ],
    idealFor: [
      "Professional men wanting subtle refreshment",
      "Executives and busy professionals",
      "Those valuing understated, natural results",
      "Men uncomfortable with obvious treatment",
      "Patients wanting to maintain masculine features",
    ],
    procedure: {
      duration: "30-60 minutes depending on plan",
      downtime: "Minimal; depends on treatments selected",
      results: "Gradual, subtle over 2-4 weeks",
      sessions: "Customized plan typically 1-3 visits",
    },
    pricing: {
      range: "$300-$2,000+",
      note: "Depends on treatments; consultation determines plan",
    },
    faqs: [
      {
        question: "Will people notice I've had something done?",
        answer:
          "That's the point of discreet aesthetics. Dr. Shirazi uses conservative dosing and placement so you look refreshed and like yourself — just better. Most people won't suspect treatment; they'll just think you look rested.",
      },
      {
        question: "What treatments work best for men?",
        answer:
          "Conservative Botox (lighter dosing to preserve expressiveness), subtle filler for jawline definition, Morpheus8 for subtle skin tightening, and skin care. We avoid overfilled lips or dramatic changes that read as obvious cosmetic work.",
      },
      {
        question: "Do I have to do my whole face?",
        answer:
          "No. Many men start with one or two areas — like the forehead and crow's feet or jawline definition. Dr. Shirazi designs a strategic plan based on your goals.",
      },
      {
        question: "How long do results last?",
        answer:
          "Results depend on which treatments you choose. Botox lasts 3-4 months, filler 6-12 months, and skin tightening results continue improving for several months and last 12+ months.",
      },
    ],
    image: "https://images.pexels.com/photos/8350416/pexels-photo-8350416.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlts: [
      "https://images.pexels.com/photos/5092528/pexels-photo-5092528.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/14687263/pexels-photo-14687263.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
];

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
