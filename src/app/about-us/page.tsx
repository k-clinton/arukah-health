"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AboutUsPage() {
  return (
    <div className="pt-2 pb-24 mt-20">
      {/* SECTION 1: HERO / Our Story */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Block 1 – Mobile: two paragraphs → image */}
        <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center mb-16 lg:mb-20">
          {/* Text – first on mobile */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
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
                to nurture core physical functions — strength, balance,
                coordination, flexibility, and endurance — while also fostering
                resilience, play, and emotional well-being.
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
          </div>

          {/* First image – second on mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 lg:order-2 rounded-2xl overflow-hidden shadow-xl"
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
        </div>

        {/* Block 2 – Mobile: two paragraphs → image */}
        <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Second text – third on mobile */}
          <div className="order-1 lg:order-2">
            <div className="prose prose-lg text-[#0A0504] font-medium leading-relaxed space-y-6 text-justify lg:text-left">
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
          </div>

          {/* Second image – fourth on mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/IMG_9544.jpg"
              alt="Another meaningful moment at Arukah Health"
              width={2560}
              height={1707}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: FEATURE – Childlike Background */}
      <section className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
        {/* Subtle background decorative elements */}
        <motion.div
          className="pointer-events-none absolute left-12 top-25  md:top-10 md:left-8 z-0  md:block"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/founde2.png"
            alt=""
            width={100}
            height={100}
            className="opacity-90 transform -scale-x-100 -rotate-360"
          />
        </motion.div>

        {/* Decorative Image – Right */}
        <motion.div
          className="pointer-events-none absolute bottom-10 right-8 z-0 hidden md:block"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/founde2.png"
            alt=""
            width={160}
            height={160}
            className="opacity-90 rotate-6"
          />
        </motion.div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#0f766e]/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-80 h-80 md:w-128 md:h-128 bg-[#FFB347]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl  lg:text-6xl font-serif font-extrabold text-center text-[#0f766e] mb-12 md:mb-16 tracking-tight">
            Our Foundation
          </h2>

          {/* Core story text – centered with soft card-like container */}
          <div className="relative bg-[#F7E7CE]  rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border border-[#0f766e]/20 mb-16 md:mb-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              {/* Overlay to ensure text readability */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/70" />*/}
            </div>

            {/* Content – elevated above background */}
            <div className="relative z-10 prose prose-lg  p-6 md:p-8 lg:p-12 rounded-l-2xl rounded-r-2xl md:prose-xl lg:prose-2xl max-w-none text-black leading-relaxed space-y-8 text-justify md:text-left font-medium">
              <p>
                Our roots come from the understanding that nurturing
                neuro-diverse children and those with milestone delays can feel
                like walking through seasons of uncertainty, burnout, pain, and
                quiet resilience. Complexities such as impaired motor control,
                reduced strength, balance deficits, and altered proprioception
                affect a child’s independence, making care quite intricate and
                demanding. Yet it is within these very challenges that the need
                for a space of joy, purpose, and renewal becomes clear.
              </p>

              <p>
                Arukah Health was founded with a deep passion for helping
                neuro-diverse children and those with milestone delays discover
                their potential through joyful, purposeful exercise. With years
                of clinical experience in pediatric therapy and a heart for
                families navigating uncertainty, Ivy — our founder — created a
                space where science, compassion, and hope converge. A space
                built on the belief that <strong>exercise is medicine</strong> —
                where movement becomes a joyful and intentional pathway to
                building the core dimensions of physical function that enhance
                independence and resilience.
              </p>

              <p>
                At Arukah, exercise is more than biomechanics — it’s a language
                of healing, play, and growth. Every stretch, step, and breath is
                an opportunity to restore what challenges may have hindered and
                to open new pathways of strength, confidence, and joy. Each of
                these moments of growth affirms our belief that every child
                deserves to be seen, celebrated, honored, and supported on their
                unique journey.
              </p>

              <p>
                Every Smile and Every Breakthrough reminds us why this work
                matters. We celebrate progress in all its forms — big or small —
                knowing that strength is built not only in muscles but also in
                spirit.
              </p>

              {/* Focal quote – standout block */}
            </div>
            <blockquote className="my-12 py-8 px-6 md:px-12 border-l-4 border-[#0f766e] rounded-r-2xl italic  text-[#0f766e] font-serif font-medium">
              <span className="text-[#0f766e] font-bold not-italic">
                This is where Recovery is Redefined!
                <br />
                This is Home!
                <br />
                This is Arukah Health!
              </span>
            </blockquote>
          </div>

          {/* Optional subtle CTA or closing line */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-[#F7E7CE] hover:bg-[#0a5c54] hover:text-white text-black font-bold py-4 px-10 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              Join the Arukah Family →
            </Link>
          </div>
        </div>
      </section>

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
        <div className="grid md:grid-cols-2 text-center gap-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl p-10 shadow-xl border-2 border-[#F7E7CE]"
          >
            <h3 className="text-3xl font-serif font-bold text-[#0F766E] mb-6">
              Our Vision
            </h3>
            <p className=" font-medium  text-[#0A0504] leading-relaxed">
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
            className="bg-white rounded-2xl p-10 shadow-xl border-2 border-[#F7E7CE]"
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
      <section className="relative bg-gray-50 py-32 pb-20 overflow-hidden">
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
        <Image
          src="/images/pd3.jpg"
          alt=""
          width={140}
          height={140}
          className="pointer-events-none  md:hidden absolute bottom-7 right-6 opacity-70 z-100"
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#0F766E] mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 mb-20 gap-10">
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
                className="bg-white rounded-2xl  p-8 shadow-xl border-2 border-[#F7E7CE] text-center"
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
    </div>
  );
}
