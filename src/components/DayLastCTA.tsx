import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import Link from 'next/link';

/**
 * sokoe Day LP の最終 CTA
 *
 * Step 4.6 プロダクトオレンジ戦略：
 * - コーポレートの赤ベタとは差別化、オレンジベタ背景
 * - sokoe Day 専用の CV として「資料DL」「デモ予約」
 */
export function DayLastCTA() {
  return (
    <section
      className="bg-product-orange text-white py-24 md:py-36"
      aria-label="sokoe Day お問い合わせ"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Label tone="white" className="mb-8">
            GET STARTED
          </Label>

          <Heading level="h2" tone="white" serif className="mb-10">
            まずは資料で、
            <br className="hidden md:block" />
            sokoe Day を知ってください。
          </Heading>

          <p className="text-white/90 text-base md:text-lg leading-[1.85] mb-12">
            30日間の無料トライアル付き。
            <br className="hidden md:block" />
            導入後の運用イメージまで、資料で詳しくお伝えします。
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/day-service/document/">
              <Button variant="white" size="lg">
                資料をダウンロード（無料）
              </Button>
            </Link>
            <Link href="/day-service/demo/">
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:text-white/70 border border-white/30 hover:border-white/50"
              >
                デモを予約
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
