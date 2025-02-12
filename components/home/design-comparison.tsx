"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Target,
  Search,
  Code2,
  Clock,
  HeartHandshake,
  AlertTriangle,
  Smartphone,
  Ban,
  AlertOctagon,
  Clock4,
  UserMinus,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const comparisonData = {
  positive: [
    {
      icon: Sparkles,
      title: "Design Innovation",
      description:
        "Transform your brand with distinctive, eye-catching designs that set new standards in digital aesthetics and user engagement.",
    },
    {
      icon: Target,
      title: "Adaptive Excellence",
      description:
        "Experience flawless performance on every screen size, with fluid layouts that adapt beautifully from mobile to desktop.",
    },
    {
      icon: Search,
      title: "Search Visibility",
      description:
        "Enhance search visibility with our innovative optimization techniques that drive organic traffic and increase your digital footprint.",
    },
    {
      icon: Code2,
      title: "Tailored Development",
      description:
        "Get a website perfectly aligned with your vision, featuring custom functionality that gives your business a competitive edge.",
    },
    {
      icon: Clock,
      title: "Efficient Delivery",
      description:
        "Enjoy rapid project completion with our streamlined process, delivering polished results that exceed expectations on schedule.",
    },
    {
      icon: HeartHandshake,
      title: "Ongoing Partnership",
      description:
        "Benefit from our committed support team, ensuring your website evolves and performs optimally long after launch.",
    },
  ],
  negative: [
    {
      icon: AlertTriangle,
      title: "Generic Design",
      description:
        "Risk losing potential customers with uninspiring templates that fail to capture your brand's unique personality.",
    },
    {
      icon: Smartphone,
      title: "Poor Mobile Experience",
      description:
        "Miss out on mobile users due to rigid layouts that break on different devices and screen sizes.",
    },
    {
      icon: Ban,
      title: "Invisible Online",
      description:
        "Struggle to attract visitors with poor search engine rankings due to unoptimized content and structure.",
    },
    {
      icon: AlertOctagon,
      title: "Limited Features",
      description:
        "Get stuck with inflexible solutions that don't match your business needs or growth requirements.",
    },
    {
      icon: Clock4,
      title: "Endless Delays",
      description:
        "Face frustrating setbacks and missed opportunities due to prolonged development timelines.",
    },
    {
      icon: UserMinus,
      title: "Abandoned After Launch",
      description:
        "Navigate post-launch challenges alone without professional guidance or technical support.",
    },
  ],
};

export function DesignComparison() {
  const [isPositive, setIsPositive] = useState(true);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[40rem] h-[40rem] opacity-20 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 relative">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              The{" "}
              <span
                className={`${
                  isPositive ? "text-primary" : "text-destructive"
                } transition-colors duration-500`}
              >
                {isPositive ? "advantages" : "challenges"}
              </span>
              <br />
              {isPositive ? "of working with us" : "of working without us"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {isPositive
                ? "Experience the transformation of your digital presence with our expert team"
                : "Don't let your business fall behind with outdated web solutions"}
            </p>
          </motion.div>

          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="flex items-center justify-center gap-8 w-full max-w-md">
              <Label
                htmlFor="comparison-mode"
                className={`text-lg font-semibold transition-colors duration-300 ${
                  !isPositive ? "text-muted-foreground" : "text-primary"
                }`}
              >
                With Us
              </Label>
              <Switch
                id="comparison-mode"
                checked={!isPositive}
                onCheckedChange={(checked) => setIsPositive(!checked)}
                className="data-[state=checked]:bg-destructive data-[state=unchecked]:bg-primary"
              />
              <Label
                htmlFor="comparison-mode"
                className={`text-lg font-semibold transition-colors duration-300 ${
                  !isPositive ? "text-destructive" : "text-muted-foreground"
                }`}
              >
                Without Us
              </Label>
            </div>
            <div
              className={`
              text-center text-xl font-medium transition-colors duration-300
              ${!isPositive ? "text-destructive" : "text-primary"}
            `}
            >
              {!isPositive ? "See the Risks" : "See the Difference"}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={isPositive ? "positive" : "negative"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {(!isPositive
              ? comparisonData.negative
              : comparisonData.positive
            ).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                  isPositive
                    ? "hover:shadow-primary/20"
                    : "hover:shadow-destructive/20"
                } hover:shadow-lg`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 backdrop-blur-[2px]" />
                <div className="relative p-6 h-full">
                  <div
                    className={`p-3 rounded-xl w-fit mb-4 transition-colors duration-300 ${
                      isPositive
                        ? "bg-primary/10 text-primary group-hover:bg-primary/20"
                        : "bg-destructive/10 text-destructive group-hover:bg-destructive/20"
                    }`}
                  >
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
