import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Book Consultation | Healinque",
  description: "Schedule your consultation with Dr. Azadeh Shirazi at Healinque Wellness & Longevity Center.",
};

export default function BookConsultationPage() {
  // Redirect to /book
  redirect("/book");
}
