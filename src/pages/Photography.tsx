import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, CheckCircle2, Star, Clock, Users, Package } from "lucide-react";
import { useState } from "react";

const PhotographyPage = () => {
  const [heroImg] = useState<string>("/photography-hero.jpg");
  
  const features = [
    { icon: Camera, title: "プロ撮影", description: "経験豊富なカメラマンが撮影" },
    { icon: Clock, title: "最短3日納品", description: "スピーディーな対応" },
    { icon: Package, title: "小ロット対応", description: "1点から撮影可能" },
    { icon: Users, title: "モデル手配", description: "キャスティングも対応" }
  ];

  const plans = [
    {
      name: "ベーシック",
      price: "¥10,000〜",
      unit: "/10点",
      features: ["物撮り（平置き・ハンガー）", "白背景撮影", "基本レタッチ込み", "3営業日納品"],
      recommended: false
    },
    {
      name: "スタンダード",
      price: "¥30,000〜",
      unit: "/10点",
      features: ["物撮り + トルソー撮影", "背景選択可能", "高度なレタッチ込み", "モデル撮影オプション"],
      recommended: true
    },
    {
      name: "プレミアム",
      price: "¥50,000〜",
      unit: "/10点",
      features: ["全撮影スタイル対応", "ロケーション撮影可", "プロモデル込み", "即日〜翌日納品"],
      recommended: false
    }
  ];

  const steps = [
    {
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=800&auto=format&fit=crop",
      title: "お問い合わせ・ヒアリング",
      description: "お問い合わせフォームから撮影のご相談をお気軽にどうぞ",
      details: [
        "撮影の目的・用途をお聞かせください",
        "商品点数や撮影イメージをご相談",
        "予算やスケジュールの確認"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
      title: "撮影プラン決定・スケジュール調整",
      description: "お客様のニーズに合わせて最適なプランをご提案いたします",
      details: [
        "最適な撮影プランのご提案",
        "モデル選定・キャスティング",
        "撮影日程の調整・確定"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?q=80&w=800&auto=format&fit=crop",
      title: "撮影実施・データ納品",
      description: "プロカメラマンによる撮影と、迅速で高品質なデータ納品",
      details: [
        "プロフェッショナルな撮影実施",
        "その場でのクオリティチェック",
        "3営業日以内でのデータ納品"
      ]
    }
  ];

  const testimonials = [
    { brand: "アパレルブランドA", comment: "品質の高さとスピード感に満足。継続してお願いしています。", rating: 5 },
    { brand: "セレクトショップB", comment: "コストパフォーマンスが抜群。小ロットでも対応してくれるのが助かります。", rating: 5 },
    { brand: "D2CブランドC", comment: "モデル撮影からEC用の物撮りまで、全てお任せできて安心です。", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24">
        <div className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded text-sm font-medium mb-6">
                  <Camera className="w-4 h-4" />
                  PHOTOGRAPHY SERVICE
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  プロ品質の<br />
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    アパレル撮影
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  EC・LOOKBOOK・SNS用の撮影をワンストップで提供。<br />
                  最大70%のコスト削減と、最短3日のスピード納品を実現。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded shadow-lg">
                    <a href="#contact" className="flex items-center gap-2">
                      無料で相談する
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-gray-300 px-8 py-6 text-lg rounded">
                    <a href="#pricing">料金プランを見る</a>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-lg blur-3xl"></div>
                  <img 
                    src={heroImg} 
                    alt="撮影サービス" 
                    className="relative rounded-lg shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1609619385002-f40c0e4a6fe2?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              選ばれる理由
            </h2>
            <p className="text-lg text-gray-600">
              アパレル特化だからこそ実現できる品質とサービス
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              簡単3ステップで撮影完了
            </h2>
            <p className="text-lg text-gray-600">
              お問い合わせから納品まで、シンプルで分かりやすいプロセス
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-32 -right-4 w-8 h-0.5 bg-gray-300 z-0" />
                )}
                
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded flex items-center justify-center text-gray-900 font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded flex-shrink-0 mt-2" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              料金プラン
            </h2>
            <p className="text-lg text-gray-600">
              撮影内容に合わせて選べる3つのプラン
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-lg p-8 ${
                  plan.recommended ? 'ring-2 ring-blue-600 shadow-xl' : 'shadow-lg'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded text-sm font-bold">
                    おすすめ
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild 
                  className={`w-full ${
                    plan.recommended 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  <a href="#contact">このプランで相談する</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            お客様の声
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                <p className="font-medium text-gray-900">{testimonial.brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            まずは無料相談から
          </h2>
          <p className="text-xl mb-8 opacity-90">
            お客様のニーズに合わせた最適な撮影プランをご提案します
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded shadow-lg">
            <a href="/#contact" className="flex items-center gap-2">
              無料相談フォームへ
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PhotographyPage;