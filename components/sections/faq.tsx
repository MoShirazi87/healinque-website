"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  columns?: 1 | 2;
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  columns = 1,
}: FAQSectionProps) {
  const halfLength = Math.ceil(faqs.length / 2);
  const column1 = columns === 2 ? faqs.slice(0, halfLength) : faqs;
  const column2 = columns === 2 ? faqs.slice(halfLength) : [];

  return (
    <section className="section-padding bg-cream">
      <div className="container-healinque">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {subtitle && (
            <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
              {subtitle}
            </p>
          )}
          <h2 className="text-display font-serif text-navy-deep">{title}</h2>
        </motion.div>

        <div className={columns === 2 ? "grid md:grid-cols-2 gap-8" : "max-w-3xl mx-auto"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {column1.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left font-serif text-navy-deep hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-taupe">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {columns === 2 && column2.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {column2.map((faq, index) => (
                  <AccordionItem
                    key={index + halfLength}
                    value={`item-${index + halfLength}`}
                    className="bg-white rounded-lg px-6 border-none shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-serif text-navy-deep hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-taupe">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

