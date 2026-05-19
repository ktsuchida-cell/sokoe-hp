import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const badges = [
  '医療・介護特化',
  '現場の声に基づく設計',
  '個人情報保護の徹底対策',
  '安心のサポート',
];

/**
 * sokoe AI Lab LP Hero セクション v5
 *
 * 参考画像「ファーストビュー」準拠：
 *   - 2 カラム（左 48% / 右 52%）
 *   - 左：見出し（3 行）+ サブコピー + CTA 2 つ + チップ 4 つ
 *   - 右：日本人 3 名 + ノートPC の笑顔シーン（浮きカードは撤去）
 *   - 見出しの赤強調：「医療・介護」と「"使われ続けるAI"」
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
              className="mb-6 !text-[30px] sm:!text-[38px] md:!text-[46px] lg:!text-[44px] xl:!text-[52px] !leading-[1.35] !font-bold tracking-tight"
            >
              忙しいAIは怖くて使えない、
              <br />
              <span className="text-brand-red">医療・介護</span>の現場で
              <br />
              <span className="text-brand-red">&ldquo;使われ続けるAI&rdquo;</span>
              をつくる。
            </Heading>

            <p className="max-w-[520px] text-stone text-[15px] md:text-[16px] leading-[1.9] mb-8">
              sokoe AI Lab は、現場の声から生まれた AI サービスで、
              <br className="hidden md:block" />
              医療・介護における「記録・情報整理・業務支援」を
              <br className="hidden md:block" />
              やさしく、確実にサポートします。
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link href="/contact/?type=sokoe-ailab">
                <Button variant="primary" size="lg" className="h-14 min-w-[180px] !rounded-[8px]">
                  無料相談する →
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="secondary" size="lg" className="h-14 min-w-[180px] !rounded-[8px]">
                  AIで、もっと効率化
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

          {/* ─── 右：写真のみ（浮きカードは撤去） ─── */}
          <div className="relative">
            <div
              className="relative aspect-[3/2] overflow-hidden rounded-[20px]"
              style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)' }}
            >
              <Image
                src="/images/hero/lab-hero-jp-medical-team.jpg"
                alt="医療介護の現場で AI 活用を進めるチーム"
                fill
                priority
                quality={85}
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
