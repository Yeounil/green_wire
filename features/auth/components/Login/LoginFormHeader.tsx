/**
 * LoginFormHeader Component
 * 로그인 폼의 헤더
 */
export function LoginFormHeader() {
  return (
    <div className="px-6 md:px-8 pt-8 pb-6 text-center border-b border-white/5">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="fintech-badge">
          <span className="w-1.5 h-1.5 rounded-full bg-gw-green animate-pulse" />
          Sign In
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
        로그인
      </h1>
      <p className="mt-4 text-base text-gw-gray-400">
        계정에 로그인하여 AI 금융 분석 서비스를 이용하세요
      </p>
    </div>
  );
}
