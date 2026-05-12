import Image from 'next/image';

export type LogoVariant =
  | 'lockup-horizontal' // マーク左 + 文字右（Header の本命）
  | 'lockup-vertical' // マーク上 + 文字下（縦長スペース・カード等）
  | 'mark' // マークのみ（favicon サイズ感、SNSアイコン）
  | 'wordmark'; // 文字のみ（フッター・規約系の控えめ表示）

export type LogoTheme =
  | 'default' // 白〜淡色背景上で使う（赤マーク・グレー文字）
  | 'inverse' // 赤・暗い色の背景上で使う（白）
  | 'on-gray'; // グレー背景上で使う

type LogoProps = {
  variant?: LogoVariant;
  theme?: LogoTheme;
  /** 表示高さ（px）。横幅は自動 */
  height?: number;
  /** アクセシビリティ用代替テキスト。空文字なら decorative 扱い */
  alt?: string;
  /** Header 用は priority */
  priority?: boolean;
  className?: string;
};

/**
 * sokoe ロゴコンポーネント。
 * `/public/logo/` 配下に配置された 12 バリアントの SVG / PNG を参照する。
 *
 * 推奨される使い分け：
 *   - Header（白背景）         → variant="lockup-horizontal"        theme="default"
 *   - Footer（白背景）         → variant="lockup-horizontal"        theme="default"
 *   - Footer（赤背景）         → variant="lockup-horizontal"        theme="inverse"
 *   - Hero（赤背景キャンペーン）→ variant="lockup-horizontal"        theme="inverse"
 *   - 縦長カードで使うとき     → variant="lockup-vertical"          theme="default"
 *   - 単独マーク（アイコン的）  → variant="mark"                     theme="default"
 *   - 文字だけ品よく見せたい時 → variant="wordmark"                  theme="default"
 *
 * SVG は無限解像度のためサイズによらずクリア。
 * 動的な色変更はしないので img タグで十分（CSS の color/fill は効かない）。
 */
export function Logo({
  variant = 'lockup-horizontal',
  theme = 'default',
  height = 40,
  alt = 'sokoe',
  priority = false,
  className,
}: LogoProps) {
  const fileBase = `${variant}-${theme}`;
  const src = `/logo/${fileBase}.svg`;

  // 各バリアントの本来のアスペクト比（横幅 ÷ 高さ）
  // PDF 元データの viewBox から算出
  const aspectMap: Record<LogoVariant, number> = {
    'lockup-horizontal': 2778 / 945, // ≈ 2.94
    'lockup-vertical': 1, // 正方形
    mark: 1601 / 970, // ≈ 1.65
    wordmark: 2778 / 945, // ≈ 2.94
  };
  const aspect = aspectMap[variant];
  const width = Math.round(height * aspect);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      // SVG は Next.js の最適化対象外（unoptimized 推奨）
      unoptimized
    />
  );
}
