export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            투자에 필요한 모든 기능
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            실시간 뉴스 분석부터 AI 리포트까지
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: 감정 분석 (Large - spans 2 rows) */}
          <div className="md:row-span-2 p-8 rounded-2xl bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200 dark:border-zinc-700/50 hover:-translate-y-1 hover:border-[#00a63e]/30 hover:shadow-[0_0_40px_rgba(0,166,62,0.1)] transition-all duration-300">
            <span className="inline-block px-3 py-1 bg-[#00a63e]/10 text-[#00a63e] rounded-full text-xs font-medium mb-4">
              핵심 기능
            </span>
            <h3 className="text-2xl font-semibold mb-2">
              &ldquo;이 뉴스, 호재야 악재야?&rdquo;
            </h3>
            <p className="text-[#00a63e] text-xl font-semibold mb-4">
              AI가 감정을 분석해드려요
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              FinBERT AI가 뉴스를 긍정, 중립, 부정으로 분석합니다.
            </p>

            {/* Sentiment UI */}
            <div className="bg-zinc-100 dark:bg-zinc-800/50 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between p-3 bg-white dark:bg-zinc-900/50 rounded-lg">
                <span className="text-sm font-medium">
                  NVIDIA, 데이터센터 매출 예상치 상회
                </span>
                <span className="px-3 py-1 bg-[#00a63e]/10 text-[#00a63e] text-sm font-semibold rounded-full">
                  긍정
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-zinc-900/50 rounded-lg">
                <span className="text-sm font-medium">
                  테슬라, 리콜 발표로 주가 하락
                </span>
                <span className="px-3 py-1 bg-red-500/10 text-red-500 text-sm font-semibold rounded-full">
                  부정
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: 한국어 번역 */}
          <div className="p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200 dark:border-zinc-700/50 hover:-translate-y-1 hover:border-[#00a63e]/30 hover:shadow-[0_0_40px_rgba(0,166,62,0.1)] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">
              &ldquo;영어 뉴스?&rdquo;
            </h3>
            <p className="text-[#00a63e] text-lg font-semibold mb-3">
              한국어로 읽으세요
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              원문의 뉘앙스를 살린 자연스러운 번역. GPT-4가 금융 전문 용어를
              정확하게 번역합니다.
            </p>
          </div>

          {/* Card 3: 차트 통합 */}
          <div className="p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200 dark:border-zinc-700/50 hover:-translate-y-1 hover:border-[#00a63e]/30 hover:shadow-[0_0_40px_rgba(0,166,62,0.1)] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">
              &ldquo;뉴스 읽다가 차트 확인하려고&rdquo;
            </h3>
            <p className="text-[#00a63e] text-lg font-semibold mb-3">
              앱 바꾸지 마세요
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              TradingView 차트가 바로 옆에. 뉴스와 차트를 한 화면에서
              확인하세요.
            </p>
          </div>

          {/* Card 4: 실시간 알림 (Wide) */}
          <div className="md:col-span-2 p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200 dark:border-zinc-700/50 hover:-translate-y-1 hover:border-[#00a63e]/30 hover:shadow-[0_0_40px_rgba(0,166,62,0.1)] transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  &ldquo;TSLA 뉴스 나오면&rdquo;
                </h3>
                <p className="text-[#00a63e] text-lg font-semibold mb-2">
                  바로 알려드릴게요
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  관심 종목 등록하면 중요 뉴스만 실시간 알림. 노이즈는
                  걸러드립니다.
                </p>
              </div>
              {/* Notification UI Mockup */}
              <div className="bg-zinc-100 dark:bg-zinc-800/50 rounded-xl p-4 md:min-w-[280px]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00a63e]/20 flex items-center justify-center shrink-0">
                    <span className="text-[#00a63e] text-sm">🔔</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">TSLA 새 뉴스</p>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      테슬라, 유럽 판매량 전월 대비 15% 증가
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
