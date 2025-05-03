import HeroSection from './landing/HeroSection';
import ProblemSection from './landing/ProblemSection';
import HelpSection from './landing/HelpSection';
import AudienceSection from './landing/AudienceSection';
import HowItWorksSection from './landing/HowItWorksSection';
import ExamplesSection from './landing/ExamplesSection';
import DisclaimerSection from './landing/DisclaimerSection';

export default function LandingPage() {
  return (
    <div className="text-gray-800 bg-white">
      <HeroSection />
      <ProblemSection />
      <HelpSection />
      <AudienceSection />
      <HowItWorksSection />
      <ExamplesSection />
      <DisclaimerSection />
    </div>
  );
}