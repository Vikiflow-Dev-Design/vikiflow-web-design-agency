"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import Link from "next/link";

interface ServiceContentProps {
  service: {
    title: string;
    description: string;
    features: string[];
    icon: string;
    content?: {
      overview: string;
      sections: {
        title: string;
        content: string;
        bulletPoints: string[];
      }[];
      benefits: string[];
      process: {
        title: string;
        description: string;
      }[];
      cta?: {
        title: string;
        description: string;
        buttonText: string;
      };
    };
  };
}

export function ServiceContent({ service }: ServiceContentProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [contentRef, contentInView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen pb-16">
      <PageHeader title={service.title} description={service.description} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        {service.content && (
          <motion.section
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.content.overview}
              </p>
            </div>
          </motion.section>
        )}

        {/* Features Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <Card
                key={index}
                className={`p-6 ${
                  isDark
                    ? "bg-background/5 backdrop-blur-sm border-primary/20 hover:border-primary/40"
                    : "bg-white border-gray-200 hover:border-primary/20"
                } transition-all duration-300 hover:shadow-lg group`}
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <span className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Detailed Sections */}
        {service.content?.sections.map((section, index) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              {section.title}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8 text-center">
                {section.content}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.bulletPoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        ))}

        {/* Benefits Section */}
        {service.content?.benefits && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.content.benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className={`p-6 ${
                    isDark
                      ? "bg-background/5 backdrop-blur-sm border-primary/20 hover:border-primary/40"
                      : "bg-white border-gray-200 hover:border-primary/20"
                  } transition-all duration-300 hover:shadow-lg`}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
                  <p className="font-medium">{benefit}</p>
                </Card>
              ))}
            </div>
          </motion.section>
        )}

        {/* Process Section */}
        {service.content?.process && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Process
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {service.content.process.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-6 ${
                      isDark ? "hover:bg-background/5" : "hover:bg-muted/50"
                    } p-6 rounded-lg transition-colors`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        {service.content?.cta && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                {service.content.cta.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {service.content.cta.description}
              </p>
              <Link href="/contact">
                <Button size="lg" className="group">
                  {service.content.cta.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
