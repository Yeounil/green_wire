"use client";

import Link from "next/link";

export default function LandingFooter() {
  return (
    <footer className="py-12 md:py-16 bg-gw-black border-t-2 border-gw-green relative">
      {/* Background Grid */}
      <div className="absolute inset-0 brutal-grid opacity-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Main Content - Simplified */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-3">
              <span className="font-bebas text-3xl md:text-4xl text-gw-green tracking-wider">
                GREEN
              </span>
              <span className="font-bebas text-3xl md:text-4xl text-white tracking-wider">
                WIRE
              </span>
              <span className="w-3 h-1 bg-gw-green brutal-pulse" />
            </Link>
            <p className="text-base text-gw-gray-400 font-syne">
              미국주식 뉴스, AI로 쉽게
            </p>
          </div>

          {/* Links - Horizontal */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <a
              href="mailto:help@greenwire.kr"
              className="text-base text-gw-gray-400 hover:text-gw-green transition-colors font-syne"
            >
              문의하기
            </a>
            <span className="w-1 h-1 bg-gw-green/30 hidden md:block" />
            <a
              href="#"
              className="text-base text-gw-gray-400 hover:text-gw-green transition-colors font-syne"
            >
              이용약관
            </a>
            <span className="w-1 h-1 bg-gw-green/30 hidden md:block" />
            <a
              href="#"
              className="text-base text-gw-gray-400 hover:text-gw-green transition-colors font-syne"
            >
              개인정보처리방침
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-gw-green/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gw-gray-500 font-mono">
            © 2025 Green Wire. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gw-gray-600 uppercase tracking-widest font-mono">
              Made in Korea
            </span>
            <span className="w-2 h-2 bg-gw-green" />
          </div>
        </div>
      </div>
    </footer>
  );
}
