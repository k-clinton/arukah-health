import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/AboutUs";
import Stats from "@/components/Statistics";
import Extro from "@/components/HeroExtro";

export default function HomePage() {
  return (
    <main className="relative mx-auto min-h-screen ">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Extro />
    </main>
  );
}
