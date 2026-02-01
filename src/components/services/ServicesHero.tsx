"use client";

interface ServicesHeroProps {
  onOpenAudit: () => void;
}

export default function ServicesHero({ onOpenAudit }: ServicesHeroProps) {
  return (
    <header
      id="services-hero"
      className="min-h-screen flex items-center justify-center px-6 py-20"
      role="banner"
      aria-label="Web Design Services"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* SEO-friendly subtitle */}
        <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase">
          Freelance Web Designer & Developer
        </p>

        {/* Headline - Primary H1 with keywords */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
          Your Website Should Bring You Customers, Not Embarrassment
        </h1>

        {/* Subheadline with keywords */}
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
          I build fast, modern, mobile-friendly websites that make your business look professional and help customers find you online.
        </p>

        {/* CTA Button */}
        <button
          onClick={onOpenAudit}
          className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
          aria-label="Request a free website audit"
        >
          Get Your Free Website Audit
        </button>

        {/* Trust indicator */}
        <p className="mt-4 text-gray-500 text-sm">
          Find out exactly what&apos;s holding your website back — no cost, no obligation.
        </p>

        {/* Hidden SEO text - visible to screen readers and crawlers */}
        <p className="sr-only">
          Professional web design and development services for small businesses.
          Custom website design, responsive web development, SEO setup, and ongoing support.
          Hire a freelance web developer to create a modern website that converts visitors into customers.
        </p>
      </div>
    </header>
  );
}
