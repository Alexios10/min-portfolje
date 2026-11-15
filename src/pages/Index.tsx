import { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0118]">
      <Navigation />
      <Hero isVisible={isVisible} />
      <About />
      <Projects />
      <Contact />

      {/* Back to top */}
      <div className="flex justify-center pb-6">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Til toppen"
          className="bg-blue-600/20 hover:bg-blue-700/30 text-white rounded-full p-3 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          <MdKeyboardDoubleArrowUp size={30} aria-hidden="true" />
        </button>
      </div>
    </main>
  );
};

export default Index;
