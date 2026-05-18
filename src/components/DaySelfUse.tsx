import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';

type Improvement = {
  title: string;
  body: string;
};

/**
 * 5 事例は施設長の痛点頻度順に並び替え。
 * design-notes/self-use.md §7 参照。
 */
const improvements: Improvement[] = [
  {
    title: '通所介護計画書（ケアプラン）が、ほぼ自動に。',
    body: 'ケアマネさんから届く情報を、AI が施設フォーマットへ自動変換。職員は内容を確認するだけになり、月 20 名規模で 10 時間相当が消えていた転記業務が、ほぼなくなりました。',
  },
  {
    title: '利用者さんごとのマシン訓練バインダーが、不要に。',
    body: 'マシン設定や実施記録はアプリ内で完結。利用者さんごとに紙のバインダーを出し入れ・更新・保管する作業がなくなり、現場の机から紙束が減りました。',
  },
  {
    title: 'TUG・握力の測定値を入れるだけで、個別評価コメントと賞状 PDF が出る。',
    body: '測定値を入力すれば、AI が利用者さんに伝わる優しい言葉でコメント化。30 名分で概ね 2 時間半かかっていた手書きコメントが、入力だけで完了するようになりました。',
  },
  {
    title: '担当者会議の議事録が、10 分の最終チェックに。',
    body: '会議の録音をその場で文字起こしし、AI が要約と発言者識別を実行。1 件 1 時間かかっていた書き起こしが、要約を読んで整えるだけの最終チェックに変わりました。',
  },
  {
    title: '名刺が、撮影だけで営業履歴に。',
    body: 'スマホで撮るだけで AI OCR が氏名・事業所・連絡先・役職を抽出。担当ご利用者リストにも自動で紐付き、Excel への手入力作業がなくなりました。',
  },
];

/**
 * DaySelfUse セクション（自社導入後の改善効果）
 *
 * design-notes/self-use.md の設計判断に基づくが、オーナー指示（2026-05-18）で
 * Before/After 2 カラム比較は撤去し、After（導入後）だけを語るシンプルな
 * カードリストへ戻している：
 *   - 中央寄せ大見出し + リード + caption（出所明記）
 *   - 5 事例を白カードに「タイトル + 本文」で表示
 *   - 痛点頻度順は維持
 *   - 数値は自社運営施設での体感ベース（caption で明示、断定調を避ける）
 *   - 背景は variant="tint-pink"。隣接の DayPositioning（白）/ DayFeatures（soft）
 *     と色トーンを差別化し、「読ませる」フォーカスセクションとして際立たせる
 *   - CTA は直後の DaySelfUseCTA セクションに切り出している
 */
export function DaySelfUse() {
  return (
    <Section variant="tint-pink" spacing="lg" bordered>
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <Label className="mb-5">AFTER INTRODUCTION</Label>
          <Heading level="h2" serif>
            50 名規模のデイサービスの自社は
            <br className="hidden md:block" />
            導入後、現場はこう変わった
          </Heading>
        </div>

        <ul className="mx-auto max-w-3xl space-y-4 md:space-y-5">
          {improvements.map((improvement) => (
            <li
              key={improvement.title}
              className="rounded-[8px] bg-white border border-border p-6 md:p-8 transition-shadow hover:shadow-sm"
            >
              <h3 className="font-serif text-lg md:text-xl font-bold text-brand-red leading-snug mb-3">
                {improvement.title}
              </h3>
              <p className="text-stone text-[15px] md:text-base leading-[1.85]">
                {improvement.body}
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto max-w-3xl mt-10 md:mt-12 text-[12px] md:text-[13px] leading-[1.85] text-mid text-center">
          ※ 自社運営施設「レッツ倶楽部川西能勢口」（1 日平均約 30
          名規模）での日常運用に基づく体感ベースの目安です。2026 年 4
          月の稼働開始以降、施設長代理（当社代表）と職員の業務感覚に基づくもので、厳密な実測値ではありません。事業所の規模・業務手順により効果は異なります。
        </p>
      </Container>
    </Section>
  );
}
