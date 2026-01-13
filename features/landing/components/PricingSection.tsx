"use client";

import { Check, ArrowRight } from "lucide-react";
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
      {/* Background Glow */}
      <div className="absolute inset-0 fintech-bg-glow opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="fintech-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-gw-green" />
              Pricing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            심플한 요금제
          </h2>
          <p className="mt-6 text-lg text-gw-gray-400">
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
                <div className="absolute -top-3 left-0 right-0 flex justify-center z-10">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-gw-green to-gw-green-light text-gw-black text-xs font-semibold rounded-full shadow-lg shadow-gw-green/30">
                    가장 인기
                  </span>
                </div>
              )}

              {/* Card */}
              <div
                className={`
                  relative h-full p-6 md:p-8 rounded-2xl transition-all duration-300
                  ${plan.recommended
                    ? "fintech-card border-gw-green/50 bg-gradient-to-b from-gw-green/5 to-transparent"
                    : "fintech-card"
                  }
                `}
              >
                {/* Plan Info */}
                <div className="mb-6">
                  <p className="text-xs text-gw-gray-500 uppercase tracking-wider mb-2">
                    {plan.description}
                  </p>
                  <h3 className="text-2xl font-bold text-white">
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-gw-green">
                      {plan.price}
                    </span>
                    <span className="text-sm text-gw-gray-500">
                      {plan.period}
                    </span>
                  </div>
                  {plan.yearlyPrice && (
                    <p className="mt-2 text-sm text-gw-green/70">
                      연간 결제 시 {plan.yearlyPrice}/년
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-base text-gw-gray-300"
                    >
                      <div className="w-5 h-5 flex items-center justify-center rounded-full bg-gw-green/10 shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-gw-green" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer inline-flex items-center gap-3 fintech-btn-primary text-lg px-10 py-5"
          >
            출시 알림 받기
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="mt-4 text-sm text-gw-green">
            사전등록 시 Pro 1달 무료
          </p>
        </div>
      </div>
    </section>
  );
}
