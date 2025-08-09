import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemsSection } from "@/components/ProblemsSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { PricingSection } from "@/components/PricingSection";
import { FashionGallery } from "@/components/FashionGallery";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ReasonsSection } from "@/components/ReasonsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemsSection />
      <ReasonsSection />
      <SolutionsSection />
      <PricingSection />
      <FashionGallery />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
