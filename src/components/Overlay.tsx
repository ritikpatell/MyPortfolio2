"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll on the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2: 25% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3: 55% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Ritik Patel
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Creative Developer.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col justify-center items-start text-left p-8 md:p-24"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white max-w-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            I build digital experiences.
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col justify-center items-end text-right p-8 md:p-24"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white max-w-2xl bg-clip-text text-transparent bg-gradient-to-l from-white to-gray-500">
            Bridging design and engineering.
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
