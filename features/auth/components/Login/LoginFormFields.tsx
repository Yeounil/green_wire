import { Loader2 } from "lucide-react";
import { LoginFormData } from "../../services/authService";

interface LoginFormFieldsProps {
  formData: LoginFormData;
  isLoading: boolean;
  error: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * LoginFormFields Component
 * 로그인 폼의 입력 필드들
 */
export function LoginFormFields({
  formData,
  isLoading,
  error,
  onChange,
}: LoginFormFieldsProps) {
  return (
    <div className="space-y-6 pt-6">
      {error && (
        <div className="border-2 border-red-500 bg-red-500/10 p-4 text-sm md:text-base text-red-500 font-syne animate-shake">
          {error}
        </div>
      )}
      <div className="space-y-2">
        <label
          htmlFor="username"
          className="block text-xs uppercase tracking-widest font-bold text-gw-gray-300 font-syne"
        >
          사용자명
        </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="사용자명을 입력하세요"
          value={formData.username}
          onChange={onChange}
          required
          disabled={isLoading}
          className="w-full px-4 py-4 text-base font-syne border-2 border-gw-green bg-gw-gray-900 text-white placeholder:text-gw-gray-500 transition-all duration-150 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[4px_4px_0_#00a63e] disabled:opacity-50"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-xs uppercase tracking-widest font-bold text-gw-gray-300 font-syne"
        >
          비밀번호
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={onChange}
          required
          disabled={isLoading}
          className="w-full px-4 py-4 text-base font-syne border-2 border-gw-green bg-gw-gray-900 text-white placeholder:text-gw-gray-500 transition-all duration-150 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[4px_4px_0_#00a63e] disabled:opacity-50"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-8 py-4 font-bold uppercase tracking-wider text-sm font-syne bg-gw-green border-2 border-gw-green text-gw-black transition-all duration-150 hover:bg-transparent hover:text-gw-green hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#00a63e] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gw-green disabled:hover:text-gw-black disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            로그인 중...
          </>
        ) : (
          "로그인"
        )}
      </button>
    </div>
  );
}
