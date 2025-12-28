/**
 * Healinque Site Configuration
 * 
 * This file contains all site-wide configuration values.
 * UPDATE THE VALUES MARKED WITH "UPDATE BEFORE LAUNCH" before going live.
 */

export const siteConfig = {
  // Business Information
  name: "Healinque Wellness Clinic",
  tagline: "Aesthetic Medicine & Longevity Center",
  description: "Where natural beauty meets evidence-based longevity medicine. Physician-performed aesthetic treatments in Poway, California.",
  
  // Contact Information - UPDATE BEFORE LAUNCH
  phone: "(858) 337-7999",           // UPDATE BEFORE LAUNCH
  phoneRaw: "+18583377999",          // UPDATE BEFORE LAUNCH (for tel: links)
  email: "hello@healinque.com",      // UPDATE BEFORE LAUNCH
  
  // Physical Address - UPDATE BEFORE LAUNCH
  address: {
    street: "12345 Poway Road",      // UPDATE BEFORE LAUNCH
    suite: "Suite 100",              // UPDATE BEFORE LAUNCH
    city: "Poway",
    state: "CA",
    zip: "92064",
    full: "12345 Poway Road, Suite 100, Poway, CA 92064", // UPDATE BEFORE LAUNCH
    googleMapsUrl: "https://maps.google.com/?q=12345+Poway+Road+Poway+CA+92064", // UPDATE BEFORE LAUNCH
  },
  
  // Business Hours
  hours: {
    weekdays: "Mon – Fri: 9:00 AM – 6:00 PM",
    saturday: "Saturday: 9:00 AM – 2:00 PM",
    sunday: "Sunday: Closed",
    display: [
      "Mon – Fri: 9:00 AM – 6:00 PM",
      "Saturday: 9:00 AM – 2:00 PM",
      "Sunday: Closed",
    ],
  },
  
  // Social Media Links - UPDATE BEFORE LAUNCH
  social: {
    instagram: "https://instagram.com/thrive_with_dr.azi",  // UPDATE BEFORE LAUNCH
    facebook: "https://facebook.com/healinque",              // UPDATE BEFORE LAUNCH
    tiktok: "",                                              // UPDATE BEFORE LAUNCH (optional)
    youtube: "",                                             // UPDATE BEFORE LAUNCH (optional)
  },
  
  // Booking Configuration
  booking: {
    internalUrl: "/book",                                    // Internal booking page
    healthieUrl: "",                                         // UPDATE BEFORE LAUNCH - Healthie booking URL
    newPatientOffer: "$50 off your first injectable treatment",
  },
  
  // URLs
  urls: {
    baseUrl: "https://healinque.com",                        // UPDATE BEFORE LAUNCH
    patientPortal: "/account",
    shop: "/shop",
  },
  
  // Doctor Information
  doctor: {
    name: "Dr. Azadeh 'Azi' Shirazi, MD",
    shortName: "Dr. Azi Shirazi",
    credentials: "Board Certified Internal Medicine",
    experience: "20+ Years Emergency Medicine Experience",
    image: "/images/dr-azi-shirazi.jpg",
    instagramHandle: "@thrive_with_dr.azi",
  },
  
  // SEO Defaults
  seo: {
    title: "Healinque | Premier Medical Spa & Longevity Center in Poway, CA",
    description: "Board-certified physician offering natural aesthetic treatments & regenerative wellness in Poway. Evidence-based longevity medicine. Book your consultation.",
    keywords: [
      "medical spa Poway",
      "aesthetics San Diego",
      "Botox Poway",
      "dermal fillers San Diego",
      "GLP-1 weight loss",
      "longevity medicine",
      "Dr. Azi Shirazi",
    ],
    ogImage: "/images/og-image.jpg",                         // UPDATE BEFORE LAUNCH
  },
  
  // Service Areas (for local SEO)
  serviceAreas: [
    "Poway",
    "Rancho Bernardo",
    "Scripps Ranch",
    "San Diego",
    "Carmel Mountain",
    "4S Ranch",
    "Del Sur",
  ],
};

// Helper function to format address
export function getFormattedAddress(includeGoogleLink = false): string {
  const { street, suite, city, state, zip } = siteConfig.address;
  const formatted = `${street}, ${suite}, ${city}, ${state} ${zip}`;
  return formatted;
}

// Helper function to get phone link
export function getPhoneLink(): string {
  return `tel:${siteConfig.phoneRaw}`;
}

// Helper function to get email link
export function getEmailLink(): string {
  return `mailto:${siteConfig.email}`;
}

export default siteConfig;

