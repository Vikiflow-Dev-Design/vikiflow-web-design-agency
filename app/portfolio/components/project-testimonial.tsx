"use client";

import { Card } from "@/components/ui/card";
import { Quote, ArrowRight } from "lucide-react";
import { Testimonial } from "@/lib/portfolio-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProjectTestimonialProps {
  testimonial: Testimonial;
  projectSlug?: string;
}

export function ProjectTestimonial({
  testimonial,
  projectSlug,
}: ProjectTestimonialProps) {
  return (
    <Card className="p-6 transition-all duration-300">
      <div className="text-primary mb-4">
        <Quote className="h-8 w-8" />
      </div>
      <blockquote className="mb-4 text-lg italic">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center gap-4 mb-6">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
      {projectSlug && (
        <div className="flex justify-end">
          <Link href={`/portfolio/${projectSlug}`}>
            <Button variant="outline" className="group">
              View Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      )}
    </Card>
  );
}
