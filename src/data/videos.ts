import { Video } from '@/types/video';

/**
 * 動画ポートフォリオデータ
 *
 * 外部リンク形式で表示するため、埋め込みコード不要
 */
export const videos: Video[] = [
  // ========================================
  // ビジネス系動画（4本）
  // ========================================
  {
    id: 'business-1',
    title: 'コードブルーを徹底解説！',
    url: 'https://www.tiktok.com/@ys_clinic/video/7410730470511578386',
    category: 'business',
    platform: 'tiktok',
    tags: ['クリニック', '豆知識', '医者', '看護師'],
    description: '医療現場の緊急事態を分かりやすく解説',
    thumbnailUrl: '/images/thumbnails/business-1.webp',
  },
  {
    id: 'business-2',
    title: '日本ニューロン株式会社を紹介します‼️',
    url: 'https://www.tiktok.com/@neuronjapan/video/7488668700493565239',
    category: 'business',
    platform: 'tiktok',
    tags: ['会社紹介', '採用', 'ブランディング'],
    description: '企業の魅力を効果的に伝える採用PR動画',
    thumbnailUrl: '/images/thumbnails/business-2.webp',
  },
  {
    id: 'business-3',
    title: 'それでも私たちは、あなたのキャリアを応援します。',
    url: 'https://www.tiktok.com/@tenshoku.non/video/7491251322671369479',
    category: 'business',
    platform: 'tiktok',
    tags: ['転職活動', '面接対策', 'キャリア支援'],
    description: '転職活動者に寄り添う共感型メッセージ',
    thumbnailUrl: '/images/thumbnails/business-3.webp',
  },
  {
    id: 'business-4',
    title: 'トヨタ ハイラックス vs 三菱 トライトン',
    url: 'https://www.tiktok.com/@papamamacars/video/7498194978938686727',
    category: 'business',
    platform: 'tiktok',
    tags: ['車', '比較', 'データ分析'],
    description: 'データに基づいた商品比較コンテンツ',
    thumbnailUrl: '/images/thumbnails/business-4.webp',
  },

  // ========================================
  // エンタメ系動画（2本）
  // ========================================
  {
    id: 'entertainment-1',
    title: '衝撃やったわ、、笑',
    url: 'https://www.tiktok.com/@zakkyyutty/video/7484934220880596231',
    category: 'entertainment',
    platform: 'tiktok',
    tags: ['出勤シリーズ', 'コメディ', 'バズりたい会社'],
    description: '職場を舞台にしたエンターテイメント動画',
    thumbnailUrl: '/images/thumbnails/entertainment-1.webp',
  },
  {
    id: 'entertainment-2',
    title: '好きな唇は何番目？',
    url: 'https://www.tiktok.com/@ryouto0317/video/7485314532571761928',
    category: 'entertainment',
    platform: 'tiktok',
    tags: ['ホスト', 'インタラクティブ', 'エンタメ'],
    description: '視聴者参加型インタラクティブコンテンツ',
    thumbnailUrl: '/images/thumbnails/entertainment-2.webp',
  },

  // ========================================
  // Vlog系動画（1本）
  // ========================================
  {
    id: 'vlog-1',
    title: 'Our Concept',
    url: 'https://www.tiktok.com/@soukimono/video/7451902221119180050',
    category: 'vlog',
    platform: 'tiktok',
    tags: ['着物', 'kimono', 'japan', '文化'],
    description: '日本文化の美しさを表現したブランドコンセプト',
    thumbnailUrl: '/images/thumbnails/vlog-1.webp',
  },
];

/**
 * カテゴリ別動画数を取得
 */
export function getVideoCounts() {
  return {
    all: videos.length,
    business: videos.filter((v) => v.category === 'business').length,
    entertainment: videos.filter((v) => v.category === 'entertainment').length,
    vlog: videos.filter((v) => v.category === 'vlog').length,
  };
}
