import { FaFolderOpen, FaArrowRight } from "react-icons/fa6";
import { projects } from "@/types/projects";

export default function Projects() {
  return (
    <section id="projects" className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl">
        <div className="flex items-center space-x-2 mb-8">
          <FaFolderOpen className="text-sm" />
          <span>Projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative w-full h-64 overflow-hidden transition-shadow"
            >
              {/* Project Image - Positioned top-right with fade */}
              <div className="absolute top-0 right-0 w-3/4 h-48  overflow-hidden">
                <div className="relative w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-xl border-0"
                  />
                  {/* Fade overlay at bottom - clipped to avoid intersecting with details */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white via-white/95 to-transparent dark:from-gray-900 dark:via-gray-900/95" />
                </div>
              </div>

              {/* Project Details - Positioned bottom-left */}
              <div className="absolute bottom-0 left-0 w-3/4 p-4 flex flex-col justify-between">
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
              </div>
            </div>
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
    </section>
  );
}
