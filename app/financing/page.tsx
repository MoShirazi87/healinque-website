"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero as Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Building2, Wallet } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { pexelsUrl, pageImages } from "@/lib/data/images";

const containerVariants = {
  hidden: {},
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const financingOptions = [
  {
    icon: CreditCard,
    title: "CareCredit",
    description:
      "CareCredit is a healthcare credit card accepted at Healinque. Apply online in minutes and, if approved, use it the same day. Promotional financing options include 0% APR for 6, 12, 18, or 24 months on qualifying purchases.",
    features: [
      "0% APR promotional periods available",
      "Apply online — instant decision",
      "Use for any treatment or package",
      "Accepted nationwide at healthcare providers",
    ],
  },
  {
    icon: Building2,
    title: "Cherry Financing",
    description:
      "Cherry offers simple, transparent payment plans designed specifically for aesthetic and wellness treatments. No hard credit check to apply, and most patients are approved within seconds.",
    features: [
      "No hard credit check to apply",
      "Approval in seconds",
      "Flexible monthly payment plans",
      "No hidden fees or prepayment penalties",
    ],
  },
  {
    icon: Wallet,
    title: "In-House Payment Plans",
    description:
      "For select treatments and packages, I offer in-house payment arrangements. During your consultation, we can discuss a plan that fits your budget and treatment goals.",
    features: [
      "Customized to your treatment plan",
      "No third-party applications",
      "Discuss options during your consultation",
      "Available for packages and larger treatments",
    ],
  },
];

const faqs = [
  {
    question: "Is the $100 consultation fee credited toward treatment?",
    answer:
      "Yes. Your $100 consultation fee is applied as a credit toward any treatment you choose to move forward with. If you book a treatment on the same day or at a future appointment, that fee is deducted from your total.",
  },
  {
    question: "Can I combine financing with membership discounts?",
    answer:
      "Absolutely. You can use CareCredit or Cherry to pay for treatments and still receive your Healinque Elite membership discount. The financing covers the final amount after any applicable discounts.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Aesthetic and longevity treatments are typically not covered by insurance. However, financing options like CareCredit and Cherry make it easier to invest in your care on a timeline that works for you.",
  },
  {
    question: "How do I apply for CareCredit or Cherry?",
    answer:
      "You can apply online before your visit or in my office. Both applications take just a few minutes. I'm happy to walk you through the process during your consultation.",
  },
];

export default function FinancingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.healinque.com" },
    { name: "Financing", url: "https://www.healinque.com/financing" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Hero
        variant="page"
        title="Financing Options"
        subtitle="INVEST IN YOURSELF"
        description="Quality aesthetic care should be accessible. I offer flexible financing through CareCredit, Cherry, and in-house payment plans so you can prioritize your goals on your terms."
        image={pexelsUrl(pageImages.contactHero.primary, 1920)}
        overlay="dark"
      />

      {/* Financing Options — CREAM (Light) */}
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
                Payment Options
              </p>
              <div className="h-[1px] w-8 bg-[#C9A227]" />
            </div>
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl md:text-4xl font-bold text-navy-deep mb-4"
            >
              Flexible Ways to{" "}
              <span className="text-[#C9A227] italic">Pay</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-navy-deep/70 leading-relaxed">
              I believe your treatment plan should be guided by your goals, not your budget.
              That&apos;s why I partner with trusted financing providers and offer in-house
              arrangements to make care more accessible.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {financingOptions.map((option) => (
              <motion.div
                key={option.title}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#C9A227]/10 hover:shadow-md hover:border-[#C9A227]/25 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 flex items-center justify-center mb-5">
                  <option.icon className="w-6 h-6 text-[#C9A227]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-deep mb-3">
                  {option.title}
                </h3>
                <p className="text-navy-deep/60 text-sm leading-relaxed mb-5">
                  {option.description}
                </p>
                <ul className="space-y-2.5">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-navy-deep/70">
                      <Check className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Consultation Credit — DARK */}
      <section className="section-padding bg-navy-deep">
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
                Good to Know
              </p>
              <div className="h-[1px] w-8 bg-[#C9A227]" />
            </div>
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Your $100 Consultation Fee Is{" "}
              <span className="text-[#C9A227] italic">Credited</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-white/60 leading-relaxed text-lg mb-8"
            >
              Every new patient consultation is $100. When you decide to move forward with
              treatment, that fee is applied directly as a credit toward your total cost.
              It&apos;s my way of ensuring your consultation investment goes toward your care.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button asChild size="lg">
                <Link href="/book">Book Your Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ — CREAM (Light) */}
      <section className="section-padding bg-cream">
        <div className="container-healinque max-w-3xl">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#C9A227]" />
              <p className="text-[#C9A227] font-medium tracking-widest uppercase text-xs">
                Common Questions
              </p>
              <div className="h-[1px] w-8 bg-[#C9A227]" />
            </div>
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl md:text-4xl font-bold text-navy-deep"
            >
              Financing <span className="text-[#C9A227] italic">FAQ</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {faqs.map((faq) => (
              <motion.details
                key={faq.question}
                variants={itemVariants}
                className="group bg-white rounded-xl border border-[#C9A227]/10 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-navy-deep font-serif font-semibold text-lg hover:text-[#C9A227] transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="text-[#C9A227] text-xl ml-4 group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-navy-deep/60 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA — DARK */}
      <section className="section-padding bg-navy-deep">
        <div className="container-healinque text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready to Get <span className="text-[#C9A227] italic">Started?</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/60 leading-relaxed mb-8">
              Schedule a consultation to discuss your goals. I&apos;ll walk you through
              treatment options and help you find a financing plan that works.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/book">Book a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
