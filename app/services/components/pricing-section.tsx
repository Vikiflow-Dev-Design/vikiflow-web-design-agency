"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import {
  Puzzle,
  Eye,
  ArrowUpRight,
  Shield,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { CTABanner } from "@/components/home/cta-banner";

export function PricingSection() {
  const features = [
    {
      title: "Custom Web Design & Development",
      description: "Unique, brand-aligned websites built just for you",
    },
    {
      title: "Responsive Mobile-First Design",
      description: "Perfect viewing experience across all devices",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Boost your visibility in search results",
    },
    {
      title: "Content Management System (CMS)",
      description: "Easy-to-use platform to manage your content",
    },
    {
      title: "Social Media Integration",
      description: "Seamless connection with your social presence",
    },
    {
      title: "Analytics & Performance Tracking",
      description: "Data-driven insights for growth",
    },
  ];

  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Tailored Solutions for Your Business
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We create custom web solutions designed specifically for your
            business needs. Each project is unique, and we ensure our services
            align perfectly with your goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="max-w-4xl mx-auto overflow-hidden bg-gradient-to-br from-card to-muted">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                <div>
                  <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                    Complete Web Solution
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Everything you need for a successful online presence
                  </p>
                </div>
                <Button size="lg" className="mt-6 md:mt-0 group">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-muted-foreground/10">
                <p className="text-center text-muted-foreground">
                  Every project is unique. Contact us for a personalized quote
                  tailored to your specific needs. We'll work together to create
                  the perfect solution for your business.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="relative mt-24 mb-32">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -left-1/4 top-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -right-1/4 bottom-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
                Why Choose Custom Pricing?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We believe in transparent, value-based pricing that aligns with
                your specific needs and goals. Here's why our approach works
                better:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Tailored Solutions",
                  description:
                    "Every project is unique, with its own requirements and challenges. Our custom pricing ensures you only pay for what you need.",
                  icon: Puzzle,
                },
                {
                  title: "Transparent Process",
                  description:
                    "We provide detailed breakdowns of costs and timelines, ensuring you understand exactly what you're investing in.",
                  icon: Eye,
                },
                {
                  title: "Flexible Scaling",
                  description:
                    "As your needs grow, our pricing adapts. Start with essential features and scale up when you're ready.",
                  icon: ArrowUpRight,
                },
                {
                  title: "Quality Assurance",
                  description:
                    "Our pricing reflects our commitment to delivering high-quality, thoroughly tested solutions that meet industry standards.",
                  icon: Shield,
                },
                {
                  title: "Ongoing Support",
                  description:
                    "We include post-launch support and maintenance options to ensure your project continues to perform optimally.",
                  icon: HeartHandshake,
                },
                {
                  title: "ROI Focused",
                  description:
                    "We align our pricing with your business goals, ensuring your investment drives tangible results and growth.",
                  icon: TrendingUp,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gradient-to-b from-background/80 to-background p-8 rounded-3xl border border-primary/10 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                  <div className="relative">
                    <div className="mb-4 inline-block p-3 bg-primary/10 rounded-2xl">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner - Full Width */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24"
        >
          <CTABanner
            title="Ready to Start Your Project?"
            description="Let's discuss your requirements and create a solution that perfectly fits your business needs."
            href="/contact"
          />
        </motion.div>
      </div>
    </section>
  );
}
