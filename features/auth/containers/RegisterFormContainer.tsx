"use client";

import { useRegisterForm } from "../hooks/useRegisterForm";
import { RegisterFormHeader } from "../components/Register/RegisterFormHeader";
import { RegisterFormFields } from "../components/Register/RegisterFormFields";
import { RegisterFormFooter } from "../components/Register/RegisterFormFooter";
import { SocialLoginSection } from "../components/SocialLogin/SocialLoginSection";

/**
 * RegisterFormContainer
 * 회원가입 폼의 모든 로직과 상태를 관리하는 Container 컴포넌트입니다.
 */
export function RegisterFormContainer() {
  const {
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
    isFormValid,
  } = useRegisterForm();

  return (
    <div className="w-full border-2 border-gw-green bg-gw-gray-900 transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_#00a63e]">
      <RegisterFormHeader />
      <div className="px-6 md:px-8 pb-6 space-y-6">
        <form onSubmit={handleSubmit}>
          <RegisterFormFields
            formData={formData}
            isLoading={isLoading}
            displayError={displayError}
            onChange={handleChange}
            onBlur={handleBlur}
            onConsentChange={handleConsentChange}
            onAgreeAll={handleAgreeAll}
            isAllAgreed={isAllAgreed}
            validationState={validationState}
            isFormValid={isFormValid}
          />
        </form>
        <SocialLoginSection />
      </div>
      <RegisterFormFooter />
    </div>
  );
}
