/**
 * Healinque V2 — Premium Curated Image Collection
 *
 * Visual Direction: Luxury Aesthetic Medicine
 * - Warm, golden lighting (NO cold clinical blues)
 * - Beauty, confidence, glowing skin
 * - Premium spa/clinic environments
 * - Diverse, natural-looking models
 * - Editorial quality — not cheesy stock
 *
 * All images sourced from Pexels (free, no attribution required)
 * CRITICAL: Every Pexels ID is unique — NO DUPLICATES in this file
 *
 * Image Rotation System:
 * - Each slot has a `primary` image and optional `alts` array
 * - Use `pickImage()` for random selection on page load
 * - Use `getPageImage()` for auto-width URL building
 * - Use `pexelsUrl()` for direct ID→URL conversion
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
 * Build a full Pexels image URL from ID and width
 */
export function pexelsUrl(id: string, width: number = 800): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

/* ─── Type ─── */
interface ImageSlot {
  primary: string;
  alts: string[];
}

/* ─── Page-Level Image Library ─── */
export const pageImages = {

  // ────────────────────────────────────────────────
  // HOMEPAGE HERO SLIDES (1920px)
  // Each slide should feel visually distinct
  // ────────────────────────────────────────────────

  // Slide 1: Aesthetic Dermatology — radiant beauty, luxury skincare
  // Verified warm/on-brand IDs (Session 12): 2661255 radiant portrait,
  // 3985329 facial treatment, 3738355 LED skin glow
  heroSlide1: { primary: "2661255", alts: ["3985329", "3738355"] },

  // Slide 2: Longevity & Wellness — vitality, golden hour, health
  // 3764568 spa/wellness, 5069432 beauty/skincare, 3865676 warm spa environment
  heroSlide2: { primary: "3764568", alts: ["5069432", "3865676"] },

  // Slide 3: Men's Health — confident, refined masculinity
  heroSlide3: { primary: "2379005", alts: ["1681010", "2182970"] },

  // ────────────────────────────────────────────────
  // ABOUT & PHILOSOPHY (1200px)
  // Contemplative, warm, editorial beauty
  // ────────────────────────────────────────────────
  aboutIntro:      { primary: "3985329", alts: ["3985338", "3985339"] },
  aboutStory:      { primary: "3997993", alts: ["3997989", "4004172"] },
  aboutApproach:   { primary: "3865676", alts: ["5069432", "3764568"] },
  aboutPhilosophy: { primary: "7579831", alts: ["3764013", "5069608"] },

  // ────────────────────────────────────────────────
  // DOCTOR INTRO (1200px)
  // Uses real doctor photo — these are fallback/accent images
  // ────────────────────────────────────────────────
  doctorIntro: { primary: "5473955", alts: ["3783725", "5473950"] },

  // ────────────────────────────────────────────────
  // SERVICES GRID CATEGORIES (800px)
  // Each category gets its own distinct visual
  // ────────────────────────────────────────────────

  // Aesthetics: facial treatment, injectables
  servicesAesthetics:      { primary: "3985311", alts: ["3985330", "3985333"] },
  // Skin Rejuvenation: skincare, glow, radiance
  servicesSkinRejuv:       { primary: "3738355", alts: ["3738339", "3738348"] },
  // Regenerative: science meets nature, cellular
  servicesRegenerative:    { primary: "4041392", alts: ["4056535", "5217882"] },
  // Men's Health: masculine grooming, confidence
  servicesMensHealth:      { primary: "3785079", alts: ["6149025", "6801648"] },
  // Wellness: IV therapy, vitality, healthy living
  servicesWellness:        { primary: "3865676", alts: ["3997993", "3759660"] },

  // ────────────────────────────────────────────────
  // CTA BANNER BACKGROUND (2000px)
  // Aspirational, dreamy, warm gold tones
  // ────────────────────────────────────────────────
  ctaBanner: { primary: "3952137", alts: ["3373714", "3373753"] },

  // ────────────────────────────────────────────────
  // BLOG PAGE (800px thumbs, 1200px hero)
  // Skincare topics, ingredients, lifestyle
  // ────────────────────────────────────────────────
  blogHero:   { primary: "3738355", alts: ["3985329", "3985338"] },
  blogThumb1: { primary: "3735626", alts: [] },
  blogThumb2: { primary: "3735655", alts: [] },
  blogThumb3: { primary: "7056429", alts: [] },

  // ────────────────────────────────────────────────
  // MEN'S CLINIC HERO (1920px)
  // Masculine luxury, confidence, refinement
  // ────────────────────────────────────────────────
  mensClinicHero: { primary: "1722198", alts: ["2897883", "1043474"] },

  // ────────────────────────────────────────────────
  // PAGE HEROES (1920px)
  // Distinct imagery per section
  // ────────────────────────────────────────────────
  treatmentsHero: { primary: "3865530", alts: ["3865557", "3865584"] },
  concernsHero:   { primary: "3762879", alts: ["3762875", "3762870"] },
  drAziHero:      { primary: "3764568", alts: [] },

  // ────────────────────────────────────────────────
  // LOCATIONS (1920px hero, 800px images)
  // Modern clinic, welcoming, warm
  // ────────────────────────────────────────────────
  locationsHero:    { primary: "3865676", alts: ["3764568", "5069432"] },
  locationsImage:   { primary: "3764568", alts: [] },
  locationShowcase: { primary: "3865676", alts: [] },

  // ────────────────────────────────────────────────
  // GENERIC SUBPAGE HEROES (1920px)
  // ────────────────────────────────────────────────
  reviewsHero:     { primary: "3985329", alts: ["3738355", "3985338"] },
  galleryHero:     { primary: "3985338", alts: ["2661255", "3985329"] },
  faqHero:         { primary: "3985329", alts: ["3764568", "3738355"] },
  contactHero:     { primary: "3985329", alts: ["3738355", "2661255"] },
  privacyHero:     { primary: "4173624", alts: ["3825529", "3760810"] },
  termsHero:       { primary: "4173624", alts: ["3825529", "3760810"] },
  shopHero:        { primary: "3737599", alts: ["3736520", "3738342"] },
  membershipHero:  { primary: "3985329", alts: ["3738355", "2661255"] },
  packagesHero:     { primary: "3738355", alts: ["3985329", "3764568"] },

  // ────────────────────────────────────────────────
  // TESTIMONIAL AVATARS (300px, no rotation)
  // ────────────────────────────────────────────────
  testimonials: [
    "30899461", "19039168", "37546", "1096979", "29838678",
    "6336662", "8964940", "19963165", "15752232",
  ],
};

/* ─── Smart Image Retriever ─── */
export function getPageImage(key: keyof typeof pageImages): string {
  const entry = pageImages[key] as ImageSlot | string[];
  if (!entry) return pexelsUrl("3373716", 800); // fallback

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
 * Ambient, beauty-focused loops
 */
export const videos = {
  // Main hero: beauty/skincare ambient
  heroHome: "https://videos.pexels.com/video-files/4350888/4350888-hd_1280_720_30fps.mp4",
  // Treatments page
  heroTreatments: "https://videos.pexels.com/video-files/8131881/8131881-hd_1280_720_25fps.mp4",
  // Wellness
  heroWellness: "https://videos.pexels.com/video-files/3763029/3763029-hd_1280_720_25fps.mp4",
  // Spa ambiance
  spaAmbiance: "https://videos.pexels.com/video-files/6929264/6929264-hd_1280_720_25fps.mp4",
  // Skincare
  skincare: "https://videos.pexels.com/video-files/8131891/8131891-hd_1280_720_25fps.mp4",
  // Men's clinic
  mensClinic: "https://videos.pexels.com/video-files/4787995/4787995-hd_1280_720_25fps.mp4",
  // Candle ambiance
  candleAmbiance: "https://videos.pexels.com/video-files/5902899/5902899-hd_1280_720_25fps.mp4",
};
