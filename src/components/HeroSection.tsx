import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroStudio from "@/assets/hero-studio.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2">
                すでに2ブランド様の撮影実績
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Instagram DM対応可
              </Badge>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                あなたのブランドストーリーを、
                <span className="text-studio-charcoal block">プロの撮影で輝かせる</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                1日複数ブランド撮影で実現する、
                <br />
                驚きのコストパフォーマンス
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                初回限定50%OFFで撮影を申し込む
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              
              <Button variant="outline" size="xl">
                無料相談を申し込む
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-studio">
              <img
                src={heroStudio}
                alt="プロフェッショナルな撮影スタジオ"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-card animate-slide-in">
              <div className="text-sm text-muted-foreground">撮影コスト削減</div>
              <div className="text-2xl font-bold text-accent">最大70%</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-card animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-sm text-muted-foreground">納品スピード</div>
              <div className="text-2xl font-bold text-primary">3営業日</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};