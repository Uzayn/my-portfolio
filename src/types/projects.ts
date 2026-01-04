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
    link: "https://github.com/username/project-one",
    image: "https://picsum.photos/seed/project1/400/300"
  },
  {
    title: "Project Two", 
    description: "E-commerce platform with real-time inventory management",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "https://github.com/username/project-two",
    image: "https://picsum.photos/seed/project2/400/300"
  },
  {
    title: "Project Three",
    description: "Mobile-first responsive design for a SaaS dashboard",
    tech: ["Vue.js", "Tailwind CSS", "Firebase"],
    link: "https://github.com/username/project-three",
    image: "https://picsum.photos/seed/project3/400/300"
  },
  {
    title: "Project Four",
    description: "AI-powered content management system",
    tech: ["Python", "FastAPI", "React"],
    link: "https://github.com/username/project-four",
    image: "https://picsum.photos/seed/project4/400/300"
  },
  {
    title: "Project Five",
    description: "Real-time collaboration tool for remote teams",
    tech: ["Socket.io", "Express", "React"],
    link: "https://github.com/username/project-five",
    image: "https://picsum.photos/seed/project5/400/300"
  }
];
