"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Brain,
  Activity,
  GraduationCap,
  Apple,
  Syringe,
  ArrowRight,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  icon: React.ElementType;
  whatsappMessage: string;
  isFeatured?: boolean;
}

export function ServicesSection() {
  const services: ServiceItem[] = [
    {
      id: "vacinacao",
      number: "01",
      title: "Vacinação & Imunização Humanizada",
      category: "Saúde Livre / Prevenção",
      description:
        "Atendimento com carinho e técnicas especiais de alívio da dor. Proteção completa do calendário vacinal de bebês, crianças, adultos e idosos.",
      highlights: [
        "Aplicação sem trauma e com carinho",
        "Ambiente lúdico e seguro para os pequenos",
        "Vacinas particulares e reforço imunológico",
      ],
      icon: Syringe,
      whatsappMessage: "Ol%C3%A1!%20Gostaria%20de%20consultar%20vacinas%20dispon%C3%ADveis%20na%20Cl%C3%ADnica%20Vivere.",
      isFeatured: true, // Vibrant Royal Blue Card inspired by Image 1
    },
    {
      id: "medicina",
      number: "02",
      title: "Medicina & Consultas Especializadas",
      category: "Acompanhamento Clínico",
      description:
        "Diagnóstico preventivo, escuta atenta e planos terapêuticos individualizados focados na saúde integral e na longevidade.",
      highlights: [
        "Avaliação clínica completa",
        "Acompanhamento preventivo continuado",
        "Encaminhamento ágil e integrado",
      ],
      icon: Stethoscope,
      whatsappMessage: "Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20m%C3%A9dica%20na%20Cl%C3%ADnica%20Vivere.",
    },
    {
      id: "psicologia",
      number: "03",
      title: "Psicologia Clínica & Apoio Emocional",
      category: "Saúde Mental & Bem-estar",
      description:
        "Espaço confidencial de acolhimento para lidar com ansiedade, fases de transição, depressão e fortalecimento emocional.",
      highlights: [
        "Atendimento infantil, adolescente e adulto",
        "Abordagens terapêuticas baseadas em evidências",
        "Suporte em momentos desafiadores",
      ],
      icon: Brain,
      whatsappMessage: "Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20atendimento%20psicol%C3%B3gico%20na%20Cl%C3%ADnica%20Vivere.",
    },
    {
      id: "fisioterapia",
      number: "04",
      title: "Fisioterapia & Reabilitação",
      category: "Mobilidade & Qualidade de Vida",
      description:
        "Tratamento de dores crônicas, reabilitação ortopédica, fisioterapia motora e recuperação funcional para todas as idades.",
      highlights: [
        "Reabilitação muscular e articular",
        "Tratamento individualizado de dores",
        "Recuperação pós-cirúrgica e postural",
      ],
      icon: Activity,
      whatsappMessage: "Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20sess%C3%B5es%20de%20fisioterapia.",
    },
    {
      id: "psicopedagogia",
      number: "05",
      title: "Psicopedagogia Clínica",
      category: "Desenvolvimento Infantil",
      description:
        "Avaliação e intervenção especializada nas dificuldades de aprendizagem, foco, alfabetização e desenvolvimento cognitivo da criança.",
      highlights: [
        "Avaliação diagnóstica do aprendizado",
        "Estímulo lúdico e cognitivo",
        "Orientação para pais e escolas",
      ],
      icon: GraduationCap,
      whatsappMessage: "Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20psicopedag%C3%B3gica.",
    },
    {
      id: "nutricao",
      number: "06",
      title: "Nutrição Clínica & Funcional",
      category: "Alimentação & Saúde",
      description:
        "Planos alimentares adaptados à sua rotina real: introdução alimentar infantil, saúde da mulher, emagrecimento saudável e controle de doenças.",
      highlights: [
        "Cardápios individualizados e sustentáveis",
        "Acompanhamento na gestação e infância",
        "Reeducação alimentar sem dietas restritivas",
      ],
      icon: Apple,
      whatsappMessage: "Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20nutricional%20na%20Cl%C3%ADnica%20Vivere.",
    },
  ];

  return (
    <section id="especialidades" className="py-24 sm:py-32 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              Atendimento Multidisciplinar
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Especialidades Médicas & Terapêuticas
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Cuidado integrado sob um mesmo teto para acompanhar você e quem você ama em cada etapa do caminho.
            </p>
          </div>

          <div className="hidden md:block">
            <a
              href="https://wa.me/554998250158?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20todas%20as%20especialidades%20da%20Cl%C3%ADnica%20Vivere."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group"
            >
              <span>Consultar grade completa no WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Services Grid (Inspired directly by Image 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;

            if (service.isFeatured) {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="blue-hero-card p-8 flex flex-col justify-between shadow-2xl shadow-blue-500/25 md:col-span-1 lg:col-span-1 border border-blue-400/30"
                >
                  {/* Decorative glowing gradient orbs */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/15 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-36 h-36 bg-sky-300/20 rounded-full blur-xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-3xl font-black text-white/40 tracking-wider">
                        {service.number}
                      </span>
                      <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md text-white border border-white/30">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-3">
                      {service.category}
                    </span>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-blue-100 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-8">
                      {service.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-white/90">
                          <CheckCircle className="w-3.5 h-3.5 text-sky-200 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/20">
                    <a
                      href={`https://wa.me/554998250158?text=${service.whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white text-blue-700 font-bold text-xs uppercase tracking-wider hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20"
                    >
                      <MessageCircle className="w-4 h-4 fill-blue-700" />
                      <span>Agendar no WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass-card p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-black text-slate-300 group-hover:text-blue-500/40 transition-colors tracking-wider">
                      {service.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 border border-blue-100">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                    {service.category}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {service.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`https://wa.me/554998250158?text=${service.whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Agendar Atendimento</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <span className="text-xs text-slate-400 font-medium">Videira - SC</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-10 text-center md:hidden">
          <a
            href="https://wa.me/554998250158?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20todas%20as%20especialidades%20da%20Cl%C3%ADnica%20Vivere."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-pill inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-wider"
          >
            <span>Ver todas as especialidades no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
