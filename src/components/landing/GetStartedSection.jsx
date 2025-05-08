import React from "react";

const features = [
  {
    title: "Free Trial",
    desc: "No credit card required to start your journey.",
  },
  {
    title: "Instant Access",
    desc: "Get reliable medical info anytime, anywhere.",
  },
  {
    title: "Trusted by Thousands",
    desc: "Join 10,000+ users who rely on Valetudo for health support.",
  },
  {
    title: "Special Offer",
    desc: "Enjoy 20% off your first month with limited-time pricing.",
  },
];

const StepIcon = ({ number }) => (
  <div className="w-10 h-10 bg-[#dfece9] border border-[#c8d7d2] rounded-[8px] flex items-center justify-center">
    <span className="text-[#2C3249] font-[Kanit] text-[18px] leading-none">
      {number}
    </span>
  </div>
);

const GetStartedSection = () => (
  <section className=" bg-white">
    <div className="max-w-6xl mx-auto py-10 flex flex-col md:flex-row items-start">
      <div className="w-full md:w-1/2 pl-[63px] pr-[48px]">
        <h2 className="text-[45px] font-[Kanit] mb-10">
          Try Valetudo Today – Your Health, Empowered
        </h2>
        <ul className="space-y-6">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-4">
              <StepIcon number={i + 1} />
              <div className="flex-1">
                <span className="text-[22.5px] font-[300] font-[Kanit]">{f.title}</span>
                <p className="text-[18px] font-['Martel_Sans']">{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/2 h-full flex">
        <img
          src="/happy-man.png"
          alt="Happy man using Valetudo"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default GetStartedSection;