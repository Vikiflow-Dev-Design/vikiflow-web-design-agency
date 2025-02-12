"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { Stat } from "@/types/home";
import { Counter } from "@/components/ui/counter";
import { Heart, Zap, Clock } from "lucide-react";

interface StatsProps {
  stats: Stat[];
}

export function StatsSection({ stats }: StatsProps) {
  const { resolvedTheme } = useTheme();
  const [statsRef, statsInView] = useInView({ triggerOnce: true });
  const isDark = resolvedTheme === "dark";

  const statsData = [
    {
      id: 1,
      value: "100",
      title: "Client Satisfaction",
      icon: <Heart className="w-8 h-8" />,
    },
    {
      id: 2,
      value: "2",
      title: "Times Faster Delivery",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      id: 3,
      value: "24/7",
      title: "Support Available",
      icon: <Clock className="w-8 h-8" />,
    },
  ];

  return (
    <section ref={statsRef} className="py-24 relative bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl -m-2 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-colors duration-300" />
              <div className="relative h-full p-6 space-y-6 bg-background/50 backdrop-blur-sm rounded-lg shadow-lg border border-primary/10 flex flex-col items-center">
                <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 w-16 h-16 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-purple-600/20 transition-colors duration-300">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="flex-grow space-y-3 w-full">
                  <div className="flex items-baseline gap-1 justify-center">
                    {stat.value.includes("/") ? (
                      <span className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                    ) : (
                      <Counter
                        from={0}
                        to={parseInt(stat.value)}
                        className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    {stat.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
