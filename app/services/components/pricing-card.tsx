"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { PricingTierType } from "@/lib/pricing-data";

interface PricingCardProps {
  tier: PricingTierType;
}

export function PricingCard({ tier }: PricingCardProps) {
  const discountedPrice = tier.originalPrice * (1 - tier.discount);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card
        className={`p-6 ${
          tier.featured ? "border-primary shadow-lg" : ""
        } relative overflow-hidden`}
      >
        {tier.featured && (
          <div className="absolute top-5 right-5">
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </span>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-2xl font-bold">{tier.name}</h3>
          <p className="text-muted-foreground mt-2">{tier.description}</p>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">
              ${discountedPrice.toFixed(0)}
            </span>
            <span className="text-muted-foreground line-through">
              ${tier.originalPrice}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            {(tier.discount * 100).toFixed(0)}% off - Limited time
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {tier.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              {benefit.included ? (
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-muted-foreground mt-0.5" />
              )}
              <div>
                <p className="font-medium">{benefit.name}</p>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button className="w-full" size="lg" disabled={!tier.available}>
          {tier.available ? "Get Started" : "Coming Soon"}
        </Button>

        {!tier.available && (
          <p className="text-sm text-muted-foreground text-center mt-2">
            Opens after {tier.maxProjects - 25} completed projects
          </p>
        )}
      </Card>
    </motion.div>
  );
}
