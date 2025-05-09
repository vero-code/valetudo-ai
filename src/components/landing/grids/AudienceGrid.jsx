import React from "react";
import { BsSquareFill } from "react-icons/bs";
import { audienceData } from "../data/audienceData";

const AudienceGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {audienceData.map(({ title, text }, i) => (
      <div className="flex items-start gap-4" key={i}>
        <BsSquareFill className="w-10 h-10 text-[#dfece9] stroke-[#c8d7d2] stroke-1" />
        <div>
          <h3 className="text-[18px] font-[300] font-[Kanit] text-[#2C3249] mb-1">{title}</h3>
          <p className="text-[16px] font-[400] font-['Martel_Sans'] text-[#2C3249]">{text}</p>
        </div>
      </div>
    ))}
  </div>
);

export default AudienceGrid;