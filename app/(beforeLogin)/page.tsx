import {
  LandingHeader,
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  PricingSection,
  FAQSection,
  FinalCTASection,
  LandingFooter,
  MobileCTA,
  ScrollRevealSection,
  ComparisonSection,
  UrgencyCTA,
  WhyGreenWireSection,
} from "@/features/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-gw-black text-white">
      <LandingHeader />
      <HeroSection />
      <ScrollRevealSection>
        <FeaturesSection />
      </ScrollRevealSection>
      <ScrollRevealSection delay={100}>
        <ComparisonSection />
      </ScrollRevealSection>
      <ScrollRevealSection delay={100}>
        <WhyGreenWireSection />
      </ScrollRevealSection>
      <ScrollRevealSection delay={100}>
        <HowItWorksSection />
      </ScrollRevealSection>
      <ScrollRevealSection delay={100}>
        <PricingSection />
      </ScrollRevealSection>
      <ScrollRevealSection delay={100}>
        <FAQSection />
      </ScrollRevealSection>
      <UrgencyCTA />
      <FinalCTASection />
      <LandingFooter />
      <MobileCTA />
    </div>
  );
}
