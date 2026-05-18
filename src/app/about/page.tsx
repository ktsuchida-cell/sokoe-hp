import { Breadcrumb } from '@/components/Breadcrumb';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { type InfoRow, InfoTable } from '@/components/InfoTable';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { ProseSection } from '@/components/ProseSection';
import { createWebPageSchema, localBusinessLetsKawanishi, organizationSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';

const SITE_URL = siteConfig.url;

export const metadata: Metadata = {
  title: '会社概要 ｜ sokoe',
  description:
    '株式会社sokoe の会社概要。デイサービス・介護施設・薬局を運営する会社が、医療・介護・福祉領域のソフトウェアと AI コンサルティングを提供します。本社：大阪府大阪市淀川区。',
  alternates: { canonical: `${SITE_URL}/about/` },
  openGraph: {
    title: '会社概要 ｜ sokoe',
    description:
      'デイサービス・介護施設・薬局を運営する会社が、医療・介護・福祉領域のソフトウェアと AI コンサルティングを提供。',
    url: `${SITE_URL}/about/`,
    siteName: 'sokoe',
    locale: 'ja_JP',
    type: 'website',
  },
};

const companyInfoRows: InfoRow[] = [
  { label: '会社名', value: '株式会社sokoe（ソコエ）' },
  { label: '英語表記', value: 'sokoe Inc.' },
  { label: '設立', value: '2026年5月1日' },
  { label: '代表取締役', value: '槌田 一輝' },
  {
    label: '本社所在地',
    value: (
      <address className="not-italic">
        〒532-0033
        <br />
        大阪府大阪市淀川区新高3丁目7番17-603号
      </address>
    ),
  },
  {
    label: '事業内容',
    value: (
      <ul className="space-y-1.5">
        <li>・医療・介護・福祉領域のソフトウェア開発</li>
        <li>・医療・介護・福祉領域の AI コンサルティング</li>
      </ul>
    ),
  },
  {
    label: 'お問い合わせ',
    value: (
      <a
        href="mailto:k.tsuchida@phelix-hd.com"
        className="text-brand-red transition-colors hover:underline"
      >
        k.tsuchida@phelix-hd.com
      </a>
    ),
  },
];

const breadcrumbItems = [{ label: '会社情報' }];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessLetsKawanishi} />
      <JsonLd
        data={createWebPageSchema({
          name: '会社概要 ｜ sokoe',
          description: '株式会社sokoe の会社概要。',
          url: `${SITE_URL}/about/`,
          datePublished: '2026-05-12',
          dateModified: '2026-05-19',
        })}
      />

      <Header />
      <main>
        <Breadcrumb items={breadcrumbItems} />

        <PageHero
          label="ABOUT — COMPANY"
          title="デイサービス・介護施設・薬局を運営する会社が、医療・介護の現場を変える。"
          lead="株式会社sokoe は、自社でデイサービス・介護施設・薬局を運営しながら、医療・介護・福祉領域のソフトウェアと AI コンサルティングを提供する会社です。"
        />

        {/* ミッション */}
        <ProseSection eyebrow="MISSION" title="現場を、本来の仕事に戻す。" serif>
          <p>
            医療・介護の現場には、本来やる必要のない雑務が積み上がっています。紙、情報伝達のすれ違い、終わらない記録、別アプリの操作
            ── その雑務を消して、現場を本来の仕事に戻す。
          </p>
          <p>
            介護施設の本来の仕事とは、利用者と家族に向き合うこと。利用者が安心して過ごせること、心地よく過ごせること、楽しく過ごせること。
          </p>
          <p>私たち sokoe の事業すべてが、この一点を目的にしています。</p>
        </ProseSection>

        {/* 会社情報テーブル（メッセージ層の下に事実層を残す） */}
        <ProseSection eyebrow="COMPANY INFO" title="会社情報">
          <InfoTable rows={companyInfoRows} caption="株式会社sokoe 会社情報" />
        </ProseSection>
      </main>
      <Footer />
    </>
  );
}
