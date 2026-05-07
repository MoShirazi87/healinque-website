import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Concerns | Find the Right Treatment | Healinque Poway",
  description:
    "Explore common aesthetic and wellness concerns and discover the treatments that can help. Fine lines, volume loss, weight management, hormone imbalance & more.",
  openGraph: {
    title: "Your Concerns | Healinque",
    description:
      "Find the right treatment for your specific concerns at Healinque in Poway, CA.",
    // Session 18 scaffold: swap to `/images/og-concerns.jpg` when designed.
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healinque — Browse aesthetic and wellness concerns",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Concerns | Healinque",
    description:
      "From fine lines to hormone balance — find the right treatment for what's on your mind.",
    images: ["/images/og-image.jpg"],
  },
};

export default function ConcernsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
