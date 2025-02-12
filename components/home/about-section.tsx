"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { AboutStat, aboutContent } from "@/lib/home-data";
import type { LucideProps } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface AboutSectionProps {
  stats: AboutStat[];
}

export function AboutSection({ stats }: AboutSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconName: AboutStat["iconName"]) => {
    const IconComponent = (
      LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>
    )[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

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
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/50" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container relative px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {aboutContent.heading}
            </h2>
            <p className="text-xl text-primary font-medium">
              {aboutContent.subheading}
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-12 mb-24"
          >
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-muted-foreground leading-relaxed">
                  {aboutContent.text}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {aboutContent.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-sm">{highlight.description}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg group"
                >
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="shadow-lg group"
                >
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
                  alt="Our team collaborating"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent mix-blend-multiply" />
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl -m-2 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-colors duration-300" />
                <div className="relative h-full p-6 space-y-6 bg-background/50 backdrop-blur-sm rounded-lg shadow-lg border border-primary/10 flex flex-col items-center">
                  <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 w-16 h-16 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-purple-600/20 transition-colors duration-300">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {getIcon(stat.iconName)}
                    </div>
                  </div>
                  <div className="flex-grow space-y-3 w-full">
                    <div className="flex items-baseline gap-1 justify-center">
                      <Counter
                        from={0}
                        to={parseInt(stat.value)}
                        className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center">
                      {stat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-center">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
