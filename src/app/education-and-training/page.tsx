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
    <main className=" bg-white">
      <div className="pt-27 pb-24 ">
        <section className="relative  min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/IMG_9516.JPG"
              alt="Education and training background – joyful learning moment"
              fill
              className="object-cover brightness-[0.95] care"
              priority
            />
            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/45" />
          </div>

          {/* Content centered on top */}
          <div className="relative z-10 text-center px-6 max-w-5xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold text-[#0f766e] drop-shadow-2xl mb-6 md:mb-8">
              Education and Training
            </h1>

            <p className="font-medium  leading-relaxed text-white ">
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
            <p className=" font-medium   text-[#0A0504]  leading-relaxed">
              Our education and training programs are designed to equip parents,
              caregivers, and communities with the knowledge, skills, tools and
              exercise strategies needed to understand and support children with
              neuro-developmental challenges and milestone delays across diverse
              life stages and health needs. These training forums integrate
              therapeutic exercise with practical education - empowering
              participants to build body awareness, encourage safe motor
              development and confidently apply exercise principles in everyday
              routines. Whether focused on inclusive play, family coaching, or
              neuro-developmental care, each training is accessible, engaging,
              and rooted in evidence-based practice—creating a foundation for
              informed movement, empowered caregiving, and sustainable
              developmental progress.
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
              <p className="   font-bold text-[#F7E7CE] italic p-4 shadow-md bg-black font-serif rounded-md  border-3 border-[#F7E7CE] leading-relaxed">
                “Exercise knowledge is essential to supporting children with
                neuro-developmental conditions and milestone delays—because
                informed care creates consistent progress and lasting impact.”
              </p>
            </div>
          </div>

          {/* Two Specialties – Cards with Icons */}
          <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-[#0f766e] mb-6">
            Our Education and Training Specialties{" "}
          </h2>
          <div className="grid md:grid-cols-2 gap-10 mb-24">
            {[
              {
                imageUrl: "/images/inclusive.jpg",
                title: "Inclusive Movement Support",
                desc: "Adaptive exercise education tailored to children with neurological and developmental profiles—ensuring every child can participate safely, confidently, and joyfully in therapeutic exercise and play.",
                color: "#4793FF",
              },
              {
                imageUrl: "/images/movement mechanics.jpg",
                title: "Postural Awareness & Movement Mechanics",
                desc: "Practical strategies for children and caregivers to support healthy posture, reduce strain, and promote safe motor development in everyday routines—from home activities to school environments.",
                color: "#FFB347",
              },
            ].map((specialty, i) => (
              <div
                key={specialty.title}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-[#F7E7CE] hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Full-width image at top */}
                <div className="relative h-48 w-full">
                  <Image
                    src={specialty.imageUrl}
                    alt={specialty.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                  {/* Subtle overlay gradient for polish */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" />
                </div>

                {/* Card content */}
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-2xl font-serif font-bold text-[#0f766e] mb-5">
                    {specialty.title}
                  </h3>
                  <p className="text-[#0A0504]  font-medium leading-relaxed flex-grow">
                    {specialty.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Alternating Image + Content Blocks */}
          <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-[#0f766e] mb-6">
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
                <h2 className="text-2xl md:text-2xl font-serif font-bold text-[#0f766e] mb-6">
                  Partnering with Families for Lasting Progress
                </h2>
                <p className="font-medium text-[#0A0504]  leading-relaxed">
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
                <h2 className="text-2xl md:text-2xl font-serif font-bold text-[#0f766e] mb-6">
                  Setting the Foundations for Safe and Healthy Exercise
                </h2>
                <p className=" font-medium text-[#0A0504]  leading-relaxed">
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
                <h2 className="text-2xl  font-serif font-bold text-[#0f766e] mb-6">
                  Creating Inclusive Spaces for Exercise and Movement
                </h2>
                <p className=" font-medium text-[#0A0504]  leading-relaxed">
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
              <h3 className="text-2xl md:text-2xl font-serif font-bold text-[#0f766e] mb-6">
                Ready to Empower Yourself, Your Family or Community?
              </h3>
              <Link
                href="/contact"
                className="inline-block bg-[#0f766e]  text-white font-bold py-5 px-12 rounded-full text-xl shadow-xl transform hover:scale-105 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
