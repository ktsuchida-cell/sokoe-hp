export type TimelineItem = {
  /** 年（西暦4桁推奨） */
  year: string;
  /** 月（任意） */
  month?: string;
  /** 出来事の見出し */
  event: string;
  /** 補足説明（任意） */
  detail?: string;
};

type TimelineProps = {
  items: TimelineItem[];
  /** 縦線の色を変えたい場合 */
  accent?: 'red' | 'neutral';
};

/**
 * 経歴年表（プロフィールページ用）。
 * 各項目を <time> 要素でマークアップして機械可読に。
 * Step 4.7 #109「経歴年表が機械可読」対応。
 */
export function Timeline({ items, accent = 'red' }: TimelineProps) {
  const dotColor = accent === 'red' ? 'bg-brand-red' : 'bg-ink';

  return (
    <ol className="relative border-l-2 border-border-soft">
      {items.map((item, i) => {
        const isoDate = item.month
          ? `${item.year}-${item.month.replace(/[^0-9]/g, '').padStart(2, '0')}`
          : item.year;
        return (
          <li key={`${item.year}-${item.event}-${i}`} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden
              className={`absolute -left-[7px] top-1.5 size-3 rounded-full ${dotColor}`}
            />
            <time
              dateTime={isoDate}
              className="block font-display text-2xl font-medium leading-none tracking-tight text-ink"
            >
              {item.year}
              {item.month && (
                <span className="ml-2 text-base text-charcoal-muted">{item.month}</span>
              )}
            </time>
            <h3 className="mt-3 text-lg font-medium text-ink">{item.event}</h3>
            {item.detail && (
              <p className="mt-2 text-base leading-relaxed text-charcoal">{item.detail}</p>
            )}
          </li>
        );
      })}
    </ol>
  );
}
