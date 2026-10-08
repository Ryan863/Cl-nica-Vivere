"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl =
    "https://wa.me/554998250158?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamentos%20na%20Cl%C3%ADnica%20Vivere.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white text-slate-800 p-3 rounded-2xl shadow-xl border border-blue-100 flex items-start gap-2 animate-bounce-subtle text-xs">
          <div className="flex-1">
            <span className="font-bold text-slate-900 block mb-0.5">
              Atendimento Clínica Vivere
            </span>
            <span className="text-slate-600 block">
              Dúvidas ou agendamentos? Fale conosco no WhatsApp!
            </span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Clínica Vivere pelo WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40 transition-transform duration-300 hover:scale-110 active:scale-95 group"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300" />
        </span>
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
}
