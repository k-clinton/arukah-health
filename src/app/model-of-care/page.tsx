"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const carouselImages = [
  "/images/model1.png",
  "/images/model2.png",
  "/images/model3.png",
];

export default function ModelOfCare() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // change speed here (5000 = 5 seconds)

    return () => clearInterval(interval);
  }, []);

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
      imageUrl: "/images/goals4.jpg",
      details: `
Our programs are designed to achieve measurable, functional outcomes that are monitored, tracked and adjusted to maximize long term developmental potential. Parents can expect:
<br>
<strong>• Improved mobility and motor function</strong>: Enhanced gait, balance, coordination, and overall physical capacity.<br>
<strong>• Greater independence in daily activities</strong> such as feeding, dressing, walking and participation in age appropriate routines.<br>
<strong>• Reduced risk of secondary musculoskeletal complications</strong> such as contractures, postural deformities, and activity limitations.<br>
<strong>• Cognitive development, social engagement and enhanced participation</strong> within educational and recreational settings.

`.trim(),
    },
    {
      title: "Family & Caregiver Involvement",
      color: "#4793FF",
      shortDesc:
        "Partnership with families, caregivers, and communities to ensure progress continues outside the clinic.",
      imageUrl: "/images/caregiver3.jpg",
      details:
        `We recognize parents and caregivers as essential partners in the therapy journey. We provide tools, training, and encouragement so that progress continues beyond the clinic and into everyday life. Families can expect:
  <br>
<strong>• Home strategies</strong> that equip caregivers with exercises and routines that reinforce therapy goals in daily settings.<br>
<strong>• Practical training and empowerment</strong> that builds caregiver skills to reduce anxiety and foster a supportive environment for the child.<br>
<strong>• Consistency across environments</strong>: ensuring therapeutic practices are carried over into home, school, and community life.<br>
<strong>• Inclusive exercise activities</strong>  that promote connection, resilience, and strengthen family bonds.<br>
<strong>• Collaborative decision making</strong> that involve caregivers in treatment planning to align therapy with family priorities and values.
`.trim(),
    },
    {
      title: "Safety & Individualization",
      color: "#FFB347",
      shortDesc:
        "Safe, supportive environments coupled with customized plans for effective, age appropriate progress.",
      imageUrl: "/images/safety24.jpg",
      details:
        `Therapy sessions are delivered within a supervised, safe, and supportive environment, ensuring that every child’s medical profile and developmental needs are fully considered. Each program is individually tailored through comprehensive assessment of neurological status, functional capacity, and co existing medical conditions. This process allows us to:
 <br>
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
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Title – always visible */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-extrabold text-[#0f766e] leading-tight ">
                Our Model of Care
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

      {/* Core Philosophy Paragraph */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className=" text-black leading-relaxed font-medium">
            Our care framework is built on four pillars that shape how we
            support children in exercise therapy.
          </p>
        </div>
      </section>

      {/* Four Pillars – with full-width images instead of icons */}
      <div className="relative py-16 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#0f766e] mb-10 md:mb-16">
          Our 4 Pillars
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-white rounded-3xl text-[#0f766e] shadow-lg hover:shadow-xl transition-all  duration-300 border-2 border-[#F7E7CE] flex flex-col hover:scale-105 relative min-h-[480px] overflow-hidden hover:border-[#F7E7CE]  "
            >
              {/* Full-width top image */}
              <div className="relative h-88 w-full">
                <Image
                  src={pillar.imageUrl}
                  alt={pillar.title}
                  fill
                  className="object-cover object-top"
                />
                {/* Subtle overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow items-center text-center">
                <h3 className="text-2xl font-serif font-bold text-[#0f766e] mb-4">
                  {pillar.title}
                </h3>

                <p className="text-black font-medium leading-relaxed mb-8 flex-grow">
                  {pillar.shortDesc}
                </p>

                <button
                  onClick={() => setSelectedPillar(index)}
                  className="mt-auto inline-block px-8 py-3 rounded-full bg-[#F7E7CE] text-black font-semibold text-base shadow-xl hover:shadow-lg hover:from-blue-600 hover:to-[#4793FF] transform hover:scale-105 transition-all duration-300"
                >
                  Learn More →
                </button>
              </div>

              {/* Connecting dot */}
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
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f766e]">
                    {pillars[selectedPillar].title}
                  </h2>
                </div>

                <div
                  className="prose prose-lg max-w-none text-black leading-relaxed"
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
        <h3 className="text-2xl md:text-2xl font-serif font-bold text-[#0f766e] mb-6">
          Exercise is Medicine
        </h3>

        <Link
          href="/contact"
          className="inline-block bg-[#F7E7CE] text-black font-bold py-5 px-12 rounded-full text-xl shadow-xl transform hover:scale-105 transition duration-300"
        >
          Get Started →
        </Link>
      </div>
    </main>
  );
}
