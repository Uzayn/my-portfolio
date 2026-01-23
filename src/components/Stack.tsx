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
  SiShadcnui,
} from "react-icons/si";

const technologies = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "React", icon: FaReact, color: "text-cyan-500" },
  { name: "Svelte", icon: SiSvelte, color: "text-orange-500" },
  { name: "Vue", icon: FaVuejs, color: "text-green-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Python", icon: FaPython, color: "text-blue-400" },
  { name: "C++", icon: FaCuttlefish, color: "text-blue-600" },
  { name: "Figma", icon: FaFigma, color: "text-purple-500" },
  { name: "Framer", icon: SiFramer, color: "text-blue-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "ShadCN", icon: SiShadcnui, color: "text-black" },
  { name: "Sass", icon: FaSass, color: "text-pink-500" },
  { name: "Git", icon: FaGitAlt, color: "text-red-500" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-800" },
];

export default function Stack() {
  return (
    <section id="stack" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-16">
          {/* Left column - Title */}
          <div className="md:w-1/3 lg:w-1/4 mb-6 md:mb-0 md:sticky md:top-24 md:self-start">
            <div className="flex items-center space-x-2">
              <FaLayerGroup className="text-sm" />
              <span>Tech Stack</span>
            </div>
            <p className="mt-3 text-sm text-gray-500 hidden md:block">
              Tools and technologies I work with.
            </p>
          </div>

          {/* Right column - Grid */}
          <div className="md:w-2/3 lg:w-3/4">
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-6 md:gap-8">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="size-8 md:size-10">
                      <Icon className={`w-full h-full ${tech.color}`} />
                    </div>
                    <span className="text-xs text-gray-500 text-center">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Also worked with */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <span className="text-gray-600">Also worked with:</span>{" "}
                Docker, Redis, Neo4j, MySQL, PostgreSQL, PHP, Laravel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
