import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Healinque | Wellness & Longevity Center in San Diego",
  description:
    "Get in touch with Healinque in San Diego, CA. Phone: (858) 337-7999. We're here to answer your questions about aesthetic treatments, regenerative medicine, and wellness.",
  alternates: {
    canonical: "https://www.healinque.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
