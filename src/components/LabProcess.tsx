import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import {
  ClipboardList,
  type LucideIcon,
  MessageCircle,
  Repeat,
  Route,
  UserCheck,
} from 'lucide-react';

type ProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'お問い合わせ・\nヒアリング',
    description: '課題や状況を丁寧にお伺いします。',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: '現場確認・\n課題整理',
    description: '現場ヒアリングで課題を明確化します。',
  },
  {
    number: '03',
    icon: Route,
    title: '施策設計・\nロードマップ作成',
    description: '優先施策とロードマップをご提案します。',
  },
  {
    number: '04',
    icon: UserCheck,
    title: '研修 / 実装支援',
    description: '研修実施と実装支援で現場での活用を支援します。',
  },
  {
    number: '05',
    icon: Repeat,
    title: '定着支援・\n改善伴走',
    description: '運用定着と改善を継続的に伴走します。',
  },
];

/**
 * LabProcess セクション「導入までの 5 ステップ」
 *
 * 5 ステップを横並びタイムラインで表示。
 * カード上部の番号バブル列に水平赤線を引いて視覚的に「流れ」を表現する
 * （PC のみ）。スマホは縦並び。
 */
export function LabProcess() {
  return (
    <Section variant="soft" spacing="lg" bordered>
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <Heading level="h2" serif>
            導入までの 5 ステップ
          </Heading>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* 横の赤い接続線（PC のみ表示）。番号バブル中央（top-7）に揃える */}
          <div
            className="hidden lg:block absolute left-[10%] right-[10%] top-7 h-px bg-brand-red/30"
            aria-hidden="true"
          />

          <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.number} className="flex flex-col items-center text-center">
                  {/* 番号バブル */}
                  <span
                    className="relative z-10 mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white font-serif text-lg font-bold shadow-md"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  {/* カード本体 */}
                  <div className="flex w-full flex-1 flex-col items-center rounded-[16px] bg-white border border-border p-6 transition-shadow hover:shadow-md">
                    <h3 className="font-bold text-base md:text-[17px] text-ink leading-snug mb-3 whitespace-pre-line">
                      {step.title}
                    </h3>
                    <p className="text-stone text-[12px] md:text-[13px] leading-[1.85] mb-5 flex-1">
                      {step.description}
                    </p>
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5 text-brand-red" strokeWidth={1.5} />
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
