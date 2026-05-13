import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const useCases = [
  {
    metric: '30分 → 数分',
    label: 'ケアプラン転記時間',
    description: 'OCR ＋ 生成 AI で計画書を自動生成',
  },
  {
    metric: '1時間 → 10分',
    label: '担当者会議の議事録',
    description: '音声認識 + AI で自動議事録化',
  },
  {
    metric: '全員に',
    label: '個別フィードバック',
    description: '体力測定 AI 評価で賞状PDFを瞬時に',
  },
  {
    metric: '数秒で',
    label: '名刺データ登録',
    description: 'AI OCR でケアマネ営業データを自動登録',
  },
];

/**
 * Self-Use セクション（自社運営施設での実証）
 *
 * Step 3-C §6 + Step 4.8 §11 自社実践事例：
 * - 「他人事ではなく、自分たちで使っている」E-E-A-T 訴求
 * - 数値訴求でGEO/AEO 引用率を上げる
 * - 画像2（スタッフ2人がタブレットで連携）を使用
 */
export function DaySelfUse() {
  return (
    <Section spacing="lg" bordered>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-14 md:mb-16">
          {/* 左：テキスト */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Label className="mb-5">SELF-USE PROOF</Label>
            <Heading level="h2" serif className="mb-6">
              自分たちで使い、
              <br className="hidden md:block" />
              自分たちで証明する。
            </Heading>
            <p className="text-stone text-base md:text-lg leading-[1.85] mb-8">
              sokoe Day は、自社運営する50名規模のデイサービス「
              <Link
                href="/about/"
                className="text-ink font-semibold underline-offset-4 hover:underline"
              >
                レッツ倶楽部川西能勢口
              </Link>
              」で 2026年4月から本番稼働中。
              <br className="hidden md:block" />
              代表が現役の施設長代理として、毎日 sokoe Day を使い、
              <br className="hidden md:block" />
              改善し、また使っています。
            </p>
            <p className="text-mid text-sm md:text-base leading-[1.85]">
              「現場で動かないツール」を作らないために、
              <br className="hidden md:block" />
              私たちは現場にいます。
            </p>
          </div>

          {/* 右：画像（スタッフ連携シーン） */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] border border-border">
              <Image
                src="/images/hero/dayservice-collab-1672x941.webp"
                alt="自社運営施設で sokoe Day を使いながら、スタッフ2人が利用者情報を相談している様子"
                fill
                quality={85}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>

        {/* 4つの実証メトリクス */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.label}
              className="bg-off-white border border-border rounded-[6px] p-6 md:p-7"
            >
              <p className="font-serif text-2xl md:text-[28px] font-bold text-ink leading-none mb-2">
                {useCase.metric}
              </p>
              <p className="text-xs uppercase tracking-[0.1em] text-mid mb-3">{useCase.label}</p>
              <p className="text-stone text-[13px] md:text-sm leading-[1.7]">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/case/"
            className="inline-flex items-center gap-2 text-base font-semibold text-ink hover:text-brand-red transition-colors group"
          >
            すべての実証事例を見る
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
