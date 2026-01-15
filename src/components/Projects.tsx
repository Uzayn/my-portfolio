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
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Project Image */}
              <div className="w-full h-32 bg-gray-200 dark:bg-gray-700">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>

              {/* Project Content */}
              <div className="p-4 flex flex-col justify-between">
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
                <div className="flex justify-end">
                  <a
                    href={project.link}
                    className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center space-x-1"
                  >
                    <span>View Project</span>
                    <FaArrowRight className="text-xs" />
                  </a>
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
