/**
 * Healinque Site Configuration
 * Healinque Wellness & Longevity Center
 *
 * SOURCE OF TRUTH — all pages should pull from this file. Do not hard-code
 * credentials, address, hours, or pricing in JSX. Updated April 14, 2026
 * to reconcile against Dr. Shirazi's official website questionnaire.
 */

export const siteConfig = {
  // Business Information
  name: "Healinque Wellness & Longevity Center",
  shortName: "Healinque",
  tagline: "Physician-led aesthetics & longevity in Poway.",
  description:
    "Healinque Wellness & Longevity Center is a physician-led aesthetic and longevity practice in Poway, California, founded by Dr. Azi Shirazi, MD. Personally tested treatments, natural results, and a dedicated men's clinic.",

  // Contact Information
  // NOTE: phone is a placeholder — confirm and replace before launch.
  phone: "(858) 337-7999",
  phoneRaw: "8583377999",
  email: "info@healinque.com",

  // Physical Address
  address: {
    street: "15644 Pomerado Road",
    suite: "Suite 103",
    city: "Poway",
    state: "CA",
    zip: "92064",
    full: "15644 Pomerado Road, Suite 103, Poway, CA 92064",
    googleMapsUrl:
      "https://maps.google.com/?q=15644+Pomerado+Road+Suite+103+Poway+CA+92064",
  },

  // Business Hours
  hours: {
    display: [
      "Mon: 10:00 AM – 12:00 PM, 1:00 PM – 6:00 PM",
      "Tue: Closed",
      "Wed: 10:00 AM – 12:00 PM, 1:00 PM – 6:00 PM",
      "Thu: Closed",
      "Fri: 10:00 AM – 12:00 PM, 1:00 PM – 6:00 PM (Men's Clinic Focus Day)",
      "Sat: 10:00 AM – 1:00 PM",
      "Sun: Closed",
    ],
    short: [
      { day: "Mon", hours: "10am–12pm, 1pm–6pm" },
      { day: "Tue", hours: "Closed" },
      { day: "Wed", hours: "10am–12pm, 1pm–6pm" },
      { day: "Thu", hours: "Closed" },
      { day: "Fri", hours: "10am–12pm, 1pm–6pm", note: "Men's Clinic" },
      { day: "Sat", hours: "10am–1pm" },
      { day: "Sun", hours: "Closed" },
    ],
  },

  // Social Media Links
  social: {
    instagram: "https://instagram.com/ThrivewithDr.Azi",
    facebook: "",
    tiktok: "",
    youtube: "",
  },

  // Booking Configuration
  booking: {
    internalUrl: "/book",
    externalUrl: "", // Pabau booking widget — to be integrated
    consultationFee: 100,
    newPatientOffer: "Book your first consultation",
  },

  // URLs
  urls: {
    baseUrl: "https://healinque.com",
    patientPortal: "/account",
    shop: "/shop",
  },

  // Doctor Information
  doctor: {
    name: "Dr. Azi Shirazi, MD",
    fullName: "Dr. Azadeh Shirazi, MD",
    shortName: "Dr. Shirazi",
    credentials: "MD, Internal Medicine",
    primarySpecialty: "Internal Medicine",
    aestheticTraining:
      "Advanced aesthetic medicine training with leading physician injectors in the United States and Europe",
    medicalSchool: "University of California, San Diego (UCSD)",
    residency: "University of California, San Diego (UCSD)",
    experienceYears: "20+",
    aestheticsYears: "10+",
    philosophy:
      "I believe aesthetics should enhance your natural beauty—not change who you are. My goal is to help every patient feel confident, refreshed, and authentic.",
    story:
      "Dr. Azi Shirazi is a physician with more than 20 years of clinical experience in internal medicine and over a decade in aesthetic medicine. After becoming a mother, she realized how difficult it was to find treatments that delivered natural-looking results without looking overdone. That experience led her to pursue advanced aesthetic training with leading physician injectors in the United States and Europe, and to develop a refined approach focused on enhancement, not alteration. Every treatment offered at Healinque is personally tested and selected by Dr. Shirazi to ensure the highest standard of care.",
    recognition: [
      "Chair, Urgent Care Department (2022–2025)",
      "Top 100 Physicians — San Diego Magazine (2023)",
      "Sharp Healthcare CORE Awards (three-time recipient)",
      "Guest Speaker — SRS and Sharp Healthcare conferences",
    ],
    image: "/images/dr-azi-shirazi.jpg",
    instagramHandle: "@ThrivewithDr.Azi",
  },

  // Policies
  policies: {
    consultationFee: "$100",
    consultationFeeNote: "Credited toward your first treatment.",
    cancellationFee:
      "A $50 fee applies for cancellations made less than 48 hours before your appointment.",
    disclaimer:
      "Results may vary. Individual results are not guaranteed. Treatment recommendations are determined during your consultation with Dr. Shirazi.",
    physicianSupervision:
      "All treatments at Healinque are performed or directly supervised by Dr. Azi Shirazi, MD.",
  },

  // Core Values
  coreValues: ["Natural Results", "Medical Integrity", "Personalized Care"],

  // What makes us different
  differentiators: [
    "Physician-led — every treatment is performed or directly supervised by Dr. Shirazi",
    "20+ years in internal medicine and 10+ years in aesthetic medicine",
    "Whole-body approach combining aesthetics with longevity and metabolic health",
    "Every treatment personally tested and selected by Dr. Shirazi",
    "Dedicated Men's Clinic Fridays — a discreet, focused day for male patients",
  ],

  // Membership — single Elite tier
  membership: {
    name: "Healinque Elite Membership",
    price: 199,
    cadence: "month",
    summary:
      "Monthly IV therapy, member pricing on signature treatments, and priority booking.",
    benefits: [
      "Monthly IV therapy session",
      "10% off Botox and Dysport",
      "10% off chemical peels and microneedling",
      "Priority booking",
      "Exclusive member offers",
    ],
    terms:
      "Membership renews monthly. You can cancel anytime by contacting my team — no long-term commitment.",
  },

  // Signature Packages
  packages: [
    {
      slug: "the-healinque-glow",
      name: "The Healinque Glow",
      price: 899,
      summary:
        "Botox (30 units) paired with a Perfect Derma Peel for refreshed, even-toned skin.",
    },
    {
      slug: "collagen-restore",
      name: "Collagen Restore",
      price: 1800,
      summary:
        "Three sessions of microneedling combined with PRP to rebuild collagen and improve skin texture.",
    },
    {
      slug: "hair-revival",
      name: "Hair Revival",
      price: 4500,
      summary:
        "Six PRP scalp sessions using your own platelet-rich plasma to support hair density. Best for early-to-moderate androgenetic thinning, evaluated case by case.",
    },
    {
      slug: "mens-performance",
      name: "Men's Performance Package",
      price: 2200,
      summary:
        "P-Shot with an optional Botox or PRP add-on. Built for the male patient.",
    },
  ],

  // Pricing Index
  pricing: {
    botoxPerUnit: 12,
    dysportPerUnit: 4.5,
    fillerStarting: 500,
    lipFiller: 500,
    microneedling: { single: 500, package3: 1200 },
    chemicalPeel: 300,
    prp: { single: 750, package3: 2000 },
    pShot: 1700,
    oShot: 1500,
    hairRestoration: { single: 850, package6: 4500 },
    consultation: 100,
    note: "Starting prices shown. Actual pricing is determined during your consultation with Dr. Shirazi based on your goals and treatment plan.",
  },

  // SEO Defaults
  seo: {
    title:
      "Healinque | Physician-Led Aesthetics & Longevity in Poway, CA",
    description:
      "Healinque Wellness & Longevity Center, led by Dr. Azi Shirazi, MD. Physician-led aesthetic medicine, regenerative care, and a dedicated men's clinic in Poway, California.",
    keywords: [
      "med spa Poway",
      "aesthetics Poway",
      "Botox Poway",
      "dermal fillers Poway",
      "PRP hair restoration San Diego",
      "physician-led aesthetics San Diego",
      "longevity medicine San Diego",
      "men's clinic Poway",
      "Dr. Azi Shirazi",
      "Healinque Wellness",
      "Rancho Bernardo med spa",
      "Scripps Ranch aesthetics",
    ],
    ogImage: "/images/og-image.jpg",
  },

  // Service Areas (for local SEO)
  serviceAreas: [
    "Poway",
    "Rancho Bernardo",
    "Scripps Ranch",
    "Escondido",
    "San Marcos",
    "Del Mar",
  ],
};

// Helper functions
export function getFormattedAddress(): string {
  const { street, suite, city, state, zip } = siteConfig.address;
  return suite
    ? `${street}, ${suite}, ${city}, ${state} ${zip}`
    : `${street}, ${city}, ${state} ${zip}`;
}

export function getPhoneLink(): string {
  return siteConfig.phoneRaw ? `tel:${siteConfig.phoneRaw}` : "#";
}

export function getEmailLink(): string {
  return `mailto:${siteConfig.email}`;
}

export default siteConfig;
