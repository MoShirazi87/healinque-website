import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healinque Elite Membership | Physician-Supervised Care Plan",
  description: "$199/month membership includes monthly IV therapy, 10% off signature treatments, and priority booking. No long-term commitment.",
  alternates: {
    canonical: "https://www.healinque.com/memberships",
  },
};

export default function MembershipsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
