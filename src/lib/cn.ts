import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Tailwindのクラス名を安全にマージするユーティリティ
 * @example
 *   cn('p-4 bg-white', condition && 'border')
 *   cn('p-4', 'p-6') // → 'p-6'（後勝ち、tailwind-mergeが効く）
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
