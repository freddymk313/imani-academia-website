"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative *editorial-gradient bg-primary rounded-[2.5rem] p-12 lg:p-24 text-center text-white signature-shadow overflow-hidden"
        >
          {/* Décorations d'arrière-plan animées */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.15, 0.05] 
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-300/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" 
          />

          <div className="relative z-10 space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-6xl font-black tracking-tighter text-white leading-none"
            >
              Prêt à <span className="italic font-light opacity-80">Commencer</span> ?
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg lg:text-lg max-w-2xl mx-auto opacity-90 font-medium leading-relaxed"
            >
              Ne remettez pas votre futur à demain. Rejoignez les +50 étudiants qui ont transformé leur carrière avec Imani Academia.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            >
              <button className="bg-white text-primary px-10 py-4.5 rounded-full font-black text-sm transition-all duration-300">
                S'inscrire Maintenant
              </button>
              
              <button className="bg-white/10 backdrop-blur-md border-white/30 text-white px-10 py-4.5 rounded-full font-bold text-sm hover:bg-white/20 transition-all duration-300">
                Contacter un conseiller
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}