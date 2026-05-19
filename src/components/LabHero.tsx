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
 * sokoe AI Lab LP Hero セクション v6
 *
 * 参考画像「明るい白背景＋右側に日本人 3 名のシーン」準拠：
 *   - フルブリード背景画像を `object-right` で右寄せ配置
 *   - 左→右の白グラデオーバーレイで左カラムのテキスト可読性を確保
 *   - テキストは左寄せ、画像が見える右側はクリーンに保つ
 *   - 浮きカードは無し（参考画像になし）
 */
export function LabHero() {
  return (
    <div className="relative isolate">
      {/* 背景画像 + 左→右白グラデオーバーレイ */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero/lab-hero-jp-3team.jpg"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* デスクトップ：左側を強く白く、右に向かって透過 */}
        <div
          className="absolute inset-0 hidden md:block bg-gradient-to-r from-white via-white/90 to-white/25"
          aria-hidden="true"
        />
        {/* モバイル：縦方向の白フェード（読みやすさ優先） */}
        <div
          className="absolute inset-0 md:hidden bg-gradient-to-b from-white/90 via-white/80 to-white/50"
          aria-hidden="true"
        />
      </div>

      <Section spacing="lg" className="!bg-transparent">
        <Container>
          <div className="max-w-[600px]">
            <Heading
              level="h1"
              serif
              className="mb-6 !text-[30px] sm:!text-[38px] md:!text-[44px] lg:!text-[44px] xl:!text-[52px] !leading-[1.35] !font-bold tracking-tight"
            >
              忙しいAIは怖くて使えない、
              <br />
              <span className="text-brand-red">医療・介護</span>の現場で
              <br />
              <span className="text-brand-red">&ldquo;使われ続けるAI&rdquo;</span>
              をつくる。
            </Heading>

            <p className="max-w-[480px] text-stone text-[15px] md:text-[16px] leading-[1.9] mb-8">
              sokoe AI Lab は、現場の声から生まれた AI サービスで、
              <br className="hidden md:block" />
              医療・介護における「記録・情報整理・業務支援」を
              <br className="hidden md:block" />
              やさしく、確実にサポートします。
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link href="/contact/?type=sokoe-ailab">
                <Button
                  variant="primary"
                  size="lg"
                  className="h-14 min-w-[180px] !rounded-[8px]"
                >
                  無料相談する →
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  variant="secondary"
                  size="lg"
                  className="h-14 min-w-[180px] !rounded-[8px]"
                >
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
        </Container>
      </Section>
    </div>
  );
}
