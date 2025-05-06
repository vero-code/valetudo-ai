import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function HelpSection() {
    return (
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
          How Valetudo Helps
        </h2>
        <div className="col-span-1 md:col-span-8">
          <ul className="mb-4 text-xl text-neutral-600 md:text-2xl">
            <li>🤖 AI assistant with real-time internet access</li>
            <li>📚 Sources from clinical guidelines and medical databases</li>
            <li>💬 Follow-up support (“What if the patient is 70?”)</li>
            <li>💊 Drug compatibility and safer alternative checks</li>
          </ul>
          <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
            Learn more <FiArrowUpRight className="inline" />
          </button>
        </div>
      </div>
    );
  }