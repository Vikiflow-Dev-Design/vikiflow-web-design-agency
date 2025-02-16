export interface Testimonial {
  author: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface Project {
  category: string;
  id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  gallery?: string[];
  clientUrl: string;
  sector: string;
  type: string;
  objective: string;
  process: string;
  result: string;
  link: string;
  technologies?: string[];
  testimonial?: Testimonial;
  previousProject?: {
    title: string;
    description: string;
    image: string;
    slug: string;
  };
  nextProject?: {
    title: string;
    description: string;
    image: string;
    slug: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    category: "Construction",
    title: "Modern Construction Company",
    description:
      "A comprehensive web platform for a leading construction company, showcasing their projects and services.",
    slug: "modern-construction-company",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=1200",
    ],
    clientUrl: "https://example.com",
    sector: "Construction",
    type: "Corporate Website",
    objective: "Create a modern digital presence for the construction company",
    process: "Design consultation, development, and implementation",
    result: "Increased project inquiries by 200%",
    link: "https://example.com",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    testimonial: {
      author: "John Smith",
      role: "CEO",
      company: "Modern Construction Co.",
      quote:
        "The website perfectly represents our company's professional image and has significantly increased our client inquiries.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    },
  },
  {
    id: "2",
    category: "Events & Services",
    title: "Adomicas Events & Services",
    description:
      "A dynamic platform for an event planning and services company offering decoration, catering, and training.",
    slug: "adomicas-events-and-services",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1200",
    ],
    clientUrl: "https://example.com",
    sector: "Events & Hospitality",
    type: "Service Website",
    objective: "Showcase event planning and service offerings",
    process: "UX research, design, development, and testing",
    result: "300% increase in event bookings",
    link: "https://example.com",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    testimonial: {
      author: "Maria Rodriguez",
      role: "Founder",
      company: "Adomicas",
      quote:
        "Our new website has transformed how we showcase our services and connect with clients.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    },
  },
  {
    id: "3",
    category: "Agriculture",
    title: "Multitrade Agricultural Solutions",
    description:
      "An e-commerce and information platform for agricultural products and services including solar solutions and farming equipment.",
    slug: "multitrade-agricultural-solutions",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200",
    ],
    clientUrl: "https://example.com",
    sector: "Agriculture",
    type: "E-commerce",
    objective: "Create a comprehensive platform for agricultural solutions",
    process: "Market research, UX design, development",
    result: "250% increase in online sales",
    link: "https://example.com",
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "Framer Motion"],
    testimonial: {
      author: "David Wilson",
      role: "Operations Director",
      company: "Multitrade",
      quote:
        "The platform has revolutionized how we sell agricultural products and serve our customers.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
  },
  {
    id: "4",
    category: "Fitness",
    title: "Modern Fitness & Gym",
    description:
      "A modern website for a fitness center featuring class schedules, membership management, and virtual training options.",
    slug: "modern-fitness-and-gym",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200",
    ],
    clientUrl: "https://example.com",
    sector: "Health & Fitness",
    type: "Service Website",
    objective: "Create an engaging platform for gym members",
    process: "UX/UI design, development, testing",
    result: "400% increase in membership signups",
    link: "https://example.com",
    technologies: ["React", "Firebase", "Stripe", "TypeScript"],
    testimonial: {
      author: "Lisa Chen",
      role: "Fitness Director",
      company: "Modern Fitness",
      quote:
        "Our new website has made it easier than ever for members to engage with our services.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    },
  },
  {
    id: "5",
    category: "Services",
    title: "Professional Cleaning Agency",
    description:
      "A service booking platform for a professional cleaning company offering residential and commercial cleaning services.",
    slug: "professional-cleaning-agency",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=1200",
    ],
    clientUrl: "https://example.com",
    sector: "Cleaning Services",
    type: "Service Website",
    objective: "Streamline booking process and showcase services",
    process: "Service design, platform development",
    result: "200% increase in service bookings",
    link: "https://example.com",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    testimonial: {
      author: "Sarah Thompson",
      role: "Owner",
      company: "Clean Pro",
      quote:
        "The booking platform has transformed our business operations and customer experience.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    },
  },
  {
    id: "6",
    category: "E-commerce",
    title: "Gnaza Jewelry",
    description:
      "An elegant e-commerce platform for a jewelry brand, featuring a sophisticated product showcase and secure payment processing.",
    slug: "gnaza-jewelry",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=1200",
    ],
    clientUrl: "https://example.com",
    sector: "Jewelry",
    type: "E-commerce",
    objective: "Create a luxury online shopping experience",
    process: "Brand strategy, UX design, development",
    result: "350% increase in online sales",
    link: "https://example.com",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
    testimonial: {
      author: "Emma Davis",
      role: "Creative Director",
      company: "Gnaza",
      quote:
        "Our new e-commerce platform perfectly captures our brand essence and has significantly boosted our sales.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    },
  },
];
