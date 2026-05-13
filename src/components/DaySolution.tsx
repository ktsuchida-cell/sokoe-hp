import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';

const solutions = [
  {
    number: '01',
    title: '紙ゼロ。',
    subtitle: 'タブレット1枚で完結する設計。',
    description:
      'バインダーを置く場所、紙の保管期限、転記の時間 ── すべてを消す。タブレットで撮る、書く、共有する。',
  },
  {
    number: '02',
    title: '一度書けば、もう書かない。',
    subtitle: '情報は連動して動き、伝達ミスを消す。',
    description:
      'バイタル・申し送り・ご家族連絡帳 ── 一度書けば、必要な場所に自動で表示。送迎変更や家族からの伝言も全スタッフのタブレットへ即時同期し、口頭・メモによる伝達ミスを消します。',
  },
  {
    number: '03',
    title: '半日型を、半日型のまま運用。',
    subtitle: '1日型の妥協ではない、固有設計。',
    description:
      '4便構成、セッション管理、半日型加算 ── 1日型を流用するのではなく、半日型のために設計された機能。',
  },
  {
    number: '04',
    title: 'ケアプランの 30 分を、3 分に。',
    subtitle: 'OCR + AI で、転記時間をほぼゼロに。',
    description:
      'ケアマネージャーから受け取った計画書を、AI が施設様式へ自動変換。月20名なら 10 時間消えていた業務を、ほぼゼロに。同じ思想で議事録 AI・評価コメント AI も展開しています。',
  },
];

/**
 * Solution セクション（4つの解決）
 *
 * Step 3-C §5：
 * - Pain → Solution の流れで構造的に納得感
 * - グリッドレイアウト、オレンジアクセント
 *
 * Step 4.8 GEO/AEO：
 * - 「数字 + 名詞 + 動詞」の構造化文
 * - AI が解決策リストとして引用しやすい
 */
export function DaySolution() {
  return (
    <Section variant="tint-orange" spacing="lg" bordered>
      <Container>
        <div className="max-w-3xl mb-14 md:mb-16">
          <Label tone="product-orange" className="mb-5">
            OUR SOLUTION
          </Label>
          <Heading level="h2" serif className="mb-6">
            sokoe Day の、
            <br className="hidden md:block" />
            解決の仕方。
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85]">
            機能の話ではなく、
            <strong className="text-ink font-bold">運用の哲学</strong>から考える。
            <br className="hidden md:block" />
            私たちが自社で実証してきた、4つのアプローチ。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.number}
              className="bg-white border border-border rounded-[6px] p-8 md:p-10"
            >
              <p className="font-serif text-[40px] md:text-[52px] font-bold text-product-orange/40 leading-none mb-5">
                {solution.number}
              </p>
              <h3 className="font-bold text-xl md:text-2xl text-ink mb-2 leading-snug">
                {solution.title}
              </h3>
              <p className="text-product-orange font-semibold text-base md:text-lg mb-5">
                {solution.subtitle}
              </p>
              <p className="text-stone text-[15px] md:text-base leading-[1.85]">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
