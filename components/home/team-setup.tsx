"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  Users, 
  Headphones, 
  Zap,
  Code,
  Palette,
  Database,
  TestTube,
  UserCog,
  Settings
} from 'lucide-react';

const processSteps = [
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Requirements collection",
    description: "Gathering and analyzing project requirements"
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Business proposal",
    description: "Creating detailed project scope and timeline"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Dedicated team formation",
    description: "Assembling the perfect team for your project"
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "Teams' collaboration",
    description: "Ensuring seamless communication and workflow"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Precise & timely results",
    description: "Delivering high-quality results on schedule"
  }
];

const teamRoles = [
  {
    icon: <Code className="h-12 w-12" />,
    title: "Front-end engineers",
    description: "Our team tackles all aspects of client-side development, including layout, navigation, and interactivity."
  },
  {
    icon: <Palette className="h-12 w-12" />,
    title: "UX/UI designers",
    description: "Side-by-side with engineers, our creative wizards translate design concepts into functional interfaces."
  },
  {
    icon: <Database className="h-12 w-12" />,
    title: "Back-end engineers",
    description: "Our back-end team builds the server infrastructure and implements your application's core logic."
  },
  {
    icon: <TestTube className="h-12 w-12" />,
    title: "QA engineers",
    description: "To meet all quality standards, our QA specialists perform testing at various stages of development."
  },
  {
    icon: <UserCog className="h-12 w-12" />,
    title: "Project managers",
    description: "By establishing a clear dialogue between you and our team, we ensure every project milestone is met."
  },
  {
    icon: <Settings className="h-12 w-12" />,
    title: "DevOps engineers",
    description: "For smoother workflows, our DevOps experts bridge the gap between development and operations teams."
  }
];

export function TeamSetup() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            HOW WE SET UP<br />OUR TEAMS
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-24">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center"
            >
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="text-primary">{step.icon}</div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-sm">{step.title}</h3>
                </div>
              </div>
              {index < processSteps.length - 1 && (
                <div className="w-8 h-px bg-border mx-4 hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Team Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamRoles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-4">{role.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
              <p className="text-muted-foreground">{role.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}