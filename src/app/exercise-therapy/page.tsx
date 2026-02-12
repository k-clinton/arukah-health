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
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold text-[#FFB347]  drop-shadow-2xl mb-6 md:mb-8">
            Exercise Therapy
          </h1>

          <p className="  font-medium text-white/95 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
            We apply exercise as a cornerstone for rehabilitation – supporting
            children through everyday milestones and struggles that most.{" "}
          </p>
        </div>
      </section>

      {/* Intro Paragraph Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed"></p>
        </div>
      </section>

      {/* Core Philosophy – Our Programs */}
      <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
          {/* First paragraph + image on right */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-700 mb-8 md:mb-10">
                Our Programs
              </h2>
              <p className="text-xl text-gray-700 font-montserrat leading-relaxed font-medium max-w-4xl mx-auto lg:mx-0">
                Our Exercise programs are designed to harness the principles of
                neuroplasticity—the brain’s ability to reorganize and form new
                connections through targeted, repetitive movement. This means
                that every repetition and every movement, is a step toward
                greater independence and brighter participation in life - since
                targeted exercise improves strength, balance, and
                mobility—making everyday activities like walking, playing, and
                self-care more achievable.
              </p>
            </div>

            {/* Image on right (desktop) / below (mobile) */}
            <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/movement.jpg"
                alt="Children engaged in joyful, purposeful exercise"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Second paragraph + image on left */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image on left (desktop) / above (mobile) */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/movement.jpg"
                alt="Therapist guiding child in tailored movement activity"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="text-center lg:text-left">
              <p className="text-xl text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto lg:mx-0">
                Our interventions are evidence-based, drawing from research in
                motor learning, pediatric rehabilitation, and functional
                exercise science. Each program offers diverse exercise
                experiences that build strength, coordination, endurance, and
                confidence. The programs are designed to be fun, engaging, and
                supportive of your child’s unique journey in movement and
                physical development. All our programs are tailored to the
                specific needs and abilities of the child, ensuring that therapy
                is not only clinically effective but also safe, meaningful and
                motivating for the child. Through this approach, Arukah Health
                empowers children to achieve greater independence, resilience,
                and joy in movement. We envision a future where exercise therapy
                is recognized not just as rehabilitation, but as a pathway to
                lifelong health, independence and joyful participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Domains Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-center text-blue-700 mb-12">
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
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#FFB347] hover:shadow-xl transition-all duration-300 text-center"
              >
                <item.icon size={48} className="text-orange-600 mx-auto mb-6" />
                <h4 className="text-xl font-bold font-serif font-medium text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Image + Content Blocks (unchanged) */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-center text-blue-700 mb-12">
            Activities in Our programs{" "}
          </h3>
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
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                Playful workouts and games that build motor skills, strength,
                coordination and confidence in a safe, motivating environment.
              </p>
              <button
                onClick={() => toggleTab(0)}
                className="flex items-center gap-2 text-orange-600 font-medium hover:underline mt-4"
              >
                {openTab === 0 ? <Minus size={20} /> : <Plus size={20} />}
                Learn More
              </button>
              {openTab === 0 && (
                <div className="mt-4 pl-8 border-l-2 border-orange-600/30">
                  <ul className="space-y-3 text-gray-700 font-medium">
                    <li>
                      • Organized exercise and games employ a structured,
                      sensory-aware environment for rehabilitation, strength
                      building, and functional recovery.
                    </li>
                    <li>
                      • They utilize specialized equipment, controlled
                      environments and curated soundscapes to support precise
                      movement, focused engagement, neuromuscular re-education,
                      and emotional regulation.
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
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                Exercise sessions that strengthen muscles, improve coordination
                and boosts confidence in a fun, aquatic environment.
              </p>
              <button
                onClick={() => toggleTab(1)}
                className="flex items-center gap-2 text-orange-600 font-medium hover:underline"
              >
                {openTab === 1 ? <Minus size={20} /> : <Plus size={20} />}
                Learn More
              </button>
              {openTab === 1 && (
                <div className="mt-4 pl-8 border-l-2 border-orange-600/30">
                  <ul className="space-y-3 text-gray-700 font-medium">
                    <li>
                      • Water leverages on reduced joint stress, gentle
                      resistance, and deep relaxation— creating an optimal space
                      for strength building and restorative care.{" "}
                    </li>
                    <li>
                      • Builds coordination, cardiovascular endurance, muscle
                      Strength and flexibility through low impact movement.
                    </li>
                    <li>
                      • Enhances emotional regulation and motor planning through
                      water play.
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image
                src="/images/swimming4.jpg"
                alt="Child guided swimming session"
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
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                Outdoor experiences that build balance, stamina, resilience, and
                a love for active living.{" "}
              </p>
              <button
                onClick={() => toggleTab(2)}
                className="flex items-center gap-2 text-orange-600 font-medium hover:underline"
              >
                {openTab === 2 ? <Minus size={20} /> : <Plus size={20} />}
                Learn More
              </button>
              {openTab === 2 && (
                <div className="mt-4 pl-8 border-l-2 border-orange-600/30">
                  <ul className="space-y-3 text-gray-700 font-medium">
                    <li>
                      • Hiking utilizes varied terrain, fresh air and
                      sensory-rich stimuli to support rehabilitation, emotional
                      regulation and functional recovery.
                    </li>
                    <li>
                      • It promotes dynamic movement, proprioceptive engagement
                      and cardiovascular health, while reducing stress and
                      enhancing mood.
                    </li>
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
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                Guided cycling that enhances balance, endurance, and
                independence.
              </p>
              <button
                onClick={() => toggleTab(3)}
                className="flex items-center gap-2 text-orange-600 font-medium hover:underline"
              >
                {openTab === 3 ? <Minus size={20} /> : <Plus size={20} />}
                Learn More
              </button>
              {openTab === 3 && (
                <div className="mt-4 pl-8 border-l-2 border-orange-600/30">
                  <ul className="space-y-3 text-gray-700 font-medium">
                    <li>
                      • Cycling leverages on open air, nature-rich environments
                      to develop balance, physical strength and coordination
                      which supports gait training and overall physical
                      function.
                    </li>
                    <li>
                      • It also promotes cognitive engagement, motor planning
                      and emotional resilience through active exploration in
                      open, grounding spaces.
                    </li>
                    <li>
                      • Additionally, cycling strengthens lower limbs and
                      improves cardiovascular fitness.
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
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-blue-700 mb-6">
              Ready to Help Your Child Move with Joy?
            </h3>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white font-bold py-5 px-12 rounded-full text-xl shadow-xl transform hover:scale-105 transition duration-300"
            >
              Get Started Today →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
