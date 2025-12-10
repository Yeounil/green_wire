"use client";

import { Check } from "lucide-react";

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
    <section className="py-20 md:py-32 px-6 bg-gw-gray-50 dark:bg-gw-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gw-black dark:text-white">
            심플한 요금제
          </h2>
          <p className="text-lg text-gw-gray-600 dark:text-gw-gray-400">
            무료로 시작하고, 필요할 때 업그레이드
          </p>
        </div>

        {/* 요금제 카드 */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 md:p-8 rounded-2xl bg-white dark:bg-gw-gray-800 transition-all ${
                plan.recommended
                  ? "border-2 border-gw-green ring-1 ring-gw-green/20"
                  : "border border-gw-gray-200 dark:border-gw-gray-700"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gw-green text-white text-xs font-bold rounded-full whitespace-nowrap">
                  가장 인기
                </span>
              )}

              <p className="text-sm text-gw-gray-500 mb-1">
                {plan.description}
              </p>
              <h3 className="text-xl font-bold mb-4 text-gw-black dark:text-white">
                {plan.name}
              </h3>

              <div className="mb-6">
                <p>
                  <span className="text-3xl md:text-4xl font-bold text-gw-black dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gw-gray-500">
                    {plan.period}
                  </span>
                </p>
                {plan.yearlyPrice && (
                  <p className="mt-1 text-xs text-gw-green font-medium">
                    연간 결제 시 {plan.yearlyPrice}/년
                  </p>
                )}
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gw-gray-600 dark:text-gw-gray-400"
                  >
                    <Check className="w-5 h-5 text-gw-green shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 단일 CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block px-10 py-4 bg-gw-green hover:bg-gw-green-light text-white font-semibold rounded-xl text-lg transition-colors"
          >
            출시 알림 받기
          </button>
          <p className="mt-4 text-sm text-gw-gray-500">
            사전등록 시 Pro 1달 무료
          </p>
        </div>
      </div>
    </section>
  );
}
