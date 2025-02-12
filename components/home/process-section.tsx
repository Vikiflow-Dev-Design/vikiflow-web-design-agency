"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProcessSectionProps {
  steps: {
    number: string;
    title: string;
    description: string;
    slug: string;
  }[];
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px 0px",
  });

  return (
    <section className="effect-1 py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={headerRef}
          initial={false}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12 md:mb-16 space-y-4"
        >
          <h2 className="text-sm sm:text-base uppercase tracking-wider text-primary font-medium">
            THE PROCESS
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight">
            Our process is what makes our web projects run so smoothly
          </h3>
        </motion.div>

        {/* Process Steps Container */}
        <div className="relative">
          {steps.map((step, index) => {
            const [ref, inView] = useInView({
              threshold: 0,
              triggerOnce: false,
              rootMargin: "-20% 0px -20% 0px",
            });

            return (
              <Link key={step.number} href={`/process/${step.slug}`}>
                <motion.div
                  ref={ref}
                  className={cn(
                    "mb-4 sm:mb-6 lg:mb-8 group cursor-pointer",
                    // Desktop sticky behavior
                    "lg:sticky lg:top-[20vh] lg:h-[60vh]",
                    // Mobile scroll behavior
                    "relative h-auto min-h-[350px] sm:min-h-[400px]"
                  )}
                  initial={false}
                  animate={{
                    opacity: inView ? 1 : 0.3,
                    scale: shouldReduceMotion || !inView ? 1 : 0.95,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                  }}
                  style={{
                    zIndex: steps.length - index,
                  }}
                >
                  <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto h-full">
                    <div className="relative h-full overflow-hidden rounded-xl bg-background/50 backdrop-blur-sm border shadow-sm group-hover:shadow-md group-hover:border-primary/20 transition-all duration-300 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                      {/* Step Number */}
                      <div className="absolute -right-4 sm:-right-6 md:-right-8 -top-4 sm:-top-6 md:-top-8 opacity-10">
                        <span className="text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold text-primary">
                          {step.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col justify-center h-full max-w-2xl">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 group-hover:to-primary transition-all duration-300">
                          {step.title}
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                        <div className="mt-6 sm:mt-8">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="group/btn hover:text-primary transition-colors"
                          >
                            Learn More{" "}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
