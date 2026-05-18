import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { Activity, Contact, FileText, FolderOpen, type LucideIcon, Mic } from 'lucide-react';

type Improvement = {
  icon: LucideIcon;
  categoryTag: string;
  title: string;
  body: string;
};

/**
 * 5 事例は施設長の痛点頻度順に並び替え。
 * design-notes/self-use-v2.md §5.2 参照。
 */
const improvements: Improvement[] = [
  {
    icon: FileText,
    categoryTag: '通所介護計画書',
    title: 'ケアプラン作成が、転記ゼロに。',
    body: 'ケアマネから届くケアプランを、アプリで自動作成。月 20 名規模で 10 時間相当の転記が、ほぼなくなりました。',
  },
  {
    icon: FolderOpen,
    categoryTag: 'マシン訓練',
    title: 'マシン訓練のバインダーが、紙ゼロに。',
    body: 'マシン設定も実施記録もアプリ内で完結。利用者さんごとに紙のバインダーを出す作業がなくなりました。',
  },
  {
    icon: Activity,
    categoryTag: '個別評価',
    title: '測定値を入れるだけで、個別コメント生成。',
    body: 'TUG・握力の測定値を入力すれば、AI が優しい言葉でコメント化。30 名分の手書き作業が、入力だけで完了します。',
  },
  {
    icon: Mic,
    categoryTag: '担当者会議',
    title: '議事録が、10 分の最終チェックに。',
    body: '録音をその場で文字起こし、AI が要約と発言者識別。1 件 1 時間の書き起こしが、要約のチェックだけに。',
  },
  {
    icon: Contact,
    categoryTag: 'ケアマネ営業',
    title: '名刺が、撮影だけで営業履歴に。',
    body: 'スマホで撮るだけで AI OCR が氏名・事業所・連絡先・役職を抽出。Excel への手入力作業がなくなりました。',
  },
];

/**
 * DaySelfUse セクション（自社導入後の改善効果）v2.3
 *
 * v2.2 までのレイアウト試行を経て、画像なし・3 列グリッドの「上 3 + 下 2」
 * 構成に落ち着いた版：
 *   - PC（md+）：1 行目 3 枚、2 行目 2 枚（中央寄せ）
 *   - スマホ：1 カラム縦並び
 *   - 各カードは brand-red 薄塗り円バッジ + 業務アイコン + 短いタイトル
 *     + hairline + 短い本文 + 業務カテゴリタグ
 *   - 数値は自社運営施設での体感ベース（caption で出所明記、断定調を避ける）
 *   - CTA はこのセクションに置かない（DaySelfUseCTA に独立）
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

        <ul className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-6">
          {improvements.map((improvement, i) => {
            const Icon = improvement.icon;
            // 上段（index 0,1,2）は md:col-span-2 で 3 枚並び
            // 下段（index 3,4）は md:col-span-2 + col-start-2 / col-start-4 で中央寄せ
            const placement =
              i === 3
                ? 'md:col-span-2 md:col-start-2'
                : i === 4
                  ? 'md:col-span-2 md:col-start-4'
                  : 'md:col-span-2';
            return (
              <li
                key={improvement.title}
                className={`${placement} rounded-[10px] bg-white border border-border p-6 md:p-7 transition-shadow hover:shadow-md`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5 text-brand-red" strokeWidth={1.75} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-mid">
                      {improvement.categoryTag}
                    </p>
                    <h3 className="font-serif text-base md:text-lg font-bold text-brand-red leading-snug">
                      {improvement.title}
                    </h3>
                    <div className="my-3 border-t border-border" aria-hidden="true" />
                    <p className="text-stone text-[14px] md:text-[15px] leading-[1.85]">
                      {improvement.body}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mx-auto max-w-3xl mt-12 md:mt-16 text-[12px] md:text-[13px] leading-[1.85] text-mid text-center">
          ※ 自社運営施設「レッツ倶楽部川西能勢口」（1 日平均約 30
          名規模）での日常運用に基づく体感ベースの目安です。2026 年 4
          月の稼働開始以降、施設長代理（当社代表）と職員の業務感覚に基づくもので、厳密な実測値ではありません。事業所の規模・業務手順により効果は異なります。
        </p>
      </Container>
    </Section>
  );
}
