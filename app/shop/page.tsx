import { Metadata } from "next";
import Link from "next/link";
import { PageHero as Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { pexelsUrl, pageImages } from "@/lib/data/images";
import { siteConfig, getPhoneLink } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Shop | Medical-Grade Skincare & Supplements",
  description:
    "Shop physician-curated skincare, supplements, and wellness products. Medical-grade formulas recommended by Dr. Azi Shirazi.",
};

export default function ShopPage() {
  return (
    <main className="bg-[#0a1628]">
      <Hero
        variant="page"
        title="Medical-Grade Products"
        subtitle="Shop Healinque"
        description="Physician-curated skincare, supplements, and wellness products to enhance your treatment results at home."
        image={pexelsUrl(pageImages.shopHero.primary, 1920)}
        overlay="dark"
      />

      {/* Coming Soon */}
      <section className="relative py-24 bg-[#0a1628]">
        <div className="container-healinque">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-xs font-medium mb-8 uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
              Launching Soon
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6 leading-tight">
              My Curated Selection Is{" "}
              <span className="text-[#C9A227] italic">Almost Here</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-10">
              My curated selection of physician-recommended skincare is
              launching soon. Every product will be hand-selected by me
              for safety, efficacy, and real results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#C9A227] hover:bg-[#b8921f] text-[#0a1628] px-8 py-6 font-sans font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Ask About Products
                </Button>
              </Link>
              <Link href="/treatments">
                <Button size="lg" variant="outline" className="px-8 py-6 rounded-lg">
                  Browse Treatments
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/40 text-sm mb-3">
                In the meantime, ask about product recommendations during your consultation.
              </p>
              <a
                href={getPhoneLink()}
                className="inline-flex items-center gap-2 text-[#C9A227] hover:text-[#b8921f] transition-colors text-sm font-medium"
              >
                Call or text {siteConfig.phone}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
