import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 md:pb-24 px-6 overflow-hidden">
      {/* Green Radial Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#00a63e] opacity-5 dark:opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative w-full">
        <div className="flex flex-col items-center text-center">
          {/* Tech Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00a63e]/10 border border-[#00a63e]/30 text-[#00a63e] rounded-full text-sm font-medium mb-6">
            FinBERT + GPT-4 기반
          </span>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            영어 뉴스 직접 안 읽어도 됩니다
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">
            AI가 읽고, 분석하고, 요약해드려요.
          </p>

          {/* CTA Button */}
          <Link
            href="/register"
            className="px-8 py-4 bg-[#00a63e] hover:bg-[#00c94a] text-white font-semibold rounded-lg shadow-[0_0_20px_rgba(0,166,62,0.25)] hover:shadow-[0_0_30px_rgba(0,166,62,0.4)] hover:-translate-y-0.5 transition-all duration-200 text-lg"
          >
            무료로 시작하기
          </Link>

          {/* Trust Text */}
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
            신용카드 없이 · 7일 무료
          </p>

          {/* Dashboard Mockup */}
          <div className="mt-12 md:mt-16 w-full max-w-4xl">
            <div className="bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200 dark:border-zinc-700/50 rounded-2xl p-4 shadow-xl">
              <Image
                src="/stock.png"
                alt="Green Wire 대시보드"
                width={900}
                height={600}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
