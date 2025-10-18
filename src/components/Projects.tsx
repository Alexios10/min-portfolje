import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title: "Movix",
      description: `Movix er en webapplikasjon som lar brukere utforske de nyeste filmer og tv-serier, få tilgang til detaljert informasjon og se trailere. 
      Med et responsivt design og integrering av moderne teknologi tilbyr Movix en sømløs filmopplevelse. Ved å integrere Redux i prosjektet mitt 
      forbedret jeg strategien min for tilstandsstyring betydelig. Jeg brukte også The Movie Database API for å hente de nyeste dataene.`,
      image: "/assets/movix-combined.png",
      tech: ["React", "Redux", "SCSS", "TMDB API"],
      link: "https://movix-self-nine.vercel.app/",
      code: "https://github.com/Alexios10/movix",
    },
    {
      title: "Beste Treningssenter",
      description: `En nettside for vurdering av treningssentre i Oslo, 
      hvor brukere kan se informasjon om hvert treningssenter, legge igjen vurderinger 
      og skrive kommentarer. Hensikten med nettsiden er å hjelpe brukere med å finne det 
      treningssenteret som passer best for deres behov. Prosjektet er fortsatt under utvikling og ikke helt fullført ennå. 
      Mangle implementering av Google auth`,
      image: "/assets/bestetreningssenter.png",
      tech: [
        "React",
        "Typescript",
        "Tailwind CSS",
        "Radix UI",
        "C#",
        ".NET",
        "PostgreSQL",
        "Railway (Hosting)",
      ],
      link: "https://bestetreningssenter.vercel.app/",
      code: "https://github.com/Alexios10/bestetreningssenter.git",
    },
    {
      title: "Vær App",
      description: `En enkel værmelding-applikasjon som viser oppdatert værdata for en valgt by, inkludert temperatur, 
        vind, luftfuktighet og værforhold. Brukeren kan enkelt søke etter ulike byer og få en oversiktlig 
        presentasjon av været akkurat nå. Applikasjonen benytter OpenWeatherMap API for å hente sanntidsdata, 
        og har et responsivt og brukervennlig design som fungerer på både mobil og desktop.`,
      image: "/assets/vaarmeldingen.png",
      tech: ["React", "Typescript", "Tailwind CSS", "Openweathermap API"],
      link: "https://v-rmeldinga.vercel.app/",
      code: "https://github.com/Alexios10/v-rmeldinga.git",
    },
  ];

  return (
    <section id="projects" className="py-32 min-h-screen bg-[#0a0118]">
      <div className="container mx-auto px-6">
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent opacity-60" />

              <div className="relative">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* Project Image */}
                  <div className="lg:w-3/5 relative group">
                    <div className="absolute inset-0 bg-gray-500/20 rounded-xl group-hover:bg-gray-500/30 transition-all duration-300" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-xl shadow-2xl group-hover:scale-[1.01] transition-all duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="lg:w-2/5 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {project.title}
                    </h3>

                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl">
                      <p className="text-gray-300 text-sm md:text-base">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs md:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 transition-all px-5 py-2 rounded-lg flex items-center border border-blue-400/60"
                      >
                        <span>Live</span>
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                      <a
                        href={project.code}
                        target="_blank"
                        className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 transition-all px-5 py-2 rounded-lg flex items-center border border-blue-400/60"
                        onClick={(e) => {
                          if (project.code === "") {
                            e.preventDefault();
                          }
                        }}
                      >
                        <span>Kode</span>
                        <FaGithub className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
