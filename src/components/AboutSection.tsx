export const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24 bg-gray-50 scroll-mt-24">
      {/* Giant background text */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="text-gray-200/40 text-[14vw] md:text-[12vw] lg:text-[10vw] leading-none font-black tracking-tight text-center">
          <div>FASHION</div>
          <div>PARTNERS</div>
        </div>
      </div>



      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
            Fashion Partnersとは？
          </h2>

          {/* Key message with highlights */}
          <p className="text-2xl lg:text-3xl font-semibold leading-relaxed text-gray-900">
            アパレルの
            <span className="align-middle mx-2 px-3 py-1 rounded bg-blue-600 text-white">撮影・EC・梱包資材・OEM</span>
            を
            <span className="align-middle mx-2 px-3 py-1 rounded bg-gray-900 text-white">一社で完結</span>
            できます。
          </p>

          <p className="mt-6 text-lg lg:text-xl text-gray-600 leading-relaxed">
            企画から制作・運用までワンストップ。最短スピードで、ブランドの世界観を保ったまま成果に直結させます。
          </p>
        </div>
      </div>
    </section>
  );
};


