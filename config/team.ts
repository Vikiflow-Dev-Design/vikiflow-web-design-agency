// Import team member images
import { StaticImageData } from "next/image";
import josephMazeImage from "@/public/images/team/joseph-maze.png";
import victorEzekielImage from "@/public/images/team/victor-vikiflow.jpg";
// import sephCreativeImage from "@/public/images/team/victor-ezekiel2.jpg";

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  image: string | StaticImageData;
  bio: string;
  expertise: string[];
  education: string;
  contact: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    slug: "victor-ezekiel",
    name: "Victor Ezekiel",
    role: "Full Stack Developer & Team Leader",
    image: victorEzekielImage,
    // image:
    //   "https://techsolutions-iota.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffile.f204eaf7.png&w=750&q=75",
    bio: `Victor Ezekiel is our innovative Full Stack Developer and Team Leader, bringing fresh perspectives 
    to both front-end and back-end development. His technical leadership drives our team's success in 
    delivering exceptional web solutions.

    With a strong foundation in modern web technologies and a passion for clean, efficient code, Victor 
    ensures our projects maintain the highest standards of quality and performance. His approach combines 
    technical excellence with strategic thinking to create scalable solutions.`,
    expertise: [
      "Full Stack Development",
      "Team Leadership",
      "Technical Architecture",
      "Project Management",
      "Performance Optimization",
      "Cloud Solutions",
    ],
    education: "Bachelor's in Computer Science",
    contact: "vikiflowdesign@gmail.com",
    social: {
      linkedin: "https://linkedin.com/in/victor-ezekiel",
      github: "https://github.com/victor-ezekiel",
    },
  },
  {
    id: "2",
    slug: "joseph-maze",
    name: "Joseph Maze",
    role: "Front End Development Lead",
    image: josephMazeImage,
    bio: `Joseph Maze drives our front-end development initiatives with innovative approaches and a passion 
    for creating exceptional user experiences. His expertise in cutting-edge front-end technologies and UI/UX 
    best practices ensures our clients receive modern web solutions.

    As our Front End Lead, Joseph specializes in building responsive, accessible, and performant web 
    applications. His forward-thinking approach to implementing front-end best practices and maintaining coding standards 
    has been crucial to our team's success.`,
    expertise: [
      "Front End Development",
      "UI/UX Implementation",
      "Responsive Design",
      "Modern JavaScript Frameworks",
      "Front End Architecture",
      "Performance Optimization",
    ],
    education: "Bachelor's in Web Development",
    contact: "vikiflowdesign@gmail.com",
    social: {
      linkedin: "https://linkedin.com/in/joseph-maze",
      github: "https://github.com/joseph-maze",
    },
  },
  // {
  //   id: "3",
  //   slug: "seph-creative",
  //   name: "Seph Creative",
  //   role: "Analytics & SEO Lead",
  //   image: sephCreativeImage,
  //   bio: `Seph Creative leads our Analytics and SEO department with innovative strategies and
  //   data-driven insights for our digital solutions. Their expertise in search engine optimization and
  //   web analytics helps our clients achieve maximum visibility and performance in the digital space.

  //   With a deep understanding of modern SEO practices and analytics tools, Seph ensures our web solutions
  //   are not just beautifully designed but also optimized for search engines and user engagement. Their
  //   approach combines technical SEO knowledge with content strategy to drive organic growth.`,
  //   expertise: [
  //     "Search Engine Optimization",
  //     "Web Analytics",
  //     "Content Strategy",
  //     "Keyword Research",
  //     "Performance Tracking",
  //     "Digital Marketing",
  //   ],
  //   education: "Master's in Digital Marketing",
  //   contact: "seph.creative@vikiflow.com",
  //   social: {
  //     linkedin: "https://linkedin.com/in/seph-creative",
  //     twitter: "https://twitter.com/seph_creative",
  //   },
  // },
];
