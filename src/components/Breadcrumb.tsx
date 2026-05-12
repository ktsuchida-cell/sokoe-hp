import { siteConfig } from '@/lib/siteConfig';
import Link from 'next/link';
import { Container } from './Container';
import { JsonLd } from './JsonLd';

const SITE_URL = siteConfig.url;

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  /** Container を出さずインラインで使う場合 */
  bare?: boolean;
};

/**
 * パンくずナビ。先頭の「ホーム」は自動で付与。
 * BreadcrumbList Schema も同時出力（Step 4.7 #88）。
 *
 * 使用例:
 *   <Breadcrumb items={[
 *     { label: '会社情報', href: '/about/' },
 *     { label: '代表プロフィール' }
 *   ]} />
 */
export function Breadcrumb({ items, bare = false }: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = [{ label: 'ホーム', href: '/' }, ...items];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };

  const nav = (
    <nav aria-label="パンくずリスト" className="py-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-charcoal-muted">
        {allItems.map((item, i) => {
          const isLast = i === allItems.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="transition-colors hover:text-brand-red">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className="text-ink">
                  {item.label}
                </span>
              )}
              {!isLast && <span className="text-charcoal-muted/60">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );

  return (
    <>
      <JsonLd data={schema} />
      {bare ? nav : <Container size="default">{nav}</Container>}
    </>
  );
}
