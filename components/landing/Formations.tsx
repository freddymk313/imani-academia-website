"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const formations = [
  {
    title: "Informatique",
    description: "Développement Web, Data Science, et Cybersécurité. Maîtrisez les outils qui façonnent le futur technologique.",
    icon: "terminal",
    count: "24 Modules",
    borderColor: "border-primary",
    iconBg: "bg-primary-container",
    iconColor: "text-white",
    hoverBg: "group-hover:bg-primary",
    hoverText: "group-hover:text-white"
  },
  {
    title: "Anglais Business",
    description: "Perfectionnez votre communication professionnelle et ouvrez-vous aux opportunités internationales.",
    icon: "translate",
    count: "12 Niveaux",
    borderColor: "border-[#001d33]",
    iconBg: "bg-[#001d33]",
    iconColor: "text-white",
    hoverBg: "group-hover:bg-[#001d33]",
    hoverText: "group-hover:text-white"
  },
  {
    title: "Cours à domicile",
    description: "Un apprentissage sur-mesure dans le confort de votre foyer avec nos tuteurs dédiés et certifiés.",
    icon: "home_work",
    count: "Sur mesure",
    borderColor: "border-secondary-container",
    iconBg: "bg-secondary-container",
    iconColor: "text-white",
    hoverBg: "group-hover:bg-secondary-container",
    hoverText: "group-hover:text-white"
  }
];

export default function Formations() {
  return (
    <section className="py-24 px-8" id="formations">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER DE LA SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#cfe5ff] text-on-secondary-fixed-variant text-[10px] font-bold uppercase tracking-wider">
              Nos Formations
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-on-surface">
              Explorez nos <span className="italic text-primary">domaines d'expertise</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="#" className="text-primary font-bold flex items-center gap-2 group transition-all">
              Voir tout le catalogue
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </motion.div>
        </div>

        {/* GRILLE DES CARTES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group bg-surface-container-lowest p-8 rounded-4xl signature-shadow hover:-translate-y-2 transition-all duration-300 border-t-4 ${item.borderColor}`}
            >
              {/* ICONE */}
              <div className={`w-14 h-14 rounded-full ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-8 shadow-sm`}>
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
              </div>

              {/* CONTENU */}
              <h3 className="text-2xl font-bold mb-4 text-on-surface">
                {item.title}
              </h3>
              <p className="text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">
                {item.description}
              </p>

              {/* FOOTER DE LA CARTE */}
              <div className="flex items-center justify-between pt-4 *border-t border-outline-variant/95">
                <span className="text-xs font-bold text-outline uppercase tracking-[0.2em]">
                  {item.count}
                </span>
                <button className={`w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary transition-all duration-300 ${item.hoverBg} ${item.hoverText}`}>
                  <span className="material-symbols-outlined text-xl">
                    chevron_right
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}