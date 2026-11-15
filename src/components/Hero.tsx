import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  isVisible: boolean;
}

const Hero: React.FC<HeroSectionProps> = ({ isVisible }) => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0a0118] flex items-center relative overflow-hidden pt-20 md:pt-0"
    >
      {/* Blue radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div
          className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Avatar */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-square relative">
              <div className="absolute inset-[25%] bg-gradient-to-tr from-blue-600/20 via-blue-600/30 to-transparent blur-2xl rounded-full" />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src="/assets/avatar.webp"
                  alt="Sattar Rahim"
                  width={408}
                  height={612}
                  className="w-[50%] h-[50%] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex justify-center items-center h-full order-1">
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-center md:text-left">
                <span className="text-white">Hei! Jeg er </span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                  Sattar Rahim
                </span>
              </h1>

              <p className="text-2xl md:text-4xl text-white font-light">
                Fullstack-utvikler i Oslo
              </p>

              <p className="text-gray-400 text-lg w-full sm:max-w-xl text-center md:text-left">
                Jeg jobber som fullstack-utvikler hos Hoolsy, der jeg har bygget
                lydgjenkjenningen i backend. Ved siden av har jeg bygget og
                drifter{" "}
                <a
                  href="https://www.minesoknader.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
                >
                  minesoknader.no
                </a>{" "}
                alene – en app som over 100 jobbsøkere bruker.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                >
                  <a href="#projects">Se prosjektene mine</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-blue-600/40 text-white hover:bg-blue-600/10 hover:text-white px-8 py-6 text-lg"
                >
                  <a href="/assets/Sattar_Rahim_CV.pdf" download>
                    Last ned CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
