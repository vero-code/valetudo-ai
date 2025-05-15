import { BsSquareFill } from "react-icons/bs";
import { audienceData } from "../data/audienceData";

const AudienceGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {audienceData.map(({ title, text }, i) => (
      <div className="flex items-start gap-4" key={i}>
        <BsSquareFill className="w-10 h-10 text-[#dfece9] stroke-[#c8d7d2] stroke-1" />
        <div>
          <h3 className="subheading mb-1 inline-block bg-white/60 backdrop-blur-sm rounded-md px-2 py-1">{title}</h3>
          <p className="body-text inline-block bg-white/50 rounded-md px-2 py-1">{text}</p>
        </div>
      </div>
    ))}
  </div>
);

export default AudienceGrid;