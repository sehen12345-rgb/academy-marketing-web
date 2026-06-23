import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import HeroSection from "@/components/sections/HeroSection";
import TrustBadgesSection from "@/components/sections/TrustBadgesSection";
import PainSection from "@/components/sections/PainSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustBadgesSection />
        <PainSection />
        <WhyUsSection />
        <ServicesSection />
        <AchievementsSection />
        <PortfolioSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <ComparisonSection />
        <GuaranteeSection />
        <ProcessSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
