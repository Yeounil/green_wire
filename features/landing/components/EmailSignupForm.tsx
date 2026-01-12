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
            flex-1 px-5 py-4 text-base font-syne
            border-2 transition-all duration-150
            placeholder:text-gw-gray-500
            disabled:opacity-50
            brutal-focus
            ${isLight
              ? "bg-white border-gw-black text-gw-black focus:border-gw-green focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[4px_4px_0_#00a63e]"
              : "bg-gw-gray-900 border-gw-green text-white focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[4px_4px_0_#00a63e]"
            }
          `}
        />
        <button
          type="submit"
          disabled={isPending}
          className={`
            cursor-pointer px-8 py-4 font-bold uppercase tracking-wider text-sm font-syne
            border-2 transition-all duration-150
            disabled:opacity-50 disabled:cursor-not-allowed
            whitespace-nowrap
            ${isLight
              ? "bg-gw-black border-gw-black text-white hover:bg-gw-green hover:border-gw-green hover:text-gw-black hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#0a0a0a]"
              : "bg-gw-green border-gw-green text-gw-black hover:bg-transparent hover:text-gw-green hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#00a63e]"
            }
          `}
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              등록 중
            </span>
          ) : (
            "알림 받기 →"
          )}
        </button>
      </form>

      {message && (
        <div
          className={`
            mt-4 px-4 py-3 border-2 text-sm font-syne
            ${isSuccess
              ? "border-gw-green bg-gw-green/10 text-gw-green"
              : "border-red-500 bg-red-500/10 text-red-500"
            }
          `}
        >
          {message}
        </div>
      )}
    </div>
  );
}
