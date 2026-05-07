import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";

// Session 21: added metadata for /financing — page is a client component
// ("use client"), so metadata must live in a layout wrapper.
export const metadata: Metadata = {
  title: "Financing & Payment Plans | Healinque",
  description:
    "Flexible financing for aesthetic and wellness treatments at Healinque — CareCredit, in-house plans, and all major cards. Invest in your results on your terms.",
  alternates: { canonical: `${siteConfig.urls.baseUrl}/financing` },
  openGraph: {
    title: "Financing & Payment Plans | Healinque",
    description:
      "Flexible financing for aesthetic and wellness treatments at Healinque — CareCredit, in-house plans, and all major cards.",
    url: `${siteConfig.urls.baseUrl}/financing`,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healinque — Financing Options",
      },
    ],
  },
};

export default function FinancingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
