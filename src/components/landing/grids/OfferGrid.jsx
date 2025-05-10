import { StepIcon } from "../../ui/StepIcon";
import { offerData } from "../data/offerData";

const OfferGrid = () => (
  <ul className="space-y-6">
    {offerData.map((f, i) => (
      <li key={i} className="flex items-start gap-4">
        <StepIcon number={i + 1} />
        <div className="flex-1">
          <span className="subheading">{f.title}</span>
          <p className="body-text">{f.desc}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default OfferGrid;