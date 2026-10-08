"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X, Phone, Clock, MapPin, Sparkles } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Especialidades", href: "#especialidades" },
    { name: "Vacinação", href: "#vacinacao" },
    { name: "A Clínica", href: "#sobre" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Localização", href: "#localizacao" },
  ];

  const whatsappUrl =
    "https://wa.me/554998250158?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamentos%20na%20Cl%C3%ADnica%20Vivere.";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-blue-100/80 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-blue-200/80 shadow-sm group-hover:scale-105 transition-transform bg-[#083358]">
                <Image
                  src="/images/logo.jpg"
                  alt="Clínica Vivere e Saúde Livre"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 leading-tight">
                  Clínica Vivere
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-blue-600 tracking-wider uppercase">
                  Saúde Livre • Videira
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-full transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Right CTA Pill */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-blue inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Agendar Consulta</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-blue p-2.5 rounded-full"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-blue-600 focus:outline-none"
                aria-label="Abrir menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm sm:hidden animate-fadeIn">
          <div className="fixed top-18 right-0 left-0 bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-xl p-6 rounded-b-3xl">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-slate-800 hover:bg-blue-50 rounded-2xl transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-600 px-4">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Segunda a Sexta: 08:00 às 18:00</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 px-4">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>R. José Domingos Franco, 205 - Videira</span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary-blue w-full py-3.5 flex items-center justify-center gap-2 text-sm mt-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Agendar Atendimento via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
