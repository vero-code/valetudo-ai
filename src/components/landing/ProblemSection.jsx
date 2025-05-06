import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProblemSection() {
    return (
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            The Problem Valetudo Solves
          </h2>
          <div className="col-span-1 md:col-span-8">
            <ul className="mb-4 text-xl text-neutral-600 md:text-2xl">
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">⚠️</span>
                  <p><strong>72%</strong> of users find fake info when searching symptoms online.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">🧾</span>
                  <p>Outdated forums, blog posts, and misleading ads cause confusion.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">💊</span>
                  <p>This leads to panic — and often, incorrect medication choices.</p>
                </li>
              </ul>
            <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit cursor-pointer">
              Learn more <FiArrowUpRight className="inline" />
            </button>
          </div>
        </div>
    );
  }