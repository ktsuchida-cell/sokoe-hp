import { Breadcrumb } from '@/components/Breadcrumb';
import { ComingSoon } from '@/components/ComingSoon';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { JsonLd } from '@/components/JsonLd';
import { createWebPageSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';

const PAGE_URL = `${siteConfig.url}/day-service/feature/`;

export const metadata: Metadata = {
  title: 'sokoe Day 機能一覧 ｜ sokoe',
  description:
    'sokoe Day（デイサービス向けアプリ）の 17 機能の詳細ページ。フロア業務／送迎／管理者業務の3カテゴリに分けて、各機能の画面例と運用フローを解説します。',
  alternates: { canonical: PAGE_URL },
};

const breadcrumbItems = [{ label: 'sokoe Day', href: '/day-service/' }, { label: '機能一覧' }];

export default function DayServiceFeaturePage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema({
          name: 'sokoe Day 機能一覧 ｜ sokoe',
          description: 'sokoe Day の 17 機能の詳細ページ。',
          url: PAGE_URL,
        })}
      />
      <Header />
      <main>
        <Breadcrumb items={breadcrumbItems} />
        <ComingSoon
          label="FEATURE"
          title="sokoe Day 機能一覧"
          description="各機能の詳細解説ページは現在準備中です。トップページの機能グリッド（フロア業務／送迎／管理者業務、計17機能）で概要をご確認いただくか、お問い合わせフォームより気になる機能名を添えてご連絡ください。"
          inquiry="sokoe-day-feature"
        />
      </main>
      <Footer />
    </>
  );
}
