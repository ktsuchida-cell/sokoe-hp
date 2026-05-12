import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { JsonLd } from '@/components/JsonLd';
import { LegalDocument } from '@/components/LegalDocument';
import { LegalLastCTA } from '@/components/LegalLastCTA';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { disclaimerArticles, disclaimerMeta } from '@/lib/content/disclaimer';
import { createWebPageSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';

const SITE_URL = siteConfig.url;

const PAGE_URL = `${SITE_URL}/disclaimer/`;

export const metadata: Metadata = {
  title: `${disclaimerMeta.title} ｜ sokoe`,
  description:
    'sokoe コーポレートサイトの免責事項。掲載情報の正確性、医療・介護関連情報、外部リンク等に関する免責を定めています。',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${disclaimerMeta.title} ｜ sokoe`,
    description: '株式会社sokoe コーポレートサイトの免責事項。',
    url: PAGE_URL,
    siteName: 'sokoe',
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema({
          name: `${disclaimerMeta.title} ｜ sokoe`,
          description: '株式会社sokoe コーポレートサイトの免責事項。',
          url: PAGE_URL,
          datePublished: disclaimerMeta.publishedAt,
          dateModified: disclaimerMeta.updatedAt,
        })}
      />
      <Header />
      <main>
        <Breadcrumb items={[{ label: '免責事項' }]} />

        <PageHero
          label="DISCLAIMER"
          title={disclaimerMeta.title}
          lead="株式会社sokoe が運営する本ウェブサイトの利用にあたり、以下の免責事項にご同意ください。特に医療・介護・薬学に関する情報は、専門家への相談の代替となるものではありません。"
          updatedAt={disclaimerMeta.updatedAtLabel}
        />

        <Section spacing="md">
          <Container size="default">
            <LegalDocument articles={disclaimerArticles} />
            <p className="mt-16 text-sm text-charcoal-muted">
              制定日：{disclaimerMeta.publishedAtLabel}
              <br />
              最終更新日：{disclaimerMeta.updatedAtLabel}
              <br />
              株式会社sokoe
            </p>
          </Container>
        </Section>

        <LegalLastCTA description="本免責事項に関するご質問は、お問い合わせフォームよりお寄せください。" />
      </main>
      <Footer />
    </>
  );
}
