"use client";

export default function MobileCTA() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Fixed CTA - Brutalist Style */}
      <div
        className="fixed bottom-0 left-0 right-0 p-3 bg-gw-black border-t-2 border-gw-green md:hidden z-50"
        role="complementary"
        aria-label="모바일 출시 알림 버튼"
      >
        <button
          onClick={scrollToTop}
          className="cursor-pointer w-full py-4 bg-gw-green text-gw-black font-bold uppercase tracking-wider text-sm font-syne border-2 border-gw-green flex items-center justify-center gap-2 active:translate-y-1 active:shadow-none transition-all shadow-[0_4px_0_#008a33]"
          aria-label="출시 알림 받기"
        >
          출시 알림 받기
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="square" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      {/* Spacer for mobile fixed CTA */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  );
}
