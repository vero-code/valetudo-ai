import { stepsData } from "../data/stepsData";

const StepsGrid = () => (
  <ol className="space-y-6 mb-6">
    {stepsData.map(([step, desc], i) => (
      <li 
        key={i}
        className="flex items-start gap-3"
        style={{ paddingLeft: `${i * 15}px` }}
      >
        <div className="w-[14px] h-[68px] bg-[#dfece9] border border-[#c8d7d2] rounded-full mt-1" />
        <div>
          <span className="text-[22.5px] font-[300] font-[Kanit] text-[#272D45]">{`Step ${i + 1}: ${step}`}</span>
          <p className="text-[18px] font-['Martel_Sans'] text-[#272D45]">{desc}</p>
        </div>
      </li>
    ))}
  </ol>
);

export default StepsGrid;