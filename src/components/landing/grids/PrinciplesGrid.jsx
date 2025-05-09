import React from "react";
import { principlesData } from "../data/principlesData";

const PrinciplesGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
    {principlesData.map(([title, desc], i) => (
      <div key={i}>
        <h3 className="text-[22.5px] font-[300] font-[Kanit] text-[#272D45] mb-2 leading-tight">{title}</h3>
        <p className="text-[18px] font-[300] font-['Martel_Sans'] text-[#272D45] leading-relaxed">{desc}</p>
      </div>
    ))}
  </div>
);

export default PrinciplesGrid;