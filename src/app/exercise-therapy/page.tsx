"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  Dumbbell,
  Baby,
  Footprints,
  Waves,
  Bike,
  Mountain,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ExerciseTherapy() {
  const [openTab, setOpenTab] = useState<number | null>(null);

  const toggleTab = (index: number) => {
    setOpenTab(openTab === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_9696.jpg"
            alt="Joyful child in movement therapy environment"
            fill
            className="object-cover brightness-[0.75]"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content on top */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold text-white drop-shadow-2xl mb-6 md:mb-8">
            Exercise Therapy
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white/95 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
            Supporting children with neuro-developmental challenges through
            exercise—meeting them not by diagnosis, but by the everyday
            milestones and struggles that matter most.
          </p>
        </div>
      </section>

      {/* Intro Paragraph Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Neuro-developmental conditions and milestone delays often bring
            complex physical challenges: impaired motor control, reduced
            strength & endurance, balance/coordination deficits, limited
            flexibility, and altered proprioception. These can restrict daily
            participation, independence, and quality of life.
          </p>
        </div>
      </section>

      {/* Core Philosophy – Our Programs */}
      <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4793FF] mb-8 md:mb-10">
            Our Programs
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Our Exercise Therapy programs are built on the principle of
            neuroplasticity—the brain’s remarkable ability to reorganize and
            form new connections through targeted, repetitive movement. We
            translate science into hope: every repetition, every playful step,
            becomes a building block toward greater independence, brighter
            participation, and lifelong joy in movement.
          </p>
        </div>
      </section>

      {/* Key Domains Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#4793FF] mb-12">
            Key Areas We Strengthen
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Dumbbell,
                title: "Muscular Strength & Endurance",
                desc: "Building postural stability, gait support, and sustained activity tolerance",
              },
              {
                icon: Footprints,
                title: "Balance & Coordination",
                desc: "Reducing fall risk and growing motor confidence",
              },
              {
                icon: Waves,
                title: "Flexibility & Mobility",
                desc: "Minimizing contractures and expanding range of motion",
              },
              {
                icon: Baby,
                title: "Proprioception & Sensory Integration",
                desc: "Refining body awareness and movement precision",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <item.icon size={48} className="text-[#FFB347] mx-auto mb-6" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Image + Content Blocks (unchanged) */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Block 1: Image left */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/bg7.jpg"
                alt="Child enjoying water-based exercise therapy"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-700 mb-6">
                Structured & Play-Based Exercise
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Playful workouts and games build motor skills, strength,
                coordination, and confidence in a safe, motivating environment.
                Every activity is purposeful, fun, and tailored to your
                child&apos;s unique abilities.
              </p>
              <button
                onClick={() => toggleTab(0)}
                className="flex items-center gap-2 text-[#FFB347] font-medium hover:underline mt-4"
              >
                {openTab === 0 ? <Minus size={20} /> : <Plus size={20} />}
                Learn More
              </button>
              {openTab === 0 && (
                <div className="mt-4 pl-8 border-l-2 border-[#FFB347]/30">
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      • Organized exercise and games employ a structured,
                      sensory-aware environment for rehabilitation, strength
                      building, and functional recovery utilizing specialized
                      equipment, controlled environments and curated soundscapes
                      to support precise movement, focused engagement,
                      neuromuscular re-education, and emotional regulation.
                    </li>
                    <li>
                      • Purposeful exercise and games activate strength, restore
                      alignment, enhance mobility and deepen body awareness
                      through structured, supportive movement.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Block 2: Image right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-700 mb-6">
                Swimming Lessons
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Water provides reduced joint stress, gentle resistance, and deep
                relaxation—creating the perfect space for strength building,
                sensory regulation, and restorative care.
              </p>
              <button
                onClick={() => toggleTab(1)}
                className="flex items-center gap-2 text-[#FFB347] font-medium hover:underline"
              >
                {openTab === 1 ? <Minus size={20} /> : <Plus size={20} />}
                Learn More
              </button>
              {openTab === 1 && (
                <div className="mt-4 pl-8 border-l-2 border-[#FFB347]/30">
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      • Builds coordination, cardiovascular endurance, muscle
                      strength, and flexibility
                    </li>
                    <li>
                      • Low-impact environment ideal for motor planning and
                      sensory integration
                    </li>
                    <li>
                      • Boosts confidence and emotional regulation through water
                      play
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image
                src="/images/IMG_2325.jpg"
                alt="Child guided cycling session outdoors"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Block 3: Image left */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hiking.jpg"
                alt="Child hiking with support in nature"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-700 mb-6">
                Hiking Sessions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Outdoor adventures on varied terrain engage proprioception,
                cardiovascular health, emotional regulation, and functional
                recovery in nature-rich environments.
              </p>
              <button
                onClick={() => toggleTab(2)}
                className="flex items-center gap-2 text-[#FFB347] font-medium hover:underline"
              >
                {openTab === 2 ? <Minus size={20} /> : <Plus size={20} />}
                Learn More
              </button>
              {openTab === 2 && (
                <div className="mt-4 pl-8 border-l-2 border-[#FFB347]/30">
                  <ul className="space-y-3 text-gray-700">
                    <li>• Promotes dynamic movement, balance, and stamina</li>
                    <li>
                      • Reduces stress and enhances mood through nature exposure
                    </li>
                    <li>• Builds resilience and love for active living</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Block 4: Image right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-700 mb-6">
                Biking Sessions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Guided cycling in open-air environments develops balance,
                cognitive engagement, lower-limb strength, coordination, and
                emotional resilience.
              </p>
              <button
                onClick={() => toggleTab(3)}
                className="flex items-center gap-2 text-[#FFB347] font-medium hover:underline"
              >
                {openTab === 3 ? <Minus size={20} /> : <Plus size={20} />}
                Learn More
              </button>
              {openTab === 3 && (
                <div className="mt-4 pl-8 border-l-2 border-[#FFB347]/30">
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      • Strengthens lower limbs and improves cardiovascular
                      fitness
                    </li>
                    <li>
                      • Supports gait training and overall physical function
                    </li>
                    <li>
                      • Encourages exploration and motor planning in nature
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image
                src="/images/biking.jpg"
                alt="Child in structured play-based exercise session"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-20">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#4793FF] mb-6">
              Ready to Help Your Child Move with Joy?
            </h3>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#FFB347] to-orange-500 hover:from-orange-500 hover:to-[#FFB347] text-white font-bold py-5 px-12 rounded-full text-xl shadow-xl transform hover:scale-105 transition duration-300"
            >
              Get Started Today →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
