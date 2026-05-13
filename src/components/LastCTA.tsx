import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import Link from 'next/link';

/**
 * Last CTA セクション
 *
 * Step 3-D / Step 4 §6 で確定：
 * - 赤ベタ背景（Brand Red ベタ）
 * - 白文字、白ボタン
 * - 中央寄せ・贅沢な余白
 * - 「凄み × 共感」を両立するコピー
 */
export function LastCTA() {
  return (
    <section className="bg-brand-red text-white py-24 md:py-36" aria-label="お問い合わせ">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Label tone="white" className="mb-8">
            CONTACT
          </Label>

          <Heading level="h2" tone="white" serif className="mb-10">
            ベンダーが書いた仕様書ではなく、
            <br className="hidden md:block" />
            施設長が書いた仕様書。
          </Heading>

          <p className="text-white/90 text-base md:text-lg leading-[1.85] mb-12">
            代表は現役の施設長代理として、毎日 sokoe Day を使っています。
            <br className="hidden md:block" />
            「うちの場合、何ができるんだろう」を、30 分のオンライン相談で。
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/">
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
