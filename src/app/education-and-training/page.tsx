// src/app/education-and-training/page.tsx
import Navbar from "@/components/Navbar";
import {
  BookOpen,
  Users,
  HeartHandshake,
  Baby,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EducationAndTraining() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero / Intro */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Left: Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="/images/IMG_9516.JPG"
                alt=""
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Right: Intro Text */}
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-blue-700 mb-8 leading-tight">
                Education & Training
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                Empowering parents, caregivers, and communities with the
                knowledge, skills, tools, and movement strategies to support
                children with neurological and developmental challenges across
                all life stages and health needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our training integrates therapeutic exercise with practical
                education — helping participants build body awareness, encourage
                safe motor development, and confidently apply exercise
                principles in everyday routines. Whether focused on inclusive
                play, family coaching, or neurodevelopmental care, each session
                is accessible, engaging, and rooted in evidence-based practice.
              </p>
            </div>
          </div>

          {/* Core Message */}
          <div className="max-w-5xl mx-auto text-center mb-20">
            <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed">
              We create a foundation for informed movement, empowered
              caregiving, and sustainable developmental progress — turning
              knowledge into everyday confidence and joy.
            </p>
          </div>

          {/* Two Specialties – Cards with Icons */}
          <div className="grid md:grid-cols-2 gap-10 mb-24">
            {[
              {
                icon: Baby,
                title: "Inclusive Movement Support",
                desc: "Adaptive exercise education tailored to children with neurological and developmental profiles—ensuring every child can participate safely, confidently, and joyfully in therapeutic exercise and play.",
                color: "#4793FF",
              },
              {
                icon: Users,
                title: "Postural Awareness & Movement Ergonomics",
                desc: "Practical strategies for children and caregivers to support healthy posture, reduce strain, and promote safe motor development in everyday routines—from home activities to school environments.",
                color: "#FFB347",
              },
            ].map((specialty, i) => (
              <div
                key={specialty.title}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-6">
                  <specialty.icon size={32} className="text-[#4793FF]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-5">
                  {specialty.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {specialty.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Alternating Image + Content Blocks */}
          <div className="space-y-24">
            {/* Block 1: Image left / Content right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/edu11.jpg"
                  alt="Group of parents learning inclusive movement strategies"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-700 mb-6">
                  Empowering Caregivers as Partners
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe parents and caregivers are the most important
                  members of the team. Our training equips them with practical
                  tools, confidence, and strategies to support their
                  child&apos;s development at home, school, and in the community
                  — creating consistency and extending progress far beyond
                  therapy sessions.
                </p>
              </div>
            </div>

            {/* Block 2: Content left / Image right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-700 mb-6">
                  Building Body Awareness & Safe Motor Habits
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From postural awareness to movement ergonomics, we teach
                  simple, effective techniques that reduce strain, prevent
                  complications, and promote healthy development in everyday
                  life — helping children move with more ease, safety, and joy.
                </p>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
                <Image
                  src="/images/edu22.jpg"
                  alt=""
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Block 3: Image left / Content right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/edu33.jpg"
                  alt=""
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-700 mb-6">
                  Inclusive & Community-Focused
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our programs extend beyond the family — we train teachers,
                  community leaders, and support networks to create inclusive
                  environments where every child can participate, grow, and
                  thrive through movement.
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center mt-20">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-blue-700 mb-6">
                Ready to Empower Your Family & Community?
              </h3>
              <Link
                href="/contact"
                className="inline-block bg-orange-400 hover:from-orange-500 hover:to-[#FFB347] text-white font-bold py-5 px-12 rounded-full text-xl shadow-xl transform hover:scale-105 transition duration-300"
              >
                Join a Training Session →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
