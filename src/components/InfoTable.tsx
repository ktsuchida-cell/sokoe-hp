import type { ReactNode } from 'react';

export type InfoRow = {
  label: string;
  value: ReactNode;
};

type InfoTableProps = {
  rows: InfoRow[];
  /** aria-label */
  caption?: string;
  /** ラベル列の幅 */
  labelWidth?: 'narrow' | 'medium' | 'wide';
};

/**
 * 「項目名 ｜ 値」の2カラムテーブル。
 * 会社概要・特商法表記・採用要項などで使う。
 * 影なし・ボーダーで罫線を引く編集メディア風スタイル。
 */
export function InfoTable({ rows, caption, labelWidth = 'medium' }: InfoTableProps) {
  const labelWidthClass = {
    narrow: 'md:w-32',
    medium: 'md:w-44',
    wide: 'md:w-56',
  }[labelWidth];

  return (
    <dl aria-label={caption} className="border-t border-border-soft">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex flex-col gap-1 border-b border-border-soft py-5 md:flex-row md:gap-8 md:py-6"
        >
          <dt
            className={`shrink-0 text-sm font-medium uppercase tracking-wider text-charcoal-muted md:text-base md:normal-case md:tracking-normal md:text-charcoal ${labelWidthClass}`}
          >
            {row.label}
          </dt>
          <dd className="flex-1 text-base leading-relaxed text-ink md:text-base">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
