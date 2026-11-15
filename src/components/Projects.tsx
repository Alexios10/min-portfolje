import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type WorkProject = {
  title: string;
  role: string;
  period: string;
  intro: string;
  points: string[];
  tech: string[];
};

type Project = {
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  tech: string[];
  link: string;
  linkNote?: string;
  code?: string;
};

const workProjects: WorkProject[] = [
  {
    title: "Hoolsy – lydgjenkjenning og backend",
    role: "Fullstack-utvikler",
    period: "jun. 2026 – nå",
    intro:
      "Hoolsy lager en plattform som gjenkjenner film, serier og lyd fra mobilen og viser hva som finnes i innholdet: produkter, steder, musikk og personer.",
    points: [
      "Bygget lydgjenkjenningen (ACR) i backend: fingeravtrykk av lyd, indeksering av innhold og matching, med egne målinger av treffsikkerhet.",
      "Utvikler backend-tjenester i et TypeScript-monorepo, blant annet pålitelig hendelseshåndtering mellom tjenestene.",
      "Laget delte kontrakter mellom tjenestene, CI med GitHub Actions og integrasjonstester.",
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "Docker",
      "Vitest",
      "GitHub Actions",
    ],
  },
  {
    title: "Hoolsy Workstation – bachelorprosjekt",
    role: "Ansvarlig for frontend",
    period: "jan. 2026 – mai 2026",
    intro:
      "Oppgavehåndteringssystem for Workstation, Hoolsys KI-verktøy der ansatte kvalitetssikrer produkter som er gjenkjent i video. Team på fem studenter.",
    points: [
      "Hadde ansvaret for frontend, blant annet en kanban-tavle og hvordan data flyter mellom frontend og backend.",
      "Jobbet i Scrum med daglige stand-ups.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Fastify",
      "PostgreSQL",
      "Docker",
      "Zod",
    ],
  },
];

const featured: Project = {
  title: "minesoknader.no",
  description:
    "Fullstack-app der jobbsøkere logger inn, registrerer søknadene sine og følger statusen på hver av dem. Jeg bygget den fordi jeg selv mistet oversikten over egne søknader. I dag har den over 100 brukere, og jeg utvikler og drifter den alene: React-frontend, API i C#/.NET med JWT-innlogging, PostgreSQL og Docker.",
  image: "/assets/minesoknader-demo.webp",
  imageWidth: 1600,
  imageHeight: 796,
  tech: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "C#",
    ".NET",
    "PostgreSQL",
    "JWT",
    "Docker",
    "Railway",
  ],
  link: "https://www.minesoknader.no",
  linkNote: "Krever innlogging",
  code: "https://github.com/Alexios10/Application-Tracker",
};

const otherProjects: Project[] = [
  {
    title: "Movix",
    description:
      "Webapp for å utforske filmer og TV-serier, med detaljer og trailere. Data hentes fra The Movie Database (TMDB), og tilstanden styres med Redux.",
    image: "/assets/movix-combined.webp",
    imageWidth: 1600,
    imageHeight: 974,
    tech: ["React", "Redux", "SCSS", "TMDB API"],
    link: "https://movix-self-nine.vercel.app/",
    code: "https://github.com/Alexios10/movix",
  },
  {
    title: "Værmeldingen",
    description:
      "Værapp som viser temperatur, vind, luftfuktighet og femdagersvarsel for en valgt by, med data fra OpenWeatherMap.",
    image: "/assets/vaarmeldingen.webp",
    imageWidth: 1600,
    imageHeight: 760,
    tech: ["React", "TypeScript", "Tailwind CSS", "OpenWeatherMap API"],
    link: "https://v-rmeldinga.vercel.app/",
    code: "https://github.com/Alexios10/v-rmeldinga",
  },
];

const TechTags = ({
  tech,
  small = false,
}: {
  tech: string[];
  small?: boolean;
}) => (
  <ul className="flex flex-wrap gap-2">
    {tech.map((t) => (
      <li
        key={t}
        className={`px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full ${
          small ? "text-xs" : "text-xs md:text-sm"
        }`}
      >
        {t}
      </li>
    ))}
  </ul>
);

const linkClass =
  "bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 transition-colors px-5 py-2 rounded-lg inline-flex items-center border border-blue-400/60";

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap items-center gap-4">
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      <span>Live</span>
      <ExternalLink className="ml-2 w-4 h-4" aria-hidden="true" />
    </a>
    {project.code && (
      <a
        href={project.code}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <span>Kode</span>
        <FaGithub className="ml-2 w-4 h-4" aria-hidden="true" />
      </a>
    )}
    {project.linkNote && (
      <span className="text-gray-500 text-sm">{project.linkNote}</span>
    )}
  </div>
);

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 min-h-screen bg-[#0a0118] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent opacity-60" />

      <div className="container mx-auto px-6 relative z-10 space-y-24">
        <h2 className="text-4xl md:text-5xl font-medium text-white">
          Erfaring og prosjekter
        </h2>

        {/* Work at Hoolsy (closed source, no screenshots) */}
        <div className="grid lg:grid-cols-2 gap-8">
          {workProjects.map((project) => (
            <article
              key={project.title}
              className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl flex flex-col gap-5"
            >
              <header>
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-blue-300 mt-1">
                  {project.role} · {project.period}
                </p>
              </header>
              <p className="text-gray-300">{project.intro}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <TechTags tech={project.tech} />
              </div>
            </article>
          ))}
        </div>

        {/* Featured own product */}
        <article className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-3/5 relative group">
            <div className="absolute inset-0 bg-gray-500/20 rounded-xl group-hover:bg-gray-500/30 transition-all duration-300" />
            <img
              src={featured.image}
              alt={`Skjermbilde av ${featured.title}`}
              width={featured.imageWidth}
              height={featured.imageHeight}
              loading="lazy"
              className="relative w-full h-auto rounded-xl shadow-2xl group-hover:scale-[1.01] transition-all duration-300"
            />
          </div>

          <div className="lg:w-2/5 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {featured.title}
            </h3>
            <p className="text-blue-300">
              Grunnlegger og utvikler · feb. 2026 – nå
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl">
              <p className="text-gray-300 text-sm md:text-base">
                {featured.description}
              </p>
            </div>
            <TechTags tech={featured.tech} />
            <ProjectLinks project={featured} />
          </div>
        </article>

        {/* Earlier projects */}
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-medium text-white">
            Tidligere prosjekter
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <article
                key={project.title}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col"
              >
                <img
                  src={project.image}
                  alt={`Skjermbilde av ${project.title}`}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  loading="lazy"
                  className="w-full h-auto aspect-[16/9] object-cover object-top"
                />
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <h4 className="text-xl font-bold text-white">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    {project.description}
                  </p>
                  <TechTags tech={project.tech} small />
                  <div className="mt-auto pt-2">
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
