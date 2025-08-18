
const plans = [
  {
    title: "ライトプラン",
    price: "¥1,000〜",
    priceDetail: "1カットから",
    description: "商品撮影のみ",
    features: [
      "1カット ¥1,000〜",
      "白背景撮影",
      "基本レタッチ込み",
      "納期 即日"
    ]
  },
  {
    title: "スタンダードプラン",
    price: "¥20,000〜",
    priceDetail: "20カットパック",
    description: "商品撮影＋モデル撮影",
    features: [
      "商品撮影 20カット ¥20,000",
      "モデル撮影 10カット ¥15,000",
      "スタジオ撮影",
      "プロレタッチ込み",
      "納期 5営業日"
    ],
  },
  {
    title: "プレミアムプラン",
    price: "¥50,000〜",
    priceDetail: "50カットパック",
    description: "ブランドイメージ撮影",
    features: [
      "キービジュアル撮影",
      "商品・モデル撮影 50カット",
      "ロケーション撮影可",
      "動画撮影オプション",
      "ディレクション込み",
      "納期 7営業日"
    ]
  }
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gray-50"></div>
      

      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-gray-100/20 to-gray-200/20 rounded blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-l from-gray-200/20 to-gray-100/20 rounded blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900">料金について</h2>
          <p className="text-lg text-gray-600 mt-2">シンプルで分かりやすい料金体系</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="glass-light p-8 rounded-lg relative transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{plan.title}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <p className="text-3xl font-bold text-gray-900">{plan.price}</p>
                <p className="text-sm text-gray-500">{plan.priceDetail}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-4 rounded font-medium transition-all duration-300 glass text-gray-900 hover:bg-white/90 hover:scale-105"
              >
                詳しく見る
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="glass-light inline-block px-8 py-4 rounded mb-12">
            <p className="text-gray-600">
              ※ 料金は撮影内容、カット数、使用用途により変動します<br />
              ※ 交通費、スタジオ費用は別途お見積もり
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};