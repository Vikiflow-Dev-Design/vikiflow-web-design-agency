export interface ServiceContent {
  overview: string;
  sections: {
    title: string;
    content: string;
    bulletPoints: string[];
  }[];
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export interface Service {
  id: number;
  title: string;
  icon: string;
  slug: string;
  description: string;
  features: string[];
  content: ServiceContent;
}
