export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  story?: string;
}

export const projects: Project[] = [
  
  {
    title: "Remote sync",
    description: "A timezone comparison tool for remote teams",
    tech: ["Svelte", "Tailwind CSS"],
    link: "https://remote-teams-sync.vercel.app/",
    image: "/images/thumbnails/remotesync.png",
    story: "Born from a real problem. I was on a team spread across Africa, Asia, and Europe, and randomly calling teammates often meant catching them at 2am. This project lets you add your team so you can see everyone's local time at a glance, and know when it's an appropriate time to call.",
  },
  {
    title: "Kalendly",
    description: "Scheduling engine and booking system",
    tech: ["React","Tailwind", "Supabase", "Node + Express"],
    link: "https://github.com/Uzayn/Kalendly",
    image: "images/thumbnails/kalendly.png",
    story: "A Calendly clone I'm building to push myself on a larger-scale project. Scheduling logic, calendar UI, availability management, booking flows — the kind of complexity that doesn't fit in a weekend project. Still in progress.",
  },
  {
    title: "Brandbreeks",
    description: "A project management and automations landing page",
    tech: ["React", "Next.js", "Tailwind", "motion"],
    link: "https://brandbreeks.com",
    image: "/images/thumbnails/brandbreeks.png",
    story: "A real business I'm building with my partner. No designer on this one — I handled the frontend and made design decisions through research, studying what works in similar landing pages and adapting it to fit our brand. It's live and evolving as the business grows.",
  },
  {
    title: "Hoobank",
    description: "Landing page for Next generation payment method service",
    tech: ["React", "Figma", "Tailwind"],
    link: "https://uzayn-hoobank.netlify.app/",
    image: "/images/thumbnails/Hoobank.png",
    story: "A Figma-to-code build. Took a polished design and turned it into a fully responsive React site, matching the original down to the details.",
  },
];
