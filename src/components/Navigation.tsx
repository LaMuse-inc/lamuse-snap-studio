import { useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: "#services", label: "サービス" },
    { href: "#portfolio", label: "実績" },
    { href: "#contact", label: "お問い合わせ" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 font-medium hover:text-gray-900 transition-colors text-base"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transition-all duration-300 rounded px-4 md:px-6 py-2 font-medium shadow-md hover:shadow-lg text-sm md:text-base">
              <a href="#contact">無料相談</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
 
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 sm:py-6 border-t border-gray-100 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 font-medium py-2 hover:text-gray-900 transition-colors text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-3 sm:pt-4 border-t border-gray-100">
                  <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transition-all duration-300 rounded py-3 font-medium shadow-md">
                    <a href="#contact">無料相談</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </nav>

      {/* Mobile bottom fixed CTA */}
      <div className="fixed-cta">
        <a href="#contact" className="fixed-cta-inner">
          無料相談
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </>
  );
};