/* eslint-disable @next/next/no-img-element */
const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function ManageCourses() {
  return (
    <section className="section-padding bg-gradient-to-r from-slate-50 via-lime-50/20 to-indigo-50/30 overflow-hidden py-16 lg:py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Composite */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[360px] sm:max-w-[440px] md:max-w-[480px] h-[380px] sm:h-[460px] flex items-end">
              
              {/* 1. Top Left - Total Revenue Card (Blue) */}
              <div className="absolute top-0 left-0 z-20 bg-blue-600 text-white rounded-2xl shadow-xl p-3 sm:p-4 min-w-[150px] sm:min-w-[180px]">
                <p className="text-[10px] sm:text-xs text-blue-200 font-medium">Total Revenue</p>
                <p className="text-xs text-blue-300 scale-90 origin-left">July 1-28</p>
                <p className="text-xl sm:text-2xl font-extrabold mt-1">$120.29</p>
                <div className="mt-2 h-1.5 w-full bg-blue-500/50 rounded-full overflow-hidden">
                  <div className="h-full bg-[#d2f83a] w-[70%] rounded-full" />
                </div>
              </div>

              {/* 2. Middle Left - Year to Date Card (Blue) */}
              <div className="absolute top-[32%] sm:top-[34%] left-0 z-20 bg-blue-600 text-white rounded-2xl shadow-xl p-3 sm:p-4 min-w-[130px] sm:min-w-[155px]">
                <p className="text-[10px] sm:text-xs text-blue-200 font-medium">Year to Date</p>
                <p className="text-[9px] text-blue-300">2023</p>
                <p className="text-lg sm:text-xl font-extrabold mt-0.5">$1,200.38</p>
                <span className="inline-block mt-1 bg-lime-400 text-slate-900 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                  +12%
                </span>
              </div>

              {/* 3. Yellow Spring 3D Ornament (Frame_2.png) */}
              <img
                src="/images/Frame_2.png"
                alt=""
                className="pointer-events-none absolute right-2 sm:right-6 top-[15%] sm:top-[18%] z-0 w-24 sm:w-32 md:w-36 rotate-[25deg]"
              />

              {/* 4. Center Foreground Creator/Student Cutout */}
              <img
                src="/images/hero-student.png"
                alt="Course Creator"
                className="relative z-10 w-[82%] sm:w-[86%] h-auto object-contain mx-auto drop-shadow-2xl translate-y-2"
              />

              {/* 5. Bottom Right - Happy Students Floating Card */}
              <div className="absolute right-0 sm:right-4 bottom-4 sm:bottom-8 z-20 bg-white rounded-2xl shadow-xl p-2.5 sm:p-3.5 border border-slate-100 flex items-center gap-2.5">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <p className="text-[10px] sm:text-xs font-bold text-slate-900">Happy Students</p>
                    <span className="text-[9px] text-amber-500 font-medium">4.5 (240) ★</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex -space-x-1.5">
                      <img src="https://picsum.photos/seed/hs1/28/28" alt="" className="h-5 w-5 rounded-full border-2 border-white object-cover" />
                      <img src="https://picsum.photos/seed/hs2/28/28" alt="" className="h-5 w-5 rounded-full border-2 border-white object-cover" />
                      <img src="https://picsum.photos/seed/hs3/28/28" alt="" className="h-5 w-5 rounded-full border-2 border-white object-cover" />
                      <img src="https://picsum.photos/seed/hs4/28/28" alt="" className="h-5 w-5 rounded-full border-2 border-white object-cover" />
                    </div>
                    <span className="bg-[#d2f83a] text-slate-900 text-[9px] font-extrabold px-1.5 py-0.5 rounded-full ml-1">
                      2K+
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight">
              Create & Manage{" "}
              <br className="hidden sm:block" />
              Courses Easily.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              ByteSpace supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </p>

            <ul className="space-y-3 pt-2 inline-block text-left">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm sm:text-base font-medium text-slate-800">
                  <span className="h-5 w-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 shadow-sm">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}