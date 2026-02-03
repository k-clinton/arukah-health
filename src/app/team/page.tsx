import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Ivy Gacheru",
    title: "Lead Clinical Exercise Physiologist",
    image: "/images/ivy gacheri.jpg", // replace with actual path
    alt: "Ivy Gacheru smiling in clinical setting",
  },
  {
    id: 2,
    name: "Charles Kabatata Gitau",
    title: "Movement, Life Skills and Community Wellness Specialist",
    image: "/images/team.jpg",
    alt: "Charles Kabatata Gitau professional portrait",
  },
  {
    id: 3,
    name: "Dr. Mburu Victor Kariuki",
    title: "Lead Clinician & Care Strategist",
    image: "/images/team4.jpg",
    alt: "Dr. Mburu Victor Kariuki in office",
  },
  {
    id: 4,
    name: "Dr. Mburu Victor Kariuki",
    title: "Lead Clinician & Care Strategist",
    image: "/images/team3.jpeg",
    alt: "Dr. Mburu Victor Kariuki ",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b mt-20 from-white to-blue-50/30">
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
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
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
              <div className="p-6 md:p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-lg md:text-xl text-orange-500 font-medium mb-6">
                  {member.title}
                </p>

                {/* View Profile Button */}
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
    </section>
  );
}
