import { useState, useEffect } from "react";
import { Mail, Phone, ExternalLink, Menu } from "lucide-react";
import emailjs from "@emailjs/browser";

// React icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiTypescript } from "react-icons/si";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // EmailJS send handler
  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setResult(null);
    try {
      const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setResult("Takk for din melding! Jeg svarer så fort jeg kan.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setResult("Noe gikk galt. Prøv igjen senere.");
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      Mangler bare å få til sånn at brukeren kan logge inn med Google OAuth Og noe design og UI forbedringer.`,
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
      title: "Værmeldinga",
      description: `En enkel værmelding-applikasjon som viser oppdatert værdata for en valgt by, inkludert temperatur, 
        vind, luftfuktighet og værforhold. Brukeren kan enkelt søke etter ulike byer og få en oversiktlig 
        presentasjon av været akkurat nå. Applikasjonen benytter OpenWeatherMap API for å hente sanntidsdata, 
        og har et responsivt og brukervennlig design som fungerer på både mobil og desktop.`,
      image: "/assets/vaarmeldinga.png",
      tech: ["React", "Typescript", "Tailwind CSS", "Openweathermap API"],
      link: "https://v-rmeldinga.vercel.app/",
      code: "https://github.com/Alexios10/v-rmeldinga.git",
    },
  ];

  const navItems = [
    { name: "Hjem", href: "#home" },
    { name: "Om", href: "#about" },
    { name: "Prosjekter", href: "#projects" },
    { name: "Kontakt", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Velkommen</h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="md:hidden text-white p-2"
                  aria-label="Toggle mobile menu"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-lg border-l border-white/10"
              >
                {/* Accessible title for Radix UI Dialog (Sheet) */}
                <SheetTitle asChild>
                  <span className="sr-only">Navigasjonsmeny</span>
                </SheetTitle>
                {/* Accessible description for Radix UI Dialog (Sheet) */}
                <SheetDescription asChild>
                  <span className="sr-only">
                    Navigasjonsmeny for mobil. Lukk menyen for å gå tilbake til
                    innholdet.
                  </span>
                </SheetDescription>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8 pt-4">
                    <h2 className="text-xl font-bold text-white">Meny</h2>
                  </div>

                  <nav className="flex-1">
                    <div className="space-y-4">
                      {navItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-lg font-medium"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.href);
                          }}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </nav>

                  <div className="mt-auto pb-4">
                    <div className="flex items-center justify-center space-x-6 text-gray-400">
                      <a href="https://github.com/Alexios10" target="_blank">
                        <FaGithub className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/sattar-rahim-082188236/"
                        target="_blank"
                      >
                        <FaLinkedin className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />

        {/* Floating Water Bubbles (AI generated) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 25 }).map((_, i) => {
            const size = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
            const left = Math.floor(Math.random() * 100); // vw
            const bottomStart = -100; // px
            const bottomEnd = Math.floor(Math.random() * 100); // vh
            const translateX = Math.floor(Math.random() * 300) - 100; // -100 to 200px
            const duration = Math.floor(Math.random() * (15 - 3 + 1)) + 3; // 3-15s
            const delay = Math.random() * 5; // 0-5s
            const bgpos = i % 2 === 0 ? "top right" : "center";
            const animName = `bubble-move-${i}`;
            // Keyframes for this bubble
            const keyframes = `@keyframes ${animName} {\n  0% { bottom: ${bottomStart}px; opacity: 0.8; transform: translate(0,0); }\n  100% { bottom: ${bottomEnd}vh; opacity: 0; transform: translate(${translateX}px,0); }\n}`;
            return [
              <style key={`style-${i}`}>{keyframes}</style>,
              <div
                key={`bubble-${i}`}
                className="bubble"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}vw`,
                  bottom: `${bottomStart}px`,
                  position: "absolute",
                  borderRadius: "100%",
                  opacity: 0.8,
                  background: `radial-gradient(ellipse at ${bgpos}, #b8c6c6 0%,#30b3d3 46%,#20628c 100%)`,
                  animation: `${animName} ${duration}s linear ${delay}s infinite`,
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: "100%",
                    pointerEvents: "none",
                    background:
                      "radial-gradient(circle at 60% 30%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.0) 60%)",
                    filter: "blur(1.5px)",
                  }}
                />
              </div>,
            ];
          })}
        </div>
        {/* END */}

        <div className="container mx-auto px-6 text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
              <span>Hei, Mitt Navn er </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sattar Rahim
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Frontend & Mobilutvikling Student
              <p className="text-purple-400"> Og</p>
              <p>Fremtidig Full-Stack Utvikler</p>
            </p>
            <p></p>
            <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Lidenskapelig opptatt av å skape innovative løsninger og bygge
              fantastiske brukeropplevelser. Klar til å bidra til teamet ditt
              med friske ideer og engasjement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={navItems[2].href}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
                >
                  Se Mine Prosjekter
                </Button>
              </a>

              <a href="/assets/Utvikler-CV.pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-black hover:bg-white/10 hover:text-white px-8 py-3"
                >
                  Last Ned CV
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse hidden md:block" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000 hidden md:block" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500 hidden lg:block" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20 min-h-screen">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Om Meg
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Jeg er en dedikert frontend student med en lidenskap for
                teknologi og innovasjon. Jeg studerer for tiden, samtidig som
                jeg bygger praktiske ferdigheter gjennom personlige prosjekter.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Målet mitt er å bli med i et dynamisk team hvor jeg kan bidra
                til meningsfulle prosjekter, samtidig som jeg fortsetter å lære
                og utvikle meg som utvikler. Jeg er spesielt interessert i
                webutvikling, brukeropplevelsesdesign og nye teknologier. Selv
                om jeg er en frontend student så har jeg som mål å bli en
                full-stack utvikler som kan skape helhetlige løsninger som
                kombinerer frontend og backend.
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

      {/* Project Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Ta Kontakt
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left section */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                    La oss samarbeide!
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Jeg søker aktivt etter praksisplasser og muligheter på
                    "Entry level" der jeg kan bidra til innovative prosjekter og
                    utvikle meg som utvikler. La oss diskutere hvordan jeg kan
                    tilføre verdi til teamet ditt!
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="text-white font-medium">Epost</p>
                      <p className="text-gray-400 text-sm md:text-base">
                        sattar_saud@hotmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-green-400" />
                    <div>
                      <p className="text-white font-medium">Mobil</p>
                      <p className="text-gray-400 text-sm md:text-base">
                        +47 94 10 0267
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                    <FaLinkedin className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="text-white font-medium">LinkedIn</p>
                      <p className="text-gray-400 text-sm md:text-base">
                        https://www.linkedin.com/in/sattar-rahim-082188236/
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right section */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 md:p-8">
                <form className="space-y-6" onSubmit={handleSendEmail}>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Navn
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="Ditt Navn"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Epost
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="din_epost@hotmail.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Melding
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={form.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                      placeholder="La oss diskutere muligheter..."
                    />
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3"
                    type="submit"
                    disabled={sending}
                  >
                    {sending ? "Sender..." : "Send"}
                  </Button>
                  {result && (
                    <div className="text-center text-white mt-4">{result}</div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <div
        className="flex items-center justify-center relative"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="bg-purple-600/20 absolute bottom-4 cursor-pointer hover:bg-purple-700/20 text-white rounded-full p-3 transition-all duration-300">
          <MdKeyboardDoubleArrowUp size={30} />
        </span>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-black/40 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Sattar Rahim. Utviklet med engasjement og dedikasjon.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
