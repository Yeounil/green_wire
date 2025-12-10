import EmailSignupForm from "./EmailSignupForm";

export default function FinalCTASection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gw-gray-50 dark:bg-gw-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gw-black dark:text-white">
          출시 알림 받기
        </h2>
        <p className="text-lg text-gw-gray-600 dark:text-gw-gray-400 mb-8">
          사전등록하고 Pro 1달 무료 혜택을 받으세요
        </p>
        <EmailSignupForm className="max-w-md mx-auto" />
      </div>
    </section>
  );
}
