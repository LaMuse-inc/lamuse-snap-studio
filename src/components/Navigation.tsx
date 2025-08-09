import { useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: "#services", label: "サービス" },
    { href: "#portfolio", label: "ポートフォリオ" },
    { href: "#pricing", label: "料金" },
    { href: "#process", label: "制作フロー" },
    { href: "#faq", label: "よくある質問" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-studio-silver/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-studio-charcoal font-medium hover:text-studio-accent transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-studio-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild
              variant="outline"
              className="border-studio-accent text-studio-accent hover:bg-studio-accent hover:text-white"
            >
              <a href="#contact">お問い合わせ</a>
            </Button>
            <Button asChild className="bg-studio-accent hover:bg-studio-accent/90 text-white">
              <a href="#pricing">撮影を予約</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-studio-charcoal hover:text-studio-accent transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
 
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-studio-silver/20">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-studio-charcoal font-medium py-2 hover:text-studio-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-studio-silver/20">
                <Button asChild
                  variant="outline"
                  className="border-studio-accent text-studio-accent hover:bg-studio-accent hover:text-white"
                >
                  <a href="#contact">お問い合わせ</a>
                </Button>
                <Button asChild className="bg-studio-accent hover:bg-studio-accent/90 text-white">
                  <a href="#pricing">撮影を予約</a>
                </Button>
              </div>
            </div>
          </div>
        )}
        </div>
      </nav>

      {/* Mobile bottom fixed CTA */}
      <div className="fixed-cta">
        <a href="#contact" className="fixed-cta-inner">
          無料相談・見積り
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </>
  );
};