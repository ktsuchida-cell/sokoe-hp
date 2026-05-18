import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import {
  ArrowDown,
  ArrowRight,
  CheckSquare,
  ClipboardList,
  Contact,
  FileText,
  Mic,
  PenLine,
  ScanLine,
  Smartphone,
  Sparkles,
  Wand2,
} from 'lucide-react';
import Link from 'next/link';
import type { ComponentType, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

type UseCase = {
  title: string;
  before: { icon: IconType; copy: string };
  after: { icon: IconType; copy: string };
};

/**
 * 5 事例は施設長の痛点頻度順に並び替え。
 * design-notes/self-use.md §7 参照。
 */
const useCases: UseCase[] = [
  {
    title: '通所介護計画書（ケアプラン）。月 10 時間が消えていた転記が、ほぼ無くなった。',
    before: {
      icon: FileText,
      copy: 'ケアマネから届く情報を、施設フォーマットへ毎月 1 人 30 分かけて転記。月 20 名規模で 10 時間相当が消えていた。',
    },
    after: {
      icon: Sparkles,
      copy: 'AI が施設フォーマットへ自動変換し、職員は内容を確認するだけ。転記そのものが業務から消えた。',
    },
  },
  {
    title: '利用者さんごとのマシン訓練バインダーが、紙ゼロに。',
    before: {
      icon: ClipboardList,
      copy: '利用者さんごとにマシン設定・実施記録のバインダーを用意し、毎回出し入れ・更新・紛失対応が発生していた。',
    },
    after: {
      icon: CheckSquare,
      copy: 'マシン設定と完了の有無をアプリ内で管理。バインダー印刷・差し替え・保管が不要になった。',
    },
  },
  {
    title: 'TUG・握力の測定値を入れるだけで、個別コメントと賞状 PDF が出る。',
    before: {
      icon: PenLine,
      copy: 'TUG・握力などの結果に対し、利用者さん 1 人ずつ職員が言葉を選んでコメントを書いていた。30 名分で概ね 2 時間半。',
    },
    after: {
      icon: Wand2,
      copy: '測定値を入力すれば、AI が利用者さんに伝わる優しい言葉でコメント化。賞状 PDF も同時に出力される。',
    },
  },
  {
    title: '担当者会議の議事録。1 時間の書き起こしが、10 分の最終チェックに。',
    before: {
      icon: Mic,
      copy: '会議後に録音を聞き直し、発言者を判別しながら書き起こすため、1 件で概ね 1 時間。会議件数が増えるほど夜の残業に積み上がっていた。',
    },
    after: {
      icon: Smartphone,
      copy: 'その場で文字起こしと話者識別が走り、AI が要約まで出す。担当は要約を読んで整えるだけ。',
    },
  },
  {
    title: '撮影 → 手入力 → ファイル化が、数秒で営業履歴に。',
    before: {
      icon: Contact,
      copy: 'もらった名刺を Excel に手入力し、後日「あの会社の誰だっけ？」を探す時間が積み重なっていた。',
    },
    after: {
      icon: ScanLine,
      copy: 'スマホで撮るだけで氏名・事業所・連絡先・役職を AI OCR が抽出。担当ご利用者リストにも自動で紐付く。',
    },
  },
];

/**
 * DaySelfUse セクション（自社導入後の改善効果）
 *
 * design-notes/self-use.md の設計判断に基づく：
 *   - 中央寄せ大見出し + リード + caption（出所明記）
 *   - 5 事例を Before/After 2 カラム比較カードで均等表示
 *   - Before = stone 系で「紙世界」、After = brand-red アクセントで「現役感」
 *   - 矢印は md 以上で水平、未満で垂直
 *   - 数値は自社運営施設での体感ベース（caption で明示、断定調を避ける）
 *   - このセクションには CTA を置かない（信頼形成段階）
 */
export function DaySelfUse() {
  return (
    <Section spacing="lg" bordered>
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <Label className="mb-5">AFTER INTRODUCTION</Label>
          <Heading level="h2" serif className="mb-6">
            自社導入後、
            <br className="hidden md:block" />
            現場はこう変わった。
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85]">
            sokoe Day は、自社運営する50名規模のデイサービス「
            <Link
              href="/about/"
              className="text-ink font-semibold underline-offset-4 hover:underline"
            >
              レッツ倶楽部川西能勢口
            </Link>
            」で 2026年4月から本番稼働中。
            <br className="hidden md:block" />
            代表が現役の施設長代理として、毎日 sokoe Day を使い、改善し、また使っています。
          </p>
        </div>

        <ul className="mx-auto max-w-4xl space-y-5 md:space-y-6">
          {useCases.map((useCase) => (
            <li
              key={useCase.title}
              className="rounded-[8px] bg-white border border-border p-6 md:p-8 transition-shadow hover:shadow-sm"
            >
              <h3 className="font-serif text-lg md:text-xl font-bold text-brand-red leading-snug mb-5 md:mb-6">
                {useCase.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-5 items-stretch">
                {/* Before */}
                <div className="rounded-[6px] bg-soft-bg border border-border/60 p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-sans text-[11px] tracking-[0.14em] font-semibold uppercase text-mid">
                      Before
                    </span>
                    <useCase.before.icon className="h-4 w-4 text-mid" aria-hidden="true" />
                  </div>
                  <p className="text-stone text-[14.5px] md:text-[15px] leading-[1.85]">
                    {useCase.before.copy}
                  </p>
                </div>

                {/* 矢印（md 以上で水平、未満で垂直） */}
                <div className="flex items-center justify-center text-brand-red" aria-hidden="true">
                  <ArrowRight className="hidden md:block h-6 w-6" />
                  <ArrowDown className="md:hidden h-5 w-5" />
                </div>

                {/* After */}
                <div className="rounded-[6px] bg-white border border-brand-red/30 border-l-[3px] border-l-brand-red p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-sans text-[11px] tracking-[0.14em] font-semibold uppercase text-brand-red">
                      After
                    </span>
                    <useCase.after.icon className="h-4 w-4 text-brand-red" aria-hidden="true" />
                  </div>
                  <p className="text-charcoal text-[14.5px] md:text-[15px] leading-[1.85]">
                    {useCase.after.copy}
                  </p>
                </div>
              </div>
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
