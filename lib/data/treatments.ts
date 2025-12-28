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
  gallery?: string[];
  featured?: boolean;
  popular?: boolean;
  isNew?: boolean;
}

export type TreatmentCategory =
  | "aesthetics"
  | "regenerative"
  | "skin-rejuvenation"
  | "weight-loss"
  | "longevity";

export const treatmentCategories: Record<
  TreatmentCategory,
  { name: string; description: string; image: string }
> = {
  aesthetics: {
    name: "Aesthetic Medicine",
    description:
      "Precision injectables that smooth, lift, and sculpt for naturally beautiful results. All treatments performed by Dr. Shirazi.",
    image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  regenerative: {
    name: "Regenerative Medicine",
    description:
      "Harness your body's own healing capabilities with cutting-edge regenerative therapies that restore from within.",
    image: "https://images.pexels.com/photos/5069600/pexels-photo-5069600.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  "skin-rejuvenation": {
    name: "Skin Rejuvenation",
    description:
      "Transform your skin's texture, tone, and radiance with advanced resurfacing and tightening treatments.",
    image: "https://images.pexels.com/photos/5069612/pexels-photo-5069612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  "weight-loss": {
    name: "Medical Weight Loss",
    description:
      "Physician-supervised weight management programs using the latest GLP-1 medications for sustainable results.",
    image: "https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  longevity: {
    name: "Wellness & Longevity",
    description:
      "Optimize your health from the inside out with hormone therapy, IV nutrition, and advanced longevity protocols.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
};

export const treatments: Treatment[] = [
  // AESTHETIC MEDICINE
  {
    id: "botox-dysport",
    slug: "botox-dysport",
    name: "Botox & Dysport",
    category: "aesthetics",
    tagline: "Smooth lines, prevent new ones",
    description:
      "Neuromodulators like Botox and Dysport are the gold standard for treating dynamic wrinkles—the lines that form when you smile, frown, or squint. By temporarily relaxing the muscles that cause these expressions, we smooth existing lines and prevent new ones from forming. Dr. Shirazi's injection technique focuses on natural results that preserve your ability to express emotion.",
    benefits: [
      "Smooth forehead lines and frown lines (11s)",
      "Reduce crow's feet around the eyes",
      "Lift brows for a refreshed, alert look",
      "Prevent new wrinkles from forming",
      "Quick treatment with no downtime",
      "Results last 3-4 months",
    ],
    idealFor: [
      "Dynamic wrinkles (lines that appear with expression)",
      "Forehead lines and frown lines",
      "Crow's feet around eyes",
      "Brow lift without surgery",
      "Preventative treatment for younger patients",
      "TMJ/teeth grinding relief",
    ],
    procedure: {
      duration: "15-30 minutes",
      downtime: "None",
      results: "3-7 days to see full effect",
      sessions: "Every 3-4 months for maintenance",
    },
    pricing: {
      starting: 12,
      note: "per unit",
    },
    faqs: [
      {
        question: "Will I look frozen or expressionless?",
        answer:
          "Not with Dr. Shirazi's approach. She uses precise dosing and placement to smooth wrinkles while preserving your natural expressions. The goal is to look refreshed, not frozen.",
      },
      {
        question: "How is Dr. Shirazi's technique different?",
        answer:
          "As a physician with 20+ years of experience, Dr. Shirazi personally performs every injection. She takes a conservative approach, focusing on enhancement rather than transformation.",
      },
      {
        question: "Is there any downtime?",
        answer:
          "You can return to normal activities immediately. We recommend avoiding strenuous exercise for 24 hours and not lying flat for 4 hours after treatment.",
      },
    ],
    image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    popular: true,
  },
  {
    id: "dermal-fillers",
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    category: "aesthetics",
    tagline: "Restore volume, sculpt contours",
    description:
      "Hyaluronic acid dermal fillers restore lost volume, enhance facial contours, and smooth deep lines and folds. Dr. Shirazi uses a range of premium fillers (Juvederm, Restylane, RHA) to address different areas and concerns, from subtle lip enhancement to full-face rejuvenation. Her artistic eye and medical expertise ensure results that look natural and harmonious.",
    benefits: [
      "Restore volume to cheeks and temples",
      "Smooth nasolabial folds and marionette lines",
      "Enhance lip shape and volume",
      "Define jawline and chin",
      "Correct under-eye hollows",
      "Results last 6-18 months depending on area",
    ],
    idealFor: [
      "Volume loss due to aging",
      "Hollow cheeks or temples",
      "Deep lines and folds",
      "Lip enhancement",
      "Non-surgical nose refinement",
      "Jawline definition",
    ],
    procedure: {
      duration: "30-60 minutes",
      downtime: "Mild swelling 1-3 days",
      results: "Immediate, final results at 2 weeks",
      sessions: "Touch-ups every 6-18 months",
    },
    pricing: {
      starting: 650,
      note: "per syringe",
    },
    faqs: [
      {
        question: "Which filler is right for me?",
        answer:
          "Dr. Shirazi will recommend the best filler based on the treatment area and your goals. Thicker fillers work best for cheeks and jawline, while softer fillers are ideal for lips and under-eyes.",
      },
      {
        question: "Are fillers reversible?",
        answer:
          "Yes, hyaluronic acid fillers can be dissolved with an enzyme called hyaluronidase if needed. This is one reason Dr. Shirazi prefers HA fillers for most patients.",
      },
      {
        question: "How long do results last?",
        answer:
          "Depending on the filler and location, results last 6-18 months. Lips tend to metabolize faster (6-9 months) while cheeks can last up to 18 months.",
      },
    ],
    image: "https://images.pexels.com/photos/3985356/pexels-photo-3985356.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    popular: true,
  },
  {
    id: "pdo-threads",
    slug: "pdo-threads",
    name: "PDO Thread Lift",
    category: "aesthetics",
    tagline: "Non-surgical lift and tightening",
    description:
      "PDO (polydioxanone) threads offer a non-surgical solution for lifting and tightening sagging skin. These dissolvable threads are inserted beneath the skin to provide immediate lift while stimulating your body's own collagen production for ongoing improvement. Dr. Shirazi offers both lifting threads for jowls and neck, and smooth threads for skin quality.",
    benefits: [
      "Immediate lifting effect",
      "Stimulates natural collagen production",
      "Minimal downtime compared to surgery",
      "Results continue to improve for months",
      "Can be combined with other treatments",
      "Results last 12-18 months",
    ],
    idealFor: [
      "Mild to moderate sagging",
      "Jowls and lower face",
      "Neck laxity",
      "Brow lifting",
      "Patients not ready for surgery",
      "Those wanting natural results",
    ],
    procedure: {
      duration: "45-90 minutes",
      downtime: "3-7 days",
      results: "Immediate + progressive improvement over 3 months",
      sessions: "Single treatment, repeat as desired",
    },
    pricing: {
      range: "$1,500 - $4,500",
      note: "depends on areas and number of threads",
    },
    faqs: [
      {
        question: "Is the procedure painful?",
        answer:
          "The area is numbed with local anesthetic before the procedure. Most patients describe mild discomfort during treatment and soreness for a few days after.",
      },
      {
        question: "When will I see results?",
        answer:
          "You'll see lifting immediately after the procedure. Results continue to improve over 3-6 months as your body produces new collagen around the threads.",
      },
      {
        question: "What happens when the threads dissolve?",
        answer:
          "The PDO threads dissolve over 6-9 months, but the collagen they stimulate remains. Most patients enjoy results for 12-18 months.",
      },
    ],
    image: "https://images.pexels.com/photos/5069438/pexels-photo-5069438.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: "kybella",
    slug: "kybella",
    name: "Kybella",
    category: "aesthetics",
    tagline: "Dissolve double chin permanently",
    description:
      "Kybella is an FDA-approved injectable treatment that permanently destroys fat cells under the chin. The active ingredient (deoxycholic acid) is a naturally occurring molecule that breaks down dietary fat. Once treated, those fat cells are gone for good. Dr. Shirazi customizes each treatment to your unique anatomy for a more defined jawline.",
    benefits: [
      "Permanently destroys fat cells",
      "No surgery or liposuction required",
      "Improves jawline definition",
      "Gradual, natural-looking results",
      "Long-lasting outcome",
    ],
    idealFor: [
      "Submental fullness (double chin)",
      "Those who want to avoid surgery",
      "Patients with good skin elasticity",
      "Both men and women",
    ],
    procedure: {
      duration: "30 minutes",
      downtime: "Swelling for 1-2 weeks",
      results: "Gradual over 6-8 weeks per session",
      sessions: "2-4 treatments, 6 weeks apart",
    },
    pricing: {
      starting: 1200,
      note: "per treatment",
    },
    faqs: [
      {
        question: "How many treatments will I need?",
        answer:
          "Most patients need 2-4 treatments spaced 6 weeks apart. Dr. Shirazi will assess your anatomy and goals to create a personalized plan.",
      },
      {
        question: "Is the swelling significant?",
        answer:
          "Yes, expect noticeable swelling for 1-2 weeks after each treatment. This is a normal part of the fat destruction process.",
      },
      {
        question: "Are the results permanent?",
        answer:
          "Yes! Once fat cells are destroyed, they don't regenerate. However, significant weight gain could affect remaining fat cells in the area.",
      },
    ],
    image: "https://images.pexels.com/photos/5069614/pexels-photo-5069614.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  // REGENERATIVE MEDICINE
  {
    id: "prp-therapy",
    slug: "prp-therapy",
    name: "PRF/PRP Therapy",
    category: "regenerative",
    tagline: "Your body's own healing power",
    description:
      "Platelet-Rich Fibrin (PRF) and Platelet-Rich Plasma (PRP) use concentrated growth factors from your own blood to stimulate healing and regeneration. These treatments harness your body's natural capabilities to rejuvenate skin, stimulate hair growth, and accelerate healing. Dr. Shirazi prefers PRF for its higher concentration of growth factors and longer-lasting release.",
    benefits: [
      "100% natural—uses your own blood",
      "Stimulates collagen production",
      "Improves skin texture and tone",
      "Promotes hair growth",
      "Enhances healing after other treatments",
      "No risk of allergic reaction",
    ],
    idealFor: [
      "Facial rejuvenation",
      "Under-eye hollows and dark circles",
      "Hair restoration",
      "Post-procedure healing",
      "Those preferring natural treatments",
      "Acne scar improvement",
    ],
    procedure: {
      duration: "45-60 minutes",
      downtime: "1-3 days mild redness",
      results: "Progressive over 4-6 weeks",
      sessions: "3-4 treatments recommended",
    },
    pricing: {
      starting: 650,
      note: "per treatment",
    },
    faqs: [
      {
        question: "What's the difference between PRP and PRF?",
        answer:
          "PRF is the next generation of PRP. It contains a higher concentration of platelets, white blood cells, and stem cells, and releases growth factors over a longer period for better results.",
      },
      {
        question: "Is it really my own blood?",
        answer:
          "Yes! We draw a small amount of blood, process it to concentrate the platelets and growth factors, and immediately use it for your treatment.",
      },
      {
        question: "How does it help with hair loss?",
        answer:
          "The growth factors in PRF stimulate dormant hair follicles and prolong the growth phase of hair. It's most effective for early hair thinning.",
      },
    ],
    image: "https://images.pexels.com/photos/5069600/pexels-photo-5069600.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: "exosome-therapy",
    slug: "exosome-therapy",
    name: "Exosome Therapy",
    category: "regenerative",
    tagline: "Next-gen cellular regeneration",
    description:
      "Exosomes are powerful cellular messengers that signal regeneration and repair. Derived from stem cells, they contain growth factors, proteins, and genetic material that instruct your cells to rejuvenate. This cutting-edge therapy represents the future of regenerative medicine, offering potent rejuvenation without using actual stem cells.",
    benefits: [
      "More powerful than PRP/PRF alone",
      "Accelerates tissue regeneration",
      "Improves skin quality and elasticity",
      "Enhances results of other treatments",
      "Promotes hair regrowth",
      "Anti-inflammatory properties",
    ],
    idealFor: [
      "Advanced skin rejuvenation",
      "Hair restoration",
      "Post-procedure healing",
      "Those seeking cutting-edge treatments",
      "Combination with microneedling or lasers",
    ],
    procedure: {
      duration: "30-60 minutes",
      downtime: "1-2 days",
      results: "Progressive over 4-8 weeks",
      sessions: "2-3 treatments recommended",
    },
    pricing: {
      starting: 1200,
      note: "per treatment",
    },
    faqs: [
      {
        question: "What exactly are exosomes?",
        answer:
          "Exosomes are tiny vesicles (30-150 nanometers) released by stem cells. They carry regenerative signals—growth factors, proteins, and RNA—that tell your cells to repair and rejuvenate.",
      },
      {
        question: "How are they different from stem cells?",
        answer:
          "Unlike stem cells, exosomes are cell-free. They contain the beneficial signaling components without the cells themselves, making them safe and effective for regenerative treatments.",
      },
    ],
    image: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800",
    isNew: true,
  },
  {
    id: "pdrn-therapy",
    slug: "pdrn-therapy",
    name: "PDRN / Salmon DNA",
    category: "regenerative",
    tagline: "DNA-powered skin repair",
    description:
      "PDRN (Polydeoxyribonucleotide) therapy uses DNA fragments derived from salmon to stimulate skin repair and regeneration. This treatment activates cellular repair mechanisms, promotes collagen production, and has powerful anti-inflammatory effects. Popular in Korea for years, PDRN is now gaining recognition for its remarkable skin-healing properties.",
    benefits: [
      "Stimulates cellular repair",
      "Anti-inflammatory properties",
      "Improves skin hydration",
      "Accelerates wound healing",
      "Reduces fine lines and wrinkles",
      "Evens skin tone",
    ],
    idealFor: [
      "Dull, tired-looking skin",
      "Acne scarring",
      "Post-procedure healing",
      "Sensitive, reactive skin",
      "Fine lines and texture",
    ],
    procedure: {
      duration: "30-45 minutes",
      downtime: "1-2 days mild redness",
      results: "Progressive over 2-4 weeks",
      sessions: "3-4 treatments recommended",
    },
    pricing: {
      starting: 450,
      note: "per treatment",
    },
    faqs: [
      {
        question: "Why salmon DNA?",
        answer:
          "Salmon DNA is highly compatible with human tissue and has been extensively studied for its regenerative properties. It stimulates your cells' natural repair mechanisms.",
      },
    ],
    image: "https://images.pexels.com/photos/5069606/pexels-photo-5069606.jpeg?auto=compress&cs=tinysrgb&w=800",
    isNew: true,
  },
  {
    id: "microneedling",
    slug: "microneedling",
    name: "Microneedling with PRF",
    category: "regenerative",
    tagline: "Collagen induction with growth factors",
    description:
      "Microneedling creates tiny channels in the skin that trigger your natural healing response, stimulating collagen and elastin production. When combined with PRF (Platelet-Rich Fibrin), the results are amplified—growth factors are delivered directly into the skin for enhanced regeneration. This treatment improves texture, scars, fine lines, and overall radiance.",
    benefits: [
      "Stimulates collagen and elastin",
      "Improves acne scars",
      "Reduces fine lines and wrinkles",
      "Minimizes pore size",
      "Evens skin tone",
      "Enhances product absorption",
    ],
    idealFor: [
      "Acne scarring",
      "Fine lines and texture",
      "Large pores",
      "Dull skin",
      "Stretch marks",
      "General skin rejuvenation",
    ],
    procedure: {
      duration: "60 minutes",
      downtime: "2-4 days redness",
      results: "Progressive over 4-6 weeks",
      sessions: "3-4 treatments, 4 weeks apart",
    },
    pricing: {
      starting: 450,
      note: "per treatment",
    },
    faqs: [
      {
        question: "Is microneedling painful?",
        answer:
          "We apply numbing cream before treatment, so most patients feel only mild pressure. There's typically warmth and tightness for a day or two after.",
      },
      {
        question: "Why add PRF?",
        answer:
          "PRF supercharges the results by flooding the micro-channels with your own growth factors. This accelerates healing and enhances collagen production.",
      },
    ],
    image: "https://images.pexels.com/photos/5069620/pexels-photo-5069620.jpeg?auto=compress&cs=tinysrgb&w=800",
    popular: true,
  },

  // SKIN REJUVENATION
  {
    id: "morpheus8",
    slug: "morpheus8",
    name: "Morpheus8",
    category: "skin-rejuvenation",
    tagline: "RF microneedling for skin tightening",
    description:
      "Morpheus8 combines microneedling with radiofrequency (RF) energy to remodel collagen and tighten skin at deeper levels than traditional treatments. The gold-coated needles deliver RF energy precisely to the subdermal layer, restructuring the deeper architecture of the skin. This treatment is Dr. Shirazi's go-to for skin tightening without surgery.",
    benefits: [
      "Tightens loose, sagging skin",
      "Reduces wrinkles and fine lines",
      "Improves skin texture and tone",
      "Minimizes pore size",
      "Reduces acne scars",
      "Contours face and body",
    ],
    idealFor: [
      "Skin laxity on face, neck, body",
      "Jowls and lower face sagging",
      "Acne scarring",
      "Stretch marks",
      "Patients not ready for surgery",
      "All skin types (safe for darker skin)",
    ],
    procedure: {
      duration: "60-90 minutes",
      downtime: "3-5 days",
      results: "Progressive over 3-6 months",
      sessions: "3 treatments, 4-6 weeks apart",
    },
    pricing: {
      starting: 800,
      note: "per treatment area",
    },
    faqs: [
      {
        question: "How is Morpheus8 different from regular microneedling?",
        answer:
          "Morpheus8 adds radiofrequency energy that heats the deeper layers of skin, causing tissue remodeling and tightening that microneedling alone can't achieve.",
      },
      {
        question: "Is it safe for darker skin tones?",
        answer:
          "Yes! Unlike some laser treatments, Morpheus8 is safe for all skin types, including darker skin tones, with proper settings.",
      },
      {
        question: "What areas can be treated?",
        answer:
          "Face, neck, jowls, abdomen, arms, knees—anywhere you have loose skin or want improvement in texture.",
      },
    ],
    image: "https://images.pexels.com/photos/5069612/pexels-photo-5069612.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    popular: true,
  },
  {
    id: "chemical-peels",
    slug: "chemical-peels",
    name: "Chemical Peels",
    category: "skin-rejuvenation",
    tagline: "Reveal fresh, glowing skin",
    description:
      "Chemical peels use carefully selected acids to remove damaged outer layers of skin, revealing fresher, more radiant skin beneath. Dr. Shirazi offers a range of peels from light (minimal downtime) to deep (dramatic results), customizing the treatment to your skin type, concerns, and lifestyle.",
    benefits: [
      "Improves skin texture and tone",
      "Reduces fine lines",
      "Fades hyperpigmentation and sun damage",
      "Treats acne and acne scars",
      "Minimizes pore appearance",
      "Stimulates collagen production",
    ],
    idealFor: [
      "Dull, uneven skin tone",
      "Sun damage and age spots",
      "Fine lines and texture",
      "Acne and acne scars",
      "Melasma (with appropriate peel)",
    ],
    procedure: {
      duration: "30-45 minutes",
      downtime: "1-7 days depending on depth",
      results: "1-2 weeks after peeling completes",
      sessions: "Series of 3-6 for optimal results",
    },
    pricing: {
      range: "$150 - $500",
      note: "depends on peel type",
    },
    faqs: [
      {
        question: "Will my skin actually peel?",
        answer:
          "Light peels may cause only mild flaking, while deeper peels cause visible peeling for several days. Dr. Shirazi will explain exactly what to expect.",
      },
      {
        question: "Which peel is right for me?",
        answer:
          "It depends on your skin type, concerns, and how much downtime you can afford. We'll customize the treatment to your needs.",
      },
    ],
    image: "https://images.pexels.com/photos/3985311/pexels-photo-3985311.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "hydrafacial",
    slug: "hydrafacial",
    name: "HydraFacial",
    category: "skin-rejuvenation",
    tagline: "The ultimate glow treatment",
    description:
      "HydraFacial is a multi-step treatment that cleanses, exfoliates, extracts, and hydrates the skin using patented Vortex technology. It delivers instant results with no downtime, making it perfect for special events or regular maintenance. We customize each treatment with targeted serums for your specific concerns.",
    benefits: [
      "Instant radiance and glow",
      "Deep cleansing and extraction",
      "Intense hydration",
      "Customizable for your concerns",
      "No downtime—event-ready skin",
      "Suitable for all skin types",
    ],
    idealFor: [
      "Dull, dehydrated skin",
      "Congested pores",
      "Pre-event glow",
      "Sensitive skin",
      "General maintenance",
      "First-time facial patients",
    ],
    procedure: {
      duration: "45-60 minutes",
      downtime: "None",
      results: "Immediate",
      sessions: "Monthly for maintenance",
    },
    pricing: {
      starting: 225,
      note: "add-ons available",
    },
    faqs: [
      {
        question: "How is this different from a regular facial?",
        answer:
          "HydraFacial uses patented technology to simultaneously cleanse, extract, and infuse the skin with serums. It's more effective than manual extraction and delivers instant visible results.",
      },
      {
        question: "Can I wear makeup after?",
        answer:
          "Yes! There's no downtime. Your skin may be slightly flushed for an hour, but you can apply makeup and go about your day.",
      },
    ],
    image: "https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&w=800",
    popular: true,
  },

  // MEDICAL WEIGHT LOSS
  {
    id: "glp1-weight-loss",
    slug: "glp1-weight-loss",
    name: "GLP-1 Weight Loss",
    shortName: "Semaglutide & Tirzepatide",
    category: "weight-loss",
    tagline: "Medical weight loss that works",
    description:
      "GLP-1 medications like Semaglutide (Ozempic/Wegovy) and Tirzepatide (Mounjaro/Zepbound) have revolutionized medical weight loss. These weekly injections work by reducing appetite, increasing feelings of fullness, and improving how your body processes blood sugar. Under Dr. Shirazi's supervision, patients are achieving sustainable weight loss with proper medical oversight.",
    benefits: [
      "Significant, sustainable weight loss",
      "Reduced appetite and cravings",
      "Improved blood sugar control",
      "Physician-supervised program",
      "Weekly injections (self-administered)",
      "Lifestyle support included",
    ],
    idealFor: [
      "BMI 27+ with weight-related conditions",
      "BMI 30+ (clinical obesity)",
      "Those who've struggled with diet/exercise alone",
      "Patients committed to lifestyle changes",
      "Those wanting medical supervision",
    ],
    procedure: {
      duration: "Monthly check-ins",
      downtime: "None",
      results: "Gradual over weeks-months",
      sessions: "Ongoing program",
    },
    pricing: {
      range: "$400 - $600",
      note: "per month including medication",
    },
    faqs: [
      {
        question: "How much weight can I lose?",
        answer:
          "Clinical studies show average weight loss of 15-20% of body weight with Semaglutide and up to 22% with Tirzepatide over 12-18 months.",
      },
      {
        question: "What are the side effects?",
        answer:
          "Common side effects include nausea, which typically improves over time. Dr. Shirazi starts with low doses and increases gradually to minimize side effects.",
      },
      {
        question: "Is this just a quick fix?",
        answer:
          "These medications work best as part of a comprehensive approach including nutrition and lifestyle changes. Dr. Shirazi provides ongoing support to help maintain your results.",
      },
      {
        question: "Why medical supervision?",
        answer:
          "As an Internal Medicine physician, Dr. Shirazi monitors your health throughout treatment, adjusts dosing appropriately, and screens for any contraindications. This is safer than obtaining medications without medical oversight.",
      },
    ],
    image: "https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    popular: true,
    isNew: true,
  },

  // LONGEVITY & WELLNESS
  {
    id: "hormone-therapy",
    slug: "hormone-therapy",
    name: "Bioidentical Hormone Therapy (BHRT)",
    shortName: "Hormone Optimization",
    category: "longevity",
    tagline: "Restore hormonal balance",
    description:
      "Bioidentical Hormone Replacement Therapy uses hormones that are molecularly identical to those your body produces naturally. Dr. Shirazi's comprehensive approach addresses the root causes of hormonal imbalance—whether from menopause, andropause, or other factors—to restore energy, vitality, and quality of life.",
    benefits: [
      "Increased energy and vitality",
      "Improved mood and mental clarity",
      "Better sleep quality",
      "Enhanced libido and sexual function",
      "Stronger bones and muscles",
      "Improved skin quality",
    ],
    idealFor: [
      "Menopausal women",
      "Men with low testosterone (andropause)",
      "Fatigue and low energy",
      "Brain fog and mood changes",
      "Weight gain despite diet and exercise",
      "Decreased libido",
    ],
    procedure: {
      duration: "Initial consult 45-60 minutes",
      downtime: "None",
      results: "Gradual over 2-4 weeks",
      sessions: "Ongoing management",
    },
    pricing: {
      range: "$200 - $400",
      note: "per month depending on protocol",
    },
    faqs: [
      {
        question: "What makes bioidentical hormones different?",
        answer:
          "Bioidentical hormones are molecularly identical to the hormones your body produces naturally, unlike synthetic hormones which have different molecular structures.",
      },
      {
        question: "Is hormone therapy safe?",
        answer:
          "When properly prescribed and monitored, BHRT is safe for most patients. Dr. Shirazi conducts thorough evaluation and ongoing monitoring to ensure safety.",
      },
      {
        question: "How will I receive the hormones?",
        answer:
          "Options include creams, pellets, injections, or oral forms depending on your needs and preferences. Dr. Shirazi will recommend the best delivery method for you.",
      },
    ],
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: "iv-therapy",
    slug: "iv-therapy",
    name: "IV Therapy & NAD+",
    category: "longevity",
    tagline: "Cellular-level wellness",
    description:
      "IV therapy delivers vitamins, minerals, and other nutrients directly into your bloodstream for 100% absorption. Our custom formulations address everything from energy and immunity to recovery and anti-aging. NAD+ infusions take it further, supporting cellular repair and metabolic function at the deepest level.",
    benefits: [
      "100% nutrient absorption",
      "Immediate energy boost",
      "Enhanced immune function",
      "Faster recovery from illness or exertion",
      "Improved mental clarity",
      "Anti-aging at cellular level (NAD+)",
    ],
    idealFor: [
      "Low energy and fatigue",
      "Frequent illness",
      "Post-workout recovery",
      "Hangover relief",
      "Jet lag recovery",
      "Anti-aging and longevity",
    ],
    procedure: {
      duration: "30-90 minutes depending on drip",
      downtime: "None",
      results: "Often immediate",
      sessions: "As needed or monthly maintenance",
    },
    pricing: {
      range: "$175 - $750",
      note: "depends on formula",
    },
    faqs: [
      {
        question: "Why IV instead of oral supplements?",
        answer:
          "Oral supplements must pass through your digestive system where absorption can be limited to 10-50%. IV delivers 100% of nutrients directly to your cells.",
      },
      {
        question: "What is NAD+?",
        answer:
          "NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme essential for cellular energy production. Levels decline with age, and replenishing via IV can support brain function, energy, and cellular repair.",
      },
    ],
    image: "https://images.pexels.com/photos/5069408/pexels-photo-5069408.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "peptides",
    slug: "peptides",
    name: "Peptide Therapy",
    category: "longevity",
    tagline: "Advanced longevity protocols",
    description:
      "Peptides are short chains of amino acids that act as signaling molecules in your body. Specific peptides can stimulate growth hormone release, enhance recovery, boost immune function, and support tissue repair. Dr. Shirazi designs custom peptide protocols based on your individual goals and health profile.",
    benefits: [
      "Enhanced recovery and healing",
      "Improved sleep quality",
      "Increased muscle mass and reduced fat",
      "Better cognitive function",
      "Stronger immune system",
      "Anti-aging effects",
    ],
    idealFor: [
      "Athletes and active individuals",
      "Those seeking anti-aging benefits",
      "Poor sleep or recovery",
      "Injury healing",
      "Immune support",
      "Optimizing health and performance",
    ],
    procedure: {
      duration: "Consult + ongoing management",
      downtime: "None",
      results: "Variable, typically weeks-months",
      sessions: "Ongoing protocols",
    },
    pricing: {
      range: "$200 - $500",
      note: "per month depending on protocol",
    },
    faqs: [
      {
        question: "What peptides do you offer?",
        answer:
          "We offer a range of peptides including BPC-157 for healing, Sermorelin and Ipamorelin for growth hormone support, Thymosin alpha-1 for immunity, and others based on your needs.",
      },
      {
        question: "Are peptides safe?",
        answer:
          "When properly prescribed and monitored, peptides have an excellent safety profile. Dr. Shirazi only uses pharmaceutical-grade peptides from reputable sources.",
      },
    ],
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800",
    isNew: true,
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
