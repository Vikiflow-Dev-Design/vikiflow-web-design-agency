import { HomePageData } from "@/types/home";
import { stats, challenges, aboutStats, processSteps } from "./home-data";
import { testimonials } from "./testimonials-data";
import { projects } from "./portfolio-data";
import { services } from "./services-data";
import { Service } from "@/types/services";

// This will be replaced with actual API calls later
export async function getHomePageData(): Promise<
  HomePageData & {
    aboutStats: typeof aboutStats;
    processSteps: typeof processSteps;
    testimonials: typeof testimonials;
  }
> {
  // Simulate API delay
  // await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    stats,
    challenges,
    services: services.slice(0, 3) as Service[],
    aboutStats,
    processSteps,
    testimonials: testimonials.slice(0, 3),
    projects: projects.slice(0, 3),
  };
}

export function getPortfolioPageData() {
  return {
    projects,
  };
}

export function getServicesPageData() {
  return {
    services,
  };
}

export function getTestimonialsPageData() {
  return {
    testimonials,
  };
}
