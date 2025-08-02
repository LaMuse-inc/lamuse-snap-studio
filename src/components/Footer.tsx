import { Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-studio-charcoal text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="col-span-2 space-y-4">
            <h3 className="text-2xl font-bold">LaMuse Studio</h3>
            <p className="text-white/80 leading-relaxed">
              小規模〜中規模アパレルブランド向けの
              <br />
              プロフェッショナル撮影代行サービス
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">サービス</h4>
            <ul className="space-y-2 text-white/80">
              <li>商品撮影</li>
              <li>モデル撮影</li>
              <li>ルックブック制作</li>
              <li>SNSコンテンツ撮影</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">お問い合わせ</h4>
            <div className="space-y-2 text-white/80">
              <p>営業時間: 平日 10:00-18:00</p>
              <p>Email: info@lamuse-studio.com</p>
              <p>Tel: 03-XXXX-XXXX</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 LaMuse Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};