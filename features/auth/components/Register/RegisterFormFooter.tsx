import Link from "next/link";

/**
 * RegisterFormFooter Component
 * 회원가입 폼의 푸터 (로그인 링크)
 */
export function RegisterFormFooter() {
  return (
    <div className="px-6 md:px-8 py-6 border-t-2 border-gw-green/20 text-center">
      <p className="text-gw-gray-400 font-syne">
        이미 계정이 있으신가요?{" "}
        <Link
          href="/login"
          className="text-gw-green font-bold uppercase tracking-wider hover:translate-x-[-2px] hover:translate-y-[-2px] inline-block transition-transform duration-150"
        >
          로그인 &rarr;
        </Link>
      </p>
    </div>
  );
}
