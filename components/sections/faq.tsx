"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  columns?: 1 | 2;
  variant?: "light" | "dark";
}

export function FAQSection({
  title,
  subtitle,
  faqs,
  columns = 1,
  variant = "light",
}: FAQSectionProps) {
  const halfLength = Math.ceil(faqs.length / 2);
  const column1 = columns === 2 ? faqs.slice(0, halfLength) : faqs;
  const column2 = columns === 2 ? faqs.slice(halfLength) : [];

  const isDark = variant === "dark";

  const itemClass = cn(
    "rounded-lg px-6 border-none shadow-sm",
    isDark
      ? "bg-white/[0.03] backdrop-blur-sm border border-white/10"
      : "bg-white"
  );

  const triggerClass = cn(
    "text-left font-serif hover:no-underline",
    isDark ? "text-white" : "text-navy-deep"
  );

  const contentClass = cn(
    "leading-relaxed",
    isDark ? "text-white/70" : "text-navy-deep/70"
  );

  const accordion = (
    <div className={columns === 2 ? "grid md:grid-cols-2 gap-8" : ""}>
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="space-y-4">
          {column1.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={itemClass}
            >
              <AccordionTrigger className={triggerClass}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className={contentClass}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      {columns === 2 && column2.length > 0 && (
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {column2.map((faq, index) => (
              <AccordionItem
                key={index + halfLength}
                value={`item-${index + halfLength}`}
                className={itemClass}
              >
                <AccordionTrigger className={triggerClass}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={contentClass}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      )}
    </div>
  );

  // If no title is provided, render bare accordion (caller controls layout).
  if (!title) {
    return accordion;
  }

  return (
    <section
      className={cn("section-padding", isDark ? "bg-[#0a1628]" : "bg-cream")}
    >
      <div className="container-healinque">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {subtitle && (
            <p className="text-[#C9A227] font-medium tracking-wide uppercase text-sm mb-3">
              {subtitle}
            </p>
          )}
          <h2
            className={cn(
              "text-display font-serif",
              isDark ? "text-white" : "text-navy-deep"
            )}
          >
            {title}
          </h2>
        </motion.div>

        <div className={columns === 1 ? "max-w-3xl mx-auto" : ""}>
          {accordion}
        </div>
      </div>
    </section>
  );
}
