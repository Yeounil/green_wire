import Link from "next/link";

/**
 * LoginFormFooter Component
 * 로그인 폼의 푸터 (회원가입 링크)
 */
export function LoginFormFooter() {
  return (
    <div className="px-6 md:px-8 py-6 border-t-2 border-gw-green/20 text-center">
      <p className="text-gw-gray-400 font-syne">
        계정이 없으신가요?{" "}
        <Link
          href="/register"
          className="text-gw-green font-bold uppercase tracking-wider hover:translate-x-[-2px] hover:translate-y-[-2px] inline-block transition-transform duration-150"
        >
          가입하기 &rarr;
        </Link>
      </p>
    </div>
  );
}
