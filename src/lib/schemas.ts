/**
 * Schema.org 構造化データ定義
 *
 * Step 6-D: SoftwareApplication (sokoe Day) 追加
 * Step 6-E: Service (sokoe AI Lab) 追加
 * Step 6-F-1:
 *   - Person Schema を詳細化（hasCredential 削除、alumniOf / hasOccupation 追加）
 *   - createBreadcrumbSchema / createArticleSchema / createWebPageSchema 追加
 *   - profilePageSchema 追加
 *
 * 設計方針：
 *   - すべての主要 Entity に @id を付与し、サイト内・ページ間で参照を再利用
 *   - Organization / Person はサイト全体で唯一の Entity として扱う
 */

import { siteConfig } from '@/lib/siteConfig';
import type { Organization, WithContext } from 'schema-dts';

const SITE_URL = siteConfig.url;

// ─────────────────────────────────────────────
// 共通 ID
// ─────────────────────────────────────────────
export const ORG_ID = `${SITE_URL}/#organization` as const;
export const PERSON_ID = `${SITE_URL}/about/profile/#person` as const;
export const WEBSITE_ID = `${SITE_URL}/#website` as const;
export const PROFILE_PAGE_ID = `${SITE_URL}/about/profile/#webpage` as const;

// ─────────────────────────────────────────────
// Organization Schema
// 全ページに埋め込む。会社のエンティティを定義。
// ─────────────────────────────────────────────
export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo.png`,
    width: '512',
    height: '512',
  },
  description: siteConfig.description,
  foundingDate: siteConfig.company.foundedDate,
  founder: { '@id': PERSON_ID },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'JP',
    addressRegion: '大阪府',
    addressLocality: '大阪市淀川区',
    streetAddress: '新高3丁目7番17-603号',
    postalCode: '532-0033',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: siteConfig.contact.email,
    contactType: 'customer support',
    availableLanguage: ['Japanese'],
  },
  knowsAbout: [
    'Care Management Software',
    'Day Service Operation',
    'AI Consulting for Healthcare',
    'Care Plan Automation',
    'Healthcare IT',
    '介護施設運営',
    'デイサービスアプリ',
    '介護AI導入支援',
    '医療・介護DX',
    '半日型デイサービス',
    'ケアプランAI',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Japan',
  },
  // sameAs：外部権威プロファイルへのリンク（Step 4.8 Entity Authority 強化）
  sameAs: [
    'https://x.com/sokoe_official',
    'https://note.com/sokoe_official',
    // LinkedIn 会社ページは開設後に追加
  ],
};

// ─────────────────────────────────────────────
// Person Schema（代表 槌田一輝）★ Step 6-F-1 詳細版
// /about/profile/ の権威性中核
// 免許資格は保有していないため hasCredential は使わない
// ─────────────────────────────────────────────
export const personSchemaDetailed = {
  '@context': 'https://schema.org' as const,
  '@type': 'Person' as const,
  '@id': PERSON_ID,
  name: '槌田 一輝',
  givenName: '一輝',
  familyName: '槌田',
  alternateName: 'つちだ かずき',
  jobTitle: '代表取締役',
  worksFor: { '@id': ORG_ID },
  description:
    '株式会社ソコエ 代表取締役。レッツ倶楽部川西能勢口（兵庫県川西市・1日型デイサービス）施設長代理を兼任。薬学部を卒業し、薬学・IT・薬局・介護現場を横断したキャリアを持つ。自社運営施設で AI を本番運用しながら、デイサービス向けアプリ「sokoe Day」と AI コンサルティング「sokoe AI Lab」を展開。',
  alumniOf: {
    '@type': 'EducationalOrganization' as const,
    name: '薬学部',
    description: '2025年3月 卒業',
  },
  hasOccupation: [
    {
      '@type': 'Occupation' as const,
      name: '代表取締役',
      occupationLocation: { '@id': ORG_ID },
    },
    {
      '@type': 'Occupation' as const,
      name: '施設長代理',
      occupationLocation: {
        '@type': 'Place' as const,
        name: 'レッツ倶楽部川西能勢口',
        address: {
          '@type': 'PostalAddress' as const,
          addressCountry: 'JP',
          addressRegion: '兵庫県',
          addressLocality: '川西市',
        },
      },
    },
  ],
  knowsAbout: [
    '介護施設運営',
    'デイサービス管理',
    '介護AI導入',
    '薬局運営',
    '医療・介護SaaS開発',
    'AI戦略策定',
    'ケアプラン業務',
    '業務効率化',
  ],
  knowsLanguage: ['ja'],
  sameAs: [
    'https://x.com/sokoe_official',
    'https://note.com/sokoe_official',
    'https://www.linkedin.com/in/kazuki-tsuchida/',
  ],
};

// 後方互換エイリアス（既存コードからの参照を維持）
export const personSchema = personSchemaDetailed;
export const founderPersonSchema = personSchemaDetailed;

// ─────────────────────────────────────────────
// WebSite Schema（サイト全体）
// サイト内検索が実装されたら potentialAction を追加
// ─────────────────────────────────────────────
export const websiteSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'WebSite' as const,
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: { '@id': ORG_ID },
  inLanguage: 'ja-JP',
};

// ─────────────────────────────────────────────
// BreadcrumbList Schema ★ Step 6-F-1 新規
// 全下層ページのパンくずに連動
// ─────────────────────────────────────────────
export type BreadcrumbSchemaItem = {
  name: string;
  url?: string;
};

export function createBreadcrumbSchema(items: BreadcrumbSchemaItem[]) {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'BreadcrumbList' as const,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem' as const,
      position: i + 1,
      name: item.name,
      ...(item.url
        ? { item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}` }
        : {}),
    })),
  };
}

// ─────────────────────────────────────────────
// Article Schema ★ Step 6-F-1 新規
// /about/founder-message/ などの長文記事用
// ─────────────────────────────────────────────
type ArticleSchemaInput = {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  articleSection?: string;
  wordCount?: number;
};

export function createArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image,
  articleSection = '会社情報',
  wordCount,
}: ArticleSchemaInput) {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'Article' as const,
    headline,
    description,
    mainEntityOfPage: { '@id': url },
    url,
    datePublished,
    dateModified,
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: 'ja-JP',
    articleSection,
    ...(image ? { image: { '@type': 'ImageObject' as const, url: image } } : {}),
    ...(wordCount ? { wordCount } : {}),
  };
}

// ─────────────────────────────────────────────
// WebPage Schema（編集ポリシー・規約等の汎用ページ用）★ Step 6-F-1 新規
// ─────────────────────────────────────────────
type WebPageSchemaInput = {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  /** YMYL ページでレビュアーを明示する場合 */
  reviewedBy?: 'self' | { name: string; id?: string };
};

export function createWebPageSchema({
  name,
  description,
  url,
  datePublished,
  dateModified,
  reviewedBy,
}: WebPageSchemaInput) {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'WebPage' as const,
    name,
    description,
    url,
    inLanguage: 'ja-JP',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(reviewedBy === 'self'
      ? { reviewedBy: { '@id': PERSON_ID } }
      : reviewedBy
        ? {
            reviewedBy: {
              '@type': 'Person' as const,
              name: reviewedBy.name,
              ...(reviewedBy.id ? { '@id': reviewedBy.id } : {}),
            },
          }
        : {}),
  };
}

// ─────────────────────────────────────────────
// ProfilePage Schema ★ Step 6-F-1 新規
// /about/profile/ 用。Google が 2024 以降サポートする ProfilePage type
// ─────────────────────────────────────────────
export const profilePageSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'ProfilePage' as const,
  '@id': PROFILE_PAGE_ID,
  url: `${SITE_URL}/about/profile/`,
  name: '代表プロフィール ― 槌田 一輝｜株式会社ソコエ',
  mainEntity: { '@id': PERSON_ID },
  isPartOf: { '@id': WEBSITE_ID },
  inLanguage: 'ja-JP',
};

// ─────────────────────────────────────────────
// SoftwareApplication Schema（sokoe Day）★ Step 6-D
// AI Overview / Google Rich Result でプロダクト情報が表示される
// ─────────────────────────────────────────────
export const sokoeDaySchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  '@id': `${SITE_URL}/day-service/#software`,
  name: 'sokoe Day',
  alternateName: 'sokoe Day（ソコエ・デイ）',
  description:
    'デイサービス向けの業務管理アプリ。1日型・半日型・ハイブリッド型のすべてに対応。介護施設を運営する会社がつくった、現場発のソフトウェア。自社運営施設で2026年4月から本番稼働中。',
  url: `${SITE_URL}/day-service/`,
  image: `${SITE_URL}/images/hero/dayservice-ui-mockup-1672x941.webp`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Care Management Software',
  operatingSystem: 'Web Browser (Chrome, Safari, Edge)',
  offers: [
    {
      '@type': 'Offer' as const,
      name: 'フロア機能（ベース）',
      price: '700',
      priceCurrency: 'JPY',
      description: '1 日平均利用者 1 名あたり月額 700 円（税込）',
    },
    {
      '@type': 'Offer' as const,
      name: '送迎機能（オプション）',
      price: '300',
      priceCurrency: 'JPY',
      description: '1 日平均利用者 1 名あたり月額 300 円（税込）',
    },
    {
      '@type': 'Offer' as const,
      name: '管理者業務（オプション）',
      price: '300',
      priceCurrency: 'JPY',
      description: '1 日平均利用者 1 名あたり月額 300 円（税込）',
    },
  ],
  featureList: [
    'ダッシュボード',
    '利用者管理＋AIケアプラン生成',
    '出欠管理',
    '入浴カンバン',
    'バイタル記録（異常値警告）',
    '申し送り',
    'マシン訓練管理',
    '体力測定AI評価',
    '送迎配車計画（AI最適化）',
    'ドライバー画面（モバイル専用）',
    '送迎記録（監査用）',
    '営業管理',
    '担当者会議AI議事録生成',
    '名刺OCR',
    'ケアプランAI生成（OCR連携）',
  ],
  provider: { '@id': ORG_ID },
  inLanguage: 'ja-JP',
};

// ─────────────────────────────────────────────
// Service Schema（sokoe AI Lab）★ Step 6-E
// AI コンサルティングサービス全体の構造化データ
// Step 4.7 §4.4 / Step 4.8 §11.1 で必須実装
// ─────────────────────────────────────────────
export const sokoeAILabSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'Service' as const,
  '@id': `${SITE_URL}/consulting/#service`,
  name: 'sokoe AI Lab',
  alternateName: 'sokoe AI Lab（ソコエ・エーアイ・ラボ）',
  description:
    '医療・介護・福祉領域の現場でAIを毎日使っている会社のAIコンサルティングサービス。戦略策定、導入支援、研修、継続伴走の4サービスを提供。',
  url: `${SITE_URL}/consulting/`,
  provider: { '@id': ORG_ID },
  serviceType: 'AI Consulting',
  areaServed: {
    '@type': 'Country' as const,
    name: 'Japan',
  },
  audience: {
    '@type': 'BusinessAudience' as const,
    audienceType: 'Healthcare Operators',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog' as const,
    name: 'sokoe AI Lab サービス一覧',
    itemListElement: [
      {
        '@type': 'Offer' as const,
        itemOffered: {
          '@type': 'Service' as const,
          name: 'AI戦略策定',
          description: '業務棚卸し → AI適用領域の特定 → ROI試算 → ロードマップ作成',
        },
      },
      {
        '@type': 'Offer' as const,
        itemOffered: {
          '@type': 'Service' as const,
          name: 'AI導入支援',
          description: 'プロトタイプ実装 → パイロット運用 → 本番展開（3〜6ヶ月）',
        },
      },
      {
        '@type': 'Offer' as const,
        itemOffered: {
          '@type': 'Service' as const,
          name: 'AI研修',
          description: '経営層 / 管理者 / 現場スタッフ向けの段階別研修',
        },
      },
      {
        '@type': 'Offer' as const,
        itemOffered: {
          '@type': 'Service' as const,
          name: '顧問契約',
          description: '月次レビュー・継続伴走（6ヶ月〜）',
        },
      },
    ],
  },
  inLanguage: 'ja-JP',
};

// ─────────────────────────────────────────────
// LocalBusiness Schema（レッツ倶楽部川西能勢口）★ Step 6-G 新規
// 兵庫県川西市・1日型デイサービス。株式会社ピースファーマシー運営。
// sokoe コーポレートサイトでは「自社運営施設」として紹介する文脈で参照。
// /about/ ページにのみ配置（layout.tsx には置かない）。
// ─────────────────────────────────────────────
export const LETS_FACILITY_ID = `${SITE_URL}/#facility-lets-kawanishi-noseguchi` as const;

export const localBusinessLetsKawanishi = {
  '@context': 'https://schema.org' as const,
  '@type': 'LocalBusiness' as const,
  '@id': LETS_FACILITY_ID,
  name: 'レッツ倶楽部川西能勢口',
  description:
    '兵庫県川西市の1日型デイサービス。株式会社ピースファーマシー運営。株式会社ソコエ 代表取締役 槌田一輝が施設長代理を兼任し、デイサービス向けアプリ sokoe Day の自社運営施設として AI を本番運用している。',
  address: {
    '@type': 'PostalAddress' as const,
    addressCountry: 'JP',
    addressRegion: '兵庫県',
    addressLocality: '川西市',
  },
  areaServed: {
    '@type': 'AdministrativeArea' as const,
    name: '兵庫県川西市',
  },
  parentOrganization: {
    '@type': 'Organization' as const,
    name: '株式会社ピースファーマシー',
  },
  // 代表（兼任施設長代理）への弱い参照
  employee: { '@id': PERSON_ID },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification' as const,
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification' as const,
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  isRelatedTo: { '@id': ORG_ID },
};

// ─────────────────────────────────────────────
// FAQPage Schema 生成ヘルパー（Step 6-D 由来・2-arg シグネチャを維持）
// 既存呼び出し: createFAQSchema(faqs, pageUrl)
// 各 LP の FAQ セクションから動的に生成
// ─────────────────────────────────────────────
export function createFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
  pageUrl: string,
) {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'FAQPage' as const,
    '@id': `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question' as const,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: faq.answer,
      },
    })),
  };
}
