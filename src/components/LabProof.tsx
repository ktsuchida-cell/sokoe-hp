import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';

type ProofCase = {
  number: string;
  title: string;
  challenge: string;
  approach: string;
  result: string;
  tech: string;
};

const proofCases: ProofCase[] = [
  {
    number: '01',
    title: 'ケアプラン第2表 AI 自動生成',
    challenge: 'ケアマネからの計画書を施設様式に転記する作業に1枚30分',
    approach: 'OCR で計画書を構造化 → Claude API でプロンプト設計 → 施設様式に自動マッピング',
    result: '1枚あたり数分に短縮（85%削減）、月20名で10時間の業務削減',
    tech: 'Claude API / AI OCR / Firebase Functions',
  },
  {
    number: '02',
    title: '担当者会議 AI 議事録自動化',
    challenge: 'サービス担当者会議の議事録作成に毎回1時間以上',
    approach: '音声録音 → 音声認識 → Claude による要約・構造化',
    result: '議事録作成 10分以内に短縮（83%削減）',
    tech: '音声認識API / Claude API',
  },
  {
    number: '03',
    title: '体力測定 AI 評価コメント',
    challenge: '個別の評価コメント作成に時間がかかり、形骸化',
    approach: '測定数値から AI が利用者特性を踏まえた個別コメントを生成',
    result: '全利用者に質の高い個別フィードバックを瞬時に提供',
    tech: 'Claude API',
  },
  {
    number: '04',
    title: '名刺 OCR 営業データ自動化',
    challenge: 'ケアマネ名刺の手動入力負荷、入力ミス',
    approach: '撮影 → OCR → 構造化データとして自動登録',
    result: '1枚あたり数秒で完了、入力ミスゼロ',
    tech: 'AI OCR / Firebase Firestore',
  },
];

/**
 * 自社実践の証明セクション
 *
 * Step 3-D §5 + Step 4.5 E-E-A-T 強化：
 * - 4ケースを「課題 → アプローチ → 結果 → 技術」の構造で
 * - これは sokoe AI Lab が貴社で再現できる手法そのもの
 *
 * Step 4.8 GEO/AEO：
 * - 数値（30分→数分、85%削減、月10時間削減）の連発
 * - 利用技術の固有名詞（Claude API、Firebase）でエンティティ密度
 * - Listicle 型構造（AI 引用率最大化）
 */
export function LabProof() {
  return (
    <Section variant="soft" spacing="lg" bordered>
      <Container>
        <div className="max-w-3xl mb-14 md:mb-16">
          <Label className="mb-5">SELF-PRACTICE</Label>
          <Heading level="h2" serif className="mb-6">
            自社施設で、
            <br className="hidden md:block" />
            すでに動いていること。
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85]">
            私たちが自社運営施設「レッツ倶楽部川西能勢口」で実装し、
            <br className="hidden md:block" />
            本番運用している AI 活用の実例です。
            <br className="hidden md:block" />
            <strong className="text-ink font-bold">これらすべてを、貴社で再現できます。</strong>
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {proofCases.map((c) => (
            <article
              key={c.number}
              className="bg-white border border-border rounded-[6px] p-8 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-6 pb-6 border-b border-border">
                <div className="md:col-span-1">
                  <p className="font-serif text-[36px] md:text-[42px] font-bold text-brand-red/40 leading-none">
                    {c.number}
                  </p>
                </div>
                <div className="md:col-span-11">
                  <h3 className="font-bold text-xl md:text-2xl text-ink leading-snug mb-4">
                    {c.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {c.tech.split(' / ').map((t) => (
                      <span
                        key={t}
                        className="inline-block text-[11px] font-semibold uppercase tracking-[0.05em] text-stone bg-soft-bg border border-border px-2 py-1 rounded-[3px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-mid mb-2">CHALLENGE</p>
                  <p className="text-charcoal text-[14px] leading-[1.85]">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-mid mb-2">APPROACH</p>
                  <p className="text-charcoal text-[14px] leading-[1.85]">{c.approach}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-brand-red mb-2">RESULT</p>
                  <p className="text-ink font-semibold text-[14px] leading-[1.85]">{c.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
