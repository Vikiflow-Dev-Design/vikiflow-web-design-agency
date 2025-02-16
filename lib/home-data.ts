import { Stat, Challenge } from "@/types/home";
import type { LucideProps } from "lucide-react";

export interface AboutStat {
  id: number;
  title: string;
  value: string;
  description: string;
  iconName: "Users2" | "Heart" | "Trophy" | "Clock";
}

export const aboutContent = {
  heading: "Pioneering Digital Innovation",
  subheading: "Creating Exceptional Digital Experiences",
  text: "At Vikiflow, we're more than just a web design agency - we're your partner in digital transformation. Our innovative team combines creativity with technical expertise to create stunning digital experiences that drive real business results.",
  highlights: [
    {
      title: "Innovation First",
      description:
        "We stay ahead of the curve with cutting-edge technologies and design trends.",
    },
    {
      title: "Client Success",
      description:
        "Your success is our priority. We work closely with you to achieve your business goals.",
    },
    {
      title: "Quality Driven",
      description:
        "We maintain high standards in every aspect of our work, from design to development.",
    },
  ],
};

export const stats: Stat[] = [
  {
    id: 1,
    title: "Client Satisfaction",
    value: "100%",
  },
  {
    id: 2,
    title: "Faster delivery",
    value: "2x",
  },
  {
    id: 3,
    title: "Support available",
    value: "24/7",
  },
];

export const aboutStats: AboutStat[] = [
  {
    id: 1,
    title: "Happy Clients",
    value: "100+",
    description: "Satisfied customers worldwide",
    iconName: "Users2",
  },
  {
    id: 2,
    title: "Projects Completed",
    value: "250+",
    description: "Delivered on time and on budget",
    iconName: "Trophy",
  },
  {
    id: 3,
    title: "Years Experience",
    value: "10+",
    description: "In web design and development",
    iconName: "Clock",
  },
  {
    id: 4,
    title: "Team Members",
    value: "15+",
    description: "Skilled professionals",
    iconName: "Heart",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  slug: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "In our discovery session, we collaborate with you and extract as much information about the project as possible, along with any expectations you have.",
    longDescription:
      "The discovery phase is crucial for understanding your business needs and project requirements. During this phase, we conduct in-depth consultations to gather information about your goals, target audience, and current challenges.\n\nWe analyze your existing digital presence, competitors, and industry trends to develop a comprehensive understanding of your market position. This helps us create a tailored strategy that aligns with your business objectives.",
    features: [
      "Requirements gathering",
      "Market analysis",
      "Goal setting",
      "Project scoping",
    ],
    image:
      "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80",
    slug: "discovery",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Wire-framing and sitemap creation are an essential part of the process. This allows everyone a birds eye view of the entire website.",
    longDescription:
      "During the planning phase, we transform insights from discovery into actionable plans. We create detailed wireframes, sitemaps, and project timelines to ensure everyone has a clear understanding of the project scope and deliverables.\n\nOur team develops a comprehensive project roadmap that outlines key milestones, deliverables, and timelines. This ensures transparent communication and sets clear expectations for the project journey.",
    features: [
      "Wireframing",
      "Sitemap creation",
      "Timeline planning",
      "Resource allocation",
    ],
    image:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80",
    slug: "planning",
  },
  {
    number: "03",
    title: "Design",
    description:
      "During the design phase, we can explore all the ideas and requests brought up in the discovery phase. We offer a number of design revisions until we get the desired look and feel for your project.",
    longDescription:
      "The design phase is where your vision starts taking shape visually. Our designers create stunning, user-centric designs that align with your brand identity and project requirements.\n\nWe follow an iterative design process, offering multiple revisions to ensure the final design perfectly matches your vision. Our focus is on creating intuitive, engaging interfaces that deliver exceptional user experiences.",
    features: [
      "UI/UX design",
      "Brand integration",
      "Design iterations",
      "Prototype creation",
    ],
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80",
    slug: "design",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We primarily develop websites using modern frameworks and technologies for the vast majority of our clients.",
    longDescription:
      "In the development phase, we bring designs to life using cutting-edge technologies and best practices. Our developers write clean, efficient code that ensures your website is fast, secure, and scalable.\n\nWe implement modern frameworks and technologies while ensuring compatibility across different platforms and devices. Regular code reviews and testing during development help maintain high quality standards.",
    features: [
      "Modern frameworks",
      "Responsive development",
      "Performance optimization",
      "Security implementation",
    ],
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80",
    slug: "development",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Before launching your new site, we test everything thoroughly to ensure your website works as it should, as well as being fully responsive.",
    longDescription:
      "Quality assurance is crucial for delivering a flawless end product. Our testing phase involves comprehensive checks across different devices, browsers, and platforms to ensure consistent performance.\n\nWe conduct thorough testing of all features, forms, and functionalities to identify and resolve any issues. Performance testing ensures your website loads quickly and functions smoothly under various conditions.",
    features: [
      "Cross-browser testing",
      "Mobile responsiveness",
      "Performance testing",
      "Security auditing",
    ],
    image:
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80",
    slug: "testing",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "After thorough testing and your approval, we deploy your website to production, ensuring a smooth transition and immediate availability.",
    longDescription:
      "The launch phase is carefully orchestrated to ensure a smooth transition to your live environment. We follow a detailed deployment checklist to ensure everything is properly configured and optimized.\n\nPost-launch, we monitor the website's performance and provide immediate support to address any issues. We also offer training and documentation to help you manage your new website effectively.",
    features: [
      "Deployment planning",
      "Performance monitoring",
      "Training & documentation",
      "Post-launch support",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80",
    slug: "launch",
  },
];

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "Focus",
    description: "59% of businesses struggle to secure the right finance.",
  },
  {
    id: 2,
    title: "Scale",
    description: "92% of businesses fail to hit their ambitions.",
  },
];
