"use client";
import { Users, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ModelOfCare() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/model-care-hero.jpg" // ← Replace with your actual hero background image
            alt="Child and family in joyful, supportive movement environment"
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

      {/* Four Pillars – Horizontal Line with Icons */}
      <div className="relative mb-24 py-16 px-6 bg-white">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#4793FF] via-[#FFB347] to-[#4793FF] rounded-full hidden lg:block" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
          {[
            {
              icon: Users,
              title: "Interdisciplinary Care",
              color: "#4793FF",
              content:
                "We collaborate with pediatricians, neurologists, physiotherapists, occupational therapists, and speech-language pathologists to align exercise interventions with medical, functional, and developmental priorities.",
            },
            {
              icon: Target,
              title: "Outcomes & Goals",
              color: "#FFB347",
              content:
                "Measurable, functional outcomes are monitored and adjusted to maximize long-term potential — improved mobility, greater independence, reduced complications, and enhanced participation in school and play.",
            },
            {
              icon: HeartHandshake,
              title: "Family & Caregiver Involvement",
              color: "#4793FF",
              content:
                "Parents and caregivers are essential partners. We provide training, home strategies, empowerment, consistency across environments, and collaborative decision-making to support progress in daily life.",
            },
            {
              icon: ShieldCheck,
              title: "Safety & Individualization",
              color: "#FFB347",
              content:
                "Every program is supervised, safe, and fully tailored through comprehensive assessment of neurological status, functional capacity, and medical conditions — with continuous monitoring and adaptation.",
            },
          ].map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center relative"
            >
              {/* Icon Circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md"
                style={{ backgroundColor: `${pillar.color}15` }}
              >
                <pillar.icon size={40} className="text-[#4793FF]" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                {pillar.title}
              </h3>

              <p className="text-gray-700 leading-relaxed">{pillar.content}</p>

              {/* Connecting dot for line on desktop */}
              <div className="absolute -bottom-3 left-1/2 w-6 h-6 bg-white border-4 border-[#FFB347] rounded-full hidden lg:block" />
            </div>
          ))}
        </div>
      </div>

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
            src="/images/pd3.jpg"
            alt=""
            width={140}
            height={140}
            className="opacity-70 rotate-6"
          />
        </motion.div>

        {/* Existing Content (UNCHANGED) */}
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#4793FF] mb-6">
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
