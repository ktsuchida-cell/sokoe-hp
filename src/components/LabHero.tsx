import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { Check, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const badges = ['個人情報配慮', '現場職員向け研修', '管理者向け業務改善', '定着支援'];

const aiSupportItems = ['要約を作成中...', '情報を整理中...', '提案を生成中...'];

/**
 * sokoe AI Lab LP Hero セクション v3
 *
 * 参考デザインに合わせて、2 カラム構成（左：テキスト + CTA + バッジ、右：
 * 人物写真 + 浮きカード「AIサポート」）にリデザイン。
 *
 * - 見出し：2 段組（モノクロ + brand-red アクセント）
 * - リード：sokoe 仕様に「医療介護の現場」へ調整
 * - CTA：無料相談する（primary） / カリキュラムを見る（secondary）
 * - バッジ：tint-pink 系の薄塗りピル × 4
 * - 浮きカード：右下に絶対配置、AI が処理中の TODO + プログレスバー
 */
export function LabHero() {
  return (
    <Section spacing="xl">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* ─── 左：テキスト + CTA + バッジ ─── */}
          <div className="lg:col-span-6">
            <Heading
              level="h1"
              serif
              className="mb-6 !text-[28px] sm:!text-[34px] md:!text-[40px] lg:!text-[38px] xl:!text-[44px] !leading-[1.35]"
            >
              机上のAI研修で
              <br className="hidden sm:block" />
              終わらせない。
              <br />
              <span className="text-brand-red">医療介護の現場で</span>
              <br />
              <span className="text-brand-red">&ldquo;使われ続けるAI&rdquo;</span>
              をつくる。
            </Heading>

            <p className="text-stone text-base md:text-lg leading-[1.85] mb-8">
              AI研修から業務整理、プロンプト設計、ルール整備、運用定着まで一気通貫で支援。
              <br className="hidden md:block" />
              医療介護の現場に寄り添い、成果につながるAI活用を実現します。
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Link href="/contact/?type=sokoe-ailab">
                <Button variant="primary" size="lg">
                  無料相談する
                </Button>
              </Link>
              <Link href="#curriculum">
                <Button variant="secondary" size="lg">
                  カリキュラムを見る
                </Button>
              </Link>
            </div>

            <ul className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <li
                  key={badge}
                  className="inline-flex items-center rounded-full border border-coral-light bg-tint-pink/60 px-3 py-1.5 text-[12px] font-medium text-brand-red"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          {/* ─── 右：写真 + 浮きカード ─── */}
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[16px] shadow-xl">
              <Image
                src="/images/hero/lab-hero-team-laptop.jpg"
                alt="医療介護現場のスタッフが AI を活用しているシーン"
                fill
                priority
                quality={85}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* 浮きカード：AIサポート */}
            <div className="absolute -bottom-6 left-4 right-4 md:left-8 md:right-auto md:bottom-8 md:max-w-[300px] rounded-[12px] border border-border bg-white p-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-red/10">
                  <Sparkles className="h-3.5 w-3.5 text-brand-red" strokeWidth={2} />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-red">
                  AIサポート
                </span>
              </div>

              <ul className="space-y-2 mb-4 text-[13px] text-charcoal">
                {aiSupportItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 shrink-0 text-brand-red" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div>
                <p className="mb-1.5 flex items-center justify-between text-[11px] text-mid">
                  <span>ドキュメント要約</span>
                  <span className="font-bold text-charcoal">99%</span>
                </p>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-soft-bg">
                  <div className="h-full rounded-full bg-brand-red" style={{ width: '99%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
