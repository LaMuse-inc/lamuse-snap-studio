import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-studio-charcoal mb-6">
            LaMuse Studio<span className="text-studio-accent">について</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            アパレルブランドのための専門撮影代行サービス。EC・LOOK・SNSまで一貫制作で、
            <span className="text-studio-accent font-semibold">最短24時間</span>のスピードと安定したクオリティを両立します。
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-sm text-studio-accent uppercase font-semibold mb-2">ミッション</div>
                <div className="text-lg font-bold text-studio-charcoal">ブランドを"売れるビジュアル"で加速</div>
              </Card>
              <Card className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-sm text-studio-accent uppercase font-semibold mb-2">ビジョン</div>
                <div className="text-lg font-bold text-studio-charcoal">小さなブランドの"いちばんの相棒"に</div>
              </Card>
              <Card className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-sm text-studio-accent uppercase font-semibold mb-2">事業形態</div>
                <div className="text-lg font-bold text-studio-charcoal">撮影代行サービス</div>
              </Card>
              <Card className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-sm text-studio-accent uppercase font-semibold mb-2">専門分野</div>
                <div className="text-lg font-bold text-studio-charcoal">アパレル・ファッション</div>
              </Card>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-studio-charcoal mb-6">お問い合わせ</h3>
              <div className="space-y-4 text-gray-600 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-studio-accent rounded-full"></div>
                  <span>営業時間: 平日 10:00-18:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-studio-accent rounded-full"></div>
                  <span>Email: info@lamuse-studio.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-studio-accent rounded-full"></div>
                  <span>お見積り: 無料・24時間以内に回答</span>
                </div>
              </div>
              <a href="#contact" className="inline-block bg-studio-accent hover:bg-studio-accent/90 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                お問い合わせフォームへ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


