"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { 
  Code2, 
  Blocks, 
  Paintbrush2, 
  FileCode2, 
  Frame, 
  Laptop2,
  Database,
  Cloud,
  Layers,
  Settings2
} from 'lucide-react';

type Technology = {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
};

const technologies: Technology[] = [
  {
    name: "Next.js",
    icon: <Blocks className="w-8 h-8" />,
    description: "React framework for production",
    color: "#0070f3"
  },
  {
    name: "React",
    icon: <Code2 className="w-8 h-8" />,
    description: "UI component library",
    color: "#61dafb"
  },
  {
    name: "Tailwind CSS",
    icon: <Paintbrush2 className="w-8 h-8" />,
    description: "Utility-first CSS framework",
    color: "#38bdf8"
  },
  {
    name: "TypeScript",
    icon: <FileCode2 className="w-8 h-8" />,
    description: "Typed JavaScript",
    color: "#3178c6"
  },
  {
    name: "Framer Motion",
    icon: <Frame className="w-8 h-8" />,
    description: "Animation library",
    color: "#ff0055"
  },
  {
    name: "Node.js",
    icon: <Settings2 className="w-8 h-8" />,
    description: "JavaScript runtime",
    color: "#68a063"
  },
  {
    name: "Database",
    icon: <Database className="w-8 h-8" />,
    description: "Data storage solutions",
    color: "#00758f"
  },
  {
    name: "Cloud Services",
    icon: <Cloud className="w-8 h-8" />,
    description: "Scalable infrastructure",
    color: "#ff9900"
  },
  {
    name: "UI/UX Design",
    icon: <Layers className="w-8 h-8" />,
    description: "User experience design",
    color: "#ff3366"
  },
  {
    name: "Full-Stack",
    icon: <Laptop2 className="w-8 h-8" />,
    description: "End-to-end development",
    color: "#6b46c1"
  }
];

function TechCard({ tech }: { tech: Technology }) {
  return (
    <Card className="p-6 aspect-square flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm border shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-primary/50">
      <div className="text-primary mb-3" style={{ color: tech.color }}>
        {tech.icon}
      </div>
      <h3 className="font-semibold text-sm mb-1">
        {tech.name}
      </h3>
    </Card>
  );
}

function MarqueeColumn({ technologies, speed = 20, reverse = false }: { 
  technologies: Technology[], 
  speed?: number,
  reverse?: boolean 
}) {
  // Double the items to create a seamless loop
  const items = [...technologies, ...technologies];
  
  return (
    <div className="flex flex-col overflow-hidden select-none h-[600px] relative">
      {/* Gradient Overlays */}
      <div className="absolute top-0 z-10 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 z-10 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      <div className="flex flex-col gap-4">
        <div 
          className="flex flex-col gap-4 animate-marquee-vertical"
          style={{ 
            animationDuration: `${speed}s`,
            animationDirection: reverse ? 'reverse' : 'normal'
          }}
        >
          {items.map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="w-full">
              <TechCard tech={tech} />
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div 
          aria-hidden
          className="flex flex-col gap-4 animate-marquee-vertical"
          style={{ 
            animationDuration: `${speed}s`,
            animationDirection: reverse ? 'reverse' : 'normal'
          }}
        >
          {items.map((tech, index) => (
            <div key={`${tech.name}-duplicate-${index}`} className="w-full">
              <TechCard tech={tech} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TechStack() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Split technologies into three groups for different columns
  const col1 = technologies.slice(0, 3);
  const col2 = technologies.slice(3, 6);
  const col3 = technologies.slice(6, 9);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto lg:mx-0"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="uppercase text-sm font-medium text-muted-foreground block mb-2">
                TECHNOLOGIES
              </span>
              Cutting-edge tools for modern solutions
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We leverage the latest technologies and frameworks to build scalable, performant, and beautiful web applications.
            </p>
            <Button size="lg" className="group">
              View Our Stack
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Right Column - Marquee */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-3 gap-4"
          >
            <MarqueeColumn technologies={col1} speed={30} />
            <MarqueeColumn technologies={col2} speed={25} reverse />
            <MarqueeColumn technologies={col3} speed={35} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
