"use client";

import { Check } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  yearlyPrice?: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "무료",
    description: "체험해보고 싶다면",
    price: "₩0",
    period: "/월",
    features: [
      "일 3토큰 지급",
      "뉴스 분석 레포트",
      "실시간 알림",
      "PDF 다운로드",
    ],
  },
  {
    name: "베이직",
    description: "대부분의 투자자에게 추천",
    price: "₩12,900",
    yearlyPrice: "₩129,000",
    period: "/월",
    features: [
      "일 10토큰 지급",
      "뉴스 + 재무제표 분석",
      "주간 레포트 메일 (5종목)",
      "실시간 알림",
    ],
    recommended: true,
  },
  {
    name: "프로",
    description: "전문 투자자를 위한",
    price: "₩29,900",
    yearlyPrice: "₩299,000",
    period: "/월",
    features: [
      "일 20토큰 지급",
      "13가지 지표 분석",
      "기술적 차트 분석 포함",
      "AI 금융 챗봇",
      "주간 레포트 메일 (10종목)",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-gw-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 brutal-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gw-green" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20 text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gw-green" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gw-green font-syne">
              Pricing
            </span>
            <div className="w-12 h-[2px] bg-gw-green" />
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-white leading-none tracking-wide">
            심플한 요금제
          </h2>
          <p className="mt-6 text-lg text-gw-gray-400 font-syne">
            무료로 시작하고, 필요할 때 업그레이드
          </p>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative group h-full
                ${plan.recommended ? "md:-mt-4 md:mb-4" : ""}
              `}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <span className="px-4 py-2 bg-gw-green text-gw-black text-sm font-bold uppercase tracking-widest font-syne">
                    가장 인기
                  </span>
                </div>
              )}

              {/* Card */}
              <div
                className={`
                  relative h-full border-2 p-6 md:p-8 transition-all duration-200
                  ${plan.recommended
                    ? "border-gw-green bg-gw-gray-900 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_#00a63e]"
                    : "border-gw-green/30 bg-gw-gray-900 hover:border-gw-green hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_#00a63e]"
                  }
                `}
              >
                {/* Plan Info */}
                <div className="mb-6">
                  <p className="text-xs text-gw-gray-400 uppercase tracking-widest font-mono mb-2">
                    {plan.description}
                  </p>
                  <h3 className="font-bebas text-3xl text-white tracking-wide">
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b-2 border-gw-green/20">
                  <div className="flex items-baseline gap-1">
                    <span className="font-bebas text-5xl md:text-6xl text-gw-green">
                      {plan.price}
                    </span>
                    <span className="text-sm text-gw-gray-500 font-syne">
                      {plan.period}
                    </span>
                  </div>
                  {plan.yearlyPrice && (
                    <p className="mt-2 text-sm text-gw-green/70 font-mono">
                      연간 결제 시 {plan.yearlyPrice}/년
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-base text-gw-gray-300 font-syne"
                    >
                      <div className="w-5 h-5 flex items-center justify-center bg-gw-green/20 shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-gw-green" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Corner Accent */}
                {plan.recommended && (
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-gw-green" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer inline-flex items-center gap-3 px-10 py-5 bg-gw-green text-gw-black font-bold uppercase tracking-wider text-lg font-syne border-2 border-gw-green hover:bg-transparent hover:text-gw-green transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_#00a63e]"
          >
            출시 알림 받기
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <p className="mt-4 text-base text-gw-green font-syne">
            사전등록 시 Pro 1달 무료
          </p>
        </div>
      </div>
    </section>
  );
}
