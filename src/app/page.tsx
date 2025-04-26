"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Trigger content animations after page load
    setContentLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f8f6] text-black p-4 sm:p-6 md:p-8">
      {/* <Navbar contentLoaded={contentLoaded} /> */}
      <Hero contentLoaded={contentLoaded} />
    </div>
  );
}
