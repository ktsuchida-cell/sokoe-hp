import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { type InfoRow, InfoTable } from '@/components/InfoTable';
import { JsonLd } from '@/components/JsonLd';
import { LegalLastCTA } from '@/components/LegalLastCTA';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { type LegalDataRow, legalDataRows, legalMeta } from '@/lib/content/legal';
import { createWebPageSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';

const SITE_URL = siteConfig.url;

const PAGE_URL = `${SITE_URL}/legal/`;

export const metadata: Metadata = {
  title: `${legalMeta.title} ｜ sokoe`,
  description:
    '特定商取引法に基づく表記。販売事業者、所在地、連絡先、価格、支払方法、引渡時期、解約条件等を記載しています。',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${legalMeta.title} ｜ sokoe`,
    description: '株式会社sokoe の特定商取引法に基づく表記。',
    url: PAGE_URL,
    siteName: 'sokoe',
    locale: 'ja_JP',
    type: 'website',
  },
};

/**
 * 純粋データ（string | string[]）を InfoTable の value (ReactNode) に変換。
 * 文字列配列は <span block> で改行表示する。
 */
function toInfoRows(rows: LegalDataRow[]): InfoRow[] {
  return rows.map((r) => ({
    label: r.label,
    value:
      typeof r.value === 'string' ? (
        r.value
      ) : (
        <>
          {r.value.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </>
      ),
  }));
}

export default function LegalPage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema({
          name: `${legalMeta.title} ｜ sokoe`,
          description: '株式会社sokoe の特定商取引法に基づく表記。',
          url: PAGE_URL,
          datePublished: legalMeta.publishedAt,
          dateModified: legalMeta.updatedAt,
        })}
      />
      <Header />
      <main>
        <Breadcrumb items={[{ label: '特定商取引法に基づく表記' }]} />

        <PageHero
          label="LEGAL NOTICE"
          title={legalMeta.title}
          lead="特定商取引に関する法律 第11条 に基づき、当社の販売事業者情報、価格、支払方法、引渡時期、解約条件等を以下のとおり記載します。"
          updatedAt={legalMeta.updatedAtLabel}
        />

        <Section spacing="md">
          <Container size="default">
            <InfoTable
              rows={toInfoRows(legalDataRows)}
              caption="特定商取引法に基づく表記"
              labelWidth="wide"
            />
            <p className="mt-16 text-sm text-charcoal-muted">
              制定日：{legalMeta.publishedAtLabel}
              <br />
              最終更新日：{legalMeta.updatedAtLabel}
              <br />
              株式会社sokoe
            </p>
          </Container>
        </Section>

        <LegalLastCTA description="本表記に関するご質問は、お問い合わせフォームまたは k.tsuchida@phelix-hd.com までお寄せください。" />
      </main>
      <Footer />
    </>
  );
}
