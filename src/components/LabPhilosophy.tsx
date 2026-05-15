import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';

const philosophies = [
  {
    number: '01',
    title: '使っている会社が、教える。',
    description:
      '私たちは自社で sokoe Day を運用し、ChatGPT API・Claude API を毎日使ってケアプラン生成、議事録自動化、評価コメント生成を本番運用しています。「使ったことのある会社」が「使ったことのない会社」に伝授するから、現場で動きます。',
  },
  {
    number: '02',
    title: '机上のロードマップは作らない。',
    description:
      'PowerPoint の戦略書を渡して終わり、ではありません。各フェーズで実際に動くプロトタイプを作り、現場での反応を確認しながら進めます。3ヶ月後に「動いていない PoC」を見るのではなく、3週間後に「現場で使われている AI」を見ます。',
  },
  {
    number: '03',
    title: '現場のスタッフを、置き去りにしない。',
    description:
      'AI 導入の失敗の大半は、技術ではなく「現場が使わない」ことです。私たちはコーチングとして、スタッフの不安・抵抗・運用設計を最重視します。施設長代理として現場経験のある代表が、スタッフ目線で伴走します。',
  },
];

/**
 * AI Lab の哲学セクション
 *
 * Step 3-D §3 + Step 4.5 §5 「コンサル感×思想」訴求：
 * - 3つの哲学で他社コンサルとの差別化
 * - 「自社で使ってる」「机上ではない」「現場視点」
 * - Step 4 §6.2 エディトリアル組み版
 *
 * Step 4.8 GEO/AEO：
 * - 具体的なエンティティ（ChatGPT API、Claude API、sokoe Day）を多用
 * - AI 引用率を高める「具体的事実 + 抽象的洞察」の組み合わせ
 */
export function LabPhilosophy() {
  return (
    <Section variant="soft" spacing="lg" bordered>
      <Container>
        <div className="max-w-3xl mb-14 md:mb-16">
          <Label className="mb-5">OUR PHILOSOPHY</Label>
          <Heading level="h2" serif className="mb-6">
            なぜ、sokoe AI Lab か。
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85]">
            医療・介護・福祉領域の AI コンサルは数多くあります。
            <br className="hidden md:block" />
            私たちが、3つの点で違うこと。
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {philosophies.map((p) => (
            <article
              key={p.number}
              className="grid grid-cols-12 gap-6 md:gap-12 pb-12 md:pb-16 border-b border-border last:border-b-0 last:pb-0"
            >
              <div className="col-span-12 md:col-span-3">
                <p className="font-serif text-[64px] md:text-[88px] font-bold text-brand-red/15 leading-[0.9]">
                  {p.number}
                </p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-bold text-2xl md:text-3xl text-ink mb-5 leading-snug">
                  {p.title}
                </h3>
                <p className="text-stone text-base md:text-lg leading-[1.95] max-w-3xl">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
