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
  FaDocker,
  FaPhp,
  FaLaravel,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiSvelte,
  SiTypescript,
  SiFramer,
  SiTailwindcss,
  SiShadcnui,
  SiRedis,
  SiNeo4J,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { IconType } from "react-icons";

interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

const dailyDrivers: Technology[] = [
  { name: "React", icon: FaReact, color: "text-cyan-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "ShadCN", icon: SiShadcnui, color: "text-black" },
];

const comfortable: Technology[] = [
  { name: "Svelte", icon: SiSvelte, color: "text-orange-500" },
  { name: "Vue", icon: FaVuejs, color: "text-green-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
  { name: "Sass", icon: FaSass, color: "text-pink-500" },
  { name: "Git", icon: FaGitAlt, color: "text-red-500" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-800" },
  { name: "Figma", icon: FaFigma, color: "text-purple-500" },
];

const workedWith: Technology[] = [
  { name: "Python", icon: FaPython, color: "text-blue-400" },
  { name: "C++", icon: FaCuttlefish, color: "text-blue-600" },
  { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
  { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
  { name: "Docker", icon: FaDocker, color: "text-blue-500" },
  { name: "Redis", icon: SiRedis, color: "text-red-600" },
  { name: "Neo4j", icon: SiNeo4J, color: "text-blue-600" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Framer", icon: SiFramer, color: "text-blue-600" },
];

function TechGroup({
  label,
  technologies,
}: {
  label: string;
  technologies: Technology[];
}) {
  return (
    <div className="relative border border-gray-200 rounded-lg p-4 pt-6">
      <span className="absolute -top-2.5 left-3 bg-white px-2 text-xs text-gray-500">
        {label}
      </span>
      <div className="flex flex-wrap gap-4">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div key={index} className="flex flex-col items-center gap-1.5">
              <div className="size-7 md:size-8">
                <Icon className={`w-full h-full ${tech.color}`} />
              </div>
              <span className="text-xs text-gray-500 text-center">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

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

          {/* Right column - Grouped stacks */}
          <div className="md:w-2/3 lg:w-3/4 space-y-6">
            <TechGroup label="Daily drivers" technologies={dailyDrivers} />
            <TechGroup label="Comfortable" technologies={comfortable} />
            <TechGroup label="Worked with" technologies={workedWith} />
          </div>
        </div>
      </div>
    </section>
  );
}
