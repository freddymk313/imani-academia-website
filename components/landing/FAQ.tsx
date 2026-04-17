"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Comment se déroule l'inscription ?",
    answer: "L'inscription se fait en trois étapes : remplissage du formulaire en ligne, test de niveau gratuit (pour l'anglais ou l'informatique), puis finalisation administrative au centre.",
  },
  {
    question: "Les formations sont-elles certifiantes ?",
    answer: "Oui, toutes nos formations aboutissent à une certification de fin de cycle reconnue, attestant de vos compétences acquises durant le parcours.",
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer: "Absolument. Nous proposons des échelonnements de paiement sur 2 ou 3 fois sans frais pour les parcours longs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // La première est ouverte par défaut

  return (
    <section className="py-24 bg-surface-container-low" id="faq">
      <div className="max-w-4xl mx-auto px-8">
        
        {/* TITRE */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-on-surface"
        >
          Questions <span className="italic text-primary">Fréquentes</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface-container-lowest rounded-3xl overflow-hidden signature-shadow border border-outline-variant/5"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-7 flex justify-between items-center text-left font-bold text-on-surface hover:bg-surface-container-low/50 transition-colors"
                >
                  <span className="text-lg md:text-xl pr-4">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="material-symbols-outlined text-primary text-2xl"
                  >
                    expand_more
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-on-surface-variant text-base leading-relaxed border-t border-outline-variant/10 pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}