import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Mail, Building2, Calendar, Users, Target } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">LaMuse</h1>
            </div>
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
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              会社概要
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              アパレルブランドの成長をトータルでサポートする
              <br />
              ワンストップソリューションカンパニー
            </p>
          </div>

          {/* Company Info */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">基本情報</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">会社名</h3>
                    <p className="text-gray-700">株式会社LaMuse（ラミューズ）</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">設立</h3>
                    <p className="text-gray-700">2025年1月</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">代表取締役</h3>
                    <p className="text-gray-700">鶴 健一郎</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">資本金</h3>
                    <p className="text-gray-700">500万円</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">本社所在地</h3>
                    <p className="text-gray-700">
                      〒150-0002<br />
                      東京都渋谷区渋谷3-27-1<br />
                      100BANCH 2F
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded flex items-center justify-center">
                    <Phone className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">電話番号</h3>
                    <p className="text-gray-700">080-2165-1838</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">メールアドレス</h3>
                    <p className="text-gray-700">contact@la-muse.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">私たちについて</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                株式会社LaMuse（ラミューズ）は、アパレルブランドが直面する様々な課題を解決するために設立されました。
                個人のブランドから大手企業まで、すべてのアパレル事業者が持つ「想いを形にしたい」という思いを、
                包括的なソリューションでサポートしています。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                私たちは、商品撮影からEC構築、梱包資材の手配、OEM製造まで、
                アパレルブランド運営に必要なすべてのプロセスをワンストップで提供することで、
                お客様のビジネス成長を加速させることを使命としています。
              </p>
              <p className="text-gray-700 leading-relaxed">
                品質へのこだわりと迅速なサービス提供により、
                お客様の大切なブランドの価値を最大化することを目指しています。
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">提供サービス</h2>
            <p className="text-gray-700 mb-6">
              撮影・EC構築・梱包資材・OEM製造まで<br />
              アパレルブランド運営に必要なすべてをワンストップで提供
            </p>
            <Link 
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded font-semibold transition-all duration-300"
            >
              サービス詳細を見る
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;