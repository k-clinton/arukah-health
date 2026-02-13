"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ModelOfCare() {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const pillars = [
    {
      title: "Interdisciplinary Care",
      color: "#4793FF",
      shortDesc:
        "Coordinated teamwork and collaboration from different healthcare specialists.",
      imageUrl: "/images/doctors.jpg",
      details: `
We work in collaboration with pediatricians, neurologists, physiotherapists, occupational therapists, and speech language pathologists, ensuring that therapeutic exercise interventions are aligned with medical, functional, and developmental priorities. This coordinated framework allows for:
<br><br>
<strong>• Comprehensive assessment</strong> that synthesizes medical, neurological, and functional findings.<br>
<strong>• Individualized treatment planning</strong> informed by cross disciplinary expertise.<br>
<strong>• Continuity of care</strong> across medical, therapeutic, and community settings.<br>
<strong>• Evidence-based interventions</strong> that address motor, cognitive, communicative, and psychosocial domains.
      `.trim(),
    },
    {
      title: "Outcomes & Goals",
      color: "#FFB347",
      shortDesc:
        "Meaningful, measurable goals to ensure longevity and long term progress.",
      imageUrl: "/images/goals.jpg",
      details: `
Our programs are designed to achieve measurable, functional outcomes that are monitored, tracked and adjusted to maximize long term developmental potential. Through evidence based exercise therapy and interdisciplinary collaboration, families can expect:
<br><br>
<strong>• Improved mobility and motor function</strong>: targeted interventions to enhance gait, balance, coordination, and overall physical capacity.<br>
<strong>• Greater independence in daily activities</strong>: skill development that supports self care, feeding, dressing, and participation in age appropriate routines.<br>
<strong>• Reduced risk of secondary complications</strong>: proactive strategies to minimize musculoskeletal issues such as contractures, postural deformities, and activity limitations.<br>
<strong>• Enhanced participation in school and play</strong>: integration of therapeutic activities that promote inclusion, social engagement, and cognitive development within educational and recreational settings.
      `.trim(),
    },
    {
      title: "Family & Caregiver Involvement",
      color: "#4793FF",
      shortDesc:
        "Partnership with families, caregivers, and communities to ensure progress continues outside the clinic.",
      imageUrl: "/images/care involment.jpg",
      details: `
Our model of care recognizes parents and caregivers as essential partners in the therapeutic journey. We provide tools, training, and encouragement so that progress continues beyond the clinic and into everyday life. Families can expect:
<br><br>
<strong>• Practical training and home strategies</strong>: equipping caregivers with exercises and routines that reinforce therapy goals in daily settings.<br>
<strong>• Confidence and empowerment</strong>: building caregiver skills to reduce anxiety and foster a supportive environment for the child.<br>
<strong>• Consistency across environments</strong>: ensuring therapeutic practices are carried over into home, school, and community life.<br>
<strong>• Strengthened family bonds</strong>: encouraging shared activities that promote connection, resilience, and joy in movement.<br>
<strong>• Collaborative decision making</strong>: involving caregivers in treatment planning to align therapy with family priorities and values.
      `.trim(),
    },
    {
      title: "Safety & Individualization",
      color: "#FFB347",
      shortDesc:
        "Safe, supportive environments coupled with customized plans for effective, age appropriate progress.",
      imageUrl: "/images/safety.jpg",
      details: `
Our interventions are delivered within a supervised, safe, and supportive environment, ensuring that every child’s medical profile and developmental needs are fully considered. Each program is individually tailored through comprehensive assessment of neurological status, functional capacity, and co existing medical conditions. This process allows us to:
<br><br>
<strong>• Customize therapy plans</strong> to align with each child’s medical history, current health status, and developmental stage.<br>
<strong>• Implement risk mitigation strategies</strong> to safeguard against injury, fatigue, or secondary complications during therapy.<br>
<strong>• Adapt activities and intensity levels</strong> to ensure interventions remain both effective and age appropriate.<br>
<strong>• Provide continuous monitoring and adjustment</strong>, guided by interdisciplinary input, to maintain clinical safety and optimize outcomes.
      `.trim(),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex mt-19 items-center justify-center">
        <div className="absolute pt-10 inset-0">
          <Image
            src="/images/IMG_9647.jpg"
            alt="Child and family in joyful, supportive movement environment"
            fill
            className="object-cover brightness-[0.75] care"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold text-white drop-shadow-2xl mb-6 md:mb-8">
            Our Model of Care
          </h1>
        </div>
      </section>

      {/* Core Philosophy Paragraph */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
            Grounded in clinical research and guided by compassion, our model of
            care brings together expertise and personalization to meet each
            child’s unique needs. We focus on building strong foundations for
            development, independence, and meaningful participation in everyday
            life.
          </p>
        </div>
      </section>

      {/* Four Pillars – with full-width images instead of icons */}
      <div className="relative py-16 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-blue-700 mb-10 md:mb-16">
          Our 4 Pillars
        </h2>

        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#4793FF] via-[#FFB347] to-[#4793FF] rounded-full hidden lg:block" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-white rounded-3xl text-blue-700 shadow-lg hover:shadow-2xl transition-all  duration-300 border-4 border-blue-700 flex flex-col hover:scale-105 relative min-h-[480px] overflow-hidden hover:border-orange-600  "
            >
              {/* Full-width top image */}
              <div className="relative h-48 w-full">
                <Image
                  src={pillar.imageUrl}
                  alt={pillar.title}
                  fill
                  className="object-cover object-center"
                />
                {/* Subtle overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow items-center text-center">
                <h3 className="text-2xl font-serif font-bold text-blue-700 mb-4">
                  {pillar.title}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
                  {pillar.shortDesc}
                </p>

                <button
                  onClick={() => setSelectedPillar(index)}
                  className="mt-auto inline-block px-8 py-3 rounded-full bg-[#FFB347] text-white font-semibold text-base shadow-md hover:shadow-lg hover:from-blue-600 hover:to-[#4793FF] transform hover:scale-105 transition-all duration-300"
                >
                  Learn More →
                </button>
              </div>

              {/* Connecting dot */}
              <div className="absolute -bottom-3 left-1/2 w-6 h-6 bg-white border-4 border-[#FFB347] rounded-full hidden lg:block" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal – now using dangerouslySetInnerHTML */}
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
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center shadow-md"
                    style={{
                      backgroundColor: `${pillars[selectedPillar].color}15`,
                    }}
                  ></div>

                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                    {pillars[selectedPillar].title}
                  </h2>
                </div>

                <div
                  className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: pillars[selectedPillar].details,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final CTA */}
      <div className="text-center py-16 px-6 bg-gradient-to-b from-blue-50/30 to-white">
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
    </main>
  );
}
