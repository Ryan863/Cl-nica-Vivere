import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ValueBanner } from "@/components/ValueBanner";
import { ServicesSection } from "@/components/ServicesSection";
import { VaccinationSpotlight } from "@/components/VaccinationSpotlight";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationSection } from "@/components/LocationSection";
import { InstagramSection } from "@/components/InstagramSection";
import { CtaSection } from "@/components/CtaSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Editorial Navigation */}
      <Navbar />

      {/* Hero Section with Aurora & Parallax Image */}
      <HeroSection />

      {/* Editorial Value Statement & 4 Pillars */}
      <ValueBanner />

      {/* Specialties & Therapies */}
      <ServicesSection />

      {/* Dedicated Pediatric & Humanized Vaccination Feature */}
      <VaccinationSpotlight />

      {/* Real Patient Social Proof */}
      <TestimonialsSection />

      {/* Structure, Accessibility & Location */}
      <LocationSection />

      {/* Official Instagram Integration */}
      <InstagramSection />

      {/* Final Closing & Conversion with WhatsApp Triage */}
      <CtaSection />

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </main>
  );
}
