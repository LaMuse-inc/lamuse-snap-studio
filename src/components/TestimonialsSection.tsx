import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    brand: "DARS",
    role: "ディレクター",
    comment:
      "LOOKとEC用を同日にまとめて撮影でき、コストとリードタイムが大幅に短縮。写真の統一感がブランド体験を高めてくれました。",
  },
  {
    brand: "SOLLA",
    role: "EC担当",
    comment:
      "物撮りの質感再現が非常に良く、返品率の低下とCVRの改善につながりました。プレビューが早いのも助かります。",
  },
  {
    brand: "URBN STUDIO",
    role: "PR",
    comment:
      "SNS向けの短尺も同時に撮影。発売当日の話題化に貢献してくれました。企画提案の質が高いです。",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-6 py-2 text-sm font-semibold">
            お客様の声
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground tracking-tight">
            導入ブランドの
            <span className="block text-studio-accent">リアルな声</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-8 bg-white/80 backdrop-blur-sm border border-studio-silver/20 shadow-studio">
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">{t.brand} / {t.role}</div>
                </div>
                <p className="text-foreground leading-relaxed">{t.comment}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


