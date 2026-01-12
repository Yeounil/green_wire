import { ScrollReveal } from "./ScrollReveal";

const comparisons = [
  {
    item: "뉴스 확인",
    before: "영어 기사 직접 읽기",
    after: "한국어 AI 요약",
  },
  {
    item: "분석",
    before: "직접 판단",
    after: "AI 호재/악재 분류",
  },
  {
    item: "소요 시간",
    before: "30분~1시간",
    after: "5분",
  },
  {
    item: "빈도",
    before: "불규칙 (시간 날 때)",
    after: "매일 아침 이메일",
  },
  {
    item: "분석 범위",
    before: "보이는 뉴스만",
    after: "주요 매체 종합",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-gw-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 brutal-stripes opacity-50" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gw-green" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gw-green" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gw-green font-syne">
              Comparison
            </span>
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-white leading-none tracking-wide">
            기존 방식 vs
          </h2>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-gw-green leading-none tracking-wide">
            Green Wire
          </h2>
          <p className="mt-6 text-lg text-gw-gray-400 font-syne">
            매일 아침 뉴스 확인, 이렇게 달라집니다
          </p>
        </ScrollReveal>

        {/* Comparison Table - Brutalist Style */}
        <div className="border-2 border-gw-green overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3">
            <div className="px-4 py-4 md:px-6 border-b-2 border-r-2 border-gw-green bg-gw-black">
              <span className="text-xs font-bold text-gw-gray-400 uppercase tracking-widest font-mono">
                항목
              </span>
            </div>
            <div className="px-4 py-4 md:px-6 text-center border-b-2 border-r-2 border-gw-green bg-gw-black">
              <span className="text-xs font-bold text-gw-gray-400 uppercase tracking-widest font-mono">
                기존 방식
              </span>
            </div>
            <div className="px-4 py-4 md:px-6 text-center border-b-2 border-gw-green bg-gw-green/10">
              <span className="text-xs font-bold text-gw-green uppercase tracking-widest font-mono">
                Green Wire
              </span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <div
              key={row.item}
              className={`grid grid-cols-3 ${
                i < comparisons.length - 1 ? "border-b-2 border-gw-green/30" : ""
              }`}
            >
              {/* Item */}
              <div className="px-4 py-5 md:px-6 flex items-center border-r-2 border-gw-green/30 bg-gw-black/50">
                <span className="text-base font-bold text-white font-syne">
                  {row.item}
                </span>
              </div>

              {/* Before */}
              <div className="px-4 py-5 md:px-6 flex items-center justify-center border-r-2 border-gw-green/30 relative group">
                {/* Strikethrough effect */}
                <div className="absolute inset-y-0 left-4 right-4 flex items-center pointer-events-none">
                  <div className="w-full h-[1px] bg-gw-gray-600 opacity-50" />
                </div>
                <span className="text-base text-gw-gray-500 text-center font-syne relative">
                  {row.before}
                </span>
              </div>

              {/* After */}
              <div className="px-4 py-5 md:px-6 flex items-center justify-center bg-gw-green/5 group hover:bg-gw-green/10 transition-colors">
                <span className="text-base text-white font-bold text-center font-syne flex items-center gap-2">
                  <span className="w-2 h-2 bg-gw-green" />
                  {row.after}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="w-16 h-[2px] bg-gw-green/30" />
          <span className="text-sm text-gw-gray-400 uppercase tracking-widest font-mono">
            시간 절약 = 기회 포착
          </span>
          <div className="w-16 h-[2px] bg-gw-green/30" />
        </div>
      </div>
    </section>
  );
}
