"use client";

import { useState } from "react";
import { SocialLoginButton } from "./SocialLoginButton";
import apiClient from "@/lib/api-client";

export function SocialLoginSection() {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const handleSocialLogin = async (
    provider: "kakao" | "google" | "naver"
  ) => {
    try {
      setLoadingProvider(provider);

      // 1. 인가 URL 조회
      const { authorization_url } = await apiClient.getSocialAuthUrl(provider);

      // 2. 소셜 로그인 페이지로 리다이렉트
      window.location.href = authorization_url;
    } catch (error) {
      console.error(`${provider} 로그인 실패:`, error);
      setLoadingProvider(null);
      // 에러 처리 (토스트 메시지 등)
      alert(`${provider} 로그인 중 오류가 발생했습니다. 다시 시도해주세요.`);
    }
  };

  return (
    <div className="space-y-4">
      {/* Separator */}
      <div className="relative flex items-center gap-4 py-2">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-xs text-gw-gray-500 px-2">
          또는
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Social Login Buttons */}
      <div className="space-y-3">
        <SocialLoginButton
          provider="kakao"
          onClick={() => handleSocialLogin("kakao")}
          isLoading={loadingProvider === "kakao"}
          disabled={loadingProvider !== null}
        />

        <SocialLoginButton
          provider="google"
          onClick={() => handleSocialLogin("google")}
          isLoading={loadingProvider === "google"}
          disabled={loadingProvider !== null}
        />

        {/* Naver is not implemented yet */}
        {/* <SocialLoginButton
          provider="naver"
          onClick={() => handleSocialLogin("naver")}
          isLoading={loadingProvider === "naver"}
          disabled={loadingProvider !== null}
        /> */}
      </div>
    </div>
  );
}
