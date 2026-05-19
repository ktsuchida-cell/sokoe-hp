import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import {
  ChevronRight,
  ClipboardList,
  type LucideIcon,
  MessageCircle,
  Repeat,
  Route,
  UserCheck,
} from 'lucide-react';
import { Fragment } from 'react';

type ProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const processSteps: ProcessStep[] = [
  {
    number: '1',
    icon: MessageCircle,
    title: 'お問い合わせ・\nヒアリング',
    description: '課題や状況を丁寧にお伺いします。',
  },
  {
    number: '2',
    icon: ClipboardList,
    title: '現場確認・\n課題整理',
    description: '現場ヒアリングで課題を明確化します。',
  },
  {
    number: '3',
    icon: Route,
    title: '施策設計・\nロードマップ作成',
    description: '優先施策とロードマップをご提案します。',
  },
  {
    number: '4',
    icon: UserCheck,
    title: '研修 / 実装支援',
    description: '研修実施と実装支援で現場での活用を支援します。',
  },
  {
    number: '5',
    icon: Repeat,
    title: '定着支援・\n改善伴走',
    description: '運用定着と改善を継続的に伴走します。',
  },
];

/**
 * LabProcess セクション「導入までの 5 ステップ」
 *
 * 参考画像準拠：
 *   - 見出し下に短い赤アンダーライン
 *   - 5 ステップを横並び、背景は soft（カードの border / shadow なし）
 *   - 各ステップ：薄ピンクの円番号バブル（赤文字 serif）→ タイトル → 説明 → 線画アイコン
 *   - ステップ間に小さな赤矢印 ▶ を配置（PC のみ）
 */
export function LabProcess() {
  return (
    <Section variant="soft" spacing="lg" bordered>
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <Heading level="h2" serif>
            導入までの 5 ステップ
          </Heading>
          <div
            className="mt-5 mx-auto h-[3px] w-12 rounded-full bg-brand-red"
            aria-hidden="true"
          />
        </div>

        <ol className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-y-10 gap-x-4 items-start">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Fragment key={step.number}>
                <li className="flex flex-col items-center text-center">
                  <span
                    className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-tint-pink/70 font-serif text-base font-bold text-brand-red"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <h3 className="font-bold text-[15px] md:text-base text-ink leading-[1.45] mb-2 whitespace-pre-line">
                    {step.title}
                  </h3>
                  <p className="text-stone text-[13px] md:text-[14px] leading-[1.75] mb-4">
                    {step.description}
                  </p>
                  <Icon className="h-8 w-8 text-charcoal" strokeWidth={1.4} />
                </li>

                {i < processSteps.length - 1 && (
                  <li
                    className="hidden lg:flex items-center justify-center self-stretch"
                    aria-hidden="true"
                  >
                    <ChevronRight className="h-5 w-5 text-brand-red" strokeWidth={2.5} />
                  </li>
                )}
              </Fragment>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
