'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl border-b border-purple-100/20 dark:border-purple-500/20'
          : ''
      }`}
      style={!scrolled ? {
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 50%, transparent 100%)',
        backdropFilter: 'blur(8px)'
      } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="relative text-2xl font-bold bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 cursor-pointer">
            <span className="relative z-10">Chris Hayato</span>
            {/* Animated underline */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </h1>

          <nav className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="relative font-extrabold text-lg transition-all duration-300 hover:scale-110 group px-3 py-2 rounded-lg"
              style={{
                color: theme === 'dark' ? '#22d3ee' : '#d946ef',
                textShadow: theme === 'dark'
                  ? '0 0 10px rgba(34, 211, 238, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)'
                  : '0 0 10px rgba(217, 70, 239, 0.4), 0 2px 4px rgba(217, 70, 239, 0.2)'
              }}
            >
              <span className="relative z-10">ポートフォリオ</span>
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-fuchsia-500/10 dark:bg-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Bottom border animation */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-fuchsia-600 to-pink-600 dark:bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('profile-title')}
              className="relative font-extrabold text-lg transition-all duration-300 hover:scale-110 group px-3 py-2 rounded-lg"
              style={{
                color: theme === 'dark' ? '#22d3ee' : '#d946ef',
                textShadow: theme === 'dark'
                  ? '0 0 10px rgba(34, 211, 238, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)'
                  : '0 0 10px rgba(217, 70, 239, 0.4), 0 2px 4px rgba(217, 70, 239, 0.2)'
              }}
            >
              <span className="relative z-10">自己紹介</span>
              <div className="absolute inset-0 bg-fuchsia-500/10 dark:bg-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-fuchsia-600 to-pink-600 dark:bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact-title')}
              className="relative font-extrabold text-lg transition-all duration-300 hover:scale-110 group px-3 py-2 rounded-lg"
              style={{
                color: theme === 'dark' ? '#22d3ee' : '#d946ef',
                textShadow: theme === 'dark'
                  ? '0 0 10px rgba(34, 211, 238, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)'
                  : '0 0 10px rgba(217, 70, 239, 0.4), 0 2px 4px rgba(217, 70, 239, 0.2)'
              }}
            >
              <span className="relative z-10">お問い合わせ</span>
              <div className="absolute inset-0 bg-fuchsia-500/10 dark:bg-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-fuchsia-600 to-pink-600 dark:bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </button>
          </nav>

          {/* Theme Toggle Button with enhanced design */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative p-3 rounded-xl hover:bg-white/20 dark:hover:bg-purple-500/20 transition-all duration-300 text-white dark:text-cyan-400 group hover:scale-110 hover:rotate-12"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
              aria-label="テーマ切り替え"
            >
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {theme === 'dark' ? (
                <svg className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
