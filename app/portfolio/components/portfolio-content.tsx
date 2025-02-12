"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProjectCard } from "./project-card";
import { ProjectFilter } from "./project-filter";
import { ProjectTestimonial } from "./project-testimonial";
import { MotionDiv } from "./motion-elements";
import { projects } from "@/lib/portfolio-data";

export function PortfolioContent() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <ProjectFilter currentFilter={filter} onFilterChange={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <MotionDiv
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </MotionDiv>
          ))}
        </AnimatePresence>
      </div>

      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects
            .slice(0, 4)
            .map(
              (project) =>
                project.testimonial && (
                  <ProjectTestimonial
                    key={project.id}
                    testimonial={project.testimonial}
                    projectSlug={project.slug}
                  />
                )
            )}
        </div>
      </section>
    </>
  );
}
