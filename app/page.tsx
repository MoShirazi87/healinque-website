import { Metadata } from "next";
import { HomeHero as Hero } from "@/components/sections/hero";
import { SocialProofBar } from "@/components/sections/social-proof-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { DoctorIntro } from "@/components/sections/doctor-intro";
import { ConcernCards } from "@/components/sections/concern-cards";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq-section";
import { LocationCTA } from "@/components/sections/location-cta";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/schema";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";

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
    images: ["/images/og-image.jpg"],
    type: "website",
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
  {
    question: "What should I expect during my first consultation?",
    answer:
      "Your consultation is a 45–60 minute appointment with Dr. Shirazi. She will review your medical history, assess your concerns, examine your skin and facial anatomy, and walk you through her recommendations. You'll leave with a written treatment plan, realistic expectations, and transparent pricing. The $100 consultation fee is credited toward any treatment you choose.",
  },
  {
    question: "Are treatments painful?",
    answer:
      "Most injectable treatments feel like a brief pinch. We use topical numbing for procedures like microneedling, laser resurfacing, and PRP. Dr. Shirazi prioritizes comfort — if you're nervous, just tell us. We will walk you through every step before anything happens.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes. We partner with CareCredit and Cherry for flexible payment plans, including 0% APR options for qualified applicants. We also accept HSA/FSA cards for qualifying services. Ask our team for details when you book.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We ask for 48 hours' notice for cancellations or rescheduling. Late cancellations or no-shows may incur a $50 fee. If something comes up last minute, call us — we understand life happens.",
  },
];

/**
 * Healinque Homepage V2
 *
 * Section Flow (designed for conversion):
 * 1. Hero        — Full-bleed slides with compressed video accent (DARK)
 * 2. Social Proof — Slim credibility bar (LIGHT — creates contrast break)
 * 3. Services    — What we do, tabbed categories (DARK)
 * 4. Dr. Shirazi — Who you are, editorial layout (LIGHT — breathing room)
 * 5. Concerns    — "What brings you in?" entry point (DARK)
 * 6. Testimonials — Social proof, real results (LIGHT)
 * 7. FAQ         — Remove objections (DARK)
 * 8. Location+CTA — Final conversion, combined section (GOLD accent)
 *
 * Light/dark rhythm prevents visual fatigue.
 * 8 sections instead of 11 — tighter, more intentional.
 */
export default function HomePage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.healinque.com" },
  ];

  return (
    <main>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={homepageFaqs} />

      {/* 1. Hero — DARK */}
      <Hero />

      {/* 2. Social Proof Bar — LIGHT (cream background, contrast break) */}
      <SocialProofBar />

      {/* 3. Services Grid — DARK (with cursor spotlight for premium feel) */}
      <CursorSpotlight>
        <ServicesGrid />
      </CursorSpotlight>

      {/* 4. Meet Dr. Shirazi — LIGHT */}
      <DoctorIntro variant="light" />

      {/* 5. Concern Cards — DARK (cursor spotlight) */}
      <CursorSpotlight color="rgba(201, 162, 39, 0.14)" size={600}>
        <ConcernCards />
      </CursorSpotlight>

      {/* 6. Testimonials — LIGHT */}
      <Testimonials variant="light" />

      {/* 7. FAQ — DARK */}
      <FAQSection />

      {/* 8. Location + CTA — COMBINED */}
      <LocationCTA />
    </main>
  );
}
