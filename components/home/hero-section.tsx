"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const words = ["Development", "Design", "Branding", "SEO"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
            <motion.div
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
            </motion.div>

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
                        key={currentIndex}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="block bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                      >
                        {words[currentIndex]}
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

      {/* Video Section */}
      <section className="relative bg-background pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden group">
            {/* Video Thumbnail */}
            <div className="relative aspect-video bg-muted rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity duration-300" />

              {/* Video Player */}
              {isVideoPlaying ? (
                <video
                  autoPlay
                  controls
                  className="w-full h-full object-cover"
                  onEnded={() => setIsVideoPlaying(false)}
                >
                  <source src="/videos/showreel.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Play Button */}
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group/play"
                  >
                    <div className="w-20 h-20 rounded-full bg-background/90 flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover/play:scale-110">
                      <Play className="w-8 h-8 text-primary fill-primary" />
                    </div>
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
