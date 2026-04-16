import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Concerns | Find the Right Treatment | Healinque Poway",
  description:
    "Explore common aesthetic and wellness concerns and discover the treatments that can help. Fine lines, volume loss, weight management, hormone imbalance & more.",
  openGraph: {
    title: "Your Concerns | Healinque",
    description:
      "Find the right treatment for your specific concerns at Healinque in Poway, CA.",
    images: ["/images/og-image.jpg"],
  },
};

export default function ConcernsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
