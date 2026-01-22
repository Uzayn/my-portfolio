"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHouse,
  FaBriefcase,
  FaFolderOpen,
  FaLayerGroup,
  FaUser,
} from "react-icons/fa6";

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string | null;
}

const navItems: NavItem[] = [
  {
    id: "hero",
    icon: <FaHouse size={20} />,
    label: null,
  },
  {
    id: "work",
    icon: <FaBriefcase size={20} />,
    label: "Work",
  },
  {
    id: "projects",
    icon: <FaFolderOpen size={20} />,
    label: "Projects",
  },
  {
    id: "stack",
    icon: <FaLayerGroup size={20} />,
    label: "Stack",
  },
  {
    id: "about",
    icon: <FaUser size={20} />,
    label: "About",
  },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [labelWidths, setLabelWidths] = useState<Record<string, number>>({});
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSm, setIsSm] = useState(false);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const programmaticTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    labelRefs.current = labelRefs.current.slice(0, navItems.length);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSm(window.innerWidth >= 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateLabelWidths = () => {
      const newWidths: Record<string, number> = {};
      navItems.forEach((item, index) => {
        if (item.label) {
          newWidths[item.id] = labelRefs.current[index]?.offsetWidth || 0;
        }
      });
      setLabelWidths(newWidths);
    };

    updateLabelWidths();
    window.addEventListener("resize", updateLabelWidths);
    return () => window.removeEventListener("resize", updateLabelWidths);
  }, [isSm]);

  useEffect(() => {
    const iconWidth = 20;
    const padding = isSm ? 24 : 16;
    const itemSpace = isSm ? 32 : 16;
    const labelSpace = isSm ? 8 : 4;

    const updateIndicator = () => {
      const activeIndex = navItems.findIndex(
        (item) => item.id === activeSection,
      );
      if (activeIndex !== -1) {
        let currentLeft = 0;
        for (let i = 0; i < navItems.length; i++) {
          let w = padding + iconWidth;
          const hasLabel = i === activeIndex && navItems[i].label !== null;
          if (hasLabel) {
            w += labelSpace + (labelWidths[navItems[i].id] || 0);
          }

          if (i === activeIndex) {
            setIndicatorStyle({ left: currentLeft, width: w });
            break;
          }

          currentLeft += w + itemSpace;
        }
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeSection, labelWidths, isSm]);

  useEffect(() => {
    const sections = navItems.map((item) => item.id);

    const updateActiveSection = () => {
      if (isProgrammaticScroll) return;

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(updateActiveSection, 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [isProgrammaticScroll]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const currentIndex = navItems.findIndex(
        (item) => item.id === activeSection,
      );
      const targetIndex = navItems.findIndex((item) => item.id === sectionId);
      const isAdjacent = Math.abs(currentIndex - targetIndex) === 1;

      setActiveSection(sectionId);

      if (!isAdjacent) {
        setIsProgrammaticScroll(true);
        if (programmaticTimeout.current)
          clearTimeout(programmaticTimeout.current);
        programmaticTimeout.current = setTimeout(() => {
          setIsProgrammaticScroll(false);
        }, 1200);
      }

      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeIndex = navItems.findIndex((item) => item.id === activeSection);
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === navItems.length - 1;
  let indicatorClass = "absolute bg-gray-200 dark:bg-gray-700 rounded-sm";
  if (isFirst) indicatorClass += " rounded-l-full !rounded-r-lg";
  if (isLast) indicatorClass += " rounded-r-full !rounded-l-lg";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <motion.div
        className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-full shadow-lg"
        initial={{ scale: 1, y: 0 }}
        animate={{
          scale: scrolled ? 0.85 : 1,
          y: scrolled ? -10 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="px-4 py-3">
          <div
            id="nav-container"
            className="relative flex items-center justify-center space-x-4 sm:space-x-8"
          >
            <motion.div
              className={indicatorClass}
              style={{
                top: 0,
                bottom: 0,
              }}
              animate={{
                left: indicatorStyle.left - 4,
                width: indicatorStyle.width + 8,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                layout
                onClick={() => scrollToSection(item.id)}
                className={`relative z-10 flex items-center px-2 sm:px-3 py-2 rounded-lg transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-black dark:text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <motion.span
                  className="transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.span>
                <AnimatePresence>
                  {activeSection === item.id && item.label && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ width: 0, marginLeft: 0 }}
                      animate={{
                        width: labelWidths[item.id],
                        marginLeft: isSm ? 8 : 4,
                      }}
                      exit={{ width: 0, marginLeft: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                        {item.label}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
      <div style={{ position: "absolute", visibility: "hidden" }}>
        {navItems.map((item, index) =>
          item.label ? (
            <span
              key={item.id}
              ref={(el) => {
                labelRefs.current[index] = el;
              }}
              className="text-xs sm:text-sm font-medium"
            >
              {item.label}
            </span>
          ) : null,
        )}
      </div>
    </nav>
  );
}
