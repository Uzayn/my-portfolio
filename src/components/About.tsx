"use client";

import { useState, useRef } from "react";
import { FaUser } from "react-icons/fa6";
import { motion, AnimatePresence, useInView } from "framer-motion";
import CardStack from "./CardStack";

interface ExpandableProps {
  trigger: string;
  detail: string; // Rendered as a parenthetical right after the trigger
  isOpen: boolean;
  onToggle: () => void;
  shouldPulse?: boolean;
  pulseDelay?: number;
}

// An inline trigger (not a <button>) so the phrase wraps mid-sentence like
// ordinary text instead of jumping to its own line as a block.
function Expandable({
  trigger,
  detail,
  isOpen,
  onToggle,
  shouldPulse,
  pulseDelay = 0,
}: ExpandableProps) {
  return (
    <>
      <span
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onClick={onToggle}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onToggle();
          }
        }}
        className={`cursor-pointer text-gray-900 underline decoration-dotted underline-offset-4 hover:decoration-solid focus:outline-none focus-visible:decoration-solid ${
          shouldPulse ? "link-pulse" : ""
        }`}
        style={{ animationDelay: `${pulseDelay}s` }}
      >
        {trigger}
      </span>
      <AnimatePresence>
        {isOpen && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-600"
          >
            {" ("}
            {detail}
            {")"}
          </motion.span>
        )}
      </AnimatePresence>
    </>
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
            <h2 className="flex items-center gap-2 text-lg font-medium text-gray-900">
              <FaUser className="text-base" />
              <span>About</span>
            </h2>
            <p className="mt-3 text-sm text-gray-500 hidden md:block">
              How I work and what I care about.
            </p>
          </div>

          {/* Right column - Content */}
          <div className="md:w-2/3 lg:w-3/4">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Text Content */}
              <div
                ref={textRef}
                className="lg:w-[55%] text-gray-600 leading-relaxed"
              >
                <p>
                  I&apos;m a frontend engineer who usually ends up{" "}
                  <Expandable
                    trigger="owning more than the UI"
                    detail="the API contract, error handling, CI, and the backend edges that fall between teams"
                    isOpen={expanded.has("ownership")}
                    onToggle={() => toggle("ownership")}
                    shouldPulse={isInView}
                    pulseDelay={0.3}
                  />
                  . In 2026 that meant{" "}
                  <Expandable
                    trigger="building a fintech platform from scratch"
                    detail="Paybanc, DW Pay's business banking product: onboarding, payouts, statements, and two-factor authentication, as the only frontend engineer"
                    isOpen={expanded.has("fintech")}
                    onToggle={() => toggle("fintech")}
                    shouldPulse={isInView}
                    pulseDelay={0.5}
                  />{" "}
                  and{" "}
                  <Expandable
                    trigger="working across a large product monorepo"
                    detail="WonderCall at Bilin: document editing, a permissions system, a security and compliance review, and localization into six languages"
                    isOpen={expanded.has("monorepo")}
                    onToggle={() => toggle("monorepo")}
                    shouldPulse={isInView}
                    pulseDelay={0.7}
                  />
                  .
                </p>
                <p className="mt-4">
                  I hold myself to{" "}
                  <Expandable
                    trigger="precision in the interface"
                    detail="faithful implementation of designs, consistent spacing, components that behave the same everywhere"
                    isOpen={expanded.has("precision")}
                    onToggle={() => toggle("precision")}
                    shouldPulse={isInView}
                    pulseDelay={0.9}
                  />{" "}
                  and to{" "}
                  <Expandable
                    trigger="the parts users never see"
                    detail="clear error states, permission checks that explain themselves, rate-limited sign-in, logs that never expose personal data"
                    isOpen={expanded.has("unseen")}
                    onToggle={() => toggle("unseen")}
                    shouldPulse={isInView}
                    pulseDelay={1.1}
                  />
                  . What matters most to me is whether a product earns trust
                  in its first few seconds of use.
                </p>
                <p className="mt-4">
                  I use AI like Claude Code and Codex to plan, review, and
                  generally{" "}
                  <Expandable
                    trigger="get things done faster"
                    detail="they produce much of the first draft, while my time goes into deciding what to build, reviewing carefully, and verifying the result end to end"
                    isOpen={expanded.has("ai")}
                    onToggle={() => toggle("ai")}
                    shouldPulse={isInView}
                    pulseDelay={1.3}
                  />
                  .
                </p>
                <p className="mt-4">
                  Away from the keyboard:{" "}
                  <Expandable
                    trigger="FPL since 2019"
                    detail="ask me about my team"
                    isOpen={expanded.has("fpl")}
                    onToggle={() => toggle("fpl")}
                    shouldPulse={isInView}
                    pulseDelay={1.5}
                  />
                  ,{" "}
                  <Expandable
                    trigger="Formula 1"
                    detail="the strategy as much as the racing"
                    isOpen={expanded.has("f1")}
                    onToggle={() => toggle("f1")}
                    shouldPulse={isInView}
                    pulseDelay={1.7}
                  />
                  , and{" "}
                  <Expandable
                    trigger="chess"
                    detail="no opening theory, just calculating over the board"
                    isOpen={expanded.has("chess")}
                    onToggle={() => toggle("chess")}
                    shouldPulse={isInView}
                    pulseDelay={1.9}
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
                      className="mt-4 inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900"
                    >
                      Collapse
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* Image */}
              <div className="lg:w-[45%]">
                <CardStack images={aboutImages} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
