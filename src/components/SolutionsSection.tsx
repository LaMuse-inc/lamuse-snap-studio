import { Card } from "@/components/ui/card";
import { CheckCircle, Zap, Users, DollarSign, Clock } from "lucide-react";

const solutions = [
  {
    icon: DollarSign,
    title: "コスト効率の革新",
    description: "ペーパー背景撮影×1日複数ブランド対応で、スタジオ費用を最大70%削減",
    highlight: "70%削減"
  },
  {
    icon: Zap,
    title: "ワンストップサービス",
    description: "モデル・インフルエンサーキャスティングから撮影、納品まで一括対応",
    highlight: "全て対応"
  },
  {
    icon: Users,
    title: "独自ネットワーク",
    description: "相場より30-40%安価なモデル費用を実現",
    highlight: "30-40%安価"
  },
  {
    icon: Clock,
    title: "柔軟な撮影プラン",
    description: "物撮り、着用撮影、ルックブック、SNSコンテンツまで幅広く対応",
    highlight: "幅広く対応"
  }
];

export const SolutionsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            LaMuse Studioが全て解決します
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            革新的なアプローチで、撮影に関する全ての課題を一気に解決
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-scale-in group"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                    <div className="inline-flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-accent">{solution.highlight}</span>
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