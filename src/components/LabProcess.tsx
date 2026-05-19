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
    description: '解決策となるロードマップをご提案します。',
  },
  {
    number: '04',
    icon: UserCheck,
    title: '研修・実践支援',
    description: '研修や実践支援を通じて現場の活用を支援します。',
  },
  {
    number: '05',
    icon: Repeat,
    title: '定着支援・\n改善伴走',
    description: '運用定着と改善を継続的に伴走します。',
  },
];

/**
 * LabProcess セクション「導入までの5ステップ」
 *
 * 5 列横並びカード（スマホは 1 列縦並び）。各カードに 01-05 番号、
 * lucide アイコン、太字タイトル、本文。
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

        <ol className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.number}
                className="flex flex-col rounded-[12px] bg-white border border-border p-6 transition-shadow hover:shadow-md"
              >
                <p className="font-serif text-xl md:text-2xl font-bold text-brand-red leading-none mb-3">
                  {step.number}
                </p>
                <h3 className="font-bold text-sm md:text-base text-ink leading-snug mb-3 whitespace-pre-line">
                  {step.title}
                </h3>
                <p className="text-stone text-[12px] md:text-[13px] leading-[1.85] mb-5 flex-1">
                  {step.description}
                </p>
                <div className="flex justify-center">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5 text-brand-red" strokeWidth={1.75} />
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
