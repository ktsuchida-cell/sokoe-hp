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
    description: '情報管理・法令・倫理など、安全に使うためのポイントを理解。',
  },
  {
    number: '03',
    icon: Sparkles,
    title: '明日から使える AI 活用',
    description: '日々の業務で使える具体的な活用アイデアと実践演習。',
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
    description: '振り返りと改善の仕組みで、現場に定着させる方法を学ぶ。',
  },
];

/**
 * LabCurriculum セクション「現場職員から管理者まで学べる、実務直結の AI カリキュラム」
 *
 * 黒背景、3 × 2 の横長カードグリッド（参考画像準拠）。
 * 各カード：左にアイコン円バッジ + 番号、右にタイトル + 本文（横並び）。
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

        <ul className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
          {curriculum.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.number}
                className="rounded-[8px] bg-white/[0.04] border border-white/10 p-5 transition-colors hover:border-white/30"
              >
                <div className="flex items-start gap-4">
                  {/* 左：アイコン円 */}
                  <span
                    className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-red/15"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5 text-brand-red" strokeWidth={1.75} />
                  </span>

                  {/* 右：番号(小) + タイトル + 本文 */}
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-[13px] font-bold text-brand-red leading-none mb-1.5 tracking-wider">
                      {item.number}
                    </p>
                    <h3 className="mb-2 font-bold text-[15px] md:text-base text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-[12px] md:text-[13px] leading-[1.8]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
