import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function AudienceSection() {
    return (
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Who It’s For
          </h2>
          <div className="col-span-1 md:col-span-8">
            <ul className="mb-4 text-xl text-neutral-600 md:text-2xl">
              <li>👪 Parents caring for children</li>
              <li>💓 People with chronic conditions</li>
              <li>🙋 Anyone who wants to care for their loved ones</li>
              <li>🔎 Those who want facts, not fear</li>
            </ul>

            <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
              Learn more <FiArrowUpRight className="inline" />
            </button>
          </div>
        </div>
    );
  }