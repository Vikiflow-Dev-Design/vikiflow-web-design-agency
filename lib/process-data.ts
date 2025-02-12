export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  slug: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, target audience, and current challenges through in-depth consultations.",
    slug: "discovery"
  },
  {
    number: "02",
    title: "Planning",
    description: "Creating a comprehensive strategy and project roadmap based on research findings and business requirements.",
    slug: "planning"
  },
  {
    number: "03",
    title: "Design & Prototyping",
    description: "Our designers create stunning, user-centric designs and interactive prototypes that bring your vision to life.",
    slug: "design"
  },
  {
    number: "04",
    title: "Development",
    description: "Our expert developers transform the approved designs into a fully functional website using cutting-edge technologies.",
    slug: "development"
  },
  {
    number: "05",
    title: "Testing & Refinement",
    description: "Rigorous testing across devices and platforms ensures your website performs flawlessly for all users.",
    slug: "testing"
  },
  {
    number: "06",
    title: "Launch & Support",
    description: "We carefully deploy your website and provide ongoing support to ensure continued success and optimal performance.",
    slug: "launch"
  }
];
