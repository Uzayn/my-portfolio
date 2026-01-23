"use client";

import { useState } from "react";
import { projects, Project } from "@/types/projects";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen py-12 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-6"
          >
            <FaArrowLeft className="text-xs" />
            <span>Back</span>
          </Link>
          <h1 className="text-2xl md:text-3xl font-normal tracking-tight text-gray-900">
            Projects
          </h1>
          <p className="mt-2 text-gray-500">
            A collection of things I&apos;ve built.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-100 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-lg font-medium text-gray-900 mb-1">
                {project.title}
              </h2>
              <p className="text-sm text-gray-500 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl max-h-[85vh] bg-white rounded-xl shadow-2xl z-50 overflow-y-auto"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-xl font-medium text-gray-900">
                    {selectedProject.title}
                  </h2>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
                  >
                    <span>Visit</span>
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </a>
                </div>

                <p className="text-gray-600 mb-4">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {selectedProject.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {selectedProject.overview && (
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Overview
                    </h3>
                    <p className="text-sm text-gray-600">
                      {selectedProject.overview}
                    </p>
                  </div>
                )}

                {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Key Features
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                      {selectedProject.keyFeatures.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.technicalImplementation && (
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Technical Implementation
                    </h3>
                    <p className="text-sm text-gray-600">
                      {selectedProject.technicalImplementation}
                    </p>
                  </div>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="mt-4 text-sm text-gray-500 hover:text-gray-700"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
