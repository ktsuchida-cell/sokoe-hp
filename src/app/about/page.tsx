import { Breadcrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { type InfoRow, InfoTable } from '@/components/InfoTable';
import { JsonLd } from '@/components/JsonLd';
import { Label } from '@/components/Label';
import { PageHero } from '@/components/PageHero';
import { ProseSection } from '@/components/ProseSection';
import { Section } from '@/components/Section';
import { Timeline, type TimelineItem } from '@/components/Timeline';
import { createWebPageSchema, localBusinessLetsKawanishi, organizationSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = siteConfig.url;

export const metadata: Metadata = {
  title: '会社概要 ｜ sokoe',
  description:
    '株式会社sokoe の会社概要。介護施設を運営する会社が、ヘルスケア領域のソフトウェアと AI コンサルティングを提供します。本社：大阪府大阪市淀川区。代表取締役 槌田一輝（レッツ倶楽部川西能勢口 施設長代理／株式会社ピースファーマシー 在籍）。',
  alternates: { canonical: `${SITE_URL}/about/` },
  openGraph: {
    title: '会社概要 ｜ sokoe',
    description:
      '介護施設を運営する会社が、ヘルスケア領域のソフトウェアと AI コンサルティングを提供。',
    url: `${SITE_URL}/about/`,
    siteName: 'sokoe',
    locale: 'ja_JP',
    type: 'website',
  },
};

const companyInfoRows: InfoRow[] = [
  { label: '会社名', value: '株式会社sokoe（カブシキガイシャ ソコエ）' },
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
    label: '関連施設',
    value: (
      <>
        レッツ倶楽部川西能勢口（兵庫県川西市・1日型デイサービス）
        <br />
        <span className="text-sm text-charcoal-muted">
          ※代表取締役が施設長代理を兼任。sokoe Day の自社運用施設
        </span>
      </>
    ),
  },
  {
    label: '事業内容',
    value: (
      <ul className="space-y-1.5">
        <li>・ヘルスケア領域のソフトウェア開発</li>
        <li>・ヘルスケア領域の AI コンサルティング</li>
      </ul>
    ),
  },
  {
    label: 'お問い合わせ',
    value: (
      <a
        href="mailto:info@sokoe.co.jp"
        className="text-brand-red transition-colors hover:underline"
      >
        info@sokoe.co.jp
      </a>
    ),
  },
];

const timelineItems: TimelineItem[] = [
  {
    year: '2026',
    month: '4月',
    event: 'sokoe Day 自社運営施設で本番稼働開始',
    detail:
      'レッツ倶楽部川西能勢口（兵庫県川西市）で、デイサービス向けアプリ sokoe Day の本番運用を開始。',
  },
  {
    year: '2026',
    month: '5月',
    event: '株式会社sokoe 設立',
    detail:
      '大阪府大阪市淀川区に本社を構え、ヘルスケア領域のソフトウェア開発と AI コンサルティング事業を開始。',
  },
  {
    year: '2027',
    event: 'sokoe Facility 公開予定',
    detail: '住宅型・施設型介護向けシステムを Phase 2 で公開予定。',
  },
  {
    year: '2027',
    event: 'sokoe Pharma 公開予定',
    detail: '薬局向けアプリを Phase 3 で公開予定。',
  },
];

const businesses = [
  {
    name: 'sokoe Day',
    desc: 'デイサービス向けアプリ。1日型・半日型・ハイブリッド型に対応。',
    status: 'Now Live',
    href: '/day-service/',
  },
  {
    name: 'sokoe AI Lab',
    desc: 'ヘルスケア領域の AI コンサルティング。戦略策定／導入支援／研修／顧問契約。',
    status: 'Now Live',
    href: '/consulting/',
  },
  {
    name: 'sokoe Facility',
    desc: '介護施設向けシステム。住宅型・施設型に対応予定。',
    status: 'Coming Soon',
    href: null,
  },
  {
    name: 'sokoe Pharma',
    desc: '薬局向けアプリ。処方箋管理・服薬指導等に対応予定。',
    status: 'Coming Soon',
    href: null,
  },
] as const;

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
          dateModified: '2026-05-12',
        })}
      />

      <Header />
      <main>
        <Breadcrumb items={breadcrumbItems} />

        <PageHero
          label="ABOUT — COMPANY"
          title="介護施設を運営する会社が、ヘルスケアの現場を変える。"
          lead="株式会社sokoe は、自社で介護施設を運営しながら、ヘルスケア領域のソフトウェアと AI コンサルティングを提供する会社です。"
        />

        {/* ミッション */}
        <ProseSection eyebrow="MISSION" title="現場を、本来の仕事に戻す。" serif>
          <p>
            ヘルスケアの現場には、本来やる必要のない雑務が積み上がっています。紙、情報伝達のすれ違い、終わらない記録、別アプリの操作
            ── その雑務を消して、現場を本来の仕事に戻す。
          </p>
          <p>
            介護施設の本来の仕事とは、利用者と家族に向き合うこと。利用者が安心して過ごせること、心地よく過ごせること、楽しく過ごせること。
          </p>
          <p>私たち sokoe の事業すべてが、この一点を目的にしています。</p>
        </ProseSection>

        {/* 会社情報テーブル */}
        <ProseSection eyebrow="COMPANY INFO" title="会社情報">
          <InfoTable rows={companyInfoRows} caption="株式会社sokoe 会社情報" />
        </ProseSection>

        {/* 事業ポートフォリオ */}
        <Section spacing="md" className="bg-bg-muted">
          <Container size="default">
            <Label className="mb-4">BUSINESS</Label>
            <Heading level="h2" className="mb-12">
              4つの事業
            </Heading>
            <div className="grid gap-6 md:grid-cols-2">
              {businesses.map((b, i) => {
                const ordinal = String(i + 1).padStart(2, '0');
                const statusClass =
                  b.status === 'Now Live' ? 'text-brand-red' : 'text-charcoal-muted';
                if (b.href) {
                  return (
                    <Link key={b.name} href={b.href} className="block">
                      <Card interactive className="h-full">
                        <div className="flex items-start justify-between gap-4">
                          <div className="font-display text-3xl tracking-tight text-ink">
                            {ordinal}
                          </div>
                          <Label className={statusClass}>{b.status}</Label>
                        </div>
                        <h3 className="mt-6 text-xl font-medium text-ink">{b.name}</h3>
                        <p className="mt-3 text-base leading-relaxed text-charcoal">{b.desc}</p>
                        <p className="mt-6 text-sm text-brand-red">詳しく見る →</p>
                      </Card>
                    </Link>
                  );
                }
                return (
                  <Card key={b.name} className="h-full">
                    <div className="flex items-start justify-between gap-4">
                      <div className="font-display text-3xl tracking-tight text-ink">{ordinal}</div>
                      <Label className={statusClass}>{b.status}</Label>
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-ink">{b.name}</h3>
                    <p className="mt-3 text-base leading-relaxed text-charcoal">{b.desc}</p>
                  </Card>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* 関連施設 */}
        <ProseSection eyebrow="OUR FACILITY" title="自社で運営している介護施設があります。">
          <p>
            sokoe の代表取締役 槌田一輝は、兵庫県川西市の <strong>レッツ倶楽部川西能勢口</strong>{' '}
            （1日型デイサービス）で施設長代理を兼任しています。デイサービス向けアプリ sokoe Day
            は、この施設で 2026年4月から本番稼働中です。
          </p>
          <p>
            私たちが作るソフトウェアと AI
            は、机上の構想ではありません。施設長代理が毎日使い、現場スタッフからのフィードバックを反映しながら磨き上げているものです。
          </p>
        </ProseSection>

        {/* 沿革 */}
        <ProseSection eyebrow="HISTORY" title="沿革・ロードマップ" variant="muted">
          <Timeline items={timelineItems} />
        </ProseSection>

        {/* CTA */}
        <Section spacing="md">
          <Container size="default">
            <div className="border-t border-border-soft pt-12 text-center">
              <Heading level="h3" className="mb-4">
                もっと詳しく知りたい方へ
              </Heading>
              <p className="mb-8 text-base text-charcoal">
                代表のプロフィールや、創業の背景をお読みください。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about/profile/">
                  <Button variant="secondary">代表プロフィール</Button>
                </Link>
                <Link href="/about/founder-message/">
                  <Button variant="secondary">代表メッセージ</Button>
                </Link>
                <Link href="/contact/">
                  <Button variant="primary">お問い合わせ</Button>
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
