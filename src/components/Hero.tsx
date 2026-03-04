"use client";

import Link from "next/link";
import Image from "next/image";
import { LuHeart } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const carouselImages = [
  "/images/secc1.png",
  "/images/secc2.png",
  "/images/secc4.png",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-24 md:pb-16 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side – Redesigned Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center md:text-left order-1 md:order-1 bg-gradient-to-br from-[#0f766e]/5 to-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#0f766e]/20"
          >
            <h3 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-serif font-extrabold text-black mb-3 md:mb-2 leading-tight">
              Welcome To
            </h3>

            <h1 className="text-5xl text-[#0f766e] sm:text-7xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6 md:mb-8 leading-tight">
              <span className="">A</span>RUKAH HEA
              <span className="">LTH</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-black mb-8 md:mb-10 max-w-3xl mx-auto md:mx-0">
              Leading Specialists in Pediatric Exercise Therapy
            </p>

            <Link
              href="/about"
              className="inline-block bg-[#F7E7CE] hover:bg-[#0f766e] hover:text-white text-black font-bold py-4 px-10 sm:py-5 sm:px-12 md:px-14 rounded-full text-lg sm:text-xl shadow-lg transform hover:scale-105 transition duration-300"
            >
              KNOW MORE →
            </Link>
          </motion.div>

          {/* Right Side – Carousel + Floating Card */}
          <div className="order-2 md:order-2 relative flex flex-col items-center md:items-end">
            {/* Carousel of 3 images coming from bottom */}
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/5] overflow-hidden  ">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={carouselImages[currentIndex]}
                    alt={`Hero slide ${currentIndex + 1}`}
                    fill
                    className="object-contain object-center"
                    priority={currentIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
            </div>

            {/* Floating Card – Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-[-40px] right-4 md:right-[-20px] lg:right-[-40px] z-30 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-[#0f766e]/20 max-w-xs hover:scale-105 transition-transform duration-300"
            >
              <p className="text-sm md:text-base font-medium text-gray-800 leading-relaxed">
                <strong className="text-[#0f766e]"></strong>
                <br />
                Redefining recovery, reclaiming milestones, reshaping beliefs,
                and transforming lives through the power of movement.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block text-sm font-semibold text-[#0f766e] hover:underline"
              ></Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
