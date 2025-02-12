"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Testimonial {
  id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  technologies: string[];
  projectSlug: string;
}

export function TestimonialsHighlight({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Take first two testimonials
  const featuredTestimonials = testimonials.slice(0, 2);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Client Success Stories
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear directly from our clients about their experience working with
            us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 transition-all duration-300">
                <div className="text-primary mb-4">
                  <Quote className="h-8 w-8" />
                </div>
                <blockquote className="mb-4 text-lg italic">
                  "{testimonial.description}"
                </blockquote>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.title}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.technologies.join(", ")}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link href={`/portfolio/${testimonial.projectSlug}`}>
                    <Button variant="outline" className="group">
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild>
            <Link href="/testimonials" className="group hidden">
              View All Testimonials
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
