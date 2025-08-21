import Image from "next/image";
import BenefitsSection from "@/components/BenefitsSection";
import ThreeColumnFeaturesSection from '@/components/ThreeColumnFeaturesSection';
import CallToActionSection from '@/components/CallToActionSection';
import HeroSection from "@/components/HeroSection";
import TestimonialSection from "@/sections/TestimonialSection";


export default function Home() {
  return (
    <div className="font-sans">
      <main className="">
        <HeroSection />
        <BenefitsSection />
        <ThreeColumnFeaturesSection />
        <TestimonialSection />
        <CallToActionSection />
      </main>
    </div>
  );
}
