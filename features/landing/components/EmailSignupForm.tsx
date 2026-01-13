"use client";

import { useState, useTransition } from "react";
import { subscribeToWaitlist } from "../actions/waitlist";

interface EmailSignupFormProps {
  className?: string;
  variant?: "default" | "light";
}

export default function EmailSignupForm({ className, variant = "default" }: EmailSignupFormProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    startTransition(async () => {
      const result = await subscribeToWaitlist(email);
      setMessage(result.message);
      setIsSuccess(result.success);
      if (result.success) {
        setEmail("");
      }
    });
  };

  const isLight = variant === "light";

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 주소"
          required
          disabled={isPending}
          className={`
            flex-1 px-4 py-3.5 text-base rounded-xl
            transition-all duration-200
            placeholder:text-gw-gray-500
            disabled:opacity-50
            focus:outline-none
            ${isLight
              ? "bg-white border border-gw-gray-200 text-gw-black focus:border-gw-green focus:ring-2 focus:ring-gw-green/20"
              : "bg-gw-gray-900/80 border border-white/10 text-white focus:border-gw-green/50 focus:ring-2 focus:ring-gw-green/10"
            }
          `}
        />
        <button
          type="submit"
          disabled={isPending}
          className={`
            cursor-pointer px-6 py-3.5 font-semibold text-sm rounded-xl
            transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
            whitespace-nowrap
            ${isLight
              ? "bg-gw-black text-white hover:bg-gw-gray-800 shadow-lg shadow-gw-black/20"
              : "fintech-btn-primary"
            }
          `}
        >
          {isPending ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              등록 중
            </span>
          ) : (
            <span className="flex items-center gap-2">
              알림 받기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          )}
        </button>
      </form>

      {message && (
        <div
          className={`
            mt-4 px-4 py-3 rounded-xl text-sm
            ${isSuccess
              ? "bg-gw-green/10 border border-gw-green/30 text-gw-green"
              : "bg-red-500/10 border border-red-500/30 text-red-400"
            }
          `}
        >
          {message}
        </div>
      )}
    </div>
  );
}
