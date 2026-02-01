"use client";

interface ServicesCTAProps {
  onOpenAudit: () => void;
}

export default function ServicesCTA({ onOpenAudit }: ServicesCTAProps) {
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

        {/* CTA Button */}
        <button
          onClick={onOpenAudit}
          className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
        >
          Get Your Free Website Audit
        </button>

        {/* Trust indicator */}
        <p className="mt-8 text-gray-400 text-sm">
          Takes 2 minutes. I&apos;ll personally review your site and send you a report within 48 hours.
        </p>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-white font-medium mb-2">Huzain Koleosho</p>
        <a
          href="mailto:koleoshohuzain@gmail.com"
          className="text-gray-400 hover:text-white transition-colors"
        >
          koleoshohuzain@gmail.com
        </a>
      </div>
    </section>
  );
}
