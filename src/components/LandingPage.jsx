import HeroSection from './landing/HeroSection';
import StepsSection from './landing/StepsSection';
import ExamplesSection from './landing/ExamplesSection';
import CTASection from './landing/CTASection';
import { AboutSection } from './landing/about/AboutSection';

export default function LandingPage() {
  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      <HeroSection />

      <AboutSection />

      <StepsSection />

      <ExamplesSection />

      <section className="bg-blue-600 py-20">
        <div className="max-w-2xl mx-auto px-6 text-center text-white">
          <CTASection />
        </div>
      </section>
    </main>
  );
}