import { FaLinkedin } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FC } from "react";

interface ContactSectionProps {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSendEmail: (e: React.FormEvent<HTMLFormElement>) => void;
  form: { name: string; email: string; message: string };
  sending?: boolean;
  result?: string | null;
}

export const Contact: FC<ContactSectionProps> = ({
  handleSendEmail,
  form,
  handleInputChange,
  sending = false,
  result = null,
}) => {
  return (
    <section id="contact" className="min-h-screen relative bg-[#0a0118] py-32">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent opacity-60" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                  La oss samarbeide!
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Jeg er snart ferdig utdannet og ser etter spennende muligheter
                  på juniornivå. Jeg ønsker å bidra til engasjerende prosjekter
                  samtidig som jeg videreutvikler meg som utvikler. Ta gjerne
                  kontakt – jeg vil gjerne høre mer om hvordan jeg kan være til
                  nytte for teamet ditt.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-purple-600/10 hover:bg-purple-600/20 rounded-lg backdrop-blur-sm transition-all duration-300 group">
                  <Mail className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-white font-medium">Epost</p>
                    <p className="text-gray-400 text-sm md:text-base">
                      sattar_saud@hotmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-purple-600/10 hover:bg-purple-600/20 rounded-lg backdrop-blur-sm transition-all duration-300 group">
                  <Phone className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-white font-medium">Mobil</p>
                    <p className="text-gray-400 text-sm md:text-base">
                      +47 94 10 0267
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-purple-600/10 hover:bg-purple-600/20 rounded-lg backdrop-blur-sm transition-all duration-300 group">
                  <FaLinkedin className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <a
                      href="https://www.linkedin.com/in/sattar-rahim-082188236/"
                      target="_blank"
                      className="text-gray-400 text-sm md:text-base"
                    >
                      <span className="text-white font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right section */}
            <div className="bg-purple-600/10 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl">
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
                    className="w-full px-4 py-3 bg-purple-600/10 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-purple-600/10 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-purple-600/10 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300 resize-none"
                    placeholder="La oss diskutere muligheter..."
                  />
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-800 text-white py-3 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
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
  );
};
