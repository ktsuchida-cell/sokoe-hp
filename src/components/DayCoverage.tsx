import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { Check } from 'lucide-react';

const coverageFeatures = [
  {
    title: '4便構成にネイティブ対応',
    description:
      '朝迎・朝送・昼迎・夕送の4便を1日内で同時運用できる設計。公開情報の範囲で同等の対応をする国内SaaSは確認できていません。※当社調べ・2026年5月時点',
  },
  {
    title: '午前/午後/終日のセッション管理',
    description: 'フロア業務もセッション別に管理。終日券利用者の二重出欠も自動で整合。',
  },
  {
    title: '1日型・半日型・ハイブリッドの混在対応',
    description: '同じ施設で複数形態を運営している事業所にも、追加料金なしで対応。',
  },
  {
    title: '半日型特有の加算管理',
    description: '個別機能訓練・延長加算など、半日型特有の加算を自動判定。',
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
            1日型・半日型・ハイブリッド、
            <br />
            どれにも本気で。
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85]">
            1日型・半日型・ハイブリッド型を同時運用できる国内 SaaS は、
            <strong className="text-ink font-bold">
              公開情報を調査した限り他に確認できていません
            </strong>
            ※。
            <br className="hidden md:block" />
            形態が混在する施設にも、追加料金なしで対応します。
            <br />
            <span className="text-xs text-mid mt-2 inline-block">※当社調べ・2026年5月時点</span>
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
