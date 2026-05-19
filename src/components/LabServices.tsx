import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';

type ServiceCard = {
  number: string;
  name: string;
  description: string;
  tag: string;
};

const services: ServiceCard[] = [
  {
    number: '01',
    name: 'AI 導入研修',
    description: '職員のレベルに合う実施し、AI の理解と活用スキルを底上げします。',
    tag: '職員研修',
  },
  {
    number: '02',
    name: '業務 AI 化\nコンサルティング',
    description: '業務整理から改善企画まで、AI 活用の道筋を設計します。',
    tag: '業務整理',
  },
  {
    number: '03',
    name: 'プロンプト・\nテンプレート作成',
    description: '業務で使えるプロンプトやテンプレートを整備します。',
    tag: 'テンプレート化',
  },
  {
    number: '04',
    name: 'AI 定着・運用支援',
    description: '運用開始後も改善伴走し、成果が続く仕組みをつくります。',
    tag: '月次改善',
  },
];

/**
 * LabServices セクション「4 つの支援サービス」
 *
 * 参考画像準拠：
 *   - 見出し直下に短い赤アンダーライン
 *   - 4 カラム白カード、薄い border、静的（hover 動きなし）
 *   - 上段：赤 serif 番号 01-04
 *   - 中段：太字タイトル（2 行構造、leading 詰め）
 *   - 下段：グレー本文（12-13px、行間広め）
 *   - 最下段：薄ピンク pill タグ × 1（self-start）
 */
export function LabServices() {
  return (
    <Section spacing="lg" bordered id="services">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <Heading level="h2" serif>
            4 つの支援サービス
          </Heading>
          <div
            className="mt-5 mx-auto h-[3px] w-12 rounded-full bg-brand-red"
            aria-hidden="true"
          />
        </div>

        <ul className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service) => (
            <li
              key={service.number}
              className="flex flex-col rounded-[12px] bg-white border border-border p-6 md:p-7"
            >
              <p className="font-serif text-2xl md:text-3xl font-bold text-brand-red leading-none mb-3">
                {service.number}
              </p>
              <h3 className="font-bold text-[16px] md:text-lg text-ink leading-[1.5] mb-3 whitespace-pre-line">
                {service.name}
              </h3>
              <p className="text-stone text-[12px] md:text-[13px] leading-[1.85] mb-6 flex-1">
                {service.description}
              </p>
              <span className="inline-flex items-center self-start rounded-full bg-tint-pink/60 px-3 py-1 text-[11px] font-medium text-brand-red">
                {service.tag}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
