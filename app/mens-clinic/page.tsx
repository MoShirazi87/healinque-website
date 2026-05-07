import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero as Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { pexelsUrl, pageImages, videos } from "@/lib/data/images";
import { Disclaimer } from "@/components/ui/disclaimer";
import { siteConfig, getPhoneLink } from "@/lib/config/site";

const menServices = [
  {
    title: "Brotox (Botox for Men)",
    description: "Preventative and corrective neuromodulator treatment — smoothing forehead lines, frown lines, and crow's feet while maintaining a natural, masculine look. Men typically need 20–30% more units due to stronger facial muscles.",
    price: "Starting at $12/unit (Botox), $4.50/unit (Dysport)",
    image: "3985329",
  },
  {
    title: "Jawline Contouring",
    description: "Define and strengthen the jawline with dermal fillers. Using high-G-prime fillers like Juvéderm VOLUX or Radiesse, Dr. Shirazi builds a more structured, angular lower face — the most requested male filler treatment.",
    price: "Starting at $800/syringe",
    image: "3985338",
  },
  {
    title: "Dermal Fillers",
    description: "Restore volume to temples, cheeks, or under-eyes. Male filler technique preserves masculine features — no feminized arches, no overfilled look.",
    price: "Starting at $600/syringe",
    image: "3738355",
  },
  {
    title: "Hair Restoration (PRP)",
    description: "PRP scalp therapy to support hair density and slow thinning. Clinical evidence shows PRP can improve hair count and thickness in androgenetic alopecia. Can be combined with topical or oral medical therapies.",
    price: "Starting at $800/session, Series of 4: $2,800",
    image: "4041392",
  },
  {
    title: "P-Shot (Investigational)",
    description: "PRP-based treatment for sexual wellness. Considered investigational by the American Urological Association — Dr. Shirazi provides honest evaluation and may recommend urology referral for ED-related concerns.",
    price: "Starting at $1,700",
    image: "3764568",
  },
  {
    title: "Testosterone Evaluation & Optimization",
    description: "Comprehensive lab work and clinical evaluation for low testosterone. Diagnosis requires documented low levels on repeat morning draws. Treatment options include TRT, clomiphene, and lifestyle optimization — all under physician supervision with regular monitoring.",
    price: "Starting at $300/month",
    image: "5069432",
  },
  {
    title: "Hyperhidrosis Treatment (Excessive Sweating)",
    description: "Botox injections for underarm sweating — FDA-approved for severe primary axillary hyperhidrosis. Reduces sweating by 80–90% for 6–12 months. A practical, life-improving treatment.",
    price: "Starting at $1,000",
    image: "3865676",
  },
  {
    title: "GLP-1 Weight Loss",
    description: "Physician-supervised medical weight loss with FDA-approved GLP-1 medications. Includes comprehensive metabolic evaluation, lab work, nutrition guidance, and body composition monitoring.",
    price: "Starting at $400/month",
    image: "3865676",
  },
];

const whyChoosePoints = [
  {
    title: "Dedicated Men's Day",
    description: "Friday is designed for male patients — a focused, efficient clinical environment.",
  },
  {
    title: "No Spa Vibes",
    description: "I respect your time and your preferences. Private treatment rooms, direct communication, and no unnecessary fluff.",
  },
  {
    title: "Physician-Led",
    description: "Dr. Shirazi personally performs injectable and advanced treatments. Not delegated to a nurse or aesthetician you've never met.",
  },
  {
    title: "Male Anatomy Expertise",
    description: "Male faces need a different approach — flat brows (not arched), angular contours (not soft), and conservative dosing. Dr. Shirazi understands the difference.",
  },
  {
    title: "Discreet & Confidential",
    description: "Your visit, your treatments, your business. I take privacy seriously.",
  },
];

const menFaqs = [
  {
    question: "Is Botox common for men?",
    answer:
      "More than you'd think. Male Botox procedures have increased over 380% in the last two decades. My typical male patient is a professional in his 30s–50s who wants to look refreshed and competitive — not frozen. I start conservative and adjust from there.",
  },
  {
    question: "Will anyone be able to tell?",
    answer:
      "That's the whole point of doing this right. Dr. Shirazi's approach for men is subtle and anatomy-specific — maintaining masculine features while softening lines. The goal is that people notice you look great, not that you \"had something done.\"",
  },
  {
    question: "How is treating male faces different?",
    answer:
      "Male facial anatomy is structurally different — denser muscles, thicker skin, different fat pad distribution. Injection techniques need to account for this. For example, male brows should stay flat and horizontal (an arched brow looks unnatural on most men), and jawline filler needs to create angular contours rather than soft curves.",
  },
  {
    question: "What is the P-Shot and does it work?",
    answer:
      "The P-Shot uses platelet-rich plasma (PRP) to support tissue health in the penile area. It's considered investigational by the American Urological Association, and results vary. Dr. Shirazi provides an honest evaluation and will refer to urology if your symptoms suggest an underlying condition that needs proper diagnosis first.",
  },
  {
    question: "How does hair restoration work?",
    answer:
      "I use PRP scalp injections to deliver growth factors directly to thinning areas. Clinical evidence shows PRP can improve hair density in androgenetic alopecia. Most patients need 3–4 treatments initially, then maintenance every 6–12 months. I may also recommend combining PRP with topical or oral medications for better results.",
  },
  {
    question: "How does testosterone therapy work?",
    answer:
      "It starts with lab work — at least two morning blood draws showing consistently low testosterone levels. If you qualify, options include injections, topical gels, or in some cases clomiphene (which preserves fertility). I monitor labs regularly to keep levels optimized and catch any side effects early.",
  },
  {
    question: "Can I come in without my partner knowing?",
    answer:
      "Yes. Everything about your visit — from scheduling to billing to treatment — is kept confidential per HIPAA regulations. My Friday Men's Clinic day also means a male-focused environment.",
  },
];


export default function MensClinicalPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.healinque.com" },
    { name: "Men's Clinic", url: "https://www.healinque.com/mens-clinic" },
  ];

  return (
    <main className="bg-navy-deep">
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <Hero
        variant="page"
        subtitle="MEN'S CLINIC — FRIDAYS IN POWAY"
        title="Built for Men. Led by a Physician."
        description="Every Friday, Healinque shifts into Men's Clinic mode — a discreet, efficient, physician-led environment for aesthetics, hormone optimization, hair restoration, and sexual wellness. No spa vibes. No upsells. Just clinical care designed around how men actually want to be treated."
        image={pexelsUrl(pageImages.mensClinicHero.primary, 1920)}
        video={videos.mensClinic}
      />

      {/* Intro Section — Light (Cream) */}
      <section className="section-padding bg-cream text-navy-deep border-b border-taupe/10">
        <div className="container-healinque">
          <div
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="h-px w-12 bg-[#C9A227]" />
            </div>
            <p className="text-xs uppercase tracking-widest text-navy-deep/60 mb-6 font-medium">
              The Right Approach
            </p>
            <h2 className="font-serif text-5xl mb-8 text-navy-deep">
              A Different Kind of <span className="italic text-[#C9A227]">Clinic Day</span>
            </h2>
            <p className="text-lg text-navy-deep/75 leading-relaxed mb-6">
              Friday is my dedicated Men&apos;s Clinic day. No flowery marketing. No spa music. Just a physician-led clinical setting and treatments designed around the way men actually want to be treated — efficiently, discreetly, and with zero BS.
            </p>
            <p className="text-lg text-navy-deep/75 leading-relaxed">
              Male aesthetic patients are the fastest-growing segment in the industry, and for good reason. Looking sharp isn&apos;t vanity — it&apos;s maintenance. Dr. Shirazi understands male facial anatomy, masculine aesthetic goals, and the treatments that get results without making you look &quot;done.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Services for Men — Dark */}
      <section className="section-padding bg-navy-deep text-white relative overflow-hidden">
        <div className="container-healinque">
          <div
            className="mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="h-px w-12 bg-[#C9A227]" />
            </div>
            <p className="text-xs uppercase tracking-widest text-white/60 text-center mb-6 font-medium">
              Clinical Excellence
            </p>
            <h2 className="font-serif text-5xl text-center mb-4 text-white">
              Services for <span className="italic text-[#C9A227]">Men</span>
            </h2>
          </div>

          <div
            className="grid md:grid-cols-2 gap-8"
          >
            {menServices.map((service) => (
              <div
                key={service.title}
                className="bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-[#C9A227]/50 transition-colors duration-300"
              >
                <div className="p-8 flex flex-col">
                  <h3 className="font-serif text-2xl text-[#C9A227] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/75 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <p className="text-[#C9A227] text-sm font-semibold">
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Men's Packages — Light (Cream) */}
      <section className="section-padding bg-cream text-navy-deep">
        <div className="container-healinque">
          <div
            className="mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="h-px w-12 bg-[#C9A227]" />
            </div>
            <p className="text-xs uppercase tracking-widest text-navy-deep/60 text-center mb-6 font-medium">
              Investment Options
            </p>
            <h2 className="font-serif text-5xl text-center mb-4 text-navy-deep">
              Curated <span className="italic text-[#C9A227]">Packages</span>
            </h2>
          </div>

          <div
            className="grid md:grid-cols-2 gap-8"
          >
            {/* The Executive Refresh */}
            <div
              className="group"
            >
              <div
                className="bg-white border border-taupe/10 rounded-xl p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="font-serif text-2xl text-navy-deep mb-2 group-hover:text-[#C9A227] transition-colors duration-300">
                    The Executive Refresh
                  </h3>
                  <p className="text-navy-deep/60 text-sm mb-4">
                    The guy who wants to look sharp for work without anyone knowing why
                  </p>
                </div>
                <div className="mb-6">
                  <p className="text-3xl font-serif font-bold text-[#C9A227] mb-2">
                    $650
                  </p>
                  <p className="text-navy-deep/60 text-sm">About 45 minutes</p>
                </div>
                <div className="mb-8 flex-grow">
                  <p className="text-navy-deep font-semibold mb-2">
                    What&apos;s Included:
                  </p>
                  <ul className="text-navy-deep/75 text-sm space-y-1">
                    <li>• Botox (up to 40 units)</li>
                    <li>• DiamondGlow facial</li>
                  </ul>
                </div>
                <Link href="/book" className="w-full">
                  <Button className="w-full bg-[#C9A227] hover:bg-[#B8951F] text-navy-deep font-semibold">
                    Book Package
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* The Jawline Package */}
            <div
              className="group"
            >
              <div
                className="bg-white border border-taupe/10 rounded-xl p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="font-serif text-2xl text-navy-deep mb-2 group-hover:text-[#C9A227] transition-colors duration-300">
                    The Jawline Package
                  </h3>
                  <p className="text-navy-deep/60 text-sm mb-4">
                    Men who want a stronger, more defined lower face
                  </p>
                </div>
                <div className="mb-6">
                  <p className="text-3xl font-serif font-bold text-[#C9A227] mb-2">
                    $2,400
                  </p>
                  <p className="text-navy-deep/60 text-sm">About 60 minutes</p>
                </div>
                <div className="mb-8 flex-grow">
                  <p className="text-navy-deep font-semibold mb-2">
                    What&apos;s Included:
                  </p>
                  <ul className="text-navy-deep/75 text-sm space-y-1">
                    <li>• Jawline filler (2 syringes)</li>
                    <li>• Chin projection</li>
                    <li>• Kybella consultation</li>
                  </ul>
                </div>
                <Link href="/book" className="w-full">
                  <Button className="w-full bg-[#C9A227] hover:bg-[#B8951F] text-navy-deep font-semibold">
                    Book Package
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* The Power Hour */}
            <div
              className="group"
            >
              <div
                className="bg-white border border-taupe/10 rounded-xl p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="font-serif text-2xl text-navy-deep mb-2 group-hover:text-[#C9A227] transition-colors duration-300">
                    The Power Hour
                  </h3>
                  <p className="text-navy-deep/60 text-sm mb-4">
                    Busy professionals maintaining their look on a schedule
                  </p>
                </div>
                <div className="mb-6">
                  <p className="text-3xl font-serif font-bold text-[#C9A227] mb-2">
                    $400
                  </p>
                  <p className="text-navy-deep/60 text-sm">15–20 minutes</p>
                </div>
                <div className="mb-8 flex-grow">
                  <p className="text-navy-deep font-semibold mb-2">
                    What&apos;s Included:
                  </p>
                  <ul className="text-navy-deep/75 text-sm space-y-1">
                    <li>• Botox (up to 30 units)</li>
                    <li>• In and out during lunch</li>
                  </ul>
                </div>
                <Link href="/book" className="w-full">
                  <Button className="w-full bg-[#C9A227] hover:bg-[#B8951F] text-navy-deep font-semibold">
                    Book Package
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* The Full Rebuild — Featured with Gold Glow */}
            <div
              className="group relative"
            >
              {/* Gold gradient glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div
                className="relative bg-white border-2 border-[#C9A227] rounded-xl p-8 flex flex-col h-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">
                  <p className="text-[#C9A227] text-sm font-medium tracking-widest uppercase mb-3">
                    ★ Featured Plan
                  </p>
                  <h3 className="font-serif text-2xl text-navy-deep mb-2">
                    The Full <span className="italic text-[#C9A227]">Rebuild</span>
                  </h3>
                  <p className="text-navy-deep/60 text-sm mb-4">
                    Men who want a long-term plan, not a one-off visit
                  </p>
                </div>
                <div className="mb-6">
                  <p className="text-3xl font-serif font-bold text-[#C9A227] mb-2">
                    $499/month
                  </p>
                  <p className="text-navy-deep/60 text-sm">3-month minimum commitment</p>
                </div>
                <div className="mb-8 flex-grow">
                  <p className="text-navy-deep font-semibold mb-2">
                    What&apos;s Included:
                  </p>
                  <ul className="text-navy-deep/75 text-sm space-y-1">
                    <li>• Quarterly Botox</li>
                    <li>• Testosterone monitoring</li>
                    <li>• Monthly IV therapy</li>
                    <li>• 10% off all additional treatments</li>
                  </ul>
                </div>
                <Link href="/book" className="w-full">
                  <Button className="w-full bg-[#C9A227] hover:bg-[#B8951F] text-navy-deep font-semibold">
                    Book Package
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Men Choose Healinque — Dark */}
      <section className="section-padding bg-navy-deep text-white border-y border-white/5">
        <div className="container-healinque">
          <div
            className="mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="h-px w-12 bg-[#C9A227]" />
            </div>
            <p className="text-xs uppercase tracking-widest text-white/60 text-center mb-6 font-medium">
              The Advantage
            </p>
            <h2 className="font-serif text-5xl text-center text-white">
              Why Men Choose <span className="italic text-[#C9A227]">Healinque</span>
            </h2>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChoosePoints.map((point, index) => (
              <div
                key={point.title}
                className="group relative"
              >
                <div
                  className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#C9A227]/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
                >
                  <div className="absolute -top-8 -right-8 text-6xl font-serif text-[#C9A227]/10 group-hover:text-[#C9A227]/20 transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-serif text-xl text-[#C9A227] mb-4 relative z-10 group-hover:text-white/80 transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-white/75 leading-relaxed text-sm relative z-10">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section — Light (Cream) */}
      <section className="section-padding bg-cream text-navy-deep">
        <div className="container-healinque">
          <div
            className="mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="h-px w-12 bg-[#C9A227]" />
            </div>
            <p className="text-xs uppercase tracking-widest text-navy-deep/60 text-center mb-6 font-medium">
              Common Questions
            </p>
            <h2 className="font-serif text-5xl text-center text-navy-deep">
              Frequently Asked <span className="italic text-[#C9A227]">Questions</span>
            </h2>
          </div>

          <div
            className="max-w-3xl mx-auto space-y-4"
          >
            {menFaqs.map((faq, index) => (
              <div key={index}>
                <details className="group bg-white border border-taupe/10 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <h3 className="font-serif text-lg text-navy-deep group-hover:text-[#C9A227] transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <span className="text-[#C9A227] text-xl group-open:rotate-180 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-navy-deep/75 border-t border-taupe/10">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — Dark */}
      <section className="section-padding bg-navy-deep text-white relative overflow-hidden">
        <div className="container-healinque">
          <div
            className="max-w-3xl mx-auto text-center"
          >
            <div>
              <div className="flex justify-center mb-6">
                <div className="h-px w-12 bg-[#C9A227]" />
              </div>
              <p className="text-xs uppercase tracking-widest text-white/60 mb-6 font-medium">
                Next Steps
              </p>
              <h2 className="font-serif text-5xl mb-6 text-white">
                Ready to <span className="italic text-[#C9A227]">Get Started?</span>
              </h2>
            </div>

            <p
              className="text-lg text-white/75 mb-10 leading-relaxed"
            >
              Book your consultation. I&apos;ll assess your goals, give you honest answers, and build a plan that works.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <div className="w-full sm:w-auto">
                <Link href="/book" className="block w-full sm:w-auto">
                  <Button className="w-full bg-[#C9A227] hover:bg-[#B8951F] text-navy-deep px-8 font-semibold">
                    Book Men&apos;s Clinic Appointment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="w-full sm:w-auto">
                <a href={getPhoneLink()} className="block w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227]/10 px-8 font-semibold"
                  >
                    Call or Text (858) 337-7999
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-10 max-w-2xl mx-auto">
              <Disclaimer className="text-white/40 text-center" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
