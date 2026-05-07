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
    title: "Physician-Led Aesthetics & Wellness | Healinque in Poway, CA",
    description: "Healinque Wellness & Longevity Center is located in Poway, California. Physician-led aesthetic medicine, regenerative care, and men's clinic. Serving Rancho Bernardo, Scripps Ranch, and surrounding areas.",
    heroTitle: "Healinque — In Poway, Serving San Diego County",
    heroSubtitle: "Physician-Led Aesthetics & Longevity",
    localInfo: "Healinque is located at 15644 Pomerado Road, Suite 103, Poway, CA 92064. I see patients from across San Diego County, including Rancho Bernardo, Scripps Ranch, Escondido, San Marcos, and Del Mar. Easy parking, convenient hours, and a focus on natural, medically sound results.",
    nearbyAreas: ["Rancho Bernardo", "Scripps Ranch", "Sabre Springs", "Carmel Mountain Ranch"],
    popularTreatments: ["botox-dysport", "dermal-fillers", "glp1-weight-loss", "hydrafacial"],
  },
  {
    slug: "rancho-bernardo",
    city: "Rancho Bernardo",
    region: "San Diego County",
    title: "Medical Aesthetics Near Rancho Bernardo | Healinque",
    description: "Healinque serves Rancho Bernardo residents from the Poway clinic, just 10 minutes away. Physician-led Botox, fillers, laser treatments, and wellness services.",
    heroTitle: "Aesthetic Medicine for Rancho Bernardo Residents",
    heroSubtitle: "Located in Nearby Poway",
    localInfo: "Rancho Bernardo residents enjoy convenient access to Healinque, located just 10 minutes away in Poway. The physician-led practice offers personalized aesthetic medicine and wellness treatments in a refined, discreet setting. From Rancho Bernardo, take Pomerado Road south to the clinic at Suite 103.",
    distance: "10 minutes from Rancho Bernardo",
    nearbyAreas: ["Poway", "Scripps Ranch", "4S Ranch", "Carmel Mountain Ranch"],
    popularTreatments: ["botox-dysport", "dermal-fillers", "hormone-optimization", "microneedling"],
  },
  {
    slug: "scripps-ranch",
    city: "Scripps Ranch",
    region: "San Diego County",
    title: "Aesthetic Medicine Near Scripps Ranch | Healinque Poway",
    description: "Scripps Ranch patients trust Healinque for physician-led aesthetic treatments. Located in Poway, just 12 minutes away via Scripps Poway Parkway.",
    heroTitle: "Aesthetic Medicine for Scripps Ranch Patients",
    heroSubtitle: "A Short Drive to Refined Care",
    localInfo: "Scripps Ranch residents can reach Healinque in about 12 minutes via Scripps Poway Parkway. The boutique clinic in Poway offers a refined alternative to commercial chain med spas, with personalized care from Dr. Shirazi and a focus on natural, medically sound results.",
    distance: "12 minutes from Scripps Ranch",
    nearbyAreas: ["Poway", "Rancho Bernardo", "Miramar", "Sabre Springs"],
    popularTreatments: ["botox-dysport", "hydrafacial", "prp-therapy", "glp1-weight-loss"],
  },
  {
    slug: "escondido",
    city: "Escondido",
    region: "San Diego County",
    title: "Physician-Led Aesthetics Near Escondido | Healinque",
    description: "Escondido residents seeking physician-led aesthetic medicine can reach Healinque in Poway in 15-20 minutes. Expert Botox, fillers, laser treatments, and wellness.",
    heroTitle: "Premium Aesthetics for Escondido Residents",
    heroSubtitle: "Worth the Short Drive",
    localInfo: "Escondido residents drive 15-20 minutes to reach Healinque's physician-led practice in Poway. Dr. Shirazi's approach to natural, medically sound aesthetic medicine and my focus on personalized care make the short commute worthwhile for patients seeking authentic results.",
    distance: "15-20 minutes from Escondido",
    nearbyAreas: ["Poway", "Rancho Bernardo", "San Marcos", "Valley Center"],
    popularTreatments: ["botox-dysport", "dermal-fillers", "laser-treatments", "iv-therapy"],
  },
  {
    slug: "san-marcos",
    city: "San Marcos",
    region: "San Diego County",
    title: "Aesthetic Medicine Near San Marcos | Healinque Wellness",
    description: "San Marcos patients can reach Healinque's physician-led practice in Poway in about 20 minutes. Aesthetic treatments, laser therapy, and longevity medicine.",
    heroTitle: "Aesthetic Wellness for San Marcos Residents",
    heroSubtitle: "Located in Poway",
    localInfo: "San Marcos residents seeking refined aesthetic medicine can reach Healinque in Poway in approximately 20 minutes. My focus on natural results and medically sound treatments makes the clinic a trusted choice for patients throughout North County San Diego.",
    distance: "20 minutes from San Marcos",
    nearbyAreas: ["Escondido", "Poway", "Rancho Bernardo", "Vista"],
    popularTreatments: ["botox-dysport", "dermal-fillers", "chemical-peels", "iv-therapy"],
  },
  {
    slug: "del-mar",
    city: "Del Mar",
    region: "San Diego County",
    title: "Physician-Led Aesthetics Serving Del Mar | Healinque",
    description: "Del Mar residents seeking sophisticated aesthetic medicine can reach Healinque's Poway clinic in 20-25 minutes. Physician-led treatments and longevity care.",
    heroTitle: "Refined Aesthetics for Del Mar Residents",
    heroSubtitle: "Poway's Premier Aesthetic Practice",
    localInfo: "Del Mar residents appreciate Healinque's physician-led approach to aesthetic medicine. Located in Poway, just 20-25 minutes away, the practice offers personalized care and a focus on natural, sophisticated results that align with the refined aesthetic of coastal San Diego.",
    distance: "20-25 minutes from Del Mar",
    nearbyAreas: ["Poway", "Rancho Bernardo", "Carmel Valley", "La Jolla"],
    popularTreatments: ["botox-dysport", "dermal-fillers", "prp-therapy", "microneedling"],
  },
];

export function getLocationBySlug(slug: string): LocationPage | undefined {
  return locationPages.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locationPages.map((l) => l.slug);
}

