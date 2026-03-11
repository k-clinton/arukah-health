"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Pillar {
  title: string;
  shortDesc: string;
  bullets: string[];
  fullContent: string;
  imageUrl: string;
  color: string;
}

const pillars: Pillar[] = [
  {
    title: "Research-Based, Tailored Care",
    shortDesc: "Rooted In:",
    bullets: [
      "Scientific and Data-Driven Practice",
      "Custom-Tailored Treatments",
      "Ongoing Progress Monitoring & Evaluation",
    ],
    fullContent: `

<strong>Scientific and Data-Driven Practice</strong>  
Our exercise plans are guided by the latest research and informed by real-time data in exercise physiology, rehabilitation, and wellness science - allowing us to deliver care that's not only compassionate, but consistently results-driven. 

<strong>Custom-Tailored Treatments</strong>  
Every exercise plan is uniquely designed to accommodate a child's physical needs, emotional & sensory comfort, and personal goals—no one-size-fits-all care here. 

<strong>Ongoing Progress Monitoring & Evaluation</strong> 
We track each child's journey with regular assessments and feedback loops—ensuring care remains responsive, measurable, and goal-driven.`,
    imageUrl: "/images/homepage1.jpg",
    color: "orange",
  },
  {
    title: "Child-Centered Experience ",
    shortDesc: "Built On:",
    bullets: [
      "Fun & Interactive Sessions",
      "Friendly and Well-Trained Exercise Specialists",
      "Consistent Guidance and Support",
    ],
    fullContent: `

<strong>Fun & Interactive Sessions</strong>
Our sessions are engaging, playful, and emotionally safe—making exercise enjoyable while still clinically effective. 

<strong>Friendly and Well-Trained Exercise Specialists</strong>
Our specialists blend clinical expertise with emotional intelligence—creating welcoming, informed spaces where children feel seen and supported. 

<strong>Consistent Guidance and Support</strong> 
From onboarding, we walk alongside each child—offering steady encouragement, clear communication, and therapeutic continuity.`,
    imageUrl: "/images/real impact 2.png",
    color: "blue",
  },
  {
    title: "Flexible, Holistic Wellness ",
    shortDesc: "Driven by:",
    bullets: ["Flexible Hours", "Multi-disciplinary Wellness Approach"],
    fullContent: `

<strong>Flexible Hours</strong>
We offer adaptable scheduling to accommodate diverse lifestyles, school routines, and caregiving responsibilities—because therapy should fit into real life. 

<strong>Multi-disciplinary Wellness Approach</strong>
We work with a multi-disciplinary team of experts—from neurologists and pediatricians to speech therapists, occupational therapists and nutritionists —to deliver personalized care that addresses the child’s neurological, physical, and emotional needs—treating the whole child, not just the isolated motor or functional challenges.`,
    imageUrl: "/images/real impact 3.png",
    color: "orange",
  },
];

export default function AboutUs() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);

  return (
    <section className="py-20 px-6 bg-[#F7E7CE] from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-center font-serif mb-6 font-bold text-[#0f766e] drop-shadow-xl">
          Our Promise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl border-4 border-transparent flex flex-col ${
                pillar.color === "orange"
                  ? "hover:border-[#F7E7CE]"
                  : "hover:border-white"
              }`}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src={pillar.imageUrl}
                  alt={pillar.title}
                  fill
                  className="object-contain object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3
                  className={`text-xl font-serif font-bold mb-4 ${
                    pillar.color === "orange"
                      ? "text-[#0f766e]"
                      : "text-[#0f766e]"
                  }`}
                >
                  {pillar.title}
                </h3>

                <p className="text-lg font-bold text-black pb-2">
                  {pillar.shortDesc}
                </p>

                <ul className="space-y-3 mb-6 flex-grow">
                  {pillar.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span
                        className={`mr-3 font-medium ${
                          pillar.color === "orange"
                            ? "text-[#0f766e]"
                            : "text-[#0f766e]"
                        }`}
                      >
                        ✦
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button – at the bottom */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click from interfering
                    setSelectedPillar(pillar);
                  }}
                  className={`w-full py-3 px-6 rounded-full font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    pillar.color === "orange"
                      ? "bg-[#F7E7CE] hover:bg-[#F7E7CE]"
                      : "bg-[#F7E7CE] hover:bg-[#F7E7CE]"
                  }`}
                >
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPillar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setSelectedPillar(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold"
                onClick={() => setSelectedPillar(null)}
              >
                ×
              </button>

              <div className="p-10">
                <h3
                  className={`text-4xl mb-[-30px] font-bold  ${
                    selectedPillar.color === "orange"
                      ? "text-[#0f766e]"
                      : "text-[#0f766e]"
                  }`}
                >
                  {selectedPillar.title}
                </h3>
                <div
                  className="prose prose-lg max-w-none text-black whitespace-pre-line"
                  dangerouslySetInnerHTML={{
                    __html: selectedPillar.fullContent,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
