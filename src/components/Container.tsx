import { cn } from '@/lib/cn';
import type { HTMLAttributes, ReactNode } from 'react';

type ContainerSize = 'narrow' | 'default' | 'wide' | 'full';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize;
  children: ReactNode;
};

/**
 * Container コンポーネント
 *
 * - narrow: 記事本文用（max-w 768px）
 * - default: 通常コンテンツ用（max-w 1200px）★ デフォルト
 * - wide: ヒーローや横長要素用（max-w 1440px）
 * - full: 制限なし（フルブリード写真など）
 */
export function Container({ size = 'default', className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full',
        size === 'narrow' && 'max-w-[768px] px-6 md:px-8',
        size === 'default' && 'max-w-[1200px] px-6 md:px-12',
        size === 'wide' && 'max-w-[1440px] px-6 md:px-12',
        size === 'full' && 'px-0',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
