import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions | Healinque Poway",
  description:
    "Find answers to common questions about Healinque's treatments, appointments, pricing, and policies. Aesthetic medicine and longevity care in Poway, CA.",
  openGraph: {
    title: "FAQ | Healinque",
    description:
      "Common questions about treatments, consultations, pricing, and aftercare at Healinque in Poway, CA.",
    // Session 18 scaffold: swap to `/images/og-faq.jpg` when designed.
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healinque FAQ — Answers on treatments, pricing, and appointments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Healinque",
    description:
      "Answers to 64+ questions on treatments, pricing, consultations, and aftercare.",
    images: ["/images/og-image.jpg"],
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
