import React from "react";
import PrinciplesGrid from "../grids/PrinciplesGrid";

const PrinciplesSection = () => (
  <div className="py-20">
    <div className="max-w-6xl mx-auto" style={{ padding: '50px 63px' }}>
      <h2 className="text-[45px] font-[Kanit] text-[#272D45] mb-10">
        Principles: Commitment to You
      </h2>
      <PrinciplesGrid />
    </div>
  </div>
);

export default PrinciplesSection;