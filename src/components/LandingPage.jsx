import HeroSection from './landing/sections/HeroSection';
import AboutSection from "./landing/sections/AboutSection";
import ProblemsSection from './landing/sections/ProblemsSection';
import BenefitsSection from './landing/sections/BenefitsSection';
import AudienceSection from './landing/sections/AudienceSection';
import StepsSection from './landing/sections/StepsSection';
import PrinciplesSection from './landing/sections/PrinciplesSection';
import OfferSection from './landing/sections/OfferSection';
import Footer from "./Footer";
import ScrollToTopButton from './landing/ui/ScrollToTopButton';
import AnimatedReveal from './AnimatedReveal';

export default function LandingPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      
      <section>
        <AnimatedReveal>
          <AboutSection />
        </AnimatedReveal>
        <AnimatedReveal delay={0.1}>
          <ProblemsSection />
        </AnimatedReveal>
      </section>
      
      <section className="bg-[#437066]">
        <AnimatedReveal>
          <BenefitsSection />
        </AnimatedReveal>
        <AnimatedReveal>
          <AudienceSection />
        </AnimatedReveal>
      </section>
      
      <section>
        <AnimatedReveal>
          <StepsSection />
        </AnimatedReveal>
        <AnimatedReveal>
          <PrinciplesSection />
        </AnimatedReveal>
      </section>
      
      <section>
        <AnimatedReveal>
          <OfferSection />
        </AnimatedReveal>
      </section>

      <AnimatedReveal>
        <Footer />
      </AnimatedReveal>
      <ScrollToTopButton />
    </main>
  );
}