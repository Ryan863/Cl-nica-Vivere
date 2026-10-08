"use client";

import React from "react";
import { motion } from "framer-motion";
import { Accessibility, ShieldCheck, HeartHandshake, Sparkles, Stethoscope, Users } from "lucide-react";

export function ValueBanner() {
  const pillars = [
    {
      icon: Accessibility,
      title: "Acessibilidade Total",
      description: "Estrutura adaptada com rampas e espaços amplos, pensada para carrinhos de bebê e mobilidade reduzida.",
    },
    {
      icon: Users,
      title: "Da Infância à 3ª Idade",
      description: "Cuidado humanizado e continuado para bebês, crianças, adultos e idosos em um único ambiente integrado.",
    },
    {
      icon: Sparkles,
      title: "Imunização Acolhedora",
      description: "Protocolos humanizados e equipe atenciosa para transformar a vacinação em um momento seguro e calmo.",
    },
    {
      icon: Stethoscope,
      title: "Equipe Multidisciplinar",
      description: "Medicina, psicologia, fisioterapia, fonoaudiologia, nutrição e psicopedagogia trabalhando em sinergia.",
    },
  ];

  return (
    <section id="proposta-valor" className="relative py-20 sm:py-28 bg-white border-y border-blue-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Value Statement inspired by Design Reference (Image 1) */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-6">
            <HeartHandshake className="w-3.5 h-3.5 text-blue-600" />
            <span>Nossa Proposta de Valor</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
            Atendimento especializado com muito cuidado, carinho e atenção{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              desde a infância até a melhor idade.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Um ambiente acolhedor, organizado e com acessibilidade completa no coração do Bairro Santa Tereza, em Videira.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative p-6 rounded-2xl bg-[#F8FAFC] border border-blue-100/80 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-blue-600">
                  <span>Excelência Vivere</span>
                  <span className="text-slate-400">0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
