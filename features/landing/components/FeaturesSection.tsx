import { TrendingUp, TrendingDown, Minus, Languages, Bell } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-gw-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 fintech-bg-glow opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-20 md:mb-28">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="fintech-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-gw-green" />
              Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            복잡한 건 빼고
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gw-green leading-tight tracking-tight fintech-text-glow">
            핵심만
          </h2>
          <p className="mt-6 text-lg text-gw-gray-400 max-w-md">
            미국 주식 투자에 꼭 필요한 3가지
          </p>
        </ScrollReveal>

        {/* Features Grid - Asymmetric Layout */}
        <div className="space-y-20 md:space-y-32">
          {/* Feature 1: 감정 분석 */}
          <ScrollReveal>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              {/* Feature Number */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-mono text-gw-green/60">01</span>
                <div className="h-px flex-1 bg-gradient-to-r from-gw-green/30 to-transparent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                이 뉴스가 내 종목에
                <br />
                <span className="text-gw-green">좋은 건지 나쁜 건지</span>
              </h3>
              <p className="text-base text-gw-gray-400 leading-relaxed">
                AI가 뉴스를 읽고 긍정, 부정, 중립으로 분류합니다. 어려운 영어
                기사를 읽지 않아도, 한눈에 투자 판단을 내릴 수 있어요.
              </p>
            </div>

            {/* Demo Card */}
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-3">
                {[
                  { text: "NVIDIA, 데이터센터 매출 예상치 상회", type: "positive" },
                  { text: "애플, 정기 배당금 동결 발표", type: "neutral" },
                  { text: "테슬라, 리콜 발표로 주가 하락", type: "negative" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`
                      flex items-center justify-between p-4 rounded-xl
                      transition-all duration-200 hover:translate-y-[-2px]
                      ${item.type === "positive" ? "bg-gw-green/10 border border-gw-green/20 hover:border-gw-green/40 hover:shadow-lg hover:shadow-gw-green/10" : ""}
                      ${item.type === "neutral" ? "bg-white/5 border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5" : ""}
                      ${item.type === "negative" ? "bg-red-500/10 border border-red-500/20 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10" : ""}
                    `}
                  >
                    <span className="text-base text-white">
                      {item.text}
                    </span>
                    <span className={`
                      shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full
                      ${item.type === "positive" ? "bg-gw-green/20 text-gw-green" : ""}
                      ${item.type === "neutral" ? "bg-white/10 text-gw-gray-400" : ""}
                      ${item.type === "negative" ? "bg-red-500/20 text-red-400" : ""}
                    `}>
                      {item.type === "positive" && <TrendingUp className="w-3.5 h-3.5" />}
                      {item.type === "neutral" && <Minus className="w-3.5 h-3.5" />}
                      {item.type === "negative" && <TrendingDown className="w-3.5 h-3.5" />}
                      {item.type === "positive" ? "긍정" : item.type === "neutral" ? "중립" : "부정"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Feature 2: 한국어 번역 */}
          <ScrollReveal direction="right">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 lg:order-2 lg:col-start-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-mono text-gw-green/60">02</span>
                <div className="h-px flex-1 bg-gradient-to-r from-gw-green/30 to-transparent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                영어 뉴스?
                <br />
                <span className="text-gw-green">한국어로 읽으세요</span>
              </h3>
              <p className="text-base text-gw-gray-400 leading-relaxed">
                원문의 뉘앙스를 살린 자연스러운 번역. 금융 전문 용어도 정확하게
                번역해서 전달합니다.
              </p>
            </div>

            {/* Demo Card */}
            <div className="lg:col-span-6 lg:order-1">
              <div className="fintech-card-static p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="fintech-icon">
                    <Languages className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gw-gray-400 uppercase tracking-wider">
                    번역 예시
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gw-gray-500 mb-2 uppercase tracking-wider">원문</p>
                    <p className="text-base text-gw-gray-500 italic leading-relaxed">
                      &quot;NVIDIA&apos;s datacenter revenue exceeded
                      expectations, driven by strong AI chip demand...&quot;
                    </p>
                  </div>
                  <div className="fintech-divider" />
                  <div>
                    <p className="text-xs text-gw-gray-500 mb-2 uppercase tracking-wider">번역</p>
                    <p className="text-base text-white font-medium leading-relaxed">
                      &quot;NVIDIA의 데이터센터 매출이 예상치를 상회했습니다. AI
                      칩 수요 강세가 주요 원인입니다...&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* 기능 3: 온디맨드 리포트 */}
          <ScrollReveal>
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

                <div className="bg-gw-black/50 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-bold text-white">
                      NVDA 종합 애널리스트 보고서
                    </p>
                    <span className="text-xs text-gw-gray-500">20개 뉴스 + 거시경제</span>
                  </div>

                  {/* Sentiment Mini */}
                  <div className="flex gap-2 text-xs mb-4">
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gw-green/20 text-gw-green font-medium">
                      <TrendingUp className="w-3 h-3" />
                      긍정 14
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 text-gw-gray-400">
                      <Minus className="w-3 h-3" />
                      중립 4
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500/20 text-red-400">
                      <TrendingDown className="w-3 h-3" />
                      부정 2
                    </span>
                  </div>

                  <p className="text-sm text-gw-gray-400 leading-relaxed mb-3">
                    데이터센터 매출 145억 달러로 사상 최고치 경신...
                  </p>

                  <div className="pt-3 border-t border-white/5">
                    <div className="flex gap-2 flex-wrap">
                      {["거시경제 분석", "시장 데이터", "객관적 전망"].map((tag) => (
                        <span key={tag} className="fintech-tag text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
