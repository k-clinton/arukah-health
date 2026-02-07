import Image from "next/image";

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
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-blue-700 mb-10 md:mb-16">
          Moments of <span className="text-[#FFB347]">Joy</span> & Connection
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-[420px] w-[320px] overflow-hidden rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 180px, 220px"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
