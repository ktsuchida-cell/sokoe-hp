/**
 * next-sitemap 設定（Step 6-G）
 *
 * 全 13 公開ルートに対して sitemap.xml と robots.txt を生成する。
 * ただし robots.txt は public/robots.txt を優先するため、ここでは生成しない（generateRobotsTxt: false）。
 *
 * 利用方法：
 *   pnpm add -D next-sitemap
 *   package.json の "build" を "next build && next-sitemap" に変更
 *
 * 環境変数：
 *   NEXT_PUBLIC_SITE_URL（必須） 例：https://sokoe.co.jp
 *   未設定時はデフォルトの sokoe.co.jp を使う
 */

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://sokoe.co.jp',

  // ── 出力先 ─────────────────────────────────
  outDir: './public',

  // ── robots.txt は public/robots.txt を優先（AI クローラー対応の手書き版） ──
  generateRobotsTxt: false,

  // ── インデックスファイル ───────────────────
  generateIndexSitemap: false, // ページ数が少ないため不要

  // ── トレーリングスラッシュ ──────────────────
  trailingSlash: true, // Next.js 側の next.config.js と揃える

  // ── ページ別の priority と changefreq の自動付与 ──
  // Phase 0 のページ構造に応じてカスタマイズ
  transform: async (config, path) => {
    // priority と changefreq をパスから判定
    const { priority, changefreq } = getPriorityAndFreq(path);

    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq,
      priority,
      alternateRefs: [],
    };
  },

  // ── 除外パス ───────────────────────────────
  exclude: [
    '/api/*',
    '/_next/*',
    '/admin/*',
    '/404',
    '/500',
    // 将来追加されるプライベートルートをここに
  ],

  // ── 追加で含めるパス（動的ルート等）─────────
  // Phase 0 ではすべて静的なので不要
  additionalPaths: async (config) => {
    return [];
  },
};

// ────────────────────────────────────────
// パスごとの priority / changefreq
// ────────────────────────────────────────

function getPriorityAndFreq(path) {
  // トップページは最高優先度
  if (path === '/') {
    return { priority: 1.0, changefreq: 'weekly' };
  }

  // 主要 LP（プロダクト・サービス）
  if (path === '/day-service/' || path === '/consulting/') {
    return { priority: 0.9, changefreq: 'weekly' };
  }

  // 会社情報・代表系
  if (path.startsWith('/about/')) {
    return { priority: 0.8, changefreq: 'monthly' };
  }

  // 採用・問い合わせ
  if (path === '/recruit/' || path === '/contact/') {
    return { priority: 0.7, changefreq: 'monthly' };
  }

  // 規約系（更新頻度低）
  if (path === '/privacy/' || path === '/terms/' || path === '/legal/' || path === '/disclaimer/') {
    return { priority: 0.4, changefreq: 'yearly' };
  }

  // その他
  return { priority: 0.5, changefreq: 'monthly' };
}
