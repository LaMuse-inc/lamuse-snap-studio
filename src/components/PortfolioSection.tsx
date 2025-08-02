import { Card } from "@/components/ui/card";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

export const PortfolioSection = () => {
  const portfolioItems = [
    {
      image: portfolio1,
      title: "アパレル商品撮影",
      description: "EC・カタログ用の高品質な商品撮影"
    },
    {
      image: portfolio2,
      title: "ルックブック撮影",
      description: "ブランドイメージを表現するスタイリング撮影"
    },
    {
      image: portfolio3,
      title: "詳細・素材撮影",
      description: "商品の質感や細部を美しく表現"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            撮影実績
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            これまでに手がけた撮影事例をご紹介します
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Featured case study */}
        <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 shadow-studio animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  ストリートブランド『DARS』様
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  新作コレクションの撮影を担当させていただきました。ペーパー背景を活用したクリーンな撮影スタイルで、ブランドの都市的な魅力を最大限に引き出しました。
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-accent">80</div>
                  <div className="text-sm text-muted-foreground">納品カット数</div>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-accent">1日</div>
                  <div className="text-sm text-muted-foreground">撮影期間</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">撮影内容:</h4>
                <div className="flex flex-wrap gap-2">
                  {['全身カット', '着用カット', 'ディテールカット', 'バックショット'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={portfolio2}
                alt="DARS様撮影事例"
                className="w-full h-96 object-cover rounded-xl shadow-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};