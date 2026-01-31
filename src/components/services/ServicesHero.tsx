"use client";

export default function ServicesHero() {
  return (
    <section id="services-hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
          Your Website Should Bring You Customers, Not Embarrassment
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
          I build fast, modern websites that make your business look professional and help customers find you online.
        </p>

        {/* CTA Button */}
        <a
          href="#services-contact"
          className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
        >
          Get Your Free Website Audit
        </a>

        {/* Trust indicator */}
        <p className="mt-4 text-gray-500 text-sm">
          Find out exactly what&apos;s holding your website back — no cost, no obligation.
        </p>
      </div>
    </section>
  );
}
