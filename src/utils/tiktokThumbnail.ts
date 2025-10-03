/**
 * TikTok動画からサムネイル画像URLを取得
 */

/**
 * TikTok OEmbed APIレスポンス型
 */
interface TikTokOEmbedResponse {
  title: string;
  author_url: string;
  author_name: string;
  width: string;
  height: string;
  html: string;
  thumbnail_width: number;
  thumbnail_height: number;
  thumbnail_url: string;
  provider_url: string;
  provider_name: string;
  type: string;
  version: string;
}

/**
 * TikTok動画URLからサムネイルURLを取得
 *
 * @param videoUrl - TikTok動画のURL
 * @returns サムネイルURL（取得失敗時はnull）
 *
 * @example
 * const thumbnailUrl = await fetchTikTokThumbnail('https://www.tiktok.com/@username/video/1234567890');
 */
export async function fetchTikTokThumbnail(videoUrl: string): Promise<string | null> {
  try {
    // TikTok OEmbed APIエンドポイント
    const oembedUrl = `https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`;

    const response = await fetch(oembedUrl);

    if (!response.ok) {
      console.error(`Failed to fetch TikTok OEmbed: ${response.status}`);
      return null;
    }

    const data: TikTokOEmbedResponse = await response.json();

    return data.thumbnail_url || null;
  } catch (error) {
    console.error('Error fetching TikTok thumbnail:', error);
    return null;
  }
}

/**
 * 複数のTikTok動画URLからサムネイルURLを一括取得
 *
 * @param videoUrls - TikTok動画URLの配列
 * @returns サムネイルURLの配列（各URLに対応、取得失敗時はnull）
 */
export async function fetchMultipleTikTokThumbnails(
  videoUrls: string[]
): Promise<(string | null)[]> {
  const promises = videoUrls.map((url) => fetchTikTokThumbnail(url));
  return Promise.all(promises);
}

/**
 * サムネイル画像をダウンロードしてbase64エンコード
 * （オプション: ローカル保存したい場合）
 *
 * @param thumbnailUrl - サムネイル画像URL
 * @returns base64エンコードされた画像データ
 */
export async function downloadThumbnailAsBase64(thumbnailUrl: string): Promise<string | null> {
  try {
    const response = await fetch(thumbnailUrl);

    if (!response.ok) {
      console.error(`Failed to download thumbnail: ${response.status}`);
      return null;
    }

    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error downloading thumbnail:', error);
    return null;
  }
}
