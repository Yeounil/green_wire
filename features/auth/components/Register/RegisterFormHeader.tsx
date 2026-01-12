/**
 * RegisterFormHeader Component
 * 회원가입 폼의 헤더
 */
export function RegisterFormHeader() {
  return (
    <div className="px-6 md:px-8 pt-8 pb-6 text-center border-b-2 border-gw-green/20">
      {/* Decorative Badge */}
      <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 border border-gw-green/50 bg-gw-green/10">
        <span className="w-1.5 h-1.5 bg-gw-green brutal-pulse" />
        <span className="text-xs font-bold uppercase tracking-widest text-gw-green font-syne">
          Sign Up
        </span>
      </div>

      <h1 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white leading-none tracking-wide">
        회원가입
      </h1>
      <p className="mt-4 text-base text-gw-gray-400 font-syne">
        새 계정을 만들어 AI 금융 분석을 시작하세요
      </p>
    </div>
  );
}
