import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';

const solutions = [
  {
    number: '01',
    title: '紙ゼロ。',
    subtitle: 'スマホ 1 台で完結する設計。',
    description:
      'バインダーを置く場所、紙の保管期限、転記の時間 ── すべてを消す。スマホで撮る、書く、共有する。',
  },
  {
    number: '02',
    title: '一度書けば、もう書かない。',
    subtitle: '情報は連動して動き、伝達ミスを消す。',
    description:
      'バイタル・申し送り・ご家族連絡帳 ── 一度書けば、必要な場所に自動で表示。送迎変更や家族からの伝言も全スタッフのスマホへ即時同期し、口頭・メモによる伝達ミスを消します。',
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
    title: '通所介護計画書も、議事録も、体力測定も AI で。',
    subtitle: 'スタッフが書類づくりから解放される設計。',
    description:
      'ケアマネージャーから受け取った利用者さんの情報を考慮し、施設の通所介護計画書（ケアプラン）へ AI が自動変換。同じ思想で議事録・評価コメントの AI 化も展開しています。具体的な削減時間は実証データのセクションでご紹介しています。',
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
          <Heading level="h2" serif className="mb-6">
            その悩み、sokoe Day で解決できます！
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85]">
            sokoe Day がどのように
            <strong className="text-ink font-bold">デイサービスの現場課題</strong>
            を解決していくのか。
            <br className="hidden md:block" />
            私たちが自社で実証してきた、4つのアプローチをご紹介します。
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
