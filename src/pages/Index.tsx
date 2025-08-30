import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  // Animation for name tag
  const textFocusInStyle = `
    @-webkit-keyframes text-focus-in {
      0% {
        filter: blur(12px);
        opacity: 0;
      }
      100% {
        filter: blur(0px);
        opacity: 1;
      }
    }
    @keyframes text-focus-in {
      0% {
        filter: blur(12px);
        opacity: 0;
      }
      100% {
        filter: blur(0px);
        opacity: 1;
      }
    }
    .text-focus-in {
      -webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
              animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }
  `;

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
      setTimeout(() => {
        setResult(null);
      }, 3000);

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

  return (
    <>
      <style>{textFocusInStyle}</style>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <Hero isVisible={isVisible} />
        <About />
        <Projects />
        <Contact
          handleSendEmail={handleSendEmail}
          form={form}
          handleInputChange={handleInputChange}
          sending={sending}
          result={result}
        />

        {/* Back to Top Button */}
        <div
          className="flex items-center justify-center relative"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="bg-purple-600/20 absolute bottom-4 cursor-pointer hover:bg-purple-700/20 text-white rounded-full p-3 transition-all duration-300">
            <MdKeyboardDoubleArrowUp size={30} />
          </span>
        </div>
      </main>
    </>
  );
};

export default Index;
