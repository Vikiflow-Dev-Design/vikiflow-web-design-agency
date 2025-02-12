import { projects } from "@/lib/portfolio-data";
import { ProjectContent } from "@/app/portfolio/components/project-content";
import { notFound } from "next/navigation";

// Generate static pages for each project
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // Find project by slug
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
