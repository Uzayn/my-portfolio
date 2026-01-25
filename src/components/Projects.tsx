"use client";

import { FaFolderOpen, FaArrowRight } from "react-icons/fa6";
import { projects, Project } from "@/types/projects";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

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
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  const handleProjectClick = useCallback((project: Project, index: number) => {
    setSelectedProject({ ...project, index });
  }, []);

  const handleClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const renderProjectCard = (project: Project, index: number) => (
    <motion.div
      key={index}
      layoutId={`project-${index}`}
      onClick={() => handleProjectClick(project, index)}
      className="relative w-full h-64 overflow-hidden transition-shadow cursor-pointer rounded-xl bg-white"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
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
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-3/4 p-4 flex flex-col justify-between"
        layoutId={`details-${index}`}
      >
        <div>
          <h3 className="text-base font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-3 text-xs">{project.description}</p>
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-16">
          {/* Left column - Title only */}
          <div className="md:w-1/3 lg:w-1/4 mb-6 md:mb-0 md:sticky md:top-24 md:self-start">
            <div className="flex items-center space-x-2">
              <FaFolderOpen className="text-sm" />
              <span>Projects</span>
            </div>
            <p className="mt-3 text-sm text-gray-500 hidden md:block">
              A selection of things I&apos;ve built and shipped.
            </p>
          </div>

          {/* Right column - Grid */}
          <div className="md:w-2/3 lg:w-3/4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project, index) =>
                renderProjectCard(project, index),
              )}
              <div className="flex justify-center mt-4 lg:col-span-2">
                <a
                  href="/projects"
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                >
                  <span>See all</span>
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>
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
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md md:max-w-3xl max-h-[70vh] md:max-h-[95vh] bg-white rounded-xl shadow-2xl z-50 overflow-y-auto flex flex-col"
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
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
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">
                      {selectedProject.title}
                    </h3>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Visit Live Site
                    </a>
                  </div>
                  <p className="text-gray-600 mb-4 text-xs">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-6">
                    {selectedProject.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {selectedProject.story && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {selectedProject.story}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleClose}
                  className="text-blue-600 hover:text-blue-800 self-end mt-4"
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
