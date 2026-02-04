// src/components/GallerySection.tsx
import Image from "next/image";

const galleryImages = [
  "/images/IMG_9909.jpg",
  "/images/IMG_9652.jpg",
  "/images/IMG_9611.jpg",
  "/images/IMG_9600 (1).jpg",
  "/images/IMG_9516 (1).JPG",
];

export default function GallerySection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Horizontal image row */}
        <div className="flex flex-nowrap gap-6 md:gap-8 overflow-x-auto pb-4 scrollbar-hide justify-start md:justify-center">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 relative group rounded-full overflow-hidden border-4 border-[#FFB347] shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-height: 768px) 500px, 320px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
