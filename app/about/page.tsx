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
