/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function CTA() {
  return (
    <section id="creators" className="hero-grid relative overflow-hidden bg-blue-600 text-white py-16 sm:py-20 md:py-24">
      
      {/* --- 3D Floating Ornaments --- */}
      
      {/* 1. Top Left - Lime Spring */}
      <img
        src="/images/Frame_2.png"
        alt=""
        className="pointer-events-none absolute -left-6 -top-8 w-28 sm:w-36 md:w-44 -rotate-45 opacity-90 z-0"
      />

      {/* 2. Top Left Inner - White Squiggle */}
      <img
        src="/images/Frame_3.png"
        alt=""
        className="pointer-events-none absolute left-[12%] sm:left-[15%] top-4 sm:top-6 w-16 sm:w-20 md:w-24 rotate-12 opacity-90 z-0"
      />

      {/* 3. Bottom Left - White Cone */}
      <img
        src="/images/Cone_1.png"
        alt=""
        className="pointer-events-none absolute -left-4 bottom-[20%] w-16 sm:w-20 md:w-24 -rotate-12 opacity-90 z-0"
      />

      {/* 4. Bottom Left - Lime Ring/Torus */}
      <img
        src="/images/Frame_1.png"
        alt=""
        className="pointer-events-none absolute left-2 -bottom-10 w-32 sm:w-44 md:w-52 -rotate-12 opacity-90 z-0"
      />

      {/* 5. Top Right - Lime Pyramid */}
      <img
        src="/images/Cone_2.png"
        alt=""
        className="pointer-events-none absolute right-[12%] sm:right-[15%] top-4 sm:top-6 w-16 sm:w-22 md:w-28 rotate-12 opacity-90 z-0"
      />

      {/* 6. Top Right Outer - White Cylinder */}
      <img
        src="/images/Cone_4.png"
        alt=""
        className="pointer-events-none absolute -right-8 -top-6 w-32 sm:w-40 md:w-48 rotate-12 opacity-90 z-0"
      />

      {/* 7. Bottom Right - Lime Spring */}
      <img
        src="/images/Frame_2.png"
        alt=""
        className="pointer-events-none absolute -right-6 -bottom-10 w-28 sm:w-36 md:w-44 rotate-12 opacity-90 z-0"
      />

      {/* --- Content Overlay --- */}
      <div className="container-custom relative z-10 text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 max-w-3xl mx-auto leading-tight tracking-tight">
          Unlock Your Potential as a{" "}
          <br className="hidden sm:block" />
          Creator with ByteSpace
        </h2>
        <p className="text-blue-100 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed opacity-95">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a
          part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your
          expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link 
          href="/register" 
          className="inline-block bg-[#d2f83a] hover:bg-[#bce427] text-slate-900 font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}