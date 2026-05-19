import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { Check, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const badges = ['個人情報配慮', '現場職員向け研修', '管理者向け業務改善', '定着支援'];

const aiSupportItems = ['要約を作成中…', '情報を整理中…', '提案を生成中…'];

/**
 * sokoe AI Lab LP Hero セクション v4
 *
 * lp_reproduction_brief/CLAUDE_CODE_PROMPT.md の仕様書通り：
 *   - PC：左 48% / 右 52% の 2 カラム（lg:grid-cols-[48fr_52fr]）
 *   - 見出し 44-56px、line-height 1.25-1.35、weight 700-800
 *   - サブコピー 15-16px / line-height 1.9 / max-w 520px
 *   - CTA：赤 primary + 白 secondary、高さ 56px
 *   - チップ：白背景 pill、薄いボーダー、小さな赤チェックアイコン
 *   - 右画像：角丸 20px、サイズ 520-600px × 360-440px、強めの shadow
 *   - 浮きカード 2 枚別：
 *     1) AI サポート（チェック項目 3 つ）— 画像右下から少しはみ出す
 *     2) ドキュメント要約 89%（赤プログレスバー）— 画像下部
 */
export function LabHero() {
  return (
    <Section spacing="md">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[48fr_52fr] lg:gap-14 xl:gap-16">
          {/* ─── 左：見出し + サブコピー + CTA + チップ ─── */}
          <div>
            <Heading
              level="h1"
              serif
              className="mb-6 !text-[32px] sm:!text-[40px] md:!text-[48px] lg:!text-[48px] xl:!text-[56px] !leading-[1.3] !font-bold tracking-tight"
            >
              机上のAI研修で終わらせない。
              <br />
              <span className="text-brand-red">医療介護</span>の現場で
              <br />
              <span className="text-brand-red">&ldquo;使われ続けるAI&rdquo;</span>
              をつくる。
            </Heading>

            <p className="max-w-[520px] text-stone text-[15px] md:text-[16px] leading-[1.9] mb-8">
              AI研修から業務整理、プロンプト設計、ルール整備、運用定着まで一気通貫で支援。
              <br className="hidden md:block" />
              クリニック・介護施設・介護事業所の現場に寄り添い、成果につながるAI活用を実現します。
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link href="/contact/?type=sokoe-ailab">
                <Button variant="primary" size="lg" className="h-14 min-w-[180px] !rounded-[8px]">
                  無料相談する →
                </Button>
              </Link>
              <Link href="#curriculum">
                <Button variant="secondary" size="lg" className="h-14 min-w-[180px] !rounded-[8px]">
                  カリキュラムを見る
                </Button>
              </Link>
            </div>

            <ul className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <li
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-[12px] font-medium text-charcoal"
                >
                  <Check className="h-3 w-3 text-brand-red" strokeWidth={3} />
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          {/* ─── 右：画像 + 浮きカード 2 枚 ─── */}
          <div className="relative">
            <div
              className="relative aspect-[3/2] overflow-hidden rounded-[20px]"
              style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)' }}
            >
              <Image
                src="/images/hero/lab-hero-medical-meeting.jpg"
                alt="医療介護の現場で AI 活用を進めるチーム"
                fill
                priority
                quality={85}
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* 浮きカード 1：AI サポート（画像右下、少しはみ出す） */}
            <div
              className="absolute -bottom-6 left-4 md:left-auto md:-right-4 md:-bottom-6 w-[180px] md:w-[190px] rounded-[16px] border border-border bg-white p-[18px]"
              style={{ boxShadow: '0 12px 32px rgba(0, 0, 0, 0.10)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-red/10">
                  <Sparkles className="h-3 w-3 text-brand-red" strokeWidth={2.5} />
                </span>
                <span className="text-[11px] font-bold text-brand-red">AIサポート</span>
              </div>
              <ul className="space-y-1.5 text-[12px] text-charcoal">
                {aiSupportItems.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <Check className="h-3 w-3 shrink-0 text-brand-red" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 浮きカード 2：ドキュメント要約 89%（画像下部、AI カードの下） */}
            <div
              className="absolute -bottom-20 left-4 md:left-8 md:-bottom-16 w-[200px] md:w-[210px] rounded-[14px] border border-border bg-white p-4"
              style={{ boxShadow: '0 12px 32px rgba(0, 0, 0, 0.10)' }}
            >
              <p className="mb-2 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-charcoal">ドキュメント要約</span>
                <span className="font-bold text-brand-red">89%</span>
              </p>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-soft-bg">
                <div className="h-full rounded-full bg-brand-red" style={{ width: '89%' }} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
