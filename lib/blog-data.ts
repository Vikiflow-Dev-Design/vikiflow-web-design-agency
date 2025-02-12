export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: number;
  slug: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export const categories = [
  "Design",
  "Development",
  "Business",
  "Marketing",
  "Tutorial",
  "News",
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2024",
    slug: "future-of-web-design-trends-2024",
    excerpt:
      "Explore the latest web design trends that are shaping the digital landscape.",
    content: `
      <h2>The Evolution of Web Design</h2>
      <p>As we move further into 2024, web design continues to evolve at a rapid pace. The intersection of technology, user experience, and aesthetic preferences has given rise to new trends that are reshaping how we approach digital design.</p>

      <h3>1. AI-Driven Personalization</h3>
      <p>Artificial Intelligence is revolutionizing how websites adapt to individual users. From dynamic content arrangement to personalized color schemes, AI is making websites more engaging and relevant to each visitor.</p>

      <h3>2. Immersive 3D Elements</h3>
      <p>With the advancement of WebGL and Three.js, incorporating 3D elements into websites has become more accessible. These elements add depth and interactivity to the user experience, making websites more engaging and memorable.</p>

      <h3>3. Micro-Interactions</h3>
      <p>Small, purposeful animations that provide visual feedback are becoming increasingly important. These subtle interactions guide users through their journey while adding personality to the interface.</p>

      <h2>Accessibility-First Design</h2>
      <p>In 2024, accessibility is not just an afterthought but a fundamental aspect of web design. Designers are prioritizing:</p>
      <ul>
        <li>High contrast color schemes</li>
        <li>Clear typography hierarchies</li>
        <li>Keyboard navigation support</li>
        <li>Screen reader optimization</li>
      </ul>

      <h2>Performance and Speed</h2>
      <p>With Core Web Vitals being crucial for SEO, designers are finding creative ways to balance aesthetic appeal with performance. This includes:</p>
      <ul>
        <li>Optimized image loading strategies</li>
        <li>Efficient use of animations</li>
        <li>Minimal use of heavy scripts</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The future of web design is exciting and challenging. By staying informed about these trends and understanding their implications, designers can create more engaging, accessible, and effective websites.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    category: "Design",
    date: "2024-04-15",
    readTime: 5,
    author: {
      name: "Alex Johnson",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100",
      role: "Author",
    },
  },
  {
    id: 2,
    title: "Building Scalable Applications with Next.js",
    slug: "building-scalable-applications-nextjs",
    excerpt:
      "Learn how to create performant and scalable web applications using Next.js.",
    content: `
      <h2>Introduction to Next.js</h2>
      <p>Next.js has revolutionized how we build React applications. Its powerful features and optimizations make it an excellent choice for scalable web applications.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Server-side rendering</li>
        <li>Static site generation</li>
        <li>API routes</li>
        <li>File-system based routing</li>
        <li>Built-in image optimization</li>
      </ul>

      <h2>Architecture Best Practices</h2>
      <p>When building scalable applications, following proper architectural patterns is crucial:</p>

      <h3>1. Project Structure</h3>
      <p>Organize your code into logical directories:</p>
      <ul>
        <li>app/ - For your application routes</li>
        <li>components/ - Reusable UI components</li>
        <li>lib/ - Utility functions and shared logic</li>
        <li>styles/ - Global styles and CSS modules</li>
      </ul>

      <h3>2. State Management</h3>
      <p>Choose the right state management solution based on your needs:</p>
      <ul>
        <li>React Context for simple applications</li>
        <li>Redux for complex state management</li>
        <li>Zustand for lightweight state management</li>
      </ul>

      <h2>Performance Optimization</h2>
      <p>Next.js provides several features for optimizing performance:</p>
      <ul>
        <li>Automatic code splitting</li>
        <li>Image optimization</li>
        <li>Font optimization</li>
        <li>Script optimization</li>
      </ul>

      <h2>Deployment Strategies</h2>
      <p>Consider these deployment options for your Next.js application:</p>
      <ul>
        <li>Vercel - Built for Next.js</li>
        <li>AWS Amplify</li>
        <li>Netlify</li>
        <li>Self-hosted solutions</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Building scalable applications with Next.js requires careful planning and understanding of its features. By following these best practices, you can create performant and maintainable applications.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800",
    category: "Development",
    date: "2024-04-12",
    readTime: 8,
    author: {
      name: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100",
      role: "Author",
    },
  },
  {
    id: 3,
    title: "Effective SEO Strategies for 2024",
    slug: "effective-seo-strategies-2024",
    excerpt:
      "Discover the latest SEO techniques to improve your website's visibility.",
    content: `
      <h2>The Changing Landscape of SEO</h2>
      <p>Search Engine Optimization continues to evolve with new algorithms and user behavior patterns. Understanding these changes is crucial for maintaining and improving your website's visibility.</p>

      <h3>1. Core Web Vitals</h3>
      <p>Google's emphasis on page experience metrics has made Core Web Vitals more important than ever:</p>
      <ul>
        <li>Largest Contentful Paint (LCP)</li>
        <li>First Input Delay (FID)</li>
        <li>Cumulative Layout Shift (CLS)</li>
      </ul>

      <h3>2. AI and Natural Language Processing</h3>
      <p>With the advancement of AI, content optimization needs to focus on:</p>
      <ul>
        <li>Natural language and conversational content</li>
        <li>Topic clusters and semantic relevance</li>
        <li>User intent optimization</li>
      </ul>

      <h2>Technical SEO Best Practices</h2>
      <p>Implement these technical optimizations:</p>
      <ul>
        <li>Mobile-first indexing</li>
        <li>Schema markup implementation</li>
        <li>Site speed optimization</li>
        <li>Secure HTTPS implementation</li>
      </ul>

      <h2>Content Strategy</h2>
      <p>Develop a comprehensive content strategy that includes:</p>
      <ul>
        <li>Long-form, in-depth content</li>
        <li>Regular content updates</li>
        <li>Multi-format content (text, video, images)</li>
        <li>User-generated content integration</li>
      </ul>

      <h2>Measuring Success</h2>
      <p>Track these key metrics to measure your SEO success:</p>
      <ul>
        <li>Organic traffic growth</li>
        <li>Keyword rankings</li>
        <li>Conversion rates</li>
        <li>User engagement metrics</li>
      </ul>

      <h2>Conclusion</h2>
      <p>SEO success in 2024 requires a holistic approach that combines technical excellence, quality content, and user experience optimization.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
    category: "Marketing",
    date: "2024-04-10",
    readTime: 6,
    author: {
      name: "Mike Wilson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100",
      role: "Author",
    },
  },
  {
    id: 4,
    title: "UI/UX Best Practices for Mobile Apps",
    slug: "ui-ux-best-practices-mobile-apps",
    excerpt:
      "Essential design principles for creating user-friendly mobile applications.",
    content: `
      <h2>Mobile-First Design Principles</h2>
      <p>With mobile devices accounting for the majority of web traffic, designing for mobile has become more crucial than ever. Here are the key principles to follow:</p>

      <h3>1. Thumb-Friendly Navigation</h3>
      <p>Design your interface with thumb zones in mind:</p>
      <ul>
        <li>Place important actions within easy reach</li>
        <li>Consider both left and right-handed users</li>
        <li>Use bottom navigation for frequent actions</li>
      </ul>

      <h3>2. Visual Hierarchy</h3>
      <p>Create clear visual hierarchies to guide users:</p>
      <ul>
        <li>Use size and weight for emphasis</li>
        <li>Implement consistent spacing</li>
        <li>Apply color psychology effectively</li>
      </ul>

      <h2>Performance Considerations</h2>
      <p>Mobile app performance greatly impacts user experience:</p>
      <ul>
        <li>Optimize image loading</li>
        <li>Implement lazy loading</li>
        <li>Minimize animations</li>
        <li>Reduce API calls</li>
      </ul>

      <h2>Interaction Design</h2>
      <p>Create intuitive interactions through:</p>
      <ul>
        <li>Clear feedback mechanisms</li>
        <li>Consistent gestures</li>
        <li>Smooth transitions</li>
        <li>Error prevention</li>
      </ul>

      <h2>Accessibility</h2>
      <p>Ensure your app is accessible to all users:</p>
      <ul>
        <li>Support screen readers</li>
        <li>Maintain sufficient contrast</li>
        <li>Provide text alternatives</li>
        <li>Enable keyboard navigation</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Creating effective mobile experiences requires attention to detail and a deep understanding of user behavior. By following these best practices, you can create more engaging and user-friendly mobile applications.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800",
    category: "Design",
    date: "2024-04-08",
    readTime: 7,
    author: {
      name: "Emma Davis",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100",
      role: "Author",
    },
  },
];
