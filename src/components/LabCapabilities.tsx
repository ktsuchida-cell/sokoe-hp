import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { ClipboardList, GraduationCap, type LucideIcon, Settings } from 'lucide-react';

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
    description:
      '職員のレベルに合わせた実践的な研修で、現場で使いこなせる力を育成します。',
    items: ['基礎理解から実践まで', '職種・役割別カリキュラム', '対面 / オンライン対応'],
  },
  {
    icon: ClipboardList,
    title: '業務整理',
    description:
      '業務を可視化し、AI で効率化できる領域を特定。ムリなく始められる設計を行います。',
    items: ['業務フロー可視化', '課題抽出・優先順位付け', '改善案のご提案'],
  },
  {
    icon: Settings,
    title: '運用設計',
    description: '安全に、継続的に使い続けられる仕組みとルールを設計します。',
    items: ['利用ルール・ガイドライン整備', '権限・情報管理設計', '定着の仕組みづくり'],
  },
];

/**
 * LabCapabilities セクション「sokoe AI Lab ができること」
 *
 * 参考画像準拠：
 *   - 見出し下に短い赤アンダーライン
 *   - 3 カラム白カード、薄い border、軽い hover shadow（=参考は静的）
 *   - 上段：左に線画赤アイコン、右にタイトル（横並び）
 *   - 中段：本文（グレー、行間広め）
 *   - 下段：薄ピンク pill タグを「縦」に並べる
 */
export function LabCapabilities() {
  return (
    <Section variant="soft" spacing="lg" bordered>
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <Heading level="h2" serif>
            sokoe AI Lab ができること
          </Heading>
          <div
            className="mt-5 mx-auto h-[3px] w-12 rounded-full bg-brand-red"
            aria-hidden="true"
          />
        </div>

        <ul className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <li
                key={cap.title}
                className="flex flex-col rounded-[12px] bg-white border border-border p-7 md:p-8"
              >
                {/* 上段：アイコン + タイトル横並び */}
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-7 w-7 text-brand-red" strokeWidth={1.6} />
                  <h3 className="font-bold text-xl md:text-2xl text-ink leading-none">
                    {cap.title}
                  </h3>
                </div>

                {/* 中段：本文 */}
                <p className="text-stone text-[13px] md:text-[14px] leading-[1.85] mb-5 flex-1">
                  {cap.description}
                </p>

                {/* 下段：タグを縦並び */}
                <ul className="flex flex-col items-start gap-2">
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
