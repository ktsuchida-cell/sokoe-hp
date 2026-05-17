import { cn } from '@/lib/cn';
import type { FeatureDetail } from '@/lib/dayFeatureDetails';
import { CheckCircle2, ImageIcon, Sparkles } from 'lucide-react';
import Image from 'next/image';

type Props = {
  feature: FeatureDetail;
  /** 偶数番目は反転（右にテキスト、左に画像） */
  reverse?: boolean;
};

/**
 * RECORE 風の機能詳細ブロック。
 *
 * 左/右 2 カラム（モバイルは縦組み）：
 *   - 一方: ポジショニング小見出し + 機能タイトル（赤の左ボーダー付き）+ 緑チェックの bullets
 *   - 他方: UI 画像（src 未設定時はプレースホルダー）
 *
 * 偶数 index で reverse=true にして交互レイアウトに。
 */
export function DayFeatureDetailBlock({ feature, reverse = false }: Props) {
  return (
    <article
      id={feature.id}
      className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center scroll-mt-24"
    >
      {/* テキスト */}
      <div className={cn('lg:col-span-6', reverse && 'lg:order-2')}>
        <p className="mb-3 text-[13px] text-charcoal font-medium">{feature.positioning}</p>

        <div className="relative mb-7 inline-flex items-center gap-3 border-l-[6px] border-brand-red pl-5 pr-4 py-2">
          <h3 className="font-serif text-[26px] md:text-[32px] font-bold text-ink leading-tight">
            {feature.title}
          </h3>
          {feature.isAI && (
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-product-orange bg-tint-orange px-1.5 py-0.5 rounded-[3px]">
              <Sparkles className="w-2.5 h-2.5" strokeWidth={2} />
              AI
            </span>
          )}
        </div>

        <ul className="space-y-3">
          {feature.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-3 text-stone text-[15px] md:text-base leading-[1.85]"
            >
              <CheckCircle2 className="shrink-0 mt-1 w-5 h-5 text-product-orange" strokeWidth={2} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 画像（または準備中プレースホルダー） */}
      <div className={cn('lg:col-span-6', reverse && 'lg:order-1')}>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px] border border-border bg-bg-muted">
          {feature.image.src ? (
            <Image
              src={feature.image.src}
              alt={feature.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-mid">
              <ImageIcon className="w-10 h-10 mb-3" strokeWidth={1.5} />
              <p className="text-sm font-medium">画面イメージ準備中</p>
              <p className="mt-1 text-xs px-6 text-center leading-relaxed">{feature.image.alt}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
