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
    <section id="works" className="py-32 bg-gradient-section scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-studio-accent/10 text-studio-accent rounded text-sm font-medium tracking-wide mb-6">
            WORKS
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-foreground tracking-tight">
            撮影実績
            <span className="block text-studio-accent">STUDIO / FASHION</span>
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
                  loading="lazy" decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded px-3 py-1">
                  <span className="text-xs font-bold text-studio-charcoal uppercase tracking-wider">{item.category}</span>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-white/70">
                      <span className="mr-3">{item.client}</span>
                      <span>{item.year}</span>
                    </div>
                    <a href="#contact" className="px-3 py-1.5 bg-white/90 text-studio-charcoal rounded text-xs font-bold hover:bg-white">
                      VIEW MORE
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
};