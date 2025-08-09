import { Card } from "@/components/ui/card";
import { CheckCircle, Camera, Sparkles, Target, Award, Palette } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "コマーシャル撮影",
    description: "ブランドストーリーを映像で表現する高品質なコマーシャル撮影サービス",
    features: ["4K撮影", "プロライティング", "コンセプト提案"],
    highlight: "プロ品質"
  },
  {
    icon: Sparkles,
    title: "プロダクト撮影",
    description: "商品の魅力を最大限に引き出すプロダクトフォトグラフィー",
    features: ["360度撮影", "ライフスタイル提案", "EC用最適化"],
    highlight: "売上UP"
  },
  {
    icon: Target,
    title: "ファッション撮影",
    description: "モデル撮影とスタイリングで魅力的なファッション写真を制作",
    features: ["モデルキャスティング", "スタイリング", "ロケーション撮影"],
    highlight: "トレンド"
  },
  {
    icon: Award,
    title: "ブランディング撮影",
    description: "企業イメージを向上させるプロフェッショナルなブランディング撮影",
    features: ["企業写真", "チーム撮影", "イベント記録"],
    highlight: "信頼性"
  },
  {
    icon: Palette,
    title: "クリエイティブ撮影",
    description: "アート性の高いクリエイティブな表現で独自性を演出",
    features: ["アート撮影", "コンセプチュアル", "実験的表現"],
    highlight: "独創性"
  },
  {
    icon: CheckCircle,
    title: "ポストプロダクション",
    description: "撮影後の編集・レタッチで完璧な仕上がりを実現",
    features: ["色調補正", "レタッチ", "動画編集"],
    highlight: "完璧仕上げ"
  }
];

export const SolutionsSection = () => {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden scroll-mt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-studio-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-studio-charcoal rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-studio-accent/10 text-studio-accent rounded-full text-sm font-medium tracking-wide mb-6">
            APPAREL SHOOTING SERVICES
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-foreground tracking-tight">
            アパレル特化
            <span className="block text-studio-accent">撮影サービス</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            EC・LOOK・SNSまで、
            <br />
            <span className="text-studio-charcoal font-medium">ワンストップで対応</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-white/80 backdrop-blur-sm border border-studio-silver/20 shadow-studio hover:shadow-hover transition-all duration-500 hover:-translate-y-2 animate-scale-in group relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Card gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-studio-accent/5 via-transparent to-studio-charcoal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-studio-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-studio-accent/20 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-studio-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-studio-charcoal transition-colors">
                        {service.title}
                      </h3>
                      <div className="inline-flex items-center gap-2 bg-studio-accent/10 px-3 py-1 rounded-full mt-2">
                        <div className="w-2 h-2 bg-studio-accent rounded-full animate-pulse" />
                        <span className="text-xs font-bold text-studio-accent uppercase tracking-wider">{service.highlight}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-studio-charcoal uppercase tracking-wide">
                      主要サービス
                    </h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-studio-accent rounded-full" />
                          <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-studio-silver/20">
                    <button className="group flex items-center gap-2 text-studio-accent font-semibold text-sm hover:gap-3 transition-all duration-300">
                      詳細を見る
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-studio-accent via-studio-accent to-studio-charcoal p-12 rounded-3xl shadow-studio text-white">
            <h3 className="text-3xl lg:text-4xl font-black mb-6">
              完全カスタマイズ対応
            </h3>
            <p className="text-xl font-light mb-8 opacity-90 max-w-2xl mx-auto">
              お客様のニーズに合わせて、複数サービスを組み合わせた
              <br />
              オリジナル撮影プランをご提案いたします
            </p>
            <button className="bg-white text-studio-charcoal px-8 py-4 rounded-xl font-bold hover:bg-studio-light transition-colors duration-300 shadow-hover">
              カスタムプランを相談する
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};