import React from "react";
import { StepIcon } from "../icons/StepIcon";
import { offerData } from "../data/offerData";

const OfferGrid = () => (
  <ul className="space-y-6">
    {offerData.map((f, i) => (
      <li key={i} className="flex items-start gap-4">
        <StepIcon number={i + 1} />
        <div className="flex-1">
          <span className="text-[22.5px] font-[300] font-[Kanit] text-[#272D45]">{f.title}</span>
          <p className="text-[18px] font-['Martel_Sans'] text-[#272D45]">{f.desc}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default OfferGrid;