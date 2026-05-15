import { Breadcrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { type InfoRow, InfoTable } from '@/components/InfoTable';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { ProseSection } from '@/components/ProseSection';
import { Section } from '@/components/Section';
import { Timeline, type TimelineItem } from '@/components/Timeline';
import { personSchemaDetailed, profilePageSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = siteConfig.url;

export const metadata: Metadata = {
  title: '代表プロフィール ｜ 槌田一輝 ｜ sokoe',
  description:
    '株式会社sokoe 代表取締役 槌田一輝のプロフィール。薬学部卒業後、株式会社ピースファーマシーで薬局運営に携わり、現在は同社運営のレッツ倶楽部川西能勢口（兵庫県川西市・1日型デイサービス）施設長代理を兼任。2026年5月に sokoe を設立。',
  alternates: { canonical: `${SITE_URL}/about/profile/` },
  openGraph: {
    title: '代表プロフィール ｜ 槌田一輝',
    description:
      '株式会社sokoe 代表取締役 槌田一輝。薬学部卒業。レッツ倶楽部川西能勢口 施設長代理。',
    url: `${SITE_URL}/about/profile/`,
    siteName: 'sokoe',
    locale: 'ja_JP',
    type: 'profile',
  },
};

const profileInfoRows: InfoRow[] = [
  { label: '氏名', value: '槌田 一輝（つちだ かずき）' },
  { label: '役職', value: '株式会社sokoe 代表取締役' },
  {
    label: '兼任',
    value: (
      <>
        株式会社ピースファーマシー 在籍
        <br />
        レッツ倶楽部川西能勢口 施設長代理
        <br />
        <span className="text-sm text-charcoal-muted">
          （兵庫県川西市・1日型デイサービス／ピースファーマシー運営）
        </span>
      </>
    ),
  },
  {
    label: '専門領域',
    value: (
      <ul className="space-y-1.5">
        <li>・介護施設運営／デイサービス管理</li>
        <li>・医療・介護・福祉領域の AI 導入</li>
        <li>・薬局運営</li>
        <li>・医療・介護 SaaS の設計</li>
      </ul>
    ),
  },
];

const careerTimeline: TimelineItem[] = [
  {
    year: '2019',
    month: '4月',
    event: '薬学部 入学',
    detail: '薬学部に入学。',
  },
  {
    year: '2020',
    event: '在学中、IT 企業でインターン（約3年の実務経験）',
    detail:
      '薬学部に在学しながら IT 企業でインターンを経験。ソフトウェア開発と業務改善の現場感覚を養う。',
  },
  {
    year: '2025',
    month: '3月',
    event: '薬学部 卒業',
    detail: '薬学部を卒業。',
  },
  {
    year: '2025',
    event: '株式会社ピースファーマシー 入社',
    detail: '薬局運営を行う株式会社ピースファーマシーに入社。薬局の現場業務に従事。',
  },
  {
    year: '2025',
    month: '8月',
    event: 'レッツ倶楽部川西能勢口 施設長代理 就任',
    detail:
      '同社が運営する1日型デイサービス「レッツ倶楽部川西能勢口」（兵庫県川西市）で施設長代理として現場業務を主導。薬局・介護を横断する立場から、現場の業務効率化に取り組む。',
  },
  {
    year: '2026',
    month: '4月',
    event: 'sokoe Day 自社施設で本番稼働開始',
    detail:
      '自ら設計したデイサービス向けアプリ sokoe Day を、レッツ倶楽部川西能勢口で本番運用開始。',
  },
  {
    year: '2026',
    month: '5月',
    event: '株式会社sokoe 設立',
    detail:
      '大阪府大阪市淀川区に株式会社sokoe を設立。医療・介護・福祉領域のソフトウェアと AI コンサルティング事業を開始。',
  },
];

const expertiseAreas = [
  {
    title: '介護施設運営',
    detail: '現役施設長代理として、1日型デイサービスの日々のオペレーションに従事。',
  },
  {
    title: 'AI 導入の現場実装',
    detail: '自社施設で Claude API・AI OCR・Firebase 等を組み合わせた業務 AI を本番運用。',
  },
  {
    title: '薬局運営の知見',
    detail:
      '薬局を運営する株式会社ピースファーマシーで薬局現場に携わった経験。服薬・健康領域に対する理解と、現場オペレーション設計の引き出し。',
  },
  {
    title: '医療・介護 SaaS の設計',
    detail: '半日型・1日型・ハイブリッド型に対応するデイサービスアプリ sokoe Day を設計・運用。',
  },
];

const breadcrumbItems = [{ label: '会社情報', href: '/about/' }, { label: '代表プロフィール' }];

export default function ProfilePage() {
  return (
    <>
      <JsonLd data={personSchemaDetailed} />
      <JsonLd data={profilePageSchema} />
      <Header />
      <main>
        <Breadcrumb items={breadcrumbItems} />

        <PageHero
          label="PROFILE — REPRESENTATIVE"
          title="槌田 一輝"
          lead="株式会社sokoe 代表取締役。レッツ倶楽部川西能勢口（兵庫県川西市・1日型デイサービス）施設長代理。薬学・IT・薬局・介護を横断したキャリアを経て、2026年5月に sokoe を設立。"
        />

        {/* ポートレート＋略歴 */}
        <Section spacing="md">
          <Container size="default">
            <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-16">
              {/* ポートレート（暫定 placeholder） */}
              <div className="aspect-square w-full max-w-[280px] overflow-hidden bg-gradient-to-br from-bg-muted to-border-soft">
                <div className="flex h-full items-center justify-center text-sm text-charcoal-muted">
                  Portrait
                  <br />
                  （後日プロ撮影写真に差し替え）
                </div>
              </div>

              <div>
                <p className="text-base leading-relaxed text-charcoal md:text-lg">
                  薬学部に在学中、IT
                  企業でインターンを約3年経験。2025年に薬学部を卒業し、薬局運営を行う株式会社ピースファーマシーに入社。薬局業務に従事した後、同社が運営する1日型デイサービス「レッツ倶楽部川西能勢口」（兵庫県川西市）で、2025年8月から施設長代理として現場業務を主導している。
                </p>
                <p className="mt-4 text-base leading-relaxed text-charcoal md:text-lg">
                  「現場で起きる、本来やる必要のない雑務」をソフトウェアと AI
                  で消すことをミッションに、自社運営施設で本番運用しながらプロダクトを磨き、2026年5月に株式会社sokoe
                  を設立。薬学・IT・薬局・介護を横断してきた経験から、業務効率化に必要な視点を異業種側から持ち込むことを強みとする。
                </p>
                <p className="mt-4 text-base leading-relaxed text-charcoal md:text-lg">
                  「介護施設を運営する会社が、医療・介護・福祉領域のソフトウェアと AI
                  コンサルティングを提供する」── これが sokoe
                  の事業構造であり、他社にはない独自性です。
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* 基本情報テーブル */}
        <ProseSection eyebrow="BASIC INFO" title="基本情報" variant="muted">
          <InfoTable rows={profileInfoRows} caption="代表プロフィール 基本情報" />
        </ProseSection>

        {/* 経歴年表 */}
        <ProseSection eyebrow="CAREER" title="経歴">
          <Timeline items={careerTimeline} />
        </ProseSection>

        {/* 専門領域 */}
        <ProseSection
          eyebrow="EXPERTISE"
          title="専門領域・知見"
          variant="muted"
          lead="現場経験と専門資格、そしてソフトウェア開発の知見を横断的に組み合わせ、医療・介護・福祉領域に貢献しています。"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {expertiseAreas.map((area) => (
              <div key={area.title} className="border-l-2 border-brand-red bg-bg-base p-6">
                <h3 className="text-lg font-medium text-ink">{area.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-charcoal">{area.detail}</p>
              </div>
            ))}
          </div>
        </ProseSection>

        {/* 発信 */}
        <ProseSection eyebrow="WRITING & SPEAKING" title="発信">
          <p>
            介護現場での AI 実践、医療・介護 SaaS
            の設計思想、薬学・IT・薬局・介護を横断してきた視点を、X・note・LinkedIn
            で継続的に発信しています。
          </p>
          <ul className="not-prose mt-6 space-y-3">
            <li>
              <a
                href="https://x.com/sokoe_official"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base text-ink transition-colors hover:text-brand-red"
              >
                <span className="font-medium">X（旧 Twitter）</span>
                <span className="text-charcoal-muted">@sokoe_official</span>
                <span aria-hidden>↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://note.com/sokoe_official"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base text-ink transition-colors hover:text-brand-red"
              >
                <span className="font-medium">note</span>
                <span className="text-charcoal-muted">@sokoe_official</span>
                <span aria-hidden>↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kazuki-tsuchida/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base text-ink transition-colors hover:text-brand-red"
              >
                <span className="font-medium">LinkedIn</span>
                <span className="text-charcoal-muted">kazuki-tsuchida</span>
                <span aria-hidden>↗</span>
              </a>
            </li>
          </ul>
          <p className="mt-8 text-sm text-charcoal-muted">
            ※ 登壇・寄稿・メディア掲載の実績は、決定次第こちらに追記します。
          </p>
        </ProseSection>

        {/* CTA */}
        <Section spacing="md" className="bg-bg-muted">
          <Container size="default">
            <div className="text-center">
              <Heading level="h3" className="mb-4">
                代表に直接、相談できます。
              </Heading>
              <p className="mb-8 text-base text-charcoal">
                医療・介護・福祉領域の AI 導入・現場 DX について、30分の無料相談を承っています。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/consulting/">
                  <Button variant="primary">無料相談を予約</Button>
                </Link>
                <Link href="/about/founder-message/">
                  <Button variant="secondary">代表メッセージを読む</Button>
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
