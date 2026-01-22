import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * RegisterFormFooter Component
 * 회원가입 폼의 푸터 (로그인 링크)
 */
export function RegisterFormFooter() {
  return (
    <div className="px-6 md:px-8 py-5 border-t border-white/5 text-center bg-white/[0.02]">
      <p className="text-gw-gray-400">
        이미 계정이 있으신가요?{" "}
        <Link
          href="/login"
          className="inline-flex items-center gap-1 text-gw-green font-medium hover:underline transition-colors"
        >
          로그인
          <ArrowRight className="w-4 h-4" />
        </Link>
      </p>
    </div>
  );
}
