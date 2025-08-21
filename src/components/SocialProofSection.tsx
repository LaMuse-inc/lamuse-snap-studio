import { useState, useEffect, useRef } from "react";
import { Star, TrendingUp, Users } from "lucide-react";

const stats = [];

const testimonials = [
  {
    brand: "アパレルブランドA",
    role: "代表取締役",
    rating: 5,
    comment: "撮影からEC構築まで一括でお任せできるので、ブランド運営に集中できます。コストも大幅に削減でき、売上も向上しました。",
    highlight: "売上150%向上"
  },
  {
    brand: "セレクトショップB", 
    role: "EC事業部長",
    rating: 5,
    comment: "複数サービスを利用していますが、窓口が一つなので連携がスムーズ。品質も高く、スピーディーな対応に満足しています。",
    highlight: "業務効率80%改善"
  },
  {
    brand: "D2CブランドC",
    role: "マーケティング担当",
    rating: 5,
    comment: "小ロットOEMから撮影、EC構築まで全てサポートしていただき、ブランド立ち上げがスムーズに進みました。",
    highlight: "初月売上500万円達成"
  }
];

const CounterAnimation = ({ stat }: { stat: any }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 1200;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, stat.value]);

  const Icon = stat.icon;

  return (
    <div ref={elementRef} className="text-center bg-white rounded-lg p-12 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded flex items-center justify-center mx-auto mb-6">
        <Icon className="w-10 h-10 text-blue-600" />
      </div>
      <div className="text-5xl lg:text-6xl font-black text-gray-900 mb-4">
        {count}{stat.suffix}
      </div>
      <div className="text-xl text-gray-600 font-medium">{stat.label}</div>
    </div>
  );
};

export const SocialProofSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-gray-50 relative overflow-hidden">

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Stats Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded text-sm font-medium text-gray-600 mb-6">
            ACHIEVEMENTS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-16">
            確かな実績と<span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">信頼</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <CounterAnimation key={index} stat={stat} />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            お客様の声
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-all duration-300">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-bold mb-4">
                  {testimonial.highlight}
                </div>
                
                {/* Comment */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                {/* Author */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-medium text-gray-900">{testimonial.brand}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}

      </div>
    </section>
  );
};