'use client';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { cn } from '@/lib/cn';
import { Check, Minus, Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type Plan = {
  /** プラン識別子 */
  id: 'floor' | 'transport' | 'backoffice';
  name: string;
  badge: 'BASE' | 'OPTION';
  isBase: boolean;
  pricePerUser: number;
  priceUnit: string;
  description: string;
  features: string[];
};

const plans: Plan[] = [
  {
    id: 'floor',
    name: 'フロア機能',
    badge: 'BASE',
    isBase: true,
    pricePerUser: 700,
    priceUnit: '1 日平均利用者 1 名／月',
    description: 'sokoe Day のベース。日々の現場業務を、スマホ 1 台で。',
    features: [
      'ダッシュボード / 利用者管理 / 出欠管理',
      '入浴カンバン / バイタル記録 / 申し送り',
      '体力測定 AI 評価',
      'AI ケアプラン生成（通所介護計画書）',
      '初期費用ゼロ・30 日間無料トライアル',
    ],
  },
  {
    id: 'transport',
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
    id: 'backoffice',
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

const PEOPLE_MIN = 1;
const PEOPLE_MAX = 200;

/**
 * Pricing セクション（プランカード自体をシミュレーター入力として使う）
 *
 * - フロア機能（BASE）は常時選択中・解除不可
 * - 送迎機能 / 管理者業務 カードはクリックで ON/OFF
 * - 1 日平均利用者数の入力 + 合計表示は下のシミュレーターパネル
 */
export function DayPricing() {
  const [people, setPeople] = useState(30);
  const [selected, setSelected] = useState<Record<Plan['id'], boolean>>({
    floor: true,
    transport: true,
    backoffice: true,
  });

  const clampPeople = (n: number) => Math.max(PEOPLE_MIN, Math.min(PEOPLE_MAX, n || 0));

  const togglePlan = (id: Plan['id']) => {
    if (id === 'floor') return; // BASE は解除不可
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const breakdown = plans
    .filter((p) => selected[p.id])
    .map((p) => ({
      id: p.id,
      name: p.name,
      pricePerUser: p.pricePerUser,
      cost: p.pricePerUser * people,
    }));

  const total = breakdown.reduce((sum, b) => sum + b.cost, 0);

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
            人数を入れて、機能を選ぶだけで料金目安が自動計算されます。
          </p>
        </div>

        {/* STEP 1: 1 日平均利用者数を入力 */}
        <div className="max-w-3xl mx-auto mb-8 md:mb-10 rounded-[12px] border border-border bg-white p-7 md:p-9">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="font-serif text-xl md:text-2xl font-bold text-product-orange">
              STEP 1
            </span>
            <label
              htmlFor="people-input"
              className="text-base md:text-lg font-semibold text-ink"
            >
              1 日平均利用者数
            </label>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPeople((n) => clampPeople(n - 1))}
              className="shrink-0 w-11 h-11 flex items-center justify-center rounded-full border border-border bg-white text-ink hover:border-ink transition-colors"
              aria-label="1 名減らす"
            >
              <Minus className="w-4 h-4" strokeWidth={2} />
            </button>
            <input
              id="people-input"
              type="number"
              min={PEOPLE_MIN}
              max={PEOPLE_MAX}
              value={people}
              onChange={(e) => setPeople(clampPeople(Number(e.target.value)))}
              className="flex-1 text-center font-serif text-3xl md:text-4xl font-bold text-ink bg-bg-muted border border-border rounded-[6px] py-3 focus:outline-none focus:border-product-orange"
            />
            <span className="shrink-0 text-base md:text-lg text-ink font-semibold">名</span>
            <button
              type="button"
              onClick={() => setPeople((n) => clampPeople(n + 1))}
              className="shrink-0 w-11 h-11 flex items-center justify-center rounded-full border border-border bg-white text-ink hover:border-ink transition-colors"
              aria-label="1 名増やす"
            >
              <Plus className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
          <p className="mt-2 text-xs text-mid">＋ / − は 1 名ずつ、入力欄からは自由入力できます（1〜200 名）。</p>
        </div>

        {/* STEP 2: 使う機能を選ぶ（プランカード自体がトグル） */}
        <div className="max-w-6xl mx-auto mb-10 md:mb-12">
          <div className="flex items-baseline gap-3 mb-5 md:mb-6">
            <span className="font-serif text-xl md:text-2xl font-bold text-product-orange">
              STEP 2
            </span>
            <span className="text-base md:text-lg font-semibold text-ink">使う機能を選ぶ</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {plans.map((plan) => {
              const isSelected = selected[plan.id];
              const isInteractive = !plan.isBase;
              const CardTag = isInteractive ? 'button' : 'div';

              return (
                <CardTag
                  key={plan.id}
                  type={isInteractive ? 'button' : undefined}
                  onClick={isInteractive ? () => togglePlan(plan.id) : undefined}
                  aria-pressed={isInteractive ? isSelected : undefined}
                  className={cn(
                    'relative bg-white rounded-[6px] p-8 md:p-10 transition-all text-left',
                    plan.isBase
                      ? 'border-2 border-product-orange'
                      : isSelected
                        ? 'border-2 border-product-orange shadow-sm'
                        : 'border border-border opacity-75 hover:opacity-100 hover:border-ink',
                    isInteractive &&
                      'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-product-orange focus-visible:ring-offset-2',
                  )}
                >
                  <span
                    className={cn(
                      'absolute -top-3 left-1/2 -translate-x-1/2 inline-block text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full',
                      plan.isBase || isSelected
                        ? 'bg-product-orange text-white'
                        : 'bg-bg-muted text-charcoal',
                    )}
                  >
                    {plan.badge}
                  </span>

                  {isInteractive && (
                    <span
                      className={cn(
                        'absolute top-4 right-4 inline-flex items-center justify-center w-7 h-7 rounded-full transition-colors',
                        isSelected
                          ? 'bg-product-orange text-white'
                          : 'bg-bg-muted text-mid border border-border',
                      )}
                      aria-hidden="true"
                    >
                      {isSelected ? (
                        <Check className="w-4 h-4" strokeWidth={3} />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={2.5} />
                      )}
                    </span>
                  )}

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
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-[14px] text-charcoal"
                      >
                        <Check
                          className={cn(
                            'w-4 h-4 mt-0.5 shrink-0',
                            plan.isBase || isSelected ? 'text-product-orange' : 'text-mid',
                          )}
                          strokeWidth={2}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {isInteractive && (
                    <p className="mt-6 pt-5 border-t border-border text-[12px] md:text-[13px] text-mid">
                      {isSelected ? 'タップで解除' : 'タップで追加'}
                    </p>
                  )}
                  {plan.isBase && (
                    <p className="mt-6 pt-5 border-t border-border text-[12px] md:text-[13px] text-product-orange font-semibold">
                      sokoe Day のベース機能（必須）
                    </p>
                  )}
                </CardTag>
              );
            })}
          </div>
        </div>

        {/* STEP 3: 合計目安 */}
        <div className="max-w-3xl mx-auto rounded-[12px] border-2 border-product-orange bg-tint-orange/40 p-7 md:p-9">
          <div className="flex items-baseline gap-3 mb-5 md:mb-6">
            <span className="font-serif text-xl md:text-2xl font-bold text-product-orange">
              STEP 3
            </span>
            <span className="text-base md:text-lg font-semibold text-ink">
              ひと月の目安
            </span>
          </div>

          <div className="rounded-[8px] bg-white border border-border p-5 md:p-6">
            {breakdown.length === 0 ? (
              <p className="text-center text-sm text-mid py-2">
                STEP 2 から機能を選んでください。
              </p>
            ) : (
              <ul className="space-y-1.5 text-[13px] md:text-[14px] text-stone mb-4">
                {breakdown.map((b) => (
                  <li key={b.id} className="flex justify-between">
                    <span>
                      {b.name}：¥{b.pricePerUser} × {people} 名
                    </span>
                    <strong className="text-ink">¥{b.cost.toLocaleString()}</strong>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex items-baseline justify-between pt-4 border-t border-border">
              <span className="text-sm md:text-base text-charcoal font-semibold">
                合計目安／月（税込）
              </span>
              <span className="font-serif text-3xl md:text-4xl font-bold text-product-orange">
                ¥{total.toLocaleString()}
              </span>
            </div>
          </div>

          <p className="mt-5 text-center text-[12px] md:text-[13px] text-mid leading-[1.7]">
            ※ 上記は目安です。実際の運用は導入相談で詳細を確認させてください。
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
