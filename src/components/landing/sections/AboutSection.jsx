const AboutSection = () => (
  <div className="max-w-6xl mx-auto py-20 flex flex-col md:flex-row items-start">
    <div className="w-full md:w-1/2 pl-[63px] pr-[48px]">
      <h1 className="heading mb-10">
        About: Your Trusted Medical AI Assistant
      </h1>
      <p className="body-text">
        Instant, reliable answers to your health questions. Combats misinformation with
        evidence-based information. Empowering patients, families, and caregivers.
      </p>
    </div>
    <div className="w-full md:w-1/2 flex justify-end">
      <img
        src="/about-section.png"
        alt="Tablet with AI Assistant"
        className="w-full max-w-sm aspect-square object-cover rounded-xl shadow-lg"
      />
    </div>
  </div>
);

export default AboutSection;