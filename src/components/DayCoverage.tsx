import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { Check } from 'lucide-react';

const coverageFeatures = [
  {
    title: '4便 × 6パターンの便構成に対応',
    description:
      '朝迎・朝送・昼迎・夕送の4便を1日内で同時運用。半日型・1日型・ハイブリッド型の組み合わせも、そのまま運用できます。',
  },
  {
    title: '終日券利用者の二重出欠も、自動で整合',
    description:
      '午前/午後/終日をセッション別に管理。1人の利用者が複数セッションにまたがる場合も、出欠データを自動で揃えます。',
  },
  {
    title: '複数形態の混在運用も、追加料金なし',
    description:
      '同じ施設で1日型・半日型・ハイブリッドを同時運営する場合も、プランを追加せず標準機能でご利用いただけます。',
  },
  {
    title: '半日型固有の加算も、AI で判定',
    description:
      '個別機能訓練・延長加算など、半日型運用で複雑になりがちな加算条件を、AI が下書きします。最終確認は管理者が行います。',
  },
];

/**
 * 対応形態カバレッジセクション
 *
 * 旧 DayHalfDayHero。半日型単体の全面押しではなく、
 * 「1日型・半日型・ハイブリッド型、どの形態でも同じ品質で運用できる」
 * という対応形態の広さを訴求する位置づけに変更。
 *
 * Step 4.8 GEO/AEO 観点：
 * - 数値・固有名詞・条件を明示してエンティティ密度を上げる
 * - 「当社調べ」の限定句で正確性を担保
 */
export function DayCoverage() {
  return (
    <Section variant="tint-pink" spacing="lg" bordered>
      <Container>
        <div className="max-w-3xl mb-14 md:mb-16">
          <Label tone="brand-red" className="mb-5">
            OPERATION COVERAGE
          </Label>
          <Heading level="h2" serif className="mb-6">
            半日型のために、
            <br />
            最初から設計しました。
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85]">
            4 便構成や午前/午後/終日のセッション管理、半日型固有の加算 ──
            <br className="hidden md:block" />
            半日型ならではの運用を、後付けではなく
            <strong className="text-ink font-bold">最初から想定した設計</strong>
            にしています。
            <br className="hidden md:block" />
            混在運用にも、追加料金なしで対応します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {coverageFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-border rounded-[6px] p-7 md:p-8"
            >
              <div className="flex items-start gap-4">
                <span
                  className="shrink-0 w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Check className="w-4 h-4" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-ink mb-3">{feature.title}</h3>
                  <p className="text-stone text-[15px] leading-[1.8]">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
