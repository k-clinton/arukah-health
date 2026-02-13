// src/app/education-and-training/page.tsx

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
      <div className="pt-32 pb-24">
        <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/IMG_9516.JPG"
              alt="Education and training background – joyful learning moment"
              fill
              className="object-cover brightness-[0.95]"
              priority
            />
            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/45" />
          </div>

          {/* Content centered on top */}
          <div className="relative z-10 text-center px-6 max-w-5xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold text-[#FFB347] drop-shadow-2xl mb-6 md:mb-8">
              Education and Training
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white/95 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              Training sessions designed to build capacity and increase
              knowledge among individuals, caregivers, parents, families and
              communities.
            </p>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero / Intro */}

          {/* Core Message */}
          <div className="max-w-5xl mt-10 mx-auto  mb-20">
            <p className=" font-medium text-gray-800 leading-relaxed">
              Our education and training programs are designed to equip parents,
              caregivers, and communities with the knowledge, skills, tools and
              exercise strategies needed to understand and support to support
              children with neuro-developmental challenges and milestone delays
              across diverse life stages and health needs. These training forums
              integrate therapeutic exercise with practical education -
              empowering participants to build body awareness, encourage safe
              motor development and confidently apply exercise principles in
              everyday routines. Whether focused on inclusive play, family
              coaching, or neuro-developmental care, each training is
              accessible, engaging, and rooted in evidence-based
              practice—creating a foundation for informed movement, empowered
              caregiving, and sustainable developmental progress.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 mb-20 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/educare.jpeg"
                alt="Group of parents learning inclusive movement strategies"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="text-lg  text-orange-500 italic p-4 shadow-md rounded-md text-gray-700 leading-relaxed">
                “Exercise knowledge is essential to supporting children with
                neuro developmental conditions and milestone delays—because
                informed care creates consistent progress and lasting impact.”
              </p>
            </div>
          </div>

          {/* Two Specialties – Cards with Icons */}
          <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-blue-700 mb-6">
            Our Education and Training Specialties{" "}
          </h2>
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
          <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-blue-700 mb-6">
            Why Education and Training?{" "}
          </h2>
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
                  Partnering with Families for Lasting Progress
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
                  Setting the Foundations for Safe and Healthy Exercise
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Body awareness, motor planning, and postural stability &
                  control form the foundation of healthy movement and exercise.
                  We teach simple, effective techniques that reduce strain,
                  prevent complications, and promote healthy development in
                  everyday life — helping children move and exercise with more
                  ease, safety, and joy.
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
                  Creating Inclusive Spaces for Exercise and Movement
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Inclusive environments are vital for ensuring every child can
                  participate, grow, and thrive through movement. Our programs
                  extend beyond the family, equipping teachers, community
                  leaders, and support networks with the tools to foster spaces
                  where all children feel supported and empowered in matters
                  exercise and movement.
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
