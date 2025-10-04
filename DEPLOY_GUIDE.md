# 🚀 デプロイガイド（完全無料版）

このガイドに従って、**完全無料（$0/年）**でポートフォリオサイトをデプロイします。

---

## ⚠️ デプロイ前の準備

### 1. サムネイル画像を配置

`public/images/thumbnails/` に7枚の画像ファイルを配置してください：

```
public/images/thumbnails/
├── business-1.webp
├── business-2.webp
├── business-3.webp
├── business-4.webp
├── entertainment-1.webp
├── entertainment-2.webp
└── vlog-1.webp
```

**サムネイルがない場合の一時的対処法**:
```bash
# プレースホルダー画像をダウンロード（Windowsの場合）
cd public/images/thumbnails
curl -o business-1.webp https://placehold.co/720x1280/3B82F6/FFFFFF/webp?text=Business+1
curl -o business-2.webp https://placehold.co/720x1280/3B82F6/FFFFFF/webp?text=Business+2
curl -o business-3.webp https://placehold.co/720x1280/3B82F6/FFFFFF/webp?text=Business+3
curl -o business-4.webp https://placehold.co/720x1280/3B82F6/FFFFFF/webp?text=Business+4
curl -o entertainment-1.webp https://placehold.co/720x1280/EC4899/FFFFFF/webp?text=Entertainment+1
curl -o entertainment-2.webp https://placehold.co/720x1280/EC4899/FFFFFF/webp?text=Entertainment+2
curl -o vlog-1.webp https://placehold.co/720x1280/10B981/FFFFFF/webp?text=Vlog+1
```

### 2. ローカルで動作確認

```bash
# 開発サーバー起動
npm run dev

# → http://localhost:3000 で確認

# ビルドテスト
npm run build
```

---

## 📝 Step 1: GitHubリポジトリ作成

### 1-1. GitHubで新規リポジトリ作成

https://github.com/new にアクセス

- **Repository name**: `chris-hayato-portfolio`
- **Description**: `クリスハヤト様 動画編集者ポートフォリオサイト`
- **Visibility**: `Public`
- ✅ **Initialize this repository with: なし**（既存プロジェクトのため）

### 1-2. ローカルからプッシュ

```bash
# Gitリポジトリ初期化
git init

# 全ファイルをステージング
git add .

# 初回コミット
git commit -m "feat: 完全無料ポートフォリオサイト初期実装"

# リモートリポジトリ追加（YOUR_USERNAMEを置き換え）
git remote add origin https://github.com/YOUR_USERNAME/chris-hayato-portfolio.git

# メインブランチにプッシュ
git branch -M main
git push -u origin main
```

---

## ☁️ Step 2: Cloudflare Pagesデプロイ

### 2-1. Cloudflareアカウント作成（未登録の場合）

https://dash.cloudflare.com/sign-up

### 2-2. Pagesプロジェクト作成

1. https://dash.cloudflare.com → ログイン
2. 左サイドバー → `Workers & Pages` をクリック
3. `Create application` をクリック
4. `Pages` タブ → `Connect to Git` をクリック

### 2-3. GitHubリポジトリ連携

1. `Connect GitHub account` → GitHub認証
2. リポジトリ一覧から `chris-hayato-portfolio` を選択
3. `Begin setup` をクリック

### 2-4. ビルド設定

| 設定項目 | 値 |
|---------|---|
| **Project name** | `chris-hayato-portfolio` |
| **Production branch** | `main` |
| **Framework preset** | `Next.js (Static HTML Export)` |
| **Build command** | `npm run build` |
| **Build output directory** | `.next` |

**環境変数**:
- `NODE_VERSION` = `20`

4. `Save and Deploy` をクリック

### 2-5. デプロイ完了確認

デプロイが完了すると、URLが表示されます：

```
✅ Success! Your site is live at:
https://chris-hayato-portfolio.pages.dev
```

---

## 🔧 Step 3: セキュリティ・最適化設定

### 3-1. SSL/TLS設定

1. Cloudflare Dashboard → 対象ドメイン選択
2. `SSL/TLS` → `Overview`
3. **暗号化モード**: `Full (strict)` を選択
4. `Edge Certificates` → 以下を有効化：
   - ✅ Always Use HTTPS
   - ✅ Automatic HTTPS Rewrites
   - ✅ Minimum TLS Version: 1.2

### 3-2. パフォーマンス最適化

`Speed` → `Optimization`:

- ✅ **Auto Minify**: JavaScript, CSS, HTML
- ✅ **Brotli**: Enabled
- ✅ **Polish**: Lossless

### 3-3. キャッシュ設定

`Caching` → `Configuration`:

- **Browser Cache TTL**: 1 year
- **Caching Level**: Standard

---

## ✅ Step 4: 動作確認

### 確認項目チェックリスト

- [ ] サイトにアクセスできる（HTTPS）
- [ ] ヒーローセクション表示
- [ ] 動画カード7枚表示
- [ ] カテゴリフィルタ動作
- [ ] 動画クリック → 外部リンク遷移
- [ ] モバイル表示確認
- [ ] PageSpeed Insights: 90点以上

### PageSpeed Insights確認

https://pagespeed.web.dev/

URLを入力してAnalyze:
- **Performance**: 95点以上が目標
- **LCP**: 1.0秒以下

---

## 🔄 更新方法

コード変更後、自動デプロイ:

```bash
git add .
git commit -m "update: 機能追加"
git push origin main

# → Cloudflare Pagesが自動的に再デプロイ
```

---

## 💡 次のステップ（オプション）

### カスタムドメイン設定（必要な場合のみ）

1. Cloudflare Pages → `Custom domains`
2. `Set up a custom domain`
3. ドメイン入力 → DNS自動設定

**費用**: 約$10/年（.comドメイン）

---

## 📊 完全無料で利用可能なサービス

| サービス | 内容 | 費用 |
|---------|------|------|
| **Cloudflare Pages** | ホスティング | $0 |
| **Cloudflare CDN** | グローバル配信 | $0 |
| **Cloudflare SSL** | HTTPS証明書 | $0 |
| **Cloudflare Analytics** | アクセス解析 | $0 |
| **GitHub** | リポジトリ | $0 |
| **合計** | - | **$0/年** |

---

## 🎉 デプロイ完了！

お疲れ様でした。完全無料でポートフォリオサイトが公開されました。

**公開URL**: `https://chris-hayato-portfolio.pages.dev`

問題が発生した場合は、`04_デプロイ手順書.md` のトラブルシューティングを参照してください。
