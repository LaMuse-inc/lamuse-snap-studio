import { ArrowLeft, MapPin, Phone, Mail, Users, Calendar, Target, Building2, Award, TrendingUp, Shield, Heart, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    document.title = "会社概要｜LaMuse - アパレルブランドのワンストップソリューション";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Logo size="md" />
            <Link 
              to="/" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              トップページに戻る
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              会社概要
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              アパレルブランドの成長をトータルでサポートする<br />
              ワンストップソリューションカンパニー
            </p>
          </div>

          {/* Company Story */}
          <div className="bg-white rounded-lg p-8 lg:p-12 shadow-sm mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">私たちについて</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                株式会社LaMuse（ラミューズ）は、アパレルブランドが直面する様々な課題を解決するために設立されました。
                個人のブランドから大手企業まで、すべてのアパレル事業者が持つ「想いを形にしたい」という思いを、
                包括的なソリューションでサポートしています。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                私たちは、商品撮影からEC構築、梱包資材の手配、OEM製造まで、
                アパレルブランド運営に必要なすべてのプロセスをワンストップで提供することで、
                お客様のビジネス成長を加速させることを使命としています。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                品質へのこだわりと迅速なサービス提供により、
                お客様の大切なブランドの価値を最大化することを目指しています。
              </p>
            </div>
          </div>

          {/* Company Info Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Company Details */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">基本情報</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">会社名</h3>
                    <p className="text-gray-700">株式会社LaMuse（ラミューズ）</p>
                    <p className="text-sm text-gray-500 mt-1">LaMuse Inc.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">設立</h3>
                    <p className="text-gray-700">2025年1月</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">代表取締役</h3>
                    <p className="text-gray-700">鶴 健一郎（つる けんいちろう）</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">本社所在地</h3>
                    <p className="text-gray-700">
                      〒150-0002<br />
                      東京都渋谷区渋谷3-27-1<br />
                      100BANCH 2F
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">法人番号</h3>
                    <p className="text-gray-700">4011001167162</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">資本金</h3>
                    <p className="text-gray-700">500万円</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">事業内容</h3>
                    <p className="text-gray-700">
                      アパレル商品撮影・ECサイト構築<br />
                      梱包資材販売・OEM製造・コンサルティング
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">お問い合わせ</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">電話番号</h3>
                    <p className="text-gray-700">080-2165-1838</p>
                    <p className="text-sm text-gray-500 mt-1">代表直通</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">メールアドレス</h3>
                    <p className="text-gray-700">contact@la-muse.org</p>
                    <p className="text-sm text-gray-500 mt-1">24時間受付</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">営業時間</h3>
                  <p className="text-gray-700">平日 10:00-20:00</p>
                  <p className="text-sm text-gray-500 mt-2">
                    土日祝日は定休日となっております<br />
                    緊急時は上記電話番号までご連絡ください
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">対応エリア</h3>
                  <p className="text-gray-700">全国対応</p>
                  <p className="text-sm text-gray-500 mt-2">
                    撮影・配送・オンラインサポートにより<br />
                    日本全国のお客様にサービスを提供
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="bg-white rounded-lg p-12 shadow-sm mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ミッション・ビジョン</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ミッション</h3>
                <p className="text-gray-700 leading-relaxed">
                  アパレルブランドが抱える課題を包括的に解決し、<br />
                  ブランドの成長と成功を全力でサポートする。<br />
                  お客様の夢と想いを形にするパートナーとして、<br />
                  最高品質のサービスを提供し続けます。
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ビジョン</h3>
                <p className="text-gray-700 leading-relaxed">
                  個人ブランドから大手企業まで、<br />
                  すべてのアパレルブランドにとって<br />
                  欠かせないパートナーになる。<br />
                  業界のスタンダードを創り上げる存在として。
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-lg p-12 shadow-sm mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">私たちの価値観</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">品質第一</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  妥協のない品質へのこだわりで、<br />
                  お客様のブランド価値を最大化します
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">顧客第一</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  お客様の成功が私たちの成功。<br />
                  真のパートナーシップを築きます
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">革新的思考</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  常に新しい解決策を模索し、<br />
                  業界の未来を切り開きます
                </p>
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">提供サービス</h2>
            <p className="text-lg text-gray-700 mb-8">
              撮影・EC構築・梱包資材・OEM製造まで<br />
              アパレルブランド運営に必要なすべてをワンストップで提供
            </p>
            <Link 
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              サービス詳細を見る
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};