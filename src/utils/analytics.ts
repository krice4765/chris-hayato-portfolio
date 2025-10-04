import { VideoCategory, VideoPlatform } from '@/types/video';

/**
 * 動画クリックイベントを計測
 *
 * @param videoId - 動画ID
 * @param category - カテゴリ
 * @param platform - プラットフォーム
 */
export function trackVideoClick(
  videoId: string,
  category: VideoCategory,
  platform: VideoPlatform
): void {
  // Cloudflare Web Analyticsカスタムイベント
  if (typeof window !== 'undefined' && (window as any).cf) {
    (window as any).cf.push([
      'trackEvent',
      'video_click',
      {
        video_id: videoId,
        category: category,
        platform: platform,
        timestamp: new Date().toISOString(),
      },
    ]);
  }

  // Console出力（開発環境）
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Video Click:', { videoId, category, platform });
  }
}
