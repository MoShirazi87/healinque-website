import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Reviews | Healinque Wellness & Longevity Center in Poway",
  description:
    "Read real patient testimonials and reviews of Dr. Azadeh Shirazi's aesthetic medicine treatments and wellness services. See why patients trust Healinque.",
  alternates: {
    canonical: "https://www.healinque.com/reviews",
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
