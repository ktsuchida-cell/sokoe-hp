import { AboutUs } from '@/components/AboutUs';
import { CaseStudies } from '@/components/CaseStudies';
import { Footer } from '@/components/Footer';
import { FullBleedImage } from '@/components/FullBleedImage';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Insights } from '@/components/Insights';
import { JsonLd } from '@/components/JsonLd';
import { LastCTA } from '@/components/LastCTA';
import { OurApproach } from '@/components/OurApproach';
import { Recruit } from '@/components/Recruit';
import { WhatWeDo } from '@/components/WhatWeDo';
import { founderPersonSchema, organizationSchema, websiteSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';

/**
 * コーポレートTOP メタデータ
 *
 * Step 4.7 SEO 厳格チェック準拠：
 * - title 全角28-32字
 * - description 60-80字（メインキーワード前半に）
 * - canonical 必須
 * - OG / Twitter Card
 */
export const metadata: Metadata = {
  title: 'sokoe ｜ 現場を、本来の仕事に戻す。',
  description:
    '介護施設を運営する会社がつくった、医療・介護・福祉領域のソフトウェアとAIコンサルティング。現役の介護施設長代理が代表。自社運営施設で2026年4月から本番稼働中。',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: 'sokoe ｜ 現場を、本来の仕事に戻す。',
    description:
      '介護施設を運営する会社がつくった、医療・介護・福祉領域のソフトウェアとAIコンサルティング。',
    url: siteConfig.url,
    type: 'website',
  },
};

/**
 * コーポレートTOP（/）
 *
 * Step 3-B / Step 4 で確定したセクション構成：
 * [1] ヘッダー
 * [2] ヒーロー（センター集中型・セリフ体大見出し）
 * [3] フルブリード写真（自社運営施設）
 * [4] What we do（4事業）
 * [5] Our Approach（3つの考え方）
 * [6] Insights（最新の知見記事 4本）
 * [7] Case studies（自社実践事例 4ケース）
 * [8] About us（創業ストーリー要約）
 * [9] Recruit（採用）
 * [10] Last CTA
 * [11] Footer
 *
 * 構造化データ（Step 4.8 GEO/AEO 対応）：
 * - Organization Schema
 * - Person Schema（代表）
 * - WebSite Schema
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema, founderPersonSchema, websiteSchema]} />

      <Header />

      <main>
        <Hero />
        <FullBleedImage />
        <WhatWeDo />
        <OurApproach />
        <Insights />
        <CaseStudies />
        <AboutUs />
        <Recruit />
        <LastCTA />
      </main>

      <Footer />
    </>
  );
}
