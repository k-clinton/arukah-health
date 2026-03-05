"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AboutUsPage() {
  return (
    <div className="pt-2 pb-24 mt-20">
      {/* SECTION 1: HERO / Our Story */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* First block: Image top on mobile, text left + image right on desktop */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
          {/* Image – comes FIRST on mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/IMG_2491.jpg"
              alt="Therapist and child sharing a joyful high-five moment in therapy"
              width={2160}
              height={1216}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>

          {/* Text – comes SECOND on mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0F766E] mb-8">
              About Us
            </h1>
            <div className="prose prose-lg text-[#0A0504] font-medium leading-relaxed space-y-6">
              <p className="text-justify md:text-left">
                Arukah Health is a pediatric exercise therapy center dedicated
                to enhancing capabilities, growth and development through
                movement. We specialize in exercise treatments for neuro-diverse
                children and those with milestone delays, helping them grow
                stronger, confident, and independent. Our programs are designed
                to nurture core aspects of physical functions — strength,
                balance, coordination, flexibility, and endurance — while also
                fostering resilience, play, and emotional well-being.
              </p>
              <p className="text-justify md:text-left">
                At Arukah Health, we believe Exercise is Medicine, and we use it
                to open new pathways of growth, healing, and possibility!
                Through exercise, we create a space where children feel seen and
                encouraged, not just defined by their challenges. In their
                unique journeys, we meet them where they are, tailoring therapy
                to their individual needs, celebrating every milestone along the
                way and honoring progress in all its forms.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Second block: Image top on mobile, image left + text right on desktop */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image – comes FIRST on mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-1 lg:order-1 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/IMG_9544.jpg"
              alt="Another meaningful moment at Arukah Health"
              width={2560}
              height={1707}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Text – comes SECOND on mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 lg:order-2"
          >
            <div className="prose prose-lg text-[#0A0504] font-medium leading-relaxed space-y-6">
              <p>
                Alongside children, families who walk through our doors find
                more than therapy; they find a community. We partner with them
                to co-create exercise care plans that reflect each child’s
                unique needs and aspirations. We train and walk alongside them
                through challenges and milestones—ensuring that every step
                forward is safe, supported, and deeply attuned to the journey
                toward wellness.
              </p>
              <p>
                Through years of clinical experience and continuous learning,
                we’ve developed an approach that combines the latest research in
                pediatric exercise physiology with time-tested therapeutic
                practices. For us, exercise is more than therapy—it’s a
                reclamation, a celebration, and a return to embodied hope for
                every child and family we serve!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: FEATURE – Childlike Background */}

      <section className="bg-[#F7E7CE]  py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0F766E] mb-4">
              Thank you for being part of this story.
            </h2>
            <p className="text-xl text-[#0A0504] font-medium leading-relaxed">
              Whether you’re here to learn, move, teach, or heal, You Belong!
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: VISION & MISSION */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Decorative images – top left & top right */}

        {/* Main Content – unchanged */}
        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl p-10 shadow-lg border-2 border-[#F7E7CE]"
          >
            <h3 className="text-3xl font-serif font-bold text-[#0F766E] mb-6">
              Our Vision
            </h3>
            <p className=" font-medium text-[#0A0504] leading-relaxed">
              To redefine recovery through exercise — transforming lives,
              nurturing resilience, and unlocking endless possibilities for
              every child.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl p-10 shadow-lg border-2 border-[#F7E7CE]"
          >
            <h3 className="text-3xl font-serif font-bold text-[#0F766E] mb-6">
              Our Mission
            </h3>
            <p className=" font-medium text-[#0A0504] leading-relaxed">
              To deliver inclusive, research informed exercise therapy that
              builds function and independence in neuro-diverse children and
              those with milestone delays—blending clinical excellence with
              compassionate care to transform lives through movement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: CORE VALUES */}
      <section className="relative bg-gray-50 py-20 overflow-hidden">
        {/* Decorative Images */}
        <Image
          src="/images/pd3.jpg"
          alt=""
          width={120}
          height={120}
          className="pointer-events-none absolute top-6 left-6 opacity-70 z-0"
        />

        <Image
          src="/images/pd3.jpg"
          alt=""
          width={140}
          height={140}
          className="pointer-events-none hidden md:block absolute top-6 right-6 opacity-70 z-0"
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#0F766E] mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Teamwork & Collaboration",
                desc: "We thrive through shared wisdom, open communication, and collective care—building strong partnerships within our team and with the families we serve.",
              },
              {
                title: "Commitment",
                desc: "Our smiles, words, affirmations, and follow-up throughout each child's exercise journey, reflect our unwavering dedication to delivering compassionate, consistent care.",
              },
              {
                title: "Respect & Compassion",
                desc: "We honor each child's journey with empathy, dignity, and personalized care—creating safe spaces for healing through movement and relationship.",
              },
              {
                title: "Innovation",
                desc: "We embrace creativity and adaptability—continually exploring new skills, tools, and technologies to design exercise programs that are effective, engaging, and inclusive.",
              },
              {
                title: "Integrity",
                desc: "Honesty, transparency, and trust guide every relationship—with our clients, partners, and within our team.",
              },
              {
                title: "Expertise",
                desc: "We uphold the highest standards in therapeutic care through clinically sound, research-driven methodologies.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-md border-2 border-[#F7E7CE] text-center"
              >
                <h3 className="text-2xl font-serif font-bold text-[#0F766E] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#0A0504] font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL SECTION: CLOSING MESSAGE */}
    </div>
  );
}
