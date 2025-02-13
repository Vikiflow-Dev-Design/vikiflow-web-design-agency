"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    alt: "Modern web development workspace with code on screen",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    alt: "Creative web design process visualization",
  },
  {
    src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80",
    alt: "Web development team collaboration",
  },
];

export function HeroSection() {
  const words = ["Development", "Design", "Branding", "SEO"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    const imageInterval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000);

    return () => {
      clearInterval(wordInterval);
      clearInterval(imageInterval);
    };
  }, [isPaused]);

  return (
    <>
      {/* Hero Content */}
      <section className="relative w-full flex items-center justify-center overflow-hidden bg-background py-24">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />

          {/* Animated Circles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Beta Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <Badge
                variant="outline"
                className="py-1 px-4 backdrop-blur-sm border-primary/20"
              >
                <Sparkles className="w-4 h-4 mr-2 text-primary" />
                <span>Now in Beta • </span>
                <Link
                  href="/pricing"
                  className="text-primary ml-1 hover:underline"
                >
                  Get 50% Off
                </Link>
              </Badge>
            </motion.div> */}

            <div className="text-center space-y-8">
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Transforming Ideas into{" "}
                  <span className="relative">
                    <span className="absolute -inset-1 rounded-lg bg-primary/10 blur-sm" />
                    <span className="relative">Digital</span>
                  </span>{" "}
                  <div className="h-[1.2em] overflow-hidden mt-2">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentWordIndex}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="block bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                      >
                        {words[currentWordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Transform your online presence with vikiflow's expert web design
                and development services. We create stunning, responsive, and
                high-performance websites that drive business growth.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Button size="lg" className="h-12 px-6 text-base" asChild>
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 text-base group"
                  asChild
                >
                  <Link href="/portfolio">
                    View Our Work
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative bg-background pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="container mx-auto px-4"
        >
          <div
            className="relative max-w-4xl mx-auto rounded-xl overflow-hidden group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative aspect-video bg-muted rounded-xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                {images.map((image, index) => (
                  <motion.div
                    key={image.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 ${
                      currentImageIndex === index ? "z-10" : "z-0"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity duration-300" />
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index
                      ? "bg-primary w-4"
                      : "bg-primary/50 hover:bg-primary/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
