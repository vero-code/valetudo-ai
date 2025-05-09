import React from "react";
import BenefitsGrid from '../grids/BenefitsGrid';

const BenefitsSection = () => (
  <div className="max-w-6xl mx-auto" style={{ padding: '50px 63px' }}>
    <h2 className="text-[45px] font-[300] font-[Kanit] text-white mb-12 leading-snug">
      Benefits: Your Intelligent Guide to Reliable Health Information
    </h2>
    <BenefitsGrid />
  </div>
);

export default BenefitsSection;