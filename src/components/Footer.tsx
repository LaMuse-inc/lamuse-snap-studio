import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-gray-800/20 to-gray-700/20 rounded blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Company info */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="text-white">
              <Logo size="lg" isWhite={true} />
            </div>
            <p className="text-white/80 leading-relaxed text-base sm:text-lg">
              アパレルブランドの成長を
              <br />
              トータルでサポートするパートナー
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="mailto:contact@la-muse.org" className="w-10 h-10 sm:w-12 sm:h-12 glass bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="tel:080-2165-1838" className="w-10 h-10 sm:w-12 sm:h-12 glass bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          
          {/* Company */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold">会社情報</h4>
            <ul className="space-y-2 sm:space-y-3 text-white/80">
              <li><a href="/about" className="hover:text-white transition-colors text-sm sm:text-base">会社概要</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold">お問い合わせ</h4>
            <div className="space-y-3 sm:space-y-4 text-white/80">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base">
                  〒150-0002<br />
                  東京都渋谷区渋谷3-27-1<br />
                  100BANCH 2F
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <p className="text-sm sm:text-base">080-2165-1838</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <p className="text-sm sm:text-base">contact@la-muse.org</p>
              </div>
              <p className="text-xs sm:text-sm">営業時間: 平日 10:00-20:00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-center md:text-left text-sm sm:text-base">
            &copy; 2025 LaMuse Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};