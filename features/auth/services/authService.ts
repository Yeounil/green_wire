/**
 * Auth Service
 * 인증 관련 유틸리티 함수들을 제공합니다.
 */

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;      // 이용약관 동의 (필수)
  agreePrivacy: boolean;    // 개인정보처리방침 동의 (필수)
  agreeMarketing: boolean;  // 마케팅 수신 동의 (선택)
}

export interface LoginFormData {
  username: string;
  password: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

/**
 * 회원가입 폼 유효성 검사
 */
export function validateRegisterForm(
  formData: RegisterFormData
): string | null {
  // Validate passwords match
  if (formData.password !== formData.confirmPassword) {
    return "비밀번호가 일치하지 않습니다";
  }

  // Validate password length
  if (formData.password.length < 6) {
    return "비밀번호는 최소 6자 이상이어야 합니다";
  }

  // Validate required consents
  if (!formData.agreeTerms) {
    return "이용약관에 동의해주세요";
  }

  if (!formData.agreePrivacy) {
    return "개인정보처리방침에 동의해주세요";
  }

  return null;
}

/**
 * 로그인 폼 유효성 검사
 */
export function validateLoginForm(formData: LoginFormData): string | null {
  if (!formData.username || !formData.password) {
    return "사용자명과 비밀번호를 입력해주세요";
  }

  return null;
}
