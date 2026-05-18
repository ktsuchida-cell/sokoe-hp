import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import Image from 'next/image';
import Link from 'next/link';

/**
 * sokoe Day LP の SelfUse 直後 CTA
 *
 * DaySelfUse の「自社施設での導入後の変化」を読み終えた、温度 60-70°C の
 * 読者向け。DayMidCTA（お問い合わせ / 料金）とは軸を分け、こちらは
 * 「相談（高温）」と「資料 DL（低温）」の 2 つを並列で受ける。
 *
 * 視覚言語：
 *   - 背景に「モダンオフィスの廊下で立ち話するコンサル」写真
 *     （Pexels License、現場で話している雰囲気のスタイリッシュなシーン）
 *   - 上に白オーバーレイ（white/70）で可読性を確保しつつ、シーン感を残す
 */
export function DaySelfUseCTA() {
  return (
    <section
      className="relative isolate overflow-hidden border-t border-border py-16 md:py-20"
      aria-label="sokoe Day 導入相談 CTA"
    >
      {/* 背景画像 + 白オーバーレイ */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/midcta/consult-hallway.jpg"
          alt=""
          fill
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" aria-hidden="true" />
      </div>

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/*
            1 行固定の見出し。文字数が長め（半角 sokoe Day 含めて約 22 字幅相当）
            のため、各ブレークポイントで折り返さないサイズに抑えてある。
          */}
          {/*
            1 行固定。文字幅は約 22 字相当（半角 sokoe Day 含む）。
            max-w-3xl ≈ 768px なので lg は 32px 以下に抑える必要がある。
          */}
          <Heading
            level="h2"
            serif
            className="mb-6 !text-[14px] sm:!text-[22px] md:!text-[28px] lg:!text-[32px]"
          >
            自社で動いた sokoe Day を、あなたの施設でも。
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
    </section>
  );
}
