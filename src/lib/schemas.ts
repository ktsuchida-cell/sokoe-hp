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
    addressRegion: '兵庫県',
    addressLocality: '川西市',
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
  // sameAs は SNS 開設後に追記
  // sameAs: [
  //   'https://twitter.com/sokoe_official',
  //   'https://www.linkedin.com/company/sokoe',
  //   'https://note.com/sokoe',
  // ],
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
  // sameAs は SNS 開設後に追記
  // sameAs: [
  //   'https://twitter.com/...',
  //   'https://www.linkedin.com/in/...',
  //   'https://note.com/...',
  // ],
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
