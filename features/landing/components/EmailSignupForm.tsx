"use client";

import { useState, useTransition } from "react";
import { subscribeToWaitlist } from "../actions/waitlist";

interface EmailSignupFormProps {
  className?: string;
}

export default function EmailSignupForm({ className }: EmailSignupFormProps) {
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
          className="flex-1 px-4 py-3 rounded-lg border border-gw-gray-300 dark:border-gw-gray-700 bg-white dark:bg-gw-gray-800 text-gw-black dark:text-white placeholder:text-gw-gray-500 focus:outline-none focus:ring-2 focus:ring-gw-green focus:border-transparent disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isPending}
          className="px-6 py-3 bg-gw-green hover:bg-gw-green-light text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-md whitespace-nowrap"
        >
          {isPending ? "등록 중..." : "알림 받기"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-3 text-sm ${
            isSuccess ? "text-gw-green" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}

      <p className="mt-3 text-sm text-gw-gray-500 dark:text-gw-gray-500">
        스팸 없음
      </p>
    </div>
  );
}
