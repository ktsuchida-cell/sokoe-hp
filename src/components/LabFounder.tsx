import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import Image from 'next/image';

/**
 * LabFounder セクション「伴走するのは、現場の課題に向き合う支援者」
 *
 * 中央に横長プロフィールカード。左に丸い人物写真、右に肩書き / 名前 /
 * 紹介文 / バッジ 2 つ。仕様書 §9。
 */
export function LabFounder() {
  return (
    <Section variant="soft" spacing="lg" bordered>
      <Container>
        <div className="text-center mb-12 md:mb-14">
          <Heading level="h2" serif>
            伴走するのは、
            <br className="hidden md:block" />
            現場の課題に向き合う支援者
          </Heading>
        </div>

        <article className="mx-auto max-w-3xl rounded-[20px] bg-white border border-border p-7 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            {/* 丸型ポートレート */}
            <div className="shrink-0 mx-auto md:mx-0">
              <div className="relative h-32 w-32 md:h-36 md:w-36 rounded-full overflow-hidden border border-coral-light">
                <Image
                  src="/images/founder/lab-founder-portrait.jpg"
                  alt="代表 槌田 一輝のプロフィール写真"
                  fill
                  quality={85}
                  sizes="144px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* テキスト */}
            <div className="flex-1 min-w-0 text-center md:text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-mid mb-2">
                代表 / AI 活用コンサルタント
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">槌田 一輝</h3>
              <p className="text-stone text-[14px] md:text-[15px] leading-[1.85] mb-5">
                医療・介護業界の業務改善と AI
                活用支援を専門とするコンサルタント。現場の声に寄り添い、無理なく成果につながる仕組みづくりを支援します。
              </p>
              <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                <li className="inline-flex items-center rounded-full bg-tint-pink/60 px-3 py-1 text-[11px] font-medium text-brand-red border border-coral-light">
                  医療・介護業界 支援実績多数
                </li>
                <li className="inline-flex items-center rounded-full bg-tint-pink/60 px-3 py-1 text-[11px] font-medium text-brand-red border border-coral-light">
                  研修・コンサル実績多数
                </li>
              </ul>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}
