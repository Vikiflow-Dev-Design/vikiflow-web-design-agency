"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { processSteps } from "@/lib/process-data";
import { Button } from "@/components/ui/button";

export function ProcessTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="py-16 sm:py-20 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We follow an innovative methodology to deliver exceptional results
            for every project. Each step is carefully designed to ensure
            success.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line - Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/5 via-primary/20 to-primary/5 hidden md:block" />

          {/* Timeline Line - Mobile */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/5 via-primary/20 to-primary/5 md:hidden" />

          {/* Process Steps */}
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 sm:mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%]"
              } pl-12 sm:pl-16 md:pl-0 md:pr-0`}
            >
              <Link href={`/process/${step.slug}`} className="block">
                <div
                  className={`relative flex items-center gap-4 sm:gap-8 group ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Number - Desktop */}
                  <div className="absolute -left-[43px] md:left-auto md:right-auto md:-translate-x-1/2 top-6 w-8 h-8 rounded-full bg-card border-2 border-primary/20 hidden md:flex items-center justify-center text-sm font-semibold text-primary/60 group-hover:border-primary/40 group-hover:text-primary transition-colors">
                    {step.number}
                  </div>

                  {/* Step Number - Mobile */}
                  <div className="absolute -left-[43px] top-6 w-8 h-8 rounded-full bg-card border-2 border-primary/20 flex md:hidden items-center justify-center text-sm font-semibold text-primary/60 group-hover:border-primary/40 group-hover:text-primary transition-colors">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-card hover:bg-muted/50 p-4 sm:p-6 rounded-lg transition-all duration-300 border border-primary/10 group-hover:border-primary/20 group-hover:shadow-lg">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base mb-4">
                        {step.description}
                      </p>
                      <div className="flex items-center justify-between mt-4">
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
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
