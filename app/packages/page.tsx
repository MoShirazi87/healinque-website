import Link from "next/link";
import { PageHero as Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { pexelsUrl, pageImages } from "@/lib/data/images";
import { siteConfig } from "@/lib/config/site";

// Package-specific details (not in siteConfig, curated copy)
const packageDetails = {
  "the-healinque-glow": {
    tagline: "Radiant skin transformation",
    description: "A refreshing one-two punch: Botox smooths fine lines while a Perfect Derma Peel evens your skin tone and texture. This package is best for patients who want visible results without a complex multi-month commitment.",
    whatsIncluded: [
      "Botox (30 units) — forehead, brow, or crow's feet",
      "Perfect Derma Peel — chemical exfoliation and brightening",
    ],
    bestFor: "Patients who want quick, visible aesthetic improvement and clear skin.",
    timeline: "30–45 minutes",
  },
  "collagen-restore": {
    tagline: "Advanced collagen rebuilding",
    description: "Three sessions of microneedling combined with PRP to stimulate your skin's natural collagen production. This is a process-based package — results improve over three months as your skin rebuilds itself.",
    whatsIncluded: [
      "Microneedling (3 sessions, spaced 4–6 weeks apart)",
      "PRP application at each session — your own growth factors drive collagen remodeling",
      "Post-treatment skincare guidance",
    ],
    bestFor: "Patients with texture concerns, mild scarring, or those seeking long-term skin quality improvement.",
    timeline: "45–60 minutes per session",
  },
  "hair-revival": {
    tagline: "Restore volume and density",
    description: "Six sessions of PRP scalp injections designed to support hair growth and slow thinning. This package delivers growth factors directly to affected areas and may be combined with topical or oral medical therapies for best results.",
    whatsIncluded: [
      "Scalp PRP injections (6 sessions, spaced 3–4 weeks apart)",
      "Hair density assessment and progress photos",
      "Recommendations for complementary therapies (topical minoxidil, finasteride, etc.)",
    ],
    bestFor: "Patients with early-to-moderate androgenetic alopecia who want a medical approach to hair restoration.",
    timeline: "30–45 minutes per session",
  },
  "mens-performance": {
    tagline: "Specialized performance for men",
    description: "The P-Shot targets tissue health in the penile area using PRP. This package offers flexibility: start with P-Shot and optionally add Botox or PRP for facial rejuvenation. Built for men who want discreet, comprehensive care.",
    whatsIncluded: [
      "P-Shot — PRP therapy for sexual wellness",
      "Optional add-on: Botox (up to 40 units) OR PRP facial",
      "Confidential consultation and assessment",
    ],
    bestFor: "Men seeking sexual wellness support, or those combining discreet aesthetic treatments with performance optimization.",
    timeline: "45–60 minutes",
  },
};

export default function PackagesPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.healinque.com" },
    { name: "Packages", url: "https://www.healinque.com/packages" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Hero
        variant="page"
        title="Signature Packages"
        subtitle="CURATED COMBINATIONS"
        description="Treatment combinations designed to work together — at member-friendly pricing. Each package is paced and combined the way I'd recommend in a personal plan."
        image={pexelsUrl(pageImages.packagesHero?.primary || pageImages.membershipHero.primary, 1920)}
        overlay="dark"
      />

      {/* Intro Section — CREAM */}
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <div
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#C9A227]" />
              <p className="text-[#C9A227] font-medium tracking-widest uppercase text-xs">
                The Approach
              </p>
              <div className="h-[1px] w-8 bg-[#C9A227]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-deep mb-8">
              Treatments That <span className="text-[#C9A227] italic">Work Together</span>
            </h2>
            <p className="text-lg text-navy-deep/75 leading-relaxed">
              These packages pair complementary treatments — Botox with peel, microneedling with PRP, P-Shot with optional add-ons. When treatments work together, results compound. Pricing reflects the bundle and delivers value compared to booking treatments individually.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid — DARK */}
      <section className="section-padding bg-[#0a1628] relative overflow-hidden">
        <div className="container-healinque">
          <div
            className="mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="h-px w-12 bg-[#C9A227]" />
            </div>
            <p className="text-xs uppercase tracking-widest text-white/60 text-center mb-6 font-medium">
              Four Signature Packages
            </p>
            <h2 className="font-serif text-5xl text-center text-white">
              Choose Your <span className="italic text-[#C9A227]">Package</span>
            </h2>
          </div>

          <div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {siteConfig.packages.map((pkg) => {
              const details = packageDetails[pkg.slug as keyof typeof packageDetails];
              return (
                <div
                  key={pkg.slug}
                  className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:border-[#C9A227]/40 transition-colors duration-300 group flex flex-col h-full"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A227]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-2xl font-serif text-white mb-2">{pkg.name}</h3>
                      <p className="text-white/60 text-sm">{pkg.summary}</p>
                    </div>

                    <div className="mb-8 pb-8 border-b border-white/10">
                      <p className="text-5xl font-bold text-[#C9A227] mb-1">${pkg.price}</p>
                      <p className="text-white/70 text-xs uppercase tracking-widest">Complete package</p>
                    </div>

                    {details && (
                      <>
                        <div className="mb-8 flex-grow">
                          <p className="text-white/50 text-xs uppercase tracking-widest font-medium mb-3">
                            What&apos;s Included
                          </p>
                          <ul className="space-y-2">
                            {details.whatsIncluded.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                                <span className="text-white/75 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-8 pb-8 border-t border-white/10 pt-6">
                          <p className="text-white/50 text-xs uppercase tracking-widest font-medium mb-2">
                            Best For
                          </p>
                          <p className="text-white/75 text-sm italic">{details.bestFor}</p>
                        </div>

                        <div className="mb-8">
                          <p className="text-white/50 text-xs uppercase tracking-widest font-medium mb-2">
                            Time Commitment
                          </p>
                          <p className="text-white/75 text-sm">{details.timeline}</p>
                        </div>
                      </>
                    )}

                    <Link href="/book" className="w-full mt-auto">
                      <Button
                        className="w-full bg-transparent border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227]/10 transition-all"
                        size="lg"
                      >
                        Book This Package
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Packages Work Section — CREAM */}
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <div
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#C9A227]" />
              <p className="text-[#C9A227] font-medium tracking-widest uppercase text-xs">
                How It Works
              </p>
              <div className="h-[1px] w-8 bg-[#C9A227]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-deep mb-8">
              Package <span className="text-[#C9A227] italic">Pricing & Timing</span>
            </h2>
            <p className="text-lg text-navy-deep/75 leading-relaxed">
              Prices shown are for the complete package. Multi-session packages are paced based on your skin recovery — typically 3–6 weeks between sessions. You can book your full schedule upfront or plan as you go.
            </p>
          </div>

          <div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                num: "1",
                title: "Consultation",
                copy: "I'll assess your skin, goals, and timeline. I may recommend adjusting the package based on your individual needs.",
                image: "3764568",
              },
              {
                num: "2",
                title: "Execute",
                copy: "You'll book your appointments and complete treatments on a schedule that works with your skin's healing.",
                image: "3985338",
              },
              {
                num: "3",
                title: "Results",
                copy: "Results build over time as treatments compound. You'll notice progressive improvement through the package.",
                image: "3985329",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="relative bg-white border border-taupe/10 rounded-2xl p-10"
              >
                <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-[#C9A227]">{step.num}</span>
                </div>
                <h3 className="text-xl font-serif text-navy-deep mb-4">{step.title}</h3>
                <p className="text-navy-deep/70 text-base leading-relaxed">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Advantage Section — DARK */}
      <section className="section-padding bg-[#0a1628] relative overflow-hidden">
        <div className="container-healinque">
          <div
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#C9A227]" />
              <p className="text-[#C9A227] font-medium tracking-widest uppercase text-xs">
                Member Advantage
              </p>
              <div className="h-[1px] w-8 bg-[#C9A227]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
              Use Your Membership <span className="text-[#C9A227] italic">on Packages</span>
            </h2>
            <p className="text-lg text-white/75 leading-relaxed mb-10">
              If you&apos;re a member, your 10% discount applies to individual treatments. Members often bank their monthly membership benefits and combine several months to invest in a larger package—a practical way to fund comprehensive treatment.
            </p>
            <Link href="/memberships">
              <Button
                className="bg-[#C9A227] text-navy-deep hover:bg-[#B89420] font-semibold"
                size="lg"
              >
                Explore Membership
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <div
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#C9A227]" />
              <p className="text-[#C9A227] font-medium tracking-widest uppercase text-xs">
                Next Steps
              </p>
              <div className="h-[1px] w-8 bg-[#C9A227]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-deep mb-8">
              Not Sure Which <span className="text-[#C9A227] italic">Is Right?</span>
            </h2>
            <p className="text-lg text-navy-deep/75 leading-relaxed mb-10">
              Book a consultation. I&apos;ll assess your skin, discuss your goals, and recommend the package (or custom combination) that will get you results.
            </p>
            <Link href="/book">
              <Button
                className="bg-[#C9A227] text-navy-deep hover:bg-[#B89420] font-semibold"
                size="lg"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="section-padding bg-white border-t border-taupe/10">
        <div className="container-healinque">
          <div
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xs text-navy-deep/60 leading-relaxed">
              <span className="font-semibold">Disclaimer:</span> {siteConfig.policies.disclaimer} Package pricing reflects bundled services and may differ from individual treatment pricing. Actual package cost and timeline will be confirmed during your consultation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
