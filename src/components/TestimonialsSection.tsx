"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, ThumbsUp } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  tag: string;
  stars: number;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Gabrieli Martins",
      role: "Mãe e Paciente",
      comment:
        "Atendimento maravilhoso da Adri, super cuidadosa, cautelosa e atendimento humanizado. Amamos a experiência!",
      tag: "Atendimento Humanizado",
      stars: 5,
    },
    {
      name: "Olga Fortes",
      role: "Paciente da Clínica",
      comment:
        "Excelente! Clínica que passa confiança e segurança para nossos pequenos.",
      tag: "Confiança & Segurança",
      stars: 5,
    },
    {
      name: "Bruna Sinzker",
      role: "Mãe de Paciente",
      comment:
        "Muito carinho e cuidado no momento da vacinação!",
      tag: "Vacinação Infantil",
      stars: 5,
    },
    {
      name: "Marizane Cardoso",
      role: "Paciente da Clínica",
      comment:
        "Muito bem atendida, com rapidez e educação.",
      tag: "Agilidade & Educação",
      stars: 5,
    },
    {
      name: "Fabiana Fragoso",
      role: "Paciente da Clínica",
      comment:
        "Extremamente profissional, um cuidado imenso. Parabéns!",
      tag: "Profissionalismo",
      stars: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-24 sm:py-32 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <ThumbsUp className="w-3.5 h-3.5 text-blue-600" />
            <span>Prova Social & Confiança</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Acolhimento reconhecido por quem mais importa:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              nossos pacientes.
            </span>
          </h2>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-600">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-slate-900">5.0 de 5 estrelas</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">Avaliações públicas em Videira - SC</span>
          </div>
        </div>

        {/* Editorial Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`glass-card p-8 flex flex-col justify-between relative group ${
                idx === 0 ? "lg:col-span-2 lg:bg-gradient-to-br lg:from-white lg:to-blue-50/50" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/50">
                    {item.tag}
                  </span>
                </div>

                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-blue-200/70 absolute -top-4 -left-2 pointer-events-none" />
                  <p className="text-slate-700 text-base sm:text-lg italic relative z-10 leading-relaxed font-normal">
                    &quot;{item.comment}&quot;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold text-sm flex items-center justify-center shadow-md shadow-blue-500/20">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {item.name}
                    </h4>
                    <span className="text-xs text-slate-500">{item.role}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Verificada</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
