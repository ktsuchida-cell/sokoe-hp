import Image from 'next/image';
import Link from 'next/link';
import { Button } from './Button';
import { Container } from './Container';
import { Heading } from './Heading';
import { Label } from './Label';
import { Section } from './Section';

/**
 * sokoe Day LP のヒーローセクション（v3）。
 *
 * v3 の変更点（v2 からの差分）：
 *   - レイアウトを縦組み → 横並びへ修正（C-1 が正解だった）
 *   - 左 5 / 右 7 のカラム比率で、画像を text より広く取る
 *   - 見出し・リード・CTA は左カラム内で **左寄せ**（lg+）、モバイルでは中央寄せ
 *
 * 設計の意図：
 *   - 一画面でテキスト・CTA・プロダクト画像のすべてを伝える
 *   - 画像（タブレット UI）は画面右半分以上を専有し「良さが伝わる」サイズに
 *   - 短い見出し（A-3）と組み合わせることで、横並びでも折返し破綻しない
 *
 * 色アクセント：「現場発の、」は day-orange（#F49E0B）。
 */
export function DayHero() {
  return (
    <Section spacing="md" className="overflow-x-hidden">
      <Container size="wide">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* ─── 左：テキスト + CTA ─── */}
          <div className="text-center lg:col-span-5 lg:text-left">
            <Label className="mb-6 text-product-orange">SOKOE DAY ─ DAY-SERVICE OS</Label>

            <Heading
              level="h1"
              serif
              className="!text-4xl !leading-[1.15] md:!text-5xl lg:!text-6xl xl:!text-7xl"
            >
              <span className="text-product-orange">現場発の、</span>
              <br />
              デイサービスアプリ。
            </Heading>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-charcoal md:mt-8 md:text-lg md:leading-[1.85] lg:mx-0">
              介護施設を運営する会社がつくった、デイサービスのためのアプリ。 1
              日型・半日型・ハイブリッド型に柔軟に対応。
              紙の記録・書き写し・伝え漏れを、現場発の設計と AI で削減します。
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10 lg:justify-start">
              <Link href="/day-service/document/">
                <Button variant="primary">資料をダウンロード（無料）</Button>
              </Link>
              <Link href="/contact/?type=sokoe-day">
                <Button variant="secondary">相談する →</Button>
              </Link>
            </div>

            <p className="mt-6 text-sm text-charcoal-muted">
              自社運営施設で 2026 年 4 月から本番稼働中
            </p>
          </div>

          {/* ─── 右：プロダクト画像（大） ─── */}
          <div className="lg:col-span-7">
            <Image
              src="/images/day/hero-mockup.svg"
              alt="sokoe Day のホーム画面：バイタル・入浴・マシン訓練の進捗、本日の業務、To-Do、メモボード、申し送りが一画面で見える"
              width={1600}
              height={1100}
              priority
              unoptimized
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
