/**
 * RegisterFormHeader Component
 * 회원가입 폼의 헤더
 */
export function RegisterFormHeader() {
  return (
    <div className="px-6 md:px-8 pt-8 pb-6 text-center border-b border-white/5">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="fintech-badge">
          <span className="w-1.5 h-1.5 rounded-full bg-gw-green animate-pulse" />
          Sign Up
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
        회원가입
      </h1>
      <p className="mt-4 text-base text-gw-gray-400">
        새 계정을 만들어 AI 금융 분석을 시작하세요
      </p>
    </div>
  );
}
