import { Metadata } from "next";
import Link from "next/link";
import { PageHero as Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { pexelsUrl, pageImages } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Before & After Gallery | Healinque Poway",
  description:
    "View real patient results from our aesthetic treatments at Healinque. See before and after photos of Botox, fillers, microneedling, and more.",
};

const treatmentCategories = [
  { id: 1, name: "Botox & Dysport", tagline: "Softer lines, refreshed expression" },
  { id: 2, name: "Dermal Fillers", tagline: "Restored volume, balanced features" },
  { id: 3, name: "Microneedling", tagline: "Smoother texture, even tone" },
  { id: 4, name: "Chemical Peels", tagline: "Brighter, clearer, renewed skin" },
];

export default function GalleryPage() {
  return (
    <main className="bg-[#0a1628]">
      <Hero
        variant="page"
        title="Before & After Gallery"
        subtitle="Real Results"
        description="See the natural, beautiful results our patients have achieved with Dr. Azi's expert care."
        image={pexelsUrl(pageImages.galleryHero.primary, 1920)}
        overlay="dark"
      />

      {/* Intro + Why Gallery Matters — CREAM */}
      <section className="relative py-20 bg-cream">
        <div className="container-healinque">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#C9A227]" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-navy-deep/50">
                Real Patients, Real Consent
              </p>
              <div className="h-px w-12 bg-[#C9A227]" />
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy-deep mb-6 leading-tight">
              Before &amp; After—{" "}
              <span className="text-[#C9A227] italic">With Full Transparency</span>
            </h2>
            <p className="text-navy-deep/70 text-lg leading-relaxed mb-8">
              Every photo in our gallery represents an actual Healinque patient who has given explicit consent to share their image. We don&apos;t use filters, we don&apos;t enhance, and we disclose timelines honestly. This is how I think aesthetic medicine should work.
            </p>

            <div className="bg-white border border-taupe/20 rounded-xl p-6 text-navy-deep/70 text-sm leading-relaxed">
              <p className="mb-3"><strong>Why this matters:</strong></p>
              <ul className="text-left space-y-2 text-navy-deep/60">
                <li>• Every photo shows unretouched results</li>
                <li>• Patient consent documented and verified</li>
                <li>• Treatment timelines and costs disclosed</li>
                <li>• No before-and-after from other providers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon — DARK */}
      <section className="relative py-24 bg-[#0a1628]">
        <div className="container-healinque">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-xs font-medium mb-6 uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
                Gallery in Progress
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6 leading-tight">
                Real Patient Photos,{" "}
                <span className="text-[#C9A227] italic">Coming Soon</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
                We&apos;re gathering patient photos with full written consent. Every image will be unretouched, with treatment and timeline details disclosed.
              </p>
              <p className="text-white/50 text-sm max-w-2xl mx-auto italic">
                For now, see results on our Instagram or ask during your consultation to view the before-and-after portfolio we show in-clinic.
              </p>
            </div>

            {/* Category cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {treatmentCategories.map((category) => (
                <div
                  key={category.id}
                  className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#C9A227]/30 transition-all duration-500"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-px w-8 bg-[#C9A227]" />
                    <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#C9A227]/70">
                      Preview
                    </p>
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-2">{category.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {category.tagline}
                  </p>
                  <p className="text-white/30 text-xs italic">Photos coming soon</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram CTA — CREAM */}
      <section className="relative py-24 bg-cream">
        <div className="container-healinque">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-navy-deep/50 mb-4">
              Latest Results
            </p>
            <h3 className="font-serif text-4xl lg:text-5xl text-navy-deep mb-6 leading-tight">
              Follow Along on{" "}
              <span className="text-[#C9A227] italic">Instagram</span>
            </h3>
            <p className="text-navy-deep/70 text-lg leading-relaxed mb-10">
              Dr. Azi shares real patient transformations, treatment insights, and behind-the-scenes
              looks at Healinque. See new before &amp; after results first.
            </p>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A227] hover:bg-[#b8921f] text-[#0a1628] rounded-lg font-sans font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Instagram className="h-5 w-5" />
              Follow {siteConfig.doctor.instagramHandle}
            </a>
          </div>
        </div>
      </section>

      {/* Book Consultation CTA — DARK */}
      <section className="relative py-24 bg-[#0a1628] border-t border-white/5">
        <div className="container-healinque text-center">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/50 mb-4">
            Begin Your Journey
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">
            Ready for Your{" "}
            <span className="text-[#C9A227] italic">Transformation</span>?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule a consultation with Dr. Azi Shirazi to discuss your aesthetic goals and discover
            how we can help you achieve natural, beautiful results.
          </p>
          <Link href="/book">
            <Button
              size="lg"
              className="bg-[#C9A227] hover:bg-[#b8921f] text-[#0a1628] px-10 py-6 font-sans font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Book Your Consultation <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
