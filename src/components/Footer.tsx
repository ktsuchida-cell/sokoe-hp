import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { footerNavigation } from '@/lib/navigation';
import { siteConfig } from '@/lib/siteConfig';
import Link from 'next/link';

/**
 * Footer コンポーネント
 *
 * Step 3-A §6 仕様：
 * - 4カラム構造（サービス / お役立ち / 会社情報 / 規約等）
 * - 上部：ロゴ + 会社概要
 * - 下部：コピーライト + 規約リンク
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border">
      <Container>
        {/* メインフッター */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            {/* ロゴ + 会社情報（左の大きいエリア） */}
            <div className="col-span-2">
              <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
                <Logo variant="lockup-horizontal" theme="default" height={32} />
              </Link>
              <p className="text-stone text-sm leading-relaxed max-w-sm">
                {siteConfig.description}
              </p>
              <div className="mt-6 space-y-1 text-[13px] text-mid">
                <p>{siteConfig.fullName}</p>
                <p>代表取締役 {siteConfig.company.representative}</p>
                <p>{siteConfig.contact.address}</p>
              </div>
            </div>

            {/* サービス */}
            <FooterColumn
              title={footerNavigation.services.title}
              items={footerNavigation.services.items}
            />

            {/* お役立ち */}
            <FooterColumn
              title={footerNavigation.knowledge.title}
              items={footerNavigation.knowledge.items}
            />

            {/* 会社情報 */}
            <FooterColumn
              title={footerNavigation.company.title}
              items={footerNavigation.company.items}
            />
          </div>
        </div>

        {/* ボトムバー */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[12px] text-mid">
            © {currentYear} {siteConfig.fullName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerNavigation.legal.items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[12px] text-mid hover:text-brand-red transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   フッターカラム
   ───────────────────────────────────────────── */

type FooterColumnProps = {
  title: string;
  items: Array<{ label: string; href: string }>;
};

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-mid mb-5">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-[13px] text-charcoal hover:text-brand-red transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
