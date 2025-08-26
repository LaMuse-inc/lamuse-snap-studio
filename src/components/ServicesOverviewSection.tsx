import { Camera, Package, ShoppingCart, Factory, CheckCircle, ArrowRight, Clock, Users, Award, Star, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";


const services = [
  {
    id: "photography",
    icon: Camera,
    title: "撮影代行",
    image: "/撮影代行.png",
    subtitle: "プロフェッショナルな商品・モデル撮影",
    description: "EC・LOOKBOOK・SNS用の撮影をワンストップで提供。最大70%のコスト削減と、最短3日のスピード納品を実現。",
    detailedDescription: "アパレル業界に特化した撮影サービスで、商品の魅力を最大限に引き出します。プロのカメラマンとスタイリストが、ブランドの世界観に合わせた高品質な撮影を提供。EC用の白背景撮影からLOOKBOOK用のライフスタイル撮影まで幅広く対応します。",
    features: [
      "プロカメラマンによる撮影",
      "モデル手配・スタイリング対応", 
      "即日レタッチ・納品可能",
      "スタジオ・ロケーション選択可",
      "EC・SNS用最適化",
      "白背景・ライフスタイル撮影",
      "360度商品撮影",
      "動画撮影オプション",
      "季節・トレンド対応",
      "ブランディング撮影"
    ],
    plans: [
      { 
        name: "ベーシック", 
        price: "¥10,000〜/10点", 
        description: "物撮り（平置き・ハンガー）※レタッチ込み",
        features: ["白背景撮影", "レタッチ込み", "3営業日納品", "高解像度データ"]
      },
      { 
        name: "スタンダード", 
        price: "¥30,000〜/10点", 
        description: "物撮り + トルソー撮影※レタッチ込み",
        features: ["複数角度撮影", "ライフスタイル撮影", "プロレタッチ込み", "翌日納品"]
      },
      { 
        name: "プレミアム", 
        price: "¥50,000〜/10点", 
        description: "全撮影スタイル対応※レタッチ込み",
        features: ["モデル撮影", "ロケーション撮影", "動画撮影", "プロレタッチ込み", "即日納品"]
      }
    ],
    process: [
      { step: "1", title: "お問い合わせ・ヒアリング", description: "撮影の目的、商品点数、予算などを詳しくお聞きします。" },
      { step: "2", title: "企画・提案", description: "ブランドに最適な撮影プランをご提案いたします。" },
      { step: "3", title: "撮影実施", description: "プロカメラマンによる撮影を行います。" },
      { step: "4", title: "レタッチ・納品", description: "高品質なレタッチを行い、データを納品いたします。" }
    ],
    testimonials: [
      { 
        brand: "アパレルブランドA", 
        comment: "品質の高さとスピード感に満足。継続してお願いしています。", 
        rating: 5,
        result: "撮影コスト60%削減"
      },
      { 
        brand: "D2CブランドB", 
        comment: "EC用の撮影からLOOKBOOKまで一括対応で助かります。", 
        rating: 5,
        result: "売上130%向上"
      }
    ],
    faqs: [
      { q: "最小ロットはありますか？", a: "1点から撮影可能です。小ロットでもお気軽にご相談ください。" },
      { q: "納期はどのくらいですか？", a: "プランにより異なりますが、最短即日〜3営業日で納品いたします。" },
      { q: "モデルの手配は可能ですか？", a: "はい、豊富なモデルネットワークから最適なモデルをキャスティングいたします。" }
    ]
  },
  {
    id: "packaging",
    icon: Package,
    title: "梱包資材",
    image: "/梱包資材.png",
    subtitle: "オリジナルデザインの魅力",
    description: "単なるダンボールではない。あなたのブランドストーリーを伝える、強力なマーケティングツール",
    detailedDescription: "ロゴ、レイアウトを自由にカスタマイズ。18色から選択可能で、あなたのブランドイメージを完璧に表現。10枚から製作可能、100枚以上を推奨し、より効率的なコストでご提供いたします。",
    features: [
      "デザイン自由・フルカラー印刷対応",
      "N式ダンボール: 36.0×28.0×9.0cm（80サイズ）",
      "材質: Eフルート、再生紙100%使用",
      "OPP袋: ジップ付き、36.0×28.0cm",
      "ジュエリーボックス: 高級感あるギフト仕様",
      "アクセサリー専用緩衝材・仕切り",
      "ブランドロゴ箔押し対応",
      "底上げ台紙: ¥30/枚（オプション）",
      "印刷インク: 18色から選択可能",
      "小ロット対応: 10枚から製作可能",
      "送料無料・全国どこでも配送",
      "環境にやさしい: 再生紙100%使用",
      "追加コストを気にせず安心してご利用"
    ],
    plans: [
      { 
        name: "プレミアムプラン", 
        price: "¥6,610/10セット", 
        description: "ロゴ入りダンボール＋ロゴ入りOPP袋",
        features: ["フルカラー印刷対応", "2色印刷対応", "小ロット対応可能", "送料無料"]
      },
      { 
        name: "ジュエリーボックスプラン", 
        price: "¥8,900/10セット", 
        description: "高級ジュエリーボックス＋専用緩衝材",
        features: ["箔押しロゴ対応", "ベルベット内装", "仕切り・緩衝材付き", "ギフト仕様"]
      },
      { 
        name: "スタンダードプラン", 
        price: "¥6,230/10セット", 
        description: "ロゴ入りダンボール＋無地OPP袋",
        features: ["2色印刷対応", "ベーシック仕様", "小ロット対応可能", "送料無料"]
      },
      { 
        name: "エコノミープラン", 
        price: "¥3,340/10セット", 
        description: "無地ダンボール＋無地OPP袋",
        features: ["無地ダンボール", "ベーシック仕様", "小ロット対応可能", "送料無料"]
      }
    ],
    process: [
      { step: "1", title: "お問い合わせ", description: "必要なセット数、デザインイメージをお聞きします。" },
      { step: "2", title: "デザイン決定", description: "18色から選んでロゴ・レイアウトを決定します。" },
      { step: "3", title: "版代お支払い", description: "初回のみ版代をお支払いいただきます。" },
      { step: "4", title: "製造・納品", description: "オンデマンド16-26日、サブスク5-10日で納品します。" }
    ],
    testimonials: [
      { 
        brand: "コスメブランドC", 
        comment: "パッケージ変更後、ブランド認知度が大幅に向上しました。", 
        rating: 5,
        result: "リピート率25%向上"
      },
      { 
        brand: "アクセサリーブランドD", 
        comment: "環境配慮型の提案で、お客様からの評価も上がりました。", 
        rating: 5,
        result: "顧客満足度90%以上"
      }
    ],
    faqs: [
      { q: "最小ロット数はいくつですか？", a: "10セットから対応可能です。100セット以上でより効率的な価格でご提供できます。" },
      { q: "納期はどのくらいですか？", a: "オンデマンド: 16-26日（月末・15日発送）、サブスク継続: 5-10日（在庫から発送・サブスク限定）" },
      { q: "版代はかかりますか？", a: "基本版代: 5,000円〜、例: 20×15cmサイズ: 13,000円。デザインサイズや複雑さにより料金が変動します。" }
    ]
  },
  {
    id: "ec",
    icon: ShoppingCart,
    title: "EC構築",
    image: "/EC構築.png",
    subtitle: "売れるECサイト制作",
    description: "Shopify/BASEを活用した最適なEC構築。売れるUI/UX設計で平均売上130%向上を実現。",
    detailedDescription: "単なるECサイト制作ではなく、「売れる仕組み」を構築します。ユーザー行動分析に基づいたUI/UX設計、コンバージョン率を高める導線設計、SEO対策まで包括的にサポート。継続的な改善提案で長期的な成長をサポートします。",
    features: [
      "売れるUI/UX設計",
      "決済・物流システム連携",
      "SEO対策・集客支援",
      "運用サポート付き",
      "スマホ最適化",
      "分析・改善提案",
      "在庫管理システム",
      "顧客管理機能",
      "メルマガ・LINE連携",
      "セキュリティ対策"
    ],
    plans: [
      { 
        name: "ライトプラン", 
        price: "〜20万円", 
        description: "スタートアップ向け",
        features: ["テンプレートカスタマイズ", "基本機能実装", "決済連携", "3ヶ月サポート"]
      },
      { 
        name: "スタンダードプラン", 
        price: "20〜50万円", 
        description: "成長期ブランド向け",
        features: ["オリジナルデザイン", "カスタム機能", "SEO対策", "6ヶ月サポート"]
      },
      { 
        name: "プレミアムプラン", 
        price: "50万円〜", 
        description: "大規模ブランド向け",
        features: ["フルカスタム開発", "システム連携", "マーケティング支援", "12ヶ月サポート"]
      },
      { 
        name: "LP制作", 
        price: "10〜30万円", 
        description: "全ブランド対応",
        features: ["1ページ完結型", "レスポンシブ対応", "問い合わせフォーム", "基本SEO対策"]
      }
    ],
    process: [
      { step: "1", title: "要件定義", description: "ビジネス目標、ターゲット、必要機能を詳しく分析します。" },
      { step: "2", title: "設計・デザイン", description: "ユーザー体験を重視したサイト設計とデザインを行います。" },
      { step: "3", title: "開発・テスト", description: "機能開発とテストを行い、品質を確保します。" },
      { step: "4", title: "公開・運用", description: "サイト公開後も継続的な改善と運用をサポートします。" }
    ],
    testimonials: [
      { 
        brand: "ファッションブランドE", 
        comment: "EC構築後、売上が2倍になりました。運用サポートも充実しています。", 
        rating: 5,
        result: "売上200%向上"
      },
      { 
        brand: "雑貨ブランドF", 
        comment: "ユーザビリティが高く、リピート購入率が大幅に改善しました。", 
        rating: 5,
        result: "リピート率40%向上"
      }
    ],
    faqs: [
      { q: "どのプラットフォームを使用しますか？", a: "お客様のニーズに応じて、Shopify、BASE、独自システムなど最適なプラットフォームをご提案します。" },
      { q: "運用サポートは含まれますか？", a: "はい、プランに応じて3〜12ヶ月の運用サポートが含まれます。" },
      { q: "SEO対策は含まれますか？", a: "スタンダード以上のプランにSEO対策が含まれます。" }
    ]
  },
  {
    id: "oem",
    icon: Factory,
    title: "OEM製造",
    image: "/OEM製造.png",
    subtitle: "オリジナル商品の製造",
    description: "アイデアを形にする小ロット生産。最小ロット50着から対応し、サンプル作成・修正無制限。",
    detailedDescription: "アイデアから商品化まで、製造のプロフェッショナルがトータルサポート。信頼できる工場ネットワークと品質管理システムで、高品質な商品を小ロットから製造可能。コスト最適化と品質向上を両立したOEMサービスです。",
    features: [
      "最小ロット50着から対応",
      "サンプル作成・修正無制限",
      "品質管理・検品サービス",
      "納期管理・進捗報告",
      "素材選定サポート",
      "コスト最適化提案",
      "工場ネットワーク",
      "品質保証",
      "物流サポート",
      "アフターサービス"
    ],
    plans: [
      { 
        name: "小ロット", 
        price: "50着〜", 
        description: "テスト販売向け",
        features: ["50-200着", "サンプル制作", "基本検品", "標準納期"]
      },
      { 
        name: "中ロット", 
        price: "200着〜", 
        description: "本格販売向け",
        features: ["200-500着", "詳細検品", "品質保証", "短縮納期オプション"]
      },
      { 
        name: "大ロット", 
        price: "500着〜", 
        description: "量産対応",
        features: ["500着以上", "厳格検品", "専任担当", "物流サポート"]
      }
    ],
    process: [
      { step: "1", title: "企画・相談", description: "商品アイデア、ターゲット価格、数量などを詳しくご相談します。" },
      { step: "2", title: "サンプル制作", description: "デザインに基づいてサンプルを制作し、品質を確認いただきます。" },
      { step: "3", title: "本生産", description: "サンプル承認後、本生産を開始いたします。" },
      { step: "4", title: "検品・納品", description: "厳格な検品を行い、指定場所へ納品いたします。" }
    ],
    testimonials: [
      { 
        brand: "新興ブランドG", 
        comment: "小ロットから対応してもらえて、ブランド立ち上げがスムーズでした。", 
        rating: 5,
        result: "初回生産100%完売"
      },
      { 
        brand: "セレクトショップH", 
        comment: "品質管理が徹底していて、お客様からのクレームがゼロです。", 
        rating: 5,
        result: "品質クレーム0件"
      }
    ],
    faqs: [
      { q: "最小ロット数はいくつですか？", a: "50着から対応可能です。アイテムによって変動する場合があります。" },
      { q: "サンプル制作にかかる時間は？", a: "デザイン確定後、約1-2週間でサンプルをお渡しします。" },
      { q: "品質保証はありますか？", a: "はい、厳格な検品基準をクリアした商品のみ納品し、品質を保証いたします。" }
    ]
  }
];

export const ServicesOverviewSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden">

      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium text-gray-600 mb-4 sm:mb-6">
            OUR SERVICES
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            4つのサービスで<br className="md:hidden" />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">完全サポート</span>
          </h2>
        </div>

        {/* Services Grid - Large Images */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="group relative block overflow-hidden rounded-lg bg-gray-900 aspect-[4/3] sm:aspect-[16/12] md:aspect-[16/10] w-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* MORE Overlay */}
                <div 
                  className={`absolute inset-0 bg-black/90 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="text-center">
                    <p className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 tracking-wider">MORE</p>
                    <div className="w-12 sm:w-16 h-1 bg-white mx-auto animate-pulse"></div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Service Modal */}
      <Modal isOpen={!!selectedService} onClose={closeModal}>
        {selectedService && (
          <div className="max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded flex items-center justify-center">
                  <selectedService.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{selectedService.title}</h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">{selectedService.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">{selectedService.detailedDescription}</p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
              {/* Features */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">サービス内容</h3>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Plans */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">料金プラン</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
                  {selectedService.plans.map((plan, index) => (
                    <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded">
                      <h4 className="font-bold text-gray-900 mb-2">{plan.name}</h4>
                      <p className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">{plan.price}</p>
                      <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{plan.description}</p>
                      <ul className="space-y-1 sm:space-y-2">
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex} className="text-xs text-gray-600 flex items-center gap-2">
                            <div className="w-1 h-1 bg-blue-600 rounded flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>


              </div>

              {/* Process */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">サービスの流れ</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {selectedService.process.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded flex items-center justify-center font-bold text-base sm:text-lg mx-auto mb-3">
                        {step.step}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{step.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>


              {/* FAQ */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">よくある質問</h3>
                <div className="space-y-3 sm:space-y-4">
                  {selectedService.faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Q: {faq.q}</h4>
                      <p className="text-gray-700 text-sm sm:text-base">A: {faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 sm:pt-6 border-t">
                <div className="flex justify-center">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto">
                    <a 
                      href="https://fashionpartners.manus.space/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      お問い合わせ
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};