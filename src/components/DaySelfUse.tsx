import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { Activity, Contact, FileText, FolderOpen, type LucideIcon, Mic } from 'lucide-react';
import Image from 'next/image';

type Improvement = {
  icon: LucideIcon;
  categoryTag: string;
  title: string;
  body: string;
  image: { src: string; alt: string };
};

/**
 * 5 事例は施設長の痛点頻度順に並び替え。
 * design-notes/self-use-v2.md §5.2 参照。
 *
 * 画像は Pexels より取得（すべて Pexels License、人感なし）：
 *   - careplan: by Pexels 7567551（手 + 書類）
 *   - paperless: by Pexels 28182660（タブレット + 書類置き換え）
 *   - measurement: by Pexels 7947960（スマホとスマートウォッチ + データ表示）
 *   - recorder: by Pexels 11901224（デジタル音声レコーダー）
 *   - businesscard: by Pexels 5706020（名刺の束）
 */
const improvements: Improvement[] = [
  {
    icon: FileText,
    categoryTag: '通所介護計画書',
    title: 'ケアプラン作成が、転記ゼロに。',
    body: 'ケアマネから届くケアプランを、アプリで自動作成。月 20 名規模で 10 時間相当の転記が、ほぼなくなりました。',
    image: { src: '/images/selfuse/careplan.jpg', alt: '書類にペンで書き込むシーン' },
  },
  {
    icon: FolderOpen,
    categoryTag: 'マシン訓練',
    title: 'マシン訓練のバインダーが、紙ゼロに。',
    body: 'マシン設定も実施記録もアプリ内で完結。利用者さんごとに紙のバインダーを出す作業がなくなりました。',
    image: { src: '/images/selfuse/paperless.jpg', alt: '紙の書類を置き換えるタブレット' },
  },
  {
    icon: Activity,
    categoryTag: '個別評価',
    title: '測定値を入れるだけで、個別コメント生成。',
    body: 'TUG・握力の測定値を入力すれば、AI が優しい言葉でコメント化。30 名分の手書き作業が、入力だけで完了します。',
    image: { src: '/images/selfuse/measurement.jpg', alt: '健康・測定データの表示' },
  },
  {
    icon: Mic,
    categoryTag: '担当者会議',
    title: '議事録が、10 分の最終チェックに。',
    body: '録音をその場で文字起こし、AI が要約と発言者識別。1 件 1 時間の書き起こしが、要約のチェックだけに。',
    image: { src: '/images/selfuse/recorder.jpg', alt: 'デジタル音声レコーダー' },
  },
  {
    icon: Contact,
    categoryTag: 'ケアマネ営業',
    title: '名刺が、撮影だけで営業履歴に。',
    body: 'スマホで撮るだけで AI OCR が氏名・事業所・連絡先・役職を抽出。Excel への手入力作業がなくなりました。',
    image: { src: '/images/selfuse/businesscard.jpg', alt: '名刺の束' },
  },
];

/**
 * DaySelfUse セクション（自社導入後の改善効果）v2.2
 *
 * v2.1 からの変更：交互ズラシのカードに加えて「逆側の空きスペース」に
 * カードの内容と合致する画像を配置。雑誌記事風の「写真 + 本文」の左右
 * 交互レイアウトに発展。
 *
 *   - PC（md+）：奇数番（1,3）は flex-row-reverse で画像が左 / カードが右
 *                 偶数番（0,2,4）はそのまま画像が右 / カードが左
 *   - モバイル：縦並び（画像 → カードの順）
 *   - 5 番目（名刺）は 5 枚目だけ単独行になるが、左右配置を維持
 *   - 画像はすべて Pexels License、人感なし
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

        <ul className="mx-auto max-w-6xl space-y-10 md:space-y-16">
          {improvements.map((improvement, i) => {
            const Icon = improvement.icon;
            const alignRight = i % 2 === 1;
            return (
              <li
                key={improvement.title}
                className={
                  alignRight
                    ? 'flex flex-col md:flex-row-reverse md:items-center gap-6 md:gap-10'
                    : 'flex flex-col md:flex-row md:items-center gap-6 md:gap-10'
                }
              >
                {/* カード */}
                <div className="md:flex-1 md:max-w-[34rem] rounded-[10px] bg-white border border-border p-6 md:p-8 transition-shadow hover:shadow-md">
                  <div className="flex items-start gap-5">
                    <span
                      className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10"
                      aria-hidden="true"
                    >
                      <Icon className="h-6 w-6 text-brand-red" strokeWidth={1.75} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="mb-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-mid">
                        {improvement.categoryTag}
                      </p>
                      <h3 className="font-serif text-lg md:text-xl font-bold text-brand-red leading-snug">
                        {improvement.title}
                      </h3>
                      <div className="my-3 md:my-4 border-t border-border" aria-hidden="true" />
                      <p className="text-stone text-[14px] md:text-[15px] leading-[1.85]">
                        {improvement.body}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 画像（逆側） */}
                <div className="md:flex-1 md:max-w-[26rem]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] border border-border">
                    <Image
                      src={improvement.image.src}
                      alt={improvement.image.alt}
                      fill
                      sizes="(min-width: 768px) 26rem, 100vw"
                      className="object-cover"
                    />
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
