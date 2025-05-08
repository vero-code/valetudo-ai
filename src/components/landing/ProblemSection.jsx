import React from "react";

const ProblemSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto py-20 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/2 pl-[63px] pr-[48px]">
          <h1 className="text-[45px] font-[Kanit] text-[#272D45] mb-10">
            Valetudo: Your Trusted Medical AI Assistant
          </h1>
          <p className="text-[18px] font-['Martel_Sans'] text-[#2C3249]">
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

      <div className="bg-[#437066] py-20">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg" style={{ padding: '50px 63px' }}>
          <h2 className="text-[45px] font-[Kanit] text-[#272D45] mb-10">
            The Problem: Navigating the Sea of Medical Misinformation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card
              title="Prevalence of Online Health Searches"
              text="73% of adults seek health info online, often finding conflicting advice."
            />
            <Card
              title="Impact of Misinformation"
              text="$9 billion lost annually in US due to misleading health info causing costly mistakes."
            />
            <Card
              title="Accuracy Concerns"
              text="WHO reports 40% of online health content is misleading or wrong."
            />
            <Card
              title="Health Consequences"
              text="Delays in treatment, increased anxiety, and poor health choices are common outcomes."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, text }) => (
  <div className="bg-[#dfece9] rounded-lg p-[18px] border border-[#c8d7d2]">
    <h3 className="text-[22.5px] font-[300] font-[Kanit] text-[#2C3249] mb-6">{title}</h3>
    <p className="text-[18px] font-[300] font-['Martel_Sans'] text-[#2C3249] leading-snug tracking-normal">{text}</p>
  </div>
);

export default ProblemSection;