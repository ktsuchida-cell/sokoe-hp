import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type CaseCard = {
  slug: string;
  metric: string;
  metricLabel: string;
  title: string;
  description: string;
  tech: string;
};

// Step 4.8 §11 自社実践事例（4ケース）
const cases: CaseCard[] = [
  {
    slug: 'care-plan-ai-generation',
    metric: '30分 → 数分',
    metricLabel: '計画書1枚あたり',
    title: 'ケアプラン AI 自動生成',
    description: 'ケアマネージャーから受け取ったケアプランPDFをOCR、Claude APIで計画書を自動生成。',
    tech: 'Claude API / AI OCR',
  },
  {
    slug: 'fitness-test-ai-comment',
    metric: '全利用者に',
    metricLabel: '個別フィードバック',
    title: '体力測定 AI 評価コメント生成',
    description: '測定数値から AI が個別の評価コメントを瞬時に生成。賞状PDFとして出力。',
    tech: 'Claude API',
  },
  {
    slug: 'meeting-minutes-ai',
    metric: '1時間 → 10分',
    metricLabel: '議事録作成時間',
    title: '会議議事録 AI 自動化',
    description: '音声認識 + Claude で議事録を自動生成。サービス担当者会議の負担を激減。',
    tech: '音声認識 API / Claude API',
  },
  {
    slug: 'business-card-ocr',
    metric: '数秒で完了',
    metricLabel: '名刺1枚あたり',
    title: '名刺 OCR で営業データ自動登録',
    description: 'ケアマネージャーから受け取る名刺を撮影するだけで自動登録。',
    tech: 'AI OCR',
  },
];

/**
 * Case Studies セクション
 *
 * Step 4.8 GEO/AEO 戦略：
 * - 自社実践事例を Listicle 型で提示（AI 引用率が高い形式）
 * - 各事例に明確な数値（Before/After）
 * - 利用技術を明示してエンティティ密度を上げる
 * - 「私たちが実際に使っている」という Experience 訴求
 */
export function CaseStudies() {
  return (
    <Section spacing="lg" bordered>
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-2xl">
            <Label className="mb-5">SELF-PRACTICE</Label>
            <Heading level="h2" className="mb-6">
              自分たちで使い、
              <br className="hidden md:block" />
              自分たちで証明する。
            </Heading>
            <p className="text-stone text-base md:text-lg leading-[1.85]">
              sokoe Day は自社運営施設で毎日動いています。
              AIを使った業務改善の実例を、私たちが先に証明します。
            </p>
          </div>
          <Link
            href="/case/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand-red transition-colors shrink-0"
          >
            事例をすべて見る
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {cases.map((c) => (
            <Link key={c.slug} href={`/case/${c.slug}/`} className="group block">
              <article className="h-full border border-border rounded-[6px] p-8 md:p-10 bg-white transition-colors hover:border-ink">
                <div className="mb-6 pb-6 border-b border-border">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-ink leading-none mb-2">
                    {c.metric}
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-mid">{c.metricLabel}</p>
                </div>

                <h3 className="font-bold text-xl md:text-2xl text-ink mb-4 leading-snug group-hover:text-brand-red transition-colors">
                  {c.title}
                </h3>

                <p className="text-stone text-[15px] leading-[1.85] mb-6">{c.description}</p>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-mid">
                    <span className="font-semibold">利用技術：</span>
                    {c.tech}
                  </p>
                  <ArrowRight
                    className="w-4 h-4 text-mid group-hover:text-brand-red group-hover:translate-x-1 transition-all"
                    strokeWidth={1.5}
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
