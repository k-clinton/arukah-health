"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
const carouselImages = [
  "/images/edut3.jpg",
  "/images/training-2.jpg",
  "/images/training-3.jpg",
];

export default function WhoWeAreHereFor() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // change speed here (5000 = 5 seconds)

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="bg-white mt-20 ">
      {/* Hero / Carousel Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Title – always visible */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-extrabold text-[#0f766e] leading-tight ">
                Exercise Therapy
              </h1>

              {/* Optional tagline – visible on all sizes */}
            </div>

            {/* Right: Carousel – HIDDEN on mobile (below lg), visible only on desktop */}
            <div className="relative hidden lg:flex lg:justify-center lg:items-center mt-12 lg:mt-0">
              <div className="relative w-full max-w-xl flex justify-center items-center">
                {/* Carousel container – fixed height, centered content */}
                <div className="relative w-full max-w-lg aspect-[4/5] flex items-center justify-center overflow-hidden ">
                  <AnimatePresence mode="wait">
                    {carouselImages.map(
                      (src, index) =>
                        index === currentIndex && (
                          <motion.div
                            key={index}
                            initial={{ y: "100%", opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: "-100%", opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.9, ease: "easeInOut" }}
                            className="relative w-full max-w-lg flex items-center justify-center"
                          >
                            <Image
                              src={src}
                              alt={`Training carousel image ${index + 1}`}
                              width={800}
                              height={1000}
                              className="w-auto max-h-full object-contain rounded-3xl"
                              priority={index === 0}
                            />
                          </motion.div>
                        ),
                    )}
                  </AnimatePresence>

                  {/* Navigation dots – subtle */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}

      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#F7E7CE] border-1 border-[#F7E7CE] rounded-md p-6 shadow-xl"
            >
              <h3 className="font-serif text-lg md:text-xl font-semibold text-[#0f766e] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span
                      className={`mr-3 font-medium text-[#0f766e]
                        }`}
                    >
                      ✦
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 mt-20 space-y-10 font-medium text-gray-700 leading-relaxed">
        <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
          <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
            {/* First paragraph + image on right */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <p className=" text-black text-left font-montserrat leading-relaxed max-w-4xl mx-auto lg:mx-0">
                  We believe in addressing challenges early so that each child
                  has the best opportunity to grow, thrive, and reach their full
                  potential. We don’t limit our care to a diagnosis—we meet each
                  child where they are, focusing on the everyday difficulties
                  parents often notice, and helping them grow stronger, more
                  confident, and more independent. Our therapies are carefully
                  tailored to meet every stage of development, offering
                  age-appropriate, engaging, and effective activities that
                  nurture physical, cognitive, and emotional growth, ensuring
                  that each child’s journey is supported with care, creativity,
                  and clinical expertise.
                </p>
              </div>

              {/* Image on right (desktop) / below (mobile) */}
              <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/care1.jpg"
                  alt="Child smiling while reaching new movement milestone"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Struggles We Address */}
    </section>
  );
}

const sections = [
  {
    title: "Movement Milestones & Motor Skills",
    items: [
      "Delayed motor development (crawling, walking, running, grasping)",
      "Difficulty with motor planning (dyspraxia)",
      "Difficulty with transitions between movements (e.g., sitting to standing)",
      "Delayed reflex development",
    ],
  },
  {
    title: "Strength, Endurance & Posture",
    items: [
      "Low muscle tone (hypotonia)",
      "Weakness and poor balance",
      "Fatigue and reduced endurance",
      "Poor postural control",
      "Breathing and core stability issues",
    ],
  },
  {
    title: "Balance, Coordination & Body Awareness",
    items: [
      "Poor coordination (catching a ball, tying shoes)",
      "Proprioception challenges (body awareness, balance, coordination)",
      "Involuntary movements (dystonia, athetosis)",
      "Sensory motor integration issues",
    ],
  },
  {
    title: "Flexibility & Mobility",
    items: [
      "Muscle spasticity or stiffness",
      "Joint contractures",
      "Difficulty with mobility (including assistive devices)",
      "Lax ligaments (hypermobility, instability)",
      "Flat feet and gait abnormalities",
    ],
  },
];
