"use client";

import Link from "next/link";

export default function LandingHeader() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gw-black/80 backdrop-blur-xl border-b border-white/5">
      <nav
        className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center"
        role="navigation"
        aria-label="메인 네비게이션"
      >
        {/* Logo - Modern Fintech Style */}
        <Link
          href="/"
          className="group flex items-center gap-1.5"
          aria-label="Green Wire 홈"
        >
          <span className="text-xl md:text-2xl font-bold text-gw-green tracking-tight">
            Green
          </span>
          <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Wire
          </span>
          {/* Subtle glow dot */}
          <span className="w-1.5 h-1.5 rounded-full bg-gw-green animate-fintech-glow ml-0.5" />
        </Link>

        {/* CTA Button - Modern Fintech Style */}
        <button
          onClick={scrollToTop}
          className="cursor-pointer hidden md:flex items-center gap-2 fintech-btn-primary text-sm"
          aria-label="출시 알림 받기"
        >
          <span>출시 알림 받기</span>
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>

        {/* Mobile Menu Icon */}
        <button
          onClick={scrollToTop}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          aria-label="메뉴"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
