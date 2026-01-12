import EmailSignupForm from "./EmailSignupForm";

export default function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-gw-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 brutal-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gw-green" />

      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-bebas text-[15vw] text-gw-green/[0.03] leading-none whitespace-nowrap">
          JOIN NOW
        </span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Heading */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gw-green" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gw-green font-syne">
              Get Started
            </span>
            <div className="w-12 h-[2px] bg-gw-green" />
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-white leading-none tracking-wide">
            출시 알림 받기
          </h2>
          <p className="mt-6 text-lg text-gw-gray-400 font-syne">
            사전등록하고 Pro 1달 무료 혜택을 받으세요
          </p>
        </div>

        {/* Email Form */}
        <div className="max-w-lg mx-auto">
          <EmailSignupForm />
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
          {[
            { value: "100%", label: "무료 시작" },
            { value: "Pro", label: "1달 무료" },
            { value: "0", label: "스팸" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-bebas text-3xl text-gw-green">{item.value}</div>
              <div className="text-xs text-gw-gray-400 uppercase tracking-wider font-mono">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
