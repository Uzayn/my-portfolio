"use client";

import { motion } from "framer-motion";
import { FaFolderOpen, FaArrowRight, FaGithub } from "react-icons/fa6";
import { projects } from "@/types/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
        <div className="flex items-center space-x-2">
          <FaFolderOpen className="text-base text-gray-700 dark:text-gray-300" />
          <h2 className="text-xl font-normal tracking-tight text-gray-900 dark:text-gray-100">
            Projects
          </h2>
        </div>
        {/* <div className="w-48 h-0.5 bg-gradient-to-r from-gray-300/0 via-gray-300 to-gray-300/0 dark:via-gray-600" /> */}

        <div className="relative">
          {/* Background connector line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 hidden md:block" />

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-start md:items-center gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
            >
              {/* Timeline dot for desktop */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white dark:ring-gray-900" />

              {/* Image with parallax-like hover */}
              <div className="relative w-full md:w-1/2 h-64 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Content with dynamic reveal */}
              <div className="w-full md:w-1/2 space-y-4">
                <motion.h3
                  className="text-lg font-medium text-gray-900 dark:text-gray-100"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    View Live
                    <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      GitHub
                      <FaGithub className="h-3 w-3 transition-transform group-hover:rotate-12" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            See all
            <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
