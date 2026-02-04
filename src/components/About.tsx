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
    "/images/about/Uzayn.jpeg",
    "/images/about/uzayn-work.jpeg",
    "/images/about/Uzayn4.jpeg",
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
                  I build frontends, but I don&apos;t just stop at the UI. I
                  think about how{" "}
                  <Expandable
                    trigger="the whole system fits together"
                    detail=" - APIs, databases, server logic. I've spent enough time on the backend to know how things should connect, and that makes the frontend work I do a lot sharper"
                    isOpen={expanded.has("backend")}
                    onToggle={() => toggle("backend")}
                    shouldPulse={isInView}
                    pulseDelay={0.3}
                  />
                  . The thing that keeps me up at night?{" "}
                  <Expandable
                    trigger="Spacing being off by 2px"
                    detail=" - seriously. Misaligned elements, inconsistent padding, a button that doesn't sit right - these things bother me until I fix them. I can't unsee it"
                    isOpen={expanded.has("design")}
                    onToggle={() => toggle("design")}
                    shouldPulse={isInView}
                    pulseDelay={0.5}
                  />
                  .
                </p>
                <p className="mt-4">
                  Hand me a Figma file and I&apos;ll{" "}
                  <Expandable
                    trigger="match it to the pixel"
                    detail=" - that's genuinely the part I enjoy most. Translating a static design into something that moves and responds and feels real"
                    isOpen={expanded.has("crafting")}
                    onToggle={() => toggle("crafting")}
                    shouldPulse={isInView}
                    pulseDelay={0.7}
                  />
                  . I care about code that&apos;s{" "}
                  <Expandable
                    trigger="boring in the best way"
                    detail=" - readable, predictable, easy to pick up six months later. No clever tricks, just solid work"
                    isOpen={expanded.has("functional")}
                    onToggle={() => toggle("functional")}
                    shouldPulse={isInView}
                    pulseDelay={0.9}
                  />
                  .
                </p>
                <p className="mt-4">
                  Right now I&apos;m building{" "}
                  <Expandable
                    trigger="Brandbreeks"
                    detail=" with my partner - I own the frontend and most of the design decisions. It's a mix of research, intuition, and a lot of iteration"
                    isOpen={expanded.has("business")}
                    onToggle={() => toggle("business")}
                    shouldPulse={isInView}
                    pulseDelay={1.1}
                  />
                  . What I care about most is{" "}
                  <Expandable
                    trigger="how it feels to use something"
                    detail=" - that split second where a user either trusts your product or bounces. I want to be on the right side of that moment"
                    isOpen={expanded.has("emotions")}
                    onToggle={() => toggle("emotions")}
                    shouldPulse={isInView}
                    pulseDelay={1.3}
                  />
                  .
                </p>
                <p className="mt-4">
                  Off the clock:{" "}
                  <Expandable
                    trigger="FPL manager since 2019"
                    detail=" - ask me about my team."
                    isOpen={expanded.has("fpl")}
                    onToggle={() => toggle("fpl")}
                    shouldPulse={isInView}
                    pulseDelay={1.5}
                  />
                  ,{" "}
                  <Expandable
                    trigger="English football"
                    detail=" - GGMU, the highs and lows, the passion"
                    isOpen={expanded.has("football")}
                    onToggle={() => toggle("football")}
                    shouldPulse={isInView}
                    pulseDelay={1.7}
                  />
                  ,{" "}
                  <Expandable
                    trigger="tennis and chess"
                    detail=" - never studied chess theory, I just move pieces and calculate as i progress, i think it's more interesting this way"
                    isOpen={expanded.has("tennis")}
                    onToggle={() => toggle("tennis")}
                    shouldPulse={isInView}
                    pulseDelay={1.9}
                  />
                  ,{" "}
                  <Expandable
                    trigger="scrabble"
                    detail=" -finding a 7-letter word on a triple is peak dopamine"
                    isOpen={expanded.has("scrabble")}
                    onToggle={() => toggle("scrabble")}
                    shouldPulse={isInView}
                    pulseDelay={2.1}
                  />
                  , and{" "}
                  <Expandable
                    trigger="2010s afrobeats"
                    detail=" -Wizkid, Wande Coal, the golden era. If you know, you know"
                    isOpen={expanded.has("music")}
                    onToggle={() => toggle("music")}
                    shouldPulse={isInView}
                    pulseDelay={2.3}
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
