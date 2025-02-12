"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/portfolio-data";
import { ExternalLink, ArrowUpRight } from "lucide-react";

interface PortfolioSectionProps {
  projects: Project[];
}

export const PortfolioSection = ({ projects }: PortfolioSectionProps) => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our latest work and see how we help businesses grow through
            innovative design solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="min-h-screen sticky top-0 flex items-center justify-center py-12"
            >
              <div className="group relative w-full">
                {/* External Link Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.link, "_blank", "noopener,noreferrer");
                  }}
                  className="absolute right-8 top-8 z-20 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary/20"
                >
                  <ExternalLink className="h-4 w-4" />
                </button>

                <Link
                  href={`/portfolio/${project.slug}`}
                  className="block w-full"
                >
                  <div className="absolute right-4 md:right-8 top-0 text-7xl md:text-8xl font-bold text-primary/10 z-10">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="min-h-[60vh] overflow-hidden rounded-xl bg-background border shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                      <div className="relative aspect-[4/3] md:aspect-[3/2] w-full max-w-[500px] mx-auto overflow-hidden bg-muted rounded-lg">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 500px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          quality={90}
                          loading={parseInt(project.id) <= 2 ? "eager" : "lazy"}
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </div>
                        <p className="text-muted-foreground mb-6 md:text-lg">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies?.map((tech) => (
                            <span
                              key={tech}
                              className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
