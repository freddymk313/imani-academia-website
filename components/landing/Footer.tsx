"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Liste des réseaux sociaux avec leurs icônes SVG simples
  const socialLinks = [
    { 
      name: "Facebook", 
      path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
    },
    { 
      name: "TikTok", 
      path: "M12.525.02c1.31 0 2.591.35 3.711 1.012a6.44 6.44 0 0 1 1.636-1.012C18.232.02 18.59.02 18.948.02a8.55 8.55 0 0 0-.154 1.496c-.027 1.464.444 2.893 1.34 4.053a8.536 8.536 0 0 0 1.866 1.706V10.2c-1.123-.198-2.2-.61-3.167-1.21-.088 4.318-.54 7.64-4.832 9.423-2.147.892-4.542.92-6.711.08-2.227-.864-3.951-2.658-4.808-4.99-.857-2.33-.518-4.918.945-6.94 1.545-2.138 4.094-3.238 6.703-2.887V7.092a4.57 4.57 0 0 0-3.328 2.016 4.61 4.61 0 0 0-.616 3.487 4.59 4.59 0 0 0 2.456 3.033 4.586 4.586 0 0 0 4.881-.59 4.58 4.58 0 0 0 1.524-3.411V.02h.473z" 
    },
    { 
      name: "WhatsApp", 
      path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.415 0 12.05c0 2.12.554 4.189 1.605 6.013L0 24l6.135-1.61a11.793 11.793 0 005.912 1.586h.005c6.632 0 12.048-5.415 12.048-12.052 0-3.211-1.25-6.229-3.52-8.5a11.75 11.75 0 00-8.53-3.52z" 
    }
  ];

  return (
    <footer className="bg-foreground w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 md:px-12 py-20 max-w-7xl mx-auto font-sans text-sm leading-relaxed text-white">
        {/* LOGO & DESCRIPTION */}
        <div className="space-y-6">
          <span className="text-2xl font-black tracking-tighter text-white">
            Imani<span className="opacity-50">.</span>Academia
          </span>
          <p className="text-white/70 max-w-xs leading-relaxed">
            L'excellence académique pour forger les leaders de demain.
            Excellence, Innovation, Succès.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                whileHover={{
                  y: -4,
                  backgroundColor: "#ffffff",
                  color: "var(--color-primary)",
                }}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-all"
                aria-label={social.name}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d={social.path} />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="space-y-6">
          <h4 className="font-bold text-white uppercase opacity-60">
            Navigation
          </h4>
          <ul className="space-y-4">
            {["Home", "Formations", "À propos", "Tarifs"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white/80 hover:text-white transition-all flex items-center group"
                >
                  <span className="material-symbols-outlined text-[18px] opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 ease-out">
                    chevron_right
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-6">
          <h4 className="font-bold text-white uppercase opacity-60">
            Contact
          </h4>
          <ul className="space-y-5 text-white/80">
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-white text-lg">
                  mail
                </span>
              </div>
              <span className="font-medium">imaniacademia@gmail.com</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-white text-lg">
                  call
                </span>
              </div>
              <span className="font-medium">+243 991 040 032</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-white text-xs">
                  location_on
                </span>
              </div>
              <span className="font-medium">Lubumbashi, RDC</span>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="space-y-6">
          <h4 className="font-bold text-white uppercase opacity-60">
            Newsletter
          </h4>
          <p className="text-white/70">
            Recevez nos dernières actualités et offres de formation.
          </p>
          <div className="flex flex-col gap-3">
            <input
              className="bg-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-white/30 focus:bg-white/20 outline-none text-sm transition-all placeholder:text-white/40 text-white"
              placeholder="votre@email.com"
              type="email"
            />
            <button className="bg-white text-primary py-4 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-all">
              S'abonner
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="relative z-10 border-t border-white/10 px-8 py-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs">
        <span>
          © {currentYear} Imani Academia. construit par{" "}
          <Link href="#" className="hover:text-white transition-colors">
            Nordev Agency
          </Link>
        </span>
        <div className="flex flex-wrap justify-center gap-10">
          {["Mentions Légales", "Confidentialité", "Cookies"].map((link) => (
            <Link
              key={link}
              href="#"
              className="hover:text-white transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}