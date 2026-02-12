"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "/images/IMG_9611.jpg",
    alt: "Grandfather and granddaughter smiling",
  },
  {
    src: "/images/IMG_2182.jpg",
    alt: "Mother and daughter talking",
  },
  {
    src: "/images/IMG_9761.jpg",
    alt: "Mother holding baby",
  },
  {
    src: "/images/IMG_2325.jpg",
    alt: "Happy family portrait",
  },
];

export default function FamilyOvalGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Go to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-blue-700 mb-10 md:mb-16">
          Moments of <span className="text-orange-600">Joy</span> & Connection
        </h2>

        {/* Carousel Container – smaller size */}
        <div className="relative mx-auto max-w-3xl overflow-hidden">
          {/* Images – rectangular & smaller */}
          <div className="relative aspect-[4/3] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl border-2 border-orange-100 hover:border-orange-300 transition-colors">
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority={currentIndex === 0}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-500 w-8"
                    : "bg-gray-300 hover:bg-orange-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
