import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import HeroSection from "@/components/sections/HeroSection";
import TrustBadgesSection from "@/components/sections/TrustBadgesSection";
import PainSection from "@/components/sections/PainSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import PricingSection from "@/components/sections/PricingSection";
import TeamSection from "@/components/sections/TeamSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import PledgeSection from "@/components/sections/PledgeSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustBadgesSection />
        <PortfolioSection />
        <PainSection />
        <StatsSection />
        <ServicesSection />
        <WhyUsSection />
        <AchievementsSection />
        <ComparisonSection />
        <TestimonialsSection />
        <CaseStudiesSection />
        <GuaranteeSection />
        <PledgeSection />
        <PricingSection />
        <TeamSection />
        <ProcessSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
