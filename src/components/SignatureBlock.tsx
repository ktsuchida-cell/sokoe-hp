import Link from 'next/link';

type SignatureBlockProps = {
  /** 署名者名 */
  name: string;
  /** 役職（複数行可） */
  roles: string[];
  /** プロフィールページへのリンク（任意） */
  profileHref?: string;
  /** 日付（記事の dateModified 用、ISO） */
  isoDate?: string;
  /** 表示用の日付 */
  dateLabel?: string;
};

/**
 * 代表メッセージ・お知らせなどの末尾に置く署名ブロック。
 * 編集メディアの「by 著者名」の流儀。
 */
export function SignatureBlock({
  name,
  roles,
  profileHref,
  isoDate,
  dateLabel,
}: SignatureBlockProps) {
  return (
    <div className="mt-16 border-t border-border-soft pt-8">
      {dateLabel && isoDate && (
        <p className="mb-4 text-sm uppercase tracking-wider text-charcoal-muted">
          <time dateTime={isoDate}>{dateLabel}</time>
        </p>
      )}
      <p className="text-sm text-charcoal-muted">著者</p>
      <p className="mt-1 font-display text-2xl tracking-tight text-ink">
        {profileHref ? (
          <Link href={profileHref} className="transition-colors hover:text-brand-red">
            {name}
          </Link>
        ) : (
          name
        )}
      </p>
      <ul className="mt-2 space-y-0.5 text-sm text-charcoal">
        {roles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
    </div>
  );
}
