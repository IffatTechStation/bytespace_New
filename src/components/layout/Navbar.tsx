"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0553f6] hero-grid text-white border-b border-blue-500/30">
      <div className="container-custom">
        <div className="flex h-18 sm:h-20 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d2f83a] text-slate-900 font-extrabold text-lg shadow-sm">
              b
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              ByteSpace
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-semibold text-white hover:text-[#d2f83a] transition-colors"
            >
              Home
            </Link>
            <Link 
              href="#courses" 
              className="text-sm font-medium text-blue-100/90 hover:text-white transition-colors"
            >
              Courses
            </Link>
            <Link 
              href="#creators" 
              className="text-sm font-medium text-blue-100/90 hover:text-white transition-colors"
            >
              Creators
            </Link>
          </nav>

          {/* Action Buttons & Cart Icon */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/login" 
              className="text-sm font-medium text-blue-100 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/register" 
              className="text-sm font-semibold text-white hover:text-[#d2f83a] transition-colors"
            >
              Join Us
            </Link>
            
            {/* Shopping Bag Icon */}
            <button 
              className="p-2 text-white hover:text-[#d2f83a] transition-colors"
              aria-label="Shopping Cart"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2} 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                />
              </svg>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 rounded-lg text-white hover:bg-blue-600/50" 
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-blue-500/30">
            <nav className="flex flex-col gap-1 pt-3">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)} 
                className="px-3 py-2 text-sm font-semibold text-white bg-blue-700/40 rounded-lg"
              >
                Home
              </Link>
              <Link 
                href="#courses" 
                onClick={() => setIsOpen(false)} 
                className="px-3 py-2 text-sm font-medium text-blue-100 hover:bg-blue-700/30 rounded-lg"
              >
                Courses
              </Link>
              <Link 
                href="#creators" 
                onClick={() => setIsOpen(false)} 
                className="px-3 py-2 text-sm font-medium text-blue-100 hover:bg-blue-700/30 rounded-lg"
              >
                Creators
              </Link>
              <div className="flex flex-col gap-2.5 mt-3 px-3">
                <Link 
                  href="/login" 
                  className="text-center py-2.5 text-sm font-medium text-white border border-blue-400/30 rounded-full"
                >
                  Sign In
                </Link>
                <Link 
                  href="/register" 
                  className="text-center py-2.5 text-sm font-bold bg-[#d2f83a] text-slate-900 rounded-full"
                >
                  Join Us
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}