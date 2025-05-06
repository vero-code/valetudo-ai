import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function SolutionSection() {
    return (
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 pt-16 pb-16 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-semibold text-gray-900 md:text-4xl md:col-span-4">
          How Valetudo Helps
        </h2>
        <div className="col-span-1 md:col-span-8">
          <ul className="space-y-4 text-base sm:text-lg text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="text-xl mt-1">🤖</span>
              <span>AI assistant with <strong>real-time</strong> internet access.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-xl mt-1">📚</span>
              <span>Sources from clinical guidelines and medical databases.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-xl mt-1">💬</span>
              <span>Follow-up support (“What if the patient is 70?”).</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-xl mt-1">💊</span>
              <span>Drug compatibility and safer alternative checks.</span>
            </li>
          </ul>
          <button className="flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md md:w-fit cursor-pointer">
            Learn more <FiArrowUpRight className="inline" />
          </button>
        </div>
      </div>
    );
  }