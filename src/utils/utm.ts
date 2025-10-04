import { VideoCategory } from '@/types/video';

/**
 * UTMパラメータを付与したURLを生成
 *
 * @param originalUrl - 元のURL
 * @param category - 動画カテゴリ
 * @returns UTMパラメータ付きURL
 */
export function addUtmParameters(originalUrl: string, category: VideoCategory): string {
  try {
    const url = new URL(originalUrl);

    // UTMパラメータ追加
    url.searchParams.set('utm_source', 'portfolio');
    url.searchParams.set('utm_medium', 'website');
    url.searchParams.set('utm_campaign', category);

    return url.toString();
  } catch (error) {
    console.error('Invalid URL:', originalUrl);
    return originalUrl; // エラー時は元のURLを返す
  }
}
