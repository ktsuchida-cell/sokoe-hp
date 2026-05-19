import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { Lock, type LucideIcon, RefreshCw, Users } from 'lucide-react';

type Pain = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const pains: Pain[] = [
  {
    number: '01',
    icon: Users,
    title: '職員ごとに\nITリテラシーが違う',
    description: 'AIに不慣れな職員も多く、研修だけでは現場での活用にばらつきが出てしまう。',
  },
  {
    number: '02',
    icon: Lock,
    title: '個人情報や\n医療介護情報の扱いが不安',
    description: '情報漏洩や法令対応の観点で、安全に使うルールや体制が整っていない。',
  },
  {
    number: '03',
    icon: RefreshCw,
    title: '研修を受けても\n現場に定着しない',
    description: '忙しい現場では後回しになり、気づけば元の業務フローに戻ってしまう。',
  },
];

/**
 * AI Lab LP「AI 導入の壁」セクション
 *
 * Hero 直後で課題提示。参考画像の特徴を反映：
 *   - 見出し下に短い赤アンダーライン（中央寄せ、幅 48px）
 *   - 薄い赤の serif 番号 01-03（不透明度低めで主張を抑える）
 *   - 本文 12-13px（参考のサイズに合わせる）
 *   - 右下に薄ピンク円バッジ + 線画アイコン（細め、控えめ）
 *   - hover shadow は撤去して静的な軽さを保つ
 */
export function LabPains() {
  return (
    <Section variant="soft" spacing="lg" bordered>
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <Heading level="h2" serif>
            AI 導入で、こんな壁はありませんか？
          </Heading>
          <div
            className="mt-5 mx-auto h-[3px] w-12 rounded-full bg-brand-red"
            aria-hidden="true"
          />
        </div>

        <ul className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {pains.map((pain) => {
            const Icon = pain.icon;
            return (
              <li
                key={pain.number}
                className="flex flex-col rounded-[12px] bg-white border border-border p-7 md:p-8"
              >
                <p className="mb-3 font-serif text-2xl md:text-3xl font-bold text-brand-red/50 leading-none">
                  {pain.number}
                </p>
                <h3 className="mb-3 font-bold text-[15px] md:text-base text-ink leading-[1.5] whitespace-pre-line">
                  {pain.title}
                </h3>
                <p className="text-stone text-[12px] md:text-[13px] leading-[1.85] mb-6 flex-1">
                  {pain.description}
                </p>
                <div className="flex justify-end">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-tint-pink/60"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5 text-brand-red/70" strokeWidth={1.3} />
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
