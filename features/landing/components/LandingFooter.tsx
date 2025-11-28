import Link from "next/link";

export default function LandingFooter() {
  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div>
            <Link href="/" className="text-xl font-bold text-[#00a63e]">
              Green Wire
            </Link>
            <p className="mt-4 text-sm text-zinc-500">
              미국주식 뉴스, AI로 쉽게
            </p>
          </div>

          {/* 제품 */}
          <div>
            <h4 className="font-semibold mb-4">제품</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="#" className="hover:text-[#00a63e] transition-colors">
                  기능
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00a63e] transition-colors">
                  요금제
                </a>
              </li>
            </ul>
          </div>

          {/* 회사 */}
          <div>
            <h4 className="font-semibold mb-4">회사</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="#" className="hover:text-[#00a63e] transition-colors">
                  소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00a63e] transition-colors">
                  블로그
                </a>
              </li>
            </ul>
          </div>

          {/* 법적 고지 */}
          <div>
            <h4 className="font-semibold mb-4">법적 고지</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#00a63e] transition-colors"
                >
                  이용약관
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#00a63e] transition-colors"
                >
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-500">
          © 2025 Green Wire. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
