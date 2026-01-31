"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How long does it take to build my website?",
      answer:
        "Most projects take 2-4 weeks from start to finish, depending on the size and complexity. I'll give you a clear timeline before we begin.",
    },
    {
      question: "What do you need from me?",
      answer:
        "Not much. Your logo, brand colors (if you have them), any text or images you want to use, and feedback along the way. I'll guide you through everything.",
    },
    {
      question: "What if I already have a website?",
      answer:
        "Perfect — we'll start with an audit to see what's worth keeping and what needs to go. If your domain and hosting are fine, we can work with those.",
    },
    {
      question: "Will I be able to update the site myself?",
      answer:
        "Yes. I'll set it up so you can make simple changes (text, images, etc.) without needing to call me. And I'll show you how.",
    },
    {
      question: "What if I need changes after launch?",
      answer:
        "Small tweaks within the support period are included. After that, I offer affordable maintenance packages — or you can just reach out when you need something.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes. Standard terms are 50% upfront to start, 50% when we launch. For larger projects, we can discuss a schedule that works for you.",
    },
  ];

  return (
    <section id="services-faq" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Questions? I&apos;ve Got Answers.
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-2xl text-gray-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
