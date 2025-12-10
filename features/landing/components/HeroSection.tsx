import { ReportDemo } from "./ReportDemo";
import EmailSignupForm from "./EmailSignupForm";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 md:pb-24 px-6">
      {/* 단색 배경 */}
      <div className="absolute inset-0 bg-gw-gray-50 dark:bg-gw-black" />

      <div className="max-w-7xl mx-auto relative w-full">
        <div className="flex flex-col items-center text-center">
          {/* 헤드라인 */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-4 text-gw-black dark:text-white">
            궁금한 종목? 바로 AI 분석
            <br />
            <span className="text-gw-green">나만의 미국 주식 애널리스트</span>
          </h1>

          {/* 서브헤드 */}
          <p className="text-base md:text-lg text-gw-gray-600 dark:text-gw-gray-400 mb-3 max-w-xl">
            매일 지급되는 토큰으로
            <br className="hidden md:block" />
            원하는 종목을 분석하세요.
          </p>

          {/* 출시 예정 & 얼리버드 혜택 */}
          <p className="text-sm text-gw-gray-500 mb-2">
            2026년 3월 출시 예정
          </p>
          <p className="text-sm text-gw-green font-medium mb-8">
            사전등록 시 Pro 1달 무료
          </p>

          {/* 이메일 폼 */}
          <EmailSignupForm className="w-full max-w-md" />

          {/* 리포트 데모 */}
          <div className="mt-12 md:mt-16 w-full max-w-2xl">
            <ReportDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
