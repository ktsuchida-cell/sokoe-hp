import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { cn } from '@/lib/cn';
import { Check } from 'lucide-react';
import Link from 'next/link';

type Plan = {
  /** プラン名 */
  name: string;
  /** プランの位置づけバッジ (BASE / OPTION) */
  badge: 'BASE' | 'OPTION';
  /** ベース料金は固定で表示、オプションは "+" 付きで表示 */
  isBase: boolean;
  /** 1 人あたりの月額（円） */
  pricePerUser: number;
  /** 課金対象（フロアは「1日平均利用者」、オプションは「登録利用者」） */
  priceUnit: string;
  /** プランの一行説明 */
  description: string;
  /** 含まれる機能 */
  features: string[];
};

const plans: Plan[] = [
  {
    name: 'フロア機能',
    badge: 'BASE',
    isBase: true,
    pricePerUser: 700,
    priceUnit: '1 日平均利用者 1 名／月',
    description: 'sokoe Day のベース。日々の現場業務を、タブレット 1 枚で。',
    features: [
      'ダッシュボード / 利用者管理 / 出欠管理',
      '入浴カンバン / バイタル記録 / 申し送り',
      '体力測定 AI 評価',
      'AI ケアプラン生成（通所介護計画書）',
      '初期費用ゼロ・30 日間無料トライアル',
    ],
  },
  {
    name: '送迎機能',
    badge: 'OPTION',
    isBase: false,
    pricePerUser: 300,
    priceUnit: '1 日平均利用者 1 名／月',
    description: '4 便 × 6 パターンの便構成、AI 配車最適化まで。',
    features: [
      '配車計画（AI 最適化＋6 パターン便対応）',
      'ドライバー画面（モバイル専用 UI）',
      '送迎記録（監査用に自動記録）',
    ],
  },
  {
    name: '管理者業務',
    badge: 'OPTION',
    isBase: false,
    pricePerUser: 300,
    priceUnit: '1 日平均利用者 1 名／月',
    description: 'バックオフィスを AI で支える、施設長・管理者向け機能群。',
    features: [
      '営業管理 / 名刺 OCR',
      '担当者会議 AI（音声 → 議事録）',
      'ケアプラン AI 生成',
      'スケジュール管理 / レポート出力',
    ],
  },
];

/**
 * Pricing セクション（従量課金制：機能パック × 利用者数）
 *
 * - フロア機能をベースとして組み、送迎・管理者業務を必要に応じてオプション追加。
 * - フロアは 1 日平均利用者 1 名あたり 700 円／月。
 *   送迎・管理者業務は登録利用者 1 名あたり +300 円／月。
 * - 末尾に概算計算例とコール CTA。
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
            必要な機能だけ、人数分。
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85] max-w-2xl mx-auto">
            フロア機能をベースに、送迎・管理者業務を必要に応じて追加できる従量課金制。
            <br className="hidden md:block" />
            初期費用ゼロ、30 日間無料トライアル。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'relative bg-white rounded-[6px] p-8 md:p-10 transition-colors',
                plan.isBase
                  ? 'border-2 border-product-orange'
                  : 'border border-border hover:border-ink',
              )}
            >
              <span
                className={cn(
                  'absolute -top-3 left-1/2 -translate-x-1/2 inline-block text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full',
                  plan.isBase ? 'bg-product-orange text-white' : 'bg-bg-muted text-charcoal',
                )}
              >
                {plan.badge}
              </span>

              <div className="mb-6 pb-6 border-b border-border">
                <h3 className="font-bold text-xl md:text-2xl text-ink mb-2">{plan.name}</h3>
                <p className="text-mid text-sm mb-5 leading-[1.7]">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-2">
                  {!plan.isBase && (
                    <span className="font-serif text-[32px] md:text-[36px] font-bold text-product-orange leading-none">
                      ＋
                    </span>
                  )}
                  <span className="font-serif text-[40px] md:text-[44px] font-bold text-ink leading-none">
                    ¥{plan.pricePerUser.toLocaleString()}
                  </span>
                </div>

                <p className="text-xs text-mid leading-[1.7]">{plan.priceUnit}（税込）</p>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[14px] text-charcoal">
                    <Check
                      className={cn(
                        'w-4 h-4 mt-0.5 shrink-0',
                        plan.isBase ? 'text-product-orange' : 'text-mid',
                      )}
                      strokeWidth={2}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* 概算例 */}
        <div className="mt-12 md:mt-14 max-w-3xl mx-auto rounded-[8px] border border-border bg-bg-muted p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-product-orange mb-3">
            料金イメージ
          </p>
          <p className="text-charcoal text-[15px] md:text-base leading-[1.85]">
            たとえば、<strong className="text-ink">1 日平均 30 名</strong>
            の施設で、フロア＋送迎＋管理者業務をすべて使う場合：
          </p>
          <ul className="mt-4 space-y-1.5 text-[14px] md:text-[15px] text-stone">
            <li>・フロア機能：¥700 × 30 名 = <strong className="text-ink">¥21,000</strong>／月</li>
            <li>
              ・送迎機能：¥300 × 30 名 = <strong className="text-ink">¥9,000</strong>／月
            </li>
            <li>
              ・管理者業務：¥300 × 30 名 = <strong className="text-ink">¥9,000</strong>／月
            </li>
          </ul>
          <p className="mt-4 pt-4 border-t border-border text-charcoal text-[15px] md:text-base">
            合計目安：<strong className="font-serif text-2xl md:text-3xl text-ink">¥39,000</strong>
            ／月（税込）
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link href="/contact/?type=sokoe-day">
            <Button variant="product" size="md">
              無料相談で見積もりを聞く（30 分）
            </Button>
          </Link>
          <Link href="/day-service/document/">
            <Button variant="secondary" size="md">
              料金資料をダウンロード
            </Button>
          </Link>
        </div>

        <p className="text-center text-sm text-mid mt-10">
          ※ 初期費用は無料です。30 日間無料でお試しいただけます。
        </p>
      </Container>
    </Section>
  );
}
