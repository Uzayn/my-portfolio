"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaVuejs,
  FaJs,
  FaPython,
  FaCuttlefish,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaSass,
  FaLayerGroup,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiSvelte,
  SiTypescript,
  SiFramer,
  SiTailwindcss,
} from "react-icons/si";

export default function Stack() {
  const categories = [
    {
      name: "Frameworks & Libraries",
      techs: [
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "text-black dark:text-white",
        },
        { name: "React", icon: FaReact, color: "text-cyan-500" },
        { name: "Svelte", icon: SiSvelte, color: "text-orange-500" },
        { name: "Vue", icon: FaVuejs, color: "text-green-500" },
      ],
    },
    {
      name: "Languages",
      techs: [
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "Python", icon: FaPython, color: "text-blue-400" },
        { name: "C++", icon: FaCuttlefish, color: "text-blue-600" },
      ],
    },
    {
      name: "Design & Styling",
      techs: [
        { name: "Figma", icon: FaFigma, color: "text-purple-500" },
        { name: "Framer", icon: SiFramer, color: "text-blue-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "Sass", icon: FaSass, color: "text-pink-500" },
      ],
    },
    {
      name: "Tools & Version Control",
      techs: [
        { name: "Git", icon: FaGitAlt, color: "text-red-500" },
        {
          name: "GitHub",
          icon: FaGithub,
          color: "text-gray-800 dark:text-white",
        },
      ],
    },
  ];

  return (
    <section id="stack" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
        <div className="flex items-center space-x-2">
          <FaLayerGroup className="text-base text-gray-700 dark:text-gray-300" />
          <h2 className="text-xl font-normal tracking-tight text-gray-900 dark:text-gray-100">
            Stack
          </h2>
        </div>
        <div className="w-48 h-0.5 bg-gradient-to-r from-gray-300/0 via-gray-300 to-gray-300/0 dark:via-gray-600" />

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            >
              <h3 className="text-base font-medium text-gray-800 dark:text-gray-200 mb-4">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.techs.map((tech, techIndex) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={techIndex}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="size-6 shrink-0">
                        <Icon className={`w-full h-full ${tech.color}`} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
