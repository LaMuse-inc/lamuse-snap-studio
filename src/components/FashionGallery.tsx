import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ZoomIn } from "lucide-react";

export const FashionGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "モノトーンポートレート",
      category: "Portrait",
      size: "large"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "ストリートファッション",
      category: "Street",
      size: "large"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "カジュアルスタイル",
      category: "Casual",
      size: "medium"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "ナチュラルポートレート",
      category: "Natural",
      size: "small"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "アウトドアスタイル",
      category: "Outdoor",
      size: "medium"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1506629905847-f019dd913ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "都市的な撮影",
      category: "Urban",
      size: "large"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "スタジオ撮影",
      category: "Studio",
      size: "medium"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "ライフスタイル撮影",
      category: "Lifestyle",
      size: "small"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1611403119860-57c4937ef987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "フォーマルスタイル",
      category: "Formal",
      size: "large"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "セルフポートレート",
      category: "Self",
      size: "medium"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "ファミリーポートレート",
      category: "Family",
      size: "large"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "ワーク撮影",
      category: "Work",
      size: "small"
    }
  ];

  const getGridClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-2 md:row-span-1';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  const getHeightClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'h-96 md:h-[600px]';
      case 'medium':
        return 'h-64 md:h-72';
      case 'small':
        return 'h-48 md:h-64';
      default:
        return 'h-64';
    }
  };

  return (
    <section className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-6 py-2 text-sm font-semibold">
            01. アパレル・ファッション撮影
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-foreground tracking-tight">
            クリエイティブな
            <span className="block text-studio-accent">ファッションポートレート</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            モデルの魅力とブランドの世界観を融合させた、
            印象に残るファッション撮影を提供します。
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 auto-rows-max mb-12">
          {galleryItems.map((item, index) => (
            <Card
              key={item.id}
              className={`group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-white ${getGridClasses(item.size)}`}
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${getHeightClasses(item.size)}`}
                  loading="lazy" decoding="async"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <Badge 
                  variant="secondary" 
                  className="absolute top-3 left-3 bg-white/90 text-studio-charcoal backdrop-blur-sm"
                >
                  {item.category}
                </Badge>

                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ZoomIn className="w-4 h-4 text-studio-charcoal" />
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                  <p className="text-xs text-white/80">クリック拡大</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-3 bg-studio-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-studio-accent/90 transition-all duration-300 hover:gap-4">
            <Search className="w-5 h-5" />
            全ポートフォリオを見る
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="拡大表示"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};