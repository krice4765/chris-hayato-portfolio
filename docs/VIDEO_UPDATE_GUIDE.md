# 動画追加・更新ガイド

このドキュメントでは、ポートフォリオサイトに新しい動画を追加する手順を説明します。

## 📝 追加手順

### 1. サムネイル画像の準備

動画のサムネイル画像を準備します（推奨サイズ: 720x1280px、形式: WebP）

```bash
# サムネイル画像を配置
cp your-thumbnail.webp public/images/thumbnails/
```

**命名規則**: `{category}-{number}.webp`
- ビジネス系: `business-5.webp`, `business-6.webp`...
- エンタメ系: `entertainment-3.webp`, `entertainment-4.webp`...
- Vlog系: `vlog-2.webp`, `vlog-3.webp`...

### 2. 動画データの追加

`src/data/videos.ts` ファイルを編集して新しい動画情報を追加します。

```typescript
// 例: ビジネス系動画を追加
{
  id: 'business-5',
  title: '新しい動画のタイトル',
  url: 'https://www.tiktok.com/@username/video/1234567890',
  category: 'business',
  platform: 'tiktok',
  tags: ['タグ1', 'タグ2', 'タグ3'],
  description: '動画の説明文',
  thumbnailUrl: '/images/thumbnails/business-5.webp',
}
```

#### 必須フィールド

- **id**: 一意の識別子（`category-number`形式）
- **title**: 動画のタイトル（50文字以内推奨）
- **url**: 動画のURL（TikTok、Instagram、YouTube対応）
- **category**: カテゴリ（`business` | `entertainment` | `vlog`）
- **platform**: プラットフォーム（`tiktok` | `instagram` | `youtube`）
- **tags**: タグの配列（3-5個推奨）
- **description**: 動画の説明（100文字以内推奨）
- **thumbnailUrl**: サムネイル画像のパス

### 3. ローカル確認

```bash
npm run dev
```

http://localhost:3000 で動作確認

### 4. デプロイ

```bash
# 変更をコミット
git add .
git commit -m "feat: add new video - {動画タイトル}"
git push origin main
```

GitHubにプッシュすると、Cloudflare Pagesが自動的にデプロイします（1-2分）。

## 🎨 カテゴリ別の追加例

### ビジネス系動画

```typescript
{
  id: 'business-5',
  title: '新規事業戦略の成功法則',
  url: 'https://www.tiktok.com/@company/video/xxx',
  category: 'business',
  platform: 'tiktok',
  tags: ['ビジネス戦略', '新規事業', '経営'],
  description: '成功する新規事業の立ち上げ方を解説',
  thumbnailUrl: '/images/thumbnails/business-5.webp',
}
```

### エンタメ系動画

```typescript
{
  id: 'entertainment-3',
  title: 'バズった企画の裏側',
  url: 'https://www.tiktok.com/@creator/video/xxx',
  category: 'entertainment',
  platform: 'tiktok',
  tags: ['エンタメ', 'バズり', '企画'],
  description: '100万再生突破した企画の制作秘話',
  thumbnailUrl: '/images/thumbnails/entertainment-3.webp',
}
```

### Vlog系動画

```typescript
{
  id: 'vlog-2',
  title: '京都の伝統工芸を訪ねて',
  url: 'https://www.youtube.com/watch?v=xxx',
  category: 'vlog',
  platform: 'youtube',
  tags: ['Vlog', '京都', '伝統工芸', '文化'],
  description: '京都の職人技を記録したドキュメンタリー',
  thumbnailUrl: '/images/thumbnails/vlog-2.webp',
}
```

## 🚀 ベストプラクティス

### サムネイル画像

- **形式**: WebP（軽量・高品質）
- **サイズ**: 720x1280px（9:16比率）
- **容量**: 200KB以下推奨（パフォーマンス維持）
- **品質**: 鮮明で見やすいデザイン

### 動画の順序

動画は `src/data/videos.ts` 内での記述順に表示されます。
- 最新の動画を**配列の先頭**に追加すると、一番最初に表示されます
- カテゴリごとにまとめて記述することを推奨

### タイトル・説明文

- **タイトル**: 簡潔で魅力的（30-40文字）
- **説明**: 動画の価値を明確に（80-100文字）
- **タグ**: 検索性を考慮した適切なキーワード

## 🔧 トラブルシューティング

### 画像が表示されない

1. ファイルパスを確認：`/images/thumbnails/xxx.webp`
2. ファイル名が正しいか確認
3. ブラウザのキャッシュをクリア

### デプロイが失敗する

1. ビルドエラーを確認：`npm run build`
2. TypeScript型エラーをチェック
3. Cloudflare Pagesのログを確認

### カテゴリフィルターが動作しない

1. `category` フィールドが正しいか確認（`business` | `entertainment` | `vlog`）
2. `getVideoCounts()` が自動計算するため、追加設定不要

## 📊 現在の動画数

- ビジネス系: 4本
- エンタメ系: 2本
- Vlog系: 1本
- **合計**: 7本

## 🎯 推奨運用

### 定期更新

- **週1-2本**: 継続的な更新でSEO効果向上
- **月5-8本**: ポートフォリオの充実化

### バランス

カテゴリバランスを保つと、幅広いスキルをアピールできます：
- ビジネス: 40-50%
- エンタメ: 30-40%
- Vlog: 20-30%

---

質問や不明点があれば、このガイドを参照してください。
