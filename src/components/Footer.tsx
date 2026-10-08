"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, MessageCircle, Heart, ArrowUp } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#06182C] text-slate-300 pt-16 pb-12 border-t border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-blue-400/40 shadow-sm bg-[#083358]">
                <Image
                  src="/images/logo.jpg"
                  alt="Clínica Vivere"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-tight">
                  Clínica Vivere
                </span>
                <span className="text-xs font-semibold text-sky-400 tracking-wider uppercase">
                  Saúde Livre • Videira - SC
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Clínica multidisciplinar integrada. Cuidado especializado, atencioso e humanizado desde a infância até a melhor idade.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/clinicavivere.videira"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram Clínica Vivere"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/saudelivre.videira"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-rose-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram Saúde Livre"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/554998250158"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="WhatsApp Oficial"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#especialidades" className="hover:text-sky-400 transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#vacinacao" className="hover:text-sky-400 transition-colors">
                  Vacinação Infantil
                </a>
              </li>
              <li>
                <a href="#proposta-valor" className="hover:text-sky-400 transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-sky-400 transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-sky-400 transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Specialties Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Áreas de Cuidado
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Medicina & Consultas Especializadas</li>
              <li>• Vacinação & Imunização Humanizada</li>
              <li>• Psicologia Clínica & Apoio Emocional</li>
              <li>• Fisioterapia & Reabilitação</li>
              <li>• Psicopedagogia (Desenvolvimento Infantil)</li>
              <li>• Nutrição Clínica & Funcional</li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Atendimento & Visita
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>R. José Domingos Franco, 205 - Bairro Santa Tereza, Videira - SC</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+554998250158" className="hover:text-white transition-colors">
                  +55 (49) 9825-0158
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Segunda a Sexta-feira: 08:00 às 18:00 (Fechado fins de semana)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Clínica Vivere | Saúde Livre. Todos os direitos reservados.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
