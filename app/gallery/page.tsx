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
    "View real patient results from aesthetic treatments at Healinque. See before and after photos of Botox, fillers, microneedling, and more.",
};

export default function GalleryPage() {
  return (
    <main className="bg-[#0a1628]">
      <Hero
        variant="page"
        title="Real Results"
        subtitle="Before & After"
        description="See the natural, beautiful results my patients have achieved with expert, physician-led care."
        image={pexelsUrl(pageImages.galleryHero.primary, 1920)}
        overlay="dark"
      />

      {/* Transparency Note — CREAM */}
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
              Before &amp; After&mdash;{" "}
              <span className="text-[#C9A227] italic">With Full Transparency</span>
            </h2>
            <p className="text-navy-deep/70 text-lg leading-relaxed">
              Every photo in my gallery will represent an actual Healinque
              patient who has given explicit consent to share their image. I
              don&apos;t use filters, I don&apos;t enhance, and I disclose
              timelines honestly.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon — DARK */}
      <section className="relative py-24 bg-[#0a1628]">
        <div className="container-healinque">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-xs font-medium mb-8 uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
              Gallery in Progress
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6 leading-tight">
              My Before &amp; After Gallery Is{" "}
              <span className="text-[#C9A227] italic">Being Curated</span>
            </h2>

            <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed mb-4">
              I&apos;m gathering patient photos with full written consent.
              Every image will be unretouched, with treatment and timeline
              details disclosed.
            </p>

            <p className="text-white/50 text-sm max-w-xl mx-auto italic mb-10">
              Follow on Instagram for current transformations, or ask during
              your consultation to view the portfolio I show in-clinic.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#C9A227] hover:bg-[#b8921f] text-[#0a1628] px-8 py-6 font-sans font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow {siteConfig.doctor.instagramHandle}
                </Button>
              </a>
              <Link href="/book">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 rounded-lg"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
