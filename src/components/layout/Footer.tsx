import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="container-custom py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand + Newsletter */}
          <div className="sm:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
                B
              </div>
              <span className="text-lg font-bold text-slate-900">
                Byte<span className="text-primary">Space</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 max-w-xs">
              Stay up to date with our latest features and releases by joining our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="btn-accent text-sm px-5 py-2.5 shrink-0">Search</button>
            </div>
            <p className="text-[11px] text-slate-400">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3 sm:mb-4">Featured Courses</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-primary">Featured Categories</Link></li>
              <li><Link href="#" className="hover:text-primary">Business</Link></li>
              <li><Link href="#" className="hover:text-primary">IT</Link></li>
              <li><Link href="#" className="hover:text-primary">Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3 sm:mb-4">Development</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-primary">Marketing</Link></li>
              <li><Link href="#" className="hover:text-primary">Photography</Link></li>
              <li><Link href="#" className="hover:text-primary">Finance</Link></li>
              <li><Link href="#" className="hover:text-primary">Sport</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3 sm:mb-4">Become a Creator</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-primary">Affiliate Program</Link></li>
              <li><Link href="#" className="hover:text-primary">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary">Help</Link></li>
              <li><Link href="#" className="hover:text-primary">About</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-400">© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
            <Link href="#" className="hover:text-primary">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
