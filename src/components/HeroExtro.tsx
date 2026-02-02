import Link from "next/link";
import React from "react";

const HeroExtro = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center bg-white justify-center overflow-hidden rounded-2xl mx-4 md:mx-8 my-12 md:my-20 shadow-2xl">
      {/* Content Container */}
      <div className="relative z-10 text-center max-w-4xl px-6 py-12 md:px-12 md:py-20">
        {/* Playful Title */}
        <h1 className="text-4xl md:text-4xl font-bold text-black mb-4 leading-tight ">
          Nurturing{" "}
          <span className="text-orange-500  inline-block">Progress, </span>{" "}
          Inspiring{" "}
          <span className="text-orange-500  inline-block">Possibilities</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto ">
          Join us in redefining what’s possible. Start your child’s personalized
          exercise therapy today - Move towards mobility, confidence,
          independence and joy.
        </p>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-[#FFB347] hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold text-xl md:text-2xl py-4 px-10 rounded-full shadow-2xl hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-300/50 border-4 border-white/30"
        >
          <span className="text-white">Begin the Journey</span>
          <span className="text-2xl animate-bounce "></span>
        </Link>

        {/* Decorative Elements */}
      </div>

      {/* Floating Shapes for Childlike Vibe */}
    </section>
  );
};

export default HeroExtro;
