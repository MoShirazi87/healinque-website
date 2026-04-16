import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero as Hero } from "@/components/sections/hero";
import { TreatmentGrid } from "@/components/sections/treatment-card";
import { CTASection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";
import {
  getCategoryBySlug,
  getTreatmentsByCategory,
  getAllCategorySlugs
} from "@/lib/data/treatments";

interface CategoryPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllCategorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${category.name} Treatments in San Diego, CA | Healinque`,
    description: category.description,
  };
}

const categoryFaqs: Record<string, Array<{ question: string; answer: string }>> = {
  aesthetics: [
    {
      question: "How long do injectable results last?",
      answer: "Botox typically lasts 3-4 months, while dermal fillers can last 6-18 months depending on the product and area treated. Results vary by individual.",
    },
    {
      question: "Is there any downtime after injections?",
      answer: "Most injectable treatments have minimal to no downtime. You may experience minor swelling or bruising that resolves within a few days.",
    },
    {
      question: "Will I look frozen?",
      answer: "Dr. Shirazi uses precise dosing and placement to smooth wrinkles while preserving your natural expressions. The goal is refreshed, not frozen.",
    },
    {
      question: "Can I combine aesthetic treatments?",
      answer: "Absolutely. Many patients see enhanced results by combining injectables with skin rejuvenation treatments. Dr. Shirazi will recommend the best approach.",
    },
    {
      question: "What should I expect during my consultation?",
      answer: "Dr. Shirazi will assess your concerns, discuss your goals, and recommend a personalized treatment plan with realistic expectations and pricing.",
    },
  ],
  "skin-rejuvenation": [
    {
      question: "How many treatments will I need?",
      answer: "Most skin rejuvenation treatments work best as a series. Typically, 3-6 sessions spaced 4-6 weeks apart are recommended for optimal results.",
    },
    {
      question: "Can these treatments be combined?",
      answer: "Yes. Dr. Shirazi often creates customized protocols combining multiple treatments for enhanced results. She'll recommend the best approach during your consultation.",
    },
    {
      question: "What kind of downtime should I expect?",
      answer: "Downtime varies by treatment. Light treatments like chemical peels may cause mild redness, while microneedling may show redness for 2-4 days. Dr. Shirazi will discuss this beforehand.",
    },
    {
      question: "When will I see results?",
      answer: "Some treatments show results immediately, while others require 4-6 weeks as collagen remodels. Most patients see continued improvement over months.",
    },
  ],
  regenerative: [
    {
      question: "What's the difference between PRP and PRF?",
      answer: "PRF is the next generation with higher platelet concentration and sustained release of growth factors for enhanced and longer-lasting results.",
    },
    {
      question: "Is regenerative medicine right for me?",
      answer: "Regenerative treatments work best for tissue rejuvenation and function improvement. During your consultation, Dr. Shirazi will assess if these are ideal for your goals.",
    },
    {
      question: "Are there any side effects?",
      answer: "Regenerative treatments use your body's own healing factors, so there's minimal risk of adverse reactions. Mild redness or swelling may occur briefly.",
    },
    {
      question: "How long do results last?",
      answer: "Results are progressive and can last 12-18 months or longer. Maintenance treatments help sustain benefits over time.",
    },
  ],
  "mens-health": [
    {
      question: "Is treatment at Healinque confidential?",
      answer: "Absolutely. We completely understand the sensitive nature of these treatments and prioritize your privacy and discretion at every step.",
    },
    {
      question: "Are there any restrictions after treatment?",
      answer: "Most treatments have no downtime. We recommend avoiding strenuous activity and intercourse for 48 hours to allow initial healing.",
    },
    {
      question: "How long do results last?",
      answer: "Most men enjoy improved results for 12-18 months. Annual maintenance treatments help sustain optimal benefits.",
    },
    {
      question: "How is this different from medications?",
      answer: "These treatments use your body's own growth factors to rejuvenate tissue and improve function naturally, without ongoing prescriptions.",
    },
  ],
  wellness: [
    {
      question: "Do you accept insurance for wellness treatments?",
      answer: "Coverage varies by treatment and plan. We can provide documentation for insurance submission. Many patients choose self-pay for convenience.",
    },
    {
      question: "How quickly will I see results?",
      answer: "Results vary by treatment. Some show benefits within days, while others show gradual improvement over weeks to months.",
    },
    {
      question: "Are wellness treatments customized?",
      answer: "Yes. Dr. Shirazi creates personalized protocols based on your health goals, lab work, and lifestyle. One-size-fits-all doesn't work.",
    },
    {
      question: "What should I bring to my consultation?",
      answer: "Bring any recent lab work or health records. This helps Dr. Shirazi understand your baseline health and recommend the best treatments.",
    },
  ],
};

const categoryOverviews: Record<string, { title: string; content: string[] }> = {
  aesthetics: {
    title: "Aesthetic Treatments for Timeless Beauty",
    content: [
      "Our aesthetic treatments enhance your natural features with precision and restraint. Whether you're interested in subtle refinement or more noticeable enhancement, Dr. Shirazi's expertise ensures results that look like the best version of you.",
      "Injectables like Botox and dermal fillers are the foundation of many aesthetic plans. They address wrinkles, restore volume, and enhance contours—all with minimal downtime.",
      "Patients choose Healinque aesthetic treatments because Dr. Shirazi prioritizes natural results, listens carefully to your goals, and never oversells or overdoes treatments.",
    ],
  },
  regenerative: {
    title: "Regenerative Medicine: Healing from Within",
    content: [
      "Regenerative treatments harness your body's own healing power to restore function, rejuvenate tissue, and optimize health. These advanced protocols go beyond surface-level results.",
      "From PRP and PRF for facial rejuvenation and hair restoration to specialized therapies for sexual health and intimate wellness, our regenerative offerings are physician-designed and clinically proven.",
      "Patients seek regenerative medicine because they want natural, long-lasting results that address root causes—not just symptoms.",
    ],
  },
  "skin-rejuvenation": {
    title: "Skin Rejuvenation: Reveal Your Radiance",
    content: [
      "Medical-grade skin rejuvenation treatments transform texture, tone, and clarity. Whether combating sun damage, acne scarring, or signs of aging, these therapies stimulate your skin's natural renewal.",
      "Our skin rejuvenation menu includes microneedling, chemical peels, and combination protocols designed to work synergistically for enhanced results.",
      "Patients choose these treatments because they deliver visible, progressive improvement without invasive surgery—and because Dr. Shirazi customizes each plan.",
    ],
  },
  "mens-health": {
    title: "Men's Health: Confidence, Performance, Wellness",
    content: [
      "Healinque's men's program addresses aesthetic concerns, sexual health, and overall vitality in a comfortable, discreet setting. We understand the unique goals of male patients.",
      "From facial treatments to regenerative therapies designed for men's wellness, every treatment is performed by Dr. Shirazi in a judgment-free environment.",
      "Men choose Healinque because we take their concerns seriously, deliver honest results, and help them feel their best.",
    ],
  },
  wellness: {
    title: "Wellness & Longevity: Optimize Your Life",
    content: [
      "Wellness treatments address the whole body—energy, hormones, metabolism, and vitality. These physician-guided programs are customized to your unique health goals and baseline.",
      "From hormone optimization to weight loss support, our wellness offerings combine medical expertise with lifestyle coaching for sustainable, lasting results.",
      "Patients invest in wellness because they're committed to long-term health, not quick fixes. Dr. Shirazi partners with you to create your personalized longevity plan.",
    ],
  },
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const categoryTreatments = getTreatmentsByCategory(params.slug as any).map((t) => ({
    title: t.name,
    description: t.tagline,
    image: t.image,
    href: `/treatments/${t.slug}`,
    price: t.pricing.starting ? `$${t.pricing.starting}` : t.pricing.range || "Consultation required",
  }));

  const faqs = categoryFaqs[params.slug] || [];
  const overview = categoryOverviews[params.slug] || { title: category.name, content: [] };

  return (
    <div className="bg-navy-deep text-white">
      {/* Hero Section */}
      <Hero
        variant="page"
        title={category.name}
        subtitle="Treatment Category"
        description={category.description}
        image={category.image}
        overlay="gradient"
      />

      {/* Category Overview Section */}
      <section className="py-16 md:py-24 bg-navy-deep">
        <div className="container-healinque">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-gold mb-8">
              {overview.title}
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-white/90">
              {overview.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Grid Section */}
      <section className="py-16 md:py-24 bg-navy-deep">
        <div className="container-healinque">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gold mb-3">
              {category.name} Treatments
            </h2>
            <p className="text-white/70">Our specialized offerings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryTreatments.map((treatment, idx) => (
              <a
                key={idx}
                href={treatment.href}
                className="group bg-surface-card border border-white/5 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-navy-deep">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl font-serif text-gold mb-2 group-hover:text-white transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-4">{treatment.description}</p>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-gold font-medium text-sm">
                      {treatment.price}
                    </span>
                    <span className="text-white/50 group-hover:text-gold transition-colors text-sm">
                      Learn More →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-navy-deep border-t border-white/5">
          <div className="container-healinque">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-gold mb-3">
                {category.name} FAQ
              </h2>
              <p className="text-white/70">Common questions answered</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-surface-card border border-white/5 rounded-xl p-6 hover:border-gold/30 transition-all duration-300 cursor-pointer"
                >
                  <summary className="flex items-center justify-between text-lg font-serif text-gold group-hover:text-white transition-colors">
                    {faq.question}
                    <span className="inline-flex items-center justify-center w-6 h-6 ml-4 transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-white/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy-deep border-t border-white/5">
        <div className="container-healinque">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-gold mb-4">
              Ready to Transform Your Appearance or Health?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Schedule a consultation with Dr. Azi to discuss which treatments align with your goals. Every plan is personalized.
            </p>
            <a
              href="/book"
              className="inline-flex items-center justify-center px-8 py-3 bg-gold text-navy-deep font-serif rounded-lg hover:bg-gold/90 transition-all duration-300 font-medium"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
