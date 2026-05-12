import { Breadcrumb } from '@/components/Breadcrumb';
import { ComingSoon } from '@/components/ComingSoon';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { JsonLd } from '@/components/JsonLd';
import { createWebPageSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';

const PAGE_URL = `${siteConfig.url}/day-service/demo/`;

export const metadata: Metadata = {
  title: 'sokoe Day デモ予約 ｜ sokoe',
  description:
    'sokoe Day（デイサービス向けアプリ）の 30 分オンラインデモをご予約いただけます。実画面を見ながら、御施設の業務に当てはめて具体的な活用イメージをお伝えします。',
  alternates: { canonical: PAGE_URL },
};

const breadcrumbItems = [{ label: 'sokoe Day', href: '/day-service/' }, { label: 'デモ予約' }];

export default function DayServiceDemoPage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema({
          name: 'sokoe Day デモ予約 ｜ sokoe',
          description: 'sokoe Day の 30 分オンラインデモのご予約ページ。',
          url: PAGE_URL,
        })}
      />
      <Header />
      <main>
        <Breadcrumb items={breadcrumbItems} />
        <ComingSoon
          label="DEMO"
          title="sokoe Day デモ予約"
          description="オンライン予約システムは現在準備中です。お問い合わせフォームに「sokoe Day について」を選択のうえご希望日時を3つほどお書きいただければ、担当者より候補日を調整してご返信します。"
          inquiry="sokoe-day-demo"
        />
      </main>
      <Footer />
    </>
  );
}
