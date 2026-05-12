'use client';

import { Accordion } from '@/components/Accordion';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { labFaqsForSchema } from '@/lib/labFaqs';
import Link from 'next/link';

export function LabFAQ() {
  const accordionItems = labFaqsForSchema.map((faq, i) => ({
    id: `lab-faq-${i + 1}`,
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
            初回相談前によくいただくご質問にお答えします。
          </p>
        </div>

        <Accordion items={accordionItems} />

        <div className="mt-12 text-center">
          <p className="text-stone text-sm md:text-base mb-4">
            他にご質問があれば、無料相談でお気軽にお尋ねください。
          </p>
          <Link
            href="/contact/"
            className="inline-block text-base font-semibold text-brand-red hover:text-brand-red-hover transition-colors"
          >
            無料相談を予約 →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
