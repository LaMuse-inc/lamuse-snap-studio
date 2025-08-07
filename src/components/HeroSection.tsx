import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroStudio from "@/assets/hero-studio.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-studio-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-studio-charcoal/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-6 py-3 text-sm font-medium tracking-wide">
                ✨ プロフェッショナル撮影スタジオ
              </Badge>
              <Badge variant="outline" className="px-6 py-3 text-sm font-medium tracking-wide border-studio-accent text-studio-accent">
                📸 高品質・低価格
              </Badge>
            </div>
            
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-black leading-[0.9] text-foreground tracking-tight">
                <span className="block">あなたの</span>
                <span className="block text-studio-accent">ビジョンを</span>
                <span className="block text-studio-charcoal">映像で表現</span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-light">
                プロフェッショナルな撮影技術で、
                <br />
                <span className="text-studio-accent font-medium">ブランドの魅力を最大化</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="default" size="lg" className="group bg-studio-accent hover:bg-studio-accent/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-studio transition-all duration-300 hover:shadow-hover hover:scale-105">
                撮影を予約する
                <svg 
                  className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold rounded-xl border-2 border-studio-charcoal text-studio-charcoal hover:bg-studio-charcoal hover:text-white transition-all duration-300">
                ポートフォリオを見る
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-studio-silver/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-studio-charcoal">50+</div>
                <div className="text-sm text-muted-foreground font-medium">撮影実績</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-studio-accent">4.9</div>
                <div className="text-sm text-muted-foreground font-medium">満足度評価</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-studio-charcoal">24h</div>
                <div className="text-sm text-muted-foreground font-medium">最短納期</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-3xl shadow-studio">
              <img
                src={heroStudio}
                alt="プロフェッショナルな撮影スタジオ"
                className="w-full h-[700px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Professional Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-card">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-studio-charcoal">撮影中</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-hover animate-slide-in">
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">コスト削減</div>
              <div className="text-4xl font-black text-studio-accent">最大70%</div>
              <div className="text-xs text-muted-foreground mt-1">従来比較</div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-hover animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">品質保証</div>
              <div className="text-4xl font-black text-studio-charcoal">4K</div>
              <div className="text-xs text-muted-foreground mt-1">高解像度</div>
            </div>
            
            <div className="absolute bottom-20 right-6 bg-studio-accent rounded-full p-6 shadow-hover animate-bounce" style={{animationDelay: '0.6s'}}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};