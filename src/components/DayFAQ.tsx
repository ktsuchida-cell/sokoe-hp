'use client';

import { Accordion } from '@/components/Accordion';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { dayFaqsForSchema } from '@/lib/dayFaqs';
import Link from 'next/link';

/**
 * sokoe Day LP FAQ セクション
 *
 * Step 3-C §13 + Step 4.7/4.8：
 * - 10問の FAQ
 * - FAQPage Schema と連動（page.tsx 側で生成）
 * - AI Overview / ChatGPT が verbatim 引用しやすい形式
 *
 * Step 4.8 GEO/AEO：
 * - 質問→直接答え→補足の3段構成（AI が引用しやすい）
 * - 数値・固有名詞でエンティティ密度を高める
 */

export function DayFAQ() {
  // Accordion 用のフォーマット変換
  const accordionItems = dayFaqsForSchema.map((faq, i) => ({
    id: `day-faq-${i + 1}`,
    question: faq.question,
    answer: <p>{faq.answer}</p>,
  }));

  return (
    <Section variant="soft" spacing="lg" bordered>
      <Container size="narrow">
        <div className="text-center mb-12 md:mb-14">
          <Label className="mb-5">FAQ</Label>
          <Heading level="h2" className="mb-6">
            よくあるご質問
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85]">
            導入前によくいただくご質問にお答えします。
          </p>
        </div>

        <Accordion items={accordionItems} />

        <div className="mt-12 text-center">
          <p className="text-stone text-sm md:text-base mb-4">
            他にご質問があれば、お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact/"
            className="inline-block text-base font-semibold text-brand-red hover:text-brand-red-hover transition-colors"
          >
            お問い合わせはこちら →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
