"use client";

import { ReportDemo } from "./ReportDemo";
import EmailSignupForm from "./EmailSignupForm";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 md:pb-24 bg-gw-black overflow-x-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 brutal-grid opacity-50" />

      {/* Diagonal Accent Line */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gw-green/5 to-transparent transform skew-x-12 origin-top-right" />

      {/* Floating Elements - with animations */}
      <div className="absolute top-32 left-8 w-2 h-20 bg-gw-green animate-float hidden lg:block" />
      <div className="absolute bottom-40 right-16 w-16 h-2 bg-gw-green animate-float-delay hidden lg:block" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 border-2 border-gw-green rotate-45 animate-float-slow hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10 w-full px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="hero-animate hero-animate-delay-1 inline-flex items-center gap-2 mb-6 px-4 py-2 border-2 border-gw-green bg-gw-green/10">
              <span className="w-2 h-2 bg-gw-green brutal-pulse" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-gw-green font-syne">
                2026년 3월 출시
              </span>
            </div>

            {/* Main Headline - Brutalist Typography */}
            <h1 className="mb-6">
              <span className="hero-animate hero-animate-delay-2 block font-bebas text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-wide">
                궁금한 종목?
              </span>
              <span className="hero-animate hero-animate-delay-3 block font-bebas text-5xl md:text-7xl lg:text-8xl text-gw-green leading-none tracking-wide mt-2">
                바로 AI 분석
              </span>
            </h1>

            {/* Subheadline */}
            <p className="hero-animate hero-animate-delay-3 text-lg md:text-xl text-gw-gray-400 mb-4 max-w-lg font-syne leading-relaxed">
              매일 지급되는 토큰으로
              <br />
              원하는 종목을 분석하세요.
            </p>

            {/* Benefit Highlight */}
            <div className="hero-animate hero-animate-delay-4 flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-gw-green" />
              <span className="text-gw-green font-bold text-sm uppercase tracking-wider font-syne">
                사전등록 시 Pro 1달 무료
              </span>
            </div>

            {/* Email Form */}
            <div className="hero-animate hero-animate-delay-4">
              <EmailSignupForm className="w-full max-w-md" />
            </div>

            {/* Trust Indicators */}
            <div className="hero-animate hero-animate-delay-5 mt-8 flex items-center gap-6 text-sm text-gw-gray-400 uppercase tracking-wider font-syne">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gw-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                스팸 없음
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gw-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                언제든 해지
              </span>
            </div>
          </div>

          {/* Right: Report Demo */}
          <div className="hero-animate hero-animate-delay-3 relative lg:pl-4 lg:pt-4">
            {/* Decorative Frame - inside padding area */}
            <div className="absolute top-0 left-0 w-full h-full border-2 border-gw-green/30 hidden lg:block" />
            <div className="relative lg:translate-x-2 lg:translate-y-2">
              <ReportDemo />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="hero-animate hero-animate-delay-5 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.3em] text-gw-gray-400 font-syne">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gw-green to-transparent" />
      </div>
    </section>
  );
}
