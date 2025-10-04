'use client';

import { useTheme } from 'next-themes';

export default function Contact() {
  const { theme } = useTheme();

  return (
    <section className="section-container" aria-labelledby="contact-title">
      <div className="mx-auto text-center">
        <h2 id="contact-title" className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">お問い合わせ</h2>

        <div className="relative">
          {/* Email Section */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-6">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur-lg opacity-50 animate-pulse"></div>
              <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">メールアドレス</h3>
          </div>
          <a
            href="mailto:Krice4765104@gmail.com"
            className="relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:via-fuchsia-500 hover:to-pink-500 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 group overflow-hidden"
            aria-label="メールでお問い合わせ"
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

            <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="relative z-10">Krice4765104@gmail.com</span>
          </a>
        </div>

        {/* Response Time Notice */}
        <p className={`mt-8 text-lg font-bold ${theme === 'dark' ? 'bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : ''}`} style={{ color: theme === 'dark' ? 'transparent' : '#1f2937' }}>
          通常1-2営業日以内にご返信させていただきます
        </p>
      </div>
    </section>
  );
}
