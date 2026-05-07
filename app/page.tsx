import { Metadata } from "next";
import { HomeHero as Hero } from "@/components/sections/hero";
import { SocialProofBar } from "@/components/sections/social-proof-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { DoctorIntro } from "@/components/sections/doctor-intro";
import { ConcernCards } from "@/components/sections/concern-cards";
import { Testimonials } from "@/components/sections/testimonials";
import { LocationCTA } from "@/components/sections/location-cta";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/schema";
import { SafeSection } from "@/components/ui/section-error-boundary";

export const metadata: Metadata = {
  title: "Healinque | Physician-Led Aesthetics & Longevity in Poway, CA",
  description: `Healinque Wellness & Longevity Center, led by Dr. Azi Shirazi, MD. Physician-led aesthetic medicine, regenerative care, and a dedicated men's clinic in Poway, California.`,
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
  alternates: {
    canonical: "https://www.healinque.com",
  },
  openGraph: {
    title: "Healinque | Physician-Led Aesthetics & Longevity Center",
    description: `Physician-led aesthetic medicine, regenerative care, and a dedicated men's clinic in Poway, California.`,
    // Session 18 scaffold: swap to `/images/og-home.jpg` when a bespoke homepage
    // share card is produced. Until then, the root-layout OG already provides a
    // 1200x630 image object; this entry keeps the homepage consistent.
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healinque — Physician-led aesthetic medicine & longevity in Poway, CA",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healinque — Physician-led aesthetics in Poway, CA",
    description:
      "Aesthetic medicine, regenerative care, and a dedicated men's clinic with Dr. Azi Shirazi.",
    images: ["/images/og-image.jpg"],
  },
};

const homepageFaqs = [
  {
    question: "Do I need to be a certain age to have treatments?",
    answer:
      "There is no hard age requirement. Many patients in their late 20s and 30s start with preventative neuromodulators or skin-quality treatments, while others begin addressing volume loss or skin laxity later. During your consultation, Dr. Shirazi evaluates your skin, anatomy, and goals to recommend what makes sense for where you are right now.",
  },
  {
    question: "How long do results typically last?",
    answer:
      "It depends on the treatment. Neuromodulators (Botox, Dysport) typically last 3–4 months. Hyaluronic acid fillers last 6–18 months depending on the product and placement area. Biostimulators like Sculptra can last two years or more. Laser and microneedling results build over a series and can last a year or longer with proper skincare.",
  },
  // Session 22: Mirror first-person FAQ rewrite from faq-section.tsx.
  {
    question: "What should I expect during my first consultation?",
    answer:
      "Your consultation is a 45–60 minute appointment with me. I'll review your medical history, assess your concerns, examine your skin and facial anatomy, and walk you through my recommendations. You'll leave with a written treatment plan, realistic expectations, and transparent pricing. The $100 consultation fee is credited toward any treatment you choose.",
  },
  {
    question: "Are treatments painful?",
    answer:
      "Most injectable treatments feel like a brief pinch. I use topical numbing for procedures like microneedling, laser resurfacing, and PRP. I prioritize comfort — if you're nervous, just tell me. I'll walk you through every step before anything happens.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes. I partner with CareCredit and Cherry for flexible payment plans, including 0% APR options for qualified applicants. I also accept HSA/FSA cards for qualifying services. Ask my team for details when you book.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "I ask for 48 hours' notice for cancellations or rescheduling. Late cancellations or no-shows may incur a $50 fee. If something comes up last minute, call me — I understand life happens.",
  },
];

/**
 * Healinque Homepage — Session 23 Luxury Overhaul
 *
 * Section Flow (decluttered from 9 → 7 sections, more breathing room):
 * 1. Hero         — Full-bleed slides with compressed video accent (DARK)
 * 2. Social Proof — Slim credibility bar (LIGHT — contrast break after hero)
 * 3. Services     — What I offer, six-card grid (DARK)
 * 4. Dr. Shirazi  — Editorial "Meet Your Doctor" with absorbed approach tagline (LIGHT)
 * 5. Concerns     — "What brings you in?" entry point (DARK)
 * 6. Testimonials — Patient stories, smaller quieter band (LIGHT)
 * 7. Location+CTA — Final conversion, combined visit + book section (DARK + gold accent)
 *
 * Session 23 removals:
 * - ApproachSection — absorbed as a single serif-italic line inside DoctorIntro.
 * - FAQSection — removed from the homepage visually to reduce noise. FAQSchema
 *   JSON-LD (below) stays for SEO; full FAQ page still lives at /faq.
 *
 * Each section is wrapped in a lightweight <SafeSection> error boundary so a
 * render failure in one section does not break the rest of the page. The
 * boundary itself is quiet — no reserved min-height, no striped placeholder,
 * no defensive inline styles — just a standard React error boundary.
 */
export default function HomePage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.healinque.com" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={homepageFaqs} />

      {/* 1. Hero — DARK */}
      <SafeSection name="Hero">
        <Hero />
      </SafeSection>

      {/* 2. Social Proof Bar — LIGHT (cream background, contrast break) */}
      <SafeSection name="SocialProofBar">
        <SocialProofBar />
      </SafeSection>

      {/* 3. Services Grid — DARK */}
      <SafeSection name="ServicesGrid">
        <ServicesGrid />
      </SafeSection>

      {/* 4. Meet Dr. Shirazi — LIGHT (Session 23: absorbs "Layered. Conservative. Regenerative." tagline) */}
      <SafeSection name="DoctorIntro">
        <DoctorIntro variant="light" />
      </SafeSection>

      {/* 5. Concern Cards — DARK */}
      <SafeSection name="ConcernCards">
        <ConcernCards />
      </SafeSection>

      {/* 6. Testimonials — LIGHT (Session 23: shrunk padding, smaller quieter band) */}
      <SafeSection name="Testimonials">
        <Testimonials variant="light" />
      </SafeSection>

      {/* 7. Location + CTA — DARK with gold accent (final conversion) */}
      <SafeSection name="LocationCTA">
        <LocationCTA />
      </SafeSection>
    </>
  );
}
