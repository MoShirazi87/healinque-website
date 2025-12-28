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
}

export const concerns: Concern[] = [
  {
    id: "wrinkles-fine-lines",
    slug: "wrinkles-fine-lines",
    name: "Fine Lines & Wrinkles",
    tagline: "Smooth, prevent, and reverse signs of aging",
    description:
      "Fine lines and wrinkles are among the most common concerns we treat at Healinque. They develop from a combination of repetitive facial expressions (dynamic wrinkles), sun damage, and the natural loss of collagen and elastin that occurs with aging. Dr. Shirazi takes a comprehensive approach, addressing both the dynamic wrinkles that appear with expression and the static lines that are visible at rest.",
    causes: [
      "Repetitive facial expressions (smiling, frowning, squinting)",
      "Sun exposure and UV damage",
      "Natural collagen and elastin loss with age",
      "Smoking and environmental pollutants",
      "Dehydration and poor skincare",
      "Genetic factors",
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
        name: "PRF Therapy",
        slug: "prp-therapy",
        description:
          "Natural regeneration using your own growth factors to improve skin quality and reduce fine lines.",
      },
      {
        name: "Chemical Peels",
        slug: "chemical-peels",
        description:
          "Resurface the skin to reduce superficial lines and improve overall texture and tone.",
      },
    ],
    tips: [
      "Wear broad-spectrum SPF 30+ sunscreen daily, rain or shine",
      "Start with preventative Botox in your late 20s-early 30s",
      "Use retinoids as part of your skincare routine",
      "Stay hydrated and maintain a healthy diet rich in antioxidants",
      "Get adequate sleep—skin repairs itself during rest",
    ],
    image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "volume-loss",
    slug: "volume-loss",
    name: "Volume Loss & Sagging",
    tagline: "Restore youthful fullness and contours",
    description:
      "As we age, we lose volume in key areas of the face—cheeks become flatter, temples hollow, the jawline loses definition, and skin begins to sag. This volume loss is caused by decreased collagen production, fat pad descent, and bone resorption. At Healinque, we restore volume strategically to lift and rejuvenate the face naturally, avoiding the overfilled look that comes from treating only individual areas.",
    causes: [
      "Natural aging and collagen loss",
      "Fat pad descent and redistribution",
      "Bone resorption (loss of underlying bone structure)",
      "Weight loss",
      "Sun damage",
      "Genetics",
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
        name: "PDO Threads",
        slug: "pdo-threads",
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
        slug: "prp-therapy",
        description:
          "Stimulates natural collagen production for gradual improvement in skin quality and volume.",
      },
    ],
    tips: [
      "Maintain a stable weight—yo-yo dieting accelerates volume loss",
      "Protect your face from sun exposure with SPF and hats",
      "Consider starting fillers early for subtle enhancement rather than waiting for significant loss",
      "Support collagen production with retinoids and vitamin C",
    ],
    image: "https://images.pexels.com/photos/3985356/pexels-photo-3985356.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "double-chin",
    slug: "double-chin",
    name: "Double Chin",
    tagline: "Define your jawline without surgery",
    description:
      "Submental fullness (commonly called a double chin) can be frustrating because it often doesn't respond to diet and exercise. Whether caused by genetics, weight fluctuations, or aging, excess fat under the chin can affect your profile and make you look heavier than you are. At Healinque, we offer non-surgical solutions to permanently reduce this stubborn fat and define your jawline.",
    causes: [
      "Genetics (inherited tendency to store fat under the chin)",
      "Weight gain",
      "Aging and skin laxity",
      "Poor posture",
    ],
    treatments: [
      {
        name: "Kybella",
        slug: "kybella",
        description:
          "FDA-approved injectable that permanently destroys fat cells under the chin. Results are permanent once fat is eliminated.",
        recommended: true,
      },
      {
        name: "PDO Threads",
        slug: "pdo-threads",
        description:
          "If skin laxity is contributing to the appearance, threads can lift and tighten the neck and jawline.",
      },
      {
        name: "Morpheus8",
        slug: "morpheus8",
        description:
          "RF microneedling can tighten loose skin and improve contour in the neck area.",
      },
    ],
    tips: [
      "Maintain a healthy weight—while the treated fat cells are gone, remaining cells can expand with weight gain",
      "Practice good posture to prevent 'tech neck'",
      "Consider combining treatments for optimal results",
    ],
    image: "https://images.pexels.com/photos/5069614/pexels-photo-5069614.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "dull-skin",
    slug: "dull-skin",
    name: "Dull, Tired-Looking Skin",
    tagline: "Restore your natural radiance and glow",
    description:
      "If your skin looks tired, lackluster, or just not as vibrant as it used to, you're not alone. Dull skin can result from dead cell buildup, dehydration, poor circulation, environmental damage, or internal factors like stress and nutritional deficiencies. At Healinque, we take a multi-pronged approach to restore your natural glow—from surface treatments to addressing underlying causes.",
    causes: [
      "Dead skin cell buildup",
      "Dehydration",
      "Sun damage and environmental pollutants",
      "Lack of sleep and chronic stress",
      "Poor nutrition and vitamin deficiencies",
      "Smoking",
      "Aging and slowed cell turnover",
    ],
    treatments: [
      {
        name: "HydraFacial",
        slug: "hydrafacial",
        description:
          "The ultimate glow treatment—cleanses, exfoliates, extracts, and hydrates for immediate radiance with no downtime.",
        recommended: true,
      },
      {
        name: "Chemical Peels",
        slug: "chemical-peels",
        description:
          "Remove dull outer layers to reveal fresh, glowing skin beneath. Customized to your skin type.",
        recommended: true,
      },
      {
        name: "PRF/PRP Therapy",
        slug: "prp-therapy",
        description:
          "Your own growth factors stimulate renewal for natural, lasting improvement in skin quality.",
      },
      {
        name: "PDRN Therapy",
        slug: "pdrn-therapy",
        description:
          "Salmon DNA therapy promotes cellular repair and restores radiance from within.",
      },
      {
        name: "IV Therapy",
        slug: "iv-therapy",
        description:
          "Address internal deficiencies that may be contributing to dull skin with custom nutrient infusions.",
      },
    ],
    tips: [
      "Exfoliate regularly (but not too aggressively)",
      "Stay hydrated—drink plenty of water throughout the day",
      "Use vitamin C serum daily to brighten and protect",
      "Get adequate sleep—skin regenerates at night",
      "Consider your diet—colorful fruits and vegetables support skin health",
    ],
    image: "https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "hyperpigmentation",
    slug: "hyperpigmentation",
    name: "Hyperpigmentation",
    tagline: "Even out skin tone and fade dark spots",
    description:
      "Hyperpigmentation—including sun spots, melasma, and post-inflammatory hyperpigmentation—occurs when the skin produces excess melanin. While often harmless, dark patches can be cosmetically concerning and difficult to treat. Dr. Shirazi approaches hyperpigmentation carefully, using treatments appropriate for your specific type and skin tone to avoid making the condition worse.",
    causes: [
      "Sun exposure and UV damage (sun spots/age spots)",
      "Hormonal changes (melasma, often triggered by pregnancy or birth control)",
      "Post-inflammatory hyperpigmentation (after acne, injury, or inflammation)",
      "Certain medications",
      "Genetics",
    ],
    treatments: [
      {
        name: "Chemical Peels",
        slug: "chemical-peels",
        description:
          "Targeted peels can lighten pigmentation and even skin tone. The type and depth depends on your condition.",
        recommended: true,
      },
      {
        name: "Microneedling with PRF",
        slug: "microneedling",
        description:
          "Stimulates cellular renewal to fade pigmentation while improving overall skin quality. Safe for most skin types.",
        recommended: true,
      },
      {
        name: "HydraFacial",
        slug: "hydrafacial",
        description:
          "With brightening boosters, HydraFacial can help improve mild pigmentation and overall radiance.",
      },
    ],
    tips: [
      "Sunscreen is non-negotiable—UV exposure makes pigmentation worse",
      "Be patient—pigmentation takes time to fade",
      "Don't pick at skin—inflammation causes more pigmentation",
      "Consider a prescription-strength retinoid and hydroquinone if appropriate",
      "If you have melasma, address hormonal factors if possible",
    ],
    image: "https://images.pexels.com/photos/3985311/pexels-photo-3985311.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "weight-management",
    slug: "weight-management",
    name: "Weight Management",
    tagline: "Medical support for sustainable weight loss",
    description:
      "If you've struggled to lose weight despite diet and exercise, you're not alone—and it's not just willpower. Weight is influenced by genetics, hormones, metabolism, and other factors beyond simple calories in/calories out. At Healinque, Dr. Shirazi offers physician-supervised weight management programs that address the underlying factors making weight loss difficult.",
    causes: [
      "Hormonal imbalances (thyroid, insulin, cortisol)",
      "Genetics and metabolism",
      "Stress and emotional eating",
      "Poor sleep",
      "Medications that promote weight gain",
      "Aging and decreased muscle mass",
    ],
    treatments: [
      {
        name: "GLP-1 Weight Loss",
        slug: "glp1-weight-loss",
        description:
          "Semaglutide and Tirzepatide—the breakthrough medications that reduce appetite and help patients achieve significant, sustainable weight loss.",
        recommended: true,
      },
      {
        name: "Hormone Therapy (BHRT)",
        slug: "hormone-therapy",
        description:
          "Optimizing hormones can address metabolic factors that make weight loss difficult.",
      },
      {
        name: "IV Therapy",
        slug: "iv-therapy",
        description:
          "Support your metabolism and energy with custom nutrient formulations.",
      },
      {
        name: "Peptide Therapy",
        slug: "peptides",
        description:
          "Certain peptides can support fat metabolism and muscle retention during weight loss.",
      },
    ],
    tips: [
      "Focus on protein—it supports muscle retention and satiety",
      "Prioritize sleep—poor sleep disrupts hunger hormones",
      "Manage stress—cortisol promotes abdominal fat storage",
      "Build muscle—it increases your metabolic rate",
      "Work with a physician—there may be underlying factors affecting your ability to lose weight",
    ],
    image: "https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "low-energy",
    slug: "low-energy",
    name: "Low Energy & Fatigue",
    tagline: "Restore your vitality from the inside out",
    description:
      "Chronic fatigue and low energy affect every aspect of your life—work, relationships, exercise, even your appearance. While sometimes caused by lifestyle factors, persistent fatigue often has underlying causes that need to be addressed. As an Internal Medicine physician, Dr. Shirazi can investigate root causes and provide treatments that restore your energy and vitality.",
    causes: [
      "Hormonal imbalances (thyroid, testosterone, estrogen, cortisol)",
      "Nutritional deficiencies (B12, iron, vitamin D)",
      "Poor sleep quality or sleep disorders",
      "Chronic stress and adrenal fatigue",
      "Inflammation and oxidative stress",
      "Mitochondrial dysfunction",
      "Underlying medical conditions",
    ],
    treatments: [
      {
        name: "Hormone Therapy (BHRT)",
        slug: "hormone-therapy",
        description:
          "Optimizing hormones—especially thyroid, testosterone, and estrogen—can dramatically improve energy levels.",
        recommended: true,
      },
      {
        name: "IV Therapy & NAD+",
        slug: "iv-therapy",
        description:
          "Direct nutrient delivery and NAD+ infusions support cellular energy production at the deepest level.",
        recommended: true,
      },
      {
        name: "Peptide Therapy",
        slug: "peptides",
        description:
          "Certain peptides support energy, sleep, and recovery for improved vitality.",
      },
    ],
    tips: [
      "Prioritize sleep—aim for 7-9 hours of quality sleep",
      "Manage stress through meditation, exercise, or therapy",
      "Get your hormones tested—imbalances are common and treatable",
      "Consider nutritional testing to identify deficiencies",
      "Move your body—regular exercise actually increases energy over time",
    ],
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "hormone-imbalance",
    slug: "hormone-imbalance",
    name: "Hormone Imbalance",
    tagline: "Balance your hormones, transform your life",
    description:
      "Hormones regulate nearly every process in your body—metabolism, mood, sleep, libido, skin quality, and more. When they're out of balance, you feel it everywhere. Whether you're experiencing menopause, andropause, thyroid issues, or other hormonal concerns, Dr. Shirazi's Internal Medicine background allows her to properly evaluate and treat hormonal imbalances for comprehensive restoration of wellness.",
    causes: [
      "Menopause and perimenopause (women)",
      "Andropause/low testosterone (men)",
      "Thyroid dysfunction",
      "Chronic stress (adrenal hormones)",
      "Poor sleep",
      "Certain medications",
      "Environmental factors and endocrine disruptors",
    ],
    treatments: [
      {
        name: "Bioidentical Hormone Therapy (BHRT)",
        slug: "hormone-therapy",
        description:
          "Custom hormone protocols using bioidentical hormones that are molecularly identical to what your body produces naturally.",
        recommended: true,
      },
      {
        name: "Peptide Therapy",
        slug: "peptides",
        description:
          "Certain peptides can support hormone production and regulation naturally.",
      },
      {
        name: "IV Therapy",
        slug: "iv-therapy",
        description:
          "Nutritional support for hormone health and overall vitality.",
      },
    ],
    tips: [
      "Get comprehensive hormone testing—not just basic panels",
      "Support hormone health with adequate sleep and stress management",
      "Limit exposure to endocrine disruptors (plastics, certain chemicals)",
      "Maintain a healthy weight—body fat affects hormone levels",
      "Work with a physician who understands hormone optimization, not just 'normal ranges'",
    ],
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function getConcernBySlug(slug: string): Concern | undefined {
  return concerns.find((c) => c.slug === slug);
}
