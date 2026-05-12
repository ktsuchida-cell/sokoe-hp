'use client';

import { cn } from '@/lib/cn';
import { Minus, Plus } from 'lucide-react';
import { type ReactNode, useState } from 'react';

type AccordionItem = {
  id: string;
  question: string;
  answer: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

/**
 * Accordion コンポーネント (FAQ用)
 *
 * Step 3-D §15.2 の仕様：
 * - クリックで展開（max-height トランジション）
 * - 複数同時展開可能（手風琴ではない）
 * - [+] → [−] のアイコン切替
 * - キーボード操作（Tab + Enter/Space）対応
 */
export function Accordion({ items, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={cn('border-t border-border', className)}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div key={item.id} className="border-b border-border">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              className={cn(
                'flex items-center justify-between gap-6 w-full',
                'py-6 md:py-7 text-left',
                'transition-colors duration-200',
                'hover:text-brand-red',
              )}
            >
              <span className="font-sans font-semibold text-[16px] md:text-[18px] text-ink">
                {item.question}
              </span>
              <span className="shrink-0" aria-hidden="true">
                {isOpen ? (
                  <Minus className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                ) : (
                  <Plus className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                )}
              </span>
            </button>

            <div
              id={`accordion-panel-${item.id}`}
              className={cn(
                'overflow-hidden transition-all duration-300 ease-out',
                isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0',
              )}
              aria-hidden={!isOpen}
            >
              <div className="pb-6 md:pb-8 pr-10 text-stone leading-relaxed text-[15px] md:text-[16px]">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
