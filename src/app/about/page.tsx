"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AboutUsPage() {
  return (
    <div className="pt-20 pb-24 mt-40">
      {/* SECTION 1: HERO / Our Story */}
      <section className="max-w-7xl font-medium mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-700 mb-8">
              About Us
            </h1>
            <div className="prose prose-lg text-gray-700 font-medium text-1xl leading-relaxed space-y-6">
              <p>
                Arukah Health is a pediatric therapy center dedicated to
                creating progress through movement. We specialize in
                personalized exercise therapy for children with neuro
                developmental challenges and milestone delays, helping them
                build strength, confidence, and independence in ways that feel
                joyful and empowering.
              </p>
              <p>
                Our programs are designed to nurture core physical functions —
                strength, balance, coordination, flexibility, and endurance —
                while also fostering resilience, play, and emotional well being.
                Every child’s journey is unique, and we meet them where they
                are, tailoring therapy to their individual needs, celebrating
                every milestone along the way and honoring progress in all its
                forms.
              </p>
              <p></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PHILOSOPHY – Movement Is Medicine */}

      {/* SECTION 3: PROGRAM APPROACH – Three Image Grid */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
          >
            <Image
              src=""
              alt=""
              width={2560}
              height={1707}
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-700 mb-8"></h2>
            <div className="prose prose-lg text-gray-700 font-medium text-1xl leading-relaxed space-y-6">
              <p>
                At Arukah, therapy, care and support look different—they are
                more embodied, more inclusive, more human. Through exercise, we
                create a space where children feel seen and encouraged, not just
                defined by their challenges. Where parents feel equipped and
                supported, not overwhelmed. Where families can reclaim wellness,
                strength, mobility, and joy with dignity and hope.
              </p>
              <p>
                Families who walk through our doors find more than therapy; they
                find a community. We partner with them to co create exercise
                care plans that reflect each child’s unique needs and
                aspirations. We train and walk alongside them through challenges
                and milestones—ensuring that every step forward is safe,
                supported, and deeply attuned to the journey toward wellness. We
                believe exercise is medicine, and we use it to open new pathways
                of growth, healing, and possibility.
              </p>
              <p>
                Through years of clinical experience and continuous learning,
                we’ve developed an approach that combines the latest research in
                pediatric exercise physiology with time tested therapeutic
                practices. For us, exercise is more than therapy—it’s a
                reclamation, a celebration, and a return to embodied hope for
                every child and family we serve.
              </p>
              <p></p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* SECTION 4: FEATURE – Childlike Background */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 ">
          <Image
            src="/images/movement3.jpg"
            alt="Soft pastel dreamy clouds background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative max-w-5xl text-1xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white/80 backdrop-blur-md rounded-3xl p-12  shadow-xl border border-orange-400"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-700 mb-10">
              Arukah Health
            </h2>
            <div className="prose prose-xl text-gray-800 leading-relaxed   p-6 space-y-6 max-w-4xl mx-auto">
              <p className=" font-medium font-semibold ">
                We are more than an Exercise Clinic. We are a movement of Hope,
                Science, and Soul—where every step is sacred, and every child’s
                story matters!
              </p>
              <p>
                Exercise with Us, is where Science, Compassion and Hope converge
                to redefine recovery.
              </p>
              <p>
                With Us, Every child is Seen, Every Parent Supported, and Every
                Family Empowered to move—not just physically, but towards
                wholeness.
              </p>
              <p></p>
              <p className="font-semibold">
                Every Session, Every Program, Every Playful Activity is crafted
                with intention—because wholeness deserves that kind of care!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="bg-blue-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-700">
              Thank you for being part of this story.
            </h2>
            <p className="text-xl text-gray-700 font-medium leading-relaxed">
              Whether you’re here to learn, move, teach, or heal, You Belong!
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: VISION & MISSION */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Decorative images – top left & top right */}
        <div className="absolute -top-16 -left-16 md:-left-24 w-32 h-32 md:w-48 md:h-48 pointer-events-none z-0 opacity-70">
          <Image
            src="/images/icon8.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute -top-16 -right-16 md:-right-24 w-32 h-32 md:w-48 md:h-48 pointer-events-none z-0 opacity-70">
          <Image
            src="/images/icon12.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Main Content – unchanged */}
        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl p-10 shadow-lg border border-blue-100"
          >
            <h3 className="text-3xl font-serif font-bold text-blue-700 mb-6">
              Our Vision
            </h3>
            <p className="text-lg font-medium text-gray-700 leading-relaxed">
              To redefine recovery through exercise — transforming lives,
              nurturing resilience, and unlocking endless possibilities for
              every child
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl p-10 shadow-lg border border-blue-100"
          >
            <h3 className="text-3xl font-serif font-bold text-blue-700 mb-6">
              Our Mission
            </h3>
            <p className="text-lg font-medium text-gray-700 leading-relaxed">
              To deliver inclusive, research informed pediatric exercise therapy
              that builds function and independence in children with
              neuro-developmental challenges and milestone delays—blending
              clinical excellence with compassionate care to transform lives
              through movement.
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
          className="pointer-events-none absolute top-6 right-6 opacity-70 z-0"
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-orange-600 mb-16">
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
                desc: "Our smiles, words, affirmations, and follow-up throughout each child's movement journey reflect our unwavering dedication to delivering compassionate, consistent care.",
              },
              {
                title: "Respect & Compassion",
                desc: "We honor each child's journey with empathy, dignity, and personalized care—creating safe spaces for healing through movement and relationship.",
              },
              {
                title: "Innovation",
                desc: "We embrace creativity and adaptability—continually exploring new skills, tools, and technologies to design movement programs that are effective, engaging, and inclusive.",
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
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center"
              >
                <h3 className="text-2xl font-serif font-bold text-blue-700 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FOUNDER SECTION (Placeholder) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-orange-600 mb-16">
          Meet the Founder
        </h2>
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          {/* Left: Intro content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-1 order-2 lg:order-1 text-gray-700 font-medium font-montserrat space-y-6 text-center lg:text-left"
          >
            <p>
              Arukah Health was founded with a deep passion for helping children
              with neuro-developmental challenges and milestone delays discover
              their potential through joyful, purposeful exercise. With years of
              clinical experience in pediatric therapy and a heart for families
              navigating uncertainty, Ivy created a space where science,
              compassion, and hope converge. Arukah Health is more than a
              brand—it’s a living, breathing reflection of everything we believe
              in: clinical excellence, emotional safety, cultural sensitivity,
              and the power of exercise to transform lives!
            </p>
          </motion.div>

          {/* Center: Image + Name + Title */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-1 order-1 lg:order-2 flex flex-col items-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-sm lg:max-w-md">
              <Image
                src="/images/ivy gacheri.jpg"
                alt="Founder portrait – warm, approachable professional in natural setting"
                width={2560}
                height={1707}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-blue-700 mb-2">
                Ivy Gacheri
              </h3>
              <p className="text-xl md:text-2xl font-medium text-orange-600">
                CEO & Founder, Arukah Health
              </p>
            </div>
          </motion.div>

          {/* Right: Long quote + signature */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-1 order-3 lg:order-3 text-gray-700 font-medium font-montserrat space-y-6 text-center lg:text-left"
          >
            <p className="italic font-medium font-semibold">
              “I understand that nurturing children with neuro developmental
              challenges and milestone delays can be a walk through seasons of
              uncertainty, burnout, pain, and quiet resilience. Complexities
              such as impaired motor control, reduced strength & endurance,
              balance/coordination deficits, limited flexibility, and altered
              proprioception affects a child’s capabilities and independence in
              life which can be quite an uphill task to navigate. Oftentimes,
              this makes care intricate and complex, with no single fix or
              simple path forward. At Arukah, we create a community where
              families can breathe, hope, and feel understood. This is a space
              where is exercise is impactful in building core dimensions of
              physical function necessary for these children. A space where
              science meets compassion, and where every child’s story is
              honored. Arukah Health is built on the belief that exercise is
              medicine. For us, exercise is more than biomechanics—it’s a
              language of healing, play, and growth. Every stretch, step, and
              breath is an opportunity to restore what challenges may have taken
              away and to open new pathways of strength, confidence, and joy. We
              believe every child deserves to be seen, celebrated, and supported
              on their unique journey toward strength and independence. Hence,
              we meet each child where they are—physically, emotionally, and
              developmentally—crafting therapeutic exercise experiences that are
              inclusive, intentional, and transformative. There is no greater
              joy than witnessing children take small steps that become great
              milestones, and the resilience of parents who walk beside them
              with love. Every smile and every breakthrough reminds us why this
              work matters. That is why here, we celebrate progress in all its
              forms, knowing that strength is built not only in muscles but also
              in spirit. This is where healing begins and recovery is redefined!
              This is home! Welcome to Arukah Health!”
            </p>
          </motion.div>
        </div>
      </section>

      {/* FINAL SECTION: CLOSING MESSAGE */}
    </div>
  );
}
