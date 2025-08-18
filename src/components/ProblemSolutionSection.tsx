const problems = [
  {
    title: "撮影費用が高くて予算が合わない",
    description: "スタジオ代、機材費、人件費が個別にかかり、コストが膨らんでしまう"
  },
  {
    title: "複数の業者を手配する手間",
    description: "カメラマン、モデル、レタッチャーを別々に探して調整するのは大変"
  },
  {
    title: "ブランドイメージに合わない仕上がり",
    description: "期待していたクオリティや世界観と違う写真が納品される"
  }
];

const solutions = [
  {
    title: "最大70%のコスト削減",
    description: "同日複数ブランド撮影でスタジオ費用をシェア。効率的な撮影プロセスでコストを最適化",
    icon: "💰"
  },
  {
    title: "完全ワンストップサービス",
    description: "企画から納品まで全て一括対応。モデル手配・撮影・レタッチまでシームレスに提供",
    icon: "🎯"
  },
  {
    title: "アパレル特化の専門性",
    description: "EC・LOOK・SNSに最適化。120+の撮影実績で培ったブランド表現力",
    icon: "✨"
  }
];

const services = [
  "商品撮影（物撮り・着用）",
  "モデル・インフルエンサー撮影",
  "スタジオ・ロケーション撮影",
  "レタッチ・色調補正",
  "EC・SNS用最適化",
  "企画・ディレクション"
];

export const ProblemSolutionSection = () => {
  return (
    <section id="problem-solution" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white"></div>
      <div className="absolute top-32 left-16 w-80 h-80 bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Problem Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-12 text-gray-900">
            アパレル撮影で<span className="text-gray-600">こんなお悩み</span>ありませんか？
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {problems.map((problem, index) => (
              <div key={index} className="glass-light p-8 rounded">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Fashion Partners
            </span>が解決します
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            アパレルブランド特化で培った専門性とワンストップサービス
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="glass-card p-8 rounded-lg hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services List */}
        <div className="glass-light p-12 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">提供サービス</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-900 rounded"></div>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};