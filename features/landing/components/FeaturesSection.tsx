import { TrendingUp, TrendingDown, Minus, Languages, Bell } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-gw-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 brutal-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gw-green" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-20 md:mb-28">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gw-green" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gw-green font-syne">
              Features
            </span>
          </div>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-wide">
            복잡한 건 빼고
          </h2>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl text-gw-green leading-none tracking-wide">
            핵심만
          </h2>
          <p className="mt-6 text-lg text-gw-gray-400 font-syne max-w-md">
            미국 주식 투자에 꼭 필요한 3가지
          </p>
        </ScrollReveal>

        {/* Features Grid - Asymmetric Layout */}
        <div className="space-y-16 md:space-y-24">
          {/* Feature 1: 감정 분석 */}
          <ScrollReveal>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              {/* Feature Number */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-bebas text-8xl md:text-9xl text-gw-green/20 leading-none">
                  01
                </span>
              </div>
              <h3 className="font-bebas text-3xl md:text-4xl text-white mb-4 tracking-wide">
                이 뉴스가 내 종목에
                <br />
                <span className="text-gw-green">좋은 건지 나쁜 건지</span>
              </h3>
              <p className="text-base text-gw-gray-400 font-syne leading-relaxed">
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
                      flex items-center justify-between p-4 border-2
                      transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px]
                      ${item.type === "positive" ? "border-gw-green bg-gw-green/5 hover:shadow-[4px_4px_0_#00a63e]" : ""}
                      ${item.type === "neutral" ? "border-gw-gray-600 bg-gw-gray-900 hover:shadow-[4px_4px_0_#525252]" : ""}
                      ${item.type === "negative" ? "border-red-500/50 bg-red-500/5 hover:shadow-[4px_4px_0_#ef4444]" : ""}
                    `}
                  >
                    <span className="text-base font-syne text-white">
                      {item.text}
                    </span>
                    <span className={`
                      shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold uppercase tracking-wider font-syne
                      ${item.type === "positive" ? "bg-gw-green text-gw-black" : ""}
                      ${item.type === "neutral" ? "bg-gw-gray-700 text-gw-gray-300" : ""}
                      ${item.type === "negative" ? "bg-red-500 text-white" : ""}
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
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-bebas text-8xl md:text-9xl text-gw-green/20 leading-none">
                  02
                </span>
              </div>
              <h3 className="font-bebas text-3xl md:text-4xl text-white mb-4 tracking-wide">
                영어 뉴스?
                <br />
                <span className="text-gw-green">한국어로 읽으세요</span>
              </h3>
              <p className="text-base text-gw-gray-400 font-syne leading-relaxed">
                원문의 뉘앙스를 살린 자연스러운 번역. 금융 전문 용어도 정확하게
                번역해서 전달합니다.
              </p>
            </div>

            {/* Demo Card */}
            <div className="lg:col-span-6 lg:order-1">
              <div className="border-2 border-gw-green p-6 bg-gw-gray-900">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 border-2 border-gw-green flex items-center justify-center">
                    <Languages className="w-5 h-5 text-gw-green" />
                  </div>
                  <span className="text-sm font-bold text-gw-gray-400 uppercase tracking-widest font-syne">
                    번역 예시
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gw-gray-500 mb-2 uppercase tracking-wider font-mono">원문</p>
                    <p className="text-base text-gw-gray-500 font-syne italic leading-relaxed">
                      &quot;NVIDIA&apos;s datacenter revenue exceeded
                      expectations, driven by strong AI chip demand...&quot;
                    </p>
                  </div>
                  <div className="w-full h-[2px] bg-gw-green/30" />
                  <div>
                    <p className="text-xs text-gw-gray-500 mb-2 uppercase tracking-wider font-mono">번역</p>
                    <p className="text-base text-white font-syne font-medium leading-relaxed">
                      &quot;NVIDIA의 데이터센터 매출이 예상치를 상회했습니다. AI
                      칩 수요 강세가 주요 원인입니다...&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Feature 3: 이메일 리포트 */}
          <ScrollReveal>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-bebas text-8xl md:text-9xl text-gw-green/20 leading-none">
                  03
                </span>
              </div>
              <h3 className="font-bebas text-3xl md:text-4xl text-white mb-4 tracking-wide">
                출근 전 5분
                <br />
                <span className="text-gw-green">어젯밤 뉴스 확인</span>
              </h3>
              <p className="text-base text-gw-gray-400 font-syne leading-relaxed">
                관심 종목을 등록하면 매일 아침 이메일로 AI 분석 리포트가
                도착합니다. 바쁜 아침에도 놓치는 뉴스 없이 챙길 수 있어요.
              </p>
            </div>

            {/* Demo Card */}
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-2 border-gw-green p-6 bg-gw-gray-900">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gw-green flex items-center justify-center">
                    <Bell className="w-6 h-6 text-gw-black" />
                  </div>
                  <div>
                    <p className="font-bebas text-xl text-white tracking-wider">
                      Green Wire
                    </p>
                    <p className="text-xs text-gw-gray-500 font-mono uppercase">오전 7:00</p>
                  </div>
                </div>

                <div className="border-2 border-gw-gray-700 p-4 bg-gw-black">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-bebas text-lg text-white tracking-wider">
                      NVDA AI 분석 리포트
                    </p>
                    <span className="text-xs text-gw-gray-500 font-mono">20개 뉴스</span>
                  </div>

                  {/* Sentiment Mini */}
                  <div className="flex gap-2 text-xs mb-4">
                    <span className="flex items-center gap-1 px-2 py-1 bg-gw-green text-gw-black font-bold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      긍정 14
                    </span>
                    <span className="flex items-center gap-1 px-2 py-1 bg-gw-gray-700 text-gw-gray-300">
                      <Minus className="w-3.5 h-3.5" />
                      중립 4
                    </span>
                    <span className="flex items-center gap-1 px-2 py-1 bg-red-500/20 text-red-400">
                      <TrendingDown className="w-3.5 h-3.5" />
                      부정 2
                    </span>
                  </div>

                  <p className="text-sm text-gw-gray-400 font-syne leading-relaxed mb-3">
                    데이터센터 매출 145억 달러로 사상 최고치 경신...
                  </p>

                  <div className="pt-3 border-t border-gw-gray-800">
                    <p className="text-xs text-gw-gray-500 font-mono">
                      + 주가 영향 예측 · 경쟁사 분석 · 투자 권고
                    </p>
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
