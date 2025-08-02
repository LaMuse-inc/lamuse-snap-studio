import { Card } from "@/components/ui/card";
import { MessageCircle, CheckCircle, Camera } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "お問い合わせ・ヒアリング",
    description: "InstagramDMまたは問い合わせフォームから、撮影のご相談をお気軽にどうぞ",
    details: [
      "撮影の目的・用途をお聞かせください",
      "商品点数や撮影イメージをご相談",
      "予算やスケジュールの確認"
    ]
  },
  {
    icon: CheckCircle,
    title: "撮影プラン決定・スケジュール調整",
    description: "お客様のニーズに合わせて最適なプランをご提案いたします",
    details: [
      "最適な撮影プランのご提案",
      "モデル選定・キャスティング",
      "撮影日程の調整・確定"
    ]
  },
  {
    icon: Camera,
    title: "撮影実施・データ納品",
    description: "プロカメラマンによる撮影と、迅速で高品質なデータ納品",
    details: [
      "プロフェッショナルな撮影実施",
      "その場でのクオリティチェック",
      "3営業日以内でのデータ納品"
    ]
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            簡単3ステップで撮影完了
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            お問い合わせから納品まで、シンプルで分かりやすいプロセス
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 z-0" />
                )}
                
                <Card className="relative p-8 text-center bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 z-10">
                  <div className="space-y-6">
                    {/* Step number and icon */}
                    <div className="relative">
                      <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-10 h-10 text-accent" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                      
                      <div className="space-y-2 text-left">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                            <span className="text-sm text-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};