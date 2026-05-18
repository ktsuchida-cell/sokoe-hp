import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { JsonLd } from '@/components/JsonLd';
import { LegalDocument } from '@/components/LegalDocument';
import { LegalLastCTA } from '@/components/LegalLastCTA';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { termsArticles, termsMeta } from '@/lib/content/terms';
import { createWebPageSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';

const SITE_URL = siteConfig.url;

const PAGE_URL = `${SITE_URL}/terms/`;

export const metadata: Metadata = {
  title: `${termsMeta.title} ｜ sokoe`,
  description:
    'sokoe コーポレートサイトの利用規約。本サイトの利用条件、著作権、禁止事項、免責事項、準拠法等を定めています。',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${termsMeta.title} ｜ sokoe`,
    description: '株式会社ソコエ コーポレートサイトの利用規約。',
    url: PAGE_URL,
    siteName: 'sokoe',
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema({
          name: `${termsMeta.title} ｜ sokoe`,
          description: '株式会社ソコエ コーポレートサイトの利用規約。',
          url: PAGE_URL,
          datePublished: termsMeta.publishedAt,
          dateModified: termsMeta.updatedAt,
        })}
      />
      <Header />
      <main>
        <Breadcrumb items={[{ label: '利用規約' }]} />

        <PageHero
          label="TERMS OF USE"
          title={termsMeta.title}
          lead="本ウェブサイト「sokoe.co.jp」をご利用いただくにあたって、以下の規約にご同意ください。本サイトの利用をもって、本規約に同意したものとみなされます。"
          updatedAt={termsMeta.updatedAtLabel}
        />

        <Section spacing="md">
          <Container size="default">
            <LegalDocument articles={termsArticles} />
            <p className="mt-16 text-sm text-charcoal-muted">
              制定日：{termsMeta.publishedAtLabel}
              <br />
              最終更新日：{termsMeta.updatedAtLabel}
              <br />
              株式会社ソコエ
            </p>
          </Container>
        </Section>

        <LegalLastCTA description="本規約に関するご質問は、お問い合わせフォームよりお寄せください。" />
      </main>
      <Footer />
    </>
  );
}
