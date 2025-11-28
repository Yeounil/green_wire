import Link from "next/link";

export default function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[#00a63e]">
          Green Wire
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            로그인
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 bg-[#00a63e] hover:bg-[#00c94a] text-white rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,166,62,0.25)] hover:shadow-[0_0_30px_rgba(0,166,62,0.4)]"
          >
            무료로 시작하기
          </Link>
        </div>
      </div>
    </header>
  );
}
