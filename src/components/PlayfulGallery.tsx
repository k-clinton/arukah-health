"use client";

import Image from "next/image";

const PlayfulGallery = () => {
  // Five images only
  const galleryImages = [
    {
      id: 1,
      src: "/images/IMG_9611.jpg",
      alt: "Kids painting together joyfully",
    },
    {
      id: 2,
      src: "/images/IMG_9642.jpg",
      alt: "Child building with colorful blocks",
    },
    {
      id: 3,
      src: "/images/IMG_2325.jpg",
      alt: "Children reading books with big smiles",
    },
    {
      id: 4,
      src: "/images/IMG_2182.jpg",
      alt: "Group of children dancing happily",
    },
    {
      id: 5,
      src: "/images/hero3.png", // or any fifth image you have
      alt: "Child reaching for the sky in playful movement",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4793FF] mb-4">
          Moments of <span className="text-[#FFB347]">Joy</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Capturing the magic of movement, laughter, and growth at Arukah
          Health.
        </p>
      </div>

      {/* Gallery – straight line of oval images */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-6 md:gap-8 overflow-x-auto pb-4 scrollbar-hide">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="flex-shrink-0 w-64 h-64 md:w-72 md:h-72 relative group"
            >
              {/* Oval border + image */}
              <div className="w-full h-full rounded-full border-4 border-[#FFB347] overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 288px"
                />
              </div>

              {/* Optional subtle hover overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Optional caption below */}
      <p className="text-center text-gray-500 mt-10 text-sm md:text-base"></p>
    </section>
  );
};

export default PlayfulGallery;
