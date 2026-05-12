import { cn } from '@/lib/cn';
import type { HTMLAttributes, ReactNode } from 'react';

type CardVariant = 'default' | 'soft' | 'tint-pink' | 'tint-orange';
type CardPadding = 'sm' | 'md' | 'lg';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  padding?: CardPadding;
  interactive?: boolean;
  children: ReactNode;
};

/**
 * Card コンポーネント
 *
 * Step 4 方針：影で浮かさず、ボーダーで表現する。
 * ホバー時はボーダーが黒に変わる（一気にコンサル感）。
 *
 * - default: 白背景＋薄いボーダー
 * - soft: Off-White 背景＋薄いボーダー
 * - tint-pink: 薄ピンク背景（半日型対応セクション等の強調用）
 * - tint-orange: 薄オレンジ背景（sokoe Day 関連の強調用）
 */
export function Card({
  variant = 'default',
  padding = 'md',
  interactive = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[6px] border transition-colors duration-200 ease-out',

        // バリアント別背景・ボーダー
        variant === 'default' && 'bg-white border-border',
        variant === 'soft' && 'bg-off-white border-border',
        variant === 'tint-pink' && 'bg-tint-pink border-tint-pink',
        variant === 'tint-orange' && 'bg-tint-orange border-tint-orange',

        // パディング別
        padding === 'sm' && 'p-5',
        padding === 'md' && 'p-7',
        padding === 'lg' && 'p-10',

        // インタラクティブ（ホバー反応）
        interactive && [
          'cursor-pointer',
          'hover:border-ink',
          variant === 'tint-pink' && 'hover:bg-tint-pink hover:border-brand-red/30',
          variant === 'tint-orange' && 'hover:bg-tint-orange hover:border-product-orange/30',
        ],

        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
