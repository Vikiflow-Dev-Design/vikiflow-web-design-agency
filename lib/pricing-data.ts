export type BenefitType = {
  name: string;
  description: string;
  included: boolean;
};

export type PricingTierType = {
  id: string;
  name: string;
  description: string;
  maxProjects: number;
  discount: number;
  originalPrice: number;
  benefits: BenefitType[];
  featured?: boolean;
  available: boolean;
};

export const benefits = {
  prioritySupport: {
    name: "Priority Support",
    description: "Get responses within 24 hours for all your queries",
  },
  maintenance: {
    name: "Monthly Maintenance",
    description: "Regular updates and maintenance for your website",
  },
  futureUpdates: {
    name: "Future Updates",
    description: "Access to new features and improvements",
  },
  seoOptimization: {
    name: "SEO Optimization",
    description: "Basic search engine optimization setup",
  },
  analytics: {
    name: "Analytics Setup",
    description: "Website traffic and user behavior tracking",
  },
};

export const pricingTiers: PricingTierType[] = [
  {
    id: "beta-1",
    name: "Early Adopter",
    description: "Be among the first 25 clients to shape our future",
    maxProjects: 25,
    discount: 0.60,
    originalPrice: 2499,
    featured: true,
    available: true,
    benefits: [
      { ...benefits.prioritySupport, included: true },
      { ...benefits.maintenance, included: true },
      { ...benefits.futureUpdates, included: true },
      { ...benefits.seoOptimization, included: true },
      { ...benefits.analytics, included: true },
    ],
  },
  {
    id: "beta-2",
    name: "Growth Partner",
    description: "Join our growing community of successful businesses",
    maxProjects: 50,
    discount: 0.40,
    originalPrice: 2499,
    available: false,
    benefits: [
      { ...benefits.prioritySupport, included: true },
      { ...benefits.maintenance, included: true },
      { ...benefits.futureUpdates, included: false },
      { ...benefits.seoOptimization, included: true },
      { ...benefits.analytics, included: true },
    ],
  },
  {
    id: "beta-3",
    name: "Scale Up",
    description: "Last chance to get in on our beta pricing",
    maxProjects: 75,
    discount: 0.20,
    originalPrice: 2499,
    available: false,
    benefits: [
      { ...benefits.prioritySupport, included: false },
      { ...benefits.maintenance, included: true },
      { ...benefits.futureUpdates, included: false },
      { ...benefits.seoOptimization, included: true },
      { ...benefits.analytics, included: true },
    ],
  },
];
