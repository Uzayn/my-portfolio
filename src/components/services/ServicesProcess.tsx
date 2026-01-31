"use client";

export default function ServicesProcess() {
  const steps = [
    {
      number: "01",
      title: "Audit",
      description: "I review your current website and show you exactly what's working, what's not, and what's costing you customers. You'll get a clear report — no tech jargon.",
    },
    {
      number: "02",
      title: "Design & Build",
      description: "I design and build a custom website tailored to your business. You'll see progress along the way and have input at every step.",
    },
    {
      number: "03",
      title: "Launch & Support",
      description: "We go live when you're happy. I handle all the technical details and stick around to make sure everything runs smoothly.",
    },
  ];

  return (
    <section id="services-process" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Simple Process, Real Results
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (hidden on mobile, hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300" />
              )}

              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 text-center h-full">
                {/* Step Number */}
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold">{step.number}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#services-contact"
            className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
          >
            Start With A Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
