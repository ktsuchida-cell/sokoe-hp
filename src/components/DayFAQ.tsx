'use client';

import { Accordion } from '@/components/Accordion';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { dayFaqsForSchema } from '@/lib/dayFaqs';
import Image from 'next/image';
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
    <>
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
        </Container>
      </Section>

      {/* FAQ 末尾の独立 CTA：画像背景 + 白オーバーレイ */}
      <section
        className="relative isolate overflow-hidden border-t border-border py-16 md:py-20"
        aria-label="FAQ 末尾 個別相談 CTA"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/midcta/faq-cta-coffee.jpg"
            alt=""
            fill
            quality={80}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/72 backdrop-blur-[2px]" aria-hidden="true" />
        </div>

        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading level="h2" serif className="mb-6">
              ここにない疑問は、
              <br className="md:hidden" />
              お気軽にどうぞ。
            </Heading>
            <p className="text-charcoal text-lg md:text-xl leading-[1.85] mb-10">
              代表（現役の施設長代理）が、現場目線で直接お答えします。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact/?type=sokoe-day">
                <Button variant="primary" size="lg">
                  お問い合わせ
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
