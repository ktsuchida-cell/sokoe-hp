import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { cn } from '@/lib/cn';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type BusinessCard = {
  number: string;
  name: string;
  product: string;
  description: string;
  href: string;
  status: 'live' | 'soon';
  isProduct: 'day' | 'aiLab' | null; // sokoe Day だけオレンジtint
};

const businesses: BusinessCard[] = [
  {
    number: '01',
    name: 'sokoe',
    product: 'Day',
    description:
      'デイサービス向けアプリ。1日型・半日型・ハイブリッド型に対応。自社運営施設で2026年4月から本番稼働中。',
    href: '/day-service/',
    status: 'live',
    isProduct: 'day',
  },
  {
    number: '02',
    name: 'sokoe',
    product: 'Facility',
    description: '介護施設向けシステム。Phase 2（2027年前半）で公開予定。',
    href: '/facility/',
    status: 'soon',
    isProduct: null,
  },
  {
    number: '03',
    name: 'sokoe',
    product: 'Pharma',
    description: '薬局向けアプリ。Phase 3（2027年後半）で公開予定。',
    href: '/pharmacy/',
    status: 'soon',
    isProduct: null,
  },
  {
    number: '04',
    name: 'sokoe',
    product: 'AI Lab',
    description:
      '介護・薬局・医療の現場で AI を毎日使っている会社の AI コンサルティング。戦略策定から伴走まで。',
    href: '/consulting/',
    status: 'live',
    isProduct: 'aiLab',
  },
];

/**
 * What we do セクション
 *
 * Step 4 + 4.6 デザイン方針：
 * - エディトリアル組み版（ラベル + セリフ系見出し）
 * - sokoe Day カードのみオレンジtint背景（プロダクト個性）
 * - sokoe AI Lab はコーポレート赤継承
 * - Facility / Pharma は中立トーン（Phase 2-3 で個別色を策定）
 * - ホバー時はボーダーが黒に変化（影なし）
 */
export function WhatWeDo() {
  return (
    <Section variant="soft" spacing="lg" bordered>
      <Container>
        <div className="text-center mb-16 md:mb-20">
          <Label className="mb-5">WHAT WE DO</Label>
          <Heading level="h2" className="mb-6">
            4 つの事業
          </Heading>
          <p className="text-stone text-base md:text-lg max-w-2xl mx-auto leading-[1.85]">
            ヘルスケア領域の現場で動くソフトウェアと、AIコンサルティング。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {businesses.map((biz) => (
            <Link key={biz.number} href={biz.href} className="group block">
              <Card
                variant={biz.isProduct === 'day' ? 'tint-orange' : 'default'}
                interactive
                padding="lg"
                className="h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <span
                    className={cn(
                      'font-serif text-[42px] md:text-[52px] font-bold leading-none',
                      biz.isProduct === 'day' && 'text-product-orange/50',
                      biz.isProduct === 'aiLab' && 'text-brand-red/50',
                      !biz.isProduct && 'text-mid/40',
                    )}
                  >
                    {biz.number}
                  </span>

                  <Label
                    tone={
                      biz.status === 'live'
                        ? biz.isProduct === 'day'
                          ? 'product-orange'
                          : 'brand-red'
                        : 'mid'
                    }
                  >
                    {biz.status === 'live' ? 'Now Live' : 'Coming Soon'}
                  </Label>
                </div>

                <h3 className="font-bold text-2xl md:text-3xl mb-4 text-ink">
                  <span>{biz.name}</span>{' '}
                  <span
                    className={cn(
                      biz.isProduct === 'day' && 'text-product-orange',
                      biz.isProduct === 'aiLab' && 'text-brand-red',
                    )}
                  >
                    {biz.product}
                  </span>
                </h3>

                <p className="text-stone text-[15px] leading-[1.8] mb-6">{biz.description}</p>

                <div className="flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-brand-red transition-colors">
                  詳しく見る
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
