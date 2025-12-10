"use client";

export default function MobileCTA() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Fixed CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gw-black border-t border-gw-gray-200 dark:border-gw-gray-800 md:hidden z-50"
        role="complementary"
        aria-label="모바일 출시 알림 버튼"
      >
        <button
          onClick={scrollToTop}
          className="cursor-pointer block w-full py-4 bg-gw-green hover:bg-gw-green-light text-white font-semibold rounded-lg text-center shadow-md"
          aria-label="출시 알림 받기"
        >
          출시 알림 받기
        </button>
      </div>

      {/* Add padding at bottom for mobile fixed CTA */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  );
}
