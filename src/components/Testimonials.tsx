"use client";

import {
  FaStar,
  FaUserMd,
  FaHeartbeat,
  FaRunning,
  FaHandsHelping,
  FaQuoteLeft,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const InfiniteTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "James Mwangi",
      role: "Father of Ethan Mwangi",
      content:
        "Ethan now climbs stairs independently and plays with joy. The fun sessions built his balance, posture, and confidence. Arukah truly sees the whole child—thank you for the hope!",
      rating: 5,
      icon: FaRunning,
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      name: "Sarah Kamau",
      role: "Mother of Aisha Kamau",
      content:
        "Aisha's core strength and posture improved dramatically. She takes supported steps with excitement now. The personalized, joyful approach has made a huge difference for our family.",
      rating: 5,
      icon: FaHeartbeat,
      color: "from-purple-500 to-pink-400",
    },
    {
      id: 3,
      name: "Dr. Michael Otieno",
      role: "",
      content:
        "Liam's mobility, endurance, and self-esteem have soared. He thinks it's just play, but we're seeing real gains in muscle tone and posture. Arukah is transforming him!",
      rating: 5,
      icon: FaUserMd,
      color: "from-green-500 to-emerald-400",
    },
    {
      id: 4,
      name: "Grace Wanjiku",
      role: "",
      content:
        "Maya is reaching independently and holding better posture. The encouraging, evidence-based sessions are helping her rebuild function and confidence. We're so grateful",
      rating: 5,
      icon: FaHandsHelping,
      color: "from-orange-500 to-yellow-400",
    },
    {
      id: 5,
      name: "Robert Kiprop",
      role: "",
      content:
        "Noah's posture has improved so much—he sits and stands with confidence now. The playful sessions boosted his strength and mobility, and he's more independent every day. Arukah brings real joy to his therapy!",
      rating: 5,
      icon: FaRunning,
      color: "from-red-500 to-orange-400",
    },
    {
      id: 6,
      name: "Maryanne Akoth",
      role: "",
      content:
        "Zara is reaching, balancing, and moving with purpose for the first time. Her physical capacity and function are growing fast, and she smiles through every session. Thank you for the gentle, effective support!",
      rating: 5,
      icon: FaHeartbeat,
      color: "from-indigo-500 to-blue-400",
    },
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image */}

      {/* Content – everything else unchanged */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-transparent bg-clip-text bg-blue-700">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto ">
            Families celebrating every milestone - real stories of growth and
            achievement.
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center gap-4 mt-6">
            <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-orange-400 rounded-full animate-pulse delay-150"></div>
            <div className="w-4 h-4 bg-amber-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>

        {/* Infinite Scrolling Container */}
        <div className="relative">
          <div className="absolute w-full h-194 inset-0 z-0">
            <Image
              src="/images/olym3.jpg"
              alt="Background of joyful families and children"
              fill
              className="object-cover w-full h-full custom "
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/40" />
          </div>
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Infinite Scroll Wrapper */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 py-4"
              animate={{
                x: [0, -2000], // Adjust based on content width
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => {
                const Icon = testimonial.icon;
                return (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="flex-shrink-0 w-[350px] md:w-[400px]"
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 h-full border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <div
                          className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${testimonial.color} bg-opacity-10`}
                        >
                          <FaQuoteLeft className="text-2xl text-gray-600" />
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                        {testimonial.content}
                      </p>

                      {/* Rating */}
                      <div className="flex mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-xl" />
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-full bg-gradient-to-r ${testimonial.color}`}
                        >
                          <Icon className="text-white text-xl" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>

                      {/* Decorative corner */}
                      <div
                        className={`absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full opacity-10`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteTestimonials;
