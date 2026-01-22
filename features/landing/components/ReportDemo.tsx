"use client";

import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronDown,
} from "lucide-react";

interface DemoReport {
  symbol: string;
  company: string;
  analyzedCount: number;
  sentiment: {
    positive: number;
    neutral: number;
    negative: number;
  };
  summary: string;
  keyFindings: string[];
  date: string;
}

const SAMPLE_REPORT: DemoReport = {
  symbol: "NVDA",
  company: "NVIDIA Corp",
  analyzedCount: 20,
  sentiment: {
    positive: 14,
    neutral: 4,
    negative: 2,
  },
  summary:
    "NVIDIA가 3분기 실적 발표에서 데이터센터 부문 매출이 전년 대비 279% 증가한 145억 달러를 기록했습니다. AI 칩 수요 급증이 실적을 견인했으며, 젠슨 황 CEO는 'AI 혁명이 본격화되고 있다'고 밝혔습니다.",
  keyFindings: [
    "데이터센터 매출 145억 달러로 사상 최고치 경신",
    "H100 GPU 수요 급증으로 공급 부족 지속",
    "차세대 Blackwell 아키텍처 2024년 출시 예정",
  ],
  date: "2024.11.28",
};

const MORE_SECTIONS = [
  "거시경제 분석",
  "시장 데이터",
  "섹터 동향",
  "리스크 요인",
  "객관적 전망",
];

export function ReportDemo() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full">
      {/* Report Card - Modern Fintech Style */}
      <div className="fintech-card-static overflow-hidden shadow-2xl shadow-black/50">
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/5 bg-gw-black/50">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              {/* Status indicator */}
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gw-green animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-gw-green/40" />
                <span className="w-2 h-2 rounded-full bg-gw-green/20" />
              </div>
              <span className="text-xl font-bold text-gw-green tracking-tight">
                {SAMPLE_REPORT.symbol}
              </span>
              <span className="text-xs text-gw-gray-500">
                {SAMPLE_REPORT.company}
              </span>
            </div>
            <span className="text-xs text-gw-gray-500 font-mono">
              {SAMPLE_REPORT.date}
            </span>
          </div>
          <p className="text-xs text-gw-gray-400">
            {SAMPLE_REPORT.analyzedCount}개 뉴스 분석 완료
          </p>
        </div>

        {/* Sentiment Analysis */}
        <div className="px-5 py-4 border-b border-white/5">
          <p className="text-xs font-medium text-gw-gray-400 mb-3 uppercase tracking-wider">
            감성 분석
          </p>
          <div className="grid grid-cols-3 gap-2" role="group" aria-label="감성 분석 결과">
            {/* Positive */}
            <div className="text-center p-3 rounded-xl bg-gw-green/10 border border-gw-green/20">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <TrendingUp className="w-4 h-4 text-gw-green" aria-hidden="true" />
                <span className="text-2xl font-bold text-gw-green">
                  {SAMPLE_REPORT.sentiment.positive}
                </span>
              </div>
              <span className="text-xs text-gw-gray-400">긍정</span>
            </div>
            {/* Neutral */}
            <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Minus className="w-4 h-4 text-gw-gray-400" aria-hidden="true" />
                <span className="text-2xl font-bold text-gw-gray-400">
                  {SAMPLE_REPORT.sentiment.neutral}
                </span>
              </div>
              <span className="text-xs text-gw-gray-400">중립</span>
            </div>
            {/* Negative */}
            <div className="text-center p-3 rounded-xl bg-red-500/10 border border-red-500/20">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <TrendingDown className="w-4 h-4 text-red-400" aria-hidden="true" />
                <span className="text-2xl font-bold text-red-400">
                  {SAMPLE_REPORT.sentiment.negative}
                </span>
              </div>
              <span className="text-xs text-gw-gray-400">부정</span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="px-5 py-4 border-b border-white/5">
          <p className="text-xs font-medium text-gw-gray-400 mb-3 uppercase tracking-wider">
            핵심 요약
          </p>
          <p className="text-base text-gw-gray-300 leading-relaxed">
            {SAMPLE_REPORT.summary}
          </p>
        </div>

        {/* Key Findings - Expandable */}
        <div
          id="report-key-findings"
          className="grid transition-[grid-template-rows] duration-300 ease-out"
          style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="px-5 py-4 border-b border-white/5">
              <p className="text-xs font-medium text-gw-gray-400 mb-3 uppercase tracking-wider">
                주요 발견사항
              </p>
              <ul className="space-y-3" role="list">
                {SAMPLE_REPORT.keyFindings.map((finding, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-base text-white"
                  >
                    <span className="text-gw-green font-mono text-sm shrink-0 mt-0.5" aria-hidden="true">
                      0{i + 1}
                    </span>
                    <span className="text-gw-gray-300">{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* More Sections Preview */}
        <div className="px-5 py-3 bg-gw-black/30" aria-hidden="true">
          <div className="flex flex-wrap gap-2 justify-center">
            {MORE_SECTIONS.map((section) => (
              <span key={section} className="fintech-tag text-xs">
                {section}
              </span>
            ))}
          </div>
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls="report-key-findings"
          className="cursor-pointer w-full px-5 py-3 bg-gw-green/5 hover:bg-gw-green/10 border-t border-white/5 transition-colors flex items-center justify-center gap-2 group"
        >
          <span className="text-sm font-medium text-gw-green">
            {isExpanded ? "접기" : "발견사항 보기"}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gw-green transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}
