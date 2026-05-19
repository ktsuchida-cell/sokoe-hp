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
 * AI Lab LP「AI導入の壁」セクション
 *
 * Hero 直後で課題提示。3 カラムカードに 01-03 の番号、太字タイトル、本文、
 * 右下に brand-red の薄塗り円バッジ + アイコン。
 */
export function LabPains() {
  return (
    <Section variant="soft" spacing="lg" bordered>
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <Heading level="h2" serif>
            AI 導入で、こんな壁はありませんか？
          </Heading>
        </div>

        <ul className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {pains.map((pain) => {
            const Icon = pain.icon;
            return (
              <li
                key={pain.number}
                className="flex flex-col rounded-[10px] bg-white border border-border p-7 md:p-8 transition-shadow hover:shadow-md"
              >
                <p className="mb-4 font-serif text-2xl md:text-3xl font-bold text-brand-red leading-none">
                  {pain.number}
                </p>
                <h3 className="mb-4 font-bold text-lg md:text-xl text-ink leading-snug whitespace-pre-line">
                  {pain.title}
                </h3>
                <p className="text-stone text-[14px] md:text-[15px] leading-[1.85] mb-6 flex-1">
                  {pain.description}
                </p>
                <div className="flex justify-end">
                  <span
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6 text-brand-red" strokeWidth={1.5} />
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
