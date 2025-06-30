"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MentoriaHero from "@/components/mentoria/MentoriaHero";
import ProblemaSection from "@/components/mentoria/ProblemaSection";
import SolucionSection from "@/components/mentoria/SolucionSection";
import ServiciosSection from "@/components/mentoria/ServiciosSection";
import RoadmapSection from "@/components/mentoria/RoadmapSection";
import PricingSection from "@/components/mentoria/PricingSection";
import FAQSection from "@/components/mentoria/FAQSection";
import CTAFinalSection from "@/components/mentoria/CTAFinalSection";

export default function MentoriasPage() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Trigger content animations after page load
    setContentLoaded(true);
    
    // Update page title and meta description for SEO
    document.title = "Mentoría Personalizada | Roberto Franco - Impulsa tu Carrera como Desarrollador";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Mentoría individual y grupal para dominar Software + IA y conseguir tu primer gran rol. Coaching personalizado con Roberto Franco.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f8f6] text-black">
      <div className="p-4 sm:p-6 md:p-8">
        <Navbar contentLoaded={contentLoaded} />
        <MentoriaHero contentLoaded={contentLoaded} />
      </div>
      
      <ProblemaSection contentLoaded={contentLoaded} />
      <SolucionSection contentLoaded={contentLoaded} />
      <ServiciosSection contentLoaded={contentLoaded} />
      <RoadmapSection contentLoaded={contentLoaded} />
      <PricingSection contentLoaded={contentLoaded} />
      <FAQSection contentLoaded={contentLoaded} />
      <CTAFinalSection contentLoaded={contentLoaded} />
      
      <div className="p-4 sm:p-6 md:p-8">
        <Footer contentLoaded={contentLoaded} />
      </div>
    </div>
  );
} 