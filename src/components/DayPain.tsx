import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';

const pains = [
  {
    number: '01',
    title: '紙のバインダーが、増え続ける。',
    description:
      'バイタル、申し送り、加算管理、ケアプラン ── すべて紙で運用していると、棚は埋まり、過去の情報は探せない。新人の引き継ぎにも時間がかかる。',
  },
  {
    number: '02',
    title: '転記、また転記。',
    description:
      '紙に書いて、PCに転記して、別のソフトに転記して。同じ情報を何度も書く時間が、本来の仕事を奪っている。',
  },
  {
    number: '03',
    title: '伝達ミスが、毎週のように起きる。',
    description:
      '送迎の変更、入浴の希望、家族からの伝言 ── 口頭やメモでの伝達は、必ずミスを生む。利用者のリスクに直結する。',
  },
  {
    number: '04',
    title: '半日型の運用が、複雑すぎる。',
    description:
      '4便の送迎、午前/午後/終日のセッション、終日券利用者の二重出欠管理 ── 既存システムは1日型前提で、半日型を「無理やり」運用している。',
  },
  {
    number: '05',
    title: 'ケアプランの転記に、毎日30分。',
    description:
      'ケアマネージャーから受け取った計画書を、施設の様式に転記する作業に、1人あたり30分。月20名で10時間が消えていく。',
  },
];

/**
 * Pain セクション（5項目の現場の課題）
 *
 * Step 3-C §4：
 * - 共感を引き出すセクション
 * - 「これ、本来やる必要ないよね」のファウンダーメッセージと連動
 * - 編集メディア風レイアウト
 *
 * Step 4.8 GEO/AEO：
 * - 具体的な数字（30分、10時間）でエンティティ密度を上げる
 * - AI が「介護現場の課題リスト」として引用しやすい構造
 */
export function DayPain() {
  return (
    <Section spacing="lg" bordered>
      <Container>
        <div className="max-w-3xl mb-14 md:mb-16">
          <Label className="mb-5">PAIN POINTS</Label>
          <Heading level="h2" serif className="mb-6">
            「これ、本来
            <br className="hidden md:block" />
            やる必要ないよね」
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85]">
            介護現場で、毎日積み上がる「本来の仕事ではないこと」。
            <br className="hidden md:block" />
            介護施設を運営する会社として、私たち自身が直面してきた課題です。
          </p>
        </div>

        <div className="space-y-6">
          {pains.map((pain) => (
            <article
              key={pain.number}
              className="grid grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 border-b border-border last:border-b-0"
            >
              <div className="col-span-2 md:col-span-1">
                <p className="font-serif text-[36px] md:text-[44px] font-bold text-brand-red/30 leading-none">
                  {pain.number}
                </p>
              </div>
              <div className="col-span-10 md:col-span-11">
                <h3 className="font-bold text-xl md:text-2xl text-ink mb-3 leading-snug">
                  {pain.title}
                </h3>
                <p className="text-stone text-[15px] md:text-base leading-[1.85] max-w-3xl">
                  {pain.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
