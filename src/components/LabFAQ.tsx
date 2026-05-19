import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { Plus } from 'lucide-react';

type LabFaqItem = {
  question: string;
  answer: string;
};

const labFaqs: LabFaqItem[] = [
  {
    question: '小規模事業所でも依頼できますか？',
    answer:
      'はい、対応可能です。小規模ほどキーマンへの研修と運用ルール整備が効きやすいため、貴所の業務量に合わせて支援内容を調整します。',
  },
  {
    question: '費用はどのくらいですか？',
    answer:
      '貴所の規模・業務量・支援範囲によって変動します。初回 30 分の無料相談でヒアリングのうえ、最適な構成と見積もりをご提案します。',
  },
  {
    question: 'どんな職員が受講できますか？',
    answer:
      '現場職員から管理者まで階層別カリキュラムをご用意しています。AI に不慣れな職員も、基礎から順に習得できる設計です。',
  },
  {
    question: '研修はオンラインでも受けられますか？',
    answer:
      '対面 / オンライン / ハイブリッドのいずれにも対応しています。施設の業務シフトや拠点状況に合わせて選択いただけます。',
  },
  {
    question: 'サポート期間はどのくらいですか？',
    answer:
      '導入研修のみのスポット対応から、3〜12 ヶ月の継続伴走まで柔軟に設計可能です。定着フェーズまで一気通貫で支援することをお勧めしています。',
  },
  {
    question: '情報の取り扱いは安全ですか？',
    answer:
      '個人情報保護法および医療・介護関連ガイドラインに準拠し、ご相談内容の取り扱いに関する取り決めを締結のうえ進めます。',
  },
];

/**
 * LabFAQ セクション「よくあるご質問」
 *
 * 2 列のアコーディオン風リスト。各項目は details/summary で開閉、
 * 閉じている状態で右端に + アイコン、開いている状態で - 風に回転する。
 */
export function LabFAQ() {
  return (
    <Section spacing="lg" bordered>
      <Container>
        <div className="text-center mb-12 md:mb-14">
          <Heading level="h2" serif>
            よくあるご質問
          </Heading>
        </div>

        <ul className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {labFaqs.map((faq) => (
            <li key={faq.question}>
              <details className="group rounded-[14px] bg-white border border-border transition-shadow open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 md:p-6">
                  <span className="text-charcoal text-[14px] md:text-[15px] font-medium leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-red/10 text-brand-red transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <Plus className="h-4 w-4" strokeWidth={2} />
                  </span>
                </summary>
                <div className="px-5 pb-5 md:px-6 md:pb-6">
                  <p className="text-stone text-[13px] md:text-[14px] leading-[1.95]">
                    {faq.answer}
                  </p>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
