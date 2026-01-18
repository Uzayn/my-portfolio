"use client";

import { FaFolderOpen, FaArrowRight } from "react-icons/fa6";
import { projects } from "@/types/projects";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
}

interface SelectedProject extends Project {
  index: number;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<SelectedProject | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  const handleProjectClick = useCallback((project: Project, index: number) => {
    setSelectedProject({ ...project, index });
  }, []);

  const handleClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section id="projects" className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl">
        <div className="flex items-center space-x-2 mb-8">
          <FaFolderOpen className="text-sm" />
          <span>Projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layoutId={`project-${index}`}
              onClick={() => handleProjectClick(project, index)}
              className="relative w-full h-64 overflow-hidden transition-shadow cursor-pointer rounded-xl bg-white dark:bg-gray-900"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-3/4 h-48 overflow-hidden"
                layoutId={`image-${index}`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-xl border-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent dark:from-gray-900 dark:via-gray-900/95" />
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 w-3/4 p-4 flex flex-col justify-between"
                layoutId={`details-${index}`}
              >
                <div>
                  <h3 className="text-base font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-xs">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-1.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
          <div className="flex justify-center mt-8">
            <a
              href="/projects"
              className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center space-x-1"
            >
              <span>See all</span>
              <FaArrowRight className="text-xs" />
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 z-40 backdrop-filter backdrop-blur-md"
              transition={{ duration: 0.3 }}
            />

            <motion.div
              layoutId={`project-${selectedProject.index}`}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md md:max-w-3xl max-h-[95vh] bg-white dark:bg-gray-900 rounded-xl shadow-lg z-50 overflow-y-auto flex flex-col"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                layoutId={`image-${selectedProject.index}`}
                className="w-full h-48 md:h-96 overflow-hidden flex-shrink-0"
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                layoutId={`details-${selectedProject.index}`}
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 self-end"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
