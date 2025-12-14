import { TrendingUp, TrendingDown, Minus, Languages, Bell } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-white dark:bg-gw-black">
      <div className="max-w-4xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gw-black dark:text-white">
            복잡한 건 빼고, 핵심만
          </h2>
          <p className="text-lg text-gw-gray-600 dark:text-gw-gray-400">
            미국 주식 투자에 꼭 필요한 3가지
          </p>
        </div>

        {/* 기능 목록 - Editorial 스타일 */}
        <div className="space-y-20 md:space-y-28">
          {/* 기능 1: 감정 분석 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-gw-green mb-4 block">
                01 — 긍정/부정 분석
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gw-black dark:text-white">
                이 뉴스가 내 종목에
                <br />
                좋은 건지 나쁜 건지
              </h3>
              <p className="text-gw-gray-600 dark:text-gw-gray-400 leading-relaxed">
                AI가 뉴스를 읽고 긍정, 부정, 중립으로 분류합니다. 어려운 영어
                기사를 읽지 않아도, 한눈에 투자 판단을 내릴 수 있어요.
              </p>
            </div>

            {/* 감정 분석 미니 데모 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gw-gray-50 dark:bg-gw-gray-900 border border-gw-gray-200 dark:border-gw-gray-700 rounded-xl">
                <span className="text-sm font-medium text-gw-black dark:text-white">
                  NVIDIA, 데이터센터 매출 예상치 상회
                </span>
                <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 bg-gw-green/10 text-gw-green text-sm font-medium rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  긍정
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gw-gray-50 dark:bg-gw-gray-900 border border-gw-gray-200 dark:border-gw-gray-700 rounded-xl">
                <span className="text-sm font-medium text-gw-black dark:text-white">
                  애플, 정기 배당금 동결 발표
                </span>
                <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 bg-gw-gray-200 dark:bg-gw-gray-700 text-gw-gray-600 dark:text-gw-gray-400 text-sm font-medium rounded-full">
                  <Minus className="w-4 h-4" />
                  중립
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gw-gray-50 dark:bg-gw-gray-900 border border-gw-gray-200 dark:border-gw-gray-700 rounded-xl">
                <span className="text-sm font-medium text-gw-black dark:text-white">
                  테슬라, 리콜 발표로 주가 하락
                </span>
                <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 bg-gw-danger/10 text-gw-danger text-sm font-medium rounded-full">
                  <TrendingDown className="w-4 h-4" />
                  부정
                </span>
              </div>
            </div>
          </div>

          {/* 기능 2: 한국어 번역 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="md:order-2">
              <span className="text-sm font-medium text-gw-green mb-4 block">
                02 — 한국어 번역
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gw-black dark:text-white">
                영어 뉴스?
                <br />
                한국어로 읽으세요
              </h3>
              <p className="text-gw-gray-600 dark:text-gw-gray-400 leading-relaxed">
                원문의 뉘앙스를 살린 자연스러운 번역. 금융 전문 용어도 정확하게
                번역해서 전달합니다.
              </p>
            </div>

            {/* 번역 미니 데모 */}
            <div className="md:order-1 p-6 bg-gw-gray-50 dark:bg-gw-gray-900 border border-gw-gray-200 dark:border-gw-gray-700 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Languages className="w-5 h-5 text-gw-green" />
                <span className="text-sm font-medium text-gw-gray-600 dark:text-gw-gray-400">
                  번역 예시
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gw-gray-500 mb-1">원문</p>
                  <p className="text-sm text-gw-gray-600 dark:text-gw-gray-400 italic">
                    &quot;NVIDIA&apos;s datacenter revenue exceeded
                    expectations, driven by strong AI chip demand...&quot;
                  </p>
                </div>
                <div className="border-t border-gw-gray-200 dark:border-gw-gray-700 pt-4">
                  <p className="text-xs text-gw-gray-500 mb-1">번역</p>
                  <p className="text-sm text-gw-black dark:text-white font-medium">
                    &quot;NVIDIA의 데이터센터 매출이 예상치를 상회했습니다. AI
                    칩 수요 강세가 주요 원인입니다...&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 기능 3: 온디맨드 리포트 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-gw-green mb-4 block">
                03 — 온디맨드 리포트
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gw-black dark:text-white">
                필요할 때 바로,
                <br />
                AI 분석 리포트
              </h3>
              <p className="text-gw-gray-600 dark:text-gw-gray-400 leading-relaxed">
                토큰을 사용해 원하는 종목의 AI 분석 리포트를 즉시 생성하세요.
                필요할 때 바로 확인할 수 있어요.
              </p>
            </div>

            {/* 알림 미니 데모 */}
            <div className="p-6 bg-gw-gray-50 dark:bg-gw-gray-900 border border-gw-gray-200 dark:border-gw-gray-700 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gw-green/10 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-gw-green" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gw-black dark:text-white">
                    Green Wire
                  </p>
                  <p className="text-xs text-gw-gray-500">방금 전</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gw-gray-800 border border-gw-gray-200 dark:border-gw-gray-700 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-bold text-gw-black dark:text-white">
                    NVDA AI 분석 리포트
                  </p>
                  <p className="text-xs text-gw-gray-500">20개 뉴스</p>
                </div>
                {/* 감성 분석 미니 */}
                <div className="flex gap-2 text-xs">
                  <span className="flex items-center gap-1 px-2 py-1 bg-gw-green/10 text-gw-green rounded">
                    <TrendingUp className="w-3 h-3" />
                    긍정 14
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-gw-gray-100 dark:bg-gw-gray-700 text-gw-gray-500 rounded">
                    <Minus className="w-3 h-3" />
                    중립 4
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-red-50 dark:bg-red-900/20 text-red-500 rounded">
                    <TrendingDown className="w-3 h-3" />
                    부정 2
                  </span>
                </div>
                {/* 핵심 요약 일부 */}
                <p className="text-xs text-gw-gray-600 dark:text-gw-gray-400 leading-relaxed">
                  데이터센터 매출 145억 달러로 사상 최고치 경신...
                </p>
                {/* 더 있다는 힌트 */}
                <p className="text-xs text-gw-gray-400 pt-2 border-t border-gw-gray-100 dark:border-gw-gray-700">
                  + 주가 영향 예측 · 경쟁사 분석 · 투자 권고
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
