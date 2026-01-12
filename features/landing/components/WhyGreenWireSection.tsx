import { Layers, Brain, Mail, Languages } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const benefits = [
  {
    icon: Layers,
    num: "01",
    title: "20개+ 뉴스 종합",
    description: "하나씩 읽지 않아도 전체 흐름 파악",
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
    title: "자연스러운 한국어",
    description: "금융 용어도 정확하게",
  },
];

export default function WhyGreenWireSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-gw-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 brutal-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gw-green" />

      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-bebas text-[20vw] text-gw-green/[0.03] leading-none whitespace-nowrap">
          WHY?
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20 text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gw-green" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gw-green font-syne">
              Why Green Wire
            </span>
            <div className="w-12 h-[2px] bg-gw-green" />
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-white leading-none tracking-wide">
            왜 Green Wire인가요?
          </h2>
          <p className="mt-6 text-lg text-gw-gray-400 font-syne">
            미국 주식 뉴스, 더 쉽게 읽는 방법
          </p>
        </ScrollReveal>

        {/* Benefits Grid - Brutalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative h-full border-2 border-gw-green/30 bg-gw-gray-900 p-6 md:p-8 transition-all duration-200 hover:border-gw-green hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_#00a63e]"
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gw-green flex items-center justify-center">
                <span className="font-bebas text-lg text-gw-black">{benefit.num}</span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 border-2 border-gw-green flex items-center justify-center mb-6 group-hover:bg-gw-green transition-colors">
                <benefit.icon
                  className="w-7 h-7 text-gw-green group-hover:text-gw-black transition-colors"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <h3 className="font-bebas text-2xl md:text-3xl text-white mb-2 tracking-wide">
                {benefit.title}
              </h3>
              <p className="text-base text-gw-gray-400 font-syne">
                {benefit.description}
              </p>

              {/* Corner Decoration */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-t-2 border-l-2 border-gw-green/20 group-hover:border-gw-green/50 transition-colors" />
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-12 md:mt-16 grid grid-cols-3 border-2 border-gw-green">
          {[
            { value: "20+", label: "뉴스 소스" },
            { value: "5분", label: "아침 리딩 타임" },
            { value: "24/7", label: "AI 분석" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`p-4 md:p-6 text-center ${i < 2 ? "border-r-2 border-gw-green" : ""}`}
            >
              <div className="font-bebas text-3xl md:text-4xl text-gw-green mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gw-gray-400 uppercase tracking-widest font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
