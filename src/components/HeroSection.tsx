import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [heroImg, setHeroImg] = useState<string>("/lp-material-hq.png");
  const benefits = [
    "撮影費用を最大70%削減",
    "最短3営業日でスピード納品",
    "ワンストップで業務効率化"
  ];

  return (
    <section className="relative overflow-hidden">
      
      
      {/* Main Hero */}
      <div className="relative bg-white pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-4 items-center">
            {/* Left Content */}
            <div>
              {/* Main Copy */}
              <h1 className="text-center md:text-left">
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                  アパレルブランドの
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
                  <span className="relative">
                    <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      成長を加速
                    </span>
                    <span className="absolute bottom-1 md:bottom-2 left-0 right-0 h-3 md:h-4 bg-yellow-300/30 -z-10"></span>
                  </span>
                  させる
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                  ワンストップソリューション
                </span>
              </h1>

              {/* Sub Copy */}
              <p className="text-center md:text-left text-base sm:text-lg md:text-xl text-gray-600 mt-6 md:mt-8 mb-8 md:mb-12 leading-relaxed">
                撮影・EC構築・梱包資材・OEM製造まで<br className="hidden sm:block" />
                ブランド運営に必要なすべてを<span className="font-bold text-gray-900">一括サポート</span>
              </p>

              {/* Benefits */}
              <div className="flex flex-col gap-3 sm:gap-4 mb-8 md:mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    無料で相談する
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded">
                  <a href="#services" className="flex items-center justify-center">サービス詳細を見る</a>
                </Button>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="flex items-center justify-center order-first md:order-last">
              <div className="h-[240px] sm:h-[280px] md:h-[520px] lg:h-[600px] w-full rounded-lg flex items-center justify-center overflow-hidden bg-white/50 backdrop-blur-sm p-2 sm:p-4">
                <img
                  src={heroImg}
                  onError={() => setHeroImg("/lp-material.png")}
                  alt="LP用メインビジュアル"
                  className="w-full h-full object-contain drop-shadow-xl"
                  style={{
                    filter: 'brightness(1.05) contrast(1.1)',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
            </div>

          </div>


          {/* Trust Indicators */}
          <div className="mt-6 md:mt-4 pt-2">
            <div className="text-center">
              {/* Company Logos - Scrolling Animation */}
              <div className="p-4 sm:p-6 md:p-8 overflow-hidden">
                <div className="relative">
                  <div className="flex animate-scroll">
                    {/* First set of brands */}
                    {[
                      { name: "NEW ERA", logo: "NE", image: "/new-era.png" },
                      { name: "Carhartt", logo: "C", image: "/carhartt.png" },
                      { name: "Hinata Life", logo: "HL", image: "/hinata_life.png" },
                      { name: "Dars", logo: "D", image: "/dars.jpg" },
                      { name: "MAROS", logo: "M", image: "/MAROS.avif" },
                      { name: "ilwiil", logo: "I", image: "/ilwil.jpg" },
                    ].map((brand, index) => (
                      <div key={`first-${index}`} className="flex-shrink-0 mx-3 sm:mx-4 md:mx-6">
                        <div className="p-2 sm:p-3 md:p-4 transition-all duration-300">
                          {brand.image ? (
                            <div className="w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20 flex items-center justify-center">
                              <img 
                                src={brand.image}
                                alt={brand.name}
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                          ) : (
                            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                              {brand.logo}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {[
                      { name: "NEW ERA", logo: "NE", image: "/new-era.png" },
                      { name: "Carhartt", logo: "C", image: "/carhartt.png" },
                      { name: "Hinata Life", logo: "HL", image: "/hinata_life.png" },
                      { name: "Dars", logo: "D", image: "/dars.jpg" },
                      { name: "MAROS", logo: "M", image: "/MAROS.avif" },
                      { name: "ilwiil", logo: "I", image: "/ilwil.jpg" },
                    ].map((brand, index) => (
                      <div key={`second-${index}`} className="flex-shrink-0 mx-3 sm:mx-4 md:mx-6">
                        <div className="p-2 sm:p-3 md:p-4 transition-all duration-300">
                          {brand.image ? (
                            <div className="w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20 flex items-center justify-center">
                              <img 
                                src={brand.image}
                                alt={brand.name}
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                          ) : (
                            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                              {brand.logo}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
              </div>

              {/* Achievement Badges */}
              <div className="mt-6 sm:mt-8">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <img 
                    src="/実績のバッジ.png" 
                    alt="実績のバッジ写真" 
                    className="h-24 sm:h-28 md:h-40 lg:h-48 object-contain"
                    style={{
                      filter: 'drop-shadow(0 0 0 transparent)',
                      background: 'transparent'
                    }}
                  />
                </div>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-800 font-semibold px-4 leading-relaxed">
                  個人ブランドから大手ブランドまで様々な業界の企業にご利用いただいております。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute -top-20 -left-10 w-96 h-96 bg-blue-100/30 rounded blur-3xl -z-10"></div>
        <div className="absolute -bottom-24 -right-10 w-[28rem] h-[28rem] bg-cyan-100/30 rounded blur-3xl -z-10"></div>
      </div>
    </section>
  );
};