import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signature Packages | Healinque",
  description: "Curated treatment packages that work together. Botox & peel, collagen rebuilding, hair restoration, and men's performance packages.",
  alternates: {
    canonical: "https://www.healinque.com/packages",
  },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
