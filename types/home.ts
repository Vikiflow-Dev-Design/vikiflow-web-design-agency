import { Service } from "./services";
import { Project } from "@/lib/portfolio-data";
import { Testimonial } from "@/lib/testimonials-data";

export interface Stat {
  id: number;
  title: string;
  value: string;
}

// Using string type for icon name instead of the actual component
export interface Challenge {
  id: number;
  title: string;
  description: string;
}

export interface AboutStat {
  id: number;
  title: string;
  value: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  slug: string;
}

export interface HomePageData {
  stats: Stat[];
  challenges: Challenge[];
  services: Service[];
  aboutStats: AboutStat[];
  processSteps: ProcessStep[];
  testimonials: Testimonial[];
  projects: Project[];
}
