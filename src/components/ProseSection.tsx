import type { ReactNode } from 'react';
import { Container } from './Container';
import { Heading } from './Heading';
import { Label } from './Label';
import { Section } from './Section';

type ProseSectionProps = {
  /** uppercase の小ラベル（任意） */
  eyebrow?: string;
  /** セクション見出し */
  title?: string;
  /** 見出しレベル（既定 h2） */
  level?: 'h2' | 'h3';
  /** 見出しをセリフ体にするか（既定 false：通常はサンセリフ） */
  serif?: boolean;
  /** リード文（見出しの直下、本文より少し大きめ） */
  lead?: string;
  /** 本文（プレーンな ReactNode、見出し階層含めて自由に組める） */
  children: ReactNode;
  /** 背景色のバリアント */
  variant?: 'default' | 'muted';
  /** spacing 制御 */
  spacing?: 'md' | 'lg';
  /** Container サイズ（'narrow' | 'default' | 'wide'） */
  containerSize?: 'narrow' | 'default' | 'wide';
};

/**
 * 規約・ポリシー・長文記事に共通で使う本文セクション。
 * Tailwind v4 の独自スタイルで「編集メディア風」のタイポを再現する。
 *
 * 中の <p> <h3> <h4> <ul> <ol> <li> は、grobals.css の .prose-sokoe で組版される想定。
 */
export function ProseSection({
  eyebrow,
  title,
  level = 'h2',
  serif = false,
  lead,
  children,
  variant = 'default',
  spacing = 'md',
  containerSize = 'default',
}: ProseSectionProps) {
  return (
    <Section spacing={spacing} className={variant === 'muted' ? 'bg-bg-muted' : ''}>
      <Container size={containerSize}>
        {(eyebrow || title) && (
          <header className="mb-10 md:mb-12">
            {eyebrow && <Label className="mb-4">{eyebrow}</Label>}
            {title && (
              <Heading level={level} serif={serif} className="mb-4">
                {title}
              </Heading>
            )}
            {lead && <p className="max-w-2xl text-lg leading-relaxed text-charcoal">{lead}</p>}
          </header>
        )}
        <div className="prose-sokoe max-w-prose-sokoe">{children}</div>
      </Container>
    </Section>
  );
}
