import HeroSection from './landing/HeroSection';
import HowItWorksSection from './landing/HowItWorksSection';
import ExamplesSection from './landing/ExamplesSection';
import DisclaimerSection from './landing/DisclaimerSection';
import CTASection from './landing/CTASection';
import { TextParallaxContentSection } from './TextParallaxContent';

export default function LandingPage() {
  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      <HeroSection />

      <TextParallaxContentSection />

      <section className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <HowItWorksSection />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ExamplesSection />
        </div>
      </section>

      <section className="bg-red-50 py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <DisclaimerSection />
        </div>
      </section>

      <section className="bg-blue-600 py-20">
        <div className="max-w-2xl mx-auto px-6 text-center text-white">
          <CTASection />
        </div>
      </section>
    </main>
  );
}