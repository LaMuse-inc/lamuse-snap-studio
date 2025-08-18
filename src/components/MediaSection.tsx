import { Card } from "@/components/ui/card";

const items = [
  { title: "Webサイト", desc: "EC/LP/ブランドサイト向けに最適化" },
  { title: "スマートフォン", desc: "SNS/アプリでの見栄えまで設計" },
  { title: "カタログ/雑誌", desc: "印刷用の解像度/トリムも考慮" },
  { title: "ポスター/店頭POP", desc: "大判/店頭掲出に耐える画質と構図" },
];

export const MediaSection = () => {
  return (
    <section id="media" className="py-24 bg-gradient-section scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block px-6 py-2 bg-studio-accent/10 text-studio-accent rounded text-sm font-medium tracking-wide mb-4">
            FOR ALL MEDIA
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground tracking-tight">
            あらゆる媒体で最適な見栄えに
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <Card key={i.title} className="p-6 bg-white/90 backdrop-blur-sm shadow-card border-0">
              <h3 className="text-lg font-bold text-foreground mb-2">{i.title}</h3>
              <p className="text-sm text-muted-foreground">{i.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


