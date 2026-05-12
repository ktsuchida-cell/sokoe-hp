import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import Image from 'next/image';
import Link from 'next/link';

/**
 * sokoe Day LP Hero セクション
 *
 * Step 3-C §2 + Step 4.6 プロダクトオレンジ戦略：
 * - 左右分割（コピー左、プロダクトUIモック右）
 * - オレンジは限定使用（メイン CTA とプロダクト名のみ）
 * - 「介護施設を運営する会社がつくった」を強調
 * - 自社運営施設での実証訴求（2026年4月から本番稼働中）
 */
export function DayHero() {
  return (
    <Section spacing="xl" variant="default">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* 左：コピーエリア */}
          <div className="lg:col-span-6">
            <Label tone="product-orange" className="mb-6">
              SOKOE DAY ── DAY-SERVICE OS
            </Label>

            <Heading level="h1" serif className="mb-8 leading-[1.15]">
              介護施設を、
              <br />
              運営する会社がつくった。
              <br />
              <span className="text-product-orange">デイサービスのため</span>
              の、
              <br />
              現場のためのアプリ。
            </Heading>

            <p className="text-stone text-base md:text-lg leading-[1.85] mb-10 max-w-xl">
              1日型・半日型・ハイブリッド型に完全対応。
              <br />
              紙運用・転記・伝達ミスを、現場発の設計と AI で消す。
              <br />
              自社運営施設で 2026年4月から本番稼働中。
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/day-service/document/">
                <Button variant="product" size="lg">
                  資料をダウンロード（無料）
                </Button>
              </Link>
              <Link href="/day-service/demo/">
                <Button variant="secondary" size="lg">
                  デモを予約
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-mid">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-product-orange" aria-hidden="true" />
                料金 ¥11,000〜/月
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-product-orange" aria-hidden="true" />
                半日型ネイティブ対応
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-product-orange" aria-hidden="true" />
                自社施設で運用中
              </span>
            </div>
          </div>

          {/* 右：プロダクトUIモック */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/hero/dayservice-ui-mockup-1672x941.webp"
                alt="sokoe Day のダッシュボード画面 ── 利用者数・出席率・本日の予定が一目で分かるUI"
                fill
                priority
                quality={90}
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
