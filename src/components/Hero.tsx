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
      {/* Purple gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />

      <div className="container mx-auto px-6 py-12">
        <div
          className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left side - Avatar */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-square relative">
              {/* Glow effect behind the image */}
              <div className="absolute inset-[25%] bg-gradient-to-tr from-purple-600/20 via-purple-600/30 to-transparent blur-2xl rounded-full" />

              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src="/assets/avatar.png"
                  alt="avatar"
                  className="w-[50%] h-[50%] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="order-1 md:order-2 text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight">
              <span className="text-white">Hei! Jeg er </span>
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 text-transparent bg-clip-text">
                Sattar Rahim
              </span>
            </h1>

            <div className="space-y-2">
              <h2 className="text-2xl md:text-4xl text-white font-light">
                En Utvikler som
              </h2>
              <p className="text-3xl md:text-5xl font-medium">
                <span className="text-white">Skaper </span>
                <span className="text-purple-400">innovative</span>
                <span className="text-white"> løsninger...</span>
              </p>
              <p className="text-gray-400 text-lg mt-4 max-w-xl">
                Frontend & Mobilutviklings Student med lidenskap for å bygge
                eksepsjonelle brukeropplevelser og gi liv til ideer.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#projects">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
                >
                  Se Mine Prosjekter
                </Button>
              </a>
              <a href="/assets/Utvikler-CV.pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-600/20 hover:bg-purple-600/10 hover:text-white px-8 py-6 text-lg"
                >
                  Last Ned CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
