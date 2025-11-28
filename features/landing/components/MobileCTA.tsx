import Link from "next/link";

export default function MobileCTA() {
  return (
    <>
      {/* Mobile Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800 md:hidden z-50">
        <Link
          href="/register"
          className="block w-full py-4 bg-[#00a63e] hover:bg-[#00c94a] text-white font-semibold rounded-lg text-center shadow-[0_0_20px_rgba(0,166,62,0.25)]"
        >
          무료로 시작하기
        </Link>
      </div>

      {/* Add padding at bottom for mobile fixed CTA */}
      <div className="h-20 md:hidden" />
    </>
  );
}
