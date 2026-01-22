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
    <div className="space-y-5 pt-6">
      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400 animate-shake">
          {error}
        </div>
      )}
      <div className="space-y-2">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gw-gray-300"
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
          className="fintech-input w-full"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gw-gray-300"
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
          className="fintech-input w-full"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="cursor-pointer w-full fintech-btn-primary py-4 text-base font-medium flex items-center justify-center gap-2"
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
