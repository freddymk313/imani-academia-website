"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-low w-full border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 md:px-12 py-16 max-w-7xl mx-auto font-sans text-sm leading-relaxed">
        
        {/* LOGO & DESCRIPTION */}
        <div className="space-y-6">
          <span className="text-xl font-black tracking-tighter text-deep-core">
            Imani<span className="text-primary">.</span>Academia
          </span>
          <p className="text-on-surface-variant max-w-xs">
            L'excellence académique pour forger les leaders de demain. Excellence, Innovation, Succès.
          </p>
          <div className="flex gap-4">
            {['social_leaderboard', 'crossword', 'link'].map((icon, idx) => (
              <motion.a
                key={idx}
                whileHover={{ y: -3, backgroundColor: "var(--color-primary)", color: "#ffffff" }}
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm transition-all border border-outline-variant/10"
              >
                <span className="material-symbols-outlined text-xl">{icon}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="space-y-6">
          <h4 className="font-bold text-deep-core uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-4">
            {['Home', 'Formations', 'À propos', 'Tarifs'].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-on-surface-variant hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-4 h-[1px] bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-6">
          <h4 className="font-bold text-deep-core uppercase tracking-widest text-xs">Contact</h4>
          <ul className="space-y-4 text-on-surface-variant">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">mail</span>
              <span className="font-medium">contact@imani.com</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">call</span>
              <span className="font-medium">+225 01 02 03 04 05</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">location_on</span>
              <span className="font-medium">Abidjan, Cocody Riviera</span>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="space-y-6">
          <h4 className="font-bold text-deep-core uppercase tracking-widest text-xs">Newsletter</h4>
          <p className="text-on-surface-variant">Recevez nos dernières actualités et offres de formation.</p>
          <div className="flex flex-col gap-3">
            <input 
              className="bg-white border border-outline-variant/30 rounded-2xl px-5 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm transition-all" 
              placeholder="votre@email.com" 
              type="email"
            />
            <button className="bg-primary text-white py-3.5 rounded-2xl font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/10">
              S'abonner
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT & LEGAL */}
      <div className="border-t border-outline-variant/10 px-8 md:px-12 py-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-on-surface-variant/60 text-[11px] font-bold uppercase tracking-wider">
        <span>© {currentYear} Imani Academia. All rights reserved.</span>
        <div className="flex flex-wrap justify-center gap-8">
          <Link href="#" className="hover:text-primary transition-colors">Mentions Légales</Link>
          <Link href="#" className="hover:text-primary transition-colors">Politique de Confidentialité</Link>
          <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}