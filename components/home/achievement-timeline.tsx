"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Trophy, Users, Award, Rocket, Target } from 'lucide-react';

const achievements = [
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Awarded 'Best Web Design Agency' by Digital Excellence Awards",
    icon: <Trophy className="w-6 h-6" />,
    gradient: "from-yellow-500 to-yellow-600"
  },
  {
    year: "2023",
    title: "Client Milestone",
    description: "Successfully completed 100+ client projects across various industries",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    year: "2022",
    title: "Excellence in Innovation",
    description: "Recognized for pioneering AI-driven web design solutions",
    icon: <Award className="w-6 h-6" />,
    gradient: "from-purple-500 to-purple-600"
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Extended services to international markets across 3 continents",
    icon: <Rocket className="w-6 h-6" />,
    gradient: "from-green-500 to-green-600"
  },
  {
    year: "2021",
    title: "Market Leadership",
    description: "Became the leading web design agency in our region",
    icon: <Target className="w-6 h-6" />,
    gradient: "from-red-500 to-red-600"
  }
];

export function AchievementTimeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
              Our Journey
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milestones and achievements that mark our path of excellence
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-purple-600/50 to-primary/50" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } mx-auto max-w-5xl`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <Card className="inline-block p-6 hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${achievement.gradient} text-white`}>
                        {achievement.icon}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">
                          {achievement.year}
                        </span>
                        <h3 className="text-lg font-semibold">{achievement.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </Card>
                </div>
                
                {/* Timeline node */}
                <div className="relative z-10 w-4 h-4 rounded-full bg-primary shadow-lg">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                </div>
                
                <div className="flex-1" /> {/* Spacer */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
