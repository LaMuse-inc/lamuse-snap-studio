import { ArrowLeft, MapPin, Phone, Mail, Users, Calendar, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

export const About = () => {
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

          {/* Company Info Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Company Details */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">基本情報</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">会社名</h3>
                    <p className="text-gray-700">株式会社LaMuse（ラミューズ）</p>
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
                    <p className="text-gray-700">鶴健一郎</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">所在地</h3>
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
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">資本金</h3>
                    <p className="text-gray-700">500万円</p>
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
                    <p className="text-gray-700">080-1497-6650</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">メールアドレス</h3>
                    <p className="text-gray-700">contact@la-muse.org</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">営業時間</h3>
                  <p className="text-gray-700">平日 10:00-20:00</p>
                  <p className="text-sm text-gray-500 mt-2">
                    土日祝日は定休日となっております
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
                  ブランドの成長と成功を全力でサポートする
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
                  欠かせないパートナーになる
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