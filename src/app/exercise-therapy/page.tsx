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
const carouselImages = [
  "/images/education and training 2.jpg",
  "/images/challenge94.png",
  "/images/exo3.png",
];

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
    <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-xl">
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // change speed here (5000 = 5 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen mt-30 bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[13vh] md:min-h-[70vh] flex items-center justify-center bg-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Title – always visible */}
            <div className="text-center md:text-center">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl sm:text-center font-serif font-extrabold text-[#0f766e] leading-tight ">
                Exercise Therapy
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
                              className="w-auto max-h-1/2 object-cover rounded-3xl"
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

      {/* Intro Paragraph Section */}
      <section className="  md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed"></p>
        </div>
      </section>

      {/* Core Philosophy – Our Programs with carousels */}
      <section className=" md:py-20 mt-1 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
          {/* Block 1 – Mobile: paragraph → carousel */}
          <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* First paragraph – first on mobile */}
            <div className="order-1 lg:order-1 text-center lg:text-left">
              <p className="prose text-justify prose-lg text-black font-medium leading-relaxed space-y-6">
                We apply exercise as a cornerstone for improving health,
                restoring function, and supporting recovery. Our programs use
                structured, medically guided exercise, tailored to a child’s
                specific needs, abilities, and goals. Exercises are chosen to
                correct impairments, strengthen muscles, improve flexibility,
                build endurance, enhance balance and maintain overall
                well-being.
              </p>
            </div>

            {/* First carousel – second on mobile */}
            <div className="order-2 lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl h-64 md:h-76">
              <Carousel images={leftCarouselImages} />
            </div>
          </div>

          {/* Block 2 – Mobile: paragraph → carousel */}
          <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Second paragraph – third on mobile */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <p className="prose text-justify prose-lg text-black font-medium leading-relaxed space-y-6">
                Our programs are evidence-based, drawing from research in motor
                learning, pediatric rehabilitation, and functional exercise
                science. Rooted in this foundation, the programs are designed to
                be fun, engaging, and supportive of each child’s unique journey
                in movement and physical development.
              </p>
            </div>

            {/* Second carousel – fourth on mobile */}
            <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden w-auto shadow-2xl h-64 md:h-76">
              <Carousel images={rightCarouselImages} />
            </div>
          </div>
        </div>
      </section>

      {/* Key Domains Cards */}
      {/* Key Areas Of Focus Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#0f766e] mb-12">
            Key Areas Of Focus
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                imageUrl: "/images/muscular strenghth.jpg",
                title: "Muscular Strength & Endurance",
                desc: "Building postural stability, gait support, and sustained activity tolerance.",
                theme: "orange",
              },
              {
                imageUrl: "/images/balance and cordination.jpg",
                title: "Balance & Coordination",
                desc: "Reducing fall risk and growing motor confidence.",
                theme: "blue",
              },
              {
                imageUrl: "/images/flexibility and mobility.jpg",
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
                className={`group bg-[#F7E7CE] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 border-2 ${
                  item.theme === "orange"
                    ? "border-[#F7E7CE] hover:[#F7E7CE] "
                    : "border-[#F7E7CE] hover:[#F7E7CE] "
                } hover:scale-105 hover:shadow-xl flex flex-col`}
              >
                {/* Full-width image at top */}
                <div className="relative h-70 md:h-58 w-full">
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
            Activities in Our programs
          </h3>

          {/* Block 1: Structured & Play-Based Exercise */}
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Text first on mobile */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0f766e] mb-6 text-center lg:text-left">
                1. Structured & Play-Based Exercise
              </h2>
              <div className="prose text-left prose-lg text-black mb-6 font-medium leading-relaxed space-y-6 text-center lg:text-left">
                <p>
                  Playful, organized workouts and games that build motor skills,
                  strength, coordination and confidence in a safe, motivating
                  environment.
                </p>
                <p>
                  They utilize specialized equipment, controlled environments
                  and curated soundscapes to support precise movement, focused
                  engagement, neuromuscular re-education, and emotional
                  regulation.
                </p>
              </div>
            </div>

            {/* Image second on mobile */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F7E7CE] shadow-xl order-2 lg:order-1">
              <Image
                src="/images/structured.png"
                alt="Child enjoying structured and play-based exercise therapy"
                width={1000}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Block 2: Swimming */}
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Text first on mobile */}
            <div className="order-1 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0f766e] mb-6 text-center lg:text-left">
                2. Swimming
              </h2>
              <div className="prose text-left prose-lg text-black mb-6 font-medium leading-relaxed space-y-6 text-center lg:text-left">
                <p>
                  Joyful, structured sessions in the water that build motor
                  skills, strength, coordination, resilience and confidence
                  while fostering safety and enjoyment.
                </p>
                <p>
                  They incorporate specialized techniques, adaptive equipment,
                  and sensory-aware approaches to foster skill development,
                  sustained attention, motor re-patterning, and a calming sense
                  of regulation.
                </p>
              </div>
            </div>

            {/* Image second on mobile */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F7E7CE] shadow-xl order-2 lg:order-2">
              <Image
                src="/images/swimming55.jpg"
                alt="Child guided swimming session"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Block 3: Hiking */}
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Text first on mobile */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0f766e] mb-6 text-center lg:text-left">
                3. Hiking
              </h2>
              <div className="prose text-justify prose-lg text-black mb-6 font-medium leading-relaxed space-y-6 text-center lg:text-left">
                <p>
                  Fun, guided, outdoor experiences that build balance, stamina,
                  resilience, and a love for active living.
                </p>
                <p>
                  They utilize varied terrain, fresh air and sensory-rich
                  stimuli and adaptive strategies to promote dynamic movement,
                  proprioceptive awareness, cardiovascular health, functional
                  recovery and emotional regulation.
                </p>
              </div>
            </div>

            {/* Image second on mobile */}
            <div className="relative rounded-3xl border-2 border-[#F7E7CE] overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/images/hiking 2d.jpg"
                alt="Child hiking with support in nature"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Block 4: Cycling */}
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Text first on mobile */}
            <div className="order-1 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0f766e] mb-6 text-center lg:text-left">
                4. Cycling
              </h2>
              <div className="prose text-justify prose-lg text-black mb-6 font-medium leading-relaxed space-y-6 text-center lg:text-left">
                <p>
                  Supported and guided biking experiences in open-air,
                  nature-rich environments, that enhance balance, endurance,
                  independence and overall physical function.
                </p>
                <p>
                  They incorporate varied terrain, adaptive techniques and
                  sensory-aware approaches to strengthen lower limbs, improve
                  cardiovascular fitness, support gait training and promote
                  cognitive engagement, motor planning and emotional resilience
                  through active exploration in open, grounding spaces.
                </p>
              </div>
            </div>

            {/* Image second on mobile */}
            <div className="relative rounded-3xl border-2 border-[#F7E7CE] overflow-hidden shadow-xl order-2 lg:order-2">
              <Image
                src="/images/cycling 2d.jpg"
                alt="Child in structured play-based exercise session"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-20">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0f766e] mb-6">
              Exercise Is Medicine
            </h3>
            <Link
              href="/contact"
              className="inline-block bg-[#F7E7CE] hover:bg-[#0f766e] hover:text-white text-black font-bold py-5 px-12 rounded-full text-xl shadow-xl transform hover:scale-105 transition duration-300"
            >
              Get Started Today →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
