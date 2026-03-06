import Hero from "@/components/Hero";
import About from "@/components/AboutUs";
import Stats from "@/components/Statistics";
import Extro from "@/components/HeroExtro";
import Gallery from "@/components/Gallery/page";
import Testimonials from "@/components/Testimonials";
import Cards from "@/components/OurServicesSection";

export default function HomePage() {
  return (
    <main className="relative mx-auto min-h-screen mt-7 ">
      <Hero />
      <Cards />
      <About />
      <Stats />
      <Extro />
      <Testimonials />
      <Gallery />
    </main>
  );
}
