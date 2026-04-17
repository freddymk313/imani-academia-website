import About from "@/components/landing/About";
import Formations from "@/components/landing/Formations";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Formations />

      <WhyChooseUs />

      {/*<Pricing />

      <FAQ />

      <CTA />

      <Footer /> */}
    </main>
  );
}
