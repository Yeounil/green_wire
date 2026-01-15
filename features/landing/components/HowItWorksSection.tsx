import { Search, Sparkles, Mail, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "종목 등록",
    description: "관심 있는 미국 주식을 검색해서 등록하세요. 5분이면 충분해요.",
  },
  {
    num: "02",
    icon: Sparkles,
    title: "AI가 종합 분석",
    description: "뉴스와 거시경제 데이터를 종합해 객관적 보고서를 생성해요.",
  },
  {
    num: "03",
    icon: Mail,
    title: "아침에 확인",
    description: "출근 전 이메일로 애널리스트 보고서를 받아보세요.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-gw-gray-900 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gw-black/50 via-transparent to-gw-black/50" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-24 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="fintech-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-gw-green" />
              How It Works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            3분 만에 시작
          </h2>
          <p className="mt-6 text-lg text-gw-gray-400">
            복잡한 설정 없이, 바로 시작하세요
          </p>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {steps.map((step, index) => (
            <div key={step.num} className="relative group h-full">
              {/* Step Card */}
              <div className="relative h-full fintech-card p-6 md:p-8">
                {/* Step Number */}
                <div className="text-xs font-mono text-gw-green/40 mb-4">
                  Step {step.num}
                </div>

                {/* Icon Container */}
                <div className="relative z-10 fintech-icon fintech-icon-lg mb-6 group-hover:bg-gw-green/20 transition-colors">
                  <step.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 relative z-10">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gw-gray-400 leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>

              {/* Arrow to next (Mobile) */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center py-4">
                  <ArrowRight className="w-5 h-5 text-gw-green/40 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Hint */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gw-green/5 border border-gw-green/20">
            <span className="w-1.5 h-1.5 rounded-full bg-gw-green animate-pulse" />
            <span className="text-sm text-gw-gray-400">
              지금 사전등록하고 가장 먼저 시작하세요
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
