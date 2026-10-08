"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Check, Sparkles, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";

export function CtaSection() {
  const [selectedArea, setSelectedArea] = useState<string>("Vacinação e Imunização");

  const triageOptions = [
    { label: "Vacinação & Imunização", msg: "Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20vacina%C3%A7%C3%A3o%20e%20imuniza%C3%A7%C3%A3o." },
    { label: "Consulta Médica", msg: "Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20m%C3%A9dica%20especializada." },
    { label: "Fisioterapia", msg: "Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20sess%C3%B5es%20de%20fisioterapia." },
    { label: "Psicologia", msg: "Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20atendimento%20psicol%C3%B3gico." },
    { label: "Psicopedagogia", msg: "Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20avalia%C3%A7%C3%A3o%20psicopedag%C3%B3gica." },
    { label: "Nutrição Clínica", msg: "Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20nutricional." },
  ];

  const currentTriage = triageOptions.find((opt) => opt.label === selectedArea) || triageOptions[0];
  const dynamicWhatsappUrl = `https://wa.me/554998250158?text=${currentTriage.msg}`;

  return (
    <section id="contato" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background radial blue gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-500/10 via-sky-400/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#0A2540] to-[#07172C] p-8 sm:p-14 text-white shadow-2xl shadow-blue-900/30 border border-blue-900/50 text-center relative overflow-hidden">
          {/* Subtle luminous orbs inside the card */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sky-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agendamento Direto & Humanizado</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            Pronto para cuidar da sua saúde com todo carinho e excelência?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Escolha o atendimento desejado abaixo e inicie sua conversa diretamente com nossa equipe no WhatsApp da Clínica Vivere:
          </p>

          {/* Interactive Triage Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto mb-10">
            {triageOptions.map((opt) => {
              const isSelected = selectedArea === opt.label;
              return (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setSelectedArea(opt.label)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/40 border border-blue-400"
                      : "bg-white/10 text-slate-300 hover:bg-white/15 border border-white/10"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          {/* Primary CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={dynamicWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-base shadow-xl shadow-blue-600/30 transition-all hover:scale-102 group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
              <span>Falar no WhatsApp sobre {selectedArea}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Resposta Rápida no Horário Comercial</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-sky-400" />
              <span>Acolhimento da Infância à 3ª Idade</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blue-400" />
              <span>+55 (49) 9825-0158</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
