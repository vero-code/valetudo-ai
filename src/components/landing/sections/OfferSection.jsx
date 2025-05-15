import OfferGrid from "../grids/OfferGrid";

const OfferSection = () => (
  <div className="max-w-6xl mx-auto py-10 flex flex-col md:flex-row items-start">
    <div className="w-full md:w-1/2 pl-[63px] pr-[48px]">
      <h2 className="heading mb-10">
        Try Valetudo Today – Your Health, Empowered
      </h2>
      <OfferGrid />
    </div>
    <div className="w-full md:w-1/2 h-full flex">
      <img
        src="/offer-section.png"
        alt="Happy woman using Valetudo"
        className="w-full h-full object-cover rounded-xl shadow-lg"
      />
    </div>
  </div>
);

export default OfferSection;