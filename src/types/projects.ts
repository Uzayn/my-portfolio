export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  overview?: string;
  keyFeatures?: string[];
  technicalImplementation?: string;
  challengesAndSolutions?: string;
}

export const projects: Project[] = [
  {
    title: "Brandbreeks",
    description: "A project management and automations landing page for bookings and details",
    tech: ["React", "Next.js", "Tailwind"],
    link: "https://brandbreeks.com",
    image: "/images/thumbnails/brandbreeks.png",
    overview: "A comprehensive task management application designed to streamline team collaboration and project workflows. Built with modern technologies to ensure scalability and performance.",
    keyFeatures: [
      "Real-time collaboration with live updates",
      "Drag-and-drop task management interface",
      "Advanced filtering and search capabilities",
      "Team performance analytics dashboard",
      "Mobile-responsive design with offline support"
    ],
    technicalImplementation: "Developed using React with TypeScript for type safety, Node.js with Express for the backend, and MongoDB for data storage. Implemented WebSocket connections for real-time features and used Redis for session management and caching.",
    challengesAndSolutions: "Overcame challenges with real-time data synchronization by implementing a robust WebSocket architecture. Solved performance issues through lazy loading and virtualization techniques for large datasets."
  },
  {
    title: "Hoobank", 
    description: "Landing page for Next generation payment method service",
    tech: ["React", "Figma", "Tailwind"],
    link: "https://https://uzayn-hoobank.netlify.app/",
    image: "/images/thumbnails/Hoobank.png",
  },
  {
    title: "Remote sync",
    description: "A timezone comparison tool for remote teams",
    tech: ["Vue.js", "Tailwind CSS", "Firebase"],
    link: "https://github.com/username/project-three",
    image: "https://picsum.photos/seed/project3/400/300"
  },
  {
    title: "Kalendly",
    description: "Scheduling engine and booking system",
    tech: ["React", "date-fns", "Tailwind + Headless UI", "Zustand"],
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
