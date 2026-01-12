/**
 * LoginFormHeader Component
 * 로그인 폼의 헤더
 */
export function LoginFormHeader() {
  return (
    <div className="px-6 md:px-8 pt-8 pb-6 text-center border-b-2 border-gw-green/20">
      {/* Decorative Badge */}
      <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 border border-gw-green/50 bg-gw-green/10">
        <span className="w-1.5 h-1.5 bg-gw-green brutal-pulse" />
        <span className="text-xs font-bold uppercase tracking-widest text-gw-green font-syne">
          Sign In
        </span>
      </div>

      <h1 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white leading-none tracking-wide">
        로그인
      </h1>
      <p className="mt-4 text-base md:text-lg text-gw-gray-400 font-syne">
        계정에 로그인하여 AI 금융 분석 서비스를 이용하세요
      </p>
    </div>
  );
}
