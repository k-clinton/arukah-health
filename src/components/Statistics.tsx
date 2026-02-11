"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  {
    end: 100,
    label: "Personalized Care",
    suffix: "%",
    description: "Every plan uniquely designed for each child's needs",
  },
  {
    end: 4,
    label: "Core Exercise Pathways",
    description: "Focused paths for strength, mobility, posture & more",
  },
  {
    end: 5,
    label: "Years of Experience",
    suffix: "+",
    description: "Expertise in neuro-developmental exercise therapy",
  },
  {
    end: 98,
    label: "Parent Satisfaction",
    suffix: "%",
    description: "Families love the joyful, effective results",
  },
  {
    end: 100,
    label: "Children Supported",
    suffix: "+",
    description: "Kids building independence through fun exercise",
  },
  {
    end: 93,
    label: "Achieved Independence",
    suffix: "%",
    description: "Children gaining confidence and self-reliance",
  },
];

export default function Statistics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 overflow-hidden bg-gray-50"
    >
      {/* Decorative floating image – top right */}
      <motion.div
        className="pointer-events-none absolute top-8 right-8 z-0 hidden sm:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/icon8.jpg"
          alt=""
          width={240}
          height={240}
          className="opacity-100 rotate-6"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif font-bold  text-blue-700 drop-shadow-2xl mb-8"
        >
          Real Impact, Real Joy
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.92 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border-4 border-orange-300/40 hover:border-blue-400/60 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl md:text-6xl font-black text-blue-700 mb-3">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.end}
                    duration={2.8}
                    separator=","
                    suffix={stat.suffix || ""}
                  />
                ) : (
                  "0"
                )}
              </div>

              <h3 className="text-2xl md:text-3xl  text-orange-600 mb-4">
                {stat.label}
              </h3>

              <p className="text-gray-700 text-lg md:text-xl">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
