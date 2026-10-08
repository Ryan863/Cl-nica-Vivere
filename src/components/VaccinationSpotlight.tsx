"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Baby, ShieldAlert, Heart, Sparkles, CheckCircle2, MessageCircle, CalendarCheck } from "lucide-react";

export function VaccinationSpotlight() {
  const steps = [
    {
      title: "Recepção Lúdica & Calma",
      desc: "Espaço pensado para que a criança brinque e se sinta à vontade antes de qualquer procedimento, sem jaleco intimidador.",
    },
    {
      title: "Métodos de Alívio da Dor",
      desc: "Utilização de recursos lúdicos, vibração/resfriamento local e técnicas humanizadas que minimizam qualquer desconforto.",
    },
    {
      title: "Cuidado Específico com a Adri",
      desc: "Paciência, respeito ao tempo da criança e abraço seguro com a presença constante dos pais durante todo o momento.",
    },
    {
      title: "Certificado de Coragem & Acompanhamento",
      desc: "Reforço positivo para o pequeno e conferência detalhada da caderneta de vacinação para manter o calendário atualizado.",
    },
  ];

  const whatsappVacinas =
    "https://wa.me/554998250158?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20a%20disponibilidade%20de%20vacinas%20infantis%20e%20agendar%20um%20hor%C3%A1rio.";

  return (
    <section id="vacinacao" className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-blue-100/70">
      {/* Background soft ambient orbs */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-6">
              <Baby className="w-3.5 h-3.5 text-blue-600" />
              <span>Saúde Livre Imunizações</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Vacinação Humanizada:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                zero estresse para os pequenos.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Sabemos o quanto o momento da imunização pode gerar ansiedade nos pais e nas crianças. Na Clínica Vivere / Saúde Livre, transformamos a picadinha em um ato de carinho, proteção e acolhimento com a <strong>Adri e equipe</strong>.
            </p>

            {/* Steps / Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {steps.map((step, idx) => (
                <div
                  key={step.title}
                  className="p-5 rounded-2xl bg-[#F8FAFC] border border-blue-100 hover:border-blue-200 transition-all flex flex-col justify-start"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="flex h-6 w-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={whatsappVacinas}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-blue w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Consultar Vacinas no WhatsApp</span>
              </a>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Calendário vacinal particular e de rotina</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Card Container with Image & Stats */}
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 bg-gradient-to-b from-blue-50/70 to-white p-4 shadow-2xl shadow-blue-900/10">
                <div className="relative h-96 sm:h-[460px] rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/hero-desktop.png"
                    alt="Atendimento pediátrico e vacinação acolhedora"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Floating Card Content */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider mb-3">
                      <Sparkles className="w-3 h-3" />
                      <span>Espaço Acolhedor & Acessível</span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight mb-2">
                      &quot;Muito carinho e cuidado no momento da vacinação!&quot;
                    </h3>
                    <p className="text-xs text-slate-200">
                      Depoimento real de pais que confiam no atendimento humanizado da Adri.
                    </p>
                  </div>
                </div>

                {/* Bottom Trust Badge in Card */}
                <div className="mt-4 p-4 rounded-xl bg-white border border-blue-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Vacinas para todas as idades
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Bebês, Crianças, Gestantes, Adultos e Idosos
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                    Disponíveis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
