import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import {
  RegisterFormData,
  validateRegisterForm,
} from "../services/authService";
import {
  useFormValidation,
  validationRules,
} from "@/hooks/useFormValidation";

/**
 * 회원가입 폼 로직을 관리하는 커스텀 Hook
 */
export function useRegisterForm() {
  const router = useRouter();
  const { register, isLoading, error, clearError } = useAuthStore();

  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  });
  const [validationError, setValidationError] = useState("");

  // 유효성 검증 규칙 정의
  const validationRulesConfig = useMemo(
    () => ({
      username: [
        validationRules.required("사용자명을 입력해주세요"),
        validationRules.username(),
      ],
      email: [
        validationRules.required("이메일을 입력해주세요"),
        validationRules.email(),
      ],
      password: [
        validationRules.required("비밀번호를 입력해주세요"),
        validationRules.password(),
      ],
      confirmPassword: [
        validationRules.required("비밀번호 확인을 입력해주세요"),
        validationRules.match("password", "비밀번호가 일치하지 않습니다"),
      ],
    }),
    []
  );

  const {
    validationState,
    handleFieldChange,
    handleFieldBlur,
    validateForm,
    isFormValid,
  } = useFormValidation(validationRulesConfig, {
    validateOnChange: true,
    validateOnBlur: true,
    showErrorsAfterBlur: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setValidationError("");

    // 실시간 유효성 검증 먼저 수행
    const formDataRecord = formData as unknown as Record<string, string>;
    if (!validateForm(formDataRecord)) {
      return;
    }

    // 기존 validateRegisterForm으로 추가 검증
    const validationErr = validateRegisterForm(formData);
    if (validationErr) {
      setValidationError(validationErr);
      return;
    }

    try {
      await register({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      router.push("/main");
    } catch (err) {
      // Error is handled by the store
      console.error("Registration failed:", err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const newFormData = {
      ...formData,
      [id]: value,
    };
    setFormData(newFormData);

    // 실시간 유효성 검증
    handleFieldChange(id, value, newFormData as unknown as Record<string, string>);
  };

  const handleBlur = (fieldName: string, value: string) => {
    handleFieldBlur(
      fieldName,
      value,
      formData as unknown as Record<string, string>
    );
  };

  // 약관 동의 체크박스 변경 핸들러
  const handleConsentChange = (field: 'agreeTerms' | 'agreePrivacy' | 'agreeMarketing', checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked,
    }));
  };

  // 전체 동의 토글
  const handleAgreeAll = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      agreeTerms: checked,
      agreePrivacy: checked,
      agreeMarketing: checked,
    }));
  };

  // 전체 동의 체크 여부
  const isAllAgreed = formData.agreeTerms && formData.agreePrivacy && formData.agreeMarketing;

  // 필수 약관 동의 여부 체크 (폼 유효성에 포함)
  const isConsentsValid = formData.agreeTerms && formData.agreePrivacy;

  const displayError = error || validationError;

  return {
    formData,
    isLoading,
    displayError,
    handleSubmit,
    handleChange,
    handleBlur,
    handleConsentChange,
    handleAgreeAll,
    isAllAgreed,
    validationState,
    isFormValid: isFormValid && isConsentsValid,
  };
}
