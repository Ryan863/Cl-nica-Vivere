"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Heart, Sparkles, ShieldCheck } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

export function InstagramSection() {
  const profiles = [
    {
      handle: "@clinicavivere.videira",
      name: "Clínica Vivere",
      desc: "Medicina, psicologia, fisioterapia, psicopedagogia e bem-estar integral para você e sua família.",
      url: "https://instagram.com/clinicavivere.videira",
      badge: "Clínica Multidisciplinar",
    },
    {
      handle: "@saudelivre.videira",
      name: "Saúde Livre Imunizações",
      desc: "Vacinação humanizada, acolhimento infantil, orientações de calendário vacinal e saúde preventiva.",
      url: "https://instagram.com/saudelivre.videira",
      badge: "Núcleo de Imunização",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <InstagramIcon className="w-3.5 h-3.5 text-blue-600" />
              <span>Acompanhe Nossas Redes</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Conecte-se com a gente no Instagram
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Dicas de saúde preventiva, novidades da clínica e o dia a dia do nosso acolhimento.
            </p>
          </div>

          {/* 2 Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profiles.map((profile, idx) => (
              <motion.div
                key={profile.handle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass-card p-6 sm:p-8 flex flex-col justify-between group hover:border-blue-400"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/50">
                      {profile.badge}
                    </span>

                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {profile.name}
                  </h3>

                  <div className="text-sm font-semibold text-blue-600 mb-3">
                    {profile.handle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {profile.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Seguir {profile.handle}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
