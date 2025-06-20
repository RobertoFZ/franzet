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
    document.title = "Products | Roberto Franco - Software Engineering Mentor";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Roberto Franco&apos;s real products including Zinual financial management app and other applications designed to solve real-world problems.');
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
            My <span className="text-[#ff4d6d]">Products</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Real applications and products I&apos;ve built to solve actual problems and create meaningful value for users.
          </p>
        </div>
      </div>

      <ProjectsSection contentLoaded={contentLoaded} />
      <Footer contentLoaded={contentLoaded} />
    </div>
  );
} 