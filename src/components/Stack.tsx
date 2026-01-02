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
  const technologies = [
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
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
    { name: "Sass", icon: FaSass, color: "text-pink-500" },
    { name: "Git", icon: FaGitAlt, color: "text-red-500" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-800 dark:text-white" },
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl">
        <div className="flex items-center space-x-2 mb-12">
          <FaLayerGroup className="text-sm" />
          <div>Tech Stack</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="flex items-center space-x-3 p-4">
                <div className="size-8 flex-shrink-0">
                  <Icon className={`w-full h-full ${tech.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
