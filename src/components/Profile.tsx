'use client';

import { useTheme } from 'next-themes';

export default function Profile() {
  const { theme } = useTheme();

  return (
    <section className="section-container" aria-labelledby="profile-title">
      <div className="mx-auto">
        <h2 id="profile-title" className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">自己紹介</h2>

        {/* Main Profile Card */}
        <div className="relative bg-white/70 dark:from-gray-800/95 dark:via-gray-900/95 dark:to-gray-800/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 mb-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-purple-100/20 dark:border-gray-700/50 overflow-hidden transition-all duration-700 hover:shadow-[0_20px_60px_rgb(139,92,246,0.3)] hover:scale-[1.02] hover:-translate-y-1">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none"></div>
          {/* Animated mesh gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="relative flex items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex-shrink-0">
              <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-6">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">クリスハヤト</h3>
              <p className="mt-1 font-medium" style={{ color: theme === 'dark' ? '#a78bfa' : '#6b7280' }}>1995年生まれ　30歳　埼玉県出身　神奈川県在住</p>
            </div>
          </div>

          <div className="relative space-y-4 leading-relaxed text-lg md:text-xl font-semibold">
            <p className={theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''} style={{ color: theme === 'dark' ? 'transparent' : '#1f2937' }}>小学校から中学校まで野球に打ち込み、高校からは陸上部でやり投げに専念。</p>
            <p className={theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''} style={{ color: theme === 'dark' ? 'transparent' : '#1f2937' }}>音楽やプログラミング、ゲームが趣味です！</p>
            <p className={theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''} style={{ color: theme === 'dark' ? 'transparent' : '#1f2937' }}>普通科高校を卒業し、ITエンジニアとして約3.6年従事。</p>
            <p className={theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''} style={{ color: theme === 'dark' ? 'transparent' : '#1f2937' }}>彼女との交際を機に自分の将来と向き合い、自分で稼ぐ力を身につけるため、動画編集を始めました。</p>
            <p className={theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''} style={{ color: theme === 'dark' ? 'transparent' : '#1f2937' }}>現在はビジネス系やエンタメ系、Vlog系の編集経験があります。</p>
            <p className={theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''} style={{ color: theme === 'dark' ? 'transparent' : '#1f2937' }}>ショート動画の制作を通して様々なジャンルの編集に携わっていきたいと考えています。</p>
            <p
              className={`font-extrabold text-xl mt-6 p-4 rounded-lg border-l-4 ${theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''}`}
              style={{
                color: theme === 'dark' ? 'transparent' : '#6b21a8',
                backgroundColor: theme === 'dark' ? 'rgba(139, 92, 246, 0.2)' : '#faf5ff',
                borderColor: theme === 'dark' ? '#a78bfa' : '#9333ea'
              }}
            >
              フリーランスとして成果を残すべく、精力的に活動中！
            </p>
          </div>
        </div>

        {/* Basic Info Card */}
        <div className="relative bg-white/70 dark:from-gray-800/95 dark:via-gray-900/95 dark:to-gray-800/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-purple-100/20 dark:border-gray-700/50 overflow-hidden transition-all duration-700 hover:shadow-[0_20px_60px_rgb(139,92,246,0.3)] hover:scale-[1.02] hover:-translate-y-1" role="region" aria-labelledby="basic-info-title">
          {/* Decorative background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

          <div className="relative flex items-center gap-3 mb-6">
            <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-12">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur-md opacity-50 animate-pulse"></div>
              <svg className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 id="basic-info-title" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">基本情報</h3>
          </div>
          <div className="space-y-6 font-semibold">
            <div>
              <h4 className={`font-extrabold text-2xl mb-2 ${theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''}`} style={{ color: theme === 'dark' ? 'transparent' : '#1f2937' }}>稼働日数：週4〜6日程度（週60時間以上）</h4>
            </div>
            <div>
              <h4 className={`font-extrabold text-2xl mb-2 ${theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''}`} style={{ color: theme === 'dark' ? 'transparent' : '#1f2937' }}>稼働時間：9:00〜21:00</h4>
            </div>
            <div>
              <h4 className={`font-extrabold text-2xl mb-2 ${theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''}`} style={{ color: theme === 'dark' ? 'transparent' : '#1f2937' }}>使用ソフト：Premiere Pro / Photoshop</h4>
            </div>
            <div>
              <h4 className={`font-extrabold text-2xl mb-2 ${theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''}`} style={{ color: theme === 'dark' ? 'transparent' : '#1f2937' }}>使用PC：</h4>
              <ul className="space-y-2 ml-4 text-xl">
                <li className="flex items-start gap-3">
                  <span className={`font-extrabold ${theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''}`} style={{ color: theme === 'dark' ? 'transparent' : '#9333ea' }}>•</span>
                  <span className={theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''} style={{ color: theme === 'dark' ? 'transparent' : '#1f2937' }}>AMD Ryzen 9 7950X3D（16コア）</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`font-extrabold ${theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''}`} style={{ color: theme === 'dark' ? 'transparent' : '#9333ea' }}>•</span>
                  <span className={theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''} style={{ color: theme === 'dark' ? 'transparent' : '#1f2937' }}>メモリ 64GB</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`font-extrabold ${theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''}`} style={{ color: theme === 'dark' ? 'transparent' : '#9333ea' }}>•</span>
                  <span className={theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''} style={{ color: theme === 'dark' ? 'transparent' : '#1f2937' }}>ストレージ 1.38TB</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
