import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import Link from 'next/link';

/**
 * sokoe Day LP の SelfUse 直後 CTA
 *
 * DaySelfUse の「自社施設での導入後の変化」を読み終えた、温度 60-70°C の
 * 読者向け。DayMidCTA（お問い合わせ / 料金）とは軸を分け、こちらは
 * 「相談（高温）」と「資料 DL（低温）」の 2 つを並列で受ける。
 *
 * 視覚言語：
 *   - 上の DaySelfUse（tint-pink）から白へ抜けることで「読み物 → 行動」の
 *     切替感を出す
 *   - LastCTA（オレンジベタ）とも色帯がぶつからない
 */
export function DaySelfUseCTA() {
  return (
    <Section spacing="md" bordered aria-label="sokoe Day 導入相談 CTA">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Heading level="h3" serif className="mb-6">
            自社で動いた sokoe Day を、
            <br className="hidden md:block" />
            あなたの施設でも。
          </Heading>

          <p className="text-stone text-base md:text-lg leading-[1.85] mb-10">
            代表が施設長代理として、運用の相談に直接対応します。
            <br className="hidden md:block" />
            まずは資料か、無料相談から。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact/?type=sokoe-day">
              <Button variant="primary" size="lg">
                導入の相談を予約する
              </Button>
            </Link>
            <Link href="/day-service/document/">
              <Button variant="secondary" size="lg">
                資料をダウンロード
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
