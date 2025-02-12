"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";
import { services } from "@/lib/services-data";
import { ArrowRight, Check } from "lucide-react";
import type { LucideProps } from "lucide-react";
import Link from "next/link";

function getIcon(iconName: string) {
  const IconComponent = (
    LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>
  )[iconName];
  return IconComponent ? <IconComponent className="h-8 w-8" /> : null;
}

interface Service {
  id: number;
  slug: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export function ServicesList() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="visible"
        animate="visible"
        className="container mx-auto px-4 md:px-6 max-w-7xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {services.slice(0, 2).map((service: Service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="block group relative"
            >
              <motion.div
                variants={itemVariants}
                initial="visible"
                animate="visible"
                className="h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl -m-2 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-colors duration-300" />
                <div className="relative p-8 space-y-6 bg-background/50 backdrop-blur-sm rounded-lg shadow-lg border border-primary/10 h-full">
                  <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 w-16 h-16 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-purple-600/20 transition-colors duration-300">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {getIcon(service.icon)}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map(
                        (feature: string, featureIndex: number) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <Check className="w-5 h-5 text-primary" />
                            <span>{feature}</span>
                          </li>
                        )
                      )}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full mt-4 group-hover:bg-primary/5"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
          {services.slice(2).map((service: Service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="block group relative"
            >
              <motion.div variants={itemVariants} className="h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl -m-2 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-colors duration-300" />
                <div className="relative p-8 space-y-6 bg-background/50 backdrop-blur-sm rounded-lg shadow-lg border border-primary/10 h-full">
                  <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 w-16 h-16 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-purple-600/20 transition-colors duration-300">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {getIcon(service.icon)}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map(
                        (feature: string, featureIndex: number) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <Check className="w-5 h-5 text-primary" />
                            <span>{feature}</span>
                          </li>
                        )
                      )}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full mt-4 group-hover:bg-primary/5"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
