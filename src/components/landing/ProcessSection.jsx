import React from "react";

const ProcessSection = () => (
  <section className="bg-white">
      <div className="max-w-6xl mx-auto py-20 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="/howitworks-mockup.png"
            alt="How Valetudo Works"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 pl-[63px] pr-[48px]">
          <h1 className="text-[45px] font-[Kanit] mb-10">
            How Valetudo Works: Simple, Step-by-Step
          </h1>
          <ol className="space-y-6 mb-6">
            {[
              ["Ask", "Type your health question into the chat box."],
              ["Analyze", "Valetudo uses advanced AI to understand your query instantly."],
              ["Respond", "Receive evidence-based answers along with source citations."],
              ["Explore", "Follow up or browse related topics easily within the chat."]
            ].map(([step, desc], i) => (
              <li 
                key={i}
                className="flex items-start gap-3"
                style={{ paddingLeft: `${i * 15}px` }}
              >
                <div className="w-[14px] h-[68px] bg-[#dfece9] border border-[#c8d7d2] rounded-full mt-1" />
                <div>
                  <span className="text-[22.5px] font-[300] font-[Kanit]">{`Step ${i + 1}: ${step}`}</span>
                  <p className="text-[18px] font-['Martel_Sans']">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-[18px] font-['Martel_Sans']">
            Average response time is less than 3 seconds for quick support.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-6xl mx-auto" style={{ padding: '50px 63px' }}>
          <h2 className="text-[45px] font-[Kanit] text-[#272D45] mb-10">
            Trust and Transparency: Our Commitment to You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            {[
              ["Data Privacy", "HIPAA compliant to keep your health data secure and private."],
              ["Expert Development", "Built by medical experts and AI researchers for accuracy and reliability."],
              ["Regular Updates", "Our knowledge base refreshes weekly with the latest medical research."],
              ["Ad-Free Experience", "No advertising or sponsored content ensures unbiased information."]
            ].map(([title, desc], i) => (
              <div key={i}>
                <h3 className="text-[22.5px] font-[300] font-[Kanit] mb-2 leading-tight">{title}</h3>
                <p className="text-[18px] font-[300] font-['Martel_Sans'] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
);

export default ProcessSection;