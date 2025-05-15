import AudienceGrid from "../grids/AudienceGrid";

const AudienceSection = () => (
  <div
    className="relative mt-[-5px]"
    style={{
      backgroundImage: "url('/audience-section.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#f8f8f2",
    }}
  >
    <div className="absolute inset-0 bg-white opacity-80 pointer-events-none"></div>
    <div className="relative max-w-6xl mx-auto" style={{ padding: '50px 63px' }}>
      <h2 className="heading mb-10">
        Audience: Who is Valetudo For?
      </h2>
      <AudienceGrid />
    </div>
  </div>
);

export default AudienceSection;