import React from "react";

const AboutSection = () => (
  <div className="max-w-6xl mx-auto py-20 flex flex-col md:flex-row items-start">
    <div className="w-full md:w-1/2 pl-[63px] pr-[48px]">
      <h1 className="text-[45px] font-[Kanit] text-[#272D45] mb-10">
        About: Your Trusted Medical AI Assistant
      </h1>
      <p className="text-[18px] font-['Martel_Sans'] text-[#272D45]">
        Instant, reliable answers to your health questions. Combats misinformation with
        evidence-based information. Empowering patients, families, and caregivers.
      </p>
    </div>
    <div className="w-full md:w-1/2 flex justify-end">
      <img
        src="/hero-tablet.png"
        alt="Tablet with AI Assistant"
        className="w-full max-w-sm aspect-square object-cover rounded-xl shadow-lg"
      />
    </div>
  </div>
);

export default AboutSection;