import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men's Clinic | Healinque Wellness & Longevity Center in Poway",
  description:
    "Dedicated men's health and aesthetics clinic at Healinque in Poway. Expert aesthetic treatments, P-Shot, hair restoration, and wellness therapies in a comfortable, discreet environment for men.",
  alternates: {
    canonical: "https://www.healinque.com/mens-clinic",
  },
  openGraph: {
    title: "Men's Clinic | Healinque Wellness & Longevity Center",
    description:
      "Dedicated men's health and aesthetics with expert physician-led treatments in a comfortable setting.",
    // Session 18 scaffold: swap to `/images/og-mens-clinic.jpg` when designed.
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healinque Men's Clinic — Fridays in Poway with Dr. Azi Shirazi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Men's Clinic — Fridays at Healinque",
    description:
      "Physician-led men's aesthetics, hair restoration, and hormone optimization in Poway.",
    images: ["/images/og-image.jpg"],
  },
};

export default function MensClinicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
