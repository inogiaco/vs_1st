# 問題解決:ようは会ラジオ

Next.js 14 + microCMS + Vercel で構築されたコンテンツサイト

## セットアップ手順

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local` ファイルを作成し、以下の環境変数を設定してください：

```bash
# microCMS設定
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key

# サイト設定
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### microCMS設定方法

1. [microCMS](https://microcms.io/) でアカウント作成
2. 新規サービス作成（サービスドメイン名を控える）
3. APIキーを発行（settings > API key）
4. 以下のAPIを作成：
   - `articles` (リスト形式)
   - `members` (リスト形式)
5. スキーマはプロジェクトルートの `schema/` ディレクトリを参照

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認

### 4. ビルド確認

```bash
npm run build
npm run start
```

## デプロイ

### Vercel でのデプロイ

1. Vercel アカウントにログイン
2. プロジェクトを接続
3. 環境変数を設定：
   - `MICROCMS_SERVICE_DOMAIN`
   - `MICROCMS_API_KEY`
   - `NEXT_PUBLIC_SITE_URL` (本番URL)
4. デプロイ実行

### 環境変数一覧

| 変数名 | 説明 | 必須 |
|--------|------|------|
| `MICROCMS_SERVICE_DOMAIN` | microCMSのサービスドメイン | ✓ |
| `MICROCMS_API_KEY` | microCMSのAPIキー | ✓ |
| `NEXT_PUBLIC_SITE_URL` | サイトのベースURL | ✓ |

## プロジェクト構成

```
VC_1st/
├── app/                    # App Router
│   ├── page.tsx           # ホームページ
│   ├── articles/          # 記事一覧・詳細
│   ├── members/           # メンバー紹介
│   ├── contact/           # お問い合わせ
│   └── layout.tsx         # 共通レイアウト
├── components/            # 再利用可能コンポーネント
├── lib/                   # ユーティリティ・設定
├── types/                 # TypeScript型定義
├── public/                # 静的ファイル
└── schema/                # microCMSスキーマ定義
```

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **CMS**: microCMS
- **ホスティング**: Vercel
- **リンター**: ESLint

## 開発ガイドライン

- インポートエイリアス `@/` を使用
- コンポーネントはfunction宣言で作成
- ISR (revalidate: 60s) でキャッシュ管理
- レスポンシブ対応: SP ≥ 375px, Desktop ≥ 1280px

## TODO

- [ ] ロゴテキスト決定
- [ ] アクセントカラー決定 (現在: #1D4ED8)
- [ ] カテゴリ・タグリスト確定
- [ ] フォーム送信先決定
- [ ] MVP公開日設定
- [ ] GA4設定