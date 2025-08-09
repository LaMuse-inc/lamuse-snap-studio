import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Instagram, Mail, Phone } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <Badge className="bg-accent text-accent-foreground px-6 py-3 text-base font-semibold">
            初回限定50%OFFキャンペーン実施中（残り5名様）
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            今すぐプロの撮影で
            <span className="text-studio-charcoal block">アパレルブランドを加速</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            あなたのアパレルブランドの魅力を最大限に引き出す
            <br />
            プロフェッショナルな撮影サービス
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              無料相談を申し込む
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            
            <Button variant="outline" size="xl" className="group">
              <Instagram className="w-5 h-5" />
              Instagram DMで相談する
            </Button>
          </div>
          
          {/* Contact info */}
          <div className="pt-8 space-y-4">
            <p className="text-muted-foreground">お気軽にお問い合わせください（平均返信1営業日）</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-foreground">info@lamuse-studio.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-foreground">03-XXXX-XXXX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};