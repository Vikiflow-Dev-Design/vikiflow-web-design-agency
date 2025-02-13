"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical web project take?",
    answer:
      "Project timelines are optimized for efficiency. A standard website typically takes 3-4 weeks, while more complex projects may take 6-8 weeks. We'll provide a detailed timeline during our consultation.",
  },
  {
    question: "What technologies do you use for development?",
    answer:
      "We use cutting-edge technologies including React, Next.js, TypeScript, and Tailwind CSS. Our modern tech stack is chosen to ensure optimal performance, scalability, and maintainability.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes, we offer comprehensive maintenance packages that include regular updates, security monitoring, performance optimization, and dedicated technical support to keep your website running smoothly.",
  },
  {
    question: "Can you help with branding and design?",
    answer:
      "Absolutely! Our creative team can help develop your brand identity, including logos, color schemes, typography, and overall visual strategy.",
  },
  {
    question: "Do you offer e-commerce solutions?",
    answer:
      "Yes, we build modern e-commerce solutions. We handle everything from product catalogs to payment processing and inventory management with a focus on innovation and user experience.",
  },
];

export function FaqSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-background to-background/80">
      {/* Background gradient elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl mb-4 text-primary"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent"
          >
            You've got questions, we've got answers
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <details className="group border-b border-primary/10">
                <summary className="flex items-center justify-between py-8 text-2xl font-medium cursor-pointer list-none hover:text-primary transition-colors">
                  {faq.question}
                  <span className="ml-6 flex h-7 w-7 items-center justify-center border border-primary/20 rounded-full group-open:rotate-45 transition-all duration-200 group-open:border-primary group-open:bg-primary/10">
                    <Plus className="h-4 w-4 group-open:text-primary" />
                  </span>
                </summary>
                <div className="pb-8 text-lg text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
