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
          <span className="subheading">{`Step ${i + 1}: ${step}`}</span>
          <p className="body-text">{desc}</p>
        </div>
      </li>
    ))}
  </ol>
);

export default StepsGrid;