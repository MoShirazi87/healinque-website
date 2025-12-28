import { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import Link from "next/link";
import { siteConfig, getPhoneLink } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about treatments, appointments, pricing, and policies at Healinque Wellness Clinic in Poway, CA.",
};

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "What makes Healinque different from other medical spas?",
        answer: "Healinque uniquely combines board-certified internal medicine expertise with advanced aesthetic treatments. Dr. Azi's dual specialty allows her to address both your aesthetic goals and underlying health factors. We also integrate emotional wellness screening into every consultation—rare in our industry.",
      },
      {
        question: "Do I need a referral to visit Healinque?",
        answer: "No referral is needed. You can book directly with us for any of our aesthetic or wellness services. For certain medical weight loss or hormone treatments, we may request records from your primary care physician.",
      },
      {
        question: "What are your hours and location?",
        answer: `We're located at ${siteConfig.address.full}. Our hours are ${siteConfig.hours.weekdays} and ${siteConfig.hours.saturday}. We offer some evening appointments by special arrangement.`,
      },
    ],
  },
  {
    title: "Appointments & Consultations",
    faqs: [
      {
        question: "Is a consultation required before treatment?",
        answer: "Yes, we require an initial consultation for new patients. This 45-60 minute appointment allows Dr. Azi to understand your goals, review your medical history, and create a personalized treatment plan. The consultation fee is credited toward any treatment you choose.",
      },
      {
        question: "Can I get treated the same day as my consultation?",
        answer: "Often yes! If Dr. Azi determines you're a good candidate and you'd like to proceed, many treatments can be performed immediately following your consultation.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 48 hours notice for cancellations or rescheduling. Late cancellations or no-shows may incur a fee. We understand emergencies happen—please call us as soon as possible if you need to change your appointment.",
      },
      {
        question: "Do you offer virtual consultations?",
        answer: "Yes! We offer telehealth consultations for follow-up appointments and certain wellness services. Initial aesthetic consultations are best done in person so Dr. Azi can properly assess your concerns.",
      },
    ],
  },
  {
    title: "Treatments & Procedures",
    faqs: [
      {
        question: "Does Dr. Azi perform all treatments?",
        answer: "Dr. Azi personally performs or directly supervises all medical treatments. For certain services like HydraFacials, our trained aestheticians may perform the treatment under Dr. Azi's protocol and supervision.",
      },
      {
        question: "Are your treatments painful?",
        answer: "Comfort is a priority. Most injectable treatments feel like a tiny pinch and are very tolerable. We offer numbing cream for more sensitive areas. For any procedure, we'll discuss what to expect and how we manage comfort.",
      },
      {
        question: "How long do results last?",
        answer: "This varies by treatment. Botox typically lasts 3-4 months, fillers 6-18 months depending on the area, and laser treatments offer progressive, long-lasting improvement. We'll discuss expected longevity during your consultation.",
      },
      {
        question: "What if I'm not happy with my results?",
        answer: "Your satisfaction is our priority. We schedule complimentary follow-up appointments to assess results and make adjustments if needed. For fillers, touch-ups within 2 weeks are typically complimentary.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    faqs: [
      {
        question: "Do you accept insurance?",
        answer: "Most aesthetic treatments are not covered by insurance. For certain medical services like hormone testing or weight management, coverage may apply. We can provide documentation for you to submit to your insurance.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, all major credit cards, HSA/FSA cards (for qualifying services), and CareCredit/Cherry financing. Payment is due at the time of service.",
      },
      {
        question: "Do you offer financing?",
        answer: "Yes! We partner with CareCredit and Cherry to offer flexible financing options, including 0% APR plans for qualified applicants. Apply online before your visit or ask our team for details.",
      },
      {
        question: "Do you offer package discounts?",
        answer: "Yes, we offer prepaid packages for many treatments at a discount. We also have membership programs with ongoing savings. Ask about our current packages and membership tiers.",
      },
    ],
  },
  {
    title: "Before & After Treatment",
    faqs: [
      {
        question: "How should I prepare for my appointment?",
        answer: "Arrive with a clean face (no makeup for facial treatments). Avoid blood thinners like aspirin, ibuprofen, fish oil, and vitamin E for 1 week before injectables to minimize bruising. We'll provide specific instructions based on your treatment.",
      },
      {
        question: "What should I expect after treatment?",
        answer: "This varies by procedure. For injectables, you may have minor swelling or bruising that resolves in a few days. For laser treatments, expect some redness. We provide detailed aftercare instructions for every treatment.",
      },
      {
        question: "When will I see results?",
        answer: "Botox results appear in 3-7 days, with full effect at 2 weeks. Filler results are immediate. Laser and regenerative treatments show progressive improvement over weeks to months.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Frequently Asked Questions"
        subtitle="Help Center"
        description="Find answers to common questions about our treatments, appointments, and policies."
        image="/images/faq-hero.jpg"
        overlay="dark"
      />

      {/* Category Navigation */}
      <section className="py-8 bg-cream border-b border-cream-dark">
        <div className="container-healinque">
          <nav className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category) => (
              <a
                key={category.title}
                href={`#${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 text-sm text-taupe hover:text-gold transition-colors"
              >
                {category.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* FAQ Sections */}
      {faqCategories.map((category) => (
        <section
          key={category.title}
          id={category.title.toLowerCase().replace(/\s+/g, "-")}
          className="scroll-mt-24"
        >
          <FAQSection
            title={category.title}
            faqs={category.faqs}
          />
        </section>
      ))}

      {/* Still Have Questions */}
      <section className="section-padding bg-navy-deep">
        <div className="container-healinque">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display font-serif text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-cream/80 mb-8">
              We&apos;re here to help. Reach out to our team and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-3 bg-gold text-white rounded-lg hover:bg-gold-dark transition-colors font-medium">
                  Contact Us
                </button>
              </Link>
              <a href={getPhoneLink()}>
                <button className="px-8 py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-white transition-colors font-medium">
                  Call {siteConfig.phone}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Book your consultation and let us answer all your questions in person."
        primaryCta={{ text: "Book Consultation", href: "/book" }}
        variant="minimal"
      />
    </>
  );
}

