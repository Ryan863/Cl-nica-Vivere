"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ShieldCheck, HeartHandshake, Baby, Sparkles, MapPin, CheckCircle2 } from "lucide-react";

export interface ParallaxComponentProps {
  className?: string;
  onCtaClick?: () => void;
}

export const ParallaxComponent: React.FC<ParallaxComponentProps> = ({ className, onCtaClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const yImage = useTransform(smoothProgress, [0, 1], [0, 45]);
  const scaleImage = useTransform(smoothProgress, [0, 1], [1, 1.05]);
  const yBadge1 = useTransform(smoothProgress, [0, 1], [0, -35]);
  const yBadge2 = useTransform(smoothProgress, [0, 1], [0, -50]);
  const yBadge3 = useTransform(smoothProgress, [0, 1], [0, 25]);

  // Subtle mouse interactive tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 16);
    mouseY.set(y * 16);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-5xl mx-auto rounded-3xl overflow-visible select-none ${className || ""}`}
    >
      {/* Background Soft Glow Orbs inspired by Image 1 */}
      <div className="absolute -top-12 -right-12 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-sky-300/25 rounded-full blur-3xl pointer-events-none" />

      {/* Main Image Container with Soft Editorial Mask Integration */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="relative rounded-3xl overflow-hidden border border-blue-100/80 bg-gradient-to-b from-white/90 to-blue-50/40 backdrop-blur-md shadow-2xl shadow-blue-500/10 p-2 md:p-3"
      >
        <div className="relative w-full h-[380px] sm:h-[460px] md:h-[540px] lg:h-[590px] rounded-2xl overflow-hidden bg-slate-100">
          {/* Desktop Image */}
          <motion.div
            style={{ y: yImage, scale: scaleImage }}
            className="hidden sm:block absolute inset-0 w-full h-full"
          >
            <Image
              src="/images/hero-desktop.png"
              alt="Atendimento acolhedor na Clínica Vivere e Saúde Livre em Videira"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-right-top md:object-center transition-all duration-700"
            />
            {/* Subtle Gradient Masks to Blend Softly without hard rectangular borders */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent w-2/5 pointer-events-none hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent h-1/4 bottom-0 pointer-events-none" />
          </motion.div>

          {/* Mobile Image (Optimized Vertical Crop - Imagem 4) */}
          <motion.div
            style={{ y: yImage }}
            className="block sm:hidden absolute inset-0 w-full h-full"
          >
            <Image
              src="/images/hero-mobile.png"
              alt="Atendimento humanizado na Clínica Vivere"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating Pill Badges inspired by Image 1 (Design Reference) */}
          {/* Badge 1: Top Left - Humanized Care */}
          <motion.div
            style={{ y: yBadge1 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute top-4 left-4 md:top-8 md:left-8 z-20"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/90 shadow-lg shadow-blue-900/5">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                  Cuidado Humanizado
                </span>
                <span className="text-[10px] text-slate-500 hidden sm:inline">
                  Bebês, Crianças & Terceira Idade
                </span>
              </div>
            </div>
          </motion.div>

          {/* Badge 2: Top Right - Experience / Adri & Multidisciplinar */}
          <motion.div
            style={{ y: yBadge2 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-20"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/90 shadow-lg shadow-blue-900/5">
              <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-900">
                  Adri & Equipe Multidisciplinar
                </span>
                <span className="text-[10px] text-blue-600 font-medium">
                  Atendimento com muito carinho
                </span>
              </div>
            </div>
          </motion.div>

          {/* Badge 3: Bottom Left - Floating Stat Pill (Like 100% digital diagnostics in Image 1) */}
          <motion.div
            style={{ y: yBadge3 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20"
          >
            <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-lg border border-blue-200 shadow-xl shadow-blue-900/10">
              <div className="flex items-center gap-2 sm:gap-4 divide-x divide-slate-200">
                <div className="px-1 text-center sm:text-left">
                  <div className="text-base sm:text-lg font-extrabold text-blue-600 leading-tight">
                    100%
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-tight">
                    Acessibilidade
                  </div>
                </div>
                <div className="pl-2 sm:pl-4 text-center sm:text-left">
                  <div className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                    Segura & Calma
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-tight">
                    Imunização Sem Trauma
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Badge 4: Bottom Right - Location Pin Videira */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 hidden xs:block"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 text-white backdrop-blur-md shadow-lg border border-white/20 text-xs">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-medium text-[11px]">Bairro Santa Tereza, Videira - SC</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
