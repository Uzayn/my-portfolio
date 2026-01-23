"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaChevronDown, FaArrowDown } from "react-icons/fa6";
import Image from "next/image";

interface WorkExperience {
  company: string;
  title: string;
  location: string;
  logo: string;
  start: string;
  end: {
    label: string;
    dateTime: string;
  };
  details: string; // Tech stack
  description: string[]; // Bullet points for responsibilities, achievements
  collaborators?: { name: string; url: string }[]; // Optional: List of collaborators with URLs
}

const workExperience: WorkExperience[] = [
  {
    company: "Bilin",
    title: "Frontend Engineer",
    location: "Germany",
    logo: "/images/companies/bilin.png",
    start: "Aug 2023",
    end: {
      label: "Dec 2025",
      dateTime: "2025",
    },
    details:
      "Svelte, TypeScript, Tailwind CSS, ShadCN UI, Laravel, PHP, Sass, Inertia.js, Docker, Redis, Neo4j",
    description: [
      "Started with legacy PHP, Laravel Blade, and Bootstrap codebase; led migration to modern Svelte frontend for improved performance and maintainability.",
      "Integrated Inertia.js to connect PHP backend with Svelte, enabling seamless server-side rendering.",
      "Converted all Bootstrap styles to Tailwind CSS and refactored Laravel components into Svelte for cleaner, more modular code.",
      "Implemented new features using ShadCN UI components, enhancing user experience and accessibility.",
      "Developed a custom video player using Vidstack to meet specific product requirements, ensuring seamless integration and enhanced user engagement.",
    ],
    collaborators: [
      { name: "Elia Hilse", url: "https://elia.vc/" },
      {
        name: "Lambiv Gills",
        url: "https://cm.linkedin.com/in/lambiv-dzenyuy",
      },
    ],
  },
  {
    company: "Inspectorama",
    title: "Frontend developer",
    location: "US",
    logo: "/images/companies/inspectorama.png",
    start: "Dec 2022",
    end: {
      label: "Feb 2023",
      dateTime: "2023",
    },
    details: "Vue.js, Sass",
    description: [
      "Primarily converted Figma designs into responsive code using Vue.js and predefined Sass styling, ensuring pixel-perfect implementations.",
      "Quickly adapted to the application's design system to deliver high-fidelity UI components efficiently.",
    ],
  },
  {
    company: "Grow",
    title: "Frontend developer",
    location: "Nigeria",
    logo: "/images/companies/grow.png",
    start: "Oct 2022",
    end: {
      label: "May 2023",
      dateTime: "2023",
    },
    details: "React.js, Tailwind CSS, JavaScript, Next.js",
    description: [
      "Served as the sole frontend developer, building the application from scratch by translating Figma designs into functional, responsive code.",
      "Migrated the project from React to Next.js, significantly improving SEO, performance, and site speed.",
      "Integrated an in-app blog leveraging Next.js features, replacing external WordPress links for a more cohesive and seamless user experience.",
    ],
  },
];

function AccordionItem({
  role,
  isOpen,
  onClick,
}: {
  role: WorkExperience;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="border-b border-gray-200 last:border-b-0 relative"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center py-4 text-left pr-8 focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${role.company}`}
      >
        <div className="flex w-full items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 shrink-0">
            <Image
              src={role.logo}
              alt={`${role.company} logo`}
              className={`h-7 w-7 rounded-full object-cover ${
                role.company === "Grow" ? "scale-65" : ""
              }`}
              width={28}
              height={28}
              loading="lazy"
              unoptimized
            />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-x-2">
              <span className="text-sm font-medium text-gray-900">
                {role.company}
              </span>
              <span className="text-xs font-light text-gray-400">
                {role.location}
              </span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs font-light text-gray-500">
                {role.title}
              </span>
              <time
                className="text-xs font-light text-gray-400"
                dateTime={`${role.start} to ${role.end.dateTime}`}
              >
                {role.start} — {role.end.label}
              </time>
            </div>
          </div>
        </div>
      </button>
      <motion.button
        onClick={onClick}
        className={`absolute top-6 right-4 h-4 w-4 text-gray-500 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <FaChevronDown />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`accordion-content-${role.company}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 pt-2 space-y-4">
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                {role.description.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
              {role.collaborators && role.collaborators.length > 0 && (
                <div className="space-y-1">
                  <span className="text-sm font-medium text-gray-700">
                    With:
                  </span>
                  <ul className="list-none pl-0 space-y-1 text-sm text-gray-600">
                    {role.collaborators.map((collaborator, index) => (
                      <li key={index}>
                        <a
                          href={collaborator.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {collaborator.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-wrap gap-1.5">
                {role.details.split(", ").map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Work() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="work" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-16">
          {/* Left column - Title */}
          <div className="md:w-1/3 lg:w-1/4 mb-6 md:mb-0 md:sticky md:top-24 md:self-start">
            <div className="flex items-center space-x-2">
              <FaBriefcase className="text-sm" />
              <span>Work</span>
            </div>
            <p className="mt-3 text-sm text-gray-500 hidden md:block">
              Experience building products across different industries and tech
              stacks.
            </p>
          </div>

          {/* Right column - Accordion */}
          <div className="md:w-2/3 lg:w-3/4">
            <div className="border border-gray-200 rounded-lg p-4 md:p-6">
              <div className="space-y-2">
                {workExperience.map((role, roleIndex) => (
                  <AccordionItem
                    key={roleIndex}
                    role={role}
                    isOpen={openIndex === roleIndex}
                    onClick={() => toggleAccordion(roleIndex)}
                  />
                ))}
              </div>
              <a
                href="/Graduate Application - Huzain.pdf"
                download
                className="group mt-6 flex w-full md:w-auto items-center justify-center rounded-full bg-gray-100 py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-200 transition-colors"
              >
                Download Resume
                <FaArrowDown className="ml-2 h-3 w-3 transition-transform group-hover:translate-y-0.5" />
              </a>
              <p className="mt-3 text-xs text-gray-500 text-center">
                Last updated: December 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
