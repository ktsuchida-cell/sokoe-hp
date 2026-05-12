import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { cn } from '@/lib/cn';
import { Check } from 'lucide-react';
import Link from 'next/link';

type Plan = {
  name: string;
  price: number;
  capacity: string;
  description: string;
  features: string[];
  isRecommended?: boolean;
};

const plans: Plan[] = [
  {
    name: 'ベーシック',
    price: 11000,
    capacity: '〜10名',
    description: '小規模デイサービス向け',
    features: [
      '主要機能フル搭載',
      'AI機能（ケアプラン・議事録）',
      '半日型対応',
      'メールサポート',
      'データバックアップ',
    ],
  },
  {
    name: 'スタンダード',
    price: 33000,
    capacity: '〜30名',
    description: '中規模デイサービス向け',
    features: [
      'ベーシックの全機能',
      '複数管理者アカウント',
      '送迎AI最適化',
      'チャットサポート',
      '導入研修（オンライン2回）',
    ],
    isRecommended: true,
  },
  {
    name: 'プレミアム',
    price: 55000,
    capacity: '〜50名',
    description: '大規模・多拠点デイサービス向け',
    features: [
      'スタンダードの全機能',
      '多拠点管理',
      'カスタムレポート',
      '専属サポート担当',
      '導入研修（訪問4回）',
      'API連携相談',
    ],
  },
];

/**
 * Pricing セクション（3プラン）
 *
 * Step 3-C §9：
 * - プラン名・価格・規模を明確に
 * - スタンダードを「推奨」として強調（オレンジ枠）
 * - 30日間無料トライアル訴求
 *
 * Step 4.8 GEO/AEO：
 * - 価格を数値で明示（AI Overview の Product Schema に対応）
 * - 機能リストを箇条書きで構造化（AI 引用率向上）
 */
export function DayPricing() {
  return (
    <Section spacing="lg" bordered>
      <Container>
        <div className="text-center mb-14 md:mb-16">
          <Label tone="product-orange" className="mb-5">
            PRICING
          </Label>
          <Heading level="h2" className="mb-6">
            シンプルな、3プラン。
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85] max-w-2xl mx-auto">
            利用者数で選べる、明朗会計。初期費用ゼロ、30日間無料トライアル。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'relative bg-white rounded-[6px] p-8 md:p-10 transition-colors',
                plan.isRecommended
                  ? 'border-2 border-product-orange'
                  : 'border border-border hover:border-ink',
              )}
            >
              {plan.isRecommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-block bg-product-orange text-white text-xs font-bold uppercase tracking-[0.1em] px-4 py-1.5 rounded-full">
                  RECOMMENDED
                </span>
              )}

              <div className="mb-6 pb-6 border-b border-border">
                <h3 className="font-bold text-xl md:text-2xl text-ink mb-2">{plan.name}</h3>
                <p className="text-mid text-sm mb-5">{plan.description}</p>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-serif text-[40px] md:text-[44px] font-bold text-ink leading-none">
                    ¥{plan.price.toLocaleString()}
                  </span>
                  <span className="text-mid text-sm">/月（税込）</span>
                </div>

                <p className="text-xs text-mid">
                  利用者 <strong className="text-ink">{plan.capacity}</strong>
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[14px] text-charcoal">
                    <Check
                      className={cn(
                        'w-4 h-4 mt-0.5 shrink-0',
                        plan.isRecommended ? 'text-product-orange' : 'text-mid',
                      )}
                      strokeWidth={2}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/day-service/document/" className="block">
                <Button variant={plan.isRecommended ? 'product' : 'secondary'} size="md" fullWidth>
                  資料請求
                </Button>
              </Link>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-mid mt-10">
          ※ 初期費用は無料です。30日間無料でお試しいただけます。
        </p>
      </Container>
    </Section>
  );
}
