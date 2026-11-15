import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaSwift,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiDotnet,
  SiFastify,
  SiGithubactions,
  SiKotlin,
  SiMysql,
  SiTypescript,
  SiVitest,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import styles from "./About.module.css";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const technologies = [
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-teal-400" },
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Fastify", icon: SiFastify, color: "text-white" },
  { name: "C#", icon: TbBrandCSharp, color: "text-purple-400" },
  { name: ".NET", icon: SiDotnet, color: "text-violet-400" },
  { name: "PostgreSQL", icon: BiLogoPostgresql, color: "text-sky-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
  { name: "Docker", icon: FaDocker, color: "text-blue-500" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-400" },
  { name: "Vitest", icon: SiVitest, color: "text-lime-400" },
  { name: "Git", icon: FaGitAlt, color: "text-red-500" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-300" },
  { name: "Swift", icon: FaSwift, color: "text-orange-400" },
  { name: "Kotlin", icon: SiKotlin, color: "text-fuchsia-400" },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-32 bg-[#0a0118] min-h-screen relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            Om meg
          </h2>
          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>
              Jeg har bachelor i frontend- og mobilutvikling fra Høyskolen
              Kristiania (2026) og jobber nå mest med backend hos Hoolsy:
              TypeScript, Node.js, Fastify og PostgreSQL. I bachelorprosjektet
              der hadde jeg ansvaret for frontend.
            </p>
            <p>
              Før jeg ble utvikler, tok jeg fagbrev som tømrer og jobbet over ti
              år i butikk. Jeg er vant til å jobbe i lag og prioritere når mye
              skjer samtidig.
            </p>
            <p className="text-white">
              Jeg er tilgjengelig nå og ser etter en stilling som fullstack-
              eller frontendutvikler.
            </p>
          </div>
        </div>

        {/* Tech icons */}
        <h3 className="sr-only">Teknologier</h3>
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto mt-20">
          {technologies.map((tech, index) => (
            <li
              key={tech.name}
              className={`relative group ${styles.floatingIcon}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg scale-125 group-hover:bg-blue-500/30 transition-all duration-300" />
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    tabIndex={0}
                    aria-label={tech.name}
                    className="relative bg-[#1a1a1a] p-2 md:p-3 lg:p-4 rounded-full transform hover:scale-110 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <tech.icon
                      aria-hidden="true"
                      className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${tech.color}`}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>

        {/* Social links */}
        <div className="flex justify-center gap-6 mt-16">
          <a
            href="https://github.com/Alexios10"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub className="w-6 h-6" aria-hidden="true" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sattar-rahim-082188236/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin className="w-6 h-6" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};
