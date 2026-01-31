import {
  ServicesHero,
  ServicesProblem,
  ServicesSolution,
  ServicesProcess,
  ServicesPortfolio,
  ServicesDeliverables,
  ServicesTestimonials,
  ServicesPricing,
  ServicesFAQ,
  ServicesCTA,
} from "@/components/services";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero — Hook them with a clear benefit + CTA */}
      <ServicesHero />

      {/* Problem — Show you understand their pain */}
      <ServicesProblem />

      {/* Solution — Your service as the answer */}
      <ServicesSolution />

      {/* Process — 3 simple steps (Audit → Build → Launch) */}
      <ServicesProcess />

      {/* Portfolio — Before/after proof */}
      <ServicesPortfolio />

      {/* What You Get — Tangible deliverables list */}
      <ServicesDeliverables />

      {/* Testimonials — Trust through social proof */}
      <ServicesTestimonials />

      {/* Pricing — Optional, depends on your strategy */}
      <ServicesPricing />

      {/* FAQ — Handle objections */}
      <ServicesFAQ />

      {/* Final CTA — Close the loop */}
      <ServicesCTA />
    </main>
  );
}
