import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiTypescript } from "react-icons/si";
import { Badge } from "./ui/badge";

export const About = () => {
  const technologies = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    {
      name: "JavaScript",
      icon: IoLogoJavascript,
      color: "text-yellow-500",
    },
    { name: "React", icon: FaReact, color: "text-cyan-500" },
    { name: "Tailwind", icon: RiTailwindCssFill, color: "text-teal-500" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "Git", icon: FaGitAlt, color: "text-red-500" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-400" },
  ];

  return (
    <section id="about" className="py-20 bg-black/20 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Om Meg
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Jeg er en dedikert frontend student med en lidenskap for teknologi
              og innovasjon. Jeg studerer for tiden, samtidig som jeg bygger
              praktiske ferdigheter gjennom personlige prosjekter.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Målet mitt er å bli med i et dynamisk team hvor jeg kan bidra til
              meningsfulle prosjekter, samtidig som jeg fortsetter å lære og
              utvikle meg som utvikler. Jeg er spesielt interessert i
              webutvikling, brukeropplevelsesdesign og nye teknologier. Selv om
              jeg er en frontend student så har jeg som mål å bli en full-stack
              utvikler som kan skape helhetlige løsninger som kombinerer
              frontend og backend.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://github.com/Alexios10"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaGithub className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sattar-rahim-082188236/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaLinkedin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
              Ferdigheter og Teknologier
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                >
                  <tech.icon
                    className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <Badge
                    variant="default"
                    className="text-xs font-medium cursor-default bg-white/10 text-gray-300 border-white/20"
                  >
                    {tech.name}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
