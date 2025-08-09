import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "ECライト",
    subtitle: "EC商品撮影に",
    price: "¥98,000",
    originalPrice: "¥150,000",
    duration: "半日撮影",
    shots: "30-50カット",
    features: [
      "白背景/影あり・切り抜き対応",
      "商品・トルソー・ハンガー撮影",
      "基本レタッチ込み",
      "EC規格最適化",
      "48時間以内納品"
    ],
    extras: [
      "スタジオ使用料込み",
      "カラバリ1色追加無料"
    ],
    recommended: "新作ローンチ/小ロット商品のEC掲載",
    popular: false,
    discount: "35%",
    color: "studio-charcoal"
  },
  {
    name: "LOOK標準",
    subtitle: "モデル着用・LOOKに",
    price: "¥198,000",
    originalPrice: "¥280,000",
    duration: "1日集中撮影",
    shots: "80-120カット",
    features: [
      "モデル着用/全身・バストアップ・ディテール",
      "4K+RAW撮影（静止画/短尺動画）",
      "プロレタッチ/色合わせ",
      "モデル・ヘアメイク手配可",
      "24時間以内プレビュー納品",
      "スタイリング/ディレクション付"
    ],
    extras: [
      "プレミアムスタジオ",
      "プロ照明機材",
      "ロケ撮影対応（近郊）"
    ],
    recommended: "LOOK/ルックブック・LP用KV・広告用素材",
    popular: true,
    discount: "29%",
    color: "studio-accent"
  },
  {
    name: "ブランドフル",
    subtitle: "大型キャンペーンに",
    price: "¥398,000",
    originalPrice: "¥550,000",
    duration: "2日間撮影",
    shots: "200+カット",
    features: [
      "撮影チーム専属（フォト/動画/レタッチ）",
      "8K撮影/短尺動画複数本",
      "高度レタッチ・合成/色校正",
      "複数モデル/多拠点対応",
      "現場ライブ編集/即日サムネ納品",
      "当日一部データ納品",
      "SNS縦型動画込み"
    ],
    extras: [
      "最高級スタジオ",
      "全機材フル装備",
      "専属チーム",
      "コンセプト/絵コンテ制作"
    ],
    recommended: "大型キャンペーン/年間契約ブランド",
    popular: false,
    discount: "28%",
    color: "studio-charcoal"
  }
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden scroll-mt-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-studio-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-studio-charcoal/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-studio-accent/10 text-studio-accent rounded-full text-sm font-medium tracking-wide mb-6">
            PRICING PLANS
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-foreground tracking-tight">
            アパレル特化
            <span className="block text-studio-accent">撮影パッケージ</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            EC・LOOK・SNSの用途別に選べる、
            <br />
            <span className="text-studio-charcoal font-medium">柔軟な撮影プランをご用意</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 bg-white/90 backdrop-blur-sm border border-studio-silver/20 shadow-studio transition-all duration-500 hover:-translate-y-3 hover:shadow-hover animate-scale-in group ${
                plan.popular 
                  ? 'ring-2 ring-studio-accent/50 scale-105 shadow-hover' 
                  : 'hover:border-studio-accent/50'
              }`}
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Discount Badge */}
              <div className="absolute -top-3 -right-3">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{plan.discount} OFF
                </div>
              </div>
              
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-studio-accent text-white px-6 py-2 flex items-center gap-2 rounded-full shadow-lg">
                    <Star className="w-4 h-4" />
                    MOST POPULAR
                  </Badge>
                </div>
              )}
              
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-foreground tracking-wide">{plan.name}</h3>
                    <p className="text-muted-foreground font-medium">{plan.subtitle}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-lg text-muted-foreground line-through">{plan.originalPrice}</span>
                      <div className="text-4xl font-black text-studio-accent">{plan.price}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">税込価格・全て込み</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-card rounded-xl">
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">撮影期間</div>
                    <div className="text-sm font-bold text-studio-charcoal mt-1">{plan.duration}</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-card rounded-xl">
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">納品カット</div>
                    <div className="text-sm font-bold text-studio-charcoal mt-1">{plan.shots}</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-studio-charcoal uppercase tracking-wide">含まれるサービス</h4>
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-studio-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-studio-accent" />
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-studio-charcoal uppercase tracking-wide">追加特典</h4>
                  <div className="space-y-2">
                    {plan.extras.map((extra, extraIndex) => (
                      <div key={extraIndex} className="flex items-center gap-3 p-2 bg-studio-accent/5 rounded-lg">
                        <div className="w-2 h-2 bg-studio-accent rounded-full" />
                        <span className="text-xs text-studio-charcoal font-medium">{extra}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 bg-studio-accent/10 rounded-xl border border-studio-accent/20">
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2">推奨用途</div>
                  <div className="text-sm text-studio-charcoal font-medium">{plan.recommended}</div>
                </div>
                
                <Button 
                  className={`w-full py-4 text-base font-bold rounded-xl transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-studio-accent hover:bg-studio-accent/90 text-white shadow-studio hover:shadow-hover hover:scale-105' 
                      : 'bg-studio-charcoal hover:bg-studio-charcoal/90 text-white border-2 border-studio-charcoal hover:border-studio-accent'
                  }`}
                >
                  {plan.name}プランを選択
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Value Propositions */}
        <div className="text-center mb-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-card">
              <div className="text-2xl font-black text-studio-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground font-medium">満足保証</div>
            </div>
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-card">
              <div className="text-2xl font-black text-studio-charcoal mb-2">24H</div>
              <div className="text-sm text-muted-foreground font-medium">最短納期</div>
            </div>
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-card">
              <div className="text-2xl font-black text-studio-accent mb-2">∞</div>
              <div className="text-sm text-muted-foreground font-medium">修正回数</div>
            </div>
          </div>
        </div>
        
        {/* Special offers */}
        <div className="text-center animate-fade-in">
            <div className="bg-gradient-to-r from-studio-accent via-studio-accent to-studio-charcoal p-8 rounded-3xl shadow-studio text-white max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-black mb-6">
              🎉 特別キャンペーン実施中
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-lg font-bold">初回限定</div>
                <div className="text-2xl font-black">50% OFF</div>
                <div className="text-xs opacity-90">全プラン対象</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-lg font-bold">同日撮影</div>
                <div className="text-2xl font-black">20% OFF</div>
                <div className="text-xs opacity-90">複数ブランド</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-lg font-bold">年間契約</div>
                <div className="text-2xl font-black">30% OFF</div>
                <div className="text-xs opacity-90">継続利用</div>
              </div>
            </div>
            <p className="text-lg opacity-90 mb-4">⏰ 期間限定オファー - 今月末まで</p>
            <button className="bg-white text-studio-charcoal px-8 py-4 rounded-xl font-bold hover:bg-studio-light transition-colors duration-300 shadow-hover">
              今すぐ特別価格で予約する
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};