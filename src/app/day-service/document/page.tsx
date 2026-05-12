import { Breadcrumb } from '@/components/Breadcrumb';
import { ComingSoon } from '@/components/ComingSoon';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { JsonLd } from '@/components/JsonLd';
import { createWebPageSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';

const PAGE_URL = `${siteConfig.url}/day-service/document/`;

export const metadata: Metadata = {
  title: 'sokoe Day 資料ダウンロード ｜ sokoe',
  description:
    'sokoe Day（デイサービス向けアプリ）の機能概要・料金・導入事例をまとめた資料をご請求いただけます。担当者より2営業日以内にダウンロード URL をご案内します。',
  alternates: { canonical: PAGE_URL },
};

const breadcrumbItems = [
  { label: 'sokoe Day', href: '/day-service/' },
  { label: '資料ダウンロード' },
];

export default function DayServiceDocumentPage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema({
          name: 'sokoe Day 資料ダウンロード ｜ sokoe',
          description: 'sokoe Day の機能概要・料金・導入事例をまとめた資料のご請求ページ。',
          url: PAGE_URL,
        })}
      />
      <Header />
      <main>
        <Breadcrumb items={breadcrumbItems} />
        <ComingSoon
          label="DOCUMENT"
          title="sokoe Day 資料ダウンロード"
          description="自動ダウンロードフォームは現在準備中です。お問い合わせフォームに「sokoe Day について」を選択のうえご連絡いただければ、担当者より資料をお送りします。"
          inquiry="sokoe-day-document"
        />
      </main>
      <Footer />
    </>
  );
}
