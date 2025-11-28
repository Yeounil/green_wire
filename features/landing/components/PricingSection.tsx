import Link from "next/link";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  discount?: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Free",
    price: "₩0",
    period: "/월",
    features: ["관심 종목 10개", "구독 1개", "주간 뉴스 리포트"],
    cta: "체험하기",
  },
  {
    name: "Basic",
    price: "₩12,900",
    period: "/월",
    discount: "연간 결제 시 ₩9,900/월",
    features: [
      "관심 종목 30개",
      "구독 5개",
      "일일 뉴스 분석",
      "재무 기본 지표 (PER, ROE 등)",
      "기본 기술적 분석",
      "실시간 알림",
    ],
    cta: "시작하기",
    recommended: true,
  },
  {
    name: "Pro",
    price: "₩29,900",
    period: "/월",
    features: [
      "관심 종목 무제한",
      "구독 10개",
      "일일 뉴스 분석",
      "재무제표 전체 분석",
      "고급 기술적 분석 (RSI, MACD)",
      "실적발표 분석 + 알림",
      "AI 종합 투자 의견",
    ],
    cta: "시작하기",
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center">
          요금제
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-center mb-12">
          필요에 맞는 플랜을 선택하세요
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xl transition-all duration-300 ${
                plan.recommended
                  ? "border-2 border-[#00a63e] shadow-[0_0_40px_rgba(0,166,62,0.1)]"
                  : "border border-zinc-200 dark:border-zinc-700/50 hover:border-[#00a63e]/30"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#00a63e] text-white text-xs font-bold rounded-full">
                  추천
                </span>
              )}
              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <p className={`text-3xl font-bold ${plan.discount ? "mb-1" : "mb-4"}`}>
                {plan.price}
                <span className="text-sm font-normal text-zinc-500">
                  {plan.period}
                </span>
              </p>
              {plan.discount && (
                <p className="text-xs text-zinc-500 mb-4">{plan.discount}</p>
              )}
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-[#00a63e]">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className={`block w-full py-3 rounded-lg text-center font-medium transition-all ${
                  plan.recommended
                    ? "bg-[#00a63e] hover:bg-[#00c94a] text-white"
                    : "border border-zinc-300 dark:border-zinc-700 hover:border-[#00a63e] hover:text-[#00a63e]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
