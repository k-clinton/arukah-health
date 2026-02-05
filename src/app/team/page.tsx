"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Ivy Gacheru",
    title: "Lead Clinical Exercise Physiologist",
    image: "/images/ivy gacheri.jpg",
    alt: "Ivy Gacheru smiling in clinical setting",
    bio: `Ivy Gacheru is a passionate Clinical Exercise Physiologist and the visionary founder of Arukah Health. With a firm belief in the healing power of movement, Ivy specializes in exercise therapy for individuals with special needs—including older adults, people with disabilities, those recovering from injury, and individuals managing chronic medical conditions.

Driven by a deep commitment to inclusive wellness, Ivy designs structured, sensory-friendly movement programs that improve physical function, enhance motor skills, and uplift overall quality of life. Her approach blends science with compassion, ensuring that every client—regardless of ability—feels empowered, supported, and seen.

Through educational outreach, therapeutic exercise sessions, and tailored wellness initiatives, Ivy advocates for enjoyable movement as a proactive tool for rehabilitation, prevention, and lifelong vitality.

As CEO of Arukah Health, she leads with heart and clinical insight—transforming the way communities engage with movement-centered care. Her mission is simple but powerful: to make physical fitness accessible, engaging, and life-enhancing for everyone.

**Qualifications & Specializations**  
• BSc Exercise & Sports Science  
• Clinical Exercise and Movement Specialist  
• Certified Swimming Coach`,
  },
  {
    id: 2,
    name: "Charles Kabata Gitau",
    title: "Movement, Life Skills and Community Wellness Specialist",
    image: "/images/team.jpg",
    alt: "Charles Kabatata Gitau professional portrait",
    bio: `Charles Kabata Gitau is a seasoned sports educator with over 33 years of teaching experience, including 17 years in teacher training and 16 years in secondary school education. His career is defined by a deep commitment to holistic development, blending physical education with life skills training through his signature approach—thematic games.

A trusted collaborator with the Ministry of Education and USAID, Mr. Kabata has spent over a decade advancing soft skills education across Kenya. His coaching in swimming and athletics has empowered students to compete at national and regional levels, with several securing international sports scholarships, particularly in the USA.

Beyond the classroom and pool, Mr. Kabata is a passionate advocate for community health and fitness. He leads a women's wellness group that meets thrice weekly and founded the Saturday Tea Zone Challenge, a nature-based hiking initiative promoting physical and mental well-being in Tigoni. His love for nature and belief in its healing power inspire regular nature walks, where he sensitizes participants to the therapeutic unity between humanity and the natural world.

Mr. Kabata is also a writer and thought leader, currently finalizing publications on life issues and personal growth. He advocates for whole-person education, challenging traditional exam-centric models and promoting learning as a dynamic, life-wide experience.

At Arukah Health, Mr. Kabata serves as our Movement, Life Skills and Community Wellness Specialist, where he integrates decades of experience into transformative, community-rooted practice. His work anchors our commitment to whole-person healing—bridging physical vitality, emotional resilience, and social connection through thematic games, guided hikes, and inclusive fitness programs. Whether leading a hike, facilitating a life skills session, or coaching swimming, Mr. Kabata brings Arukah's philosophy to life: movement as medicine, play as pedagogy, and community as the heartbeat of transformation. He lives with purpose, humility, and joy—serving his generation as a guide, a coach, and a catalyst for change.

**Qualifications & Specializations**  
• Bachelor of Education Arts - Physical and Education  
• Certified Coach in Swimming, Volleyball and Athletics  
• Certified Life Skill Trainer and Fitness Instructor`,
  },
  {
    id: 3,
    name: "Dr. Mburu Victor Kariuki",
    title: "Lead Clinician & Care Strategist",
    image: "/images/team4.jpg",
    alt: "Dr. Mburu Victor Kariuki in office",
    bio: `Dr. Victor Mburu is a dynamic Healthcare Manager and Lead Clinician at Arukah Health, bringing over five years of excellence in clinical care, quality assurance, and healthcare systems optimization.

Victor is known for uniting medical precision with a deep sense of purpose. His approach blends compassionate, patient-centered care with strategic insight—improving outcomes through root cause analysis, policy design, and data-driven innovations.

From managing complex medical cases to leading transformative community health programs, Victor consistently uplifts care standards. His impact spans roles such as Deputy Clinician-in-Charge on the USAID Tujenge Jamii project and medical case manager at M-Tiba, where he advances quality health delivery through smart systems and analytics.

At Arukah, he champions integrated, equitable, and ethical care that puts people first—every patient, every time.

**Qualifications & Specializations**  
• MSc Healthcare Management  
• BSc Clinical Medicine and Community Health`,
  },
  {
    id: 4,
    name: "Paul Kamau",
    title: "Exercise Therapist & Inclusive Fitness Consultant",
    image: "/images/team3.jpeg",
    alt: "Paul Kamau professional portrait",
    bio: `Kamau Paul is a respected Exercise and Fitness Consultant with deep roots in Kenya's top sports and wellness institutions. Beyond his role as a tutor and coach, Kamau is especially passionate about designing inclusive fitness programs tailored to individuals with special health needs.

From managing exercise therapy for people recovering from injury to supporting clients with chronic conditions and disabilities, Kamau's approach is both compassionate and evidence-based. He specializes in fitness assessment, therapeutic programming, and functional movement training—ensuring that every client, regardless of ability, is met with care and a path forward.

At Arukah Health, Kamau champions the belief that movement is for everyone. His mission is to help individuals—of all ages, backgrounds, and abilities—gain confidence, build resilience, and thrive through purposeful movement.

**Qualifications & Specializations**  
• MSc. Exercise & Sports Science  
• Certified Auditor on Quality Management Systems  
• Certified Exercise Physiologist`,
  },
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[0] | null
  >(null);

  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-orange-500 mb-4">
            Meet Our <span className="text-orange-500">Dedicated Team</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Passionate experts committed to helping children with
            neuro-developmental challenges thrive through joyful, evidence-based
            movement.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image with oval border */}
              <div className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50/30 p-6">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 224px"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg md:text-xl text-orange-500 font-medium mb-6">
                    {member.title}
                  </p>
                </div>

                {/* View Profile Button */}
                <button
                  onClick={() => setSelectedMember(member)}
                  className="mt-6 inline-block px-8 py-3 rounded-full bg-[#FFB347]  text-white font-semibold text-base md:text-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-[#4793FF] transform hover:scale-105 transition-all duration-300"
                >
                  View Profile →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA below grid */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-xl text-gray-600 mb-6">
            Our team combines clinical excellence with compassion and cultural
            understanding.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[#FFB347] hover:bg-orange-600 text-white font-bold text-lg rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          >
            Get in Touch with Us
          </Link>
        </div>
      </div>

      {/* Modal for selected team member */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-gray-600 hover:text-gray-900 text-4xl font-bold z-10"
                onClick={() => setSelectedMember(null)}
              >
                ×
              </button>

              {/* Modal Content */}
              <div className="p-8 md:p-12">
                {/* Header with photo */}
                <div className="flex flex-col md:flex-row gap-8 mb-10 items-center md:items-start">
                  <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-orange-500 shadow-xl flex-shrink-0">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
                      {selectedMember.name}
                    </h2>
                    <p className="text-xl md:text-2xl text-orange-500 font-medium mb-4">
                      {selectedMember.title}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-line leading-relaxed">
                  {selectedMember.bio.split("\n").map((paragraph, i) => (
                    <p key={i} className="mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
