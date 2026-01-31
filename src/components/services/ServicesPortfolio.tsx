"use client";

import { useState } from "react";

interface CaseStudy {
  title: string;
  beforeDescription: string;
  afterDescription: string;
  results: string[];
  beforeImage?: string;
  afterImage?: string;
}

export default function ServicesPortfolio() {
  const [activeCase, setActiveCase] = useState(0);

  // TODO: Replace with actual case studies when available
  const caseStudies: CaseStudy[] = [
    {
      title: "Local Service Business",
      beforeDescription: "Slow, cluttered homepage with outdated design. Not mobile-friendly. Customers couldn't find contact info easily.",
      afterDescription: "Clean, modern design with clear calls-to-action. Mobile-first approach with fast loading times.",
      results: [
        "40% faster load time",
        "Clean design that matches their brand",
        "Mobile-friendly for the first time",
      ],
    },
    {
      title: "Booking System Redesign",
      beforeDescription: "Confusing booking flow with high drop-off rates. Users struggled to complete reservations.",
      afterDescription: "Streamlined booking experience with intuitive navigation and clear confirmation steps.",
      results: [
        "Simplified booking flow",
        "Improved user experience",
        "Higher completion rates",
      ],
    },
  ];

  return (
    <section id="services-portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            See The Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here&apos;s what happens when a business upgrades from an outdated website to one that actually converts.
          </p>
        </div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeCase === index
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {study.title}
            </button>
          ))}
        </div>

        {/* Before/After Display */}
        <div className="bg-gray-50 rounded-3xl p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                Before
              </span>
              <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center p-6">
                <p className="text-gray-500 text-center">
                  {caseStudies[activeCase].beforeDescription}
                </p>
              </div>
            </div>

            {/* After */}
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                After
              </span>
              <div className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center p-6">
                <p className="text-gray-300 text-center">
                  {caseStudies[activeCase].afterDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-4">Results:</h4>
            <ul className="flex flex-wrap gap-3">
              {caseStudies[activeCase].results.map((result, index) => (
                <li
                  key={index}
                  className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200"
                >
                  ✓ {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
