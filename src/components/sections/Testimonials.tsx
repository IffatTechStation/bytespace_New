const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    content:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    img: "https://picsum.photos/seed/sarah/80/80",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    content:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    img: "https://picsum.photos/seed/james/80/80",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    content:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    img: "https://picsum.photos/seed/alex/80/80",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-lime-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight text-center lg:text-left">
            Discover What Our{" "}
            <br className="hidden sm:block" />
            Community Is Saying
          </h2>
          <p className="text-slate-500 text-sm md:text-base self-end text-center lg:text-left px-2 lg:px-0">
            At ByteSpace, our vibrant community of learners and creators is at the
            heart of what we do. Hear directly from those who have experienced the
            transformative journey of learning and creating on our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                &ldquo;{item.content}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
