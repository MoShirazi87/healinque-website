import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions | Healinque Poway",
  description:
    "Find answers to common questions about Healinque's treatments, appointments, pricing, and policies. Aesthetic medicine and longevity care in Poway, CA.",
  openGraph: {
    title: "FAQ | Healinque",
    description:
      "Common questions about treatments, consultations, pricing, and aftercare at Healinque in Poway, CA.",
    images: ["/images/og-image.jpg"],
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
