"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { LuHeart } from "react-icons/lu";

const floatingVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 bg-white overflow-hidden">
      {/* Subtle floating accents (optional – remove if you want ultra-clean) */}
      <motion.div
        className="absolute top-24 left-16 w-20 h-20 bg-[#EAB308] rounded-full opacity-50 blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-40 right-20 w-24 h-24 bg-[#4793FF]/20 rounded-full opacity-40 blur-2xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2, duration: 9 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-[#4793FF]  mb-8 leading-tight">
            Exercise Is{" "}
            <span className="inline-block px-5 py-2 bg-[#FFB347] text-white rounded-xl shadow-lg font-serif font-bold tracking-wide">
              L<LuHeart className="inline-block text-red-500" />
              VE
            </span>
          </h1>

          <p className="text-xl md:text-3xl font-serif text-gray-800 mb-10 max-w-xl">
            Redefining Recovery, Reclaiming Milestones, Reshaping Beliefs, and
            Transforming Lives through the Power of Movement.
          </p>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#FFB347] mb-5">
              THERAPY THROUGH MOTION
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We offer exercise sessions to children with neuro-developmental
              challenges, helping them build strength, improve mobility,
              stabilize posture, rebuild physical capacity, reestablish physical
              function and enhance their independence.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-block bg-[#FFB347] hover:bg-[#FFB347]/90 text-white font-bold py-5 px-14 rounded-full text-xl shadow-lg transform hover:scale-105 transition duration-300"
          >
            KNOW MORE →
          </Link>
        </motion.div>

        {/* Right: Single Hero Image with irregular border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.4 }}
          className="relative rounded-3xl  shadow-2xl aspect-[4/5] md:aspect-auto"
        >
          <div className="absolute  ">
            <Image
              src="/images/"
              alt="Hero Image"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Optional subtle overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
