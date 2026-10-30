"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaChevronDown,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
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

function getLastMonthEnd() {
  const lastMonth = new Date();
  lastMonth.setDate(1);
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  const label = lastMonth.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
  return { label, dateTime: String(lastMonth.getFullYear()) };
}

const workExperience: WorkExperience[] = [
  {
    company: "DW Pay",
    title: "Frontend Engineer",
    location: "Nigeria",
    logo: "/images/companies/dway.png",
    start: "Apr 2026",
    end: {
      label: "Present",
      dateTime: "2026",
    },
    details:
      "Vue 3, TypeScript, Tailwind CSS, Pinia, TanStack Query, Zod, Vite, Vitest, GitHub Actions, Postman, Figma",
    description: [
      "Sole frontend engineer on Paybanc, DW Pay's business banking platform. Took the merchant app from an empty scaffold to production at paybanc.ng in under two months: onboarding and KYC, dashboard, inward collections, payouts, virtual accounts, beneficiaries, statements, developer settings and webhooks, notifications, profile.",
      "Designed the frontend architecture: feature-sliced Vue 3 + TypeScript, a typed axios → zod → TanStack Query layer so the UI never sees a raw API or validation error, Pinia reserved for client state, lazy layout-based routing, and env validated at boot.",
      "Translated the Figma brand guide into Tailwind v4 CSS-first design tokens with light and dark themes, so Figma variable names map 1:1 to utilities.",
      "Shipped the security and money-movement flows: TOTP two-factor auth with enforced enrollment, transaction PIN, sandbox/production switcher, Apple Pay and Google Pay collections, Send-to-Card wizard, currency wallets, ledger and transaction statements with CSV export.",
      "Own CI/CD for both apps: GitHub Actions staging and production pipelines with least-privilege tokens and npm supply-chain hardening (npm ci --ignore-scripts, release-age cooldown).",
    ],
  },
  {
    company: "Bilin",
    title: "Full-stack Engineer",
    location: "Germany",
    logo: "/images/companies/bilin.png",
    start: "Aug 2023",
    end: getLastMonthEnd(),
    details:
      "Next.js, React, TypeScript, Tailwind CSS, Jotai, TanStack Query, Radix UI, next-intl, Electron, Hono, Prisma, PostgreSQL, Bun, Turborepo, Svelte, Laravel, PHP, Inertia.js, Docker, Redis, Neo4j",
    description: [
      "Since early 2026, core engineer on WonderCall, Bilin's AI calling and office platform: a Turborepo monorepo with a Next.js 16 dashboard, an Electron desktop app, a Hono API on Kubernetes, and a fleet of workers. Over 1,500 commits and 250+ merged PRs across web, API, desktop and shared packages in 2026.",
      "Localized the whole product into six languages (English, German, Spanish, French, Italian, Russian): built the i18n foundation on next-intl, locale routing, the language switcher, and worked screen by screen through the dashboard, desktop app, emails and toasts, with CI checks that fail on missing keys.",
      "Built document editing in the browser and on desktop on top of BetterOffice (Rust/WASM OOXML engines): .docx, .xlsx and .pptx previews and edits, AI-agent edits with a review inbox and full-page review, spreadsheet agent edits, and task-chat attachment editing.",
      "Designed the permissions layer: a central admin permissions matrix enforced in the API, then visible permission gates across campaigns, spaces, tasks, files, integrations, media and members that explain why an action is blocked instead of hiding it.",
      "Led the pre-release security and compliance push: sign-in and OTP throttling, PII and secret redaction in logs, signed OAuth state, SSRF and parser RCE/DoS fixes, HIPAA recording playback, EU data-residency checks, DSAR field-level export and account erasure, cookie and sub-processor audits.",
      "Built the shared inbox: personal and department inboxes, AI replies that pause when a person takes over, and LLM-based routing of new conversations to the right department with an evaluation set and threshold report.",
      "Brought the Electron desktop app to parity with the web app (sidebar, review, document editing) and fixed its Windows build, macOS signing and native-module packaging in CI.",
      "Before that (2023 to early 2026), on a separate Bilin product: led the migration of its legacy PHP, Laravel Blade and Bootstrap codebase to Svelte via Inertia.js, converted all styling to Tailwind CSS, introduced ShadCN UI, and built a custom Vidstack video player.",
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
    title: "Frontend developer (Intern)",
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
        className="flex w-full items-center rounded-lg py-4 pr-8 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${role.company}`}
      >
        <div className="flex w-full items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 shrink-0 dark:bg-[oklch(92.8%_0.006_264.531)]">
            <Image
              src={role.logo}
              alt={`${role.company} logo`}
              className={`h-fit w-fit p-1 rounded-full object-cover ${
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
        className={`absolute top-6 right-4 h-4 w-4 rounded text-gray-500 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 ${
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
                          className="text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
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
            <h2 className="flex items-center gap-2 text-lg font-medium text-gray-900">
              <FaBriefcase className="text-base" />
              <span>Work</span>
            </h2>
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
                href="https://drive.google.com/file/d/1-a4hWT5EIeNT-zfIsOSAw0EQTFTDBxeq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex w-full md:w-auto items-center justify-center rounded-full bg-gray-100 py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-200 transition-colors"
              >
                View Resume
                <FaArrowUpRightFromSquare className="ml-2 h-3 w-3" />
              </a>
              <p className="mt-3 text-xs text-gray-500 text-center">
                Last updated: Oct 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
