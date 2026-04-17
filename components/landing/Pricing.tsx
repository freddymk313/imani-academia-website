"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pricingData = {
  informatique: [
    {
      title: "Informatique",
      location: "Au Centre",
      price: "45k",
      features: ["Accès labo 24/7", "Supports physiques", "Certificat inclus"],
      popular: false,
    },
    {
      title: "Informatique",
      location: "À Domicile",
      price: "75k",
      features: ["Tuteur personnel", "Horaires à la carte", "Projets personnalisés"],
      popular: true, // Mis en avant pour le domicile
    },
  ],
  anglais: [
    {
      title: "Anglais Pro",
      location: "Au Centre",
      price: "35k",
      features: ["Clubs de discussion", "Tests blancs TOEFL", "Immersion complète"],
      popular: true,
    },
    {
      title: "Anglais Pro",
      location: "À Domicile",
      price: "60k",
      features: ["Coaching 1-on-1", "Matériel fourni", "Rythme intensif"],
      popular: false,
    },
  ],
};

export default function Pricing() {
  const [category, setCategory] = useState<"informatique" | "anglais">("informatique");

  return (
    <section className="py-24 px-8 bg-background" id="tarifs">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#cfe5ff] text-on-secondary-fixed-variant text-[10px] font-bold uppercase tracking-widest mb-4"
          >
            Tarifs
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Investissez dans votre <span className="italic text-primary">avenir</span>
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Des plans transparents adaptés à tous les budgets et tous les modes d'apprentissage.
          </p>
        </div>

        {/* SWITCHER PREMIUM */}
        <div className="flex justify-center mb-16">
          <div className="bg-surface-container-low p-1.5 rounded-full flex items-center relative border border-outline-variant/20">
            <button
              onClick={() => setCategory("informatique")}
              className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${
                category === "informatique" ? "text-white" : "text-on-surface-variant"
              }`}
            >
              Informatique
            </button>
            <button
              onClick={() => setCategory("anglais")}
              className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${
                category === "anglais" ? "text-white" : "text-on-surface-variant"
              }`}
            >
              Anglais
            </button>
            
            {/* Background animé du switch */}
            <motion.div
              className="absolute bg-primary rounded-full h-[calc(100%-12px)] top-[6px]"
              initial={false}
              animate={{
                x: category === "informatique" ? 6 : "calc(100% - 130px)", // Ajustement selon la largeur du bouton
                width: category === "informatique" ? 124 : 100, // Largeur dynamique
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* GRILLE DE TARIFS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {pricingData[category].map((plan, index) => (
              <motion.div
                key={`${category}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`relative flex flex-col p-8 rounded-4xl transition-all duration-300 ${
                  plan.popular 
                  ? "bg-white signature-shadow border-2 border-primary z-10 md:scale-105" 
                  : "bg-surface-container-low border border-outline-variant/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-6 py-1.5 rounded-full shadow-lg">
                    Recommandé
                  </div>
                )}

                <h3 className="text-xl font-bold mb-1 text-on-surface">{plan.title}</h3>
                <div className="text-sm text-primary font-bold uppercase tracking-wider mb-6">{plan.location}</div>
                
                <div className="text-5xl font-black mb-8 text-on-surface">
                  {plan.price} <span className="text-base font-medium text-on-surface-variant">/mois</span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm font-medium">
                      <span className="material-symbols-outlined text-primary font-bold">done</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${
                  plan.popular 
                  ? "bg-primary text-white shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95" 
                  : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}>
                  Choisir ce plan
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}