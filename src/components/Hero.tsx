"use client";

import Link from "next/link";
import Image from "next/image";
import { LuHeart } from "react-icons/lu";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-20 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Text Content – comes FIRST on mobile */}
          <div className="text-center md:text-left order-1 md:order-1">
            <h3 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-serif font-extrabold text-black mb-3 md:mb-2  leading-tight">
              Welcome To
            </h3>
            <h2 className="text-5xl  sm:text-7xl md:text-6xl lg:text-6xl font-serif font-extrabold text-[#0f766e] mb-6 md:mb-8 leading-tight">
              <span className="text-[#F7E7CE]">A</span>RUKAH HEA
              <span className="text-[#F7E7CE]">LTH</span>{" "}
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-black mb-8 md:mb-10 max-w-3xl mx-auto md:mx-0">
              Leading Specialists in Pediatric Exercise Therapy
            </p>

            <Link
              href="/about"
              className="inline-block bg-[#F7E7CE] hover:bg-[#F7E7CE] hover:text-black text-black font-bold py-4 px-10 sm:py-5 sm:px-12 md:px-14 rounded-full text-lg sm:text-xl shadow-lg transform hover:scale-105 transition duration-300"
            >
              KNOW MORE →
            </Link>
          </div>

          {/* Right Column – Image with decorative frame */}
          <div className="order-2 md:order-2 flex justify-center md:justify-end relative">
            {/* Orange background rectangle (tilted) */}
            <div className="absolute hidden md:hidden top-0 right-0 md:right-[-20%] w-[140%] md:w-[160%] h-full bg-[#FFB347] md:rotate-[-90deg] hidden md:block -z-10 shadow-xl" />

            {/* Black frame with blue outline */}
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl z-10">
              {/* Blue outline border */}

              {/* Black inner frame */}
              <div className="relative bg-black rounded-2xl shadow-2xl overflow-hidden"></div>

              {/* Existing floating decorative images (unchanged) */}
              <motion.div
                className="pointer-events-none absolute -top-34 -right-26 z-30 hidden md:block"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <div>
                <Image
                  src="/images/Screenshot 2026-02-27 222921.png"
                  alt="Hero Image"
                  width={600}
                  height={600}
                  className="object-cover object-center transition-transform duration-500 hover:scale-105 rounded-2xl"
                />
              </div>

              <motion.div
                className="pointer-events-none absolute -bottom-38 -right-6 z-30  md:block"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
