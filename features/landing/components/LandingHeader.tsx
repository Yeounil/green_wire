"use client";

import Link from "next/link";

export default function LandingHeader() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gw-black border-b-2 border-gw-green">
      <nav
        className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center"
        role="navigation"
        aria-label="메인 네비게이션"
      >
        {/* Logo - Brutalist Style */}
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label="Green Wire 홈"
        >
          <span className="font-bebas text-2xl md:text-3xl text-gw-green tracking-wider brutal-glitch">
            GREEN
          </span>
          <span className="font-bebas text-2xl md:text-3xl text-white tracking-wider">
            WIRE
          </span>
          {/* Animated underscore */}
          <span className="w-3 h-1 bg-gw-green brutal-pulse" />
        </Link>

        {/* CTA Button - Brutalist Style */}
        <button
          onClick={scrollToTop}
          className="cursor-pointer hidden md:flex items-center gap-2 px-5 py-2.5 bg-gw-green text-gw-black font-bold uppercase tracking-wide text-sm border-2 border-gw-green hover:bg-transparent hover:text-gw-green transition-all duration-150 brutal-hover"
          aria-label="출시 알림 받기"
        >
          <span className="font-syne">출시 알림</span>
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth={3}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>

        {/* Mobile Menu Icon */}
        <button
          onClick={scrollToTop}
          className="md:hidden w-10 h-10 flex items-center justify-center border-2 border-gw-green text-gw-green"
          aria-label="메뉴"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="square" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
