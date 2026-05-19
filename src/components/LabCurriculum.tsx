import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import {
  BookOpen,
  type LucideIcon,
  PenTool,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

type CurriculumItem = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const curriculum: CurriculumItem[] = [
  {
    number: '01',
    icon: BookOpen,
    title: 'AI の基本理解',
    description: 'AI の仕組みやできること、医療・介護での活用事例を学ぶ。',
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: '医療介護現場での注意点',
    description: '情報管理・法令・運用上の注意点と、安全に使うためのポイントを理解。',
  },
  {
    number: '03',
    icon: Sparkles,
    title: '明日から使える AI 活用',
    description: '日々の業務で使える具体的な活用アイデアを実践演習。',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: '管理者向け業務改善',
    description: '業務全体を見直し、AI で生産性を高める視点を習得。',
  },
  {
    number: '05',
    icon: PenTool,
    title: 'プロンプト設計',
    description: '目的別のプロンプト設計方法と、テンプレート活用を習得。',
  },
  {
    number: '06',
    icon: RefreshCw,
    title: '定着支援',
    description: '振り返りと改善の仕組みから、現場に定着させる方法を学ぶ。',
  },
];

/**
 * LabCurriculum セクション「現場職員から管理者まで学べる、実務直結のAIカリキュラム」
 *
 * 黒背景（variant="ink"）、3 × 2 グリッドの白カード × 6。
 * 各カードに 01-06 の serif 番号、lucide アイコン、太字タイトル、本文。
 *
 * id="curriculum" は LabHero の「カリキュラムを見る」ボタンの anchor target。
 */
export function LabCurriculum() {
  return (
    <Section id="curriculum" variant="ink" spacing="lg" bordered className="scroll-mt-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <Heading level="h2" tone="white" serif>
            現場職員から管理者まで学べる、
            <br className="hidden md:block" />
            実務直結の AI カリキュラム
          </Heading>
        </div>

        <ul className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {curriculum.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.number}
                className="rounded-[12px] bg-white p-6 md:p-7 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <p className="font-serif text-2xl md:text-3xl font-bold text-brand-red leading-none">
                    {item.number}
                  </p>
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5 text-brand-red" strokeWidth={1.75} />
                  </span>
                </div>
                <h3 className="mb-3 font-bold text-base md:text-lg text-ink leading-snug">
                  {item.title}
                </h3>
                <p className="text-stone text-[13px] md:text-[14px] leading-[1.85]">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
