"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Navigation,
  Accessibility,
  CheckCircle,
  Phone,
  ShieldCheck,
  Calendar,
} from "lucide-react";

export function LocationSection() {
  const address = "R. José Domingos Franco, 205 - Bairro Santa Tereza, Videira - SC";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Clínica Vivere Videira R. José Domingos Franco 205 Santa Tereza"
  )}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
    "R. José Domingos Franco 205 Santa Tereza Videira SC"
  )}`;

  const accessibilityFeatures = [
    "Acessibilidade completa com rampas de acesso",
    "Espaço confortável para carrinhos de bebê",
    "Salas amplas, arejadas e climatizadas",
    "Banheiros adaptados para PCD e trocador infantil",
    "Fácil estacionamento e embarque seguro",
    "Ambiente tranquilo, silencioso e acolhedor",
  ];

  return (
    <section id="localizacao" className="py-24 sm:py-32 bg-white relative border-b border-blue-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
            Estrutura & Acesso
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Ambiente pensado para acolher com conforto, acessibilidade e segurança.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Localizada no Bairro Santa Tereza, em Videira, nossa estrutura foi planejada para receber pacientes de todas as idades com total tranquilidade.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Practical Details & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Address Card */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-blue-100/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                  <MapPin className="w-6 h-6" />
                </div>

                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  Endereço Oficial
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Bairro Santa Tereza, Videira
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {address}
                </p>

                {/* Google Maps and Waze Triggers */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Abrir no Google Maps</span>
                  </a>
                  <a
                    href={wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-slate-800 border border-slate-200 text-xs font-bold hover:bg-slate-50 transition-colors"
                  >
                    <span>Abrir no Waze</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-blue-100/80 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                <Clock className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                Horário de Atendimento
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Funcionamento Semanal
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-slate-200/60 text-sm">
                  <span className="font-semibold text-slate-800">Segunda a Sexta-feira</span>
                  <span className="font-bold text-blue-600">08:00 às 18:00</span>
                </div>
                <div className="flex items-center justify-between py-2 text-sm text-slate-500">
                  <span>Sábado e Domingo</span>
                  <span className="font-medium text-slate-400">Fechado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accessibility Highlights & Interactive Map Embed */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Accessibility Features */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50/50 to-white border border-blue-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <Accessibility className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Acessibilidade & Segurança Completa
                  </h3>
                  <p className="text-xs text-slate-500">
                    Projetada para que toda família sinta conforto do início ao fim
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {accessibilityFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Map Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-md h-72 sm:h-80 bg-slate-100">
              <iframe
                title="Localização Clínica Vivere em Videira"
                src="https://maps.google.com/maps?q=R.+Jos%C3%A9+Domingos+Franco,+205+-+Santa+Tereza,+Videira+-+SC&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-105"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-200 text-xs font-semibold text-slate-800 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Videira, Santa Catarina</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
