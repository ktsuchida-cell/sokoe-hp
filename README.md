# sokoe-web

株式会社sokoe のコーポレートサイト & プロダクト LP。

## 🛠️ 技術スタック

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm
- **Linter/Formatter**: Biome
- **Hosting**: Vercel
- **Form/Email**: Resend
- **Calendar**: Calendly (embed)
- **Analytics**: Google Analytics 4 + Microsoft Clarity

## 📋 必要環境

- Node.js 20.x 以上
- pnpm 8.x 以上

```bash
# pnpm のインストール（未インストールの場合）
npm install -g pnpm
```

## 🚀 セットアップ

```bash
# 1. リポジトリをクローン
git clone https://github.com/<your-org>/sokoe-web.git
cd sokoe-web

# 2. 依存パッケージをインストール
pnpm install

# 3. 環境変数を設定
cp .env.example .env.local
# .env.local を編集

# 4. 開発サーバー起動
pnpm dev
```

ブラウザで http://localhost:3100 を開く。

## 📜 主要なスクリプト

| コマンド | 内容 |
|---------|------|
| `pnpm dev` | 開発サーバー起動 |
| `pnpm build` | 本番ビルド |
| `pnpm start` | 本番サーバー起動 |
| `pnpm lint` | Biome で Lint チェック |
| `pnpm lint:fix` | Lint エラーの自動修正 |
| `pnpm format` | コードフォーマット |
| `pnpm type-check` | TypeScript 型チェック |

## 📁 ディレクトリ構造

```
sokoe-web/
├── .github/
│   └── workflows/
│       └── ci.yml             # CI ワークフロー
├── public/
│   ├── images/                # 画像素材
│   └── favicons/              # ファビコン各種
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # ルートレイアウト
│   │   ├── page.tsx           # コーポレート TOP
│   │   └── globals.css        # Tailwind v4 + デザイントークン
│   ├── components/            # すべてのコンポーネント（フラット構造）
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   ├── Heading.tsx
│   │   ├── Label.tsx
│   │   ├── Accordion.tsx
│   │   ├── Logo.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── lib/                   # 定数・ユーティリティ（フラット構造）
│       ├── cn.ts              # className マージ
│       ├── siteConfig.ts      # サイト定数
│       └── navigation.ts      # ナビゲーション構造
├── biome.json                 # Biome 設定
├── next.config.mjs            # Next.js 設定
├── tsconfig.json              # TypeScript 設定
└── package.json
```

## 🎨 デザイントークン

`src/app/globals.css` の `@theme` ブロックに集約：

### カラー
- **Brand**: `brand-red` `#ED1A29` / `coral` `#F4978E` / `tint-pink` `#FDE7EA`
- **Neutral**: `ink` / `charcoal` / `stone` / `mid` / `border` / `soft-bg` / `off-white`

### フォント
- **Sans**: Inter + Noto Sans JP
- **Serif**: Playfair Display + Noto Serif JP（見出し用）

### 使用例

```tsx
<h1 className="font-serif-display text-7xl text-ink">
  現場を、本来の仕事に戻す。
</h1>

<p className="text-stone leading-relaxed">
  本文テキスト
</p>

<button className="bg-brand-red text-white px-8 py-4 rounded-[4px]">
  CTA
</button>
```

## 🔧 開発ルール

### ブランチ戦略

- `main`: 本番（保護ブランチ、PR 必須）
- `feature/xxx`: 機能開発
- `fix/xxx`: バグ修正

### コミットメッセージ

[Conventional Commits](https://www.conventionalcommits.org/) を採用：

```
feat: ヒーローセクションを追加
fix: モバイルメニューのオーバーフロー修正
docs: README 更新
style: ボタンのパディング調整
refactor: Card コンポーネントを簡素化
chore: 依存パッケージ更新
```

### PR フロー

1. `feature/xxx` ブランチで開発
2. `main` へ PR 作成
3. Vercel preview URL で動作確認
4. CI（型チェック・Lint・Build）が pass
5. Squash and merge

## 🚢 デプロイ

Vercel で自動デプロイ：

- `main` ブランチ → 本番（sokoe.co.jp）
- PR → preview deployment（xxx.vercel.app）

## 📊 品質基準

| 指標 | 目標 |
|------|------|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse SEO | 100 |
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |

## ⚖️ ライセンス

Proprietary - 株式会社sokoe
