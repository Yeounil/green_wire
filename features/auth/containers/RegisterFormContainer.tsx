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
    <div className="w-full fintech-card-static rounded-2xl overflow-hidden">
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
