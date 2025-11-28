const steps = [
  {
    num: 1,
    title: "종목 등록",
    description: "관심 종목만 등록하세요",
  },
  {
    num: 2,
    title: "AI 분석",
    description: "매일 뉴스를 자동으로 분석",
  },
  {
    num: 3,
    title: "리포트 수신",
    description: "한국어 요약을 이메일로 받으세요",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 md:mb-16 text-center">
          세 단계로 시작하세요
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#00a63e]/10 border border-[#00a63e]/30 flex items-center justify-center text-[#00a63e] text-2xl font-bold">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
