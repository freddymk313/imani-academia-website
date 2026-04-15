'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function Hero() {
  // Variantes pour les animations d'entrée
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section 
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background"
      >
      {/* Éléments de décor en arrière-plan (No-Line Principle) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary-container/10 rounded-full blur-[80px] -z-10 -translate-x-1/2" />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* COLONNE TEXTE */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-low border border-border/50 text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                <Sparkles size={14} />
                Centre de formation d'élite
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl lg:text-8xl font-black text-deep-core leading-[0.95] tracking-tighter"
            >
              Maîtrisez l' <br />
              <span className="text-primary italic font-light">Anglais</span> & <br />
              <span className="relative">
                l'Informatique
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary-container/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="max-w-xl text-lg lg:text-xl text-on-surface-variant leading-relaxed"
            >
              Développez des compétences de classe mondiale grâce à nos programmes certifiants conçus par des experts du secteur. Rejoignez une communauté d'apprenants passionnés.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <button className="editorial-gradient text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest signature-shadow hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                Commencer maintenant
                <ArrowRight size={18} />
              </button>

              <button className="px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest text-deep-core bg-white border border-border hover:bg-surface-low transition-all flex items-center gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-surface-low flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Play size={14} fill="currentColor" />
                </div>
                En savoir plus
              </button>
            </motion.div>

            {/* Preuve Sociale / Stats subtiles */}
            <motion.div variants={fadeInUp} className="flex items-center gap-8 pt-8 border-t border-border/50">
              <div>
                <p className="text-2xl font-black text-deep-core">2000+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-60">Étudiants formés</p>
              </div>
              <div className="w-px h-10 bg-border/50" />
              <div>
                <p className="text-2xl font-black text-deep-core">95%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-60">Taux de réussite</p>
              </div>
            </motion.div>
          </motion.div>

          {/* COLONNE VISUELLE - Collage Moderne */}
          <div className="relative grid grid-cols-2 gap-4 lg:gap-6">
            {/* Image 1 - Grand Angle (Haut Gauche) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[4/5] rounded-tr-[80px] rounded-bl-[40px] rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
                alt="Étudiants collaborant"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>

            {/* Image 2 - Portrait Cercle (Haut Droite) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 aspect-square rounded-full overflow-hidden border-[12px] border-surface-lowest shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                alt="Formatrice experte"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image 3 - Détail Tech Cercle (Bas Gauche) */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="aspect-square rounded-full overflow-hidden border-[8px] border-surface-low shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
                alt="Interface numérique"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image 4 - Focus Pro (Bas Droite) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="-mt-12 aspect-[4/5] rounded-tl-[80px] rounded-br-[40px] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" 
                alt="Réunion de projet"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>

            {/* Badge flottant d'accréditation */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {/* <GraduationCap size={20} /> */}
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-deep-core">Certifié par l'État</p>
                  <p className="text-[10px] text-on-surface-variant font-medium leading-none">Standard International</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}