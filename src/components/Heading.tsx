import { cn } from '@/lib/cn';
import type { HTMLAttributes, ReactNode } from 'react';

type HeadingLevel = 'display' | 'h1' | 'h2' | 'h3' | 'h4';
type HeadingTone = 'ink' | 'charcoal' | 'white' | 'brand-red';

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level: HeadingLevel;
  /** 実際にレンダリングする HTML タグを上書き（SEO 観点で h1 は 1 ページに 1 つに揃えるため） */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  serif?: boolean;
  tone?: HeadingTone;
  children: ReactNode;
};

/**
 * Heading コンポーネント
 *
 * Step 4 §4.4 スケール準拠：
 *   - display: 80-96px / 48-56px (セリフ体推奨、ヒーロー用)
 *   - h1:      48-64px / 32-40px
 *   - h2:      32-40px / 24-28px
 *   - h3:      24-28px / 20-24px
 *   - h4:      20-22px
 *
 * serif=true でセリフ体（Playfair Display + Noto Serif JP）を適用。
 * 通常見出しは Sans でクリーンに、ヒーロー級だけセリフでコンサル感を演出。
 */
export function Heading({
  level,
  as,
  serif = false,
  tone = 'ink',
  className,
  children,
  ...props
}: HeadingProps) {
  // as が指定されなければ level に合わせる（display は h1 として描画）
  const Tag = as ?? (level === 'display' ? 'h1' : level);

  return (
    <Tag
      className={cn(
        // 共通：行間タイト、文字間マイナス
        'font-bold leading-[1.2] tracking-tight',

        // フォントファミリー
        serif ? 'font-serif' : 'font-sans',

        // 色
        tone === 'ink' && 'text-ink',
        tone === 'charcoal' && 'text-charcoal',
        tone === 'white' && 'text-white',
        tone === 'brand-red' && 'text-brand-red',

        // サイズ（モバイル 375 で日本語が変な位置で折り返さないよう、起点を絞る）
        level === 'display' && [
          'text-[32px] sm:text-[44px] md:text-[64px] lg:text-[80px]',
          'leading-[1.1] sm:leading-[1.05]',
          '-tracking-[0.025em]',
        ],
        level === 'h1' && 'text-[26px] sm:text-[34px] md:text-[48px] lg:text-[60px]',
        level === 'h2' && 'text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px]',
        level === 'h3' && 'text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px]',
        level === 'h4' && 'text-[17px] sm:text-[19px] md:text-[22px]',

        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
