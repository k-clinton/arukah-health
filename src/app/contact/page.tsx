"use client";

import { useState } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaPaperPlane,
  FaCheckCircle,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Log to browser console (open DevTools → Console to see it)
    console.log("Contact Form Submitted:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Show success + auto-reset
    setStatus("success");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    setTimeout(() => setStatus("idle"), 7000);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-[#FFB347] text-white mt-20 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className=" text-4xl md:text-6xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-lg text-[black] max-w-2xl mx-auto">
            We’re here when you’re ready to talk no pressure, just support.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-white ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl md:text-4xl  font-bold text-black mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name"
                  className="w-full text-black px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:outline-none transition"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="info@arukahhealth.co.ke"
                  className="w-full text-black px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:outline-none transition"
                />
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  className="w-full text-black px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:outline-none transition"
                />
                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we support you today?"
                  className="w-full text-black px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:outline-none transition resize-none"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full text-black bg-orange-500 font-bold py-4 rounded-lg hover:bg-orange-600 transition flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5" /> Send Message
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="p-5 bg-green-50 border border-green-300 rounded-lg text-green-800 flex items-center gap-3">
                    <FaCheckCircle className="w-7 h-7 text-green-600" />
                    <div>
                      <strong>Thank you!</strong> Your message has been
                      received. We’ll reply within 24 hours.
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                Contact Information
              </h2>

              <div className="flex gap-5">
                <div className="w-14 h-14 bg-slate-100 text-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-bold text-black">Email</p>
                  <a
                    href="mailto:info@arukahhealth.co.ke"
                    className="text-orange-700 hover:underline text-lg"
                  >
                    info@arukahhealth.co.ke
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 bg-slate-100 text-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-bold text-black">Phone / WhatsApp</p>
                  <a
                    href="tel:+254700000000"
                    className="text-amber-700 hover:underline text-lg"
                  >
                    +254 758 304 012/+254 732 461 867
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 bg-slate-100 text-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-bold text-black">Location</p>
                  <p className="text-gray-700">
                    Nairobi, Kenya
                    <br />
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 bg-slate-100 text-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaClock className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-bold text-black">Hours</p>
                  <p className="text-gray-700">
                    Mon–Fri: 8 AM – 6 PM
                    <br />
                    Saturday: 9 AM – 1 PM
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
