const steps = [];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50"></div>
      

      <div className="absolute top-20 right-16 w-80 h-80 bg-gradient-to-r from-gray-100/20 to-gray-200/20 rounded blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-gray-900">
            簡単3ステップで撮影完了
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            お問い合わせから納品まで、シンプルで分かりやすいプロセス
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-32 -right-4 w-8 h-0.5 bg-gray-300 z-0" />
              )}
              
              <div className="glass-card rounded-lg relative hover:scale-105 transition-all duration-300 z-10 overflow-hidden">
                {/* Image */}
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
                
                {/* Content */}
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-900 rounded flex-shrink-0 mt-2" />
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
  );
};