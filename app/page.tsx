'use client';

import { About } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero-section";
import { Navbar } from "@/components/nav-bar";
import { OurProjects } from "@/components/our-projects";
import { QuerySection } from "@/components/query-section";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-foreground">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/house.png"
          alt="Luxury Villa Background"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Content Wrapper - Floating above background */}
      <div className="relative z-10 flex flex-col pb-10">
        <Navbar />
        <Hero />
        <QuerySection />

        {/* Sections with glass spacing */}
        <div className="flex flex-col">
          <Services />
          <About />
          <OurProjects />
          <Testimonials />
        </div>
        <Footer />
      </div>
    </main>
  );
}
