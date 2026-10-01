/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden text-white">
      {/* 6 ACCURATELY PLACED ORNAMENTS */}
      
      {/* 1. Yellow Spring - Top Left Corner */}
      <img
        src="/images/Frame_2.png"
        alt=""
        className="pointer-events-none absolute -left-8 top-8 z-[1] w-28 sm:w-36 md:w-48 lg:-left-12 lg:top-12 lg:w-56"
      />

      {/* 2. White Small Spring - Mid Left */}
      <img
        src="/images/Frame_1.png"
        alt=""
        className="pointer-events-none absolute left-[10%] top-[38%] z-[1] w-12 sm:w-16 md:w-20 lg:left-[14%] lg:top-[36%]"
      />

      {/* 3. White Ring (Torus) - Bottom Left */}
      <img
        src="/images/Cone_1.png"
        alt=""
        className="pointer-events-none absolute -left-6 bottom-[8%] z-[1] w-32 sm:w-44 md:w-56 lg:-left-10 lg:w-64"
      />

      {/* 4. Yellow Cylinder - Top Right Corner */}
      <img
        src="/images/Cone_2.png"
        alt=""
        className="pointer-events-none absolute -right-6 top-8 z-[1] w-24 sm:w-32 md:w-44 lg:-right-10 lg:top-12 lg:w-52"
      />

      {/* 5. White Cone/Pyramid - Mid Right */}
      <img
        src="/images/Cone_4.png"
        alt=""
        className="pointer-events-none absolute right-[8%] top-[32%] z-[1] w-14 sm:w-20 md:w-28 lg:right-[12%] lg:top-[34%]"
      />

      {/* 6. White Large Spring - Bottom Right */}
      <img
        src="/images/Frame_3.png"
        alt=""
        className="pointer-events-none absolute -right-8 bottom-[10%] z-[1] w-28 sm:w-36 md:w-48 lg:-right-12 lg:w-56"
      />

      <div className="container-custom relative z-10 pt-20 pb-0 sm:pt-28 md:pt-32">
        <div className="relative z-20 mx-auto max-w-2xl space-y-4 text-center sm:space-y-5">
          <h1 className="text-[2rem] font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-blue-100/90 sm:text-base">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
          <div className="mx-auto flex max-w-[400px] items-center rounded-full bg-white p-1 shadow-xl">
            <div className="pl-4 text-slate-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
            <button
              type="button"
              className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-accent-dark"
            >
              Search
            </button>
          </div>
        </div>

        {/* VISUAL GROUP CONTAINER */}
        <div className="relative mx-auto mt-8 flex h-[350px] w-[280px] items-end justify-center sm:h-[420px] sm:w-[380px] md:h-[500px] md:w-[460px]">
          
          {/* HALF CIRCLE */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 h-[88%] w-[500px] max-w-[180%] rounded-t-full bg-accent sm:w-[700px] md:w-[850px]" />

          {/* STUDENT IMAGE */}
          <img
            src="/images/hero-student.png"
            alt="Student with laptop"
            className="relative z-10 h-[108%] w-auto max-w-none object-contain object-bottom"
            style={{ marginBottom: "-2%" }}
          />

          {/* UI/UX DESIGN CARD */}
          <div className="absolute -left-4 top-[25%] z-20 rounded-xl bg-white px-2.5 py-1.5 shadow-md sm:-left-12 sm:top-[28%] sm:px-3 sm:py-2 md:-left-16">
            <p className="whitespace-nowrap text-[10px] font-semibold text-slate-900 sm:text-xs">UI/UX Design</p>
            <p className="whitespace-nowrap text-[8px] text-slate-500 sm:text-[10px]">200 Courses · 1000+ Students</p>
          </div>

          {/* LEARNING PROGRESS CARD */}
          <div className="absolute -right-20 top-[18%] z-20 min-w-[130px] rounded-xl bg-white px-3.5 py-2.5 shadow-md sm:-right-8 sm:top-[22%] sm:min-w-[160px] sm:rounded-2xl sm:px-4 sm:py-3 md:-right-12">
            <p className="text-[10px] text-slate-500 sm:text-sm">Learning Progress</p>
            <p className="text-lg font-bold leading-tight text-slate-900 sm:text-3xl">55%</p>
            <div className="mt-1.5 h-2 w-full rounded-full bg-slate-100 sm:h-2.5">
              <div className="h-full w-[55%] rounded-full bg-accent" />
            </div>
          </div>

          {/* HAPPY STUDENTS CARD */}
          <div className="absolute bottom-[12%] -left-3 z-20 flex items-center gap-1.5 rounded-xl bg-white p-2 shadow-md sm:-left-10 sm:gap-2 sm:p-2.5 md:-left-14">
            <div>
              <p className="whitespace-nowrap text-[10px] font-semibold text-slate-900 sm:text-xs">Happy Students</p>
              <p className="text-[8px] text-slate-500 sm:text-[10px]">4.5 (240) ★</p>
            </div>
            <div className="flex items-center -space-x-1.5">
              <img src="https://picsum.photos/seed/s1/32/32" alt="" className="h-5 w-5 rounded-full border border-white object-cover sm:h-6 sm:w-6 sm:border-2" />
              <img src="https://picsum.photos/seed/s2/32/32" alt="" className="h-5 w-5 rounded-full border border-white object-cover sm:h-5 sm:w-5 sm:border-2" />
              <img src="https://picsum.photos/seed/s3/32/32" alt="" className="h-5 w-5 rounded-full border border-white object-cover sm:h-6 sm:w-6 sm:border-2" />
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white bg-accent text-[8px] font-bold text-slate-900 sm:h-6 sm:w-6 sm:border-2 sm:text-[9px]">2K+</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}