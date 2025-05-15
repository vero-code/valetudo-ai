import { principlesData } from "../data/principlesData";

const PrinciplesGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
    {principlesData.map(([title, desc], i) => (
      <div key={i}>
        <h3 className="subheading mb-2 leading-tight">{title}</h3>
        <p className="body-text leading-relaxed">{desc}</p>
      </div>
    ))}
  </div>
);

export default PrinciplesGrid;