import { Metadata } from "next";
import AboutContent from "@/components/sections/about-content";
import { BreadcrumbSchema } from "@/components/seo/schema";

export const metadata: Metadata = {
  title: "About Healinque | Physician-Led Aesthetics & Longevity in Poway, CA",
  description:
    "Healinque Wellness & Longevity Center, founded by Dr. Azi Shirazi, MD. MD, Internal Medicine with 20+ years clinical experience and 10+ years in aesthetic medicine. Personally tested treatments. Natural results.",
  alternates: {
    canonical: "https://www.healinque.com/about",
  },
  openGraph: {
    title: "About Healinque | Physician-Led Aesthetics & Longevity",
    description:
      "Physician-led aesthetic medicine with natural results. Dr. Azi Shirazi, MD. Poway, CA.",
    // Session 18 scaffold: swap to `/images/og-about.jpg` when designed.
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Healinque — Dr. Azi Shirazi, MD. Physician-led aesthetics in Poway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Healinque — Dr. Azi Shirazi, MD",
    description:
      "20+ years internal medicine, 10+ years aesthetic medicine. Natural, doctor-performed results.",
    images: ["/images/og-image.jpg"],
  },
};

export default function AboutPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.healinque.com" },
    { name: "About", url: "https://www.healinque.com/about" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <AboutContent />
    </>
  );
}
