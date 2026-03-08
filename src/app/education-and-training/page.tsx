"use client";

import { motion } from "framer-motion";
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
        <section className="relative mb-19 pb-15 mt-11 min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-white overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Title */}
              <div className="text-left order-1">
                <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl font-serif font-extrabold text-[#0f766e] leading-tight ">
                  Education and Training
                </h1>

                {/* Optional tagline (feel free to remove or customize) */}
              </div>

              {/* Right: Decorative floating image */}
              <div className="relative order-2 flex justify-center lg:justify-end mt-12 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 80, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  whileHover={{ scale: 1.06, rotate: 0, y: -20 }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  className="relative w-[90%] max-w-md lg:max-w-xl -mr-8 lg:-mr-16"
                >
                  {/* Floating image – clean, no border/frame */}
                  <div className="relative rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/edut3.jpg"
                      alt="Joyful learning and training moment"
                      width={1200}
                      height={900}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>

                  {/* Soft decorative glow accents behind the image */}
                  <div className="absolute -bottom-16 -right-16 w-64 h-64 md:w-96 md:h-96 bg-[#0f766e]/10 rounded-full blur-3xl -z-10" />
                  <div className="absolute -top-12 -left-12 w-40 h-40 md:w-64 md:h-64 bg-[#FFB347]/10 rounded-full blur-3xl -z-10" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Core Message */}
          <div className="max-w-5xl mt-10 mx-auto  mb-20">
            <p className=" font-medium   text-[#0A0504]  leading-relaxed">
              We offer education and training programs designed to equip
              parents, caregivers, and communities with the knowledge, skills,
              tools and exercise strategies needed to understand and support
              neuro-diverse children and those with milestone delays across
              diverse life stages and health needs. These training forums
              integrate therapeutic exercise with practical education -
              empowering participants to build body awareness, encourage safe
              motor development and confidently apply exercise principles in
              everyday routines. Each training is accessible, engaging, and
              rooted in research-based practice—creating a foundation for
              informed movement, empowered caregiving, and sustainable
              developmental progress.
            </p>
          </div>

          {/* Two Specialties – Cards with Icons */}
          <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-[#0f766e] mb-6">
            Core Courses{" "}
          </h2>
          <div className="grid md:grid-cols-2 gap-10 mb-24">
            {[
              {
                imageUrl: "/images/inclusive.jpg",
                title: "Inclusive Movement Support",
                desc: "A course designed to equip parents, caregivers, educators, and therapists with strategies to create safe, engaging, and adaptable exercise experiences. It covers principles of motor learning, sensory integration, environment adaptation, equipment modification and emotional regulation, ensuring that every child is accommodated to move and progress at their own pace.",
                color: "#4793FF",
              },
              {
                imageUrl: "/images/movement mechanics.jpg",
                title: "Postural Awareness & Movement Mechanics",
                desc: "A course designed to help caregivers, educators, and therapists understand how posture and body alignment influence movement, function, and overall well-being. It covers strategies for teaching children how to develop safe, efficient movement patterns that support strength, coordination, and long-term physical health. ",
                color: "#FFB347",
              },
            ].map((specialty, i) => (
              <div
                key={specialty.title}
                className="bg-[#F7E7CE] rounded-2xl overflow-hidden shadow-xl border-2 border-[#F7E7CE] hover:shadow-2xl transition-all duration-300 flex flex-col"
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
                <div className="p-8 md:p-10 bg-[#F7E7CE] flex flex-col flex-grow">
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

          <section className="py-6 pb-20 md:py-24 px-6 bg-gradient-to-b from-white to-blue-50/30">
            <div className="max-w-7xl mx-auto">
              {/* Optional heading – remove if you want pure image section */}

              {/* Centered image container */}
              <div className="relative mx-auto max-w-4xl">
                {/* Subtle decorative ring / glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[90%] md:w-[85%] aspect-square rounded-full bg-gradient-to-r from-[#4793FF]/10 via-[#FFB347]/20 to-[#4793FF]/10 blur-3xl opacity-70" />
                </div>

                {/* Main centered image */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border-4 border-white/80">
                  <Image
                    src="/images/P1180403.JPG"
                    alt="Centered hero moment – joyful child or family in movement"
                    width={1200}
                    height={1200}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {/* Optional subtle caption or call-to-action below image */}
              </div>
            </div>
          </section>

          {/* Alternating Image + Content Blocks */}
          <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-[#0f766e] mb-6">
            Why Education and Training?{" "}
          </h2>
          <div className="space-y-24">
            {/* Block 1: Image left / Content right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
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
                  Lasting Progress
                </h2>
                <p className="font-medium text-[#0A0504]  leading-relaxed">
                  Parents and caregivers are the most important members of the
                  team. Training equips them with practical tools, confidence,
                  and strategies to support their child&apos;s development at
                  home, school, and in the community — creating consistency and
                  extending progress far beyond therapy sessions.
                </p>
              </div>
            </div>

            {/* Block 2: Content left / Image right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl md:text-2xl font-serif font-bold text-[#0f766e] mb-6">
                  Strong Foundation for Safe Exercise
                </h2>
                <p className=" font-medium text-[#0A0504]  leading-relaxed">
                  Body awareness, motor planning, and postural stability &
                  control form the foundation of healthy movement and exercise.
                  Training equips individuals with simple, effective techniques
                  that reduce strain, prevent complications, and promote healthy
                  development in children’s everyday life — helping them move
                  and exercise with more ease, safety, and joy.
                </p>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl order-1 lg:order-2">
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
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
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
                  Creation of Inclusive Spaces
                </h2>
                <p className=" font-medium text-[#0A0504]  leading-relaxed">
                  Inclusive environments ensure that every child can
                  participate, grow, and thrive in movement. Training equip
                  teachers, community leaders, and support networks with the
                  tools to foster spaces where all children feel supported and
                  empowered in matters exercise and movement.
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center mt-20">
              <h3 className="text-2xl md:text-2xl font-serif font-bold text-[#0f766e] mb-6">
                Knowledge is Power
              </h3>
              <Link
                href="/contact"
                className="inline-block bg-[#F7E7CE]  text-black font-bold py-5 px-12 rounded-full text-xl shadow-xl transform hover:scale-105 transition duration-300"
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
