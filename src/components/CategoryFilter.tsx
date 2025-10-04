'use client';

import { VideoCategory } from '@/types/video';

interface CategoryFilterProps {
  selectedCategory: VideoCategory | 'all';
  onCategoryChange: (category: VideoCategory | 'all') => void;
  counts: {
    all: number;
    business: number;
    entertainment: number;
    vlog: number;
  };
}

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
  counts,
}: CategoryFilterProps) {
  const categories = [
    { value: 'all' as const, label: 'すべて', count: counts.all },
    { value: 'business' as const, label: 'ビジネス', count: counts.business },
    { value: 'entertainment' as const, label: 'エンタメ', count: counts.entertainment },
    { value: 'vlog' as const, label: 'Vlog', count: counts.vlog },
  ];

  return (
    <div
      className="flex flex-wrap gap-3 justify-center mb-12"
      role="group"
      aria-label="動画カテゴリフィルター"
    >
      {categories.map((category) => {
        const isActive = selectedCategory === category.value;

        return (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onCategoryChange(category.value);
              }
            }}
            className={`
              px-4 py-3 rounded-lg font-medium text-sm min-h-[44px]
              transition-all duration-250
              ${
                isActive
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-notion-md hover:shadow-notion-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-notion-sm hover:shadow-notion hover:border-purple-300 dark:hover:border-purple-600'
              }
            `}
            aria-label={`${category.label}カテゴリを表示`}
            aria-pressed={isActive}
          >
            <span className="flex items-center gap-2">
              {category.label}
              <span className={`
                inline-flex items-center justify-center
                min-w-[24px] h-5 px-2
                text-xs font-semibold rounded-md
                ${
                  isActive
                    ? 'bg-white/25 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }
              `}>
                {category.count}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
