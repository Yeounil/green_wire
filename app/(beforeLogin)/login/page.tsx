import { LoginFormContainer } from "@/features/auth/containers/LoginFormContainer";

export default function LoginPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 px-4 bg-gw-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 fintech-bg-glow opacity-50" />

      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gw-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gw-green/5 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        <LoginFormContainer />
      </div>
    </section>
  );
}
