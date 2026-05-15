import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import Link from 'next/link';

/**
 * コーポレートTOP Hero セクション
 *
 * Step 4 デザイン方針：
 * - センター集中型レイアウト
 * - セリフ体（Playfair Display + Noto Serif JP）の大見出し
 * - 編集メディア風のラベル（uppercase tracking）
 * - 80% 以上が白＋ニュートラル、赤は CTA のみに限定
 */
export function Hero() {
  return (
    <Section spacing="xl">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <Label className="mb-8">SOKOE ─ 株式会社 sokoe</Label>

          <Heading level="display" serif className="mb-10">
            介護施設を運営する会社が、
            <br className="hidden md:block" />
            医療・介護の現場を
            <br className="hidden md:block" />
            ソフトウェアと AI で変える。
          </Heading>

          <p className="text-stone text-lg md:text-xl leading-[1.85] mb-12 max-w-2xl mx-auto">
            紙運用、情報伝達の分断、終わらない記録。
            <br className="hidden md:block" />
            本来の仕事を取り戻すための、
            <br className="hidden md:block" />
            現場発のソフトウェアと AI コンサルティング。
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/day-service/">
              <Button variant="primary" size="lg">
                サービスを見る
              </Button>
            </Link>
            <Link href="/about/">
              <Button variant="secondary" size="lg">
                私たちについて
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
