import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import HeroSection from "@/components/sections/HeroSection";
import TrustBadgesSection from "@/components/sections/TrustBadgesSection";
import PainSection from "@/components/sections/PainSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
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
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
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
