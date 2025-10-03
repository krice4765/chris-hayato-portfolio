'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 bg-white dark:bg-gray-800 backdrop-blur-md rounded-lg shadow-notion hover:shadow-notion-hover transition-all duration-250 border border-gray-200 dark:border-gray-700 hover:-translate-y-0.5 group"
      aria-label={`${theme === 'light' ? 'ダークモード' : 'ライトモード'}に切り替え`}
      title={`${theme === 'light' ? 'ダークモード' : 'ライトモード'}に切り替え`}
    >
      {theme === 'light' ? (
        // 月アイコン（ダークモードへ）
        <svg
          className="w-6 h-6 text-gray-700 group-hover:text-purple-600 transition-colors duration-250"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        // 太陽アイコン（ライトモードへ）
        <svg
          className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-250"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  );
}
