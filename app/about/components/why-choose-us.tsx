"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Lightbulb, Users, Trophy, Clock } from "lucide-react";

const reasons = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovative Solutions",
    description:
      "We leverage the latest technologies and design trends to create cutting-edge solutions.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Team",
    description:
      "Our team of specialists brings innovative solutions and fresh perspectives to every project.",
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Quality Focus",
    description:
      "We maintain the highest standards of quality in every project we deliver.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Timely Delivery",
    description:
      "We pride ourselves on delivering projects on time and within budget.",
  },
];

export function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine creativity, technical expertise, and strategic thinking
            to deliver exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 text-center h-full">
                <div className="text-primary mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
