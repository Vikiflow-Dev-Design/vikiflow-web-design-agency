"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";
import { Service } from "@/types/services";
import { services as defaultServices } from "@/lib/services-data";
import { ArrowRight, Check } from "lucide-react";
import type { LucideProps } from "lucide-react";
import Link from "next/link";

function getIcon(iconName: string) {
  const IconComponent = (
    LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>
  )[iconName];
  return IconComponent ? <IconComponent className="h-8 w-8" /> : null;
}

export function ServicesSection({ services }: { services: Service[] }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  // Use passed services or fallback to default services
  const serviceItems = services.length > 0 ? services : defaultServices;

  return (
    <section ref={ref} className="py-24 overflow-hidden bg-background/50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 md:px-6 max-w-7xl"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Comprehensive digital solutions tailored to elevate your online
            presence and drive business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group relative ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl -m-2 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-colors duration-300" />
              <div
                className={`relative p-8 space-y-6 bg-background/50 backdrop-blur-sm rounded-lg shadow-lg border border-primary/10 h-full ${
                  index === 0 ? "md:flex md:gap-8 md:items-center" : ""
                }`}
              >
                <div
                  className={`bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-purple-600/20 transition-colors duration-300 ${
                    index === 0
                      ? "w-24 h-24 md:w-32 md:h-32 flex-shrink-0"
                      : "w-16 h-16"
                  }`}
                >
                  <div
                    className={`text-primary group-hover:scale-110 transition-transform duration-300 ${
                      index === 0 ? "scale-150" : ""
                    }`}
                  >
                    {getIcon(service.icon)}
                  </div>
                </div>
                <div className={`space-y-4 ${index === 0 ? "md:flex-1" : ""}`}>
                  <h3
                    className={`font-bold ${
                      index === 0 ? "text-3xl md:text-4xl" : "text-2xl"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul
                    className={`space-y-2 ${
                      index === 0
                        ? "md:grid md:grid-cols-2 md:gap-4 md:space-y-0"
                        : ""
                    }`}
                  >
                    {service.features?.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-5 h-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className={`mt-4 group-hover:bg-primary/5 ${
                      index === 0 ? "w-auto" : "w-full"
                    }`}
                  >
                    <Link href={`/services/${service.slug}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white shadow-lg"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
