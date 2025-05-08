import HeroSection from './landing/HeroSection';
import ProblemSection from './landing/ProblemSection';
import GuideAudienceSection from './landing/GuideAudienceSection';
import ProcessSection from './landing/ProcessSection';
import GetStartedSection from './landing/GetStartedSection';

export default function LandingPage() {
  return (
    <main className="bg-gray-50">
      <HeroSection />
      <ProblemSection />
      <GuideAudienceSection />
      <ProcessSection />
      <GetStartedSection />

      <div className="h-[135px] bg-[#dfece9] w-full"></div>
    </main>
  );
}