import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type ServiceCard = {
  number: string;
  name: string;
  type: string;
  duration: string;
  description: string;
  deliverables: string[];
  href: string;
};

const services: ServiceCard[] = [
  {
    number: '01',
    name: 'AI戦略策定',
    type: 'プロジェクト型',
    duration: '4〜8週間',
    description:
      '業務棚卸しからAI適用領域の特定、ROI試算、ロードマップ作成まで。経営層・現場を含めたワークショップで、貴社固有の戦略を策定します。',
    deliverables: ['業務棚卸しレポート', 'AI適用領域マッピング', 'ROI試算書', '12ヶ月ロードマップ'],
    href: '/consulting/strategy/',
  },
  {
    number: '02',
    name: 'AI導入支援',
    type: 'プロジェクト型',
    duration: '3〜6ヶ月',
    description:
      'プロトタイプ実装からパイロット運用、本番展開まで。私たちが自社で実装した手法をベースに、貴社の業務に合わせて構築します。',
    deliverables: [
      'プロトタイプ実装',
      'パイロット運用設計',
      'スタッフ向け運用マニュアル',
      '本番展開サポート',
    ],
    href: '/consulting/implementation/',
  },
  {
    number: '03',
    name: 'AI研修',
    type: '研修型',
    duration: '単発〜継続',
    description:
      '経営層 / 管理者 / 現場スタッフの3階層向けに、段階別のAI研修を提供。「AIで何ができるか」だけでなく、「明日からどう使うか」を伝えます。',
    deliverables: [
      '経営層向け戦略研修（半日）',
      '管理者向け実装研修（1日）',
      '現場スタッフ向け活用研修（半日）',
      '研修動画コンテンツ',
    ],
    href: '/consulting/training/',
  },
  {
    number: '04',
    name: '顧問契約（継続伴走）',
    type: '月額継続',
    duration: '6ヶ月〜',
    description:
      '月次レビューで継続伴走。AI 業界の最新動向、貴社施設での運用状況、次の改善点を毎月議論し、組織の AI 活用能力を継続的に高めます。',
    deliverables: [
      '月1回の経営層レビュー（2時間）',
      'AI業界動向レポート（月次）',
      'Slack / Teams 常時相談',
      '緊急時の現場対応',
    ],
    href: '/consulting/retainer/',
  },
];

/**
 * 4サービスセクション
 *
 * Step 3-D §4 + Step 4.7 §4.4 Service Schema 連動：
 * - 4サービスの明確な分類
 * - プロジェクト型 / 月額継続型を明示
 * - 期間と成果物を構造化（AI 引用率向上）
 *
 * Step 4.8 GEO/AEO：
 * - Listicle 型構造（AI 検索で支配的）
 * - 各サービスに「数値（期間）」「成果物リスト」
 * - エンティティ密度の高い説明
 */
export function LabServices() {
  return (
    <Section spacing="lg" bordered id="services">
      <Container>
        <div className="text-center mb-14 md:mb-16">
          <Label className="mb-5">SERVICES</Label>
          <Heading level="h2" className="mb-6">
            4 つのサービス。
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85] max-w-2xl mx-auto">
            戦略策定 → 導入支援 → 研修 → 継続伴走。
            <br />
            段階に応じて、最適なサービスをご提供します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {services.map((service) => (
            <Link key={service.number} href={service.href} className="group block">
              <article className="h-full bg-white border border-border rounded-[6px] p-8 md:p-10 hover:border-ink transition-colors">
                <div className="flex items-start justify-between mb-6 pb-6 border-b border-border">
                  <div>
                    <p className="font-serif text-[40px] md:text-[48px] font-bold text-brand-red/40 leading-none mb-3">
                      {service.number}
                    </p>
                    <h3 className="font-bold text-xl md:text-2xl text-ink leading-snug">
                      {service.name}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs uppercase tracking-[0.1em] text-mid mb-1">
                      {service.type}
                    </p>
                    <p className="text-sm font-semibold text-charcoal">{service.duration}</p>
                  </div>
                </div>

                <p className="text-stone text-[15px] leading-[1.85] mb-6">{service.description}</p>

                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.1em] text-mid mb-3">主な成果物</p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[14px] text-charcoal">
                        <span
                          className="w-1 h-1 rounded-full bg-brand-red mt-2 shrink-0"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-brand-red transition-colors">
                  詳しく見る
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
