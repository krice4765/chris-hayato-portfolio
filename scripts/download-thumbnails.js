/**
 * TikTok動画のサムネイル画像をダウンロードするスクリプト
 *
 * 使い方:
 * node scripts/download-thumbnails.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// 動画データをインポート（videos.tsから手動でコピー）
const videos = [
  {
    id: 'business-1',
    url: 'https://www.tiktok.com/@ys_clinic/video/7410730470511578386',
  },
  {
    id: 'business-2',
    url: 'https://www.tiktok.com/@neuronjapan/video/7488668700493565239',
  },
  {
    id: 'business-3',
    url: 'https://www.tiktok.com/@tenshoku.non/video/7491251322671369479',
  },
  {
    id: 'business-4',
    url: 'https://www.tiktok.com/@papamamacars/video/7498194978938686727',
  },
  {
    id: 'entertainment-1',
    url: 'https://www.tiktok.com/@zakkyyutty/video/7484934220880596231',
  },
  {
    id: 'entertainment-2',
    url: 'https://www.tiktok.com/@ryouto0317/video/7485314532571761928',
  },
  {
    id: 'vlog-1',
    url: 'https://www.tiktok.com/@soukimono/video/7451902221119180050',
  },
];

/**
 * TikTok OEmbed APIからサムネイルURLを取得
 */
async function fetchTikTokThumbnail(videoUrl) {
  try {
    const oembedUrl = `https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`;

    const response = await fetch(oembedUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.thumbnail_url;
  } catch (error) {
    console.error(`❌ Failed to fetch thumbnail for ${videoUrl}:`, error.message);
    return null;
  }
}

/**
 * 画像をダウンロードして保存
 */
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    https
      .get(url, (response) => {
        response.pipe(file);

        file.on('finish', () => {
          file.close();
          resolve();
        });
      })
      .on('error', (err) => {
        fs.unlink(filepath, () => {}); // エラー時にファイル削除
        reject(err);
      });
  });
}

/**
 * メイン処理
 */
async function main() {
  console.log('🚀 Starting TikTok thumbnail download...\n');

  // 保存先ディレクトリ
  const outputDir = path.join(__dirname, '..', 'public', 'images', 'thumbnails');

  // ディレクトリが存在しない場合は作成
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`📁 Created directory: ${outputDir}\n`);
  }

  let successCount = 0;
  let failCount = 0;

  for (const video of videos) {
    console.log(`📥 Processing: ${video.id}`);

    try {
      // サムネイルURL取得
      const thumbnailUrl = await fetchTikTokThumbnail(video.url);

      if (!thumbnailUrl) {
        console.log(`⚠️  No thumbnail URL found for ${video.id}\n`);
        failCount++;
        continue;
      }

      // ファイルパス
      const filename = `${video.id}.webp`;
      const filepath = path.join(outputDir, filename);

      // ダウンロード
      await downloadImage(thumbnailUrl, filepath);

      console.log(`✅ Downloaded: ${filename}`);
      console.log(`   URL: ${thumbnailUrl}\n`);

      successCount++;

      // レート制限対策（1秒待機）
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`❌ Error processing ${video.id}:`, error.message, '\n');
      failCount++;
    }
  }

  console.log('\n📊 Summary:');
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Failed: ${failCount}`);
  console.log(`   📁 Output: ${outputDir}`);
}

// スクリプト実行
main().catch((error) => {
  console.error('💥 Fatal error:', error);
  process.exit(1);
});
