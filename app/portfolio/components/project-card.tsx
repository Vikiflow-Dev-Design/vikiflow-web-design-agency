"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/portfolio-data";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group relative border-primary/20 bg-background/5 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <Link href={`/portfolio/${project.slug}`} className="block">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-6 relative">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {(project.technologies || []).slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs py-0.5 px-2"
              >
                {tech}
              </Badge>
            ))}
            {(project.technologies || []).length > 3 && (
              <Badge variant="secondary" className="text-xs py-0.5 px-2">
                +{(project.technologies || []).length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </Link>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary/20"
      >
        <ExternalLink className="h-4 w-4" />
      </a>
    </Card>
  );
}
