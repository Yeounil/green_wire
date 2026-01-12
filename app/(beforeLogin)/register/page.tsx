import { RegisterFormContainer } from "@/features/auth/containers/RegisterFormContainer";

export default function RegisterPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 px-4 bg-gw-black overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 brutal-grid opacity-50" />

      {/* Top Green Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gw-green" />

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-8 w-2 h-16 bg-gw-green animate-float hidden lg:block" />
      <div className="absolute top-40 left-16 w-16 h-2 bg-gw-green/50 animate-float-delay hidden lg:block" />
      <div className="absolute bottom-40 right-16 w-8 h-8 border-2 border-gw-green/30 hidden lg:block" />
      <div className="absolute bottom-20 left-8 w-2 h-24 bg-gw-green/30 animate-float-slow hidden lg:block" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        <RegisterFormContainer />
      </div>
    </section>
  );
}