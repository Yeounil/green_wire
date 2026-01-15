import { Layers, Brain, Mail, Languages } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const benefits = [
  {
    icon: Layers,
    num: "01",
    title: "뉴스 + 거시경제 종합",
    description: "시장 전체 흐름을 한눈에 파악",
  },
  {
    icon: Brain,
    num: "02",
    title: "AI 감성 분석",
    description: "긍정/부정/중립 자동 분류",
  },
  {
    icon: Mail,
    num: "03",
    title: "매일 아침 배송",
    description: "출근 전 5분이면 충분",
  },
  {
    icon: Languages,
    num: "04",
    title: "중립적·객관적 분석",
    description: "데이터 기반 애널리스트 시각",
  },
];

export default function WhyGreenWireSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-gw-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 fintech-bg-glow opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="fintech-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-gw-green" />
              Why Green Wire
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            왜 Green Wire인가요?
          </h2>
          <p className="mt-6 text-lg text-gw-gray-400">
            뉴스와 거시경제를 종합한 데이터 기반 보고서
          </p>
        </ScrollReveal>

        {/* Benefits Grid - Modern Fintech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative h-full fintech-card p-6 md:p-8"
            >
              {/* Number Badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-mono text-gw-green/40">
                  {benefit.num}
                </span>
              </div>

              {/* Icon */}
              <div className="fintech-icon fintech-icon-lg mb-6 group-hover:bg-gw-green/20 transition-colors">
                <benefit.icon
                  className="w-6 h-6"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-base text-gw-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-12 md:mt-16 fintech-card-static overflow-hidden">
          <div className="grid grid-cols-3 divide-x divide-white/5">
            {[
              { value: "20+", label: "뉴스 소스" },
              { value: "5분", label: "아침 리딩 타임" },
              { value: "24/7", label: "AI 분석" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="fintech-stat"
              >
                <div className="fintech-stat-value text-gw-green">
                  {stat.value}
                </div>
                <div className="fintech-stat-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
