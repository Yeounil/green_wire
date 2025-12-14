import { Layers, Brain, Mail, Languages } from "lucide-react";

const benefits = [
  {
    icon: Layers,
    title: "20개+ 뉴스 종합",
    description: "하나씩 읽지 않아도 전체 흐름 파악",
  },
  {
    icon: Brain,
    title: "AI 감성 분석",
    description: "긍정/부정/중립 자동 분류",
  },
  {
    icon: Mail,
    title: "즉시 리포트 생성",
    description: "토큰으로 원할 때 바로",
  },
  {
    icon: Languages,
    title: "자연스러운 한국어",
    description: "금융 용어도 정확하게",
  },
];

export default function WhyGreenWireSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-white dark:bg-gw-black">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gw-black dark:text-white">
            왜 Green Wire인가요?
          </h2>
          <p className="text-lg text-gw-gray-600 dark:text-gw-gray-400">
            미국 주식 뉴스, 더 쉽게 읽는 방법
          </p>
        </div>

        {/* 4가지 강점 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex gap-4 p-6 bg-gw-gray-50 dark:bg-gw-gray-900 rounded-xl border border-gw-gray-200 dark:border-gw-gray-800"
            >
              <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-gw-green/10 rounded-lg">
                <benefit.icon
                  className="w-6 h-6 text-gw-green"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gw-black dark:text-white mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gw-gray-600 dark:text-gw-gray-400">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
