import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Users, Zap } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle2,
    title: "コスト効率",
    description:
      "同日で複数ブランドを撮影しスタジオ費用を最適化。シンプルかつハイクオリティなセットで無駄を削減します。",
    bulletPoints: ["スタジオ費用をシェア", "最短24h納品で機会損失を最小化"],
  },
  {
    icon: Users,
    title: "ワンストップサービス",
    description:
      "モデル/インフルエンサー手配から撮影、レタッチまで一括対応。ネットワーク活用で適正価格のキャスティングが可能。",
    bulletPoints: ["モデル・HM・スタイリング手配", "撮影/レタッチ/色校正まで"],
  },
  {
    icon: Zap,
    title: "柔軟な対応力と実績",
    description:
      "EC、LOOK、SNSまで媒体最適化。D2C・セレクトショップを中心に120+の撮影実績。",
    bulletPoints: ["媒体ごとの最適デリバリー", "プレビュー24h/本納品最短24h"],
  },
];

export const ReasonsSection = () => {
  return (
    <section id="reasons" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-6 py-2 text-sm font-semibold">
            Why Fashion Partners
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground tracking-tight">
            Fashion Partnersが選ばれる
            <span className="block text-studio-accent">3つの理由</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded bg-studio-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-studio-accent" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                    <div className="space-y-2">
                      {reason.bulletPoints.map((bp) => (
                        <div key={bp} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-studio-accent rounded" />
                          <span className="text-sm text-foreground/80">{bp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};


