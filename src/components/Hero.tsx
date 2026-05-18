import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import Link from 'next/link';

/**
 * コーポレートTOP Hero セクション
 *
 * - 背景に自社制作の SVG（建築 + 光 + brand-red アクセント）を CSS background で配置
 *   写真ではなくベクターなので、軽量・任意拡大耐性・ブランド色との整合を確保
 * - 上に微弱な白オーバーレイ + 縦グラデーションで CTA 周辺の可読性を担保
 * - 方針: design-notes 内のデザイナーエージェントレポート（2026-05-19）に基づく
 */
export function Hero() {
  return (
    <div className="relative isolate">
      {/* 背景 SVG + 白系オーバーレイ */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero/corporate-hero-generated.svg')" }}
          aria-hidden="true"
        />
        {/* SVG が見えるよう、上半分は透明、下半分だけ白寄りで CTA の可読性を確保 */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-white/45"
          aria-hidden="true"
        />
      </div>

      <Section spacing="xl" className="!bg-transparent">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            {/*
              全画面 2 行固定。最長行「薬局・介護事業を運営する会社が、」が
              約 17 全角字相当なので、各ブレークポイントで折り返さない最大
              サイズに抑えてある。
            */}
            <Heading
              level="display"
              serif
              className="mb-6 !text-[19px] sm:!text-[32px] md:!text-[40px] lg:!text-[52px]"
            >
              薬局・介護事業を運営する会社が、
              <br />
              本気で現場を変える。
            </Heading>

            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal leading-[1.4] mb-12">
              アプリ開発 × AI コンサルティング
            </p>

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
    </div>
  );
}
