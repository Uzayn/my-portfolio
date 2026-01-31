"use client";

export default function ServicesProblem() {
  const painPoints = [
    "Your website looks like it was built in 2015 — and customers notice",
    "You're losing business to competitors with better-looking sites",
    "Your site takes forever to load, so visitors leave before they even see what you offer",
    "It looks broken on phones (where most of your customers are browsing)",
    "You want to update something simple, but you can't without paying someone or breaking things",
    "You've been meaning to fix it for months... but where do you even start?",
  ];

  return (
    <section id="services-problem" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Sound Familiar?
          </h2>
        </div>

        {/* Pain Points List */}
        <div className="space-y-4 mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-200"
            >
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-600 text-sm font-bold">✕</span>
              </div>
              <p className="text-gray-700 text-lg">{point}</p>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <p className="text-center text-xl text-gray-600 max-w-2xl mx-auto">
          You&apos;re not alone. Most small business websites have the same problems — and they&apos;re costing you customers every day.
        </p>
      </div>
    </section>
  );
}
