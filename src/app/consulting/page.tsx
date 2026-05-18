import { DayAboutFounder } from '@/components/DayAboutFounder';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { JsonLd } from '@/components/JsonLd';
import { LabFAQ } from '@/components/LabFAQ';
import { LabHero } from '@/components/LabHero';
import { LabLastCTA } from '@/components/LabLastCTA';
import { LabPhilosophy } from '@/components/LabPhilosophy';
import { LabProcess } from '@/components/LabProcess';
import { LabServices } from '@/components/LabServices';
import { labFaqsForSchema } from '@/lib/labFaqs';
import { createFAQSchema, sokoeAILabSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';

const LAB_URL = `${siteConfig.url}/consulting/`;

/**
 * sokoe AI Lab LP メタデータ
 *
 * Step 4.7 SEO 厳格チェック準拠：
 * - title 全角28-32字（メインキーワード「AIコンサル」「ヘルスケア」前半）
 * - description 60-80字
 * - canonical 必須
 */
export const metadata: Metadata = {
  title: 'sokoe AI Lab ｜ 医療・介護・福祉領域のAIコンサル',
  description:
    '介護・薬局・医療の現場でAIを毎日使っている会社のAIコンサルティング。机上の戦略ではなく、現場で動くAIを。戦略策定・導入支援・研修・継続伴走の4サービス。',
  alternates: {
    canonical: LAB_URL,
  },
  openGraph: {
    title: 'sokoe AI Lab ｜ 医療・介護・福祉領域のAIコンサル',
    description: '介護・薬局・医療の現場でAIを毎日使っている会社のAIコンサルティング。',
    url: LAB_URL,
    type: 'website',
  },
};

/**
 * sokoe AI Lab LP（/consulting/）
 *
 * Step 3-D で確定したセクション構成（Phase 0 コア版）：
 * [1]  Header
 * [2]  Hero（センター集中型、思想訴求）
 * [3]  Philosophy（3つの哲学）
 * [4]  Services（4サービスグリッド）
 * [5]  Proof（自社実践4ケース）
 * [6]  Process（5ステップの進め方）
 * [7]  About Founder（共通コンポ流用）
 * [8]  FAQ（8問）
 * [9]  Last CTA（赤ベタ、無料相談予約）
 * [10] Footer
 *
 * 構造化データ：
 * - Service Schema（sokoe AI Lab）
 * - FAQPage Schema（8問）
 *
 * Phase 1 で追加予定：
 * - Insights（AI Lab 発信記事リスト）
 * - 各サービス詳細ページ（/strategy/ /implementation/ /training/ /retainer/）
 */
export default function ConsultingPage() {
  const faqSchema = createFAQSchema(labFaqsForSchema, LAB_URL);

  return (
    <>
      <JsonLd data={[sokoeAILabSchema, faqSchema]} />

      <Header />

      <main>
        <LabHero />
        <LabPhilosophy />
        <LabServices />
        <LabProcess />
        <DayAboutFounder />
        <LabFAQ />
        <LabLastCTA />
      </main>

      <Footer />
    </>
  );
}
