import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clinicavivere.com.br"),
  title: "Clínica Vivere | Saúde Livre – Clínica Multidisciplinar Integrada em Videira - SC",
  description:
    "Cuidado integral e humanizado para todas as fases da vida. Medicina, Psicologia, Fisioterapia, Psicopedagogia, Nutrição e Vacinação humanizada no Bairro Santa Tereza, Videira - SC.",
  keywords: [
    "Clínica Vivere",
    "Saúde Livre",
    "Clínica Multidisciplinar Videira",
    "Vacinação Humanizada Videira",
    "Pediatria Videira",
    "Fisioterapia Videira",
    "Psicologia Videira",
    "Psicopedagogia Videira",
    "Nutrição Videira",
    "Santa Tereza Videira SC",
    "Adri vacinação",
  ],
  authors: [{ name: "Clínica Vivere & Saúde Livre" }],
  openGraph: {
    title: "Clínica Vivere | Saúde Livre – Cuidado Integral e Humanizado",
    description:
      "Atendimento especializado com muito cuidado, carinho e atenção desde a infância até a terceira idade em Videira - SC.",
    url: "https://clinicavivere.com.br",
    siteName: "Clínica Vivere | Saúde Livre",
    images: [
      {
        url: "/images/hero-desktop.png",
        width: 1024,
        height: 572,
        alt: "Clínica Vivere - Cuidado humanizado para todas as fases da vida",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Clínica Vivere | Saúde Livre",
    "image": "https://clinicavivere.com.br/images/logo.jpg",
    "telephone": "+554998250158",
    "url": "https://clinicavivere.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. José Domingos Franco, 205",
      "addressLocality": "Videira",
      "addressRegion": "SC",
      "addressCountry": "BR",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00",
      },
    ],
    "medicalSpecialty": [
      "Pediatrics",
      "Physiotherapy",
      "Psychology",
      "Dietetics",
      "PrimaryCare",
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "58",
    },
  };

  return (
    <html lang="pt-BR" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-[#0052D4] selection:text-white">
        {children}
      </body>
    </html>
  );
}
