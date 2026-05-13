'use client';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/cn';
import { type NavItem, mainNavigation } from '@/lib/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * Header コンポーネント (コーポレートサイト用)
 *
 * Step 3-A §4.5 仕様：
 * - 高さ: 72px (PC) / 56px (SP)
 * - スクロール追従
 * - スクロール後に薄影が出る
 * - ドロップダウン（PC: ホバー / SP: タップ）
 * - モバイルメニューは全画面オーバーレイ
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // モバイルメニュー開いてる時のスクロール禁止
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50',
          'bg-white/95 backdrop-blur-sm',
          'border-b transition-all duration-200',
          scrolled ? 'border-border shadow-sm' : 'border-transparent',
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-[56px] md:h-[72px]">
            {/* ロゴ */}
            <Link
              href="/"
              className="shrink-0 transition-opacity hover:opacity-80"
              aria-label="sokoe ホーム"
            >
              <Logo variant="lockup-horizontal" theme="default" height={40} priority />
            </Link>

            {/* PC ナビゲーション */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="メインナビゲーション">
              {mainNavigation.map((item) => (
                <NavItemPC
                  key={item.label}
                  item={item}
                  isOpen={openDropdown === item.label}
                  onOpenChange={(open) => setOpenDropdown(open ? item.label : null)}
                />
              ))}
            </nav>

            {/* PC CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact/">
                <Button variant="secondary" size="md">
                  お問い合わせ
                </Button>
              </Link>
            </div>

            {/* モバイル：ハンバーガー */}
            <button
              type="button"
              className="lg:hidden p-2 -mr-2"
              onClick={() => setMobileOpen(true)}
              aria-label="メニューを開く"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </Container>
      </header>

      {/* ヘッダー分のスペーサー */}
      <div className="h-[56px] md:h-[72px]" aria-hidden="true" />

      {/* モバイルメニュー */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

/* ─────────────────────────────────────────────
   PC ナビゲーションアイテム（ドロップダウン対応）
   ───────────────────────────────────────────── */

type NavItemPCProps = {
  item: NavItem;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

function NavItemPC({ item, isOpen, onOpenChange }: NavItemPCProps) {
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className={cn(
          'px-4 py-2 text-[16px] font-medium text-charcoal',
          'transition-colors hover:text-brand-red',
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <button
        type="button"
        className={cn(
          'flex items-center gap-1 px-4 py-2 text-[16px] font-medium text-charcoal',
          'transition-colors hover:text-brand-red',
        )}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {item.label}
        <ChevronDown className="w-4 h-4" strokeWidth={2} />
      </button>

      {isOpen && (
        <div className={cn('absolute top-full left-0 pt-2', 'min-w-[280px]')} role="menu">
          <div className="bg-white border border-border rounded-[6px] shadow-md py-2">
            {item.children?.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                className={cn(
                  'block px-5 py-3 text-[15px] text-charcoal',
                  'transition-colors hover:bg-soft-bg hover:text-brand-red',
                )}
                role="menuitem"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   モバイルメニュー（全画面オーバーレイ）
   ───────────────────────────────────────────── */

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-[60] bg-white',
        'transition-transform duration-300 ease-out',
        open ? 'translate-x-0' : 'translate-x-full',
      )}
      aria-hidden={!open}
    >
      <div className="flex items-center justify-between px-6 h-[56px] border-b border-border">
        <Logo variant="lockup-horizontal" theme="default" height={40} priority />
        <button type="button" onClick={onClose} className="p-2 -mr-2" aria-label="メニューを閉じる">
          <X className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </div>

      <nav className="px-6 py-8 overflow-y-auto h-[calc(100%-56px)]">
        <ul className="space-y-1">
          {mainNavigation.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <details className="group">
                  <summary className="flex items-center justify-between py-4 cursor-pointer list-none border-b border-border">
                    <span className="font-semibold text-[16px] text-ink">{item.label}</span>
                    <ChevronDown
                      className="w-5 h-5 transition-transform group-open:rotate-180"
                      strokeWidth={1.5}
                    />
                  </summary>
                  <ul className="py-2 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="block py-3 text-[15px] text-stone hover:text-brand-red"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-4 font-semibold text-[16px] text-ink border-b border-border"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-3">
          <Link href="/contact/" onClick={onClose} className="block">
            <Button variant="primary" size="lg" fullWidth>
              お問い合わせ
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
