import { X, Check } from "lucide-react";

const comparisons = [
  {
    item: "뉴스 확인",
    before: "영어 기사 직접 읽기",
    after: "한국어 AI 요약",
  },
  {
    item: "분석",
    before: "직접 판단",
    after: "AI 호재/악재 분류",
  },
  {
    item: "소요 시간",
    before: "30분~1시간",
    after: "5분",
  },
  {
    item: "생성 방식",
    before: "불규칙 (시간 날 때)",
    after: "토큰으로 즉시 생성",
  },
  {
    item: "분석 범위",
    before: "보이는 뉴스만",
    after: "주요 매체 종합",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gw-gray-50 dark:bg-gw-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gw-black dark:text-white">
            기존 방식 vs Green Wire
          </h2>
          <p className="text-lg text-gw-gray-600 dark:text-gw-gray-400">
            뉴스 확인, 이렇게 달라집니다
          </p>
        </div>

        {/* 비교 테이블 */}
        <div className="bg-white dark:bg-gw-gray-800 rounded-2xl border border-gw-gray-200 dark:border-gw-gray-700 overflow-hidden">
          {/* 헤더 */}
          <div className="grid grid-cols-3 bg-gw-gray-50 dark:bg-gw-gray-900 border-b border-gw-gray-200 dark:border-gw-gray-700">
            <div className="px-4 py-4 md:px-6">
              <span className="text-sm font-medium text-gw-gray-500">항목</span>
            </div>
            <div className="px-4 py-4 md:px-6 text-center border-l border-gw-gray-200 dark:border-gw-gray-700">
              <span className="text-sm font-medium text-gw-gray-500">
                기존 방식
              </span>
            </div>
            <div className="px-4 py-4 md:px-6 text-center border-l border-gw-gray-200 dark:border-gw-gray-700 bg-gw-green/5">
              <span className="text-sm font-medium text-gw-green">
                Green Wire
              </span>
            </div>
          </div>

          {/* 비교 항목 */}
          {comparisons.map((row, i) => (
            <div
              key={row.item}
              className={`grid grid-cols-3 ${
                i < comparisons.length - 1
                  ? "border-b border-gw-gray-100 dark:border-gw-gray-700"
                  : ""
              }`}
            >
              <div className="px-4 py-4 md:px-6 flex items-center">
                <span className="text-sm font-medium text-gw-black dark:text-white">
                  {row.item}
                </span>
              </div>
              <div className="px-4 py-4 md:px-6 flex items-center justify-center gap-2 border-l border-gw-gray-100 dark:border-gw-gray-700">
                <X className="w-4 h-4 text-gw-gray-400 shrink-0 hidden md:block" />
                <span className="text-sm text-gw-gray-500 text-center">
                  {row.before}
                </span>
              </div>
              <div className="px-4 py-4 md:px-6 flex items-center justify-center gap-2 border-l border-gw-gray-100 dark:border-gw-gray-700 bg-gw-green/5">
                <Check className="w-4 h-4 text-gw-green shrink-0 hidden md:block" />
                <span className="text-sm text-gw-black dark:text-white font-medium text-center">
                  {row.after}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
