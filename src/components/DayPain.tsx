import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import {
  AlertTriangle,
  ClipboardEdit,
  Copy,
  Files,
  SplitSquareHorizontal,
  type LucideIcon,
} from 'lucide-react';

type Pain = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const pains: Pain[] = [
  {
    icon: Files,
    title: '紙のバインダーが、増え続ける。',
    description:
      'バイタル、申し送り、加算管理、ケアプラン ── すべて紙で運用していると、棚は埋まり、過去の情報は探せない。新人の引き継ぎにも時間がかかる。',
  },
  {
    icon: Copy,
    title: '転記、また転記。',
    description:
      '紙に書いて、PCに転記して、別のソフトに転記して。同じ情報を何度も書く時間が、本来の仕事を奪っている。',
  },
  {
    icon: AlertTriangle,
    title: '伝達ミスが、毎週のように起きる。',
    description:
      '送迎の変更、入浴の希望、家族からの伝言 ── 口頭やメモでの伝達は、必ずミスを生む。利用者のリスクに直結する。',
  },
  {
    icon: SplitSquareHorizontal,
    title: '半日型の運用が、複雑すぎる。',
    description:
      '4便の送迎、午前/午後/終日のセッション、終日券利用者の二重出欠管理 ── 既存システムは1日型前提で、半日型を「無理やり」運用している。',
  },
  {
    icon: ClipboardEdit,
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
    <Section variant="soft" spacing="lg" bordered>
      <Container>
        <div className="max-w-3xl mb-14 md:mb-16">
          <Label className="mb-5">PAIN POINTS</Label>
          <Heading level="h2" serif className="mb-6">
            こういう悩み、
            <br className="hidden md:block" />
            ありませんか？
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85]">
            介護現場で、毎日のように繰り返される手間と伝達ミス。
            <br className="hidden md:block" />
            介護施設を運営する会社として、私たち自身もずっと向き合ってきた課題です。
          </p>
        </div>

        <div className="space-y-4 md:space-y-5">
          {pains.map((pain) => {
            const Icon = pain.icon;
            return (
              <article
                key={pain.title}
                className="flex items-start gap-5 md:gap-7 rounded-[8px] bg-white border border-border p-6 md:p-8 transition-shadow hover:shadow-sm"
              >
                <span
                  className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-xl md:text-2xl text-ink mb-3 leading-snug">
                    {pain.title}
                  </h3>
                  <p className="text-stone text-[15px] md:text-base leading-[1.85]">
                    {pain.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
