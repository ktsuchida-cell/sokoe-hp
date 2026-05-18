import { Breadcrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { ProseSection } from '@/components/ProseSection';
import { Section } from '@/components/Section';
import { SignatureBlock } from '@/components/SignatureBlock';
import { founderMessage } from '@/lib/content/founder-message';
import { createArticleSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = siteConfig.url;
const PAGE_URL = `${SITE_URL}/about/founder-message/`;

export const metadata: Metadata = {
  title: `${founderMessage.title} ｜ 代表メッセージ ｜ sokoe`,
  description:
    '「これ、本来やる必要ないよね」── 株式会社ソコエ 代表取締役 槌田一輝が、介護現場の違和感、薬学・IT・薬局・介護を横断したキャリア、自社運営施設で AI を本番運用するまでの経緯を語ります。',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${founderMessage.title} ｜ 代表メッセージ`,
    description:
      '株式会社ソコエ 代表取締役 槌田一輝による創業メッセージ。デイサービス・介護施設・薬局を運営する会社が、医療・介護の現場をソフトウェアと AI で変えていく。',
    url: PAGE_URL,
    siteName: 'sokoe',
    locale: 'ja_JP',
    type: 'article',
    publishedTime: `${founderMessage.publishedAt}T10:00:00+09:00`,
    modifiedTime: `${founderMessage.updatedAt}T10:00:00+09:00`,
    authors: [`${SITE_URL}/about/profile/`],
  },
};

const breadcrumbItems = [{ label: '会社情報', href: '/about/' }, { label: '代表メッセージ' }];

export default function FounderMessagePage() {
  return (
    <>
      <JsonLd
        data={createArticleSchema({
          headline: founderMessage.title,
          description:
            '株式会社ソコエ 代表取締役 槌田一輝による創業メッセージ。介護現場の違和感、薬学・IT・薬局・介護を横断したキャリア、自社運営施設で AI を本番運用するまでの経緯。',
          url: PAGE_URL,
          datePublished: founderMessage.publishedAt,
          dateModified: founderMessage.updatedAt,
          articleSection: '代表メッセージ',
          wordCount: founderMessage.estimatedWordCount,
        })}
      />
      <Header />
      <main>
        <Breadcrumb items={breadcrumbItems} />

        <PageHero
          label="FOUNDER MESSAGE"
          title={founderMessage.title}
          lead="株式会社ソコエ 代表取締役 槌田一輝 ── 介護現場の施設長代理として、医療・介護の違和感をソフトウェアと AI で消そうとしている、その理由について。"
          updatedAt={founderMessage.updatedAtLabel}
        />

        {/* 本文 */}
        <ProseSection containerSize="narrow">
          {founderMessage.body.map((block, i) => {
            const key = `${block.type}-${i}-${block.text.slice(0, 20)}`;
            if (block.type === 'h2') {
              return (
                <h2
                  key={key}
                  className="!font-display !text-2xl !font-medium !tracking-tight md:!text-3xl"
                >
                  {block.text}
                </h2>
              );
            }
            return <p key={key}>{block.text}</p>;
          })}

          <SignatureBlock
            name="槌田 一輝"
            roles={[
              '株式会社ソコエ 代表取締役',
              'レッツ倶楽部川西能勢口 施設長代理',
              '株式会社ピースファーマシー 在籍',
            ]}
            profileHref="/about/profile/"
            isoDate={founderMessage.publishedAt}
            dateLabel={founderMessage.publishedAtLabel}
          />
        </ProseSection>

        {/* 関連リンク */}
        <Section spacing="md" className="bg-bg-muted">
          <Container size="default">
            <Heading level="h3" className="mb-8 text-center">
              関連リンク
            </Heading>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {founderMessage.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group block border border-border-soft bg-bg-base p-6 transition-colors hover:border-ink"
                >
                  <p className="text-base font-medium text-ink">{link.label}</p>
                  <p className="mt-2 text-sm text-brand-red transition-transform group-hover:translate-x-1">
                    詳しく見る →
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section spacing="md">
          <Container size="default">
            <div className="border-t border-border-soft pt-12 text-center">
              <Heading level="h3" className="mb-4">
                話を聞いてみたい方へ
              </Heading>
              <p className="mb-8 text-base text-charcoal">
                30分の無料相談を承っています。お気軽にどうぞ。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/consulting/">
                  <Button variant="primary">無料相談を予約</Button>
                </Link>
                <Link href="/contact/">
                  <Button variant="secondary">お問い合わせ</Button>
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
