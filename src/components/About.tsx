"use client";

import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import CardStack from "./CardStack";

interface ExpandableProps {
  trigger: string;
  detail: string;
  isOpen: boolean;
  onToggle: () => void;
}

function Expandable({ trigger, detail, isOpen, onToggle }: ExpandableProps) {
  return (
    <span className="inline">
      <button
        onClick={onToggle}
        className="text-gray-900 underline decoration-dotted underline-offset-4 hover:decoration-solid cursor-pointer"
      >
        {trigger}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-600"
          >
            {detail}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

export default function About() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const aboutImages = [
    "https://picsum.photos/seed/about1/360/480",
    "https://picsum.photos/seed/about2/360/480",
    "https://picsum.photos/seed/about3/360/480",
    "https://picsum.photos/seed/about4/360/480",
    "https://picsum.photos/seed/about5/360/480",
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-16">
          {/* Left column - Title */}
          <div className="md:w-1/3 lg:w-1/4 mb-6 md:mb-0 md:sticky md:top-24 md:self-start">
            <div className="flex items-center space-x-2">
              <FaUser className="text-sm" />
              <span>About</span>
            </div>
            <p className="mt-3 text-sm text-gray-500 hidden md:block">
              A bit more about me.
            </p>
          </div>

          {/* Right column - Content */}
          <div className="md:w-2/3 lg:w-3/4">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Text Content */}
              <div className="lg:w-1/2 text-gray-600 leading-relaxed">
                <p>
                  Frontend engineer based in Nigeria.
                  I&apos;ve spent the past few years{" "}
                  <Expandable
                    trigger="shipping products"
                    detail=", led a migration from legacy PHP to Svelte at Bilin, built landing pages, and worked across different stacks"
                    isOpen={expanded.has("shipping")}
                    onToggle={() => toggle("shipping")}
                  />
                  , mostly in React and Next.js. I pay attention to{" "}
                  <Expandable
                    trigger="the details"
                    detail=", spacing, typography, small interactions. The things that make an interface feel intentional"
                    isOpen={expanded.has("details")}
                    onToggle={() => toggle("details")}
                  />
                  . Currently{" "}
                  <Expandable
                    trigger="building a business"
                    detail=" with my partner, Brandbreeks. I handle the frontend and make design calls through research"
                    isOpen={expanded.has("business")}
                    onToggle={() => toggle("business")}
                  />
                  .
                </p>
                <p className="mt-4">
                  Outside of code:{" "}
                  <Expandable
                    trigger="FPL"
                    detail=", been managing my team since 2019, ask me about it"
                    isOpen={expanded.has("fpl")}
                    onToggle={() => toggle("fpl")}
                  />
                  ,{" "}
                  <Expandable
                    trigger="tennis"
                    detail=" and chess, though I&apos;ve never learned any chess theory. I just move pieces and hope"
                    isOpen={expanded.has("tennis")}
                    onToggle={() => toggle("tennis")}
                  />
                  , and{" "}
                  <Expandable
                    trigger="old school afrobeats"
                    detail=", Fela, King Sunny Ade, Ebenezer Obey"
                    isOpen={expanded.has("music")}
                    onToggle={() => toggle("music")}
                  />
                  .
                </p>
                <AnimatePresence>
                  {expanded.size > 0 && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setExpanded(new Set())}
                      className="mt-4 text-xs text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      Collapse
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <CardStack images={aboutImages} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
