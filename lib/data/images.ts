/**
 * Healinque — Approved Image Pool (Session 20)
 *
 * Source of truth: the 66 IDs that survived three rounds of human review
 * (Session 12 warm-pool → Session 17/18/19 additions → Session 20 v2/v3
 * curation + triage). Every ID in this file passed Finder-triage and is
 * approved for public use.
 *
 * Visual Direction: Luxury Aesthetic Medicine
 * - Warm, golden lighting (NO cold clinical blues)
 * - Beauty, confidence, glowing skin
 * - Practitioner SERVICING the client (not self-application)
 * - Genuine demographic diversity (not sibling shots of one model)
 * - Smiling / warm faces (not pharma-cold serene)
 * - Premium spa/clinic environments
 *
 * Classification rules applied (per Session 20 user directive):
 * - Male IDs (4 total: 6763625, 8159665, 2379005, 3785079) live ONLY on
 *   heroSlide3, servicesMensHealth, mensClinicHero — NOT homepage slide 1/2,
 *   aboutIntro, reviewsHero, or any female-facing slot
 * - Diverse-smiling portraits (bucket C + portrait IDs) rotate across
 *   heroSlide1, aboutIntro, testimonials, concern page alts
 * - Servicing shots (bucket A) anchor servicesAesthetics + treatmentsHero
 * - Wellness-lifestyle (bucket 7) used for servicesWellness + aboutPhilosophy
 * - Location-environment (bucket 8, only 2 survived: 4974567, 433626) used
 *   for locationsHero + locationShowcase. Real clinic interior photography
 *   is pending — see CLAUDE.md Session 20 follow-up.
 *
 * Image Rotation System (kept from Session 5 — per user directive):
 * - Each slot has a `primary` image and an `alts` array of 2-8 rotations
 * - Client components call `pickImage()` for random selection on page load
 * - `pexelsUrl()` serves from local /public/images/stock/{id}.jpg when
 *   NEXT_PUBLIC_IMAGES_LOCAL=true, else falls back to Pexels CDN
 *
 * ─── CDN VERIFICATION ──────────────────────────────────────────
 * All 66 IDs were CDN-verified during their respective curation passes.
 * A CDN 200 confirms the image is LIVE; subject-match was confirmed by
 * user triage in Finder during Session 20.
 */

/* ─── Utilities ─── */

/**
 * Picks a random image from primary + alts array.
 * Call on client side for rotation on page reload.
 */
export function pickImage(primary: string, alts?: string[]): string {
  if (!alts || alts.length === 0) return primary;
  const all = [primary, ...alts];
  return all[Math.floor(Math.random() * all.length)];
}

/**
 * Build an image URL from a Pexels ID.
 *
 * Serves from self-hosted /public/images/stock/{id}.jpg when
 * NEXT_PUBLIC_IMAGES_LOCAL=true (eliminates Pexels dependency).
 * Otherwise falls back to the Pexels CDN.
 */
export function pexelsUrl(id: string, width: number = 800): string {
  if (process.env.NEXT_PUBLIC_IMAGES_LOCAL === "true") {
    return `/images/stock/${id}.jpg`;
  }
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

/**
 * Build an Unsplash image URL from a photo ID.
 * Kept for backwards compatibility; no currently-referenced slots use it.
 */
export function unsplashUrl(photoHash: string, width: number = 800, quality: number = 80): string {
  if (!photoHash.startsWith("photo-")) {
    return `https://source.unsplash.com/${photoHash}/${width}x${Math.round(width * 1.2)}`;
  }
  return `https://images.unsplash.com/${photoHash}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

/* ─── Types ─── */
interface ImageSlot {
  primary: string;
  alts: string[];
}

/* ─── Page-Level Image Library ─── */
export const pageImages = {

  // ────────────────────────────────────────────────
  // HOMEPAGE HERO SLIDES (1920px)
  // Each slide visually distinct; rotates on every page load
  // ────────────────────────────────────────────────

  // Slide 1: Aesthetic Dermatology — diverse smiling female rotation
  // Pulls from Keep pile (Session 12 verified) + v3 C-diverse-smiling bucket
  heroSlide1: {
    primary: "29540830",             // diverse smiling portrait (v3 C)
    alts: [
      "5938650",                     // diverse smiling (v3 C)
      "12437056",                    // diverse smiling (v3 C)
      "30767572",                    // diverse smiling (v3 C)
      "4584638",                     // diverse smiling (v3 C)
      "19456424",                    // diverse smiling (v3 C)
      "6670986",                     // diverse smiling (v3 C)
      "3985329",                     // warm beauty editorial (Keep)
      "3762879",                     // editorial female face (Keep)
    ],
  },

  // Slide 2: Longevity & Wellness — warm happy post-treatment + wellness
  heroSlide2: {
    primary: "19666215",             // happy post-treatment (v3 E)
    alts: [
      "19641836",                    // lying smiling, post-service (v3 E)
      "15023478",                    // happy client (v3 E)
      "3768581",                     // relaxed post-treatment (v3 E)
      "30809947",                    // wellness morning light (v2 #7)
      "3985338",                     // warm beauty (Keep)
      "5069508",                     // warm beauty (Keep)
    ],
  },

  // Slide 3: Men's Health — male editorial rotation
  // Male IDs ONLY live here + servicesMensHealth + mensClinicHero
  heroSlide3: {
    primary: "6763625",              // male editorial (v2 #4)
    alts: [
      "8159665",                     // male editorial (v2 #4)
      "2379005",                     // male confident portrait (Keep)
      "3785079",                     // male editorial (Keep)
    ],
  },

  // ────────────────────────────────────────────────
  // ABOUT & PHILOSOPHY (1200px)
  // ────────────────────────────────────────────────

  // aboutIntro — warm female portrait, patient-facing
  aboutIntro: {
    primary: "3985311",              // warm beauty (Keep)
    alts: [
      "3985330",                     // warm beauty (Keep)
      "3985333",                     // warm beauty (Keep)
      "4586713",                     // editorial (Keep)
      "4586741",                     // editorial (Keep)
      "3762875",                     // editorial face (Keep)
      "29540830",                    // diverse smiling (v3 C)
      "5938650",                     // diverse smiling (v3 C)
    ],
  },

  // aboutStory — environment/team (limited pool — real clinic photos pending)
  // 4974567 + 433626 are the only location-environment survivors
  aboutStory: {
    primary: "4974567",
    alts: ["433626", "3762870", "4586727"],
  },

  // aboutApproach — reflective editorial
  aboutApproach: {
    primary: "3762879",
    alts: ["3762875", "3762870", "4586713", "4586727", "36930338"],
  },

  // aboutPhilosophy — morning-light wellness editorial
  aboutPhilosophy: {
    primary: "30809945",             // wellness lifestyle (v2 #7)
    alts: ["30809946", "30809947", "30809949"],
  },

  // ────────────────────────────────────────────────
  // DOCTOR INTRO (1200px)
  // Real doctor photo lives elsewhere; these are accent/fallback
  // ────────────────────────────────────────────────
  doctorIntro: {
    primary: "5128228",              // warm consultation (v3 B)
    alts: ["7579831", "7659873"],
  },

  // ────────────────────────────────────────────────
  // SERVICES GRID CATEGORIES (800px)
  // ────────────────────────────────────────────────

  // Aesthetics: practitioner performing a service on a client (v3 A)
  // No self-application shots per user directive
  servicesAesthetics: {
    primary: "7582568",              // practitioner servicing (v3 A)
    alts: [
      "7581577",                     // practitioner servicing (v3 A)
      "7581584",                     // practitioner servicing (v3 A)
      "9157201",                     // practitioner servicing (v3 A)
      "5069494",                     // practitioner servicing (v3 A)
      "7446671",                     // practitioner servicing (v3 A)
      "3985311",                     // warm beauty (Keep)
    ],
  },

  // Skin Rejuvenation: professional skincare product application
  servicesSkinRejuv: {
    primary: "3985325",              // skincare close-up (v2 #2)
    alts: [
      "3985331",                     // skincare close-up (v2 #2)
      "6948184",                     // skincare close-up (v2 #2)
      "6543355",                     // skincare close-up (v2 #2)
      "6543481",                     // skincare close-up (v2 #2)
      "7321494",                     // skincare close-up (v2 #2)
      "7321547",                     // skincare close-up (v2 #2)
      "7321714",                     // skincare close-up (v2 #2)
      "3985338",                     // warm beauty (Keep)
    ],
  },

  // Regenerative: in-treatment editorial moments
  servicesRegenerative: {
    primary: "4889036",              // medspa clinic (v2 #3)
    alts: ["8101520", "6925527", "6925487", "6925539", "7010961"],
  },

  // Men's Health: male editorial only
  servicesMensHealth: {
    primary: "3785079",              // male editorial (Keep)
    alts: ["2379005", "6763625", "8159665"],
  },

  // Wellness: morning-light lifestyle
  servicesWellness: {
    primary: "30809947",             // wellness (v2 #7)
    alts: ["30809945", "30809946", "30809949", "19666215", "3768581"],
  },

  // ────────────────────────────────────────────────
  // CTA BANNER BACKGROUND (2000px)
  // ────────────────────────────────────────────────
  ctaBanner: {
    primary: "3985329",              // warm beauty (Keep)
    alts: ["3762879", "3762875", "4586713", "3985338"],
  },

  // ────────────────────────────────────────────────
  // BLOG PAGE (800px thumbs, 1200px hero)
  // ────────────────────────────────────────────────
  blogHero: {
    primary: "3762879",              // editorial face (Keep)
    alts: ["3762875", "3762870", "4586713", "4586741", "3985330", "3985333"],
  },
  // Blog thumbs — use product flat-lays (distinct per thumb)
  blogThumb1: { primary: "34220525", alts: [] },
  blogThumb2: { primary: "34220532", alts: [] },
  blogThumb3: { primary: "34220536", alts: [] },

  // ────────────────────────────────────────────────
  // MEN'S CLINIC HERO (1920px)
  // Male only — per user classification directive
  // ────────────────────────────────────────────────
  mensClinicHero: {
    primary: "6763625",              // male editorial (v2 #4)
    alts: ["8159665", "2379005", "3785079"],
  },

  // ────────────────────────────────────────────────
  // PAGE HEROES (1920px)
  // ────────────────────────────────────────────────
  treatmentsHero: {
    primary: "4889036",              // in-treatment moment (v2 #3)
    alts: ["8101520", "6925527", "6925487", "6925539", "7010961", "7582568"],
  },
  concernsHero: {
    primary: "3762879",              // editorial face (Keep)
    alts: ["3762875", "3762870", "4586713", "4586741", "3985311", "3985329"],
  },
  drAziHero: {
    primary: "3985329",
    alts: ["3985338", "3762879"],
  },

  // ────────────────────────────────────────────────
  // LOCATIONS (1920px hero, 1200px images)
  // NOTE: Only 2 location-environment IDs survived triage.
  // Real clinic photography is pending — see CLAUDE.md Session 20.
  // ────────────────────────────────────────────────
  locationsHero: {
    primary: "4974567",              // location environment (v2 #8)
    alts: ["433626", "3762879"],
  },
  locationsImage: {
    primary: "4974567",
    alts: ["433626"],
  },
  locationShowcase: {
    primary: "4974567",
    alts: ["433626"],
  },

  // ────────────────────────────────────────────────
  // GENERIC SUBPAGE HEROES (1920px)
  // ────────────────────────────────────────────────

  // Reviews: happy post-treatment + diverse smiling
  reviewsHero: {
    primary: "19666215",             // happy post-treatment (v3 E)
    alts: ["19641836", "15023478", "3768581", "29540830", "5938650", "6670986"],
  },

  // Gallery: beauty close-ups from Keep pile
  galleryHero: {
    primary: "3985338",
    alts: ["3985311", "3985330", "3985333", "5069508", "3985329"],
  },

  // FAQ: warm editorial
  faqHero: {
    primary: "3985329",
    alts: ["3985338", "3762875", "6975466", "4586741"],
  },

  // Contact: warm consultation (v3 B)
  contactHero: {
    primary: "5128228",              // warm consultation (v3 B)
    alts: ["7579831", "7659873", "19666215", "3985329"],
  },

  // Privacy / Terms: neutral editorial
  privacyHero: {
    primary: "4586713",
    alts: ["4586741", "4586727", "3762870"],
  },
  termsHero: {
    primary: "4586713",
    alts: ["4586741", "4586727", "3762870"],
  },

  // Shop: product flat-lays
  shopHero: {
    primary: "34220525",
    alts: ["34220532", "34220536"],
  },

  // Memberships + Packages: aspirational beauty
  membershipHero: {
    primary: "3985329",
    alts: ["3985338", "3985311", "3762879", "19666215"],
  },
  packagesHero: {
    primary: "3985338",
    alts: ["3985329", "3985311", "19666215", "3762879"],
  },

  // ────────────────────────────────────────────────
  // TESTIMONIAL AVATARS (300px, no rotation)
  // Diverse smiling faces for testimonial cards
  // ────────────────────────────────────────────────
  testimonials: [
    "29540830", "5938650", "12437056", "30767572", "4584638",
    "19456424", "6670986", "9774560", "19641836",
  ],
};

/* ─── Smart Image Retriever ─── */
export function getPageImage(key: keyof typeof pageImages): string {
  const entry = pageImages[key] as ImageSlot | string[];
  if (!entry) return pexelsUrl("3985329", 800); // fallback to a Keep-pile ID

  // Handle testimonials array
  if (Array.isArray(entry)) {
    return pexelsUrl(entry[0], 300);
  }

  // Determine width from key name
  const width = key.includes("Hero") || key.includes("Slide") ? 1920
    : key.includes("Banner") ? 2000
    : key.includes("location") ? 1200
    : 800;

  // Pick random from primary + alts
  if (entry.alts && entry.alts.length > 0) {
    return pexelsUrl(pickImage(entry.primary, entry.alts), width);
  }

  return pexelsUrl(entry.primary, width);
}

/* ─── Videos ─── */
/**
 * Hero videos — using HD (1280x720) instead of UHD for performance
 * Ambient, beauty-focused loops.
 *
 * Session 24: Hero carousel promoted video from a 30%-opacity ambient accent
 * to the PRIMARY visual on desktop (one matched compressed video per slide).
 * Each slide in `components/sections/hero.tsx` pulls from `videos.heroSlide1/2/3`
 * below. Still-image posters remain the mobile + prefers-reduced-motion fallback.
 *
 * Subject rubric per slide (matches user direction — "patient/model portraits
 * + editorial skincare close-ups" — with slide 3 staying men's-appropriate):
 *   heroSlide1: general physician-led aesthetic tone (wellness/editorial)
 *   heroSlide2: women's restraint / editorial skincare close-up
 *   heroSlide3: Men's Clinic Fridays — male-appropriate b-roll
 *
 * These are verified-live compressed Pexels HD URLs already in use elsewhere
 * in the codebase (prior ambient accent + mens-clinic page). Swap safely.
 */
export const videos = {
  // Session 24: Primary hero carousel videos, one per slide
  heroSlide1: "https://videos.pexels.com/video-files/3763029/3763029-hd_1280_720_25fps.mp4", // aesthetic/wellness ambient
  heroSlide2: "https://videos.pexels.com/video-files/8131891/8131891-hd_1280_720_25fps.mp4", // editorial skincare close-up
  heroSlide3: "https://videos.pexels.com/video-files/4787995/4787995-hd_1280_720_25fps.mp4", // men's grooming/clinic

  // Legacy / ambient aliases kept for other pages that reference them
  heroHome: "https://videos.pexels.com/video-files/4350888/4350888-hd_1280_720_30fps.mp4",
  heroTreatments: "https://videos.pexels.com/video-files/8131881/8131881-hd_1280_720_25fps.mp4",
  heroWellness: "https://videos.pexels.com/video-files/3763029/3763029-hd_1280_720_25fps.mp4",
  spaAmbiance: "https://videos.pexels.com/video-files/6929264/6929264-hd_1280_720_25fps.mp4",
  skincare: "https://videos.pexels.com/video-files/8131891/8131891-hd_1280_720_25fps.mp4",
  mensClinic: "https://videos.pexels.com/video-files/4787995/4787995-hd_1280_720_25fps.mp4",
  candleAmbiance: "https://videos.pexels.com/video-files/5902899/5902899-hd_1280_720_25fps.mp4",
};
