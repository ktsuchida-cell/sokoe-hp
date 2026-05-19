import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { GraduationCap, type LucideIcon, Settings, Workflow } from 'lucide-react';

type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
};

const capabilities: Capability[] = [
  {
    icon: GraduationCap,
    title: 'AI 研修',
    description: '職員のレベルに合わせた実践的な研修で、現場で使いこなせるスキルを育成します。',
    items: ['基礎理解から実践へ', '職種・役割別カリキュラム', '対面 / オンライン対応'],
  },
  {
    icon: Workflow,
    title: '業務整理',
    description: '業務を可視化し、AI で効率化できる領域を特定。ムリなく続けられる設計を行います。',
    items: ['業務フローの可視化', '課題抽出・優先順位付け', '改善案のご提案'],
  },
  {
    icon: Settings,
    title: '運用設計',
    description: '安全に、継続的に使われる仕組みとルールを設計します。',
    items: ['利用ルール・ガイドライン整備', '権限・情報管理設計', '定着の仕組みづくり'],
  },
];

/**
 * LabCapabilities セクション「sokoe AI Lab ができること」
 *
 * 黒背景（variant="ink"）、3 カラムの白カード（AI 研修 / 業務整理 / 運用設計）。
 * 各カードに lucide アイコン、太字タイトル、本文、サブ項目 3 つの薄塗りタグ。
 */
export function LabCapabilities() {
  return (
    <Section variant="ink" spacing="lg" bordered>
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <Heading level="h2" tone="white" serif>
            sokoe AI Lab ができること
          </Heading>
        </div>

        <ul className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <li
                key={cap.title}
                className="flex flex-col rounded-[12px] bg-white p-7 md:p-8 transition-transform hover:-translate-y-1"
              >
                <span
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10"
                  aria-hidden="true"
                >
                  <Icon className="h-6 w-6 text-brand-red" strokeWidth={1.75} />
                </span>
                <h3 className="mb-3 font-bold text-xl md:text-2xl text-ink">{cap.title}</h3>
                <p className="text-stone text-[14px] md:text-[15px] leading-[1.85] mb-5 flex-1">
                  {cap.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center rounded-full bg-tint-pink/60 px-3 py-1 text-[11px] font-medium text-brand-red"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
