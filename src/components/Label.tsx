import { cn } from '@/lib/cn';
import type { HTMLAttributes, ReactNode } from 'react';

type LabelTone = 'mid' | 'brand-red' | 'product-orange' | 'white';

type LabelProps = HTMLAttributes<HTMLParagraphElement> & {
  tone?: LabelTone;
  children: ReactNode;
};

/**
 * Label コンポーネント
 *
 * 編集メディア風の小ラベル。見出しの直前に置いて「セクションの種類」を示す。
 *
 * 例：
 *   <Label>CONSULTING FOR HEALTHCARE</Label>
 *   <Heading level="display" serif>現場を、本来の仕事に戻す。</Heading>
 *
 * Step 4 §4.3 で確定した「ラベル → セリフ見出し」のコンサル定番組み合わせ。
 */
export function Label({ tone = 'mid', className, children, ...props }: LabelProps) {
  return (
    <p
      className={cn(
        'font-sans text-[12px] sm:text-[13px] font-semibold',
        'tracking-[0.15em] uppercase',

        tone === 'mid' && 'text-mid',
        tone === 'brand-red' && 'text-brand-red',
        tone === 'product-orange' && 'text-product-orange',
        tone === 'white' && 'text-white/80',

        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
