import HeroSection from './landing/HeroSection';
import ProblemSection from './landing/ProblemSection';
import GuideAudienceSection from './landing/GuideAudienceSection';
import ProcessSection from './landing/ProcessSection';

export default function LandingPage() {
  return (
    <main className="bg-gray-50">
      <HeroSection />
      <ProblemSection />
      <GuideAudienceSection />
      <ProcessSection />
    </main>
  );
}