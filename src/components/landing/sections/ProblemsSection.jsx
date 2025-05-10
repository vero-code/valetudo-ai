const ProblemSection = () => {
  return (
    <div className="bg-[#437066] py-20">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg" style={{ padding: '50px 63px' }}>
        <h2 className="heading mb-10">
          Problem: Navigating the Sea of Medical Misinformation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            title="Prevalence of Online Health Searches"
            text="73% of adults seek health info online, often finding conflicting advice."
          />
          <Card
            title="Impact of Misinformation"
            text="$9 billion lost annually in US due to misleading health info causing costly mistakes."
          />
          <Card
            title="Accuracy Concerns"
            text="WHO reports 40% of online health content is misleading or wrong."
          />
          <Card
            title="Health Consequences"
            text="Delays in treatment, increased anxiety, and poor health choices are common outcomes."
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, text }) => (
  <div className="bg-[#dfece9] rounded-lg p-[18px] border border-[#c8d7d2]">
    <h3 className="subheading mb-6">{title}</h3>
    <p className="body-text leading-snug tracking-normal">{text}</p>
  </div>
);

export default ProblemSection;