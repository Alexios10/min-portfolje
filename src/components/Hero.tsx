import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  isVisible: boolean;
}

const Hero: React.FC<HeroSectionProps> = ({ isVisible }) => {
  return (
    <main>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />

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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-focus-in">
                Sattar Rahim
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Frontend & Mobilutvikling Student Og Fremtidig Full-Stack Utvikler
            </p>
            <p></p>
            <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Lidenskapelig opptatt av å skape innovative løsninger og bygge
              fantastiske brukeropplevelser. Klar til å bidra til teamet ditt
              med friske ideer og engasjement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects">
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
      </section>
    </main>
  );
};

export default Hero;
