/**
 * 許可された動画プラットフォームドメイン
 */
const ALLOWED_DOMAINS = [
  'tiktok.com',
  'www.tiktok.com',
  'instagram.com',
  'www.instagram.com',
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
];

/**
 * 動画URLが許可されたドメインか検証
 *
 * @param url - 検証対象URL
 * @returns 検証結果
 */
export function isValidVideoUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return ALLOWED_DOMAINS.some(
      (domain) => urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}
