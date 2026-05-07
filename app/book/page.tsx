import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, CheckCircle, Calendar, ArrowRight } from "lucide-react";
import { PageHero as Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { BookingWidget } from "@/components/ui/booking-widget";
import { siteConfig, getPhoneLink } from "@/lib/config/site";
import { pexelsUrl, pageImages } from "@/lib/data/images";

const journeySteps = [
  {
    num: "01",
    title: "Book Online",
    copy: "Schedule your consultation at your preferred date and time. Available Mon, Wed, Fri, and Sat.",
    image: "3865676",
    alt: "Scheduling a consultation appointment",
  },
  {
    num: "02",
    title: "Your Consultation",
    copy: "Meet with Dr. Azi for 45–60 minutes. Discuss your goals, concerns, and expectations.",
    image: "3764568",
    alt: "Consultation with Dr. Azi",
  },
  {
    num: "03",
    title: "Your Treatment Plan",
    copy: "Receive a personalized, written treatment plan with realistic expectations and pricing.",
    image: "3985329",
    alt: "Personalized treatment plan",
  },
];

export const metadata: Metadata = {
  title: "Book Your Consultation | Healinque Wellness Center",
  description:
    "Schedule your consultation with Dr. Azi at Healinque. $100 consultation fee credited toward treatment. Online booking powered by Pabau.",
};

export default function BookPage() {
  return (
    <main className="bg-[#0a1628]">
      <Hero
        variant="page"
        subtitle="Your Journey Begins"
        title="Book Your Consultation"
        description="Take the first step toward looking and feeling your best. Schedule your personalized consultation with Dr. Azi today."
        image={pexelsUrl(pageImages.contactHero.primary, 1920)}
        overlay="dark"
      />

      {/* Intro — CREAM */}
      <section className="relative py-20 bg-cream">
        <div className="container-healinque">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#C9A227]" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-navy-deep/50">
                Before You Arrive
              </p>
              <div className="h-px w-12 bg-[#C9A227]" />
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy-deep mb-6 leading-tight">
              Thoughtful,{" "}
              <span className="text-[#C9A227] italic">Personalized</span> Care
            </h2>
            <p className="text-navy-deep/70 text-lg leading-relaxed">
              Your initial consultation is a conversation — unhurried, honest, and tailored to your
              goals. Dr. Azi takes the time to understand you first, then recommends a plan that
              actually fits.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards — DARK */}
      <section className="relative py-24 bg-[#0a1628]">
        <div className="container-healinque">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Fee */}
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#C9A227]/30 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <Calendar className="h-5 w-5 text-[#C9A227]" />
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A227]/80">
                  Consultation Fee
                </p>
              </div>
              <p className="font-serif text-4xl text-white mb-3">$100</p>
              <p className="text-white/60 text-sm leading-relaxed">
                Credited toward your first treatment. New patient consultations are comprehensive
                and personalized.
              </p>
            </div>

            {/* Expect */}
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#C9A227]/30 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <CheckCircle className="h-5 w-5 text-[#C9A227]" />
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A227]/80">
                  What to Expect
                </p>
              </div>
              <ul className="space-y-2.5 text-white/70 text-sm">
                <li className="flex gap-2">
                  <span className="text-[#C9A227]">·</span>
                  <span>45–60 minute appointment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#C9A227]">·</span>
                  <span>Detailed consultation with Dr. Azi</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#C9A227]">·</span>
                  <span>Personalized treatment recommendations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#C9A227]">·</span>
                  <span>Honest pricing and expectations</span>
                </li>
              </ul>
            </div>

            {/* Bring */}
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#C9A227]/30 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <CheckCircle className="h-5 w-5 text-[#C9A227]" />
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A227]/80">
                  What to Bring
                </p>
              </div>
              <ul className="space-y-2.5 text-white/70 text-sm">
                <li className="flex gap-2">
                  <span className="text-[#C9A227]">·</span>
                  <span>Photo ID & insurance card (if applicable)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#C9A227]">·</span>
                  <span>Recent photos of concern areas (optional)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#C9A227]">·</span>
                  <span>List of medications/supplements</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#C9A227]">·</span>
                  <span>Recent lab work (wellness consultations)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Widget — CREAM */}
      <section className="relative py-24 bg-cream">
        <div className="container-healinque">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Calendar className="h-14 w-14 text-[#C9A227] mx-auto mb-6" />
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-navy-deep/50 mb-3">
                Online Booking
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl text-navy-deep mb-4">
                Reserve Your <span className="text-[#C9A227] italic">Time</span>
              </h2>
              <p className="text-navy-deep/60 text-sm max-w-lg mx-auto">
                Select your preferred date, time, and service below. Your $100 consultation fee is credited toward your first treatment.
              </p>
            </div>

            {/* Booking widget — Pabau when configured, Calendly as interim, contact fallback */}
            <BookingWidget
              className="bg-white border border-[#C9A227]/20 rounded-2xl p-6 md:p-10 shadow-xl overflow-hidden"
              inline={true}
            />

            <div className="mt-8 text-center">
              <p className="text-navy-deep/50 text-xs mb-4">
                Prefer to schedule by phone or have questions first?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="default">
                  <a href={getPhoneLink()}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call {siteConfig.phone}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">
                    Send Message
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey — DARK */}
      <section className="relative py-24 bg-[#0a1628]">
        <div className="container-healinque">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-12 bg-[#C9A227]" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/50">
                Three Simple Steps
              </p>
              <div className="h-px w-12 bg-[#C9A227]" />
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-white leading-tight">
              Your Consultation <span className="text-[#C9A227] italic">Journey</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {journeySteps.map((step) => (
              <div
                key={step.num}
                className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden p-8 flex flex-col hover:border-[#C9A227]/40 transition-colors duration-300"
              >
                <p className="font-serif text-5xl text-[#C9A227]/80 mb-4">{step.num}</p>
                <h3 className="font-serif text-xl text-white mb-3">{step.title}</h3>
                <p className="text-white/70 text-base leading-relaxed">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies — CREAM */}
      <section className="relative py-24 bg-cream">
        <div className="container-healinque">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-navy-deep/50 mb-4">
              Good to Know
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy-deep leading-tight">
              Policies & <span className="text-[#C9A227] italic">Expectations</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-taupe/10 rounded-xl p-8 shadow-sm">
              <h3 className="font-serif text-xl text-navy-deep mb-4">Cancellation Policy</h3>
              <p className="text-navy-deep/70 leading-relaxed mb-4">
                I ask for{" "}
                <span className="text-[#C9A227] font-semibold">48 hours notice</span> for
                cancellations or rescheduling.
              </p>
              <p className="text-navy-deep/70 leading-relaxed">
                Late cancellations or no-shows may be subject to a{" "}
                <span className="text-[#C9A227] font-semibold">$50 fee</span>. I understand life
                happens—please reach out as soon as possible if you need to change your appointment.
              </p>
            </div>

            <div className="bg-white border border-taupe/10 rounded-xl p-8 shadow-sm">
              <h3 className="font-serif text-xl text-navy-deep mb-4">Results Disclaimer</h3>
              <p className="text-navy-deep/70 leading-relaxed">
                <span className="text-[#C9A227] font-semibold">Results may vary.</span> Individual
                results are not guaranteed and depend on factors including age, skin type, lifestyle,
                and adherence to post-treatment care. Dr. Shirazi provides honest, realistic
                expectations during your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours — DARK */}
      <section className="relative py-24 bg-[#0a1628]">
        <div className="container-healinque">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-12 bg-[#C9A227]" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/50">
                Visit the Clinic
              </p>
              <div className="h-px w-12 bg-[#C9A227]" />
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-white leading-tight">
              Location & <span className="text-[#C9A227] italic">Hours</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-[#C9A227] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-white mb-3">Address</h3>
                  <p className="text-white/70">{siteConfig.address.street}</p>
                  <p className="text-white/70">
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </p>
                  <a
                    href={siteConfig.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A227] hover:text-white transition-colors text-sm mt-4 inline-block"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-[#C9A227] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-white mb-3">Hours</h3>
                  <div className="space-y-1 text-white/70 text-sm">
                    {siteConfig.hours.display.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — CREAM */}
      <section className="relative py-24 bg-cream border-t border-taupe/10">
        <div className="container-healinque">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-navy-deep/50 mb-4">
              Questions?
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy-deep mb-6">
              I&apos;m <span className="text-[#C9A227] italic">Here</span> to Help
            </h2>
            <p className="text-navy-deep/70 text-lg mb-10 leading-relaxed">
              Reach out anytime with questions about treatments, pricing,
              or scheduling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="default">
                <a href={getPhoneLink()}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call {siteConfig.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
