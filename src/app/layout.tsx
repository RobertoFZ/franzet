import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Roberto Franco · Software-Engineering Mentor & Growth Partner",
  description: "Mentoría 1 a 1 que convierte a desarrolladores junior en ingenieros seguros y listos para el entorno profesional. Reserva una sesión de estrategia gratuita conmigo hoy.",
  robots: "index, follow",
  alternates: {
    canonical: "https://franzet.com/",
  },
  openGraph: {
    type: "website",
    url: "https://franzet.com/",
    title: "Roberto Franco · Software-Engineering Mentor & Growth Partner",
    description: "Orientación práctica, hojas de ruta personalizadas y responsabilidad para ayudarte a enviar código listo para producción más rápido.",
    siteName: "Mentoría Roberto Franco",
    images: [
      {
        url: "https://franzet.com/og_cover.png",
        alt: "Roberto Franco - Mentor de Ingeniería de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roberto Franco · Software-Engineering Mentor & Growth Partner",
    description: "Mejora tu carrera de desarrollador con mentoría 1 a 1. Reserva una sesión de estrategia gratuita.",
    site: "@RobeertoFZ",
    creator: "@RobeertoFZ",
    images: ["https://franzet.com/og_twitter_cover.png"],
  },
  other: {
    "X-UA-Compatible": "IE=edge",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="alternate icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Person", "ProfessionalService"],
              "name": "Roberto Franco",
              "alternateName": ["Roberto Franco Franzet", "RobertoFZ"],
              "jobTitle": "Mentor de Ingeniería de Software y Tech Lead",
              "description": "Ingeniero de software senior, tech lead y mentor especializado en sistemas de revenue management, integración de IA y crecimiento de carrera de desarrolladores. Ayudando a desarrolladores junior a convertirse en ingenieros seguros y listos para el entorno profesional.",
              "url": "https://franzet.com/",
              "image": {
                "@type": "ImageObject",
                "url": "https://franzet.com/og_cover.png",
                "width": 1200,
                "height": 630
              },
              "logo": "https://franzet.com/og_cover.png",
              "sameAs": [
                "https://www.linkedin.com/in/robertofz/",
                "https://github.com/RobertoFZ",
                "https://medium.com/@roberzet",
                "https://twitter.com/RobeertoFZ"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Mentoría Roberto Franco",
                "url": "https://franzet.com/"
              },
              "knowsAbout": [
                "Ingeniería de Software",
                "Liderazgo Técnico",
                "Gestión de Ingresos",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Desarrollo de IA",
                "Mentoría",
                "Desarrollo de Carrera"
              ],
              "offers": {
                "@type": "Service",
                "name": "Mentoría de Ingeniería de Software",
                "description": "Mentoría 1 a 1 para desarrolladores junior e ingenieros que buscan avanzar en sus carreras"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "roberto@franzet.com",
                "contactType": "professional"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://franzet.com/"
              }
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
