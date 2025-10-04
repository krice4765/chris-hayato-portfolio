'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Video } from '@/types/video';
import { addUtmParameters } from '@/utils/utm';
import { trackVideoClick } from '@/utils/analytics';
import { isValidVideoUrl } from '@/utils/validateUrl';

interface VideoCardProps {
  video: Video;
}

function PlatformBadge({ platform }: { platform: Video['platform'] }) {
  const badges = {
    tiktok: { name: 'TikTok', bgColor: 'bg-black/90', textColor: 'text-white', shadow: 'shadow-notion-sm' },
    instagram: {
      name: 'Instagram',
      bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
      textColor: 'text-white',
      shadow: 'shadow-notion-sm',
    },
    youtube: { name: 'YouTube', bgColor: 'bg-red-600/90', textColor: 'text-white', shadow: 'shadow-notion-sm' },
  };

  const badge = badges[platform];

  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium ${badge.bgColor} ${badge.textColor} ${badge.shadow} backdrop-blur-sm`}
    >
      {badge.name}
    </span>
  );
}

export default function VideoCard({ video }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { theme } = useTheme();

  const videoUrl = addUtmParameters(video.url, video.category);

  if (!isValidVideoUrl(video.url)) {
    console.error(`Invalid video URL: ${video.url}`);
    return null;
  }

  const handleClick = () => {
    trackVideoClick(video.id, video.category, video.platform);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className="notion-card transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-3 relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="listitem"
      style={{
        boxShadow: isHovered
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(168, 85, 247, 0.3)'
          : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }}
    >
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="block"
        aria-label={`${video.title}を見る`}
      >
        <div className="relative aspect-[9/16] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden rounded-t-xl">
          {!imageError ? (
            <>
              <Image
                src={video.thumbnailUrl}
                alt={video.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                className="object-cover transition-all duration-500 ease-out"
                style={{
                  transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                  filter: isHovered ? 'brightness(0.95)' : 'brightness(1)'
                }}
                onError={handleImageError}
                loading="lazy"
              />
              {/* Gradient Overlay on hover */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300"
                style={{ opacity: isHovered ? 1 : 0 }}
              />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
              <div className="text-center p-6">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-purple-400 dark:text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">動画サムネイル</p>
              </div>
            </div>
          )}

          {/* Platform Badge with improved design */}
          <div className="absolute bottom-3 left-3 z-10 transition-transform duration-300" style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}>
            <PlatformBadge platform={video.platform} />
          </div>

          {/* Play Icon Overlay with enhanced animation */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-all duration-300 z-10"
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            <div
              className="w-16 h-16 bg-white/95 dark:bg-gray-800/95 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm transition-all duration-300 border-2 border-purple-400/30"
              style={{
                transform: isHovered ? 'scale(1)' : 'scale(0.8)',
              }}
            >
              <svg className="w-7 h-7 text-purple-600 dark:text-purple-400 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3
            className="text-base leading-snug font-extrabold line-clamp-2 transition-all duration-300 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent"
            style={{
              transform: isHovered ? 'translateX(2px)' : 'translateX(0)'
            }}
          >
            {video.title}
          </h3>
        </div>
      </a>
    </div>
  );
}
