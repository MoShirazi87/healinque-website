"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero as Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { pexelsUrl, pageImages } from "@/lib/data/images";
import { siteConfig } from "@/lib/config/site";

const faqs = [
  {
    question: "Is the IV session included every month?",
    answer: `Yes. Your monthly IV therapy session is included with your membership. We'll work with you to schedule it at a time that fits your routine — typically paired with an aesthetic treatment or on its own.`,
  },
  {
    question: "Can I roll over my IV if I miss a month?",
    answer: `IV sessions are designed to be used each month as part of your membership benefit. If you need to reschedule, we're happy to work around your schedule. If you need to pause the membership temporarily, contact our team.`,
  },
  {
    question: "Does the 10% discount stack with packages?",
    answer: `Your 10% member discount applies to individual treatments. Signature packages are already priced to deliver value — the discount doesn't stack on top of package pricing, but you can use your membership to invest in larger packages over time.`,
  },
  {
    question: "How do I cancel my membership?",
    answer: `You can cancel anytime by calling or texting (858) 337-7999. Your membership renews monthly, so cancellation takes effect at the end of your current billing cycle. We'll confirm the details in writing.`,
  },
  {
    question: "Can I gift a membership to someone else?",
    answer: `Absolutely. We can set up a membership gift for a friend or family member. They'll choose their start date and can manage the membership from there. Contact our team to arrange it.`,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function MembershipsPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.healinque.com" },
    { name: "Memberships", url: "https://www.healinque.com/memberships" },
  ];

  const { membership, pricing } = siteConfig;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Hero
        variant="page"
        title={membership.name}
        subtitle="MEMBERSHIP"
        description={`$${membership.price}/${membership.cadence} — ${membership.summary}`}
        image={pexelsUrl(pageImages.membershipHero.primary, 1920)}
        overlay="dark"
      />

      {/* Membership Overview Section — CREAM (Light) */}
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#C9A227]" />
              <p className="text-[#C9A227] font-medium tracking-widest uppercase text-xs">
                What&apos;s Included
              </p>
              <div className="h-[1px] w-8 bg-[#C9A227]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-deep mb-8">
              Built for Patients Who Take <span className="text-[#C9A227] italic">Care Seriously</span>
            </h2>
            <p className="text-lg text-navy-deep/75 leading-relaxed">
              This membership is designed for patients who already know they want to maintain their skin and health all year long, not just before an event. It combines monthly IV therapy, ongoing aesthetic maintenance, and priority access into one predictable monthly investment.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white rounded-2xl p-12 border border-taupe/10 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-taupe/10">
              <motion.div variants={itemVariants}>
                <p className="text-navy-deep/50 text-xs uppercase tracking-widest font-medium mb-2">
                  Monthly Investment
                </p>
                <p className="text-5xl font-bold text-[#C9A227]">
                  ${membership.price}
                </p>
                <p className="text-navy-deep/60 text-sm mt-2">
                  Month-to-month. Cancel anytime.
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="text-navy-deep/50 text-xs uppercase tracking-widest font-medium mb-2">
                  Included Benefits
                </p>
                <p className="text-lg text-navy-deep font-semibold">
                  Monthly IV therapy + Treatment discounts + Priority booking
                </p>
              </motion.div>
            </div>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-navy-deep/50 text-xs uppercase tracking-widest font-medium mb-4">
                Your Benefits
              </p>
              <ul className="space-y-3">
                {membership.benefits.map((benefit) => (
                  <motion.li key={benefit} variants={itemVariants} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <span className="text-navy-deep text-sm">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For Section — DARK */}
      <section className="section-padding bg-[#0a1628] orb-bg has-particles relative overflow-hidden" data-wipe>
        <div className="container-healinque">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#C9A227]" />
              <p className="text-[#C9A227] font-medium tracking-widest uppercase text-xs">
                Right for You?
              </p>
              <div className="h-[1px] w-8 bg-[#C9A227]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
              Who This Is <span className="text-[#C9A227] italic">For</span>
            </h2>
            <p className="text-lg text-white/75 leading-relaxed">
              This membership is for patients who know they want to maintain their skin, schedule monthly IV therapy, and want priority access to my schedule. It&apos;s designed for ongoing care—not a one-month trial. If you&apos;re committed to consistent maintenance and want bundled benefits, this is for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section — CREAM */}
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-[1px] w-8 bg-[#C9A227]" />
              <p className="text-[#C9A227] font-medium tracking-widest uppercase text-xs">
                The Three Steps
              </p>
              <div className="h-[1px] w-8 bg-[#C9A227]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-deep">
              How It <span className="text-[#C9A227] italic">Works</span>
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                num: "1",
                title: "Sign Up",
                copy: "Choose your start date and agree to the membership terms. Your first monthly charge begins on your selected date.",
                image: "3764568",
              },
              {
                num: "2",
                title: "Use Your Benefits",
                copy: "Schedule your monthly IV therapy, book treatments at your member discount rate, and enjoy priority scheduling.",
                image: "3764568",
              },
              {
                num: "3",
                title: "Cancel Anytime",
                copy: "No long-term commitment. Your membership renews monthly and you can cancel without penalty.",
                image: "3865676",
              },
            ].map((step) => (
              <motion.div
                key={step.num}
                variants={itemVariants}
                className="flip-to-image relative min-h-[260px] bg-white border border-taupe/10 rounded-2xl overflow-hidden"
              >
                <div className="flip-front p-10 h-full">
                  <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center mb-6">
                    <span className="text-xl font-bold text-[#C9A227]">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-serif text-navy-deep mb-4">{step.title}</h3>
                  <p className="text-navy-deep/70 text-sm leading-relaxed">{step.copy}</p>
                </div>
                <div className="flip-back">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pexelsUrl(step.image, 800)}
                    alt={step.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <div className="w-10 h-10 rounded-full bg-[#C9A227] flex items-center justify-center mb-3">
                      <span className="text-lg font-bold text-navy-deep">{step.num}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-white">{step.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Member Discount Section — DARK */}
      <section className="section-padding bg-[#0a1628] orb-bg has-particles relative overflow-hidden" data-wipe>
        <div className="container-healinque">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#C9A227]" />
              <p className="text-[#C9A227] font-medium tracking-widest uppercase text-xs">
                Your Discount
              </p>
              <div className="h-[1px] w-8 bg-[#C9A227]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
              10% Off Treatments You <span className="text-[#C9A227] italic">Use Most</span>
            </h2>
            <p className="text-lg text-white/75 leading-relaxed">
              Your membership comes with a 10% discount on Botox, Dysport, chemical peels, and microneedling. Apply it month-to-month or bank your savings across multiple months for a larger treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cancellation & Terms Section — CREAM */}
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <motion.div
            className="max-w-3xl mx-auto bg-white rounded-2xl p-12 border border-taupe/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#C9A227]" />
              <p className="text-[#C9A227] font-medium tracking-widest uppercase text-xs">
                Terms & Cancellation
              </p>
              <div className="h-[1px] w-8 bg-[#C9A227]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-navy-deep text-center mb-8">
              How Your Membership <span className="text-[#C9A227] italic">Works</span>
            </h2>
            <p className="text-navy-deep/75 leading-relaxed mb-6">
              {membership.terms}
            </p>
            <div className="pt-6 border-t border-taupe/10">
              <p className="text-sm text-navy-deep/60">
                <span className="font-semibold text-navy-deep">Note on appointment cancellations:</span> {siteConfig.policies.cancellationFee}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Browse Packages CTA — DARK */}
      <section className="section-padding bg-[#0a1628] orb-bg has-particles relative overflow-hidden" data-wipe>
        <div className="container-healinque">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#C9A227]" />
              <p className="text-[#C9A227] font-medium tracking-widest uppercase text-xs">
                Next Step
              </p>
              <div className="h-[1px] w-8 bg-[#C9A227]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
              Ready for More <span className="text-[#C9A227] italic">Details?</span>
            </h2>
            <p className="text-lg text-white/75 leading-relaxed mb-10">
              Check out our signature packages or book a consultation to discuss whether this membership aligns with your goals.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Link href="/packages">
                  <Button
                    className="w-full sm:w-auto bg-[#C9A227] text-navy-deep hover:bg-[#B89420] font-semibold"
                    size="lg"
                  >
                    See Signature Packages
                  </Button>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/book">
                  <Button
                    className="w-full sm:w-auto bg-transparent border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227]/10"
                    size="lg"
                  >
                    Book Consultation
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section — DARK */}
      <section className="section-padding bg-[#0a1628] orb-bg has-particles relative overflow-hidden" data-wipe>
        <div className="container-healinque">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-[1px] w-8 bg-[#C9A227]" />
              <p className="text-[#C9A227] font-medium tracking-widest uppercase text-xs">
                QUESTIONS
              </p>
              <div className="h-[1px] w-8 bg-[#C9A227]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
              Membership <span className="text-[#C9A227] italic">FAQ</span>
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors group"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="text-white font-serif text-lg mb-4">{faq.question}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section — CREAM */}
      <section className="section-padding bg-cream">
        <div className="container-healinque">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-[1px] w-8 bg-[#C9A227]" />
              <p className="text-[#C9A227] font-medium tracking-widest uppercase text-xs">
                COMMON QUESTIONS
              </p>
              <div className="h-[1px] w-8 bg-[#C9A227]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-deep">
              Membership <span className="text-[#C9A227] italic">FAQ</span>
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {faqs.map((faq, idx) => (
              <motion.div key={idx} variants={itemVariants}>
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="section-padding bg-white border-t border-taupe/10">
        <div className="container-healinque">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <p className="text-xs text-navy-deep/60 leading-relaxed">
              <span className="font-semibold">Disclaimer:</span> {siteConfig.policies.disclaimer} Membership renews monthly and can be cancelled at any time. Please review our cancellation policy in the &quot;How Your Membership Works&quot; section above.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
