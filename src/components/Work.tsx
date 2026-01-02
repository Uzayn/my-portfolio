"use client";

import { useState } from "react";
import { FaBriefcase, FaChevronDown, FaArrowDown } from "react-icons/fa6";
import Image from "next/image";

interface WorkExperience {
  company: string;
  title: string;
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
    <div className="border-b border-zinc-100 last:border-b-0 dark:border-zinc-800">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image
              src={role.logo}
              alt={`${role.company} logo`}
              className="h-7 w-7 rounded-full"
              width={28}
              height={28}
              unoptimized
            />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {role.company}
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              {role.title}
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label={`${role.start} until ${role.end.label}`}
            >
              <time dateTime={role.end.dateTime}>{role.start}</time>{" "}
              <span aria-hidden="true">—</span>{" "}
              <time dateTime={role.end.dateTime}>{role.end.label}</time>
            </dd>
          </dl>
        </div>
        <FaChevronDown
          className={`h-5 w-5 text-zinc-500 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-4 pt-2">
            <div className="flex flex-wrap gap-2">
              {role.details.split(", ").map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-700/50 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
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
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <FaBriefcase className="h-6 w-6 flex-none" />
            <span className="ml-3">Work</span>
          </h2>
          <div className="mt-6 space-y-4">
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
            className="group mt-6 w-full inline-flex items-center justify-center rounded-full bg-zinc-50 py-2 px-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          >
            Download Resume
            <FaArrowDown className="ml-1 inline-block h-4 w-4 transition group-hover:text-zinc-600 dark:group-hover:text-zinc-50" />
          </a>
          <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400 text-center">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
