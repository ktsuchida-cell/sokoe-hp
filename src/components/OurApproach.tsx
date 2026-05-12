import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';

type Approach = {
  number: string;
  title: string;
  description: string;
};

const approaches: Approach[] = [
  {
    number: '01',
    title: '現場を、知っている。',
    description:
      '介護施設を、私たち自身が運営しています。代表は現役の施設長代理。「現場で動かないツール」を作らないために、私たちは現場にいます。',
  },
  {
    number: '02',
    title: '自分たちで、使っている。',
    description:
      'sokoe Day は、自社運営施設で毎日動いています。AIも、ケアプラン生成も、議事録自動化も、現場の負担を本当に減らすかを、私たちは自分の業務で検証しています。',
  },
  {
    number: '03',
    title: '本来の仕事に、戻す。',
    description:
      '紙の準備、転記、伝達ミス、終わらない記録。本来の仕事ではないことを、技術で消す。利用者と家族に向き合う時間を取り戻す。それが、私たちの仕事です。',
  },
];

/**
 * Our Approach セクション
 *
 * Step 4 §6.2 エディトリアル組み版：
 * - 3項目を「私たちの考え方」として整然と提示
 * - 番号 + セリフ系見出し + 本文
 * - McKinsey/BCG のレポート風
 */
export function OurApproach() {
  return (
    <Section spacing="lg" bordered>
      <Container>
        <div className="max-w-3xl mb-16 md:mb-20">
          <Label className="mb-5">OUR APPROACH</Label>
          <Heading level="h2" className="mb-6">
            私たちの、考え方。
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85]">
            なぜ介護施設を運営する会社が、ソフトウェアと AI を作るのか。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {approaches.map((approach) => (
            <div key={approach.number} className="relative">
              <p className="font-serif text-[64px] md:text-[80px] font-bold text-mid/20 leading-none mb-4">
                {approach.number}
              </p>

              <h3 className="font-bold text-xl md:text-2xl text-ink mb-5 leading-snug">
                {approach.title}
              </h3>

              <p className="text-stone text-[15px] leading-[1.85]">{approach.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
