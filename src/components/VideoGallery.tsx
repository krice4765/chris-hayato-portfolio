'use client';

import { useState, useMemo } from 'react';
import { Video, VideoCategory } from '@/types/video';
import VideoCard from './VideoCard';
import VideoSkeleton from './VideoSkeleton';
import CategoryFilter from './CategoryFilter';
import { getVideoCounts } from '@/data/videos';

interface VideoGalleryProps {
  videos: Video[];
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory | 'all'>('all');

  const counts = useMemo(() => getVideoCounts(), []);

  const filteredVideos = useMemo(() => {
    if (selectedCategory === 'all') {
      return videos;
    }
    return videos.filter((video) => video.category === selectedCategory);
  }, [videos, selectedCategory]);

  return (
    <section className="section-container" id="portfolio" aria-labelledby="portfolio-title">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <h2 id="portfolio-title" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ポートフォリオ
          </h2>
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          counts={counts}
        />

        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}
          role="list"
          aria-label="動画ポートフォリオ一覧"
        >
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-20 px-6" role="status">
            <div className="notion-card max-w-md mx-auto p-8">
              <svg
                className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <p className="text-gray-700 dark:text-gray-200 text-base font-medium mb-1">
                該当する動画がありません
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                別のカテゴリを選択してください
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
