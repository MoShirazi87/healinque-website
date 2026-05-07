import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aesthetic Treatments | Botox, Fillers, & More in Poway",
  description:
    "Discover comprehensive aesthetic and wellness treatments in Poway. From Botox and dermal fillers to regenerative medicine, microneedling, and more. Physician-performed by Dr. Azadeh Shirazi.",
  alternates: {
    canonical: "https://www.healinque.com/treatments",
  },
  openGraph: {
    title: "Aesthetic Treatments | Healinque",
    description:
      "Physician-performed Botox, fillers, regenerative medicine, microneedling, laser, and more in Poway, CA.",
    // Session 18 scaffold: swap to `/images/og-treatments.jpg` when designed.
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healinque Treatments — Botox, fillers, regenerative medicine, and more",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aesthetic Treatments | Healinque",
    description:
      "Physician-performed Botox, fillers, regenerative medicine, laser, and more in Poway, CA.",
    images: ["/images/og-image.jpg"],
  },
};

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
