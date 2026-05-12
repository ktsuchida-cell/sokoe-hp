import { cn } from '@/lib/cn';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'product' | 'ghost' | 'white';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: ReactNode;
};

/**
 * Button コンポーネント
 *
 * - primary: ブランド赤の塗りつぶし（コーポレート CTA の標準）
 * - secondary: 黒ボーダー（コンサル感を出すため、赤ボーダーではない）
 * - product: sokoe Day 専用のオレンジ（プロダクト固有 CTA、限定使用）
 * - ghost: 背景なし、テキストとアンダーラインのみ
 * - white: 赤背景の上で使う白塗り（ラストCTA セクション用）
 *
 * 角丸は 4px に統一（Step 4 方針：モダンSaaS過ぎを避ける）
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        // 共通スタイル
        'inline-flex items-center justify-center gap-2',
        'font-sans font-semibold tracking-wide',
        'rounded-[4px]',
        'transition-colors duration-200 ease-out',
        'focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',

        // サイズ別
        size === 'sm' && 'px-5 py-2.5 text-sm',
        size === 'md' && 'px-7 py-3.5 text-base',
        size === 'lg' && 'px-9 py-4 text-base md:text-lg',

        // バリアント別
        variant === 'primary' && [
          'bg-brand-red text-white',
          'hover:bg-brand-red-hover',
          'active:bg-brand-red-active',
        ],
        variant === 'secondary' && [
          'bg-transparent text-ink',
          'border-[1.5px] border-ink',
          'hover:bg-ink hover:text-white',
        ],
        variant === 'product' && [
          'bg-product-orange text-white',
          'hover:bg-product-orange-hover',
          'active:bg-product-orange-active',
        ],
        variant === 'ghost' && ['bg-transparent text-ink', 'hover:text-brand-red'],
        variant === 'white' && [
          'bg-white text-ink',
          'hover:bg-off-white',
          'border border-transparent',
        ],

        // 幅
        fullWidth && 'w-full',

        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
