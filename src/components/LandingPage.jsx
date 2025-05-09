import HeroSection from './landing/sections/HeroSection';
import AboutSection from "./landing/sections/AboutSection";
import ProblemsSection from './landing/sections/ProblemsSection';
import BenefitsSection from './landing/sections/BenefitsSection';
import AudienceSection from './landing/sections/AudienceSection';
import StepsSection from './landing/sections/StepsSection';
import PrinciplesSection from './landing/sections/PrinciplesSection';
import OfferSection from './landing/sections/OfferSection';
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <main className="bg-gray-50">
      <HeroSection />
      
      <section className="bg-white">
        <AboutSection />
        <ProblemsSection />
      </section>
      
      <section className="bg-[#437066] min-h-screen py-20">
        <BenefitsSection />
        <AudienceSection />
      </section>
      
      <section className="bg-white">
        <StepsSection />
        <PrinciplesSection />
      </section>
      
      <section className=" bg-white">
        <OfferSection />
      </section>

      <Footer />
    </main>
  );
}