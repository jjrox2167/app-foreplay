import React from "react";
import { Image } from "lucide-react";
import AboutHeroSection from "@/sections/AboutHeroSection";
import AboutTheAppSection from "@/sections/AboutTheAppSection";


export default function AboutPage() {
  return (
   <div className="bg-gray-900 mt-16" >
   <AboutHeroSection />
   <AboutTheAppSection />
  </div>

  );
}
