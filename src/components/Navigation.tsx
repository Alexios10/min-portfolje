import React, { useState, useEffect } from "react";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Hjem", section: "home" },
    { name: "Om", section: "about" },
    { name: "Prosjekter", section: "projects" },
    { name: "Kontakt", section: "contact" },
  ];

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed translate-x-2/4 flex items-center backdrop-blur-[10px] border bg-[rgba(255,255,255,0.1)] p-2 rounded-[50px] border-solid border-[rgba(255,255,255,0.1)] right-2/4 top-5 z-50 max-md:p-1.5 max-md:top-[15px] ${className}`}
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.section;
        return (
          <button
            key={item.name}
            onClick={() => handleNavClick(item.section)}
            className={`text-white text-sm font-normal cursor-pointer transition-all duration-300 ease-in-out px-5 py-2 rounded-[50px] hover:bg-[rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 max-md:text-[13px] max-md:px-4 max-md:py-1.5 ${
              isActive ? "bg-blue-600/90" : ""
            }`}
            aria-label={`Navigate to ${item.name}`}
          >
            {item.name}
          </button>
        );
      })}
    </nav>
  );
};

export default Navigation;
