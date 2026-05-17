import { Breadcrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { InfoTable } from '@/components/InfoTable';
import { JsonLd } from '@/components/JsonLd';
import { Label } from '@/components/Label';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { hiringProcess, positions, recruitMeta, values, workStyles } from '@/lib/content/recruit';
import { createWebPageSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = siteConfig.url;

const PAGE_URL = `${SITE_URL}/recruit/`;

export const metadata: Metadata = {
  title: '採用情報 ｜ sokoe',
  description:
    '株式会社sokoe の採用情報。「現場を、本来の仕事に戻す」をミッションに、医療・介護・福祉領域でソフトウェアと AI を作る仲間を募集しています。まずはカジュアル面談から、お気軽にどうぞ。',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: '採用情報 ｜ sokoe',
    description:
      '医療・介護・福祉領域でソフトウェアと AI を作る仲間を募集中。まずはカジュアル面談から。',
    url: PAGE_URL,
    siteName: 'sokoe',
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function RecruitPage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema({
          name: '採用情報 ｜ sokoe',
          description: '株式会社sokoe の採用情報。医療・介護・福祉領域で挑戦する仲間を募集中。',
          url: PAGE_URL,
          datePublished: recruitMeta.publishedAt,
          dateModified: recruitMeta.updatedAt,
        })}
      />
      <Header />
      <main>
        <Breadcrumb items={[{ label: '採用情報' }]} />

        <PageHero
          label="RECRUIT — JOIN US"
          title="これから、一緒につくる仲間を探しています。"
          lead="「現場を、本来の仕事に戻す」をミッションに、介護・薬局・医療の現場をソフトウェアと AI で変えていく仲間を探しています。具体的なポジションでの公募は準備中ですが、まずはカジュアル面談から、お互いを知るところから始めましょう。"
        />

        {/* バリュー */}
        <Section spacing="lg">
          <Container size="default">
            <Label className="mb-4">WHAT WE BELIEVE</Label>
            <Heading level="h2" className="mb-12">
              sokoe で働くということ
            </Heading>
            <div className="grid gap-10 md:grid-cols-3 md:gap-8">
              {values.map((v) => (
                <div key={v.number}>
                  <p className="font-display text-4xl tracking-tight text-charcoal-muted">
                    {v.number}
                  </p>
                  <h3 className="mt-4 text-lg font-medium text-ink">{v.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-charcoal">{v.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 働き方 */}
        <Section spacing="lg" className="bg-bg-muted">
          <Container size="default">
            <Label className="mb-4">HOW WE WORK</Label>
            <Heading level="h2" className="mb-12">
              働き方
            </Heading>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-charcoal">
              働く場所・時間・形態はできるだけ柔軟に設計しています。ご相談のうえ、それぞれが力を発揮できる形を一緒に考えます。
            </p>
            <InfoTable
              rows={workStyles.map((w) => ({ label: w.label, value: w.value }))}
              caption="sokoe の働き方"
              labelWidth="narrow"
            />
            <p className="mt-8 text-sm text-charcoal-muted">
              ※ 上記は Phase 0 時点の方針です。事業の成長に応じて随時アップデートしていきます。
            </p>
          </Container>
        </Section>

        {/* オープンポジション */}
        <Section spacing="lg">
          <Container size="default">
            <Label className="mb-4">OPEN POSITIONS</Label>
            <Heading level="h2" className="mb-12">
              募集ポジション
            </Heading>
            <div className="space-y-8">
              {positions.map((p) => (
                <Card key={p.id} className="border-l-4 border-l-brand-red">
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-xl font-medium text-ink md:text-2xl">{p.title}</h3>
                    <Label className="text-charcoal-muted">CASUAL TALK</Label>
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-charcoal">{p.description}</p>
                  <div className="mt-8">
                    <h4 className="text-sm font-medium uppercase tracking-wider text-charcoal-muted">
                      こんな方を歓迎します
                    </h4>
                    <ul className="mt-3 space-y-1.5 text-base leading-relaxed text-charcoal">
                      {p.audience.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                  <dl className="mt-8 grid gap-4 border-t border-border-soft pt-6 text-sm md:grid-cols-2">
                    <div>
                      <dt className="text-charcoal-muted">勤務形態</dt>
                      <dd className="mt-1 text-ink">{p.employmentType}</dd>
                    </div>
                    <div>
                      <dt className="text-charcoal-muted">勤務地</dt>
                      <dd className="mt-1 text-ink">{p.location}</dd>
                    </div>
                  </dl>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* 応募フロー */}
        <Section spacing="lg" className="bg-bg-muted">
          <Container size="default">
            <Label className="mb-4">PROCESS</Label>
            <Heading level="h2" className="mb-12">
              応募の流れ
            </Heading>
            <ol className="space-y-8">
              {hiringProcess.map((p) => (
                <li
                  key={p.step}
                  className="grid gap-4 border-t border-border-soft pt-8 md:grid-cols-[120px_1fr] md:gap-8"
                >
                  <p className="font-display text-3xl tracking-tight text-brand-red">{p.step}</p>
                  <div>
                    <h3 className="text-lg font-medium text-ink">{p.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-charcoal">{p.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        {/* CTA */}
        <Section spacing="md">
          <Container size="default">
            <div className="border-t border-border-soft pt-12 text-center">
              <Heading level="h3" className="mb-4">
                まずは、お話しさせてください。
              </Heading>
              <p className="mb-8 text-base leading-relaxed text-charcoal">
                カジュアル面談からスタートします。経歴・関心領域・ご質問など、お気軽にどうぞ。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact/">
                  <Button variant="primary">採用についてのお問い合わせ</Button>
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
