import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import Link from 'next/link';

/**
 * sokoe Day LP の最終 CTA
 *
 * 戦略 C（コンテントドリブン型）：
 * - 中間 CTA（sticky）は資料 DL 中心でリード量を取りに行く
 * - この最終 CTA だけは「無料相談予約」を主に押し出し、高温層へシフト
 * - Step 4.6 プロダクトオレンジ戦略は維持（コーポレート赤との差別化）
 */
export function DayLastCTA() {
  return (
    <section
      className="bg-product-orange text-white py-24 md:py-36"
      aria-label="sokoe Day 無料相談"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Label tone="white" className="mb-8">
            GET STARTED
          </Label>

          <Heading level="h2" tone="white" serif className="mb-10">
            現場で動くかどうか、
            <br className="hidden md:block" />
            30 分で見極めてください。
          </Heading>

          <p className="text-white/90 text-base md:text-lg leading-[1.85] mb-12">
            代表（現役の施設長代理）が、御施設の運用に合うかを直接ご相談します。
            <br className="hidden md:block" />
            営業トークではなく、30 分で「導入の現実」を一緒に見極める時間です。
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/?type=sokoe-day">
              <Button variant="white" size="lg">
                無料相談を予約（30 分）
              </Button>
            </Link>
            <Link href="/day-service/document/">
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:text-white/70 border border-white/30 hover:border-white/50"
              >
                資料をダウンロード
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
