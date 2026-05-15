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

          <Heading level="h2" tone="white" serif className="mb-6">
            薬局・介護事業を運営する会社が、
            <br className="hidden md:block" />
            本気で現場を変える。
          </Heading>

          <p className="font-serif text-white text-2xl md:text-3xl leading-[1.4] mb-10">
            アプリ開発 × AI コンサルティング
          </p>

          <p className="text-white/90 text-base md:text-lg leading-[1.85] mb-12">
            紙運用、情報伝達の分断、終わらない記録。
            <br className="hidden md:block" />
            本来の仕事を取り戻すための、
            <br className="hidden md:block" />
            現場発のソフトウェアと AI コンサルティング。
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
