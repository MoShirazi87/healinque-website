import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aesthetic Treatments | Botox, Fillers, & More in Poway",
  description:
    "Discover comprehensive aesthetic and wellness treatments in Poway. From Botox and dermal fillers to regenerative medicine, microneedling, and more. Physician-performed by Dr. Azadeh Shirazi.",
  alternates: {
    canonical: "https://www.healinque.com/treatments",
  },
};

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
