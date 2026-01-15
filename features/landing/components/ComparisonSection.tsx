import { ScrollReveal } from "./ScrollReveal";
import { Check, X } from "lucide-react";

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
    after: "뉴스 + 거시경제 종합",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-gw-gray-900 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gw-black/50 via-transparent to-gw-black/50" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="fintech-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-gw-green" />
              Comparison
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            기존 방식 vs
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gw-green leading-tight tracking-tight fintech-text-glow">
            Green Wire
          </h2>
          <p className="mt-6 text-lg text-gw-gray-400">
            매일 아침 뉴스 확인, 이렇게 달라집니다
          </p>
        </ScrollReveal>

        {/* Comparison Table - Modern Fintech Style */}
        <div className="fintech-card-static overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3">
            <div className="px-4 py-4 md:px-6 border-b border-white/5 bg-gw-black/30">
              <span className="text-xs font-medium text-gw-gray-400 uppercase tracking-wider">
                항목
              </span>
            </div>
            <div className="px-4 py-4 md:px-6 text-center border-b border-white/5 bg-gw-black/30">
              <span className="text-xs font-medium text-gw-gray-400 uppercase tracking-wider">
                기존 방식
              </span>
            </div>
            <div className="px-4 py-4 md:px-6 text-center border-b border-white/5 bg-gw-green/5">
              <span className="text-xs font-medium text-gw-green uppercase tracking-wider">
                Green Wire
              </span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <div
              key={row.item}
              className={`grid grid-cols-3 ${
                i < comparisons.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              {/* Item */}
              <div className="px-4 py-5 md:px-6 flex items-center bg-gw-black/20">
                <span className="text-base font-medium text-white">
                  {row.item}
                </span>
              </div>

              {/* Before */}
              <div className="px-4 py-5 md:px-6 flex items-center justify-center relative">
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-gw-gray-500 shrink-0" />
                  <span className="text-base text-gw-gray-500 text-center line-through decoration-gw-gray-600">
                    {row.before}
                  </span>
                </div>
              </div>

              {/* After */}
              <div className="px-4 py-5 md:px-6 flex items-center justify-center bg-gw-green/5 group hover:bg-gw-green/10 transition-colors">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gw-green shrink-0" />
                  <span className="text-base text-white font-medium text-center">
                    {row.after}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gw-green/30" />
          <span className="text-sm text-gw-gray-400 tracking-wider">
            시간 절약 = 기회 포착
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gw-green/30" />
        </div>
      </div>
    </section>
  );
}
