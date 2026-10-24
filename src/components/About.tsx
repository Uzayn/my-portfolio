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
      <motion.span
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
        className="cursor-pointer text-gray-900 underline decoration-dotted underline-offset-4 hover:decoration-solid focus:outline-none focus-visible:decoration-solid"
        animate={
          shouldPulse ? { color: ["#111827", "#3b82f6", "#111827"] } : {}
        }
        transition={
          shouldPulse
            ? { duration: 0.6, delay: pulseDelay, ease: "easeInOut" }
            : {}
        }
      >
        {trigger}
      </motion.span>
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
                    detail="Paybanc, DW Pay's business banking product: onboarding, payouts, statements, two-factor authentication, and an operations console, as the only frontend engineer"
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
                  generally get things done faster.
                </p>
                <p className="mt-4">
                  Away from the keyboard: FPL since 2019, Formula 1, and chess.
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
