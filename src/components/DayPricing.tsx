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

const FLOOR_PRICE = 700;
const TRANSPORT_PRICE = 300;
const BACKOFFICE_PRICE = 300;
const PEOPLE_MIN = 1;
const PEOPLE_MAX = 200;

/**
 * Pricing セクション（従量課金制 + インタラクティブシミュレーター）
 */
export function DayPricing() {
  const [people, setPeople] = useState(30);
  const [transport, setTransport] = useState(true);
  const [backoffice, setBackoffice] = useState(true);

  const clampPeople = (n: number) => Math.max(PEOPLE_MIN, Math.min(PEOPLE_MAX, n || 0));

  const floorCost = FLOOR_PRICE * people;
  const transportCost = transport ? TRANSPORT_PRICE * people : 0;
  const backofficeCost = backoffice ? BACKOFFICE_PRICE * people : 0;
  const total = floorCost + transportCost + backofficeCost;

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

        {/* 料金シミュレーター */}
        <div className="mt-14 md:mt-16 max-w-3xl mx-auto rounded-[12px] border-2 border-product-orange bg-tint-orange/40 p-7 md:p-10">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-product-orange mb-3">
              料金シミュレーター
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink">
              あなたの施設の、ひと月の目安。
            </h3>
          </div>

          {/* 1 日平均利用者数 input */}
          <div className="mb-6 md:mb-8">
            <label
              htmlFor="people-input"
              className="block text-sm md:text-base font-semibold text-ink mb-3"
            >
              1 日平均利用者数
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPeople((n) => clampPeople(n - 5))}
                className="shrink-0 w-11 h-11 flex items-center justify-center rounded-full border border-border bg-white text-ink hover:border-ink transition-colors"
                aria-label="5 名減らす"
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
                className="flex-1 text-center font-serif text-3xl md:text-4xl font-bold text-ink bg-white border border-border rounded-[6px] py-3 focus:outline-none focus:border-product-orange"
              />
              <span className="shrink-0 text-base md:text-lg text-ink font-semibold">名</span>
              <button
                type="button"
                onClick={() => setPeople((n) => clampPeople(n + 5))}
                className="shrink-0 w-11 h-11 flex items-center justify-center rounded-full border border-border bg-white text-ink hover:border-ink transition-colors"
                aria-label="5 名増やす"
              >
                <Plus className="w-4 h-4" strokeWidth={2} />
              </button>
            </div>
            <p className="mt-2 text-xs text-mid">5 名単位でも、自由入力でも調整できます（1〜200 名）。</p>
          </div>

          {/* プラン選択 */}
          <fieldset className="mb-6 md:mb-8">
            <legend className="block text-sm md:text-base font-semibold text-ink mb-3">
              使う機能
            </legend>
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 rounded-[6px] bg-white border border-product-orange p-4">
                <span
                  className="shrink-0 flex items-center justify-center w-5 h-5 rounded-[4px] bg-product-orange text-white"
                  aria-hidden="true"
                >
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <span className="flex-1 text-[14px] md:text-[15px] text-ink">
                  <strong>フロア機能（必須）</strong>
                  <span className="ml-2 text-mid">¥{FLOOR_PRICE}／1 名</span>
                </span>
              </div>
              <label className="flex items-center gap-3 rounded-[6px] bg-white border border-border p-4 cursor-pointer hover:border-ink transition-colors">
                <input
                  type="checkbox"
                  checked={transport}
                  onChange={(e) => setTransport(e.target.checked)}
                  className="shrink-0 w-5 h-5 accent-product-orange cursor-pointer"
                />
                <span className="flex-1 text-[14px] md:text-[15px] text-ink">
                  <strong>送迎機能</strong>
                  <span className="ml-2 text-mid">＋¥{TRANSPORT_PRICE}／1 名</span>
                </span>
              </label>
              <label className="flex items-center gap-3 rounded-[6px] bg-white border border-border p-4 cursor-pointer hover:border-ink transition-colors">
                <input
                  type="checkbox"
                  checked={backoffice}
                  onChange={(e) => setBackoffice(e.target.checked)}
                  className="shrink-0 w-5 h-5 accent-product-orange cursor-pointer"
                />
                <span className="flex-1 text-[14px] md:text-[15px] text-ink">
                  <strong>管理者業務</strong>
                  <span className="ml-2 text-mid">＋¥{BACKOFFICE_PRICE}／1 名</span>
                </span>
              </label>
            </div>
          </fieldset>

          {/* 合計 */}
          <div className="rounded-[8px] bg-white border border-border p-5 md:p-6">
            <ul className="space-y-1.5 text-[13px] md:text-[14px] text-stone mb-4">
              <li className="flex justify-between">
                <span>フロア機能：¥{FLOOR_PRICE} × {people} 名</span>
                <strong className="text-ink">¥{floorCost.toLocaleString()}</strong>
              </li>
              {transport && (
                <li className="flex justify-between">
                  <span>送迎機能：¥{TRANSPORT_PRICE} × {people} 名</span>
                  <strong className="text-ink">¥{transportCost.toLocaleString()}</strong>
                </li>
              )}
              {backoffice && (
                <li className="flex justify-between">
                  <span>管理者業務：¥{BACKOFFICE_PRICE} × {people} 名</span>
                  <strong className="text-ink">¥{backofficeCost.toLocaleString()}</strong>
                </li>
              )}
            </ul>
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
