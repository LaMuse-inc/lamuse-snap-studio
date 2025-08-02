import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "ベーシックプラン",
    subtitle: "半日撮影",
    price: "50,000円〜",
    duration: "4時間",
    shots: "20-30カット",
    features: [
      "撮影時間: 4時間",
      "納品カット数: 20-30カット",
      "基本的な商品撮影",
      "3営業日以内納品"
    ],
    recommended: "少量の新作商品撮影、SNS用コンテンツ",
    popular: false
  },
  {
    name: "スタンダードプラン",
    subtitle: "1日撮影",
    price: "100,000円〜",
    duration: "8時間",
    shots: "50-80カット",
    features: [
      "撮影時間: 8時間",
      "納品カット数: 50-80カット",
      "モデル撮影込み",
      "複数アングル対応",
      "3営業日以内納品"
    ],
    recommended: "シーズンコレクション、EC用商品撮影",
    popular: true
  },
  {
    name: "プレミアムプラン",
    subtitle: "1日撮影＋企画",
    price: "150,000円〜",
    duration: "8時間",
    shots: "80-120カット",
    features: [
      "撮影時間: 8時間",
      "納品カット数: 80-120カット",
      "企画提案込み",
      "複数モデル対応",
      "ルックブック制作",
      "当日納品対応可能"
    ],
    recommended: "ルックブック制作、ブランドイメージ撮影",
    popular: false
  }
];

export const PricingSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            選べる3つの撮影プラン
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            あなたのブランドのニーズに合わせて最適なプランをお選びください
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-hover animate-scale-in ${
                plan.popular 
                  ? 'border-accent shadow-hover scale-105' 
                  : 'border-border shadow-card hover:border-accent/50'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    人気No.1
                  </Badge>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.subtitle}</p>
                  <div className="text-4xl font-bold text-accent">{plan.price}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="text-sm text-muted-foreground">撮影時間</div>
                    <div className="font-semibold">{plan.duration}</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="text-sm text-muted-foreground">納品カット数</div>
                    <div className="font-semibold">{plan.shots}</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 bg-accent/10 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">こんな方におすすめ:</div>
                  <div className="text-foreground font-medium">{plan.recommended}</div>
                </div>
                
                <Button 
                  variant={plan.popular ? "cta" : "outline"} 
                  className="w-full" 
                  size="lg"
                >
                  このプランを選ぶ
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Special offers */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2 text-base">
              リピート割引: 2回目以降20%OFF
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">
              複数ブランド同日撮影: 各15%OFF
            </Badge>
            <Badge className="bg-accent text-accent-foreground px-4 py-2 text-base">
              初回限定: 50%OFF（期間限定）
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};