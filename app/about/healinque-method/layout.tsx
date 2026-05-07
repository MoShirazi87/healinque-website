import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Healinque Method | My Approach",
  description: "Discover Dr. Azi Shirazi's 3-step approach to aesthetic treatment: Assess, Personalize, Transform. Personalized care for natural, lasting results.",
};

export default function HealinqueMethodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
