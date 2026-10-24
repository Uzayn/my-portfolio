"use client";

import { FaEnvelope } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="hero" className="pt-40 pb-20 md:pt-52 md:pb-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-6">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-none"
          style={{
            background: "linear-gradient(90deg, #000000 0%, #434343 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          I build, this is proof
        </h1>

        <p className="text-base md:text-2xl font-light text-gray-600">
          - Huzain Koleosho,{" "}
          <span className="font-extralight">Frontend engineer</span>
        </p>

        <div className="w-48 h-0.5 bg-gradient-to-r from-gray-300/0 via-gray-300 to-gray-300/0" />

        <p className="max-w-prose text-gray-600">
          Web, engineering, developing, committing &amp; everything in between.
          <br />
          I care about creating performant web interfaces and engaging
          experiences.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="mailto:koleoshohuzain@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
          >
            <FaEnvelope className="h-3.5 w-3.5" />
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
