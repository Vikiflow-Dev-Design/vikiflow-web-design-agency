"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const techStack = [
  {
    name: "Next.js",
    icon: "/icons/nextjs.svg",
  },
  {
    name: "React",
    icon: "/icons/react.svg",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
  },
  {
    name: "Node.js",
    icon: "/icons/nodejs.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwind.svg",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb.svg",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/postgresql.svg",
  },
  {
    name: "AWS",
    icon: "/icons/aws.svg",
  },
  {
    name: "Docker",
    icon: "/icons/docker.svg",
  },
  {
    name: "GraphQL",
    icon: "/icons/graphql.svg",
  },
];

export function TechStackSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/50" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container relative px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              Powered by Modern{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Technology
              </span>
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              We leverage cutting-edge technologies to build scalable and performant solutions
            </p>
          </motion.div>

          {/* Sliders */}
          <motion.div variants={itemVariants} className="space-y-8">
            <InfiniteSlider
              items={techStack}
              speed={40}
              direction="left"
              className="py-4"
            />
            <InfiniteSlider
              items={[...techStack].reverse()}
              speed={50}
              direction="right"
              className="py-4"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
