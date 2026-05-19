'use client';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/cn';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const labNav = [
  { label: 'サービス', href: '#services' },
  { label: 'カリキュラム', href: '#curriculum' },
  { label: '導入事例', href: '#use-cases' },
  { label: '支援の流れ', href: '#process' },
  { label: 'よくあるご質問', href: '#faq' },
  { label: '会社情報', href: '/about/' },
];

/**
 * AI Lab LP 専用 Header（コーポレート Header.tsx とは別物）
 *
 * 仕様書 §Header：
 *   - 高さ 64-72px、横幅いっぱい、白背景
 *   - 左：赤アイコン + sokoe AI Lab + 小説明（医療・介護向け AI コンサル / AI 研修）
 *   - 中央：サービス / カリキュラム / 導入事例 / 支援の流れ / よくあるご質問 / 会社情報
 *   - 右：資料ダウンロード（白）/ 無料相談する（赤）
 *   - 上部固定ではなく通常配置
 */
export function LabHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="w-full bg-white border-b border-border">
        <Container>
          <div className="flex items-center justify-between h-16">
            {/* ─── 左：sokoe ロゴ + AI Lab サブテキスト ─── */}
            <Link
              href="/consulting/"
              className="flex items-center gap-3"
              aria-label="sokoe AI Lab ホーム"
            >
              <Logo variant="lockup-horizontal" theme="default" height={32} priority />
              <span className="hidden md:flex flex-col leading-tight border-l border-border pl-3">
                <span className="font-serif text-[13px] font-bold text-ink">AI Lab</span>
                <span className="text-[10px] text-mid font-medium whitespace-nowrap">
                  医療・介護向けAIコンサルティング / AI研修
                </span>
              </span>
            </Link>

            {/* ─── 中央：ナビ（PC） ─── */}
            <nav
              className="hidden lg:flex items-center gap-x-7"
              aria-label="AI Lab メインナビゲーション"
            >
              {labNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[13px] font-medium text-charcoal hover:text-brand-red transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* ─── 右：CTA（PC） ─── */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Link href="/day-service/document/">
                <Button variant="secondary" size="sm" className="rounded-full whitespace-nowrap">
                  資料ダウンロード
                </Button>
              </Link>
              <Link href="/contact/?type=sokoe-ailab">
                <Button variant="primary" size="sm" className="rounded-full whitespace-nowrap">
                  無料相談する
                </Button>
              </Link>
            </div>

            {/* ─── モバイル：ハンバーガー ─── */}
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

      {/* ─── モバイルメニュー ─── */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-white',
          'transition-transform duration-300 ease-out',
          mobileOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-border">
          <Link
            href="/consulting/"
            className="flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
            aria-label="sokoe AI Lab ホーム"
          >
            <Logo variant="lockup-horizontal" theme="default" height={32} priority />
            <span className="font-serif text-[12px] font-bold text-ink border-l border-border pl-2">
              AI Lab
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="p-2 -mr-2"
            aria-label="メニューを閉じる"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>

        <nav className="px-6 py-8 overflow-y-auto h-[calc(100%-64px)]">
          <ul className="space-y-1">
            {labNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 font-semibold text-[16px] text-ink border-b border-border"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-3">
            <Link
              href="/day-service/document/"
              onClick={() => setMobileOpen(false)}
              className="block"
            >
              <Button variant="secondary" size="lg" fullWidth>
                資料ダウンロード
              </Button>
            </Link>
            <Link
              href="/contact/?type=sokoe-ailab"
              onClick={() => setMobileOpen(false)}
              className="block"
            >
              <Button variant="primary" size="lg" fullWidth>
                無料相談する
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
