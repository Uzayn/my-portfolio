"use client";

import { HiOutlinePaintBrush, HiOutlineDevicePhoneMobile, HiOutlineBolt, HiOutlineMagnifyingGlass, HiOutlineWrenchScrewdriver } from "react-icons/hi2";

export default function ServicesSolution() {
  const benefits = [
    {
      icon: HiOutlinePaintBrush,
      title: "Looks Professional",
      description: "A clean, modern design that builds trust the moment someone lands on your site.",
    },
    {
      icon: HiOutlineDevicePhoneMobile,
      title: "Works On Every Device",
      description: "Perfect experience on phones, tablets, and desktops — because your customers are everywhere.",
    },
    {
      icon: HiOutlineBolt,
      title: "Loads In Seconds",
      description: "Fast websites keep visitors around. Slow ones lose them to your competitors.",
    },
    {
      icon: HiOutlineMagnifyingGlass,
      title: "Easy To Find On Google",
      description: "Built with search engines in mind, so customers can actually find you.",
    },
    {
      icon: HiOutlineWrenchScrewdriver,
      title: "Easy To Update",
      description: "Make changes yourself without calling a developer every time.",
    },
  ];

  return (
    <section id="services-solution" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            A Website That Actually Works For You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I help businesses like yours get a website that looks great, loads fast, and turns visitors into customers.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
