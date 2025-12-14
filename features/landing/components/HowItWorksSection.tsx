import { Search, Sparkles, Mail } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: Search,
    title: "종목 검색",
    description: "관심 있는 미국 주식을 검색하세요. 1분이면 충분해요.",
  },
  {
    num: 2,
    icon: Sparkles,
    title: "리포트 생성",
    description: "토큰을 사용해 AI 분석 리포트를 즉시 생성하세요.",
  },
  {
    num: 3,
    icon: Mail,
    title: "바로 확인",
    description: "생성된 리포트를 바로 확인하세요. 호재/악재 한눈에 파악.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-white dark:bg-gw-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gw-black dark:text-white">
            3분 만에 시작
          </h2>
          <p className="text-lg text-gw-gray-600 dark:text-gw-gray-400">
            복잡한 설정 없이, 바로 시작하세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={step.num} className="relative">
              {/* 연결선 (데스크탑) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gw-gray-200 dark:bg-gw-gray-700" />
              )}

              <div className="text-center">
                <div className="relative inline-flex">
                  <div className="w-16 h-16 rounded-2xl bg-gw-green/10 flex items-center justify-center mb-6">
                    <step.icon className="w-7 h-7 text-gw-green" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gw-green text-white text-xs font-bold flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gw-black dark:text-white">{step.title}</h3>
                <p className="text-gw-gray-600 dark:text-gw-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
