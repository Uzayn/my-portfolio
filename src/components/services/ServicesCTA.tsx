"use client";

export default function ServicesCTA() {
  return (
    <section id="services-contact" className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready To Stop Losing Customers To A Bad Website?
        </h2>

        {/* Subheadline */}
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Get a free audit and find out exactly what&apos;s holding your site back. No pressure, no commitment — just clarity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:koleoshohuzain@gmail.com"
            className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            Get Your Free Website Audit
          </a>
          <a
            href="/"
            className="inline-block px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
          >
            View Developer Portfolio
          </a>
        </div>

        {/* Trust indicator */}
        <p className="mt-8 text-gray-400 text-sm">
          Takes 2 minutes. I&apos;ll personally review your site and send you a report within 48 hours.
        </p>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-white font-medium mb-2">Huzain Aliyu</p>
        <a
          href="mailto:koleoshohuzain@gmail.com"
          className="text-gray-400 hover:text-white transition-colors"
        >
          koleoshohuzain@gmail.com
        </a>
        <div className="mt-4">
          <a
            href="/"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            View Developer Portfolio →
          </a>
        </div>
      </div>
    </section>
  );
}
