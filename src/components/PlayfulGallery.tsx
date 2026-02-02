"use client";

import { useState } from "react";
import Image from "next/image";

const PlayfulGallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  // Sample images (replace with your own)
  const galleryImages = [
    {
      id: 1,
      src: "/images/IMG_9611.jpg",
      alt: "Kids painting together",
      title: "",
      emoji: "",
    },
    {
      id: 2,
      src: "/images/IMG_9642.jpg",
      alt: "Child playing with blocks",
      title: "",
      emoji: "",
    },
    {
      id: 3,
      src: "/images/IMG_2325.jpg",
      alt: "Kids reading books",
      title: "",
      emoji: "",
    },
    {
      id: 4,
      src: "/images/IMG_2182.jpg",
      alt: "Children dancing",
      title: "",
      emoji: "",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
            Wonderful
          </span>{" "}
          World
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Where imagination meets fun! Explore our magical moments captured in
          pictures.
        </p>

        {/* Decorative border */}
        <div className="flex justify-center mt-6 space-x-2">
          {["", , "", "", ""].map((emoji, i) => (
            <span
              key={i}
              className="text-2xl animate-bounce"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>

      {/* Main Gallery Layout */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Image - Left Side */}
          <div className="lg:col-span-2">
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              {/* Image Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 inline-flex items-center gap-4">
                  <span className="text-4xl">
                    {galleryImages[activeImage].emoji}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {galleryImages[activeImage].title}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Click on other pictures to explore!
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-yellow-300/30 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute top-20 left-10 w-12 h-12 bg-blue-400/30 rounded-full blur-lg animate-pulse delay-300"></div>
            </div>
          </div>

          {/* Thumbnail Grid - Right Side */}
          <div className="space-y-6">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setActiveImage(index)}
                className={`relative w-full h-32 rounded-2xl overflow-hidden group transition-all duration-300 ${
                  activeImage === index
                    ? "ring-4 ring-yellow-400 scale-105 shadow-xl"
                    : "hover:scale-105 hover:ring-2 hover:ring-blue-300"
                }`}
              >
                {/* Thumbnail Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 transition-colors duration-300 ${
                    activeImage === index
                      ? "bg-blue-400/20"
                      : "bg-black/30 group-hover:bg-black/10"
                  }`}
                ></div>

                {/* Thumbnail Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`transform transition-all duration-300 ${
                      activeImage === index
                        ? "scale-125 rotate-6"
                        : "group-hover:scale-110"
                    }`}
                  >
                    <span className="text-4xl drop-shadow-lg">
                      {image.emoji}
                    </span>
                  </div>
                </div>

                {/* Active Indicator */}
                {activeImage === index && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-sm">✨</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-4">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeImage === index
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayfulGallery;
