'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
      {/* Background Elements */}
      <div className="absolute inset-0 brutal-stripes opacity-30" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gw-green" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gw-green" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gw-green font-syne">
              FAQ
            </span>
            <div className="w-12 h-[2px] bg-gw-green" />
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-white leading-none tracking-wide">
            자주 묻는 질문
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8" role="tablist" aria-label="FAQ 카테고리">
          <div className="inline-flex border-2 border-gw-green">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls={`faq-panel-${category}`}
                className={`
                  cursor-pointer px-6 py-3 text-sm font-bold uppercase tracking-wider font-syne
                  transition-all duration-150
                  ${activeCategory === category
                    ? "bg-gw-green text-gw-black"
                    : "bg-transparent text-gw-gray-400 hover:text-gw-green"
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
          className="space-y-2"
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
                  border-2 overflow-hidden transition-colors duration-200
                  ${isOpen ? "border-gw-green" : "border-gw-green/30 hover:border-gw-green/60"}
                `}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={faqId}
                  className="cursor-pointer w-full px-6 py-5 text-left flex justify-between items-center gap-4 bg-gw-black hover:bg-gw-gray-900 transition-colors"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-gw-green font-mono text-base">
                      [{String(i + 1).padStart(2, '0')}]
                    </span>
                    <span className="font-syne font-medium text-white text-base">
                      {faq.q}
                    </span>
                  </span>
                  <div className={`
                    w-8 h-8 flex items-center justify-center border-2 border-gw-green shrink-0
                    transition-all duration-200
                    ${isOpen ? "bg-gw-green" : "bg-transparent"}
                  `}>
                    <ChevronDown
                      className={`
                        w-4 h-4 transition-transform duration-300
                        ${isOpen ? "rotate-180 text-gw-black" : "text-gw-green"}
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
                    <div className="px-6 pb-6 pt-2 text-base text-gw-gray-400 font-syne leading-relaxed border-t-2 border-gw-green/30">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 border-2 border-gw-green/30">
            <span className="text-base text-gw-gray-400 font-syne">
              찾는 내용이 없으면
            </span>
            <a
              href="mailto:help@greenwire.kr"
              className="text-base text-gw-green font-bold font-syne hover:underline"
            >
              help@greenwire.kr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
