import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * LoginFormFooter Component
 * 로그인 폼의 푸터 (회원가입 링크)
 */
export function LoginFormFooter() {
  return (
    <div className="px-6 md:px-8 py-5 border-t border-white/5 text-center bg-white/[0.02]">
      <p className="text-gw-gray-400">
        계정이 없으신가요?{" "}
        <Link
          href="/register"
          className="inline-flex items-center gap-1 text-gw-green font-medium hover:underline transition-colors"
        >
          가입하기
          <ArrowRight className="w-4 h-4" />
        </Link>
      </p>
    </div>
  );
}
