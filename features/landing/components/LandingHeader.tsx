"use client";

import Link from "next/link";

export default function LandingHeader() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gw-black border-b border-gw-gray-200 dark:border-gw-gray-800">
      <nav
        className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
        role="navigation"
        aria-label="메인 네비게이션"
      >
        <Link href="/" className="text-xl font-bold text-gw-green" aria-label="Green Wire 홈">
          Green Wire
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="cursor-pointer px-4 py-2 bg-gw-green hover:bg-gw-green-light text-white rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            aria-label="출시 알림 받기"
          >
            출시 알림 받기
          </button>
        </div>
      </nav>
    </header>
  );
}
