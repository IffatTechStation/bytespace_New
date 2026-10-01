


import Image from "next/image";

const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation",
  "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration",
  "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design",
  "Photography", "Productivity", "Web Development", "Data Science", "Cooking", "+ More"
];

const courses = [
  { title: "Learn Figma from Basic", lessons: 17, duration: "2 hours 30 mins", comments: 59, rating: 4.5, instructor: "iffstudio", level: "Beginner", price: 25, img: "/images/card_1.jpg" },
  { title: "Build Digital Asset", lessons: 17, duration: "2 hours 30 mins", comments: 49, rating: 4.5, instructor: "iffstudio", level: "Beginner", price: 25, img: "/images/card_2.jpg" },
  { title: "the Power of Big Data", lessons: 17, duration: "2 hours 30 mins", comments: 59, rating: 4.5, instructor: "iffstudio", level: "Beginner", price: 25, img: "/images/card_3.jpg" },
  { title: "Balancing Productivity an...", lessons: 17, duration: "2 hours 30 mins", comments: 59, rating: 4.5, instructor: "iffstudio", level: "Beginner", price: 25, img: "/images/card_4.jpg" },
  { title: "Mastering Money Manage...", lessons: 17, duration: "2 hours 30 mins", comments: 59, rating: 4.5, instructor: "iffstudio", level: "Beginner", price: 25, img: "/images/card_5.jpg" },
  { title: "From Idea to Startup Succ...", lessons: 17, duration: "2 hours 30 mins", comments: 59, rating: 4.5, instructor: "iffstudio", level: "Beginner", price: 25, img: "/images/card_6.jpg" },
];

export default function Courses() {
  return (
    <section id="courses" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Discover Your Passion,{" "}
            <br className="hidden sm:block" />
            Build Your Skills
          </h2>
          <p className="text-slate-500 text-sm md:text-base px-2">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different
            fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Tags - scrollable on mobile */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 max-h-24 sm:max-h-none overflow-hidden sm:overflow-visible">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-colors ${
                i === 0
                  ? "bg-primary text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src={course.img}
                  alt={course.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] text-slate-400 flex-wrap">
                  <span>{course.lessons} Lessons</span>
                  <span>{course.duration}</span>
                  <span>{course.comments} Comments</span>
                </div>
                <h3 className="font-semibold text-slate-900 text-sm group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-amber-400">★</span>
                  <span className="font-medium text-slate-700">{course.rating}</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2 min-w-0">
                    <Image
                      src={`https://picsum.photos/seed/${course.title.slice(0,5)}/24/24`}
                      alt=""
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded-full object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-[11px] text-slate-500 truncate">by {course.instructor}</p>
                      <p className="text-[10px] text-slate-400">{course.level}</p>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-primary shrink-0">${course.price} <span className="text-[10px] font-normal text-slate-400">Lifetime</span></p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
