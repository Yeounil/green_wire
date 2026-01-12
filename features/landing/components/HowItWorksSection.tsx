import { Search, Sparkles, Mail } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "종목 등록",
    description: "관심 있는 미국 주식을 검색해서 등록하세요. 5분이면 충분해요.",
    accent: "SEARCH",
  },
  {
    num: "02",
    icon: Sparkles,
    title: "AI가 분석",
    description: "밤새 나온 뉴스를 AI가 읽고, 호재/악재를 분류해요.",
    accent: "ANALYZE",
  },
  {
    num: "03",
    icon: Mail,
    title: "아침에 확인",
    description: "출근 전 이메일로 받아보세요. 5분이면 어젯밤 뉴스 끝.",
    accent: "RECEIVE",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-gw-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 brutal-stripes opacity-30" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gw-green" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-24 text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gw-green" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gw-green font-syne">
              How It Works
            </span>
            <div className="w-12 h-[2px] bg-gw-green" />
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-white leading-none tracking-wide">
            3분 만에 시작
          </h2>
          <p className="mt-6 text-lg text-gw-gray-400 font-syne">
            복잡한 설정 없이, 바로 시작하세요
          </p>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {steps.map((step) => (
            <div key={step.num} className="relative group h-full">
              {/* Step Card */}
              <div className="relative h-full border-2 border-gw-green/30 bg-gw-black p-6 md:p-8 transition-all duration-200 group-hover:border-gw-green group-hover:translate-y-[-4px] group-hover:shadow-[0_8px_0_#00a63e]">
                {/* Large Number Background */}
                <div className="absolute top-4 right-4 pointer-events-none select-none">
                  <span className="font-bebas text-7xl md:text-8xl text-gw-green/10 leading-none">
                    {step.num}
                  </span>
                </div>

                {/* Icon Container */}
                <div className="relative z-10 w-16 h-16 bg-gw-green flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-gw-black" strokeWidth={1.5} />
                </div>

                {/* Accent Text */}
                <div className="text-xs text-gw-green font-mono uppercase tracking-widest mb-2">
                  {step.accent}
                </div>

                {/* Title */}
                <h3 className="font-bebas text-2xl md:text-3xl text-white mb-3 tracking-wide relative z-10">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gw-gray-400 font-syne leading-relaxed relative z-10">
                  {step.description}
                </p>

                {/* Corner Accent */}
                <div className="absolute bottom-0 left-0 w-4 h-4 bg-gw-green group-hover:w-8 group-hover:h-8 transition-all duration-200" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Hint */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 border-2 border-gw-green/30">
            <span className="w-2 h-2 bg-gw-green brutal-pulse" />
            <span className="text-base text-gw-gray-400 font-syne">
              지금 사전등록하고 가장 먼저 시작하세요
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
