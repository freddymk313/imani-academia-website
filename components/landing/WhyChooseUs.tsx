"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "workspace_premium",
    title: "Certifications",
    description: "Diplômes reconnus par l'État et les leaders de l'industrie technologique.",
  },
  {
    icon: "schedule",
    title: "Flexibilité",
    description: "Apprenez à votre rythme avec des horaires adaptés à votre vie active.",
  },
  {
    icon: "psychology",
    title: "Mentorat",
    description: "Un suivi individuel pour débloquer votre plein potentiel créatif.",
  },
  {
    icon: "hub",
    title: "Réseautage",
    description: "Accès exclusif à notre réseau de partenaires et d'anciens élèves.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted" id="why-us">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* HEADER CENTRÉ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#cee5ff] text-[#004a78] text-[10px] font-bold uppercase tracking-widest">
            Pourquoi Nous Choisir
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface leading-tight">
            L'excellence académique à votre <span className="italic text-primary">portée</span>
          </h2>
        </motion.div>

        {/* GRILLE DES AVANTAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-surface-container-lowest p-8 rounded-4xl signature-shadow transition-all duration-300 group border border-transparent hover:border-primary/10"
            >
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-4xl">
                  {feature.icon}
                </span>
              </div>
              
              <h4 className="text-xl font-bold mb-3 text-on-surface">
                {feature.title}
              </h4>
              
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}