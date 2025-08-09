import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const problems = [
  "撮影費用が高くて、新作のたびに躊躇してしまう",
  "モデルのキャスティングから撮影まで、複数の業者とやり取りするのが大変",
  "EC用、SNS用、ルックブック用と、それぞれ別々に撮影を依頼している",
  "小ロットの商品でも、プロクオリティの撮影をしたい",
  "撮影スタジオの予約が取れない、または費用が高すぎる"
];

export const ProblemsSection = () => {
  return (
    <section id="problems" className="py-20 bg-gradient-section scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            こんなお悩みありませんか？
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            アパレルブランドの撮影には、様々な課題が存在します
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-foreground leading-relaxed">{problem}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};