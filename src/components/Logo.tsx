import { cn } from '@/lib/cn';

type LogoVariant = 'color' | 'reverse' | 'mono';
type LogoLayout = 'horizontal' | 'vertical' | 'mark-only';

type LogoProps = {
  variant?: LogoVariant;
  layout?: LogoLayout;
  className?: string;
  /** プロダクト名を併記（例: "Day", "AI Lab"）。指定時は sokoe の右に並ぶ */
  product?: 'Day' | 'Facility' | 'Pharma' | 'AI Lab';
};

/**
 * Logo コンポーネント
 *
 * Step 5 §7 ロゴガイドライン準拠：
 * - color: カラー版（白〜薄灰背景用）
 * - reverse: 白ヌキ版（赤ベタ・濃色背景用）
 * - mono: モノクロ版（印刷モノクロ）
 *
 * 簡易 SVG 実装（最終版は Illustrator から書き出した SVG に差し替え予定）
 */
export function Logo({ variant = 'color', layout = 'horizontal', className, product }: LogoProps) {
  // 配色
  const colors = {
    color: { symbol: '#ED1A29', coral: '#F4978E', text: '#6E6E6E' },
    reverse: { symbol: '#FFFFFF', coral: '#FFFFFF', text: '#FFFFFF' },
    mono: { symbol: '#2A2A2A', coral: '#9E9E9E', text: '#2A2A2A' },
  }[variant];

  // プロダクト名のテキストカラー
  const productColor =
    product === 'Day'
      ? '#F49E0B'
      : variant === 'reverse'
        ? '#FFFFFF'
        : variant === 'mono'
          ? '#2A2A2A'
          : '#6E6E6E';

  if (layout === 'mark-only') {
    return <LogoMark className={className} symbolColor={colors.symbol} coralColor={colors.coral} />;
  }

  if (layout === 'vertical') {
    return (
      <div className={cn('inline-flex flex-col items-center gap-3', className)}>
        <LogoMark className="w-16 h-16" symbolColor={colors.symbol} coralColor={colors.coral} />
        <LogoText product={product} textColor={colors.text} productColor={productColor} />
      </div>
    );
  }

  // horizontal (default)
  return (
    <div className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark className="w-8 h-8" symbolColor={colors.symbol} coralColor={colors.coral} />
      <LogoText product={product} textColor={colors.text} productColor={productColor} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   内部コンポーネント
   ───────────────────────────────────────────── */

type LogoMarkProps = {
  className?: string;
  symbolColor: string;
  coralColor: string;
};

function LogoMark({ className, symbolColor, coralColor }: LogoMarkProps) {
  // 簡易 SVG（赤の角丸シンボル＋矢印モチーフ）
  // 最終版は sokoe.pdf から書き出した完全な SVG に差し替え
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      role="img"
      aria-label="sokoe logo"
    >
      {/* 角丸の四角シンボル */}
      <rect x="20" y="10" width="70" height="70" rx="14" fill={symbolColor} />
      {/* 左の矢印（コーラルグラデの簡略表現） */}
      <path d="M 5 45 L 25 30 L 25 40 L 50 40 L 50 55 L 25 55 L 25 65 Z" fill={coralColor} />
      {/* 矢印の白抜き部分（シンボル内） */}
      <path d="M 30 35 L 75 35 L 75 50 L 50 50 L 50 60 Z" fill="white" />
    </svg>
  );
}

type LogoTextProps = {
  product?: LogoProps['product'];
  textColor: string;
  productColor: string;
};

function LogoText({ product, textColor, productColor }: LogoTextProps) {
  return (
    <span className="inline-flex items-baseline gap-2">
      <span
        className="font-sans font-medium text-[20px] tracking-[0.05em] leading-none"
        style={{ color: textColor }}
      >
        sokoe
      </span>
      {product && (
        <span
          className="font-sans font-semibold text-[15px] tracking-tight leading-none"
          style={{ color: productColor }}
        >
          {product}
        </span>
      )}
    </span>
  );
}
