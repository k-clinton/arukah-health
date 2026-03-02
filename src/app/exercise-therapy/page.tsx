"use client";

import { useState, useEffect } from "react";
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
import { motion, AnimatePresence } from "framer-motion";

// Reusable Carousel Component
function Carousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change interval here (5000ms = 5 seconds)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Program image ${currentIndex + 1}`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={currentIndex < 2}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-orange-500 scale-125"
                : "bg-white/60 hover:bg-white/90"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ExerciseTherapy() {
  const [openTab, setOpenTab] = useState<number | null>(null);

  const toggleTab = (index: number) => {
    setOpenTab(openTab === index ? null : index);
  };

  // Example placeholders — replace with your actual 10 images
  const leftCarouselImages = [
    "/images/IMG_2388 (2).jpg",
    "/images/IMG_9537.jpg",
    "/images/IMG_9834 (1).jpg",
    "/images/IMG_9567.jpg",
    "/images/IMG_9674.jpg",
  ];

  const rightCarouselImages = [
    "/images/IMG_9761 (1).jpg",
    "/images/IMG_9682.jpg",
    "/images/IMG_9544.jpg",
    "/images/IMG_9642 (1).jpg",
    "/images/IMG_9761 (1).jpg",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_9696.jpg"
            alt="Joyful child in movement therapy environment"
            fill
            className="object-cover brightness-[0.75]"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold text-white drop-shadow-2xl mb-6 md:mb-8">
            Exercise Therapy
          </h1>
        </div>
      </section>

      {/* Intro Paragraph Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed"></p>
        </div>
      </section>

      {/* Core Philosophy – Our Programs with carousels */}
      <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
          {/* First paragraph + carousel on right */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <p className="prose prose-lg text-gray-700   font-medium  leading-relaxed space-y-6">
                We apply exercise as a cornerstone for improving health,
                restoring function, and supporting recovery. Our programs use
                structured, medically guided exercise, tailored to a child’s
                specific needs, abilities, and goals. Exercises are chosen to
                correct impairments, strengthen muscles, improve flexibility,
                build endurance, enhance balance and maintain overall well-being
              </p>
            </div>

            {/* Carousel on right */}
            <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl h-64 md:h-96">
              <Carousel images={leftCarouselImages} />
            </div>
          </div>

          {/* Second paragraph + carousel on left */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Carousel on left */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-64 md:h-96">
              <Carousel images={rightCarouselImages} />
            </div>

            <div className="text-center lg:text-left">
              <p className="prose prose-lg text-gray-700   font-medium  leading-relaxed space-y-6">
                Our programs are evidence-based, drawing from research in motor
                learning, pediatric rehabilitation, and functional exercise
                science. Rooted in this foundation, the programs are designed to
                be fun, engaging, and supportive of each child’s unique journey
                in movement and physical development.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Domains Cards */}
      {/* Key Areas Of Focus Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#0f766e] mb-12"></h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                imageUrl: "/images/muscle.jpg",
                title: "Muscular Strength & Endurance",
                desc: "Building postural stability, gait support, and sustained activity tolerance.",
                theme: "orange",
              },
              {
                imageUrl: "/images/balance.jpg",
                title: "Balance & Coordination",
                desc: "Reducing fall risk and growing motor confidence.",
                theme: "blue",
              },
              {
                imageUrl: "/images/flexibility.jpg",
                title: "Flexibility & Mobility",
                desc: "Minimizing contractures and expanding range of motion.",
                theme: "orange",
              },
              {
                imageUrl: "/images/sensory.jpg",
                title: "Proprioception & Sensory Integration",
                desc: "Refining body awareness and movement precision.",
                theme: "blue",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group bg-[#F7E7CE] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border-2 ${
                  item.theme === "orange"
                    ? "border-[#F7E7CE] hover:[#F7E7CE] "
                    : "border-[#F7E7CE] hover:[#F7E7CE] "
                } hover:scale-105 hover:shadow-xl flex flex-col`}
              >
                {/* Full-width image at top */}
                <div className="relative h-48 w-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-1o5"
                  />
                  {/* Subtle overlay on hover for polish */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card content */}
                <div className="p-8 flex flex-col flex-grow items-center text-center">
                  <h4 className="text-xl font-bold font-serif text-[#0f766e] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 font-medium flex-grow">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Image + Content Blocks */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#0f766e] mb-12">
            Activities in Our programs{" "}
          </h3>

          {/* Block 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F7E7CE] shadow-2xl">
              <Image
                src="/images/bg7.jpg"
                alt="Child enjoying water-based exercise therapy"
                width={1000}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-2xl font-serif font-bold text-[#0f766e] mb-6">
                Structured & Play-Based Exercise
              </h2>
              <p className="prose prose-lg text-black mb-6 font-medium  leading-relaxed space-y-6">
                Playful, organized workouts and games that build motor skills,
                strength, coordination and confidence in a safe, motivating
                environment.{" "}
              </p>
              <p className="prose prose-lg text-black  font-medium  leading-relaxed space-y-6">
                They utilize specialized equipment, controlled environments and
                curated soundscapes to support precise movement, focused
                engagement, neuromuscular re-education, and emotional
                regulation.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-2xl font-serif font-bold text-[#0f766e] mb-6">
                Swimming Lessons
              </h2>
              <p className=" text-black leading-relaxed mb-6 font-medium">
                Joyful, structured sessions in the water that build motor
                skills, strength, coordination, resilience and confidence while
                fostering safety and enjoyment.
              </p>
              <p className=" text-black leading-relaxed mb-6 font-medium">
                They incorporate specialized techniques, adaptive equipment, and
                sensory-aware approaches to foster skill development, sustained
                attention, motor re-patterning, and a calming sense of
                regulation.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F7E7CE] shadow-2xl order-1 lg:order-2">
              <Image
                src="/images/swimming55.jpg"
                alt="Child guided swimming session"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Block 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl border-2 border-[#F7E7CE] overflow-hidden shadow-2xl">
              <Image
                src="/images/hiking.jpg"
                alt="Child hiking with support in nature"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-2xl font-serif font-bold text-[#0f766e] mb-6">
                Hiking Sessions
              </h2>
              <p className=" text-black leading-relaxed mb-6 font-medium">
                Fun, guided, outdoor experiences that build balance, stamina,
                resilience, and a love for active living.{" "}
              </p>
              <p className=" text-black leading-relaxed mb-6 font-medium">
                They utilize varied terrain, fresh air and sensory-rich stimuli
                and adaptive strategies to promote dynamic movement,
                proprioceptive awareness, cardiovascular health, functional
                recovery and emotional regulation.
              </p>
            </div>
          </div>

          {/* Block 4 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-2xl font-serif font-bold text-[#0f766e] mb-6">
                Cycling
              </h2>
              <p className=" text-black leading-relaxed mb-6 font-medium">
                Supported and guided biking experiences in open-air, nature-rich
                environments, that enhance balance, endurance, independence and
                overall physical function.{" "}
              </p>
              <p className=" text-black leading-relaxed mb-6 font-medium">
                They incorporate varied terrain, adaptive techniques and
                sensory-aware approaches to strengthen lower limbs, improve
                cardiovascular fitness, support gait training and promote
                cognitive engagement, motor planning and emotional resilience
                through active exploration in open, grounding spaces.
              </p>
            </div>
            <div className="relative rounded-3xl border-2 border-[#F7E7CE] overflow-hidden shadow-2xl order-1 lg:order-2">
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
            <h3 className="text-2xl md:text-2xl font-serif font-bold text-[#0f766e] mb-6">
              Ready to Help Your Child Move with Joy?
            </h3>
            <Link
              href="/contact"
              className="inline-block bg-[#0f766e] hover:bg-orange-600 text-white font-bold py-5 px-12 rounded-full text-xl shadow-xl transform hover:scale-105 transition duration-300"
            >
              Get Started Today →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
