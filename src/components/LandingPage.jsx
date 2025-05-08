import HeroSection from './landing/HeroSection';
import ProblemSection from './landing/ProblemSection';
import GuideAudienceSection from './landing/GuideAudienceSection';

export default function LandingPage() {
  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      <HeroSection />
      <ProblemSection />
      <GuideAudienceSection />
    </main>
  );
}