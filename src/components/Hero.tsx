export default function Hero() {
  return (
    <section className="relative hero-gradient text-white py-16 md:py-24 overflow-hidden section-container" aria-labelledby="hero-title">
      {/* 背景アニメーション */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 id="hero-title" className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="block mb-2">ITエンジニア出身の</span>
          <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            動画編集者
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-lg lg:text-xl mb-12 text-gray-200 mx-auto font-light leading-relaxed">
          技術的信頼性と論理的思考力で、あなたのメッセージを最大化
        </p>

        {/* Statistics Grid - Notion Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mx-auto mb-12">
          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6 shadow-notion hover:shadow-notion-md transition-all duration-250 hover:-translate-y-0.5"
            role="region"
            aria-label="週間稼働時間の統計"
          >
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
              60<span className="text-3xl md:text-4xl">+</span>
            </div>
            <div className="text-sm md:text-base text-gray-200 font-medium">週間稼働時間</div>
          </div>

          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6 shadow-notion hover:shadow-notion-md transition-all duration-250 hover:-translate-y-0.5"
            role="region"
            aria-label="IT経験年数の統計"
          >
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              3.6<span className="text-3xl md:text-4xl">年</span>
            </div>
            <div className="text-sm md:text-base text-gray-200 font-medium">IT経験</div>
          </div>

          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6 shadow-notion hover:shadow-notion-md transition-all duration-250 hover:-translate-y-0.5"
            role="region"
            aria-label="実績動画数の統計"
          >
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">
              7<span className="text-3xl md:text-4xl">+</span>
            </div>
            <div className="text-sm md:text-base text-gray-200 font-medium">実績動画</div>
          </div>
        </div>

        {/* CTA Button - Notion Style */}
        <a
          href="#portfolio"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-notion-lg hover:shadow-notion-hover transition-all duration-250 hover:-translate-y-0.5 group"
          aria-label="ポートフォリオセクションへ移動"
        >
          <span>作品を見る</span>
          <svg
            className="w-5 h-5 transition-transform duration-250 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce" aria-hidden="true">
          <svg className="w-6 h-6 mx-auto text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
