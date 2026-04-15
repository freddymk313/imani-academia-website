'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap, Globe, LayoutDashboard } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '#' },
  { label: 'Formations', href: '#formations' },
  { label: 'À propos', href: '#about' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-surface-lowest/80 backdrop-blur-xl shadow-signature-blue border-b border-border' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">

          {/* LOGO - Utilisation de deep-core pour l'autorité */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center editorial-gradient signature-shadow transition-transform group-hover:scale-105">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-background rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-container rounded-full animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-deep-core leading-none uppercase">
                Imani Academia
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mt-1 opacity-80">
                English & IT Excellence
              </span>
            </div>
          </a>

          {/* NAV CENTRALE - Style Étiquette sur Surface Low */}
          <div className="hidden lg:flex items-center bg-surface-low/50 p-1 rounded-full border border-border/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-6 py-2.5 text-[11px] font-black uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all duration-300 rounded-full hover:bg-surface-lowest hover:shadow-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ACTIONS - Premium CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-surface-low transition-colors cursor-pointer group">
              <Globe className="w-4 h-4 text-on-surface-variant group-hover:text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-primary">FR/EN</span>
            </div>

            <a
              href="/dashboard"
              className="p-2.5 text-on-surface-variant hover:text-primary transition-colors"
              title="Dashboard"
            >
              <LayoutDashboard size={20} />
            </a>

            <a
              href="/register"
              className="editorial-gradient text-white px-8 py-3.5 rounded-full text-[12px] font-black uppercase tracking-[0.15em] transition-all hover:brightness-110 active:scale-95 signature-shadow"
            >
              S'inscrire
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-2xl bg-surface-low text-deep-core transition-transform active:scale-90 shadow-sm"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE - Glassmorphism */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 w-full bg-surface-lowest border-t border-border shadow-2xl overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-black text-deep-core hover:text-primary transition-colors flex items-center justify-between group"
                >
                  {link.label}
                  <span className="w-2 h-2 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" />
                </a>
              ))}

              <div className="pt-6 border-t border-border flex flex-col gap-4">
                <button className="w-full py-5 text-center font-black uppercase tracking-widest text-on-surface-variant bg-surface-low rounded-2xl transition-all active:scale-[0.98]">
                  Espace Apprenant
                </button>
                <button className="w-full py-5 text-center font-black uppercase tracking-widest text-white editorial-gradient rounded-2xl shadow-signature-blue transition-all active:scale-[0.98]">
                  S'inscrire Maintenant
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}