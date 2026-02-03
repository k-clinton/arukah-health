// src/components/GallerySection.tsx
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/IMG_9909.jpg",
    alt: "Arukah Health clinic exterior with welcoming garden in Nairobi",
    caption: "Our welcoming home in Nairobi",
  },
  {
    src: "/images/IMG_9652.jpg",
    alt: "Child smiling during joyful movement session with caregiver",
    caption: "Moments of connection and growth",
  },
  {
    src: "/images/IMG_9611.jpg",
    alt: "Young child engaged in playful balance and strength exercise",
    caption: "Fun, purposeful movement",
  },
  {
    src: "/images/IMG_9600 (1).jpg",
    alt: "Children and therapist in group movement play",
    caption: "Building confidence together",
  },
  {
    src: "/images/IMG_9516 (1).JPG",
    alt: "Child reaching new milestone with support",
    caption: "Celebrating every step forward",
  },
  {
    src: "/images/IMG_2198.JPG",
    alt: "Therapist and child sharing a high-five after session",
    caption: "Where care meets joy",
  },
];

export default function GallerySection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-blue-700 mb-4">
            Arukah Health <span className="text-blue-700">Gallery</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Capturing the joy, progress, and connection in every child&apos;s
            movement journey.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative aspect-[4/3] md:aspect-[5/4]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Caption */}
              <div className="p-5 md:p-6 text-center">
                <p className="text-gray-700 font-medium text-base md:text-lg">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional footer text */}
        <p className="text-center text-gray-500 mt-12 text-lg">
          More moments of hope and healing being created every day.
        </p>
      </div>
    </section>
  );
}
