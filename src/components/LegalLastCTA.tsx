import Link from 'next/link';
import { Button } from './Button';
import { Container } from './Container';
import { Heading } from './Heading';
import { Section } from './Section';

type LegalLastCTAProps = {
  /** 表示見出し（既定：「ご不明な点は、お気軽にお問い合わせください。」） */
  title?: string;
  /** 補足説明 */
  description?: string;
};

/**
 * 規約・ポリシー系ページの末尾に置く控えめな CTA。
 * LP の赤ベタ大型 CTA とは異なり、白背景・テキスト中心の落ち着いた構成。
 */
export function LegalLastCTA({
  title = 'ご不明な点は、お気軽にお問い合わせください。',
  description = '本ページの内容に関するご質問は、お問い合わせフォームよりお寄せください。',
}: LegalLastCTAProps) {
  return (
    <Section spacing="md" className="bg-bg-muted">
      <Container size="default">
        <div className="border-t border-border-soft pt-12 text-center">
          <Heading level="h3" className="mb-4">
            {title}
          </Heading>
          <p className="mb-8 text-base text-charcoal">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/">
              <Button variant="primary">お問い合わせ</Button>
            </Link>
            <Link href="/about/">
              <Button variant="secondary">会社情報</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
