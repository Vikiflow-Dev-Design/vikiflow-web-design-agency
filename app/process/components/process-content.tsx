"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ProcessStep } from "@/lib/home-data";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ProcessContentProps {
  step: ProcessStep;
  hasNext: boolean;
  hasPrevious: boolean;
  nextSlug?: string;
  previousSlug?: string;
}

export function ProcessContent({ 
  step, 
  hasNext, 
  hasPrevious, 
  nextSlug, 
  previousSlug 
}: ProcessContentProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Phase {step.number}</h2>
            <div className="prose prose-slate max-w-none">
              {step.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {step.features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-4 bg-muted/50 hover:bg-muted/70 transition-colors"
                >
                  {feature}
                </Card>
              ))}
            </div>
          </div>

          {/* Process Navigation */}
          <div className="pt-8 border-t">
            <div className="flex justify-between items-center">
              {/* Previous Step */}
              {hasPrevious && previousSlug && (
                <Link
                  href={`/process/${previousSlug}`}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="flex items-center">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous Step
                  </span>
                </Link>
              )}
              
              {/* Next Step */}
              {hasNext && nextSlug && (
                <Link
                  href={`/process/${nextSlug}`}
                  className="text-primary hover:text-primary/80 transition-colors ml-auto"
                >
                  <span className="flex items-center">
                    Next Step
                    <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Services Link */}
      <div className="mt-16">
        <Link
          href="/services"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Services
        </Link>
      </div>
    </div>
  );
}
