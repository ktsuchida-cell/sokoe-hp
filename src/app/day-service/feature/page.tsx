import { Breadcrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { DayFeatureDetailBlock } from '@/components/DayFeatureDetailBlock';
import { DayLastCTA } from '@/components/DayLastCTA';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { JsonLd } from '@/components/JsonLd';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { featureCategories, featureDetails } from '@/lib/dayFeatureDetails';
import { createWebPageSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';
import Link from 'next/link';

const PAGE_URL = `${siteConfig.url}/day-service/feature/`;

export const metadata: Metadata = {
  title: 'sokoe Day 機能一覧 ｜ sokoe',
  description:
    'sokoe Day（デイサービス向けアプリ）の 16 機能を、フロア業務／送迎業務／管理者業務の 3 カテゴリで詳しく紹介。各機能の画面例と運用フローを掲載しています。',
  alternates: { canonical: PAGE_URL },
};

const breadcrumbItems = [{ label: 'sokoe Day', href: '/day-service/' }, { label: '機能一覧' }];

export default function DayServiceFeaturePage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema({
          name: 'sokoe Day 機能一覧 ｜ sokoe',
          description: 'sokoe Day の 16 機能の詳細ページ。',
          url: PAGE_URL,
        })}
      />
      <Header />

      <main>
        <Breadcrumb items={breadcrumbItems} />

        {/* ページヘッダー */}
        <Section spacing="md">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Label className="mb-5">FEATURE DETAILS</Label>
              <Heading level="h1" serif className="mb-6">
                sokoe Day の 16 機能を、
                <br className="hidden md:block" />
                ひとつずつ解説します。
              </Heading>
              <p className="text-stone text-base md:text-lg leading-[1.85]">
                フロア業務・送迎業務・管理者業務の 3 カテゴリで構成する 16 機能。
                <br className="hidden md:block" />
                それぞれの画面と、自社運営施設で実証している運用フローをご紹介します。
              </p>
            </div>

            {/* カテゴリ目次 */}
            <nav
              aria-label="機能カテゴリ目次"
              className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-3"
            >
              {featureCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2 text-sm font-medium text-ink hover:border-ink transition-colors"
                >
                  {cat.label}
                  <span className="text-xs text-mid">
                    {featureDetails.filter((f) => f.category === cat.id).length} 機能
                  </span>
                </a>
              ))}
            </nav>
          </Container>
        </Section>

        {/* カテゴリ別 機能ブロック */}
        {featureCategories.map((cat) => {
          const features = featureDetails.filter((f) => f.category === cat.id);
          return (
            <Section
              key={cat.id}
              variant={cat.id === 'transport' ? 'soft' : 'default'}
              spacing="lg"
              bordered
            >
              <Container>
                <div
                  id={cat.id}
                  className="max-w-3xl mx-auto text-center mb-14 md:mb-20 scroll-mt-24"
                >
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                    {cat.englishLabel}
                  </p>
                  <Heading level="h2" serif className="mb-5">
                    {cat.label}
                  </Heading>
                  <p className="text-stone text-base md:text-lg leading-[1.85]">{cat.lead}</p>
                </div>

                <div className="space-y-20 md:space-y-28">
                  {features.map((feature, i) => (
                    <DayFeatureDetailBlock
                      key={feature.id}
                      feature={feature}
                      reverse={i % 2 === 1}
                    />
                  ))}
                </div>
              </Container>
            </Section>
          );
        })}

        {/* 中間 CTA: Day LP へ戻る */}
        <Section spacing="md" bordered>
          <Container>
            <div className="text-center">
              <p className="text-stone text-base md:text-lg leading-[1.85] mb-6">
                sokoe Day の概要・料金・導入事例は、こちらのページにまとめています。
              </p>
              <Link href="/day-service/" className="inline-block">
                <Button variant="secondary" size="md">
                  sokoe Day トップへ
                </Button>
              </Link>
            </div>
          </Container>
        </Section>

        {/* 最終 CTA */}
        <DayLastCTA />
      </main>

      <Footer />
    </>
  );
}
