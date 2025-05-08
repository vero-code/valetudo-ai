import React from "react";
import { BsSquareFill } from "react-icons/bs";

const GuideAudienceSection = () => (
  <section className="bg-[#437066] min-h-screen py-20">
    <div className="max-w-6xl mx-auto text-white" style={{ padding: '50px 63px' }}>
      <h2 className="text-[45px] font-[300] font-[Kanit] mb-12 leading-snug">
        Valetudo: Your Intelligent Guide to Reliable Health Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-[22.5px] font-[300] font-[Kanit] mb-3">Real–Time Answers</h3>
          <p className="text-[18px] font-['Martel_Sans'] opacity-90">
            Get instant responses to your medical questions powered by advanced AI.
          </p>
        </div>
        <div>
          <h3 className="text-[22.5px] font-[300] font-[Kanit] mb-3">Credible Sources</h3>
          <ul className="list-disc list-inside text-[18px] font-['Martel_Sans'] opacity-90">
            <li>Mayo Clinic</li>
            <li>NIH</li>
            <li>NEJM</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[22.5px] font-[300] font-[Kanit] mb-3">Extensive Training</h3>
          <p className="text-[18px] font-['Martel_Sans'] opacity-90">
            Based on over 200 million peer-reviewed articles and clinical guidelines.
          </p>
        </div>
        <div>
          <h3 className="text-[22.5px] font-[300] font-[Kanit] mb-3">Reduce Anxiety</h3>
          <p className="text-[18px] font-['Martel_Sans'] opacity-90">
            Early tests show a 60% drop in medical-related worry using Valetudo.
          </p>
        </div>
      </div>
    </div>

    <div
      className="relative mt-[-5px]"
      style={{
        backgroundImage: "url('/background-people.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f8f8f2",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-70 pointer-events-none"></div>
      <div className="relative max-w-6xl mx-auto" style={{ padding: '50px 63px' }}>
        <h2 className="text-[45px] font-[300] font-[Kanit] text-[#272D45] mb-10">
          Who is Valetudo For?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            ["Parents", "Quick, clear answers on child health, symptoms, and care guidance."],
            ["Chronic Patients", "Understanding conditions, managing meds, and tracking health progress."],
            ["Caregivers", "Reliable advice to support loved ones confidently and effectively."],
            ["General Wellness", "Proactive health management and disease prevention for everyone."]
          ].map(([title, text], i) => (
            <div className="flex items-start gap-4" key={i}>
              <BsSquareFill
                className="w-10 h-10 text-[#dfece9] stroke-[#c8d7d2] stroke-1"
              />
              <div>
                <h3 className="text-[18px] font-[300] font-[Kanit] text-[#2C3249] mb-1">{title}</h3>
                <p className=" text-[16px] font-[400] font-['Martel_Sans'] text-[#2C3249]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default GuideAudienceSection;