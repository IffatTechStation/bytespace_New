const paths = [
  { icon: "✏️", label: "Design" },
  { icon: "💻", label: "Development" },
  { icon: "🖥️", label: "IT & Software" },
  { icon: "📊", label: "Business" },
  { icon: "📢", label: "Marketing" },
  { icon: "📷", label: "Photography" },
];

export default function Features() {
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-slate-500 text-sm px-2">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various
            fields, ensuring there&apos;s something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {paths.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-5 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-slate-50 flex items-center justify-center text-xl sm:text-2xl">
                {item.icon}
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-700 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
