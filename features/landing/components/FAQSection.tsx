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
      q: "리포트는 어떻게 생성하나요?",
      a: "토큰을 사용해 원하는 종목의 리포트를 즉시 생성할 수 있습니다. 생성 버튼을 누르면 최신 뉴스를 분석한 리포트가 바로 만들어집니다.",
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
    <section className="py-20 md:py-32 px-6 bg-white dark:bg-gw-black">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gw-black dark:text-white">
            자주 묻는 질문
          </h2>
        </div>

        {/* 세그먼트 컨트롤 */}
        <div className="flex justify-center mb-8" role="tablist" aria-label="FAQ 카테고리">
          <div className="inline-flex p-1 bg-gw-gray-100 dark:bg-gw-gray-800 rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls={`faq-panel-${category}`}
                className={`cursor-pointer px-5 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-white dark:bg-gw-gray-900 text-gw-black dark:text-white shadow-sm"
                    : "text-gw-gray-500 hover:text-gw-gray-700 dark:hover:text-gw-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ 목록 */}
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
                className="border border-gw-gray-200 dark:border-gw-gray-700 rounded-xl overflow-hidden bg-gw-gray-50 dark:bg-gw-gray-900"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={faqId}
                  className="cursor-pointer w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-gw-gray-100 dark:hover:bg-gw-gray-800 transition-colors"
                >
                  <span className="font-medium text-gw-black dark:text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gw-gray-400 shrink-0 transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={faqId}
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1 text-gw-gray-600 dark:text-gw-gray-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-gw-gray-500">
          찾는 내용이 없으면{" "}
          <a
            href="mailto:help@greenwire.kr"
            className="cursor-pointer text-gw-green hover:underline"
          >
            help@greenwire.kr
          </a>
        </p>
      </div>
    </section>
  );
}
