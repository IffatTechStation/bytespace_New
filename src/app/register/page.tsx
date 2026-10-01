import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="lg:w-1/2 hero-grid relative overflow-hidden text-white p-6 sm:p-10 xl:p-14 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] lg:min-h-screen">
        <Link href="/" className="flex items-center gap-2 z-10">
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-accent text-primary font-bold text-base sm:text-lg">
            B
          </div>
        </Link>

        <div className="z-10 space-y-3 sm:space-y-4 max-w-md mt-6 lg:mt-0">
          <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold leading-tight">
            Sign up and come in
          </h1>
          <p className="text-blue-100 text-sm xl:text-base">
            The registration process is straightforward, uncomplicated,
            and efficient, allowing users to sign up quickly, easily, and at
            no cost.
          </p>
        </div>

        <div className="relative z-10 mt-6 hidden md:block">
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs text-slate-900 relative">
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl mb-3 overflow-hidden">
              <div className="w-full h-full bg-slate-800 flex items-end p-3">
                <div className="flex gap-1 items-end h-12">
                  {[40, 60, 35, 80, 50, 70, 45, 90, 55, 65].map((h, i) => (
                    <div key={i} className="w-2 bg-cyan-400 rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-sm">the Power of Big Data</h3>
            <div className="flex items-center justify-between mt-1">
              <p className="text-[11px] text-slate-400">by purepearl studio</p>
              <span className="text-xs font-medium text-amber-500">4.5 ★</span>
            </div>
            <p className="text-sm font-bold text-primary mt-2">$25<span className="text-[10px] font-normal text-slate-400">/lifetime</span></p>
          </div>
        </div>

        <div className="absolute top-16 left-10 w-12 h-12 sm:w-16 sm:h-16 border-4 border-accent rounded-full opacity-60 hidden sm:block" />
        <div className="absolute bottom-20 right-10 text-5xl text-white/20 font-bold hidden sm:block">~</div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-50 lg:bg-white">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg lg:shadow-none p-6 sm:p-8 md:p-10">
          <div className="mb-6 sm:mb-8">
            <p className="text-sm font-medium text-primary mb-1">Create an Account</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Welcome to<br />ByteSpace
            </h2>
          </div>

          <form className="space-y-4 sm:space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1.5">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                defaultValue="Jamie Davis"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 sm:py-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-slate-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                defaultValue="designer@example.com"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 sm:py-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-slate-50"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
                Password
              </label>
              <input
                id="password"
                type="password"
                defaultValue="********"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 sm:py-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-slate-50"
              />
            </div>

            <div className="flex justify-end">
              <button type="submit" className="btn-accent px-6 sm:px-8 py-2.5 text-sm font-semibold w-full sm:w-auto">
                Continue
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6 sm:mt-8">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
