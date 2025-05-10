import React from "react";
import { benefitsData } from "../data/benefitsData";

const BenefitsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {benefitsData.map(({ title, desc, list }, i) => (
      <div key={i}>
        <h3 className="subheading text-white mb-3">{title}</h3>
        {list ? (
          <ul className="list-disc list-inside body-text text-white opacity-90">
            {list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="body-text text-white opacity-90">{desc}</p>
        )}
      </div>
    ))}
  </div>
);

export default BenefitsGrid;