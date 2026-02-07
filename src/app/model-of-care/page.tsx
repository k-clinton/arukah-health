"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, HeartHandshake, ShieldCheck, Target, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ModelOfCare() {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const pillars = [
    {
      icon: Users,
      title: "Interdisciplinary Care",
      color: "#4793FF",
      shortDesc:
        "We collaborate with pediatricians, neurologists, physiotherapists, occupational therapists, and speech-language pathologists to align exercise interventions with medical, functional, and developmental priorities.",
      details: `
We work in collaboration with pediatricians, neurologists, physiotherapists, occupational therapists, and speech language pathologists, ensuring that therapeutic exercise interventions are aligned with medical, functional, and developmental priorities. This coordinated framework allows for:

• Comprehensive assessment that synthesizes medical, neurological, and functional findings.
• Individualized treatment planning informed by cross disciplinary expertise.
• Continuity of care across medical, therapeutic, and community settings.
• Evidence based interventions that address motor, cognitive, communicative, and psychosocial domains.
      `.trim(),
    },
    {
      icon: Target,
      title: "Outcomes & Goals",
      color: "#FFB347",
      shortDesc:
        "Measurable, functional outcomes are monitored and adjusted to maximize long-term potential — improved mobility, greater independence, reduced complications, and enhanced participation in school and play.",
      details: `
Our programs are designed to achieve measurable, functional outcomes that are monitored, tracked and adjusted to maximize long term developmental potential. Through evidence based exercise therapy and interdisciplinary collaboration, families can expect:

• Improved mobility and motor function: targeted interventions to enhance gait, balance, coordination, and overall physical capacity.
• Greater independence in daily activities: skill development that supports self care, feeding, dressing, and participation in age appropriate routines.
• Reduced risk of secondary complications: proactive strategies to minimize musculoskeletal issues such as contractures, postural deformities, and activity limitations.
• Enhanced participation in school and play: integration of therapeutic activities that promote inclusion, social engagement, and cognitive development within educational and recreational settings.
      `.trim(),
    },
    {
      icon: HeartHandshake,
      title: "Family & Caregiver Involvement",
      color: "#4793FF",
      shortDesc:
        "Parents and caregivers are essential partners. We provide training, home strategies, empowerment, consistency across environments, and collaborative decision-making to support progress in daily life.",
      details: `
Our model of care recognizes parents and caregivers as essential partners in the therapeutic journey. We provide tools, training, and encouragement so that progress continues beyond the clinic and into everyday life. Families can expect:

• Practical training and home strategies: equipping caregivers with exercises and routines that reinforce therapy goals in daily settings.
• Confidence and empowerment: building caregiver skills to reduce anxiety and foster a supportive environment for the child.
• Consistency across environments: ensuring therapeutic practices are carried over into home, school, and community life.
• Strengthened family bonds: encouraging shared activities that promote connection, resilience, and joy in movement.
• Collaborative decision making: involving caregivers in treatment planning to align therapy with family priorities and values.
      `.trim(),
    },
    {
      icon: ShieldCheck,
      title: "Safety & Individualization",
      color: "#FFB347",
      shortDesc:
        "Every program is supervised, safe, and fully tailored through comprehensive assessment of neurological status, functional capacity, and medical conditions — with continuous monitoring and adaptation.",
      details: `
Our interventions are delivered within a supervised, safe, and supportive environment, ensuring that every child’s medical profile and developmental needs are fully considered. Each program is individually tailored through comprehensive assessment of neurological status, functional capacity, and co existing medical conditions. This process allows us to:

• Customize therapy plans to align with each child’s medical history, current health status, and developmental stage.
• Implement risk mitigation strategies to safeguard against injury, fatigue, or secondary complications during therapy.
• Adapt activities and intensity levels to ensure interventions remain both effective and age appropriate.
• Provide continuous monitoring and adjustment, guided by interdisciplinary input, to maintain clinical safety and optimize outcomes.
      `.trim(),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_9647.jpg"
            alt="Child and family in joyful, supportive movement environment"
            fill
            className="object-cover brightness-[0.75]"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold text-white drop-shadow-2xl mb-6 md:mb-8">
            Our Model of Care
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white/95 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
            We don’t limit our care to a diagnosis—we meet each child where they
            are, focusing on the struggles that matter most and everyday
            difficulties parents often notice, helping them grow stronger, more
            confident, and more independent.
          </p>
        </div>
      </section>

      {/* Intro Paragraph Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our programs are designed specifically for children with
            neurological and developmental conditions as we believe in
            addressing challenges early so that each child has the best
            opportunity to grow, thrive, and reach their full potential.
          </p>
        </div>
      </section>

      {/* Core Philosophy Paragraph */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
            Our therapies are carefully tailored to meet every stage of
            development, offering age-appropriate, engaging, and effective
            activities that nurture physical, cognitive, and emotional growth.
            From playful games to structured movement and skill-building
            exercises, we ensure that each child’s journey is supported with
            care, creativity, and clinical expertise.
          </p>
        </div>
      </section>

      {/* Four Pillars */}
      <div className="relative py-16 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-blue-700 mb-10 md:mb-16">
          Our Approach
        </h2>
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#4793FF] via-[#FFB347] to-[#4793FF] rounded-full hidden lg:block" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;

            return (
              <div
                key={pillar.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center relative min-h-[380px]"
              >
                {/* Icon Circle */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md"
                  style={{ backgroundColor: `${pillar.color}15` }}
                >
                  <IconComponent size={40} className="text-[#4793FF]" />
                </div>

                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  {pillar.title}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
                  {pillar.shortDesc}
                </p>

                <button
                  onClick={() => setSelectedPillar(index)}
                  className="mt-auto inline-block px-8 py-3 rounded-full bg-[#FFB347]  text-white font-semibold text-base shadow-md hover:shadow-lg hover:from-blue-600 hover:to-[#4793FF] transform hover:scale-105 transition-all duration-300"
                >
                  Learn More →
                </button>

                {/* Connecting dot */}
                <div className="absolute -bottom-3 left-1/2 w-6 h-6 bg-white border-4 border-[#FFB347] rounded-full hidden lg:block" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for selected pillar */}
      <AnimatePresence>
        {selectedPillar !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 overflow-y-auto"
            onClick={() => setSelectedPillar(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] shadow-2xl relative overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 text-gray-600 hover:text-gray-900 text-5xl font-bold z-10"
                onClick={() => setSelectedPillar(null)}
              >
                ×
              </button>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-5 mb-10">
                  {(() => {
                    const Icon = pillars[selectedPillar].icon;
                    return (
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center shadow-md"
                        style={{
                          backgroundColor: `${pillars[selectedPillar].color}15`,
                        }}
                      >
                        <Icon size={40} className="text-[#4793FF]" />
                      </div>
                    );
                  })()}

                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                    {pillars[selectedPillar].title}
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed whitespace-pre-line">
                  {pillars[selectedPillar].details
                    .split("\n")
                    .map((line, i) => (
                      <p key={i} className="mb-4">
                        {line}
                      </p>
                    ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final CTA */}
      <div className="relative text-center py-16 px-6 bg-gradient-to-b from-blue-50/30 to-white overflow-hidden">
        {/* Decorative Image – Left */}
        <motion.div
          className="pointer-events-none absolute top-10 left-6 z-0 hidden md:block"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/pd3.jpg"
            alt=""
            width={120}
            height={120}
            className="opacity-70 -rotate-6"
          />
        </motion.div>

        {/* Decorative Image – Right */}
        <motion.div
          className="pointer-events-none absolute bottom-10 right-6 z-0 hidden md:block"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/icon3.jpg"
            alt=""
            width={140}
            height={140}
            className="opacity-70 rotate-6"
          />
        </motion.div>

        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-blue-700 mb-6">
            Ready to Begin Your Child’s Journey?
          </h3>

          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our model of care can support your
            child’s unique needs with compassion, expertise, and joy.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#FFB347] to-orange-500 hover:from-orange-500 hover:to-[#FFB347] text-white font-bold py-5 px-12 rounded-full text-xl shadow-xl transform hover:scale-105 transition duration-300"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </main>
  );
}
