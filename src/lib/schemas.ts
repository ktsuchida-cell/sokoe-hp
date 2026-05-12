/**
 * Schema.org 構造化データ定義
 *
 * Step 4.8 GEO/AEO 厳格診断より：
 * - Organization Schema + Person Schema は Entity Authority の最重要施策
 * - sameAs で外部権威プロファイルと紐付け（SNS 開設後に追加）
 * - hasCredential で薬剤師資格を明示
 */

import { siteConfig } from '@/lib/siteConfig';
import type { Organization, Person, WithContext } from 'schema-dts';

const SITE_URL = siteConfig.url;

/* ─────────────────────────────────────────────
   Organization Schema
   全ページに埋め込む。会社のエンティティを定義。
   ───────────────────────────────────────────── */
export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
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
  founder: {
    '@id': `${SITE_URL}/about/profile/#person`,
  },
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

/* ─────────────────────────────────────────────
   Person Schema（代表 = 槌田一輝）
   E-E-A-T の Experience（経験）と Expertise（専門性）の中核。
   ───────────────────────────────────────────── */
export const founderPersonSchema: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/about/profile/#person`,
  name: '槌田 一輝',
  givenName: '一輝',
  familyName: '槌田',
  jobTitle: '代表取締役 / 施設長代理',
  worksFor: {
    '@id': `${SITE_URL}/#organization`,
  },
  affiliation: {
    '@type': 'Organization',
    name: 'レッツ倶楽部川西能勢口',
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'license',
    name: '薬剤師資格',
    recognizedBy: {
      '@type': 'Organization',
      name: '厚生労働省',
    },
  },
  knowsAbout: [
    '介護施設運営',
    'AI 戦略策定',
    'ヘルスケア領域のソフトウェア開発',
    'デイサービス業務',
    '薬局業務',
    'ケアプラン作成',
    '介護AI導入',
  ],
  description:
    '薬学部卒業後、IT企業インターン、薬局運営、デイサービス管理者を経て、株式会社sokoeを創業。自社運営施設でAIを本番運用しながら、ヘルスケア領域のAIコンサルティングを提供している。',
  // sameAs：外部権威プロファイル（Step 4.8 Entity Authority 強化）
  sameAs: [
    'https://x.com/sokoe_official',
    'https://note.com/sokoe_official',
    'https://www.linkedin.com/in/kazuki-tsuchida/',
  ],
};

/* ─────────────────────────────────────────────
   WebSite Schema（サイト全体）
   サイト内検索が実装されたら potentialAction を追加
   ───────────────────────────────────────────── */
export const websiteSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'WebSite' as const,
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
  inLanguage: 'ja-JP',
};

/* ─────────────────────────────────────────────
   SoftwareApplication Schema（sokoe Day）
   AI Overview / Google Rich Result でプロダクト情報が表示される
   ───────────────────────────────────────────── */
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
      name: 'ベーシック',
      price: '11000',
      priceCurrency: 'JPY',
      description: '10名規模のデイサービス向け',
    },
    {
      '@type': 'Offer' as const,
      name: 'スタンダード',
      price: '33000',
      priceCurrency: 'JPY',
      description: '30名規模のデイサービス向け',
    },
    {
      '@type': 'Offer' as const,
      name: 'プレミアム',
      price: '55000',
      priceCurrency: 'JPY',
      description: '50名規模のデイサービス向け',
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
  provider: {
    '@id': `${SITE_URL}/#organization`,
  },
  inLanguage: 'ja-JP',
};

/* ─────────────────────────────────────────────
   Service Schema（sokoe AI Lab）
   AI コンサルティングサービス全体の構造化データ
   Step 4.7 §4.4 / Step 4.8 §11.1 で必須実装
   ───────────────────────────────────────────── */
export const sokoeAILabSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'Service' as const,
  '@id': `${SITE_URL}/consulting/#service`,
  name: 'sokoe AI Lab',
  alternateName: 'sokoe AI Lab（ソコエ・エーアイ・ラボ）',
  description:
    'ヘルスケア領域（介護・薬局・医療）の現場でAIを毎日使っている会社のAIコンサルティングサービス。戦略策定、導入支援、研修、継続伴走の4サービスを提供。',
  url: `${SITE_URL}/consulting/`,
  provider: {
    '@id': `${SITE_URL}/#organization`,
  },
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

/* ─────────────────────────────────────────────
   FAQPage Schema 生成ヘルパー
   各 LP の FAQ セクションから動的に生成
   ───────────────────────────────────────────── */
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
