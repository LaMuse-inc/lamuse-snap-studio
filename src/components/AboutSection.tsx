import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-black text-foreground">LaMuse Studioについて</h2>
            <p className="text-muted-foreground leading-relaxed">
              LaMuse Studioは、アパレルブランドのための撮影代行サービスです。EC・LOOK・SNSまで一貫制作で、
              最短24時間のスピードと安定したクオリティを両立します。
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-gradient-card border-0 shadow-card">
                <div className="text-xs text-muted-foreground uppercase">事業名</div>
                <div className="text-lg font-bold">LaMuse Studio</div>
              </Card>
              <Card className="p-4 bg-gradient-card border-0 shadow-card">
                <div className="text-xs text-muted-foreground uppercase">事業形態</div>
                <div className="text-lg font-bold">撮影代行サービス</div>
              </Card>
              <Card className="p-4 bg-gradient-card border-0 shadow-card">
                <div className="text-xs text-muted-foreground uppercase">ミッション</div>
                <div className="text-lg font-bold">ブランドを“売れるビジュアル”で加速</div>
              </Card>
              <Card className="p-4 bg-gradient-card border-0 shadow-card">
                <div className="text-xs text-muted-foreground uppercase">ビジョン</div>
                <div className="text-lg font-bold">小さなブランドの“いちばんの相棒”に</div>
              </Card>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">お問い合わせ</h3>
            <div className="space-y-2 text-foreground/80">
              <p>営業時間: 平日 10:00-18:00</p>
              <p>Email: info@lamuse-studio.com</p>
              <p>Tel: 03-XXXX-XXXX</p>
            </div>
            <a href="#contact" className="inline-block bg-studio-accent text-white px-6 py-3 rounded-lg font-semibold shadow-card hover:shadow-hover transition-all">
              お問い合わせフォームへ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


