import { Card } from "@/components/ui/card";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

export const PortfolioSection = () => {
  const portfolioItems = [
    {
      image: portfolio1,
      title: "コマーシャル撮影",
      description: "ブランドの世界観を表現するコンセプト撮影",
      category: "Commercial",
      client: "Fashion Brand",
      year: "2024"
    },
    {
      image: portfolio2,
      title: "プロダクト撮影",
      description: "高品質な商品撮影とライフスタイル提案",
      category: "Product",
      client: "Lifestyle Brand",
      year: "2024"
    },
    {
      image: portfolio3,
      title: "ファッション撮影",
      description: "モデル撮影とスタイリング提案",
      category: "Fashion",
      client: "Apparel Brand",
      year: "2024"
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-gradient-section">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-studio-accent/10 text-studio-accent rounded-full text-sm font-medium tracking-wide mb-6">
            PORTFOLIO
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-foreground tracking-tight">
            アパレル撮影
            <span className="block text-studio-accent">実績</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            各ブランドの独自性を最大限に引き出す、
            <br />
            <span className="text-studio-charcoal font-medium">クリエイティブな撮影ソリューション</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-studio hover:shadow-hover transition-all duration-500 hover:-translate-y-3 animate-scale-in bg-white/80 backdrop-blur-sm"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-xs font-bold text-studio-charcoal uppercase tracking-wider">{item.category}</span>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90 mb-3">{item.description}</p>
                  <div className="flex justify-between items-center text-xs text-white/70">
                    <span>{item.client}</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Featured case study */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-studio animate-fade-in border border-studio-silver/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-studio-accent/10 text-studio-accent rounded-lg text-sm font-semibold uppercase tracking-wide mb-4">
                  Featured Project
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-6 leading-tight">
                  ストリートブランド
                  <span className="block text-studio-accent">『DARS』様</span>
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  新作コレクションの撮影を担当させていただきました。ペーパー背景を活用したクリーンな撮影スタイルで、ブランドの都市的な魅力を最大限に引き出しました。
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-card rounded-xl shadow-card">
                  <div className="text-3xl font-black text-studio-accent mb-2">80+</div>
                  <div className="text-sm text-muted-foreground font-medium">納品カット数</div>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-xl shadow-card">
                  <div className="text-3xl font-black text-studio-charcoal mb-2">1日</div>
                  <div className="text-sm text-muted-foreground font-medium">撮影期間</div>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-xl shadow-card">
                  <div className="text-3xl font-black text-studio-accent mb-2">4K</div>
                  <div className="text-sm text-muted-foreground font-medium">解像度</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-foreground">撮影サービス内容:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['全身カット', '着用カット', 'ディテールカット', 'バックショット', 'ライフスタイル', 'スタジオ撮影'].map((tag) => (
                    <div key={tag} className="flex items-center gap-2 p-3 bg-studio-accent/5 rounded-lg">
                      <div className="w-2 h-2 bg-studio-accent rounded-full" />
                      <span className="text-sm font-medium text-studio-charcoal">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4">
                <button className="group flex items-center gap-3 text-studio-accent font-semibold hover:gap-4 transition-all duration-300">
                  プロジェクト詳細を見る
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-studio">
                <img
                  src={portfolio2}
                  alt="DARS様撮影事例"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Achievement badges */}
              <div className="absolute -bottom-4 -right-4 bg-studio-accent rounded-2xl p-4 shadow-hover">
                <div className="text-white text-center">
                  <div className="text-lg font-bold">100%</div>
                  <div className="text-xs opacity-90">満足度</div>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-hover">
                <div className="text-studio-charcoal text-center">
                  <div className="text-lg font-bold">24h</div>
                  <div className="text-xs opacity-70">納期</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};