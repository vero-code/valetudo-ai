import React from "react";
import StepsGrid from "../grids/StepsGrid";

const StepsSection = () => (
  <div className="max-w-6xl mx-auto py-20 flex flex-col md:flex-row items-start">
    <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
      <img
        src="/howitworks-mockup.png"
        alt="How Valetudo Works"
        className="rounded-xl shadow-lg"
      />
    </div>
    <div className="w-full md:w-1/2 pl-[63px] pr-[48px]">
      <h1 className="text-[45px] font-[Kanit] text-[#272D45] mb-10">
        How Valetudo Works: Simple, Step-by-Step
      </h1>
      <StepsGrid />
      <p className="text-[18px] font-['Martel_Sans'] text-[#272D45]">
        Average response time is less than 3 seconds for quick support.
      </p>
    </div>
  </div>
);

export default StepsSection;