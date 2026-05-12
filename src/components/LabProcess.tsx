import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';

type ProcessStep = {
  number: string;
  duration: string;
  title: string;
  description: string;
  outputs: string[];
};

const processSteps: ProcessStep[] = [
  {
    number: '01',
    duration: '1週目',
    title: '無料相談・ヒアリング',
    description:
      'まず30分の無料オンライン相談から。貴社の課題感、現在の業務、AI 導入の目的をお伺いします。',
    outputs: ['課題ヒアリング', '初期方針案'],
  },
  {
    number: '02',
    duration: '2〜3週目',
    title: '業務棚卸し・適用領域特定',
    description:
      '貴社にお邪魔して、または Zoom で、全業務をリストアップ。AI 化できる業務を、効果とリスクで評価します。',
    outputs: ['業務マップ', '優先順位リスト'],
  },
  {
    number: '03',
    duration: '4〜6週目',
    title: 'ROI試算・ロードマップ作成',
    description:
      '優先業務についてROIを試算。3ヶ月・6ヶ月・12ヶ月のロードマップを作成し、経営層と握ります。',
    outputs: ['ROI試算書', '12ヶ月ロードマップ'],
  },
  {
    number: '04',
    duration: '7〜12週目',
    title: 'プロトタイプ実装・パイロット運用',
    description:
      '優先1〜2業務でプロトタイプを実装。3週間のパイロット運用で、現場の反応・改善点を確認します。',
    outputs: ['プロトタイプ', 'パイロット結果レポート'],
  },
  {
    number: '05',
    duration: '13週目〜',
    title: '本番展開・継続伴走',
    description:
      'パイロット成功業務を本番展開。同時に、次の優先業務へ。月次レビューで継続的に改善を支援します。',
    outputs: ['本番運用マニュアル', '月次レビュー'],
  },
];

/**
 * Process セクション（5ステップ）
 *
 * Step 3-D §6 + Step 4.5 §4 コンサル感訴求：
 * - 「最初に何をするか」を明示してCV率向上
 * - 期間（◯週目）の明示で具体性
 *
 * Step 4.8 GEO/AEO：
 * - HowTo Schema を意識した5ステップ構造（AI 検索で引用される構造）
 * - 各ステップの成果物明示
 */
export function LabProcess() {
  return (
    <Section spacing="lg" bordered>
      <Container>
        <div className="max-w-3xl mb-14 md:mb-16">
          <Label className="mb-5">PROCESS</Label>
          <Heading level="h2" className="mb-6">
            進め方の、5ステップ。
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85]">
            「最初に何をすべきか」がわからない、で止まらないように。
            <br className="hidden md:block" />
            無料相談から本番展開まで、明確な進め方を定義しています。
          </p>
        </div>

        <div className="relative">
          {/* 縦線（背景）*/}
          <div
            className="absolute left-[15px] md:left-[19px] top-3 bottom-3 w-px bg-border"
            aria-hidden="true"
          />

          <ol className="space-y-10 md:space-y-12">
            {processSteps.map((step) => (
              <li key={step.number} className="relative pl-12 md:pl-16">
                {/* 番号バブル */}
                <span
                  className="absolute left-0 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-red text-white font-bold text-sm md:text-base flex items-center justify-center"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* 内容 */}
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-mid mb-2">
                    {step.duration}
                  </p>
                  <h3 className="font-bold text-xl md:text-2xl text-ink mb-4 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-stone text-[15px] md:text-base leading-[1.85] mb-4 max-w-3xl">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.outputs.map((output) => (
                      <span
                        key={output}
                        className="inline-block text-[12px] text-charcoal bg-off-white border border-border px-3 py-1 rounded-[3px]"
                      >
                        → {output}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
