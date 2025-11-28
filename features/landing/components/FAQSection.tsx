'use client';

import { useState } from "react";

const faqs = [
  {
    q: "무료 플랜으로 뭘 할 수 있나요?",
    a: "매주 월요일 주간 뉴스 리포트를 받아보실 수 있고, 최대 5개 종목의 기본 정보를 확인할 수 있습니다.",
  },
  {
    q: "AI 분석은 투자 조언인가요?",
    a: "아니요. 저희 서비스는 뉴스 정보를 정리해드리는 것이며, 투자 결정은 본인의 판단으로 하셔야 합니다.",
  },
  {
    q: "어떤 뉴스 소스를 사용하나요?",
    a: "Reuters, Bloomberg, CNBC, MarketWatch, Yahoo Finance 등 주요 영문 금융 매체의 뉴스를 실시간으로 수집합니다.",
  },
  {
    q: "결제 후 환불이 가능한가요?",
    a: "네, 결제 후 7일 이내 환불 요청 시 전액 환불해드립니다.",
  },
  {
    q: "모바일 앱이 있나요?",
    a: "현재는 웹 기반으로 서비스됩니다. 모바일 웹에서도 최적화되어 사용 가능합니다.",
  },
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 text-center">
          자주 묻는 질문
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-900/50"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <span className="font-medium">{faq.q}</span>
                <span className="text-[#00a63e] text-xl">
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4 text-zinc-600 dark:text-zinc-400">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
