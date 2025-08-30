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
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiKotlin } from "react-icons/si";
import styles from "./About.module.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const About = () => {
  const technologies = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    {
      name: "JavaScript",
      icon: IoLogoJavascript,
      color: "text-yellow-500",
    },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "React", icon: FaReact, color: "text-cyan-500" },
    { name: "C#", icon: TbBrandCSharp, color: "text-cyan-500" },
    { name: "Kotlin", icon: SiKotlin, color: "text-cyan-500" },
    { name: "PostgreSQL", icon: BiLogoPostgresql, color: "text-cyan-500" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },

    { name: "Tailwind", icon: RiTailwindCssFill, color: "text-teal-500" },
    { name: "Git", icon: FaGitAlt, color: "text-red-500" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-400" },
  ];

  return (
    <section
      id="about"
      className="py-28 bg-[#0a0118] min-h-screen relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            <span>For øyeblikket søker jeg etter et </span>
            <span className="text-purple-400">tverrfaglig</span> team
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Jeg er en dedikert frontendstudent med en sterk interesse for
            teknologi og innovasjon. For øyeblikket studerer jeg samtidig som
            jeg bygger praktiske ferdigheter gjennom egne prosjekter, der jeg
            stadig utfordrer meg selv til å lære og utforske nye muligheter.
          </p>
          <br />
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Målet mitt er å bli en del av et dynamisk og tverrfaglig team hvor
            jeg kan bidra til meningsfulle prosjekter, samtidig som jeg
            videreutvikler meg som utvikler. Jeg har en spesiell interesse for
            webutvikling, brukeropplevelsesdesign og moderne teknologier. Selv
            om jeg fokuserer på frontend i dag, har jeg et klart mål om å
            utvikle meg til en fullstack-utvikler som kan skape helhetlige
            løsninger fra start til slutt.
          </p>
        </div>

        {/* Floating Icons */}
        <div className="relative mt-20">
          {/* Top row */}
          <div className="flex justify-center gap-8 mb-8">
            {technologies.slice(0, 7).map((tech, index) => (
              <div
                key={index}
                className={`relative group ${styles.floatingIcon}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl scale-125 group-hover:bg-purple-500/30 transition-all duration-300" />
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="relative bg-[#1a1a1a] p-4 rounded-full transform hover:scale-110 transition-transform duration-300">
                        <tech.icon className={`w-8 h-8 ${tech.color}`} />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tech.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div className="flex justify-center gap-8">
            {technologies.slice(7).map((tech, index) => (
              <div
                key={index + 7}
                className={`relative group ${styles.floatingIcon}`}
                style={{
                  animationDelay: `${(index + 7) * 0.1}s`,
                }}
              >
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl scale-125 group-hover:bg-purple-500/30 transition-all duration-300" />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="relative bg-[#1a1a1a] p-4 rounded-full transform hover:scale-110 transition-transform duration-300">
                        <tech.icon className={`w-8 h-8 ${tech.color}`} />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tech.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-16">
          <a
            href="https://github.com/Alexios10"
            target="_blank"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub className="w-6 h-6" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sattar-rahim-082188236/"
            target="_blank"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};
