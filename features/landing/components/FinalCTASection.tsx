import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,166,62,0.08)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(0,166,62,0.15)_0%,transparent_60%)]" />
      <div className="max-w-3xl mx-auto text-center relative">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          지금 바로 시작하세요
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          신용카드 없이, 7일간 무료로 사용해보세요
        </p>
        <Link
          href="/register"
          className="inline-block px-10 py-4 bg-[#00a63e] hover:bg-[#00c94a] text-white font-semibold rounded-lg shadow-[0_0_20px_rgba(0,166,62,0.25)] hover:shadow-[0_0_30px_rgba(0,166,62,0.4)] transition-all hover:-translate-y-0.5"
        >
          무료로 시작하기
        </Link>
        <p className="mt-8 text-sm text-zinc-500">
          질문이 있으신가요?{" "}
          <a
            href="mailto:team@greenwire.com"
            className="text-[#00a63e] hover:underline"
          >
            team@greenwire.com
          </a>
        </p>
      </div>
    </section>
  );
}
