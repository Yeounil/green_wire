"use client";

import { ReportDemo } from "./ReportDemo";
import EmailSignupForm from "./EmailSignupForm";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 md:pb-24 bg-gw-black overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 fintech-bg-glow" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gw-black/50" />

      {/* Floating Elements - Soft glowing orbs */}
      <div className="absolute top-32 left-[10%] w-64 h-64 bg-gw-green/5 rounded-full blur-3xl animate-fintech-float hidden lg:block" />
      <div className="absolute bottom-32 right-[10%] w-48 h-48 bg-gw-green/8 rounded-full blur-3xl animate-fintech-float hidden lg:block" style={{ animationDelay: '-2s' }} />

      <div className="max-w-7xl mx-auto relative z-10 w-full px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="animate-fintech-fade-up inline-flex items-center gap-2 mb-8">
              <span className="fintech-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-gw-green animate-pulse" />
                <span className="text-xs font-medium">
                  2026년 3월 출시 예정
                </span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6">
              <span
                className="block text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight animate-fintech-fade-up"
                style={{ animationDelay: '0.1s' }}
              >
                궁금한 종목?
              </span>
              <span
                className="block text-4xl md:text-5xl lg:text-6xl font-bold text-gw-green leading-tight tracking-tight mt-2 fintech-text-glow animate-fintech-fade-up"
                style={{ animationDelay: '0.2s' }}
              >
                바로 AI 분석
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-gw-gray-400 mb-6 max-w-lg leading-relaxed animate-fintech-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              매일 지급되는 토큰으로
              <br />
              원하는 종목을 분석하세요.
            </p>

            {/* Benefit Highlight */}
            <div
              className="flex items-center gap-3 mb-8 animate-fintech-fade-up"
              style={{ animationDelay: '0.35s' }}
            >
              <span className="fintech-tag-green px-3 py-1.5 rounded-full text-sm font-medium">
                사전등록 시 Pro 1달 무료
              </span>
            </div>

            {/* Email Form */}
            <div
              className="animate-fintech-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <EmailSignupForm className="w-full max-w-md" />
            </div>

            {/* Trust Indicators */}
            <div
              className="mt-8 flex items-center gap-6 text-sm text-gw-gray-500 animate-fintech-fade-up"
              style={{ animationDelay: '0.5s' }}
            >
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
          <div
            className="relative animate-fintech-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            {/* Subtle glow behind demo */}
            <div className="absolute -inset-4 bg-gw-green/5 rounded-3xl blur-2xl hidden lg:block" />
            <div className="relative">
              <ReportDemo />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fintech-fade-up"
        style={{ animationDelay: '0.6s' }}
      >
        <span className="text-xs tracking-widest text-gw-gray-500 uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-gw-green animate-bounce" />
        </div>
      </div>
    </section>
  );
}
