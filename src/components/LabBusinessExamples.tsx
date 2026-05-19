import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import {
  BookOpen,
  ClipboardList,
  FileText,
  GraduationCap,
  type LucideIcon,
  MessageSquare,
  Newspaper,
} from 'lucide-react';

type Example = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const examples: Example[] = [
  {
    icon: FileText,
    title: '議事録作成',
    description: '会議内容や打ち合わせ資料の整理、議事録を効率化。',
  },
  {
    icon: MessageSquare,
    title: '申し送り文作成',
    description: '引き継ぎ内容を整理し、分かりやすく作成。',
  },
  {
    icon: GraduationCap,
    title: '研修資料作成',
    description: '研修資料のたたき台を短時間で作成。',
  },
  {
    icon: BookOpen,
    title: 'マニュアル整備',
    description: '手順や FAQ を整理し、マニュアル化を促進。',
  },
  {
    icon: Newspaper,
    title: '採用文作成',
    description: '求人票・採用ページの文章を効果的に作成。',
  },
  {
    icon: ClipboardList,
    title: '報告書整理',
    description: '各種報告書の整理・構成整理をサポート。',
  },
];

/**
 * LabBusinessExamples セクション「AI で改善できる業務の例」
 *
 * 6 業務カードを 3×2 グリッドで表示。各カードに lucide アイコン + 太字タイトル + 本文。
 * 医療介護のオフィス業務を抽象化した汎用的なリスト。
 */
export function LabBusinessExamples() {
  return (
    <Section spacing="lg" bordered>
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <Heading level="h2" serif>
            AI で改善できる業務の例
          </Heading>
        </div>

        <ul className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {examples.map((example) => {
            const Icon = example.icon;
            return (
              <li
                key={example.title}
                className="flex items-start gap-4 rounded-[12px] bg-white border border-border p-6 md:p-7 transition-shadow hover:shadow-md"
              >
                <span
                  className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5 text-brand-red" strokeWidth={1.75} />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="mb-2 font-bold text-base md:text-lg text-ink leading-snug">
                    {example.title}
                  </h3>
                  <p className="text-stone text-[13px] md:text-[14px] leading-[1.85]">
                    {example.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
