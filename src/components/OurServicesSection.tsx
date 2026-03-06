"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Dumbbell, GraduationCap } from "lucide-react";

export default function OurServicesSection() {
  const services = [
    {
      title: "Exercise Therapy",
      icon: Dumbbell,
      color: "#0F766E",
      description:
        "Personalized movement programs for children with neuro-developmental challenges and milestone delays.",
      href: "/exercise-therapy",
      bgGradient: "white",
      hoverGradient: "white",
    },
    {
      title: "Education & Training",
      icon: GraduationCap,
      color: "#0F766E",
      description:
        "Capacity-building sessions for caregivers, parents, teachers, and communities.",
      href: "/education-and-training",
      bgGradient: "white",
      hoverGradient: "white",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-white to-gray-50/50">
      {/* Overlap effect – makes cards look like they're coming out of the previous section */}
      <div className="absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#0F766E] mb-16 md:mb-32">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 mt-10 gap-10 lg:gap-16 relative">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 ${
                index === 0 ? "mt-8 " : "mt-8 "
              }`}
            >
              {/* Colored top line */}
              <div
                className="absolute top-0 left-0 right-0 h-2"
                style={{ backgroundColor: service.color }}
              />

              <div
                className={`bg-gradient-to-br ${service.bgGradient} group-hover:${service.hoverGradient} p-8 md:p-10 transition-colors duration-500 flex flex-col items-center text-center h-full`}
              >
                {/* Icon */}
                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-6 shadow-lg"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon size={40} className="text-gray-800" />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-700 mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Button */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F7E7CE] text-black font-semibold shadow-md hover:bg-[#0f766e] hover:text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Explore {service.title}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
