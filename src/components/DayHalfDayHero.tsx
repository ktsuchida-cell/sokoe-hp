import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { Check } from 'lucide-react';

const halfDayFeatures = [
  {
    title: '4便構成にネイティブ対応',
    description:
      '朝迎・朝送・昼迎・夕送の4便を1日内で同時運用できる、唯一の国内SaaS。※当社調べ・2026年5月時点',
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
 * 半日型対応訴求セクション
 *
 * Step 3-C §3 + Step 4.6：
 * - sokoe Day 最大の差別化ポイント
 * - 薄ピンク背景（tint-pink）でセクションを強調
 * - 「公開情報を調査した限り唯一」を明示
 *
 * Step 4.8 GEO/AEO 観点：
 * - 数値・固有名詞・条件を明示してエンティティ密度を上げる
 * - 「当社調べ」の限定句で正確性を担保
 */
export function DayHalfDayHero() {
  return (
    <Section variant="tint-pink" spacing="lg" bordered>
      <Container>
        <div className="max-w-3xl mb-14 md:mb-16">
          <Label tone="brand-red" className="mb-5">
            HALF-DAY OPERATION
          </Label>
          <Heading level="h2" serif className="mb-6">
            半日型デイサービスに、
            <br />
            真正面から対応する。
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85]">
            半日型・1日型・ハイブリッド型の同時運用にネイティブ対応した
            <br className="hidden md:block" />
            国内 SaaS を、
            <strong className="text-ink font-bold">
              公開情報を調査した限り他に確認できていません
            </strong>
            ※。
            <br />
            <span className="text-xs text-mid mt-2 inline-block">※当社調べ・2026年5月時点</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {halfDayFeatures.map((feature) => (
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
