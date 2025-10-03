# クリスハヤト | 動画編集者ポートフォリオ

**完全無料運用**のポートフォリオサイト（$0/年）

## 🎯 特徴

- ✅ **完全無料**: Cloudflare Pages無料プラン（$0/年）
- ✅ **高速配信**: グローバルCDN（300+エッジロケーション）
- ✅ **外部リンク形式**: 動画埋め込みなし、UTM自動付与
- ✅ **レスポンシブ**: モバイルファースト設計
- ✅ **セキュア**: セキュリティヘッダー完備

## 🚀 技術スタック

| 技術 | バージョン |
|-----|----------|
| Next.js | 14.x |
| React | 18.x |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| Cloudflare Pages | Free |

## 📦 セットアップ

### 1. 依存パッケージインストール

```bash
npm install
```

### 2. 開発サーバー起動

```bash
npm run dev
```

→ http://localhost:3000

### 3. 本番ビルド

```bash
npm run build
```

## 📁 プロジェクト構造

```
chris-hayato-portfolio/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/       # Reactコンポーネント
│   │   ├── Hero.tsx
│   │   ├── VideoGallery.tsx
│   │   ├── VideoCard.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── Profile.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── videos.ts     # 動画データ
│   ├── types/
│   │   └── video.ts      # 型定義
│   └── utils/            # ユーティリティ関数
│       ├── utm.ts
│       ├── analytics.ts
│       └── validateUrl.ts
├── public/
│   ├── _headers          # セキュリティヘッダー
│   └── images/
│       └── thumbnails/   # 動画サムネイル（要追加）
└── next.config.js        # Next.js設定
```

## 🎬 サムネイル画像の準備

### 自動ダウンロード（推奨）

TikTok OEmbed APIから自動的にサムネイル画像をダウンロード：

```bash
node scripts/download-thumbnails.js
```

このスクリプトは以下のファイルを `public/images/thumbnails/` に自動生成：

- `business-1.webp`
- `business-2.webp`
- `business-3.webp`
- `business-4.webp`
- `entertainment-1.webp`
- `entertainment-2.webp`
- `vlog-1.webp`

### 手動配置

手動で画像を配置する場合は、`public/images/thumbnails/` に上記ファイルを配置してください。

**推奨サイズ**: 720×1280px（9:16縦型）

## 🌐 デプロイ（Cloudflare Pages）

### 1. GitHubリポジトリ作成

```bash
git init
git add .
git commit -m "feat: 初期プロジェクト作成"
git remote add origin https://github.com/YOUR_USERNAME/chris-hayato-portfolio.git
git push -u origin main
```

### 2. Cloudflare Pagesデプロイ

1. https://dash.cloudflare.com にログイン
2. `Workers & Pages` → `Create application` → `Pages`
3. GitHubリポジトリ連携
4. ビルド設定:
   - **Framework**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output**: `.next`
5. 環境変数:
   - `NODE_VERSION` = `20`
   - `NEXT_PUBLIC_SITE_URL` = `https://chris-hayato-portfolio.pages.dev`
6. `Save and Deploy`

### 3. 完成URL

`https://chris-hayato-portfolio.pages.dev`

## 📊 パフォーマンス目標

| 指標 | 目標値 |
|-----|--------|
| **LCP** | ≤ 1.0秒 |
| **CLS** | ≤ 0.03 |
| **INP** | ≤ 100ms |
| **Lighthouse Performance** | ≥ 95点 |

## 📝 ライセンス

ISC

## 👤 作成者

クリスハヤト（ITエンジニア出身の動画編集者）
