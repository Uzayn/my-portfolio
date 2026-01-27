"use client";

import { useState, useRef } from "react";
import { FaUser } from "react-icons/fa6";
import { motion, AnimatePresence, useInView } from "framer-motion";
import CardStack from "./CardStack";

interface ExpandableProps {
  trigger: string;
  detail: string;
  isOpen: boolean;
  onToggle: () => void;
  shouldPulse?: boolean;
  pulseDelay?: number;
}

function Expandable({
  trigger,
  detail,
  isOpen,
  onToggle,
  shouldPulse,
  pulseDelay = 0,
}: ExpandableProps) {
  return (
    <span className="inline">
      <motion.button
        onClick={onToggle}
        className="text-gray-900 underline decoration-dotted underline-offset-4 hover:decoration-solid cursor-pointer"
        animate={
          shouldPulse
            ? {
                scale: [1, 1.05, 1],
                color: ["#111827", "#3b82f6", "#111827"],
              }
            : {}
        }
        transition={
          shouldPulse
            ? {
                duration: 0.6,
                delay: pulseDelay,
                ease: "easeInOut",
              }
            : {}
        }
      >
        {trigger}
      </motion.button>
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
  const textRef = useRef(null);
  const isInView = useInView(textRef, { margin: "-100px" });

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
    "/images/about/Uzayn4.jpeg",
    "/images/about/Uzayn.jpeg",
    "/images/about/uzayn-work.jpeg",
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
              <div
                ref={textRef}
                className="lg:w-1/2 text-gray-600 leading-relaxed"
              >
                <p>
                  I&apos;m a frontend engineer based in Nigeria. I&apos;ve spent
                  the past few years{" "}
                  <Expandable
                    trigger="shipping products"
                    detail=", I led a migration from legacy PHP to Svelte at Bilin, built landing pages, and worked across different stacks"
                    isOpen={expanded.has("shipping")}
                    onToggle={() => toggle("shipping")}
                    shouldPulse={isInView}
                    pulseDelay={0.3}
                  />
                  , mostly in React and Next.js. I care about{" "}
                  <Expandable
                    trigger="the littlest details"
                    detail=", things like spacing, typography, and small interactions. I think that's what makes an interface feel intentional"
                    isOpen={expanded.has("details")}
                    onToggle={() => toggle("details")}
                    shouldPulse={isInView}
                    pulseDelay={0.5}
                  />
                  . Right now, I&apos;m{" "}
                  <Expandable
                    trigger="building a business"
                    detail=" with my partner called Brandbreeks. I handle the frontend and I make design calls through research"
                    isOpen={expanded.has("business")}
                    onToggle={() => toggle("business")}
                    shouldPulse={isInView}
                    pulseDelay={0.7}
                  />
                  .
                </p>
                <p className="mt-4">
                  Outside of code, I love English football, and I play{" "}
                  <Expandable
                    trigger="FPL"
                    detail=", I've been managing my team since 2019. Ask me about it"
                    isOpen={expanded.has("fpl")}
                    onToggle={() => toggle("fpl")}
                    shouldPulse={isInView}
                    pulseDelay={0.9}
                  />
                  , I love{" "}
                  <Expandable
                    trigger="tennis"
                    detail=" and chess, though I've never learned any chess theory. I make my calculated moves and hope for the best"
                    isOpen={expanded.has("tennis")}
                    onToggle={() => toggle("tennis")}
                    shouldPulse={isInView}
                    pulseDelay={1.1}
                  />
                  , and I listen to{" "}
                  <Expandable
                    trigger="old school afrobeats"
                    detail=", artists like Fela, King Sunny Ade, and Ebenezer Obey"
                    isOpen={expanded.has("music")}
                    onToggle={() => toggle("music")}
                    shouldPulse={isInView}
                    pulseDelay={1.3}
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
