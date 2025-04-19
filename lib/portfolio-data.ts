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
        "https://scontent-zrh1-1.xx.fbcdn.net/v/t39.30808-6/484446222_635725245882086_7803448033935390997_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH3etDx6QXQGbCdBZVTV4VLoy4SQOe_LV-jLhJA578tX7O19VmYZuWHHXSJaPgGJfrJr1lqwTtoOwxNjwB3LuTX&_nc_ohc=YypR0-rEH3MQ7kNvwGydA62&_nc_oc=AdlfzYl3VUggUTB_xRRBA1mMB-LzEjfQ3h7SSlUVN5ItM4LtRRUru56lIzlq19TwRSI&_nc_zt=23&_nc_ht=scontent-zrh1-1.xx&_nc_gid=qXJd2J7-8bNb1WTwZqYMvA&oh=00_AfHTx6vOsqbt4WKh3uMpxmWK51uFYyjwOzGl4t8gSuztfQ&oe=68094CCD",
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
        "https://scontent-zrh1-1.xx.fbcdn.net/v/t39.30808-6/483099815_4103632016585092_7573577240239466982_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEdFKeCVk40mLNYRtMbf-ogtLF5NhtOXxe0sXk2G05fF6nk4kWBCpsrs4Icqu16zpOtcVoWdFvkG7-aG74U9lvF&_nc_ohc=gN7wHEbGkp0Q7kNvwGX2aeP&_nc_oc=AdmuWAC6Ji-E0gYPoFGWMq6ZbRZMnAkAhWUmAriFe7reMnLFeQ4EMGqOLfcf4Schr4M&_nc_zt=23&_nc_ht=scontent-zrh1-1.xx&_nc_gid=CqGlomhy_ZPapoPs-r8dpA&oh=00_AfHW_qFAffi2-Ba5TFl6CP3J-R5vNC_lf3OTa_DnjOe7ow&oe=68095DE9",
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
        "https://scontent-zrh1-1.xx.fbcdn.net/v/t39.30808-6/392918880_313476734770944_6859275778171937365_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFtdOPW_-Qc9oRV1zgLu5Y7KpS64VqLoOEqlLrhWoug4UK3LhP-Y5i0LUuZJHbA_HQXjh9COzX3YHh5F-sc39si&_nc_ohc=D1JI-aTd_LgQ7kNvwGYT3r-&_nc_oc=Adm3Ralt6ibuvLfYumjMcmThRRJF8Hxjq1khLO0IfIqu95TNhIGmn0JIoVDcpaBmwns&_nc_zt=23&_nc_ht=scontent-zrh1-1.xx&_nc_gid=Ek1LE34gr6r_fKZRnOJ4Hw&oh=00_AfGCaiijXpnebiHOeIhma5J06YpsvUTMlHYdoVkUPz6lUQ&oe=680944D5",
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
        "https://scontent-zrh1-1.xx.fbcdn.net/v/t1.6435-9/118621603_184607689744746_3007382943538631972_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHcW9hmD9WNs5E2cni8n_3eN4Mep0N5bBc3gx6nQ3lsF8vYCUmQRa5bnbi288LZKqMPJRJUSMn8ZBelQ5wrBrvU&_nc_ohc=Ma8-SrccmO0Q7kNvwG1GEKH&_nc_oc=AdnXcftP5t_0P8f2qhrAVvsScXN32B3VJEoMaUu85CA2hn9_EYRi3wMQyJz5peWC3JU&_nc_zt=23&_nc_ht=scontent-zrh1-1.xx&_nc_gid=VnL4EnxWgolFDZadL35zfw&oh=00_AfHpUgmZPPex-taiJ1e9OK_U1VBSKs5JTEiPBV6lIzY6TQ&oe=682ACF31",
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
        "https://scontent-zrh1-1.xx.fbcdn.net/v/t1.6435-9/132820046_2838694679783517_6940635588116898838_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF1O58exPMbci76mWQHIsY89q_7WCUIgon2r_tYJQiCiTEGkmCy30kcfLg1_rh2byNcJfP_Ml763tz_UYDKukOn&_nc_ohc=JEGTmLKMWYIQ7kNvwG6bB2l&_nc_oc=AdnEwBmIY-vSsCBvPi7PijEA4i5ChtoucXDJ9QrGxxdZY5yezXNAzWzCG3DZxCC7iAc&_nc_zt=23&_nc_ht=scontent-zrh1-1.xx&_nc_gid=A5wdkh_-V91zAA_-rCH9aA&oh=00_AfF6VnfaQFtM3wElxgMLcZuxfcrCZkmhtP_Y5VSyUp8xRw&oe=682AF04A",
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
        "https://scontent-zrh1-1.xx.fbcdn.net/v/t39.30808-6/441065482_1973183803132116_6238604697524922969_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEIn6UtukvrPGUoqyyiLBjwQ7TtFCtvdi5DtO0UK292LudMW8D1fr8xCtOYYGM_TT6d8FpNRJRG3xyHUsUKRwbs&_nc_ohc=YiAAxhb1i7oQ7kNvwHKyWxT&_nc_oc=AdnpEivNXxJreFalgKghuDNuBKGB6JeTS0xlrJQD-mqddi30aY367-jxiV2ZSLFFdQU&_nc_zt=23&_nc_ht=scontent-zrh1-1.xx&_nc_gid=xU0tfoIHrhVCqOqF7_boOg&oh=00_AfFg55M8IyM13pDds_7OQgj21woQkUct1_zvyo7gzXnq2A&oe=6809479C",
    },
  },
];
