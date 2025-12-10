"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type WaitlistResult = {
  success: boolean;
  message: string;
};

export async function subscribeToWaitlist(
  email: string
): Promise<WaitlistResult> {
  // 이메일 유효성 검사
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return {
      success: false,
      message: "올바른 이메일 주소를 입력해주세요.",
    };
  }

  try {
    const { error } = await supabase.from("waitlist").insert({ email });

    if (error) {
      // 중복 이메일
      if (error.code === "23505") {
        return {
          success: false,
          message: "이미 등록된 이메일입니다.",
        };
      }
      console.error("[Waitlist] Error:", error);
      return {
        success: false,
        message: "등록 중 오류가 발생했습니다. 다시 시도해주세요.",
      };
    }

    return {
      success: true,
      message: "등록되었습니다! 출시 시 알려드릴게요.",
    };
  } catch (error) {
    console.error("[Waitlist] Exception:", error);
    return {
      success: false,
      message: "등록 중 오류가 발생했습니다. 다시 시도해주세요.",
    };
  }
}
