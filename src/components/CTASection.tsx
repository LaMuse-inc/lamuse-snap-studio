import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Instagram, Mail, Phone } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50"></div>
      
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="text-gray-200/30 text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none font-black tracking-tight whitespace-nowrap">
          CONTACT US
        </div>
      </div>

      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-gray-100/20 to-gray-200/20 rounded blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-gray-200/20 to-gray-100/20 rounded blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Contact CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            まずはお気軽に
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              ご相談ください
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            あなたのブランドの課題をお聞かせください。<br />
            最適なソリューションをご提案いたします。
          </p>
          
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-6 text-xl rounded shadow-lg hover:shadow-xl transition-all duration-300">
              <a 
                href="https://fashionpartners.manus.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Mail className="w-6 h-6" />
                お問い合わせフォームへ
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};