"use client";

import { useRouter } from "next/navigation";
import { Star, Mail, Phone, Calendar, Award, Heart } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  credentials: string;
  specialty: string;
  rating: number;
  bio: string;
  image: string;
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Ivy Gacheri",
    title: "",
    credentials: "",
    specialty: "",
    rating: 5.0,
    bio: "",
    image: "/images/IMG-20250822-WA0000.jpg",
  },
  {
    id: 2,
    name: "James Otieno",
    title: "",
    credentials: "",
    specialty: "",
    rating: 4.8,
    bio: "",
    image: "/images/WhatsApp Image 2024-07-23 at 7.44.20 PM.jpeg",
  },
  {
    id: 3,
    name: "Dr.  Shamila Abubakar",
    title: "",
    credentials: "",
    specialty: "",
    rating: 4.7,
    bio: "",
    image: "",
  },
  {
    id: 4,
    name: "Dr. Caleb Kimani",
    title: "",
    credentials: "",
    specialty: "",
    rating: 4.7,
    bio: "",
    image: "/images/team2.jpg",
  },
];

export default function TeamPage() {
  const router = useRouter();

  const handleBook = (member: TeamMember) => {
    //  to  services
    const params = new URLSearchParams({
      therapist: member.name,
      service: member.specialty.split(",")[0].trim(),
    });
    router.push(`/services?${params.toString()}`);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold">
            Meet Our Caring Team
          </h1>
          <p className="mt-4 text-lg text-black max-w-3xl mx-auto">
            Licensed, compassionate professionals dedicated to your mental
            wellness journey.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-purple-700 to-amber-700">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-amber-300 text-sm">{member.title}</p>
                  </div>
                  {/*  if no image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-8">
                      <Heart className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-purple-700">
                      {member.credentials}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-600 fill-current" />
                      <span className="ml-1 text-sm font-semibold">
                        {member.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-amber-700 font-medium mb-2">
                    {member.specialty}
                  </p>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  <div className="flex gap-2 mb-4">
                    <button className="flex-1 flex items-center justify-center gap-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                      <Mail className="w-4 h-4" href="#" /> Email
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                      <Phone className="w-4 h-4" /> Call
                    </button>
                  </div>

                  <button
                    onClick={() => handleBook(member)}
                    className="w-full bg-[gold] text-white font-bold py-3 rounded-lg hover:bg-[purple] transition flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-300 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display']">
            Get Started with Arukah Health Today!
          </h2>
          <p className="mt-4 text-lg text-black">
            Your first session is just one click away.
          </p>
          <button
            onClick={() => router.push("/services")}
            className="mt-6 bg-[gold] text-[white] px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition"
          >
            Contact us
          </button>
        </div>
      </section>
    </>
  );
}
