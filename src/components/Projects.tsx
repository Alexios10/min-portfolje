import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title:
        "Nettside for å se nyheter og trailere av de nyeste filmer og serier",
      description: `Movix er en webapplikasjon som lar brukere utforske de nyeste filmer og tv-serier, få tilgang til detaljert informasjon og se trailere. 
      Med et responsivt design og integrering av moderne teknologi tilbyr Movix en sømløs filmopplevelse. Ved å integrere Redux i prosjektet mitt 
      forbedret jeg strategien min for tilstandsstyring betydelig. Jeg brukte også The Movie Database API for å hente de nyeste dataene.`,
      image: "/assets/movix-combined.png",
      tech: ["React", "Redux", "SCSS", "TMDB API"],
      link: "https://movix-self-nine.vercel.app/",
      code: "https://github.com/Alexios10/movix",
    },
    {
      title: "Treningssenter Nettside",
      description: `Dette er en nettside for vurdering av treningssentre i Oslo, 
      hvor brukere kan se informasjon om hvert treningssenter, legge igjen vurderinger 
      og skrive kommentarer. Hensikten med nettsiden er å hjelpe brukere med å finne det 
      treningssenteret som passer best for deres behov. Prosjektet er fortsatt under utvikling og ikke helt fullført ennå. 
      Mangle implementering av Google auth`,
      image: "/assets/treningssentre.png",
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
      link: "https://training-hub-reviews.vercel.app/",
      code: "",
    },
    {
      title: "Værmeldingen",
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
    <section id="projects" className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Mine Prosjekter
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs md:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-5 text-slate-800">
                    <a
                      href={project.link}
                      target="_blank"
                      className="bg-blue-300 hover:bg-blue-400 transition-all px-5 py-1 rounded-lg flex items-center"
                    >
                      <span>Live demo</span>
                      <ExternalLink className="ml-1 w-4" />
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      className="bg-blue-300 hover:bg-blue-400 transition-all px-5 py-1 rounded-lg flex items-center"
                      onClick={(e) => {
                        if (project.code === "") {
                          e.preventDefault();
                        }
                      }}
                    >
                      <span>
                        {project.code === "" ? "Kommer snart" : "Kode"}
                      </span>
                      <FaGithub className="ml-1 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
