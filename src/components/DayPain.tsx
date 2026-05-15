import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { Check } from 'lucide-react';

const pains = [
  '紙のバインダーが増え続け、過去の記録がすぐに探せない。',
  'バイタル・申し送り・各種記録 ── 同じ情報を何度も転記している。',
  '送迎変更や家族からの伝言が、口頭・メモで漏れることがある。',
  '半日型運用 (4便・午前/午後/終日) を、既存の1日型システムで無理やり回している。',
  '通所介護計画書を施設様式に転記する作業に、毎日30分かかっている。',
];

/**
 * Pain セクション（チェックリスト型 / EC LP 風）
 *
 * - 上部にターゲット表記（両端の斜め線は擬似要素で表現）
 * - 「こんなお悩みございませんか？」を中央寄せで強調
 * - 各 pain は1行に圧縮し、チェックアイコンと並べて視認性を最大化
 * - 末尾に「自社で向き合ってきた課題」という sokoe 独自性を一言添える
 */
export function DayPain() {
  return (
    <Section variant="soft" spacing="lg" bordered>
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          {/* ターゲット表記 ── 両端の斜め線を擬似要素で再現 */}
          <p className="relative inline-block px-8 md:px-12 mb-6 text-sm md:text-base font-medium text-charcoal">
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 block h-6 w-px bg-charcoal/50 -rotate-[18deg]"
              aria-hidden="true"
            />
            現場の手間を本気で減らしたい施設長・管理者の方へ
            <span
              className="absolute right-0 top-1/2 -translate-y-1/2 block h-6 w-px bg-charcoal/50 rotate-[18deg]"
              aria-hidden="true"
            />
          </p>

          <Heading level="h2" serif>
            <span className="text-brand-red">こんなお悩み</span>
            ございませんか？
          </Heading>
        </div>

        <div className="mx-auto max-w-3xl rounded-[8px] bg-white border border-border p-7 md:p-10">
          <ul className="space-y-4 md:space-y-5">
            {pains.map((pain) => (
              <li key={pain} className="flex items-start gap-4">
                <span
                  className="shrink-0 mt-0.5 flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-[4px] bg-brand-red/10 text-brand-red"
                  aria-hidden="true"
                >
                  <Check className="h-4 w-4 md:h-4.5 md:w-4.5" strokeWidth={2.5} />
                </span>
                <p className="flex-1 text-[15px] md:text-base leading-[1.8] text-ink">{pain}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm md:text-base leading-[1.85] text-stone">
          介護施設を運営する会社として、私たち自身もずっと向き合ってきた課題です。
        </p>
      </Container>
    </Section>
  );
}
