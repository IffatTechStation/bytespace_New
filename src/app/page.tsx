import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Courses from "@/components/sections/Courses";
import Features from "@/components/sections/Features";
import Growth from "@/components/sections/Growth";
import ManageCourses from "@/components/sections/ManageCourses";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Compact Logo Strip */}
        <div className="bg-[#f8f9fa] py-4 sm:py-6">
          <div className="container-custom flex justify-center items-center px-4">
            <Image 
              src="/images/Logo_Partner.png" 
              alt="Partner Logos" 
              width={1400}
              height={150}
              priority
              className="w-full max-w-5xl h-auto object-contain opacity-90 hover:opacity-100 transition-opacity" 
            />
          </div>
        </div>

        <Courses />
        <Features />
        <Growth />
        <ManageCourses />
        <CTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}