/**
 * サイト全体の設定・定数
 */

export const siteConfig = {
  name: 'sokoe',
  fullName: '株式会社sokoe',
  tagline: '現場を、本来の仕事に戻す。',
  taglineEn: 'Bring back the work that matters.',
  description:
    '介護施設を運営する会社がつくった、ヘルスケア領域のソフトウェアとAIコンサルティング。',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sokoe.co.jp',

  // 連絡先
  contact: {
    email: 'info@sokoe.co.jp',
    address: '兵庫県川西市',
  },

  // 会社情報
  company: {
    name: '株式会社sokoe',
    foundedDate: '2026-05-01',
    representative: '槌田 一輝',
    representativeRole: '代表取締役',
  },

  // ソーシャル（取得後に追記）
  social: {
    twitter: '',
    linkedin: '',
    note: '',
  },

  // 事業
  businesses: [
    {
      key: 'day-service',
      name: 'sokoe Day',
      tagline: 'デイサービス向けアプリ',
      url: '/day-service/',
      status: 'live', // 'live' | 'soon' | 'planning'
    },
    {
      key: 'facility',
      name: 'sokoe Facility',
      tagline: '介護施設向けシステム',
      url: '/facility/',
      status: 'soon',
    },
    {
      key: 'pharmacy',
      name: 'sokoe Pharma',
      tagline: '薬局向けアプリ',
      url: '/pharmacy/',
      status: 'soon',
    },
    {
      key: 'consulting',
      name: 'sokoe AI Lab',
      tagline: 'AIコンサルティング',
      url: '/consulting/',
      status: 'live',
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
