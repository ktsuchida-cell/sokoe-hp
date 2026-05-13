'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * sokoe Day LP 用の追従 CTA。
 *
 * 仕様：
 *   - Hero（最上部）を抜けたら表示開始（scrollY > 600）
 *   - ページ下端 1200px 以内に入ったら非表示（Footer / DayLastCTA と衝突しないため）
 *   - 主 CTA：「資料をダウンロード（無料）」（戦略 C のリード量重視）
 *   - 閉じるボタンでセッション内のみ非表示（sessionStorage で保持）
 *   - モバイル：画面下端 full-width / デスクトップ：右下フローティング
 */
export function StickyDayCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // 初回マウント時にセッションの dismiss 状態を読み込む
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('sokoe-day-sticky-dismissed') === '1') {
      setDismissed(true);
    }
  }, []);

  // スクロールで表示・非表示を切り替え
  useEffect(() => {
    if (dismissed) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const pastHero = scrollY > 600;
      const distanceToBottom =
        document.documentElement.scrollHeight - (scrollY + window.innerHeight);
      const nearFooter = distanceToBottom < 1200;
      setVisible(pastHero && !nearFooter);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('sokoe-day-sticky-dismissed', '1');
    }
  };

  return (
    <div
      className={`fixed z-40 transition-all duration-300 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'
      } bottom-0 left-0 right-0 md:bottom-6 md:left-auto md:right-6 md:max-w-sm`}
      aria-hidden={!visible}
    >
      <div className="border-t border-border bg-white p-4 shadow-lg md:rounded-[6px] md:border md:p-5">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-product-orange">
              sokoe Day
            </p>
            <p className="mt-1 text-[13px] font-medium leading-snug text-ink md:text-sm">
              機能・料金・導入事例を、まとめてご覧いただけます。
            </p>
            <Link
              href="/day-service/document/"
              className="mt-3 inline-flex w-full items-center justify-center rounded-[4px] bg-product-orange px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:w-auto"
            >
              資料をダウンロード（無料）
            </Link>
          </div>
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="閉じる"
            className="-mr-1 shrink-0 rounded p-1 text-charcoal-muted transition-colors hover:bg-bg-muted hover:text-ink"
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
