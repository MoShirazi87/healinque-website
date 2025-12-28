import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, Calendar, CheckCircle } from "lucide-react";
import { siteConfig, getPhoneLink } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Book Your Appointment",
  description: "Schedule your consultation or treatment at Healinque Wellness Clinic. Online booking available 24/7.",
};

const consultationTypes = [
  {
    name: "New Patient Consultation",
    duration: "45-60 min",
    price: "$100 (credited toward treatment)",
    description: "Comprehensive consultation with Dr. Azi to discuss your goals and create a personalized plan.",
  },
  {
    name: "Follow-Up Consultation",
    duration: "20-30 min",
    price: "Complimentary",
    description: "Review results, adjust treatment plan, or discuss new concerns.",
  },
  {
    name: "Virtual Consultation",
    duration: "30 min",
    price: "$75 (credited toward treatment)",
    description: "Meet with Dr. Azi via video for initial discussion or follow-up care.",
  },
];

const bookingBenefits = [
  "Same-day appointments often available",
  "Consultation fee credited toward treatment",
  "No-pressure, educational experience",
  "Personalized treatment recommendations",
  "Flexible scheduling including Saturdays",
];

export default function BookPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream">
      <div className="container-healinque">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-display font-serif text-navy-deep mb-4">
            Book Your Appointment
          </h1>
          <p className="text-lg text-taupe max-w-2xl mx-auto">
            Take the first step toward looking and feeling your best. 
            Schedule your consultation with Dr. Azi today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Widget */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-serif text-navy-deep mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gold" />
                Select Appointment Type
              </h2>

              <div className="space-y-4 mb-8">
                {consultationTypes.map((type) => (
                  <div
                    key={type.name}
                    className="border border-cream-dark rounded-xl p-4 hover:border-gold transition-colors cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-navy-deep">{type.name}</h3>
                      <span className="text-sm text-gold">{type.duration}</span>
                    </div>
                    <p className="text-sm text-taupe mb-2">{type.description}</p>
                    <p className="text-sm font-medium text-navy-deep">{type.price}</p>
                  </div>
                ))}
              </div>

              {/* Placeholder for Healthie booking widget */}
              <div className="bg-cream rounded-xl p-12 text-center">
                <Calendar className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-xl text-navy-deep mb-2">
                  Online Booking
                </h3>
                <p className="text-taupe mb-6">
                  [Healthie Booking Widget Integration]
                </p>
                <p className="text-sm text-taupe">
                  In production, the Healthie appointment scheduler will appear here, 
                  allowing patients to select dates, times, and appointment types.
                </p>
              </div>

              {/* Alternative Contact */}
              <div className="mt-8 pt-8 border-t border-cream-dark">
                <p className="text-center text-taupe mb-4">
                  Prefer to book by phone or have questions?
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href={getPhoneLink()}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-white transition-colors font-medium"
                  >
                    <Phone className="h-4 w-4" />
                    Call {siteConfig.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-navy-deep text-navy-deep rounded-lg hover:bg-navy-deep hover:text-white transition-colors font-medium"
                  >
                    Send a Message
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Why Book */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-serif text-lg text-navy-deep mb-4">
                Why Book with Us
              </h3>
              <ul className="space-y-3">
                {bookingBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-taupe">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-serif text-lg text-navy-deep mb-4">
                Location & Hours
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-navy-deep">{siteConfig.address.street}, {siteConfig.address.suite}</p>
                    <p className="text-taupe">{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-taupe">
                    {siteConfig.hours.display.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-serif text-lg text-navy-deep mb-3">
                Cancellation Policy
              </h3>
              <p className="text-sm text-taupe">
                We require 48 hours notice for cancellations or rescheduling. 
                Late cancellations or no-shows may be subject to a fee. 
                We understand life happens—please contact us as soon as possible 
                if you need to change your appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

