"use client";

export default function ServicesDeliverables() {
  const deliverables = [
    "Custom-designed website (not a generic template)",
    "Mobile-responsive — looks great on every screen size",
    "Fast loading speeds (under 3 seconds)",
    "SEO basics set up so Google can find you",
    "Contact form or booking integration",
    "Up to 2 rounds of revisions",
    "14 days of post-launch support",
    "Simple training so you can make basic updates yourself",
  ];

  return (
    <section id="services-deliverables" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need, Nothing You Don&apos;t
          </h2>
        </div>

        {/* Deliverables List */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <ul className="space-y-4">
            {deliverables.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700"
              >
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
