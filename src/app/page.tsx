import Image from "next/image";
import BenefitsSection from "@/components/BenefitsSection";
import ThreeColumnFeaturesSection from '@/components/ThreeColumnFeaturesSection';
import CallToActionSection from '@/components/CallToActionSection';
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <div className="font-sans">
      <main className="">
        <HeroSection />
        <BenefitsSection />
        <ThreeColumnFeaturesSection />
        <CallToActionSection />
      </main>
    </div>
  );
}
