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
      '私たち自身が、薬局・介護の現場を運営しています。代表は現役の施設長代理。「現場で動かないツール」を作らないために、私たちは現場にいます。',
  },
  {
    number: '02',
    title: '自分たちで、使っている。',
    description:
      '自社で運営する事業所で、私たちは日々ソフトウェアと AI を実運用しています。本当に現場の負担が減るかを、自分たちの業務で検証してから世に出します。',
  },
  {
    number: '03',
    title: '「心のゆとり」と「残業をゼロ」をお届け。',
    description:
      '紙の準備、転記、伝達ミス、終わらない記録。本来の仕事ではないことを、技術で消す。目の前の人と向き合う時間を取り戻す。それが、私たちの仕事です。',
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
            なぜ薬局・介護事業を運営する会社が、ソフトウェアと AI を作るのか。
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
