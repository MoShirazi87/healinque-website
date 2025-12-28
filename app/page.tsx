import { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustBadges } from "@/components/sections/trust-badges";
import { ConcernCards } from "@/components/sections/concern-cards";
import { Differentiators } from "@/components/sections/differentiators";
import { FeaturedTreatments } from "@/components/sections/featured-treatments";
import { DrAziIntro } from "@/components/sections/dr-azi-intro";
import { Testimonials } from "@/components/sections/testimonials";
import { LocationShowcase } from "@/components/sections/location-showcase";
import { PressLogos } from "@/components/sections/press-logos";
import { ConsultationForm } from "@/components/sections/consultation-form";

export const metadata: Metadata = {
  title: "Healinque | Premier Medical Spa & Longevity Center in Poway, CA",
  description:
    "Look younger, feel younger, live longer. Physician-performed aesthetic treatments and longevity medicine in Poway, CA. Led by Dr. Azi Shirazi with 20+ years experience.",
  keywords: [
    "medical spa poway",
    "botox poway",
    "dermal fillers san diego",
    "weight loss clinic poway",
    "hormone therapy san diego",
    "dr azi shirazi",
    "aesthetic medicine poway",
    "longevity medicine san diego",
  ],
  openGraph: {
    title: "Healinque | Premier Medical Spa & Longevity Center",
    description:
      "Physician-performed aesthetic treatments and longevity medicine. Look younger, feel younger, live longer.",
    images: ["/images/og-home.jpg"],
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        variant="home"
        subtitle="Poway's Premier Medical Aesthetics & Longevity Center"
        title="Look Younger. Feel Younger. Live Longer."
        description="Where natural beauty meets evidence-based longevity medicine. Every treatment is personally performed or supervised by Dr. Azi Shirazi, bringing 20+ years of emergency medicine expertise to aesthetic care."
        image="https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1920"
        cta={{
          primary: { label: "Book Your Consultation", href: "/book" },
          secondary: { label: "View Treatments", href: "/treatments" },
        }}
        stats={[
          { value: "20+", label: "Years Experience" },
          { value: "10K+", label: "Treatments" },
          { value: "4.9★", label: "Rating" },
        ]}
      />

      {/* Trust Badges */}
      <TrustBadges />

      {/* What's Your Concern */}
      <ConcernCards />

      {/* Why Choose Healinque */}
      <Differentiators />

      {/* Featured Treatments */}
      <FeaturedTreatments
        subtitle="Our Services"
        title="Signature Treatments"
        limit={6}
      />

      {/* Dr. Azi Introduction */}
      <DrAziIntro variant="full" />

      {/* Testimonials */}
      <Testimonials variant="carousel" />

      {/* Press Logos */}
      <PressLogos variant="marquee" />

      {/* Location */}
      <LocationShowcase />

      {/* Consultation Form */}
      <ConsultationForm
        variant="split"
        title="Start Your Transformation"
        subtitle="Free Consultation"
      />
    </main>
  );
}
