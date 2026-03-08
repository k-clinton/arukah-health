"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoWeAreHereFor() {
  return (
    <section className="bg-white mt-20 ">
      {/* Hero / Carousel Section */}
      <section className="relative mb-20 pb-15 pt-15 mt-29 md:mt-25 min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-white overflow-hidden">
        <div className="relative z-10 max-w-7xl items-center mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Title */}
            <div className="text-left order-1">
              <h1 className="text-5xl text-center sm:text-6xl md:text-6xl lg:text-6xl font-serif font-extrabold text-[#0f766e] leading-tight ">
                Challenges We Address
              </h1>

              {/* Optional tagline (feel free to remove or customize) */}
            </div>

            {/* Right: Decorative floating image */}
            <div className="relative order-2 flex justify-center lg:justify-end mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 80, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ scale: 1.06, rotate: 0, y: -20 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="relative w-[90%] max-w-md lg:max-w-xl -mr-8 lg:-mr-16"
              >
                {/* Floating image – clean, no border/frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/challenges 1.jpg"
                    alt="Joyful learning and training moment"
                    width={1200}
                    height={900}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                {/* Soft decorative glow accents behind the image */}
                <div className="absolute -bottom-16 -right-16 w-64 h-64 md:w-96 md:h-96 bg-[#0f766e]/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-12 -left-12 w-40 h-40 md:w-64 md:h-64 bg-[#FFB347]/10 rounded-full blur-3xl -z-10" />
              </motion.div>
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
