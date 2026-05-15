import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const useCases = [
  {
    title: '通所介護計画書（ケアプラン）が 30 分 → 数分',
    description:
      'ケアマネージャーから受け取った利用者さんの情報を考慮し、施設の通所介護計画書（ケアプラン）へ AI が自動変換。月 20 名で消えていた 10 時間の転記業務が、ほぼゼロになります。',
  },
  {
    title: '録音 + AI 要約で、担当者会議の議事録が 1 時間 → 10 分',
    description:
      '会議の録音をその場で文字起こし、AI が要約と発言者識別を実行。会議後の「書き起こし」が不要になります。',
  },
  {
    title: '測定値を入れるだけで、ご利用者全員に個別評価コメント',
    description:
      'TUG・握力など測定値を入力すれば、AI が改善ポイントを優しい言葉でコメント化。賞状 PDF も自動出力できます。',
  },
  {
    title: 'スマホで撮るだけで、名刺データが数秒で営業履歴へ',
    description:
      'AI OCR で氏名・事業所・連絡先・役職を自動抽出。担当ご利用者リストにも自動で紐付きます。',
  },
];

/**
 * Self-Use セクション（自社運営施設での実証）
 *
 * SmartHR「選ばれる理由」型に寄せた構成：
 *   - 中央寄せのタイトル + リード
 *   - 番号バッジ付き縦並びカード 4 枚
 *   - 末尾に「すべての実証事例を見る」リンク
 *
 * 写真は意図的に外し、メトリクスのインパクトに集中させる。
 * E-E-A-T 訴求（自社実証）は本文リードで担保。
 */
export function DaySelfUse() {
  return (
    <Section spacing="lg" bordered>
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <Label className="mb-5">SELF-USE PROOF</Label>
          <Heading level="h2" serif className="mb-6">
            自分たちで使い、
            <br className="hidden md:block" />
            自分たちで証明する。
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85]">
            sokoe Day は、自社運営する50名規模のデイサービス「
            <Link
              href="/about/"
              className="text-ink font-semibold underline-offset-4 hover:underline"
            >
              レッツ倶楽部川西能勢口
            </Link>
            」で 2026年4月から本番稼働中。
            <br className="hidden md:block" />
            代表が現役の施設長代理として、毎日 sokoe Day を使い、改善し、また使っています。
          </p>
        </div>

        <ul className="mx-auto max-w-3xl space-y-4 md:space-y-5">
          {useCases.map((useCase, i) => (
            <li
              key={useCase.title}
              className="flex items-start gap-5 md:gap-7 rounded-[8px] bg-white border border-border p-6 md:p-8 transition-shadow hover:shadow-sm"
            >
              <span
                className="shrink-0 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-ink text-white font-serif text-lg md:text-xl font-bold"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-lg md:text-xl font-bold text-brand-red leading-snug mb-3">
                  {useCase.title}
                </h3>
                <p className="text-stone text-[15px] md:text-base leading-[1.85]">
                  {useCase.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Link
            href="/case/"
            className="inline-flex items-center gap-2 text-base font-semibold text-ink hover:text-brand-red transition-colors group"
          >
            すべての実証事例を見る
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
