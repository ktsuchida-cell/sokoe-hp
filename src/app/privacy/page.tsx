import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { JsonLd } from '@/components/JsonLd';
import { LegalDocument } from '@/components/LegalDocument';
import { LegalLastCTA } from '@/components/LegalLastCTA';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { privacyArticles, privacyMeta } from '@/lib/content/privacy';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';

const SITE_URL = siteConfig.url;

const PAGE_URL = `${SITE_URL}/privacy/`;

export const metadata: Metadata = {
  title: `${privacyMeta.title} ｜ sokoe`,
  description:
    'sokoe コーポレートサイトのプライバシーポリシー。個人情報保護法に基づき、当社が取得する個人情報の取扱い、利用目的、第三者提供、Cookie の利用について定めています。',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${privacyMeta.title} ｜ sokoe`,
    description: '株式会社sokoe のプライバシーポリシー。',
    url: PAGE_URL,
    siteName: 'sokoe',
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema({
          name: `${privacyMeta.title} ｜ sokoe`,
          description: '株式会社sokoe のプライバシーポリシー。',
          url: PAGE_URL,
          datePublished: privacyMeta.publishedAt,
          dateModified: privacyMeta.updatedAt,
        })}
      />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'ホーム', url: '/' },
          { name: 'プライバシーポリシー', url: '/privacy/' },
        ])}
      />

      <Header />
      <main>
        <Breadcrumb items={[{ label: 'プライバシーポリシー' }]} />

        <PageHero
          label="PRIVACY POLICY"
          title={privacyMeta.title}
          lead="株式会社sokoe は、お客様の個人情報の保護を重要な責務と認識しています。当社が取り扱う個人情報の取得・利用・管理について、以下のとおり定めます。"
          updatedAt={privacyMeta.updatedAtLabel}
        />

        <Section spacing="md">
          <Container size="default">
            <LegalDocument articles={privacyArticles} />
            <p className="mt-16 text-sm text-charcoal-muted">
              制定日：{privacyMeta.publishedAtLabel}
              <br />
              最終更新日：{privacyMeta.updatedAtLabel}
              <br />
              株式会社sokoe
            </p>
          </Container>
        </Section>

        <LegalLastCTA description="本ポリシーに関するご質問、個人情報の取扱いに関するご相談は、お問い合わせフォームよりお寄せください。" />
      </main>
      <Footer />
    </>
  );
}
