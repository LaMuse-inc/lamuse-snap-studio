import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesOverviewSection } from "@/components/ServicesOverviewSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { FAQSection } from "@/components/FAQSection";

import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      {/* とは？ */}
      <AboutSection />
      {/* サービス/連携 */}
      <ServicesOverviewSection />
      {/* 実績・社会的証明（任意） */}
      <SocialProofSection />
      {/* FAQ */}
      <FAQSection />

      {/* お問い合わせCTA */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;