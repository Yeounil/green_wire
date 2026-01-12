import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { RegisterFormData } from "../../services/authService";
import { FormInput, PasswordStrength } from "@/shared/components/FormInput";
import { ValidationState } from "@/hooks/useFormValidation";

interface RegisterFormFieldsProps {
  formData: RegisterFormData;
  isLoading: boolean;
  displayError: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (fieldName: string, value: string) => void;
  onConsentChange: (field: 'agreeTerms' | 'agreePrivacy' | 'agreeMarketing', checked: boolean) => void;
  onAgreeAll: (checked: boolean) => void;
  isAllAgreed: boolean;
  validationState: ValidationState;
  isFormValid: boolean;
}

/**
 * RegisterFormFields Component
 * 회원가입 폼의 입력 필드들 (실시간 유효성 검증 포함)
 */
export function RegisterFormFields({
  formData,
  isLoading,
  displayError,
  onChange,
  onBlur,
  onConsentChange,
  onAgreeAll,
  isAllAgreed,
  validationState,
  isFormValid,
}: RegisterFormFieldsProps) {
  return (
    <div className="space-y-4 pt-6">
      {displayError && (
        <div className="border-2 border-red-500 bg-red-500/10 p-3 text-sm text-red-500 font-syne animate-shake">
          {displayError}
        </div>
      )}

      <FormInput
        variant="brutal"
        label="사용자명"
        fieldName="username"
        type="text"
        placeholder="홍길동"
        value={formData.username}
        onChange={onChange}
        onFieldBlur={onBlur}
        validation={validationState.username}
        hint="2-20자의 한글, 영문, 숫자만 가능합니다"
        required
        disabled={isLoading}
      />

      <FormInput
        variant="brutal"
        label="이메일"
        fieldName="email"
        type="email"
        placeholder="example@email.com"
        value={formData.email}
        onChange={onChange}
        onFieldBlur={onBlur}
        validation={validationState.email}
        required
        disabled={isLoading}
      />

      <div className="space-y-2">
        <FormInput
          variant="brutal"
          label="비밀번호"
          fieldName="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={onChange}
          onFieldBlur={onBlur}
          validation={validationState.password}
          hint="8자 이상, 영문과 숫자를 포함해야 합니다"
          required
          disabled={isLoading}
        />
        <PasswordStrength password={formData.password} variant="brutal" />
      </div>

      <FormInput
        variant="brutal"
        label="비밀번호 확인"
        fieldName="confirmPassword"
        type="password"
        placeholder="••••••••"
        value={formData.confirmPassword}
        onChange={onChange}
        onFieldBlur={onBlur}
        validation={validationState.confirmPassword}
        required
        disabled={isLoading}
      />

      {/* 약관 동의 섹션 */}
      <div className="space-y-3 pt-4 border-t-2 border-gw-green/20">
        {/* 전체 동의 */}
        <label className="flex items-center gap-3 cursor-pointer group">
          <Checkbox
            checked={isAllAgreed}
            onCheckedChange={(checked) => onAgreeAll(checked === true)}
            disabled={isLoading}
            className="h-5 w-5 border-2 border-gw-green rounded-none data-[state=checked]:bg-gw-green data-[state=checked]:border-gw-green"
          />
          <span className="font-syne font-bold text-sm text-gw-gray-300 group-hover:text-gw-green transition-colors uppercase tracking-wider">
            전체 동의
          </span>
        </label>

        <div className="pl-1 space-y-2">
          {/* 이용약관 동의 (필수) */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <Checkbox
              checked={formData.agreeTerms}
              onCheckedChange={(checked) => onConsentChange('agreeTerms', checked === true)}
              disabled={isLoading}
              className="h-4 w-4 border-2 border-gw-green/50 rounded-none data-[state=checked]:bg-gw-green data-[state=checked]:border-gw-green"
            />
            <span className="text-sm font-syne text-gw-gray-400 flex-1 group-hover:text-gw-gray-300 transition-colors">
              <span className="text-red-500 font-bold">[필수]</span> 이용약관 동의
            </span>
            <Link
              href="/terms"
              target="_blank"
              className="text-xs text-gw-gray-500 hover:text-gw-green font-syne uppercase tracking-wider"
              onClick={(e) => e.stopPropagation()}
            >
              보기
            </Link>
          </label>

          {/* 개인정보처리방침 동의 (필수) */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <Checkbox
              checked={formData.agreePrivacy}
              onCheckedChange={(checked) => onConsentChange('agreePrivacy', checked === true)}
              disabled={isLoading}
              className="h-4 w-4 border-2 border-gw-green/50 rounded-none data-[state=checked]:bg-gw-green data-[state=checked]:border-gw-green"
            />
            <span className="text-sm font-syne text-gw-gray-400 flex-1 group-hover:text-gw-gray-300 transition-colors">
              <span className="text-red-500 font-bold">[필수]</span> 개인정보처리방침 동의
            </span>
            <Link
              href="/privacy"
              target="_blank"
              className="text-xs text-gw-gray-500 hover:text-gw-green font-syne uppercase tracking-wider"
              onClick={(e) => e.stopPropagation()}
            >
              보기
            </Link>
          </label>

          {/* 마케팅 수신 동의 (선택) */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <Checkbox
              checked={formData.agreeMarketing}
              onCheckedChange={(checked) => onConsentChange('agreeMarketing', checked === true)}
              disabled={isLoading}
              className="h-4 w-4 border-2 border-gw-green/50 rounded-none data-[state=checked]:bg-gw-green data-[state=checked]:border-gw-green"
            />
            <span className="text-sm font-syne text-gw-gray-500 flex-1 group-hover:text-gw-gray-400 transition-colors">
              [선택] 마케팅 정보 수신 동의 (이메일, 푸시)
            </span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading || !isFormValid}
        className="w-full px-8 py-4 font-bold uppercase tracking-wider text-sm font-syne bg-gw-green border-2 border-gw-green text-gw-black transition-all duration-150 hover:bg-transparent hover:text-gw-green hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#00a63e] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gw-green disabled:hover:text-gw-black disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            가입 중...
          </>
        ) : (
          "회원가입"
        )}
      </button>
    </div>
  );
}
