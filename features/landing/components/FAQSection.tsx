'use client';

import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";

const categories = ["서비스", "요금", "기타"] as const;
type Category = typeof categories[number];

const faqs: Record<Category, { q: string; a: string }[]> = {
  서비스: [
    {
      q: "리포트에 뭐가 들어있나요?",
      a: "감성 분석(호재/악재/중립 분류), 핵심 요약, 주가 영향 예측, 경쟁사 분석, 리스크 요인, 투자 권고까지 포함됩니다. 단순 뉴스 나열이 아니라 분석된 인사이트를 제공합니다.",
    },
    {
      q: "리포트는 언제 받나요?",
      a: "매일 오전 7시에 이메일로 발송됩니다. 전날 밤사이 나온 미국 뉴스를 분석한 리포트입니다.",
    },
    {
      q: "뉴스 소스는 어디인가요?",
      a: "Reuters, Bloomberg, CNBC, MarketWatch 등 영문 금융 매체입니다. 출처가 불분명한 뉴스는 수집하지 않습니다.",
    },
  ],
  요금: [
    {
      q: "무료로 뭘 할 수 있나요?",
      a: "관심 종목 10개, 리포트 구독 1개, 주 1회 리포트를 받습니다. 매일 리포트가 필요하면 유료 플랜을 이용하세요.",
    },
    {
      q: "유료 플랜 차이가 뭔가요?",
      a: "베이직(₩12,900)은 구독 5개에 매일 리포트 + 재무/기술 분석, 프로(₩29,900)는 구독 15개에 실적/AI 종합의견까지 포함됩니다.",
    },
    {
      q: "관심 종목과 구독 종목 차이가 뭔가요?",
      a: "관심 종목은 앱에서 모니터링하는 종목, 구독 종목은 이메일 리포트를 받는 종목입니다. 구독 종목 수가 플랜별로 다릅니다.",
    },
    {
      q: "환불되나요?",
      a: "결제 후 7일 이내 요청 시 전액 환불됩니다. help@greenwire.kr로 연락주세요.",
    },
  ],
  기타: [
    {
      q: "투자 조언인가요?",
      a: "아닙니다. 뉴스 기반 정보 제공 서비스입니다. 투자 결정과 책임은 본인에게 있습니다.",
    },
    {
      q: "분석이 틀릴 수도 있나요?",
      a: "네. AI 분석은 100% 정확하지 않습니다. 참고 자료로 활용하고, 중요한 결정 전에는 직접 확인하세요.",
    },
  ],
};

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("서비스");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setOpenFaq(null);
  };

  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-gw-gray-900 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gw-black/50 via-transparent to-gw-black/50" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="fintech-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-gw-green" />
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            자주 묻는 질문
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8" role="tablist" aria-label="FAQ 카테고리">
          <div className="inline-flex p-1 rounded-xl bg-white/5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls={`faq-panel-${category}`}
                className={`
                  cursor-pointer px-5 py-2.5 text-sm font-medium rounded-lg
                  transition-all duration-200
                  ${activeCategory === category
                    ? "bg-gw-green text-gw-black shadow-lg shadow-gw-green/20"
                    : "text-gw-gray-400 hover:text-white"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div
          className="space-y-3"
          role="tabpanel"
          id={`faq-panel-${activeCategory}`}
          aria-label={`${activeCategory} 관련 질문`}
        >
          {faqs[activeCategory].map((faq, i) => {
            const isOpen = openFaq === i;
            const faqId = `faq-${activeCategory}-${i}`;
            return (
              <div
                key={i}
                className={`
                  fintech-card-static overflow-hidden transition-all duration-200
                  ${isOpen ? "border-gw-green/30" : ""}
                `}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={faqId}
                  className="cursor-pointer w-full px-5 py-4 text-left flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-gw-green/50 font-mono text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium text-white text-base">
                      {faq.q}
                    </span>
                  </span>
                  <div className={`
                    w-8 h-8 flex items-center justify-center rounded-lg shrink-0
                    transition-all duration-200
                    ${isOpen ? "bg-gw-green/20" : "bg-white/5"}
                  `}>
                    <ChevronDown
                      className={`
                        w-4 h-4 transition-transform duration-300
                        ${isOpen ? "rotate-180 text-gw-green" : "text-gw-gray-400"}
                      `}
                      aria-hidden="true"
                    />
                  </div>
                </button>
                <div
                  id={faqId}
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-0 text-base text-gw-gray-400 leading-relaxed border-t border-white/5 ml-9">
                      <div className="pt-4">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10">
            <Mail className="w-4 h-4 text-gw-gray-400" />
            <span className="text-sm text-gw-gray-400">
              찾는 내용이 없으면
            </span>
            <a
              href="mailto:help@greenwire.kr"
              className="text-sm text-gw-green font-medium hover:underline"
            >
              help@greenwire.kr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
