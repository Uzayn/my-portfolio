"use client";

import { useState } from "react";
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
  AuditFormSlider,
  ServicesSEO,
} from "@/components/services";

export default function ServicesPage() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  const openAudit = () => setIsAuditOpen(true);
  const closeAudit = () => setIsAuditOpen(false);

  return (
    <>
      {/* Structured Data for SEO */}
      <ServicesSEO />

      <main>
        {/* Hero — Hook them with a clear benefit + CTA */}
        <ServicesHero onOpenAudit={openAudit} />

        {/* Problem — Show you understand their pain */}
        <ServicesProblem />

        {/* Solution — Your service as the answer */}
        <ServicesSolution />

        {/* Process — 3 simple steps (Audit → Build → Launch) */}
        <ServicesProcess onOpenAudit={openAudit} />

        {/* Portfolio — Before/after proof */}
        <ServicesPortfolio />

        {/* What You Get — Tangible deliverables list */}
        <ServicesDeliverables />

        {/* Testimonials — Trust through social proof */}
        <ServicesTestimonials />

        {/* Pricing — Optional, depends on your strategy */}
        <ServicesPricing onOpenAudit={openAudit} />

        {/* FAQ — Handle objections */}
        <ServicesFAQ />

        {/* Final CTA — Close the loop */}
        <ServicesCTA onOpenAudit={openAudit} />

        {/* Audit Form Slider */}
        <AuditFormSlider isOpen={isAuditOpen} onClose={closeAudit} />
      </main>
    </>
  );
}
