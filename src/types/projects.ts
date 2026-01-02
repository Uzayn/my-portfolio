export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A modern web application built with React and Node.js",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
    image: "/projects/project1-thumb.jpg"
  },
  {
    title: "Project Two", 
    description: "E-commerce platform with real-time inventory management",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "#",
    image: "/projects/project2-thumb.jpg"
  },
  {
    title: "Project Three",
    description: "Mobile-first responsive design for a SaaS dashboard",
    tech: ["Vue.js", "Tailwind CSS", "Firebase"],
    link: "#",
    image: "/projects/project3-thumb.jpg"
  },
  {
    title: "Project Four",
    description: "AI-powered content management system",
    tech: ["Python", "FastAPI", "React"],
    link: "#",
    image: "/projects/project4-thumb.jpg"
  },
  {
    title: "Project Five",
    description: "Real-time collaboration tool for remote teams",
    tech: ["Socket.io", "Express", "React"],
    link: "#",
    image: "/projects/project5-thumb.jpg"
  }
];
