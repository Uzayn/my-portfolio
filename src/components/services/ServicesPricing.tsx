"use client";

interface ServicesPricingProps {
  onOpenAudit: () => void;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

export default function ServicesPricing({ onOpenAudit }: ServicesPricingProps) {
  const tiers: PricingTier[] = [
    {
      name: "Starter",
      price: "$800 - $1,200",
      description: "Best for: Simple online presence",
      features: [
        "Up to 3 pages (Home, About, Contact)",
        "Mobile-responsive design",
        "Contact form",
        "Basic SEO setup",
        "1 round of revisions",
        "7 days post-launch support",
      ],
      ctaText: "Get Started",
    },
    {
      name: "Professional",
      price: "$2,000 - $3,000",
      description: "Best for: Businesses ready to grow",
      features: [
        "Up to 6 pages",
        "Mobile-responsive design",
        "Contact form + booking integration",
        "Blog or news section (optional)",
        "SEO setup + Google Business optimization tips",
        "2 rounds of revisions",
        "14 days post-launch support",
        "Basic analytics setup",
      ],
      highlighted: true,
      ctaText: "Get Started",
    },
    {
      name: "Custom",
      price: "Let's Talk",
      description: "Best for: Larger projects or specific needs",
      features: [
        "Unlimited pages",
        "E-commerce functionality",
        "Custom features & integrations",
        "Priority support",
        "Ongoing maintenance (optional)",
      ],
      ctaText: "Book A Call",
    },
  ];

  return (
    <section id="services-pricing" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Clear Pricing, No Surprises
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every business is different, but here&apos;s a starting point. Not sure which fits? The free audit will help us figure that out.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl relative ${
                tier.highlighted
                  ? "bg-gray-900 text-white ring-4 ring-gray-900/10"
                  : "bg-white border border-gray-200"
              }`}
            >
              {/* Most Popular Badge */}
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-gray-900 text-sm font-medium rounded-full">
                  Most Popular
                </span>
              )}

              {/* Tier Name */}
              <h3
                className={`text-xl font-bold mb-2 ${
                  tier.highlighted ? "text-white" : "text-gray-900"
                }`}
              >
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-2">
                <span
                  className={`text-4xl font-bold ${
                    tier.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {tier.price}
                </span>
              </div>

              {/* Description */}
              <p
                className={`mb-6 text-sm ${
                  tier.highlighted ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className={`flex items-start gap-2 text-sm ${
                      tier.highlighted ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`mt-0.5 ${
                        tier.highlighted ? "text-white" : "text-green-600"
                      }`}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={onOpenAudit}
                className={`block w-full py-3 text-center rounded-full font-semibold transition-colors ${
                  tier.highlighted
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {tier.ctaText}
              </button>
            </div>
          ))}
        </div>

        {/* Payment Note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Payment plans available. 50% upfront, 50% on launch.
        </p>
      </div>
    </section>
  );
}
