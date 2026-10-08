"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowDown, Sparkles, Shield, Heart } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import ParallaxDemo from "@/demos/default";

export function HeroSection() {
  const whatsappUrl =
    "https://wa.me/554998250158?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20atendimento%20na%20Cl%C3%ADnica%20Vivere.";

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-12 overflow-hidden">
      {/* Background Aurora Glow */}
      <AuroraBackground className="absolute inset-0 z-0 opacity-80" showRadialGradient={true}>
        <div />
      </AuroraBackground>

      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-400/15 via-sky-300/20 to-indigo-400/15 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center items-center">
        {/* Editorial Text Content (Clean & Focused) */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Top Subtle Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-blue-200/80 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-800">
              Clínica Multidisciplinar Integrada • Videira - SC
            </span>
          </motion.div>

          {/* Headline: "Cuidado integral e humanizado para todas as fases da vida." */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] text-balance mb-5"
          >
            Cuidado integral e humanizado para todas as fases da vida.
          </motion.h1>

          {/* Subtitle: "Medicina, Psicologia, Fisioterapia, Nutrição e Vacinação no Santa Tereza, em Videira." */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-slate-600 font-normal max-w-2xl leading-relaxed mb-8 text-balance"
          >
            Medicina, Psicologia, Fisioterapia, Psicopedagogia, Nutrição e Vacinação no Bairro Santa Tereza, em Videira.
          </motion.p>

          {/* Primary High-Conversion CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-blue w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-semibold group cursor-pointer"
            >
              <div className="relative">
                <MessageCircle className="w-5 h-5 fill-white/20 transition-transform group-hover:scale-110" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <span>Agendar Atendimento via WhatsApp</span>
            </a>

            <a
              href="#especialidades"
              className="btn-secondary-pill w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold text-slate-700"
            >
              <span>Conhecer Especialidades</span>
            </a>
          </motion.div>
        </div>

        {/* Central Visual Composition with Parallax & Soft Gradient Integration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
          className="w-full mt-2"
        >
          <ParallaxDemo />
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt at the Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center pt-8"
      >
        <a
          href="#proposta-valor"
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors"
        >
          <span>Role para explorar</span>
          <ArrowDown className="w-3.5 h-3.5 text-blue-600 group-hover:translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
