export interface LocationPage {
  slug: string;
  city: string;
  region: string;
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  localInfo: string;
  distance?: string;
  nearbyAreas: string[];
  popularTreatments: string[];
}

export const locationPages: LocationPage[] = [
  {
    slug: "poway",
    city: "Poway",
    region: "San Diego County",
    title: "Medical Spa in Poway, CA | Healinque Wellness Clinic",
    description: "Premier medical spa in Poway offering Botox, fillers, laser treatments, and wellness services. Board-certified physician Dr. Azi Shirazi. Book today.",
    heroTitle: "Poway's Premier Medical Spa",
    heroSubtitle: "Your Local Destination",
    localInfo: "Located in the heart of Poway, Healinque Wellness Clinic serves residents of Poway and surrounding San Diego communities. Our convenient location on Poway Road offers easy access and ample parking.",
    nearbyAreas: ["Rancho Bernardo", "Scripps Ranch", "Sabre Springs", "Carmel Mountain Ranch"],
    popularTreatments: ["botox-dysport", "dermal-fillers", "glp1-weight-loss", "hydrafacial"],
  },
  {
    slug: "san-diego",
    city: "San Diego",
    region: "San Diego County",
    title: "Medical Spa San Diego | Aesthetics & Wellness | Healinque",
    description: "Top-rated medical spa serving San Diego. Botox, dermal fillers, laser treatments, weight loss by board-certified physician. North County location.",
    heroTitle: "San Diego's Trusted Medical Spa",
    heroSubtitle: "Serving All of San Diego",
    localInfo: "While located in Poway, Healinque Wellness Clinic proudly serves patients from throughout San Diego County. Our North County location offers a peaceful retreat from the city while remaining accessible from all San Diego neighborhoods.",
    distance: "20-30 minutes from downtown San Diego",
    nearbyAreas: ["La Jolla", "Del Mar", "Carmel Valley", "Rancho Santa Fe", "Escondido"],
    popularTreatments: ["botox-dysport", "dermal-fillers", "laser-treatments", "iv-therapy"],
  },
  {
    slug: "rancho-bernardo",
    city: "Rancho Bernardo",
    region: "San Diego County",
    title: "Medical Spa Near Rancho Bernardo | Healinque Wellness",
    description: "Medical aesthetics clinic minutes from Rancho Bernardo. Expert Botox, fillers, lasers, and wellness. Board-certified physician Dr. Azi Shirazi.",
    heroTitle: "Medical Spa Near Rancho Bernardo",
    heroSubtitle: "Just Minutes Away",
    localInfo: "Healinque is just 10 minutes from Rancho Bernardo, offering a convenient location for RB residents seeking premium aesthetic and wellness services. Easy access via Pomerado Road.",
    distance: "10 minutes from Rancho Bernardo",
    nearbyAreas: ["Poway", "Scripps Ranch", "4S Ranch", "Carmel Mountain Ranch"],
    popularTreatments: ["botox-dysport", "dermal-fillers", "hormone-optimization", "microneedling"],
  },
  {
    slug: "scripps-ranch",
    city: "Scripps Ranch",
    region: "San Diego County",
    title: "Medical Spa Near Scripps Ranch | Healinque Wellness Clinic",
    description: "Aesthetic medicine and wellness near Scripps Ranch. Botox, fillers, laser treatments, weight loss. Expert care by Dr. Azi Shirazi.",
    heroTitle: "Medical Spa Near Scripps Ranch",
    heroSubtitle: "Your Neighborhood Destination",
    localInfo: "Scripps Ranch residents enjoy quick access to Healinque via Scripps Poway Parkway. Our boutique medical spa offers a welcome alternative to busy commercial centers.",
    distance: "12 minutes from Scripps Ranch",
    nearbyAreas: ["Poway", "Rancho Bernardo", "Miramar", "Sabre Springs"],
    popularTreatments: ["botox-dysport", "hydrafacial", "prp-therapy", "glp1-weight-loss"],
  },
  {
    slug: "escondido",
    city: "Escondido",
    region: "San Diego County",
    title: "Medical Spa Near Escondido | Healinque Wellness Clinic",
    description: "Premium medical aesthetics serving Escondido. Botox, dermal fillers, laser treatments, and medical weight loss by board-certified physician.",
    heroTitle: "Medical Spa for Escondido Residents",
    heroSubtitle: "Worth the Short Drive",
    localInfo: "Escondido residents drive just 15-20 minutes to access Healinque's premium aesthetic and wellness services. Our expertise and personalized care make us worth the short trip.",
    distance: "15-20 minutes from Escondido",
    nearbyAreas: ["Poway", "Rancho Bernardo", "San Marcos", "Valley Center"],
    popularTreatments: ["botox-dysport", "dermal-fillers", "laser-treatments", "iv-therapy"],
  },
];

export function getLocationBySlug(slug: string): LocationPage | undefined {
  return locationPages.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locationPages.map((l) => l.slug);
}

