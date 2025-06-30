"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

// This would be better as a separate metadata export, but since we're using "use client"
// we'll handle SEO through other means or convert to server component if needed

export default function ProjectsPage() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Trigger content animations after page load
    setContentLoaded(true);
    
    // Update page title and meta description for SEO
    document.title = "Productos | Roberto Franco - Mentor de Ingeniería de Software";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explora los productos reales de Roberto Franco incluyendo la aplicación de gestión financiera Zinual y otras aplicaciones diseñadas para resolver problemas del mundo real.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f8f6] text-black p-4 sm:p-6 md:p-8">
      <Navbar contentLoaded={contentLoaded} />
      {/* Page Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div 
          className={`transition-opacity duration-700 ${contentLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Mis <span className="text-[#ff4d6d]">Productos</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Aplicaciones y productos reales que he construido para resolver problemas actuales y crear valor significativo para los usuarios.
          </p>
        </div>
      </div>

      <ProjectsSection contentLoaded={contentLoaded} />
      <Footer contentLoaded={contentLoaded} />
    </div>
  );
} 