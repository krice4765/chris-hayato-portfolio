/**
 * 動画カテゴリ
 */
export type VideoCategory = 'business' | 'entertainment' | 'vlog';

/**
 * 動画プラットフォーム
 */
export type VideoPlatform = 'tiktok' | 'instagram' | 'youtube';

/**
 * 動画データ
 */
export interface Video {
  /** 一意識別子 */
  id: string;
  /** 動画タイトル */
  title: string;
  /** 外部動画URL */
  url: string;
  /** カテゴリ */
  category: VideoCategory;
  /** プラットフォーム */
  platform: VideoPlatform;
  /** タグ（検索用） */
  tags: string[];
  /** 説明文 */
  description: string;
  /** サムネイル画像パス */
  thumbnailUrl: string;
  /** 公開日（任意） */
  publishedAt?: string;
}

/**
 * カテゴリ表示用メタデータ
 */
export interface CategoryMeta {
  value: VideoCategory | 'all';
  label: string;
  count: number;
}
