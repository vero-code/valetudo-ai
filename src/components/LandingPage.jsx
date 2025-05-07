import HeroSection from './landing/HeroSection';
import ProblemSection from './landing/ProblemSection';

export default function LandingPage() {
  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      <HeroSection />
      <ProblemSection />
    </main>
  );
}