/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://sokoe.co.jp',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      // === 標準クローラー ===
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // === 検索エンジン ===
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },

      // === AI 検索クローラー（リアルタイム回答用）★ 必ず許可 ===
      // ChatGPT / Claude / Perplexity の「ユーザーが質問した時にサイトを取得する」ボット
      // これらを許可することで AI 検索結果に引用されやすくなる
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Claude-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },

      // === AI 学習クローラー ★ Phase 1 は許可（認知度を取りに行く戦略）===
      // Phase 2 以降、コンテンツ学習されたくない場合は Disallow に切り替え検討
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // パス別の優先度カスタマイズ
    const priorityMap = {
      '/': 1.0,
      '/day-service/': 0.9,
      '/consulting/': 0.9,
      '/about/': 0.8,
      '/about/profile/': 0.8,
      '/contact/': 0.8,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorityMap[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
