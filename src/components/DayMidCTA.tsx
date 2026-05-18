import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import Link from 'next/link';

/**
 * sokoe Day LP の中間 CTA
 *
 * Solution → Positioning の間に挿入し、共感 → 解決策提示が済んだ温度
 * 50-55°C の読者に、2 つの導線を提示する：
 *   - 主：お問い合わせ（直接相談）
 *   - 従：料金を確認する（#pricing アンカーへジャンプ）
 *
 * 視覚言語：
 *   - 背景 ink（黒）で LastCTA（オレンジ）と差別化、IT 系のキレを出す
 *   - LastCTA より小ぶりの spacing と Heading（h3）でセクション内 CTA に留める
 */
export function DayMidCTA() {
  return (
    <section className="bg-ink text-white py-20 md:py-24" aria-label="sokoe Day 中間 CTA">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Heading level="h3" tone="white" serif className="mb-6">
            気になった方は、
            <br className="hidden md:block" />
            こちらからどうぞ。
          </Heading>

          <p className="text-white/80 text-base md:text-lg leading-[1.85] mb-10">
            直接ご相談いただくか、
            <br className="hidden md:block" />
            まずは費用感をご確認いただけます。
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/?type=sokoe-day">
              <Button variant="white" size="lg">
                お問い合わせ
              </Button>
            </Link>
            <Link href="#pricing">
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:text-white/70 border border-white/30 hover:border-white/50"
              >
                料金を確認する →
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
