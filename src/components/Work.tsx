"use client";

import { useState } from "react";
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
  details: string;
}

const workExperience: WorkExperience[] = [
  {
    company: "Bilin",
    title: "Frontend Engineer",
    location: "Germany",
    logo: "https://picsum.photos/seed/bilin/100/100",
    start: "Aug 2023",
    end: {
      label: "Dec 2025",
      dateTime: "2025",
    },
    details:
      "Inertia.js, Svelte, TypeScript, Tailwind CSS, ShadCN UI, Laravel, PHP, Sass",
  },
  {
    company: "Inspectorama",
    title: "Frontend developer",
    location: "US",
    logo: "https://picsum.photos/seed/inspectorama/100/100",
    start: "Dec 2022",
    end: {
      label: "Feb 2023",
      dateTime: "2023",
    },
    details: "Vue.js, Sass",
  },
  {
    company: "Grow",
    title: "Frontend developer",
    location: "Nigeria",
    logo: "https://picsum.photos/seed/grow/100/100",
    start: "Oct 2022",
    end: {
      label: "May 2023",
      dateTime: "2023",
    },
    details: "React.js, Tailwind CSS, JavaScript, Next.js",
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
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 relative">
      <button
        onClick={onClick}
        className="flex w-full items-center py-4 text-left pr-8"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 shrink-0">
            <Image
              src={role.logo}
              alt={`${role.company} logo`}
              className="h-7 w-7 rounded-full object-cover"
              width={28}
              height={28}
              unoptimized
            />
          </div>
          <div className="flex flex-auto flex-wrap gap-x-2">
            <div className="flex items-center gap-x-1">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {role.company}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500 font-light">
                {role.location}
              </span>
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {role.title}
              </span>
              <span
                className="text-xs text-gray-400 dark:text-gray-500"
                aria-label={`${role.start} until ${role.end.label}`}
              >
                <time dateTime={role.end.dateTime}>{role.start}</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={role.end.dateTime}>{role.end.label}</time>
              </span>
            </div>
          </div>
        </div>
      </button>
      <FaChevronDown
        className={`absolute top-4 right-4 ml-2 h-4 w-4 text-gray-500 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
      <div
        className={`overflow-hidden transition-all ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 pt-2">
          <div className="flex flex-wrap gap-1">
            {role.details.split(", ").map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-1.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="w-full lg:w-1/2 md:w-3/4">
        <div className="flex items-center space-x-2 mb-8">
          <FaBriefcase className="text-sm" />
          <span>Work</span>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="space-y-4">
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
            className="group mt-6 w-full inline-flex items-center justify-center rounded-lg bg-gray-50 py-2 px-3 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            Download Resume
            <FaArrowDown className="ml-1 inline-block h-4 w-4 transition group-hover:text-gray-600 dark:group-hover:text-gray-100" />
          </a>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">
            Last updated: December 2025
          </p>
        </div>
      </div>
    </section>
  );
}
