/* eslint-disable @next/next/no-img-element */
export default function Growth() {
  return (
    <section className="section-padding bg-gradient-to-r from-[#eff6be] via-[#f5f8da] to-[#f0f2f8] overflow-hidden py-16 lg:py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight">
              Your Path to Professional{" "}
              <br className="hidden sm:block" />
              Growth Starts Here!
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey.
              Whether you are looking to sharpen specific skills, gain
              industry expertise, or embark on a new career path entirely,
              we have the resources you need.
            </p>

            {/* Stats Counter */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 pt-4">
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">12K</p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">Students</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">70+</p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">Courses</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">16</p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">Creators</p>
              </div>
            </div>
          </div>

          {/* Right Visual Composite */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[460px] md:max-w-[500px] h-[380px] sm:h-[440px] flex items-end">
              
              {/* 1. Yellow Spring 3D Ornament (Frame_2.png) - BEHIND PROGRESS CARD */}
              <img
                src="/images/Frame_2.png"
                alt=""
                className="pointer-events-none absolute -right-4 sm:-right-8 top-[18%] sm:top-[20%] z-10 w-20 sm:w-28 md:w-32 rotate-[12deg]"
              />

              {/* 2. Background Figma Course Card */}
              <div className="absolute top-0 left-2 sm:left-6 w-[230px] sm:w-[270px] bg-white rounded-2xl shadow-xl p-3 border border-slate-100 z-0">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-2.5 bg-slate-100">
                  <img
                    src="/images/card_1.jpg"
                    alt="Learn Figma"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Badges on Top of Image */}
                  <div className="absolute bottom-2 left-2 flex gap-1.5">
                    <span className="bg-white/90 backdrop-blur-sm text-[8px] sm:text-[9px] font-semibold text-slate-800 px-2 py-0.5 rounded-full shadow-sm">
                      17 Lessons
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm text-[8px] sm:text-[9px] font-semibold text-slate-800 px-2 py-0.5 rounded-full shadow-sm">
                      2 hours 16 min
                    </span>
                  </div>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  Learn Figma from Basic
                </h3>
                <p className="text-[10px] text-slate-400 mb-2">by purepearl studio</p>
                <div className="flex items-center justify-between pt-1 border-t border-slate-50">
                  <span className="bg-slate-100 text-[9px] font-medium text-slate-600 px-2 py-0.5 rounded">
                    📊 Beginner
                  </span>
                  <p className="text-xs font-bold text-blue-600">
                    $25<span className="text-[9px] text-slate-400 font-normal">/lifetime</span>
                  </p>
                </div>
              </div>

              {/* 3. Foreground Student Cutout Image */}
              <img
                src="/images/hero-student.png"
                alt="Student"
                className="relative z-10 w-[82%] sm:w-[86%] h-auto object-contain ml-auto drop-shadow-2xl translate-y-3"
              />

              {/* 4. Floating Learning Progress Card - ON TOP OF SPRING */}
              <div className="absolute right-0 top-[40%] sm:top-[42%] z-20 bg-white rounded-2xl shadow-xl p-3 sm:p-4 min-w-[140px] sm:min-w-[170px] border border-slate-100">
                <p className="text-[10px] sm:text-xs font-medium text-slate-500 mb-0.5">
                  Learning Progress
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">
                  55%
                </p>
                <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#d2f83a] w-[55%] rounded-full" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}