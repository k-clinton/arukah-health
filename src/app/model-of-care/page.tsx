import Link from "next/link";
import Image from "next/image";
import { Users, HeartHandshake, ShieldCheck, Target } from "lucide-react";

export default function ModelOfCare() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50/20">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero / Intro */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left: Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="/images/pd2.jpg"
                alt="Child and therapist sharing a joyful moment in movement therapy"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Right: Intro Text */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-blue-700 mb-6 leading-tight">
                Our Model of Care
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                We don’t limit our care to a diagnosis—we meet each child where
                they are, focusing on the struggles that matter most and
                everyday difficulties parents often notice, helping them grow
                stronger, more confident, and more independent.
              </p>
              <p className="mt-6 text-lg font-bold md:text-xl italic text-gray-600">
                Our programs are designed specifically for children with
                neurological and developmental conditions as we believe in
                addressing challenges early so that each child has the best
                opportunity to grow, thrive, and reach their full potential.
              </p>
            </div>
          </div>

          {/* Core Philosophy Paragraph */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
              Our therapies are carefully tailored to meet every stage of
              development, offering age-appropriate, engaging, and effective
              activities that nurture physical, cognitive, and emotional growth.
              From playful games to structured movement and skill-building
              exercises, we ensure that each child’s journey is supported with
              care, creativity, and clinical expertise.
            </p>
          </div>

          {/* Four Pillars – Horizontal Line with Icons */}
          <div className="relative mb-24">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#4793FF] via-[#FFB347] to-[#4793FF] rounded-full hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
              {[
                {
                  icon: Users,
                  title: "Interdisciplinary Care",
                  color: "#1759b4",
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
                  color: "#1759b4",
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

                  <p className="text-gray-700 leading-relaxed">
                    {pillar.content}
                  </p>

                  {/* Connecting dot for line on desktop */}
                  <div className="absolute -bottom-3 left-1/2 w-6 h-6 bg-white border-4 border-[#FFB347] rounded-full hidden lg:block" />
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-blue-700 mb-6">
              Ready to Begin Your Child’s Journey?
            </h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our model of care can support your
              child’s unique needs with compassion, expertise, and joy.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#FFB347] hover:from-orange-500 hover:to-[#FFB347] text-white font-bold py-5 px-12 rounded-full text-xl shadow-xl transform hover:scale-105 transition duration-300"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
