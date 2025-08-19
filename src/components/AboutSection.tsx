export const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-gray-50 scroll-mt-24">
      {/* Giant background text */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="text-gray-200/40 text-[18vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] leading-none font-black tracking-tight text-center">
          <div>FASHION</div>
          <div>PARTNERS</div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10 leading-tight">
            Fashion Partnersとは？
          </h2>

          {/* Key message with highlights */}
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed text-gray-900 space-y-2 sm:space-y-0">
            <div className="block sm:inline">アパレルの</div>
            <span className="inline-block align-middle mx-1 sm:mx-2 px-2 sm:px-3 py-1 rounded bg-blue-600 text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium">
              撮影・EC・梱包資材・OEM
            </span>
            <div className="block sm:inline">を</div>
            <span className="inline-block align-middle mx-1 sm:mx-2 px-2 sm:px-3 py-1 rounded bg-gray-900 text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium">
              一社で完結
            </span>
            <div className="block sm:inline">できます。</div>
          </div>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed px-2 sm:px-0">
            企画から制作・運用までワンストップ。最短スピードで、ブランドの世界観を保ったまま成果に直結させます。
          </p>
        </div>
      </div>
    </section>
  );
};


