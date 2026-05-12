import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type InsightCard = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
};

// Phase 0 公開時点ではダミーデータ。Phase 1 で実記事に差し替え
const insights: InsightCard[] = [
  {
    slug: 'kaigo-ai-introduction-guide',
    category: 'GUIDE',
    title: '介護現場で AI を導入する完全ガイド（2026年版）',
    excerpt:
      '介護施設長として現場でAIを使い続けてきた経験から、何から始めるべきか・どこで失敗するかを8,000字で解説。',
    date: '2026.05.11',
    author: '槌田 一輝',
  },
  {
    slug: 'half-day-vs-full-day',
    category: 'COLUMN',
    title: '半日型 × 1日型 × ハイブリッド型 ── システム要件の決定的な違い',
    excerpt:
      'デイサービスの運営形態によって、求められるシステム要件は根本から異なる。実際の運営者として比較。',
    date: '2026.05.09',
    author: '槌田 一輝',
  },
  {
    slug: 'care-plan-ai-second-page',
    category: 'CASE STUDY',
    title: 'ケアプラン第2表を AI に書かせる ── OCR から目標生成まで',
    excerpt:
      '自社施設で実装した、OCR + Claude API による計画書自動生成のワークフロー。30分 → 数分の実例。',
    date: '2026.04.28',
    author: '槌田 一輝',
  },
  {
    slug: 'why-staff-dont-use-ai',
    category: 'INSIGHTS',
    title: '介護施設で AI を導入したが、現場が使わなかった失敗談',
    excerpt:
      '「経営は導入したい、現場は使わない」── このギャップを埋めるのは、技術ではなく、設計と巻き込み方。',
    date: '2026.04.20',
    author: '槌田 一輝',
  },
];

/**
 * Insights セクション（コーポレートTOP）
 *
 * Step 4.5 + 4.7 + 4.8 SEO/AI 対策の核：
 * - 代表名義の記事を前面に（Experience の証明）
 * - 編集メディア風レイアウト（カテゴリラベル + 日付 + 著者）
 * - 「コンサル感」「思想」を伝えるセクション
 *
 * Phase 0 ではダミーデータ、Phase 1 で実記事に置き換え
 */
export function Insights() {
  return (
    <Section variant="soft" spacing="lg" bordered>
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-2xl">
            <Label className="mb-5">INSIGHTS</Label>
            <Heading level="h2" className="mb-6">
              現場発の、知見。
            </Heading>
            <p className="text-stone text-base md:text-lg leading-[1.85]">
              介護施設長として、AI を毎日使っている代表が書く、実体験ベースの記事です。
            </p>
          </div>
          <Link
            href="/media/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand-red transition-colors shrink-0"
          >
            記事をすべて見る
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {insights.map((insight) => (
            <article key={insight.slug} className="group">
              <Link href={`/media/${insight.slug}/`} className="block">
                {/* サムネイル placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-soft-bg to-tint-pink/30 border border-border rounded-[4px] mb-6 overflow-hidden group-hover:border-ink transition-colors">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-mid text-xs uppercase tracking-[0.2em]">
                      {insight.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3 text-xs text-mid">
                  <span className="font-semibold tracking-[0.1em] uppercase text-stone">
                    {insight.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-light-gray" aria-hidden="true" />
                  <time>{insight.date}</time>
                </div>

                <h3 className="font-bold text-xl md:text-[22px] text-ink mb-3 leading-snug group-hover:text-brand-red transition-colors">
                  {insight.title}
                </h3>

                <p className="text-stone text-[15px] leading-[1.85] mb-4">{insight.excerpt}</p>

                <p className="text-xs text-mid">著者：{insight.author}</p>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
