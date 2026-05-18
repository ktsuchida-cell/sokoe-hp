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
import { type FeatureCategoryId, featureCategories, featureDetails } from '@/lib/dayFeatureDetails';
import { createWebPageSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type RouteParams = { category: string };

const validIds: FeatureCategoryId[] = ['floor', 'transport', 'backoffice'];

function findCategory(slug: string) {
  if (!validIds.includes(slug as FeatureCategoryId)) return null;
  return featureCategories.find((c) => c.id === slug) ?? null;
}

export function generateStaticParams(): RouteParams[] {
  return validIds.map((id) => ({ category: id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = findCategory(category);
  if (!cat) return { title: 'sokoe Day 機能' };

  const url = `${siteConfig.url}/day-service/feature/${cat.id}/`;
  return {
    title: `sokoe Day ${cat.label} 機能詳細 ｜ sokoe`,
    description: `sokoe Day（デイサービス向けアプリ）の「${cat.label}」カテゴリの機能を、画面例と運用フロー付きで詳しく紹介。`,
    alternates: { canonical: url },
  };
}

/**
 * sokoe Day 機能詳細ページ（カテゴリ別）
 *
 * `/day-service/feature/floor/` `/transport/` `/backoffice/` の 3 ルートに対応。
 * 各カテゴリに属する機能だけを縦並びで表示する。
 */
export default async function DayServiceFeatureCategoryPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { category } = await params;
  const cat = findCategory(category);
  if (!cat) {
    notFound();
  }

  const pageUrl = `${siteConfig.url}/day-service/feature/${cat.id}/`;
  const features = featureDetails.filter((f) => f.category === cat.id);
  const breadcrumbItems = [
    { label: 'sokoe Day', href: '/day-service/' },
    { label: '機能一覧', href: '/day-service/feature/' },
    { label: cat.label },
  ];

  return (
    <>
      <JsonLd
        data={createWebPageSchema({
          name: `sokoe Day ${cat.label} 機能詳細 ｜ sokoe`,
          description: `sokoe Day の「${cat.label}」カテゴリの機能を画面例と運用フローで紹介。`,
          url: pageUrl,
        })}
      />
      <Header />

      <main>
        <Breadcrumb items={breadcrumbItems} />

        {/* ページヘッダー */}
        <Section spacing="md">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Label className="mb-5">{cat.englishLabel}</Label>
              <Heading level="h1" serif className="mb-6">
                sokoe Day
                <br className="hidden md:block" /> {cat.label}の機能詳細
              </Heading>
              <p className="text-stone text-base md:text-lg leading-[1.85]">{cat.lead}</p>
            </div>

            {/* 他カテゴリへのリンク */}
            <nav
              aria-label="他カテゴリへの移動"
              className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-3"
            >
              {featureCategories.map((c) => {
                const isCurrent = c.id === cat.id;
                return (
                  <Link
                    key={c.id}
                    href={`/day-service/feature/${c.id}/`}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={
                      isCurrent
                        ? 'inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-5 py-2 text-sm font-medium text-white'
                        : 'inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2 text-sm font-medium text-ink hover:border-ink transition-colors'
                    }
                  >
                    {c.label}
                    <span className={isCurrent ? 'text-xs text-white/70' : 'text-xs text-mid'}>
                      {featureDetails.filter((f) => f.category === c.id).length} 機能
                    </span>
                  </Link>
                );
              })}
            </nav>
          </Container>
        </Section>

        {/* カテゴリの機能ブロック */}
        <Section spacing="lg" bordered>
          <Container>
            <div className="space-y-20 md:space-y-28">
              {features.map((feature, i) => (
                <DayFeatureDetailBlock key={feature.id} feature={feature} reverse={i % 2 === 1} />
              ))}
            </div>
          </Container>
        </Section>

        {/* 一覧 + Day LP へ戻る */}
        <Section spacing="md" bordered>
          <Container>
            <div className="text-center space-y-4">
              <p className="text-stone text-base md:text-lg leading-[1.85]">
                16 機能を 1 ページで俯瞰したい方は、機能一覧ページへ。
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href="/day-service/feature/" className="inline-block">
                  <Button variant="secondary" size="md">
                    16 機能の一覧を見る
                  </Button>
                </Link>
                <Link href="/day-service/" className="inline-block">
                  <Button variant="ghost" size="md">
                    sokoe Day トップへ
                  </Button>
                </Link>
              </div>
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
