import { Navigation } from "@/components/Navigation";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Package, Box, ShoppingBag, Sticker } from "lucide-react";

const packagingServices = [
  {
    icon: Box,
    title: "オリジナルボックス",
    description: "ブランドイメージに合わせたオリジナル梱包箱を製作",
    features: ["サイズオーダー", "ロゴ印刷", "材質選定", "コスト最適化"],
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: ShoppingBag,
    title: "ショッピングバッグ",
    description: "高品質なショッピングバッグでブランド価値を向上",
    features: ["紙製・不織布", "オリジナルデザイン", "持ち手選定", "环境配慮素材"],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Package,
    title: "緩衝材",
    description: "商品を安全に配送するための高品質緩衝材",
    features: ["気泡緩衝材", "紙製緩衝材", "クッション", "エコ素材"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Sticker,
    title: "シール・ラベル",
    description: "ブランドアイデンティティを強化するオリジナルシール",
    features: ["ロゴシール", "サンキューシール", "防水シール", "ホログラム"],
    image: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?q=80&w=800&auto=format&fit=crop"
  }
];

const Packaging = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section
        className="relative pt-40 pb-32 bg-gray-900 text-white"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1573883429844-c2f5b9b7c99d?q=80&w=1920&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-5xl lg:text-[64px] leading-[1.1] font-black tracking-tight">
              アパレル特化の
              <br />
              <span className="text-white/90 font-semibold text-[32px] lg:text-[40px]">
                梱包資材ソリューション
              </span>
            </h1>
            <p className="mt-12 text-xl text-white/90 max-w-4xl mx-auto px-4">
              ブランド価値を向上させる高品質な梱包資材を小ロットから提供
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white"></div>
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-gray-100/20 to-gray-200/20 rounded blur-3xl"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-gray-900">
              梱包資材ラインアップ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ブランドイメージに合わせたオリジナル梱包資材を小ロットから製作
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {packagingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="glass-card rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-semibold text-lg">{service.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-6">
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">主要サービス</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-900 rounded flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Packaging;