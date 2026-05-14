'use client';

import { Accordion } from '@/components/Accordion';
import { Button } from '@/components/Button';
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
    answer: <p className="whitespace-pre-line">{faq.answer}</p>,
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

        <div className="mt-14 md:mt-16 text-center">
          <p className="text-charcoal text-base md:text-lg leading-[1.85] mb-6">
            ここにない疑問がある方は、お気軽にお問い合わせください。
            <br className="hidden md:block" />
            代表（現役の施設長代理）が、現場目線で直接お答えします。
          </p>
          <Link href="/contact/" className="inline-block">
            <Button variant="secondary" size="md">
              お問い合わせ
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
