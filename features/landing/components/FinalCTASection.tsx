import EmailSignupForm from "./EmailSignupForm";

export default function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-gw-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 fintech-bg-glow opacity-50" />

      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gw-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gw-green/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="fintech-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-gw-green animate-pulse" />
              Get Started
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            출시 알림 받기
          </h2>
          <p className="mt-6 text-lg text-gw-gray-400">
            사전등록하고 Pro 1달 무료 혜택을 받으세요
          </p>
        </div>

        {/* Email Form */}
        <div className="max-w-lg mx-auto">
          <EmailSignupForm />
        </div>

        {/* Additional Info - Stats */}
        <div className="mt-12 fintech-card-static inline-flex rounded-full overflow-hidden">
          <div className="flex divide-x divide-white/5">
            {[
              { value: "100%", label: "무료 시작" },
              { value: "Pro", label: "1달 무료" },
              { value: "0", label: "스팸" },
            ].map((item) => (
              <div key={item.label} className="px-6 py-4 text-center">
                <div className="text-xl font-bold text-gw-green">{item.value}</div>
                <div className="text-xs text-gw-gray-400 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
