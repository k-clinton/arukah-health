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
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-serif font-extrabold text-blue-700 mb-6 md:mb-8 leading-tight">
              Exercise Is{" "}
              <span className="inline-block px-4 py-1.5 sm:px-5 sm:py-2 bg-[#FFB347] text-white rounded-xl shadow-lg font-serif font-bold tracking-wide align-middle">
                L
                <LuHeart className="inline-block text-red-500 align-middle mx-1" />
                VE
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-gray-800 mb-8 md:mb-10 max-w-3xl mx-auto md:mx-0">
              Redefining Recovery, Reclaiming Milestones, Reshaping Beliefs, and
              Transforming Lives through the Power of Movement.
            </p>

            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-blue-700 mb-4 md:mb-5">
                THERAPY THROUGH MOTION
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                We offer exercise sessions to children with neuro-developmental
                challenges and milestone delays, helping them build strength,
                improve mobility, stabilize posture, build physical capacity,
                establish physical function and enhance their independence.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-block bg-[#FFB347] hover:bg-orange-600 text-white font-bold py-4 px-10 sm:py-5 sm:px-12 md:px-14 rounded-full text-lg sm:text-xl shadow-lg transform hover:scale-105 transition duration-300"
            >
              KNOW MORE →
            </Link>
          </div>

          {/* Image – comes SECOND on mobile */}
          <div className="order-2 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
              {/* Decorative Image – Top Right */}
              <motion.div
                className="pointer-events-none absolute -top-6 -right-6 z-10 hidden md:block"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/pd3.jpg"
                  alt=""
                  width={110}
                  height={110}
                  className="opacity-70 rotate-6"
                />
              </motion.div>

              {/* Decorative Image – Bottom Left */}
              <motion.div
                className="pointer-events-none absolute -bottom-6 -left-6 z-10 hidden md:block"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/pd3.jpg"
                  alt=""
                  width={95}
                  height={95}
                  className="opacity-65 -rotate-6"
                />
              </motion.div>

              {/* Main Image (UNCHANGED) */}
              <Image
                src="/images/Hero.png"
                alt="Child engaged in joyful exercise therapy"
                width={700}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
