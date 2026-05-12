import { DayAboutFounder } from '@/components/DayAboutFounder';
import { DayFAQ } from '@/components/DayFAQ';
import { DayFeatures } from '@/components/DayFeatures';
import { DayHalfDayHero } from '@/components/DayHalfDayHero';
import { DayHero } from '@/components/DayHero';
import { DayLastCTA } from '@/components/DayLastCTA';
import { DayPain } from '@/components/DayPain';
import { DayPricing } from '@/components/DayPricing';
import { DaySelfUse } from '@/components/DaySelfUse';
import { DaySolution } from '@/components/DaySolution';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { JsonLd } from '@/components/JsonLd';
import { dayFaqsForSchema } from '@/lib/dayFaqs';
import { createFAQSchema, sokoeDaySchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';

const DAY_URL = `${siteConfig.url}/day-service/`;

/**
 * sokoe Day LP メタデータ
 *
 * Step 4.7 SEO 厳格チェック準拠：
 * - title 全角28-32字（メインキーワード「sokoe Day」「デイサービス」「アプリ」前半）
 * - description 60-80字
 * - canonical 必須
 * - OG / Twitter Card
 */
export const metadata: Metadata = {
  title: 'sokoe Day ｜ デイサービス向けアプリ',
  description:
    '介護施設を運営する会社がつくった、デイサービス向けアプリ。1日型・半日型・ハイブリッド型に対応。AIケアプラン生成、議事録自動化、入浴カンバン。自社運営施設で本番稼働中。',
  alternates: {
    canonical: DAY_URL,
  },
  openGraph: {
    title: 'sokoe Day ｜ デイサービス向けアプリ',
    description:
      '介護施設を運営する会社がつくった、デイサービス向けアプリ。1日型・半日型・ハイブリッド型に対応。',
    url: DAY_URL,
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/images/hero/dayservice-ui-mockup-1672x941.webp`,
        width: 1672,
        height: 941,
        alt: 'sokoe Day のダッシュボード画面',
      },
    ],
  },
};

/**
 * sokoe Day LP（/day-service/）
 *
 * Step 3-C で確定したセクション構成（Phase 0 コア10セクション）：
 * [1]  ヘッダー
 * [2]  Hero（プロダクトUIモック + コピー）
 * [3]  半日型対応訴求（最大の差別化）
 * [4]  Pain（5項目の現場の課題）
 * [5]  Solution（4つの解決）
 * [6]  Self-Use（自社運営施設での実証）
 * [7]  Features（17機能グリッド）
 * [8]  Pricing（3プラン）
 * [9]  FAQ（10問）
 * [10] About Founder（代表メッセージ要約）
 * [11] Last CTA（オレンジベタ）
 * [12] Footer
 *
 * 構造化データ（Step 4.7 + 4.8）：
 * - SoftwareApplication Schema（sokoe Day）
 * - FAQPage Schema（10問）
 *
 * 残りのセクション（Step 6-D Part 2 で追加）：
 * - AI Highlight（4機能の深掘り）
 * - Testimonial（顧客の声）
 * - Case Study（導入事例）
 * - Comparison（他社比較）
 * - CTA Section（中盤の CV）
 * - Trust（セキュリティ等）
 */
export default function DayServicePage() {
  // FAQ Schema を動的生成
  const faqSchema = createFAQSchema(dayFaqsForSchema, DAY_URL);

  return (
    <>
      <JsonLd data={[sokoeDaySchema, faqSchema]} />

      <Header />

      <main>
        <DayHero />
        <DayHalfDayHero />
        <DayPain />
        <DaySolution />
        <DaySelfUse />
        <DayFeatures />
        <DayPricing />
        <DayFAQ />
        <DayAboutFounder />
        <DayLastCTA />
      </main>

      <Footer />
    </>
  );
}
