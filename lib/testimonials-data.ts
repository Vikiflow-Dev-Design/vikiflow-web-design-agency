export interface Testimonial {
  id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  technologies: string[];
  projectSlug: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    title: "Innovative Web Design Approach",
    description:
      "Their fresh perspective and innovative approach helped us create a modern, engaging website that perfectly represents our brand.",
    slug: "innovative-web-design",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800",
    technologies: ["React", "Tailwind CSS", "Next.js"],
    projectSlug: "ecommerce-platform-redesign",
  },
  {
    id: "2",
    title: "Modern E-commerce Solution",
    description:
      "Vikiflow delivered a cutting-edge e-commerce platform that has revolutionized our online presence and boosted our sales.",
    slug: "modern-ecommerce",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800",
    technologies: ["Shopify", "Custom CSS", "JavaScript"],
    projectSlug: "healthcare-management-system",
  },
  {
    id: "3",
    title: "Creative UI/UX Design",
    description:
      "Their innovative UI/UX design approach has created an engaging user experience that our customers love.",
    slug: "creative-ui-ux",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800",
    technologies: ["Figma", "Adobe XD", "Prototyping"],
    projectSlug: "financial-analytics-dashboard",
  },
];
