import { cn } from '@/lib/cn';
import type { HTMLAttributes, ReactNode } from 'react';

type SectionVariant = 'default' | 'soft' | 'tint-pink' | 'tint-orange' | 'ink';
type SectionSpacing = 'sm' | 'md' | 'lg' | 'xl';

type SectionProps = HTMLAttributes<HTMLElement> & {
  variant?: SectionVariant;
  spacing?: SectionSpacing;
  bordered?: boolean;
  children: ReactNode;
};

/**
 * Section コンポーネント
 *
 * 「贅沢な余白」（Step 4 方針）を実現するパディング。
 * セクション間の区切りは細い罫線で表現（背景色切替は最小限）。
 *
 * - default: 白背景
 * - soft: Off-White 背景
 * - tint-pink: 薄ピンク背景（半日型対応セクション等）
 * - tint-orange: 薄オレンジ背景（sokoe Day 関連の強調用）
 * - ink: 黒に近い濃い背景（ラストCTAの特別バージョン）
 */
export function Section({
  variant = 'default',
  spacing = 'lg',
  bordered = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'w-full',

        // 背景
        variant === 'default' && 'bg-white',
        variant === 'soft' && 'bg-off-white',
        variant === 'tint-pink' && 'bg-tint-pink',
        variant === 'tint-orange' && 'bg-tint-orange',
        variant === 'ink' && 'bg-ink text-white',

        // 余白（Step 4 §4.5「20-30%増しの贅沢な余白」）
        spacing === 'sm' && 'py-16 md:py-20',
        spacing === 'md' && 'py-20 md:py-24',
        spacing === 'lg' && 'py-24 md:py-32',
        spacing === 'xl' && 'py-28 md:py-40',

        // 上ボーダー（細い罫線でセクション区切り）
        bordered && 'border-t border-border',

        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
