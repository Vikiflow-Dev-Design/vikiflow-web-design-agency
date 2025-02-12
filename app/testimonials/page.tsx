"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageHeader } from "@/components/page-header";
import { ProjectTestimonial } from "@/app/portfolio/components/project-testimonial";
import { projects } from "@/lib/portfolio-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function TestimonialsPage() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Filter projects that have testimonials
  const projectsWithTestimonials = projects.filter(
    (project) => project.testimonial
  );

  return (
    <div className="pt-16">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <PageHeader
          title="Client Testimonials"
          description="Hear what our clients have to say about their experience working with us."
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsWithTestimonials.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectTestimonial
                testimonial={project.testimonial!}
                projectSlug={project.slug}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
