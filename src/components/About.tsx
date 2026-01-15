"use client";

import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa6";
import CardStack from "./CardStack";

export default function About() {
  const aboutImages = [
    "https://picsum.photos/seed/about1/360/480",
    "https://picsum.photos/seed/about2/360/480",
    "https://picsum.photos/seed/about3/360/480",
    "https://picsum.photos/seed/about4/360/480",
    "https://picsum.photos/seed/about5/360/480",
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
        <div className="flex items-center space-x-2">
          <FaUser className="text-base text-gray-700 dark:text-gray-300" />
          <h2 className="text-xl font-normal tracking-tight text-gray-900 dark:text-gray-100">
            About
          </h2>
        </div>
        <div className="w-48 h-0.5 bg-gradient-to-r from-gray-300/0 via-gray-300 to-gray-300/0 dark:via-gray-600" />

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Stack with Animation */}
          <motion.div
            className="w-full md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <CardStack images={aboutImages} />
          </motion.div>

          {/* Text Content with Staggered Animation */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <motion.p
              className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
