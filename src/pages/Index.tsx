import { HeroSection } from "@/components/HeroSection";
import { ProblemsSection } from "@/components/ProblemsSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { PricingSection } from "@/components/PricingSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <PricingSection />
      <PortfolioSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
